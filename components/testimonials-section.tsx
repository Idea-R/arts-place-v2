"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Rohnert Park, CA",
      rating: 5,
      text: "Art's Place has been our family's go-to restaurant for over 20 years. The Pasta King's recipes are absolutely incredible, and the service always makes us feel like we're dining with family.",
      dish: "Spaghetti Half & Half",
    },
    {
      name: "David Chen",
      location: "Santa Rosa, CA",
      rating: 5,
      text: "The wood-fired pizza here is the best in Sonoma County! Art's attention to authentic Italian techniques really shows in every bite. The outdoor patio is perfect for date nights.",
      dish: "Margherita Pizza",
    },
    {
      name: "Jennifer Thompson",
      location: "Petaluma, CA",
      rating: 5,
      text: "We hosted our anniversary dinner on the patio and it was magical. The baked polenta is award-winning for a reason - absolutely divine! Art and his team made our night perfect.",
      dish: "Baked Polenta",
    },
    {
      name: "Robert Wilson",
      location: "Cotati, CA",
      rating: 5,
      text: "As someone who's traveled extensively in Italy, I can say Art's Place serves the most authentic Italian food I've found in California. The Osso Buco is restaurant-quality perfection.",
      dish: "Osso Buco",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Guests Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four decades of creating memorable dining experiences, one family at a time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Author */}
                <div className="mb-4">
                  <div className="font-semibold text-foreground text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].location}</div>
                  <div className="text-sm text-primary font-medium mt-1">
                    Favorite Dish: {testimonials[currentIndex].dish}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-muted/50 rounded-full px-6 py-3 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="font-semibold">4.8/5</span>
            <span className="text-muted-foreground">on Google Reviews</span>
          </div>
          <div>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Leave a Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
