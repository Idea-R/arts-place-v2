import { DemoAdminLogin } from "@/components/demo-admin-login"

export default function AdminDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream to-white py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-playfair font-bold text-italian-red mb-4">Restaurant Management System</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive dashboard for managing Art's Place Restaurant operations, from menu updates to event
            bookings and image management.
          </p>
        </div>
        <DemoAdminLogin />
      </div>
    </div>
  )
}
