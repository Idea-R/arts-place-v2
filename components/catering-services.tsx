import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Home, Package, Users, Clock, Utensils } from "lucide-react"

export function CateringServices() {
  const services = [
    {
      icon: Truck,
      title: "Full-Service Catering",
      description: "Complete event catering with professional staff, setup, service, and cleanup",
      features: ["Professional servers", "Complete setup/breakdown", "Linens & tableware", "Event coordination"],
      pricing: "Starting at $35/person",
      popular: true,
    },
    {
      icon: Package,
      title: "Drop-Off Catering",
      description: "Restaurant-quality food delivered hot and ready to serve at your location",
      features: ["Hot food delivery", "Disposable serving ware", "Setup instructions", "Pickup available"],
      pricing: "Starting at $18/person",
      popular: false,
    },
    {
      icon: Home,
      title: "Pickup Catering",
      description: "Order ahead and pickup your catering order at our restaurant",
      features: ["Pre-order convenience", "Family-style packaging", "Heating instructions", "10% discount"],
      pricing: "Starting at $15/person",
      popular: false,
    },
  ]

  const additionalServices = [
    { icon: Users, title: "Event Planning", description: "Menu consultation and event coordination" },
    { icon: Clock, title: "Flexible Scheduling", description: "Early morning to late evening service" },
    { icon: Utensils, title: "Custom Menus", description: "Tailored menus for dietary restrictions" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Catering Service Options</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the catering service that best fits your event needs and budget. All options feature our authentic
            Italian cuisine made fresh daily.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-shadow ${service.popular ? "ring-2 ring-primary" : ""}`}
            >
              <CardContent className="p-8 flex flex-col h-full">
                {service.popular && <Badge className="bg-primary text-primary-foreground mb-4">Most Popular</Badge>}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{service.title}</h3>
                </div>

                <div className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    <h4 className="font-medium text-foreground">Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-primary font-bold text-lg mb-4">{service.pricing}</div>
                </div>

                <button className="w-full py-2 px-4 rounded-lg font-medium transition-colors bg-primary text-primary-foreground hover:bg-primary/90 mt-auto">
                  Get Quote
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
