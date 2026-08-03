import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { site, story } from "@/lib/content"

export function PastaKingStory() {
  const s = story.value

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://ltr1z7kpduo1wich.public.blob.vercel-storage.com/Images/ThePastaKing.jpg"
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
                  Art Ibleto came from {s.birthplace}, and fought with {s.wartime} as a teenager. He arrived in{" "}
                  {s.arrivalCity} in {s.arrivalYear} with little more than that, and built a life here that most people
                  only get to read about.
                </p>

                <p>
                  In {s.fairYear} he opened {s.fairStand} at {s.fairVenue}. That is where he became the Pasta King. For
                  decades after, generations grew up on his half and half spaghetti and his baked polenta. If you grew
                  up here, you already know the taste.
                </p>

                <p>
                  Art opened Art's Place in {s.openedYear} so the food could have a home open every day, not just fair
                  week. He passed away in {s.passedYear} at {s.passedAge}. The kitchen he built keeps going: the same
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

              {!story.confirmed && (
                <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">
                  Dates and biography to confirm with the family
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
