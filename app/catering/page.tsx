import { Navigation } from "@/components/navigation"
import { CateringHero } from "@/components/catering-hero"
import { CateringServices } from "@/components/catering-services"
import { CateringPackages } from "@/components/catering-packages"
import { CateringPricing } from "@/components/catering-pricing"
import { CateringTestimonials } from "@/components/catering-testimonials"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Catering Services - Art's Place | Off-Site Italian Catering",
  description:
    "Professional Italian catering services by Art's Place. Off-site catering, pickup, and delivery for corporate events, weddings, and special occasions throughout Sonoma County.",
}

export default function CateringPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <CateringHero />
      <CateringServices />
      <CateringPackages />
      <CateringPricing />
      <CateringTestimonials />
      <Footer />
    </main>
  )
}
