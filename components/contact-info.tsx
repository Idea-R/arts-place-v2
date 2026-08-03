import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, Car, Accessibility, Wifi, CreditCard } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(707) 588-2787", "Available during business hours"],
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@artsplacerp.com", "We respond within 24 hours"],
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["563 Rohnert Park Expressway West", "Rohnert Park, CA 94928"],
      action: "Get Directions",
    },
  ]

  const hours = [
    { day: "Monday - Thursday", time: "11:30am - 9:00pm" },
    { day: "Friday - Saturday", time: "11:30am - 10:00pm" },
    { day: "Sunday", time: "11:30am - 9:00pm" },
  ]

  const amenities = [
    { icon: Car, label: "Free Parking" },
    { icon: Accessibility, label: "Wheelchair Accessible" },
    { icon: Wifi, label: "Free WiFi" },
    { icon: CreditCard, label: "All Cards Accepted" },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactDetails.map((contact, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <contact.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">{contact.title}</h3>
                  <div className="space-y-2 mb-6">
                    {contact.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className={detailIndex === 0 ? "text-foreground font-medium" : "text-muted-foreground text-sm"}
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Hours */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">Hours of Operation</h3>
                </div>
                <div className="space-y-4">
                  {hours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="text-foreground font-medium">{schedule.day}</span>
                      <span className="text-primary font-semibold">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-secondary/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    <strong>Holiday Hours:</strong> Please call ahead during holidays as hours may vary.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Restaurant Amenities</h3>
                <div className="grid grid-cols-2 gap-6">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <amenity.icon className="h-5 w-5 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">{amenity.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Parking Information</h4>
                    <p className="text-muted-foreground text-sm">
                      Ample free parking available in our lot. Additional street parking available on Rohnert Park
                      Expressway.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Accessibility</h4>
                    <p className="text-muted-foreground text-sm">
                      Wheelchair accessible entrance and restrooms. Please let us know if you need any special
                      accommodations.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
