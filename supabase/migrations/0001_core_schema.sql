-- Art's Place: core schema.
--
-- The menu, the specials, and the operational facts all live here so the restaurant
-- can change them without a developer. This replaces lib/content.ts as the source of
-- truth for anything the team is expected to edit.
--
-- Two conventions carried over from the codebase, both deliberate:
--
-- 1. PRICES ARE TEXT, NOT NUMERIC. This menu has tiers and qualifiers that a number
--    destroys: "Small $20 / Medium $24 / Large $29", "3 for $12", "Half Order $6.50".
--    Storing numeric would force us to flatten those. Display fidelity wins here;
--    nothing on this site does arithmetic on a price.
--
-- 2. FACTS CARRY A CONFIRMED FLAG. Anything the client has not verified is marked
--    unconfirmed, renders with a visible marker, and stays out of structured data.
--    We never publish an unverified hour, price, or phone number.

create extension if not exists "pgcrypto";

-- Keeps updated_at honest without the app having to remember.
create or replace function set_updated_at()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ---------------------------------------------------------------------------
-- Team
-- ---------------------------------------------------------------------------

-- Mirrors auth.users. A row here is what makes someone staff; having an auth
-- account is not enough on its own, so an accidental signup grants nothing.
create table public.team_members (
  id          uuid primary key references auth.users(id) on delete cascade,
  email       text not null,
  full_name   text,
  role        text not null default 'staff' check (role in ('owner', 'manager', 'staff')),
  is_active   boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create trigger team_members_updated_at
  before update on public.team_members
  for each row execute function set_updated_at();

-- Used by every policy below. SECURITY DEFINER so the check itself is not subject
-- to RLS, which would otherwise recurse.
create or replace function public.is_team_member()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.team_members
    where id = (select auth.uid()) and is_active
  );
$$;

-- ---------------------------------------------------------------------------
-- Menu
-- ---------------------------------------------------------------------------

create table public.menu_categories (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null unique,
  name         text not null,
  note         text,
  sort_order   integer not null default 0,
  is_published boolean not null default true,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create trigger menu_categories_updated_at
  before update on public.menu_categories
  for each row execute function set_updated_at();

create table public.menu_items (
  id           uuid primary key default gen_random_uuid(),
  category_id  uuid not null references public.menu_categories(id) on delete cascade,
  name         text not null,
  description  text,
  price        text not null,
  is_signature boolean not null default false,
  is_available boolean not null default true,
  photo_url    text,
  sort_order   integer not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create trigger menu_items_updated_at
  before update on public.menu_items
  for each row execute function set_updated_at();

create index menu_items_category_idx on public.menu_items (category_id, sort_order);

-- ---------------------------------------------------------------------------
-- Daily specials
-- ---------------------------------------------------------------------------

-- Date-ranged rather than a single "today" flag, so the kitchen can queue next
-- week's specials in advance and they appear and retire on their own.
-- ends_on null means it runs until someone ends it.
create table public.daily_specials (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  description text,
  price       text,
  photo_url   text,
  starts_on   date not null default current_date,
  ends_on     date,
  is_active   boolean not null default true,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint specials_date_order check (ends_on is null or ends_on >= starts_on)
);

create trigger daily_specials_updated_at
  before update on public.daily_specials
  for each row execute function set_updated_at();

create index daily_specials_window_idx on public.daily_specials (starts_on, ends_on)
  where is_active;

-- ---------------------------------------------------------------------------
-- Operational facts (hours, contact), each with its confirmed flag
-- ---------------------------------------------------------------------------

create table public.site_settings (
  key          text primary key,
  value        jsonb not null,
  is_confirmed boolean not null default false,
  updated_at   timestamptz not null default now()
);

create trigger site_settings_updated_at
  before update on public.site_settings
  for each row execute function set_updated_at();

-- ---------------------------------------------------------------------------
-- Change log
-- ---------------------------------------------------------------------------

-- A shared mailbox login is realistic for a restaurant, so "who changed the price"
-- needs an answer. Append only: no update or delete policy exists.
create table public.change_log (
  id          bigserial primary key,
  actor_email text,
  entity      text not null,
  entity_id   text,
  action      text not null,
  detail      jsonb,
  created_at  timestamptz not null default now()
);

create index change_log_recent_idx on public.change_log (created_at desc);

-- ---------------------------------------------------------------------------
-- Row level security
-- ---------------------------------------------------------------------------
-- Public read is deliberately narrow: only published categories, only available
-- items, only specials inside their date window. Everything else needs a team
-- member. Writes are team-only across the board.

alter table public.team_members    enable row level security;
alter table public.menu_categories enable row level security;
alter table public.menu_items      enable row level security;
alter table public.daily_specials  enable row level security;
alter table public.site_settings   enable row level security;
alter table public.change_log      enable row level security;

-- Team
create policy team_read_self_and_team on public.team_members
  for select to authenticated using (public.is_team_member());
create policy team_manage on public.team_members
  for all to authenticated using (public.is_team_member()) with check (public.is_team_member());

-- Menu categories
create policy categories_public_read on public.menu_categories
  for select to anon, authenticated using (is_published);
create policy categories_team_write on public.menu_categories
  for all to authenticated using (public.is_team_member()) with check (public.is_team_member());

-- Menu items
create policy items_public_read on public.menu_items
  for select to anon, authenticated using (
    is_available and exists (
      select 1 from public.menu_categories c
      where c.id = category_id and c.is_published
    )
  );
create policy items_team_write on public.menu_items
  for all to authenticated using (public.is_team_member()) with check (public.is_team_member());

-- Specials
create policy specials_public_read on public.daily_specials
  for select to anon, authenticated using (
    is_active
    and starts_on <= current_date
    and (ends_on is null or ends_on >= current_date)
  );
create policy specials_team_write on public.daily_specials
  for all to authenticated using (public.is_team_member()) with check (public.is_team_member());

-- Settings
create policy settings_public_read on public.site_settings
  for select to anon, authenticated using (true);
create policy settings_team_write on public.site_settings
  for all to authenticated using (public.is_team_member()) with check (public.is_team_member());

-- Change log: team can read, team can append, nobody can rewrite history.
create policy changelog_team_read on public.change_log
  for select to authenticated using (public.is_team_member());
create policy changelog_team_insert on public.change_log
  for insert to authenticated with check (public.is_team_member());
