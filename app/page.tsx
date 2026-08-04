import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { TodaysSpecials } from "@/components/todays-specials"
import { FeaturedItems } from "@/components/featured-items"
import { GroupsSection } from "@/components/groups-section"
import { WoodOvenFeature } from "@/components/wood-oven-feature"
import { ReviewCards } from "@/components/review-cards"
import { LocationSection } from "@/components/location-section"
import { EmailSignup } from "@/components/email-signup"
import { Footer } from "@/components/footer"

// Specials are date-driven and edited by the restaurant, so the homepage is rendered
// per request rather than baked at build time.
export const dynamic = "force-dynamic"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      {/* Renders only when a special is actually running today. */}
      <TodaysSpecials />
      <FeaturedItems />
      <WoodOvenFeature />
      <GroupsSection />
      <ReviewCards />
      <LocationSection />
      <EmailSignup />
      <Footer />
    </main>
  )
}

