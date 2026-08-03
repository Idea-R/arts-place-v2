import { Button } from "@/components/ui/button"
import { Users, Calendar, Wine, Music } from "lucide-react"

export function EventSpaceSection() {
  const eventTypes = [
    {
      icon: Users,
      title: "Private Parties",
      description: "Birthday celebrations, anniversaries, and family gatherings",
    },
    {
      icon: Calendar,
      title: "Corporate Events",
      description: "Business meetings, team building, and company celebrations",
    },
    {
      icon: Wine,
      title: "Wine Dinners",
      description: "Curated wine pairings with our signature Italian dishes",
    },
    {
      icon: Music,
      title: "Live Music Nights",
      description: "Intimate acoustic performances on our beautiful patio",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Host Your Next Event on Our Beautiful Patio
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our charming outdoor patio provides the perfect setting for your special occasions. With seating for up to
              your guests, twinkling lights, and the smell of the wood fired oven, your event will be memorable.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {eventTypes.map((type, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <type.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Your Event
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Download Catering Menu
              </Button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/outdoor-patio-dining-area-with-string-lights-and-i.png"
                  alt="Outdoor patio dining"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/private-party-setup-on-restaurant-patio-with-elega.png"
                  alt="Private party setup"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/wine-dinner-event-with-italian-food-and-wine-pairi.png"
                  alt="Wine dinner event"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/live-music-performance-on-restaurant-patio-with-ac.png"
                  alt="Live music night"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Capacity badge */}
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
              Capacity to confirm
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
