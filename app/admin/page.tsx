import { Suspense } from "react"
import { redirect } from "next/navigation"
import AdminLogin from "@/components/admin-login"
import { createClient } from "@/lib/supabase/server"

// Reads the session, so it cannot be prerendered at build time.
export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Already signed in: skip the form.
  if (user) redirect("/admin/dashboard")

  // AdminLogin reads ?next= to return people where they were headed, and
  // useSearchParams needs a Suspense boundary above it.
  return (
    <Suspense fallback={null}>
      <AdminLogin />
    </Suspense>
  )
}
