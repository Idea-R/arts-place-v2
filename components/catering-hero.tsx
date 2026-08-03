import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Truck, Clock, Users, Award } from "lucide-react"

export function CateringHero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted/30 pt-20 pb-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                40+ Years of Excellence
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Professional Italian <span className="text-primary">Catering Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Bring the authentic flavors of Art's Place to your special event. From intimate gatherings to large
                corporate functions, we deliver the Pasta King's award-winning cuisine wherever you need it.
              </p>
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Truck className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Full Service</div>
                  <div className="text-sm text-muted-foreground">Setup & Cleanup</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Flexible Timing</div>
                  <div className="text-sm text-muted-foreground">Your Schedule</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Users className="w-6 h-6 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Any Size Event</div>
                  <div className="text-sm text-muted-foreground">10-500 Guests</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Custom Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View Menu Options
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/catering-setup-elegant-italian-buffet-display.png"
                alt="Professional Italian catering setup with elegant buffet display"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Events Catered</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-lg border">
              <div className="text-2xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-muted-foreground">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
