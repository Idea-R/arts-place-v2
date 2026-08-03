import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function CateringTestimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Redwood Corporate Events",
      event: "Corporate Retreat for 85 guests",
      rating: 5,
      text: "Art's Place catered our annual corporate retreat and exceeded every expectation. The Pasta King's Favorites package was a huge hit with our team. The setup was flawless and the food was restaurant-quality. We'll definitely be using them again!",
      image: "/testimonial-sarah-corporate-event-planner.png",
    },
    {
      name: "Michael & Jennifer Torres",
      company: "Wedding Reception",
      event: "Wedding reception for 120 guests",
      rating: 5,
      text: "Our wedding reception was absolutely perfect thanks to Art's Place catering. The Premium Italian Feast was incredible - our guests are still talking about the Osso Buco! The staff was professional and the service was seamless.",
      image: "/testimonial-couple-wedding-reception.png",
    },
    {
      name: "David Chen",
      company: "Chen Family Reunion",
      event: "Family gathering for 45 guests",
      rating: 5,
      text: "We ordered the Wood-Fired Pizza Party package for our family reunion and it was fantastic. The pizzas were authentic and delicious, and the setup made everything so easy. Great value for the quality!",
      image: "/testimonial-family-reunion-organizer.png",
    },
    {
      name: "Lisa Rodriguez",
      company: "Sonoma County Chamber",
      event: "Networking event for 60 guests",
      rating: 5,
      text: "The Antipasti Package was perfect for our networking event. Professional presentation, delicious food, and excellent service. Art's Place made our event memorable and stress-free.",
      image: "/testimonial-chamber-event-coordinator.png",
    },
  ]

  const stats = [
    { number: "500+", label: "Events Catered" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Client Retention" },
    { number: "40+", label: "Years Experience" },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our catering clients have to say about their experience with
            Art's Place.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-muted rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    <Badge variant="outline" className="text-xs mt-1">
                      {testimonial.event}
                    </Badge>
                  </div>
                </div>

                <div className="relative">
                  <Quote className="w-6 h-6 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground leading-relaxed pl-4">{testimonial.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Ready to Create Your Perfect Event?</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of satisfied clients who trust Art's Place for their special events. Get your custom quote
              today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors">
                Get Custom Quote
              </button>
              <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-medium transition-colors">
                Call (707) 588-2787
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
