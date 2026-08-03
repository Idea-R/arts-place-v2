import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { FeaturedItems } from "@/components/featured-items"
import { EventSpaceSection } from "@/components/event-space-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { LocationSection } from "@/components/location-section"
import { EmailSignup } from "@/components/email-signup"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <FeaturedItems />
      <EventSpaceSection />
      <TestimonialsSection />
      <LocationSection />
      <EmailSignup />
      <Footer />
    </main>
  )
}
