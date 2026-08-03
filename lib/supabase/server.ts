import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

/**
 * Supabase client for server components, route handlers, and server actions.
 *
 * The cookie setter is wrapped in try/catch on purpose: server components are not
 * allowed to set cookies, and calling this from one would otherwise throw. Session
 * refresh is handled by middleware, so swallowing it there is correct rather than
 * lossy.
 */
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            )
          } catch {
            // Called from a server component. Middleware refreshes the session.
          }
        },
      },
    },
  )
}
