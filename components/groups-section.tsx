import { Card, CardContent } from "@/components/ui/card"
import { Users, Phone, Tv, Armchair, Trees, CalendarCheck } from "lucide-react"
import { site } from "@/lib/content"

/**
 * Large groups.
 *
 * This replaces the events pitch that shipped with this build: a patio "seating up
 * to 50", four event package types, a gallery of events that never happened, and a
 * booking form for a booking system that does not exist.
 *
 * What is actually true is smaller and more useful. They take reservations for large
 * groups, they do not run events, and the room has televisions, booths, bar seating
 * and tables outside. Every claim below traces to lib/content.ts.
 */
export function GroupsSection() {
  const parties = site.largerParties.value
  const reservations = site.reservations.value
  const room = site.room.value
  const outdoor = site.outdoorSeating.value

  const facts = [
    {
      icon: CalendarCheck,
      title: "Reserve for a group",
      body: "We hold tables for larger parties. Call ahead and the room will be ready when you arrive.",
      show: reservations.forLargeGroups,
    },
    {
      icon: Users,
      title: "Walk in for a table",
      body: "Smaller tables are first come. For two or four, just come along.",
      show: !reservations.forSmallTables,
    },
    {
      icon: Tv,
      title: "The game is on",
      body: "Several televisions around the room, so nobody has to choose between the match and dinner.",
      show: room.televisions,
    },
    {
      icon: Armchair,
      title: "Sit where you like",
      body: "Booths, tables, and seats at the bar. Beer, wine and cider to go with them.",
      show: true,
    },
    {
      icon: Trees,
      title: "Or sit outside",
      body: outdoor.improvementInProgress
        ? "There are tables outside, and a proper outdoor area is being built. This is the plain version for now."
        : "There are tables outside, good on a warm Sonoma County evening.",
      show: outdoor.available,
    },
  ].filter((f) => f.show)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Coming with a group
          </h2>
          <p className="text-lg text-muted-foreground">
            Bring the team, the family, or the whole roster. Give us a call and we will
            put the tables together.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {facts.map((f) => (
            <Card key={f.title} className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {!parties.hasEventsProgramme && (
          <div className="max-w-2xl mx-auto mt-10 text-center">
            <p className="text-muted-foreground">
              We do not run an events programme, so there are no packages to pick from
              and nothing to book online. It is a phone call and a table, which for most
              groups is all it needs to be.
            </p>
            <a
              href={`tel:${site.phone.value.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-2 mt-6 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call {site.phone.value}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
