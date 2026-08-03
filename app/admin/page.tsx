import { redirect } from "next/navigation"
import AdminLogin from "@/components/admin-login"

export default function AdminPage() {
  // In a real app, check authentication status here
  const isAuthenticated = false // This would come from your auth system

  if (isAuthenticated) {
    redirect("/admin/dashboard")
  }

  return <AdminLogin />
}
