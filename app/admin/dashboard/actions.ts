"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"

/**
 * Server actions for the team dashboard.
 *
 * Every one of these re-checks the caller server side. The dashboard hides controls
 * from people who should not use them, but hiding a button is not access control:
 * these actions run on the server and the database enforces row level security
 * underneath them, so a hand-crafted request gets the same answer as the UI.
 */

type Result = { ok: true } | { ok: false; error: string }

async function requireTeamMember() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return { supabase, user: null, member: null }

  const { data: member } = await supabase
    .from("team_members")
    .select("id, email, full_name, role")
    .eq("id", user.id)
    .maybeSingle()

  return { supabase, user, member }
}

async function log(
  supabase: any,
  actor: string | null,
  entity: string,
  entityId: string | null,
  action: string,
  detail: Record<string, unknown>,
) {
  // Best effort. A failed audit write must never lose the user's actual change.
  await supabase.from("change_log").insert({
    actor_email: actor,
    entity,
    entity_id: entityId,
    action,
    detail,
  })
}

function refresh() {
  revalidatePath("/admin/dashboard")
  revalidatePath("/menu")
  revalidatePath("/")
}

export async function saveMenuItem(formData: FormData): Promise<Result> {
  const { supabase, member } = await requireTeamMember()
  if (!member) return { ok: false, error: "Not signed in as a team member." }

  const id = (formData.get("id") as string) || null
  const name = (formData.get("name") as string || "").trim()
  const price = (formData.get("price") as string || "").trim()
  const description = (formData.get("description") as string || "").trim()
  const categoryId = formData.get("category_id") as string
  const isSignature = formData.get("is_signature") === "on"
  const isAvailable = formData.get("is_available") !== "off"

  if (!name) return { ok: false, error: "A dish needs a name." }
  if (!price) return { ok: false, error: "A dish needs a price. Write it exactly as it appears on the menu, for example \"$19\" or \"Small $20 / Large $29\"." }
  if (!categoryId) return { ok: false, error: "Pick a category." }

  const row = {
    name,
    price,
    description: description || null,
    category_id: categoryId,
    is_signature: isSignature,
    is_available: isAvailable,
  }

  if (id) {
    const { error } = await supabase.from("menu_items").update(row).eq("id", id)
    if (error) return { ok: false, error: error.message }
    await log(supabase, member.email, "menu_item", id, "update", row)
  } else {
    const { data, error } = await supabase.from("menu_items").insert(row).select("id").single()
    if (error) return { ok: false, error: error.message }
    await log(supabase, member.email, "menu_item", data?.id ?? null, "create", row)
  }

  refresh()
  return { ok: true }
}

export async function deleteMenuItem(id: string): Promise<Result> {
  const { supabase, member } = await requireTeamMember()
  if (!member) return { ok: false, error: "Not signed in as a team member." }

  const { data: existing } = await supabase.from("menu_items").select("name, price").eq("id", id).maybeSingle()
  const { error } = await supabase.from("menu_items").delete().eq("id", id)
  if (error) return { ok: false, error: error.message }

  await log(supabase, member.email, "menu_item", id, "delete", existing ?? {})
  refresh()
  return { ok: true }
}

/** Quick availability toggle, for when the kitchen runs out mid-service. */
export async function toggleItemAvailability(id: string, available: boolean): Promise<Result> {
  const { supabase, member } = await requireTeamMember()
  if (!member) return { ok: false, error: "Not signed in as a team member." }

  const { error } = await supabase.from("menu_items").update({ is_available: available }).eq("id", id)
  if (error) return { ok: false, error: error.message }

  await log(supabase, member.email, "menu_item", id, available ? "mark_available" : "mark_sold_out", {})
  refresh()
  return { ok: true }
}

export async function saveSpecial(formData: FormData): Promise<Result> {
  const { supabase, member } = await requireTeamMember()
  if (!member) return { ok: false, error: "Not signed in as a team member." }

  const id = (formData.get("id") as string) || null
  const title = (formData.get("title") as string || "").trim()
  const description = (formData.get("description") as string || "").trim()
  const price = (formData.get("price") as string || "").trim()
  const startsOn = (formData.get("starts_on") as string) || null
  const endsOn = (formData.get("ends_on") as string) || null

  if (!title) return { ok: false, error: "A special needs a title." }
  if (endsOn && startsOn && endsOn < startsOn) {
    return { ok: false, error: "The end date is before the start date." }
  }

  const row: Record<string, unknown> = {
    title,
    description: description || null,
    price: price || null,
    ends_on: endsOn || null,
    is_active: true,
  }
  if (startsOn) row.starts_on = startsOn

  if (id) {
    const { error } = await supabase.from("daily_specials").update(row).eq("id", id)
    if (error) return { ok: false, error: error.message }
    await log(supabase, member.email, "special", id, "update", row)
  } else {
    const { data, error } = await supabase.from("daily_specials").insert(row).select("id").single()
    if (error) return { ok: false, error: error.message }
    await log(supabase, member.email, "special", data?.id ?? null, "create", row)
  }

  refresh()
  return { ok: true }
}

export async function endSpecial(id: string): Promise<Result> {
  const { supabase, member } = await requireTeamMember()
  if (!member) return { ok: false, error: "Not signed in as a team member." }

  const { error } = await supabase.from("daily_specials").update({ is_active: false }).eq("id", id)
  if (error) return { ok: false, error: error.message }

  await log(supabase, member.email, "special", id, "end", {})
  refresh()
  return { ok: true }
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
}
