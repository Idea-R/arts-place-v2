import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RestaurantTimeline() {
  const timelineEvents = [
    {
      year: "1983",
      title: "Art's Place Opens",
      description:
        "Art Ibleto opens the doors of Art's Place with a simple mission: serve authentic Italian cuisine with love and passion.",
      milestone: true,
    },
    {
      year: "1987",
      title: "First Award Recognition",
      description:
        "Wins first place at the Sonoma County Harvest Fair for the famous Spaghetti Half & Half, earning the nickname 'Pasta King.'",
      milestone: false,
    },
    {
      year: "1992",
      title: "Wood-Fired Oven Installation",
      description:
        "Installs authentic Italian wood-fired oven, bringing traditional pizza-making techniques to Rohnert Park.",
      milestone: false,
    },
    {
      year: "1998",
      title: "Patio Expansion",
      description:
        "Adds beautiful outdoor patio space, creating the perfect venue for private events and romantic dinners.",
      milestone: false,
    },
    {
      year: "2005",
      title: "Community Recognition",
      description:
        "Receives Rohnert Park Chamber of Commerce Business of the Year award for outstanding community service.",
      milestone: false,
    },
    {
      year: "2010",
      title: "Second Generation Joins",
      description:
        "Art's children join the family business, ensuring the tradition of authentic Italian cuisine continues.",
      milestone: true,
    },
    {
      year: "2015",
      title: "Wine Program Launch",
      description:
        "Launches curated Italian wine program featuring selections from Art's family vineyard in Sonoma County.",
      milestone: false,
    },
    {
      year: "2020",
      title: "Adapting with Heart",
      description:
        "Successfully adapts to pandemic challenges while maintaining the same quality and care for the community.",
      milestone: false,
    },
    {
      year: "2023",
      title: "40 Years of Excellence",
      description:
        "Celebrates four decades of serving authentic Italian cuisine and being a cornerstone of the Rohnert Park community.",
      milestone: true,
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Four Decades of Tradition</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From humble beginnings to becoming Sonoma County's most beloved Italian restaurant, every milestone tells a
            story of passion, dedication, and community.
          </p>
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
                  <Card
                    className={`flex-1 border-none shadow-lg ${
                      event.milestone ? "ring-2 ring-primary/20 bg-primary/5" : ""
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="md:hidden text-primary font-bold text-sm mb-2">{event.year}</div>
                          <h3 className="font-serif text-xl font-semibold text-foreground">{event.title}</h3>
                        </div>
                        {event.milestone && <Badge className="bg-primary text-primary-foreground">Milestone</Badge>}
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
