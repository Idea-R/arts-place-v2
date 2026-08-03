import AdminDashboard from "@/components/admin-dashboard"

export default function DashboardPage() {
  return (
    <>
      {/* This route is reachable directly, and the dashboard behind it is a visual
          mock: it makes no API calls, saves nothing, and its figures are sample data.
          The banner stays until the dashboard is actually wired to real content. */}
      <div className="bg-amber-100 text-amber-950 text-sm px-4 py-3 text-center border-b border-amber-300">
        <strong>Interface preview.</strong> Nothing on this screen is saved, and the numbers shown are sample data.
        Menu content is edited in <code className="font-mono">lib/content.ts</code>.
      </div>
      <AdminDashboard />
    </>
  )
}
