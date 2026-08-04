import Link from "next/link"
import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * The wood fired oven, modern build.
 *
 * Every menu they print mentions it and it is the one piece of equipment a customer
 * would recognise across the room, so it earns a place on the homepage.
 *
 * Only what their own menu says: an Italian wood burning oven, pizzas cooked in it,
 * and the three toppings actually listed. No temperature, no age, no origin story.
 * The earlier build invented an oven installed in 1992, which is exactly the kind of
 * detail that sounds harmless and is not.
 */
export function WoodOvenFeature() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl shadow-lg">
            {/* Placeholder imagery, see public/placeholder/README.md. */}
            <img
              src="/placeholder/wood-fired-oven.jpg"
              alt="The wood fired oven, lit"
              className="h-72 w-full object-cover md:h-96"
            />
          </div>

          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Flame className="h-4 w-4" aria-hidden />
              The oven
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-3">
              Wood fired, every pizza
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Every pizza here comes out of an Italian wood burning oven. It is the
                loudest, hottest corner of the kitchen, and the reason the crust tastes
                the way it does: blistered, a little charred at the edge, done in the
                time it takes to pour a beer.
              </p>
              <p>
                Margherita with Roma tomatoes and fresh mozzarella, pesto chicken,
                Italian sausage with roasted red peppers. Same oven, one after another,
                all night.
              </p>
            </div>
            <Link href="/menu">
              <Button size="lg" className="mt-7">
                See the pizzas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
