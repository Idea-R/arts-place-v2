import { Navigation } from "@/components/navigation"
import { AboutHero } from "@/components/about-hero"
import { PastaKingStory } from "@/components/pasta-king-story"
import { RestaurantTimeline } from "@/components/restaurant-timeline"
import { AwardsSection } from "@/components/awards-section"
import { CommunityInvolvement } from "@/components/community-involvement"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Art's Place - The Pasta King's Story | Italian Restaurant Rohnert Park",
  description:
    "Learn about Art Ibleto, the Pasta King, and the 40+ year history of Art's Place. Discover our awards, community involvement, and authentic Italian family tradition.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <AboutHero />
      <PastaKingStory />
      <RestaurantTimeline />
      <AwardsSection />
      <CommunityInvolvement />
      <Footer />
    </main>
  )
}
