import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Navigation, Car, Bus } from "lucide-react"

export function LocationMap() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Find Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Rohnert Park, we're easy to find and conveniently accessible from anywhere in Sonoma
            County.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Map Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for Google Maps */}
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <p className="text-foreground font-semibold text-lg">Interactive Map</p>
                  <p className="text-muted-foreground">Google Maps integration</p>
                </div>
              </div>
            </div>
            <Button className="absolute bottom-4 right-4 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
          </div>

          {/* Directions & Transportation */}
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Driving Directions
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-foreground">From San Francisco (South):</h4>
                    <p className="text-muted-foreground">
                      Take US-101 North to Exit 488 for Rohnert Park Expressway. Turn right and we're on your left.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">From Santa Rosa (North):</h4>
                    <p className="text-muted-foreground">
                      Take US-101 South to Exit 488 for Rohnert Park Expressway. Turn left and we're on your left.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">From Petaluma (West):</h4>
                    <p className="text-muted-foreground">
                      Take Petaluma Hill Road to Rohnert Park Expressway. Turn right and we're just ahead.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Bus className="h-5 w-5 text-primary" />
                  Public Transportation
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-medium text-foreground">Sonoma County Transit:</h4>
                    <p className="text-muted-foreground">
                      Route 20 stops near Rohnert Park Expressway. Check current schedules at sctransit.com
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Golden Gate Transit:</h4>
                    <p className="text-muted-foreground">
                      Routes from San Francisco and Marin County available. Visit goldengate.org for schedules.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Nearby Landmarks</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Across from Rohnert Park Community Center</li>
                  <li>• Near Sonoma State University (5 minutes)</li>
                  <li>• Close to Graton Resort & Casino (10 minutes)</li>
                  <li>• Walking distance to Rohnert Park Station</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
