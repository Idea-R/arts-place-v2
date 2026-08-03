import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Star, Users, Utensils } from "lucide-react"

export function CateringMenu() {
  const cateringPackages = [
    {
      name: "Antipasti Package",
      description: "Perfect for cocktail receptions and networking events",
      priceRange: "$12-18 per person",
      items: [
        "Assorted bruschetta varieties",
        "Italian meat and cheese platter",
        "Marinated olives and vegetables",
        "Arancini with marinara",
        "Caprese skewers",
      ],
      minGuests: 15,
      popular: false,
    },
    {
      name: "Pasta King's Favorites",
      description: "Our signature dishes that made Art famous",
      priceRange: "$25-35 per person",
      items: [
        "Spaghetti Half & Half",
        "Baked Polenta with sausage",
        "Chicken Parmigiana",
        "Caesar salad",
        "Garlic bread",
        "Tiramisu",
      ],
      minGuests: 20,
      popular: true,
    },
    {
      name: "Wood-Fired Pizza Party",
      description: "Casual dining with our authentic wood-fired pizzas",
      priceRange: "$20-28 per person",
      items: [
        "Margherita pizza",
        "Pepperoni pizza",
        "Vegetarian deluxe pizza",
        "Mixed green salad",
        "Garlic knots",
        "Gelato selection",
      ],
      minGuests: 12,
      popular: false,
    },
    {
      name: "Premium Italian Feast",
      description: "Our most elegant offering for special celebrations",
      priceRange: "$45-65 per person",
      items: [
        "Osso Buco with risotto",
        "Grilled branzino",
        "Lobster ravioli",
        "Roasted vegetables",
        "Antipasti selection",
        "Wine pairings available",
        "Dessert trio",
      ],
      minGuests: 25,
      popular: false,
    },
  ]

  const additionalServices = [
    { service: "Professional service staff", price: "$25/hour per server" },
    { service: "Linen and table settings", price: "$8 per person" },
    { service: "Wine and beverage service", price: "Market pricing" },
    { service: "Custom menu creation", price: "Consultation fee applies" },
    { service: "Event coordination", price: "$200 flat fee" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Catering Packages</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully crafted catering packages, each featuring authentic Italian cuisine made with the
            finest ingredients. All packages can be customized to accommodate dietary restrictions and preferences.
          </p>
        </div>

        {/* Catering Packages */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {cateringPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-shadow ${
                pkg.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{pkg.description}</p>
                  </div>
                  {pkg.popular && (
                    <Badge className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-primary font-bold text-lg">{pkg.priceRange}</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    Min. {pkg.minGuests} guests
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-medium text-foreground flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-primary" />
                    Includes:
                  </h4>
                  <ul className="space-y-1">
                    {pkg.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={pkg.popular ? "default" : "outline"}
                  className={`w-full ${
                    pkg.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  }`}
                >
                  Select This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6 text-center">
                Additional Services Available
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border last:border-0"
                  >
                    <span className="text-foreground">{service.service}</span>
                    <span className="text-primary font-medium">{service.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Menu CTA */}
        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Complete Catering Menu</h3>
            <p className="text-muted-foreground mb-6">
              Download our complete catering menu with detailed descriptions, pricing, and customization options for
              your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Download className="w-4 h-4 mr-2" />
                Download Full Menu (PDF)
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
