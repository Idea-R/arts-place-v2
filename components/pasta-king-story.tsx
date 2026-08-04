import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { site, story, storyUnverified, founding } from "@/lib/content"

export function PastaKingStory() {
  const s = story.value
  const u = storyUnverified.value
  const f = founding.value

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              {/* Mirrored into this repo. It used to hotlink the old v0 project's
                  Vercel blob store, which is a project we plan to delete, so Art's
                  photo would have disappeared from the page the moment it went.
                  Provenance of the photo itself is still unconfirmed: it arrived with
                  the v0 build and nobody has told us who shot it. Worth asking the
                  family before launch. */}
              <img
                src="/photos/art-ibleto.jpg"
                alt="Art Ibleto, the Pasta King"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <Quote className="h-8 w-8" />
              </div>
            </div>

            {/* Story Content */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Man Behind the Magic
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Art Ibleto came from {u.birthplace}, and fought with {u.wartime} as a teenager. He left Italy in{" "}
                  {s.arrivalYear}, a war veteran in his early twenties, and headed for {s.arrivalCity} with little more
                  than that behind him.
                </p>

                <p>
                  In {u.fairYear} he opened {s.fairStand} at {s.fairVenue}. That is where he became the Pasta King. For
                  decades after, generations grew up on his half and half spaghetti and his baked polenta. If you grew
                  up here, you already know the taste.
                </p>

                <p>
                  The restaurant came last, and that is the part people get wrong. For close to forty years the food
                  travelled: a fair stand for one week a year, then catering, then a freezer case. Art was in his
                  eighties when the family took over {f.previousTenant} on Rohnert Park Expressway and opened Art's
                  Place in {f.openedYear}, so the cooking could finally have an address.
                </p>

                <p>
                  He passed away in {s.passedYear} at {s.passedAge}. The kitchen he built keeps going: the same
                  recipes, the same wood fired oven, and the same idea he carried the whole way, that good food is how
                  you take care of people.
                </p>
              </div>

              {/* The previous build printed an invented quotation attributed to Art.
                  Words are not put in his mouth here. If the family provides something
                  he actually said, it belongs in lib/content.ts first. */}
              <Card className="mt-8 border-l-4 border-l-primary bg-primary/5">
                <CardContent className="p-6">
                  <blockquote className="text-foreground font-medium italic text-lg">
                    "{site.taglineItalian}" &mdash; {site.tagline}.
                  </blockquote>
                  <cite className="text-primary font-semibold mt-4 block not-italic">
                    The words above the door at Art's Place
                  </cite>
                </CardContent>
              </Card>

              {/* Narrowed once the obituary and the 2013 opening announcements were
                  read. The marker names the three things genuinely still unsourced
                  rather than casting doubt across a paragraph that is properly cited. */}
              {!storyUnverified.confirmed && (
                <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                  Art&apos;s village, his wartime service and the year of the fair stand still to confirm
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
