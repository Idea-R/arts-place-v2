import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, MapPin } from "lucide-react"

export function CateringPricing() {
  const pricingTiers = [
    {
      guestRange: "10-25 Guests",
      description: "Perfect for intimate gatherings and small corporate meetings",
      basePrice: "$15-35",
      deliveryFee: "$25",
      setupFee: "$50",
      features: ["Disposable serving ware", "Basic setup", "2-hour service window"],
    },
    {
      guestRange: "26-75 Guests",
      description: "Ideal for medium-sized events and celebrations",
      basePrice: "$18-40",
      deliveryFee: "$35",
      setupFee: "$75",
      features: ["Chafing dishes included", "Professional setup", "3-hour service window", "Dedicated coordinator"],
      popular: true,
    },
    {
      guestRange: "76-150 Guests",
      description: "Great for large corporate events and weddings",
      basePrice: "$22-45",
      deliveryFee: "$50",
      setupFee: "$100",
      features: [
        "Full service staff",
        "Linens & tableware",
        "4-hour service window",
        "Event coordination",
        "Cleanup included",
      ],
    },
    {
      guestRange: "150+ Guests",
      description: "Custom pricing for large-scale events",
      basePrice: "Custom Quote",
      deliveryFee: "Included",
      setupFee: "Included",
      features: [
        "Full-service catering",
        "Multiple servers",
        "Extended service",
        "Custom menu options",
        "Event planning",
      ],
    },
  ]

  const additionalCosts = [
    {
      service: "Professional service staff",
      price: "$25/hour per server",
      description: "Experienced servers for your event",
    },
    { service: "Premium linens & tableware", price: "$8 per person", description: "Elegant table settings and linens" },
    { service: "Wine and beverage service", price: "Market pricing", description: "Full bar service available" },
    { service: "Custom menu creation", price: "$200 consultation", description: "Personalized menu development" },
    { service: "Weekend premium", price: "+15%", description: "Friday-Sunday events" },
    { service: "Holiday premium", price: "+25%", description: "Major holidays and special dates" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our pricing is straightforward with no hidden fees. All prices include food preparation, packaging, and
            basic service items.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-shadow ${tier.popular ? "ring-2 ring-primary" : ""}`}
            >
              <CardContent className="p-6">
                {tier.popular && <Badge className="bg-primary text-primary-foreground mb-4">Most Popular</Badge>}

                <div className="text-center mb-4">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{tier.guestRange}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <div className="text-2xl font-bold text-primary mb-1">{tier.basePrice}</div>
                  <div className="text-sm text-muted-foreground">per person</div>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery:</span>
                    <span className="text-foreground">{tier.deliveryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Setup:</span>
                    <span className="text-foreground">{tier.setupFee}</span>
                  </div>
                </div>

                <div className="space-y-1 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button variant={tier.popular ? "default" : "outline"} size="sm" className="w-full">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6 text-center flex items-center justify-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Additional Services & Fees
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalCosts.map((cost, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start py-3 border-b border-border last:border-0"
                  >
                    <div className="flex-1">
                      <span className="text-foreground font-medium">{cost.service}</span>
                      <p className="text-xs text-muted-foreground mt-1">{cost.description}</p>
                    </div>
                    <span className="text-primary font-medium ml-4">{cost.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Areas */}
        <div className="max-w-3xl mx-auto text-center">
          <Card className="border-none shadow-lg bg-primary/5">
            <CardContent className="p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Service Areas
              </h3>
              <p className="text-muted-foreground mb-4">
                We provide catering services throughout Sonoma County and surrounding areas:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-foreground">
                <div>Rohnert Park</div>
                <div>Santa Rosa</div>
                <div>Petaluma</div>
                <div>Sebastopol</div>
                <div>Cotati</div>
                <div>Windsor</div>
                <div>Healdsburg</div>
                <div>Sonoma</div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Additional delivery fees may apply for locations beyond 20 miles from our restaurant.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
