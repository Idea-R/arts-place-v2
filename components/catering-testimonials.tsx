import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { testimonials } from "@/lib/content"

/**
 * Catering social proof.
 *
 * Removed from this component: four invented client testimonials, one of them
 * attributed to the "Sonoma County Chamber", a real organisation that never said it,
 * and a stats bar claiming "500+ Events Catered", "4.9/5 Average Rating", and "98%
 * Client Retention". None of those numbers came from anywhere.
 *
 * Real catering references have to come from the restaurant. Until they do, this
 * section says so plainly.
 */
export function CateringTestimonials() {
  const reviews = testimonials.value

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Catering References</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Art's Place has catered Sonoma County events for years, from the fair to private parties.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {reviews.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="p-8 text-center">
                <Quote className="h-6 w-6 mx-auto mb-4 text-muted-foreground" />
                <p className="text-foreground font-medium mb-2">Client references to be supplied</p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  We will add real catering references, with names used only by permission, once the restaurant provides
                  them.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {reviews.map((review, i) => (
                <Card key={i} className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <blockquote className="text-foreground leading-relaxed">"{review.quote}"</blockquote>
                    <footer className="mt-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">{review.author}</span>
                      <span className="mx-2">&middot;</span>
                      <span>{review.source}</span>
                    </footer>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
