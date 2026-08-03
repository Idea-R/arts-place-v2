import { Navigation } from "@/components/navigation"
import { EventsHero } from "@/components/events-hero"
import { EventTypes } from "@/components/event-types"
import { EventGallery } from "@/components/event-gallery"
import { EventBookingForm } from "@/components/event-booking-form"
import { CateringMenu } from "@/components/catering-menu"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Events & Catering - Art's Place | Private Parties & Corporate Events",
  description:
    "Host your special event at Art's Place. Our beautiful outdoor patio seats up to 50 guests. Perfect for private parties, corporate events, wine dinners, and celebrations.",
}

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <EventsHero />
      <EventTypes />
      <EventGallery />
      <EventBookingForm />
      <CateringMenu />
      <Footer />
    </main>
  )
}
