import { Card, CardContent } from "@/components/ui/card"
import { Phone, Info } from "lucide-react"
import { site } from "@/lib/content"

/**
 * Catering, framed correctly.
 *
 * Replaces the catering packages, per-person pricing, and client testimonials this
 * build shipped with. All of it was invented, and one testimonial was attributed to
 * the Sonoma County Chamber, a real organisation.
 *
 * The arrangement is not the obvious one: catering runs through the founding
 * family's own operation rather than through the restaurant. Saying "we cater your
 * wedding" would claim a service the restaurant does not provide and route the
 * enquiry to the wrong people. So the page says where it comes from, treats that as
 * the selling point it genuinely is, and hands over the phone number.
 *
 * No prices. The family quotes their own work.
 */
export function CateringHonest() {
  const catering = site.catering.value
  if (!catering.available) return null

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Catering
          </h2>
          <p className="text-lg text-muted-foreground">
            The food that fed the Sonoma County Fair for decades can come to you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Art Ibleto cooked for crowds long before he cooked in a dining room. The
            fair stand was the original business, and catering is still handled by the
            family that built it rather than by the restaurant.
          </p>
          <p>
            That is worth knowing when you call, and it is genuinely good news: you are
            hiring the people who have been doing this the longest, working from the
            same recipes the kitchen here uses every day. Pasta, polenta, and the rest
            of it, in the quantities that feed a party rather than a table.
          </p>
        </div>

        {catering.runByFamily && (
          <Card className="max-w-2xl mx-auto mt-8 border-dashed">
            <CardContent className="p-6 flex gap-4">
              <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium mb-1">
                  Arranged through the family, not booked here
                </p>
                <p className="text-sm text-muted-foreground">
                  Menus and pricing come from them directly, so nothing is quoted on
                  this page. Call the restaurant and we will point you to the right
                  people.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="text-center mt-8">
          <a
            href={`tel:${site.phone.value.replace(/[^\d+]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call {site.phone.value}
          </a>
        </div>
      </div>
    </section>
  )
}
