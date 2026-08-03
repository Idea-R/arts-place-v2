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
    "The story of Art Ibleto, the Pasta King: from Sesta Godano near Genoa to the Sonoma County Fair, and then to Art's Place in Rohnert Park.",
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
