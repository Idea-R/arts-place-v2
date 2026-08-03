import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { testimonials } from "@/lib/content"

/**
 * Customer reviews.
 *
 * This component used to carry four five-star testimonials attributed to invented
 * people, complete with home towns and favourite dishes. They were not real. Reviews
 * attributed to named individuals are not placeholder copy, so they were removed
 * rather than reworded.
 *
 * Art's Place has 448 real reviews on Yelp and hundreds more on Google. When real
 * quotes are pulled, with attribution and permission, add them to `testimonials` in
 * lib/content.ts and the carousel below fills in automatically.
 */
export function TestimonialsSection() {
  const reviews = testimonials.value

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What Guests Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Art’s Place has a lot of regulars, and plenty of them have written it down.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {reviews.length === 0 ? (
            <Card className="border-dashed">
              <CardContent className="p-8 text-center">
                <Star className="h-6 w-6 mx-auto mb-4 text-muted-foreground" />
                <p className="text-foreground font-medium mb-2">Real reviews go here</p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Art's Place has hundreds of genuine reviews across Yelp and Google. We will pull a selection with
                  proper attribution rather than write our own.
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
