import { Navigation } from "@/components/navigation"
import { MenuHero } from "@/components/menu-hero"
import { MenuCategories } from "@/components/menu-categories"
import { Footer } from "@/components/footer"
import { getMenu } from "@/lib/menu-data"

export const metadata = {
  title: "Menu - Art's Place | Authentic Italian Restaurant Rohnert Park",
  description:
    "The menu at Art's Place in Rohnert Park: the Pasta King's recipes, wood fired pizza, and fresh pasta.",
}

// The menu is edited by the restaurant, so it is read per request rather than baked
// in at build time. A price change in the dashboard shows up on the next page load.
export const dynamic = "force-dynamic"

export default async function MenuPage() {
  const { categories, live } = await getMenu()

  return (
    <main className="min-h-screen">
      <Navigation />
      <MenuHero />
      <MenuCategories categories={categories} live={live} />
      <Footer />
    </main>
  )
}
