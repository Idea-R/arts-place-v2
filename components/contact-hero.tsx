import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock } from "lucide-react"

export function ContactHero() {
  return (
    <section
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/restaurant-exterior-welcoming-entrance-italian-style.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">Visit Us Today</h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            We're always happy to welcome you to Art's Place. Whether you're planning a special celebration, have
            questions about our menu, or simply want to make a reservation, we're here to help.
          </p>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
              <Phone className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground text-sm mb-3">(707) 588-2787</p>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Call Now
              </Button>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
              <MapPin className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm text-center mb-3">
                563 Rohnert Park Expressway West
                <br />
                Rohnert Park, CA 94928
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Get Directions
              </Button>
            </div>

            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg">
              <Clock className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Hours</h3>
              <p className="text-muted-foreground text-sm text-center mb-3">
                Daily: 11:30am - 9:00pm
                <br />
                Every day, including weekends
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View Full Hours
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
