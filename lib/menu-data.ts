import { createClient } from "@/lib/supabase/server"
import { menu as fallbackMenu, site as staticSite, type MenuCategory } from "@/lib/content"

/**
 * Reading the live menu.
 *
 * The menu now lives in the database so the restaurant can edit it themselves. The
 * transcribed data in lib/content.ts stays as a fallback: if the database is
 * unreachable, the site serves the last known good menu rather than an empty page.
 * A restaurant site showing no food is worse than one showing slightly stale food.
 */

export type LiveCategory = MenuCategory & { id: string }

export type Special = {
  id: string
  title: string
  description: string | null
  price: string | null
  photo_url: string | null
  starts_on: string
  ends_on: string | null
}

export async function getMenu(): Promise<{ categories: LiveCategory[]; live: boolean }> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("menu_categories")
      .select("id, slug, name, note, sort_order, menu_items(id, name, description, price, is_signature, photo_url, sort_order)")
      .eq("is_published", true)
      .order("sort_order")

    if (error || !data || data.length === 0) return { categories: fallbackToLive(), live: false }

    const categories: LiveCategory[] = data.map((c: any) => ({
      id: c.id,
      slug: c.slug,
      name: c.name,
      note: c.note ?? undefined,
      items: (c.menu_items ?? [])
        .sort((a: any, b: any) => a.sort_order - b.sort_order)
        .map((i: any) => ({
          name: i.name,
          description: i.description ?? undefined,
          price: i.price,
          signature: i.is_signature,
          photoUrl: i.photo_url ?? undefined,
        })),
    }))

    return { categories, live: true }
  } catch {
    return { categories: fallbackToLive(), live: false }
  }
}

export async function getActiveSpecials(): Promise<Special[]> {
  try {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from("daily_specials")
      .select("id, title, description, price, photo_url, starts_on, ends_on")
      .order("starts_on", { ascending: false })

    if (error || !data) return []
    return data as Special[]
  } catch {
    return []
  }
}

/**
 * Operational facts. Unconfirmed values still render with a visible marker, exactly
 * as they do in the static content file, so moving to a database did not quietly
 * drop the discipline that keeps unverified hours off the page.
 */
export async function getSettings(): Promise<Record<string, { value: any; confirmed: boolean }>> {
  const fallback = {
    phone: { value: staticSite.phone.value, confirmed: staticSite.phone.confirmed },
    street_address: { value: staticSite.streetAddress.value, confirmed: staticSite.streetAddress.confirmed },
    hours: { value: staticSite.hours.value, confirmed: staticSite.hours.confirmed },
  }
  try {
    const supabase = await createClient()
    const { data, error } = await supabase.from("site_settings").select("key, value, is_confirmed")
    if (error || !data) return fallback

    const out: Record<string, { value: any; confirmed: boolean }> = {}
    for (const row of data as any[]) {
      out[row.key] = { value: row.value, confirmed: row.is_confirmed }
    }
    return out
  } catch {
    return fallback
  }
}

function fallbackToLive(): LiveCategory[] {
  return fallbackMenu.value.map((c) => ({ ...c, id: c.id }))
}
