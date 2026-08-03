import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

/**
 * Refreshes the Supabase session on every request and gates the dashboard.
 *
 * The redirect here is a convenience, not the security boundary. Row level security
 * in the database is what actually stops a non-team-member from reading or writing
 * anything, so even if someone reached a dashboard route, the queries behind it
 * would come back empty and every write would be rejected.
 */
export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          response = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  // getUser() revalidates against the auth server. Do not swap this for getSession(),
  // which trusts the cookie and can be spoofed.
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const path = request.nextUrl.pathname
  const isDashboard = path.startsWith("/admin") && path !== "/admin"

  if (isDashboard && !user) {
    const url = request.nextUrl.clone()
    url.pathname = "/admin"
    url.searchParams.set("next", path)
    return NextResponse.redirect(url)
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
