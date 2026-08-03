import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { timeline } from "@/lib/content"

export function RestaurantTimeline() {
  // Sourced milestones only, from lib/content.ts. The nine entries that used to live
  // here were invented, including an award from a named real organization.
  const timelineEvents = timeline.value

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">The Story So Far</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From a village near Genoa to a fair stand that fed a whole county, and then to a room on Rohnert Park
            Expressway.
          </p>
          {!timeline.confirmed && (
            <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Dates to confirm with the family</p>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 bg-background border-4 border-primary rounded-full items-center justify-center flex-shrink-0 relative z-10">
                    <span className="font-bold text-primary text-sm">{event.year}</span>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 border-none shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="md:hidden text-primary font-bold text-sm mb-2">{event.year}</div>
                          <h3 className="font-serif text-xl font-semibold text-foreground">{event.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
