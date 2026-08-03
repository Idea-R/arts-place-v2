import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Utensils, Clock } from "lucide-react"

export function CateringPackages() {
  const packages = [
    {
      name: "Antipasti Package",
      description: "Perfect for cocktail receptions and networking events",
      priceRange: "Quote on request",
      items: [
        "Assorted bruschetta varieties",
        "Italian meat and cheese platter",
        "Marinated olives and vegetables",
        "Arancini with marinara",
        "Caprese skewers",
      ],
      minGuests: 15,
      duration: "2-3 hours",
      popular: false,
    },
    {
      name: "Pasta King's Favorites",
      description: "Our signature dishes that made Art famous",
      priceRange: "Quote on request",
      items: [
        "Spaghetti Half & Half",
        "Baked Polenta with sausage",
        "Chicken Parmigiana",
        "Caesar salad",
        "Garlic bread",
        "Tiramisu",
      ],
      minGuests: 20,
      duration: "Full meal service",
      popular: true,
    },
    {
      name: "Wood-Fired Pizza Party",
      description: "Casual dining with our authentic wood-fired pizzas",
      priceRange: "Quote on request",
      items: [
        "Margherita pizza",
        "Pepperoni pizza",
        "Vegetarian deluxe pizza",
        "Mixed green salad",
        "Garlic knots",
        "Gelato selection",
      ],
      minGuests: 12,
      duration: "2-4 hours",
      popular: false,
    },
    {
      name: "Premium Italian Feast",
      description: "Our most elegant offering for special celebrations",
      priceRange: "Quote on request",
      items: [
        "Chicken Parmesan",
        "Grilled branzino",
        "Lobster ravioli",
        "Roasted vegetables",
        "Antipasti selection",
        "Wine pairings available",
        "Dessert trio",
      ],
      minGuests: 25,
      duration: "Full dinner service",
      popular: false,
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Catering Menu Packages</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Each package features authentic Italian cuisine made with the finest ingredients. All packages can be
            customized to accommodate dietary restrictions and preferences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
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

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-primary font-bold text-lg">{pkg.priceRange}</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    Min. {pkg.minGuests} guests
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground col-span-2">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-medium text-foreground flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-primary" />
                    Package Includes:
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

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Select This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
