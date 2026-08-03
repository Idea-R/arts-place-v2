import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Car, Accessibility } from "lucide-react"

export function LocationSection() {
  const hours = [
    { day: "Monday - Thursday", time: "11:30am - 9:00pm" },
    { day: "Friday - Saturday", time: "11:30am - 9:00pm" },
    { day: "Sunday", time: "11:30am - 9:00pm" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Us Today</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Rohnert Park, we're easy to find and always ready to welcome you home.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div className="relative">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold">Interactive Map</p>
                  <p className="text-muted-foreground text-sm">Google Maps integration</p>
                </div>
              </div>
            </div>
            <Button className="absolute bottom-4 right-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              Get Directions
            </Button>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      563 Rohnert Park Expressway West
                      <br />
                      Rohnert Park, CA 94928
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-3">Hours of Operation</h3>
                    <div className="space-y-2">
                      {hours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium text-foreground">{schedule.time}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-primary mt-3 font-medium">Holiday hours may vary - please call ahead</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Contact</h3>
                    <p className="text-muted-foreground mb-2">(707) 588-2787</p>
                    <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Call Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow">
                <Car className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">Free Parking</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow">
                <Accessibility className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">Wheelchair Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
