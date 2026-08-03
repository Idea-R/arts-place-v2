import { Navigation } from "@/components/navigation"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"
import { LocationMap } from "@/components/location-map"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Art's Place - Hours, Location & Reservations | Rohnert Park Italian Restaurant",
  description:
    "Contact Art's Place for reservations, directions, and inquiries. Located at 563 Rohnert Park Expressway West. Call (707) 588-2787 or visit us today.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
      <Footer />
    </main>
  )
}
