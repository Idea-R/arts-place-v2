import { createBrowserClient } from "@supabase/ssr"

/**
 * Supabase client for browser components.
 *
 * Uses the publishable key, which is safe to ship to the browser: every table is
 * protected by row level security, so this key can read published menu content and
 * nothing else until someone signs in. Writes are rejected by the database, not by
 * the UI, which is what makes hiding a button a convenience rather than the control.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  )
}
