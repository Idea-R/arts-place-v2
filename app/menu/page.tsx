import { Navigation } from "@/components/navigation"
import { MenuHero } from "@/components/menu-hero"
import { MenuCategories } from "@/components/menu-categories"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Menu - Art's Place | Authentic Italian Restaurant Rohnert Park",
  description:
    "Explore our authentic Italian menu featuring the Pasta King's award-winning recipes, wood-fired pizzas, fresh pasta, and traditional Italian dishes.",
}

export default function MenuPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <MenuHero />
      <MenuCategories />
      <Footer />
    </main>
  )
}
