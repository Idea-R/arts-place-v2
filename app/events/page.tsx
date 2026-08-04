import { Navigation } from "@/components/navigation"
import { GroupsSection } from "@/components/groups-section"
import { CateringHonest } from "@/components/catering-honest"
import { Footer } from "@/components/footer"

// This route used to be the events pitch: a patio "seating up to 50", four event
// packages, a gallery of events that never happened, and a booking form for a
// booking system that does not exist. The restaurant runs no events programme.
//
// The URL is kept because it is linked from the nav and the footer, but everything
// on it is now true: reservations for large groups, walk in for small tables, and
// what the room actually offers.
export const metadata = {
  title: "Groups & Catering - Art's Place | Rohnert Park",
  description:
    "Reservations for large groups at Art's Place in Rohnert Park, and catering from the family behind the Pasta King.",
}

export default function GroupsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <GroupsSection />
      <CateringHonest />
      <Footer />
    </main>
  )
}
