import { getActiveSpecials } from "@/lib/menu-data"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

/**
 * Today's specials, straight from the database.
 *
 * Renders nothing at all when there are none. An empty "no specials today" band is
 * worse than silence on a restaurant homepage, and the section reappearing on its own
 * is the point: the kitchen schedules a special with a date range and the site picks
 * it up without anyone touching the code.
 */
export async function TodaysSpecials() {
  const specials = await getActiveSpecials()
  if (specials.length === 0) return null

  return (
    <section className="py-14 bg-primary/5 border-y border-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-widest font-semibold mb-3">
            <CalendarDays className="h-4 w-4" />
            On today
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Today&rsquo;s Specials
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {specials.map((s) => (
            <Card key={s.id} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-serif text-xl font-semibold text-foreground">{s.title}</h3>
                  {s.price && (
                    <span className="font-bold text-primary whitespace-nowrap">{s.price}</span>
                  )}
                </div>
                {s.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
