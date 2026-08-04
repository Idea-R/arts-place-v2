import { Navigation } from "@/components/navigation"
import { CateringHonest } from "@/components/catering-honest"
import { GroupsSection } from "@/components/groups-section"
import { Footer } from "@/components/footer"

// The catering packages, per-person pricing, and client testimonials that used to
// live here were all invented, and one testimonial was credited to the Sonoma County
// Chamber, a real organisation. See components/catering-honest.tsx for the framing:
// catering runs through the founding family, not the restaurant.
export const metadata = {
  title: "Catering - Art's Place | Sonoma County",
  description:
    "Catering from the family behind Art's Place, the food that fed the Sonoma County Fair for decades.",
}

export default function CateringPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CateringHonest />
      <GroupsSection />
      <Footer />
    </main>
  )
}
