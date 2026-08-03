"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Star, Leaf, Wheat, Info } from "lucide-react"
import { NutritionalInfoModal } from "./nutritional-info-modal"

export function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState("pasta")
  const [searchTerm, setSearchTerm] = useState("")
  const [dietaryFilter, setDietaryFilter] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const categories = [
    { id: "appetizers", name: "Appetizers", count: 8 },
    { id: "pasta", name: "Pasta & Entrees", count: 15 },
    { id: "pizza", name: "Wood-Fired Pizza", count: 12 },
    { id: "desserts", name: "Desserts", count: 6 },
    { id: "beverages", name: "Beverages", count: 10 },
  ]

  const menuItems = {
    appetizers: [
      {
        name: "Antipasto Platter",
        description: "Selection of Italian meats, cheeses, olives, and marinated vegetables",
        price: "$16.95",
        image: "/antipasto-platter-with-italian-meats-and-cheeses.png",
        dietary: ["GF"],
        isSignature: false,
      },
      {
        name: "Bruschetta Trio",
        description: "Three varieties: classic tomato basil, mushroom truffle, and roasted pepper",
        price: "$12.95",
        image: "/bruschetta-trio-with-tomato-basil-and-toppings.png",
        dietary: ["V"],
        isSignature: false,
      },
      {
        name: "Calamari Fritti",
        description: "Crispy fried squid rings with spicy marinara and lemon aioli",
        price: "$14.95",
        image: "/calamari-fritti-with-marinara-sauce.png",
        dietary: [],
        isSignature: false,
      },
      {
        name: "Arancini",
        description: "Sicilian rice balls stuffed with mozzarella, served with marinara",
        price: "$11.95",
        image: "/arancini-sicilian-rice-balls-with-mozzarella.png",
        dietary: ["V"],
        isSignature: true,
      },
    ],
    pasta: [
      {
        name: "Spaghetti Half & Half",
        description: "Our signature dish - half meat sauce, half marinara. A Harvest Fair favorite!",
        price: "$18.95",
        image: "/spaghetti-half-and-half-with-meat-sauce-and-marina.png",
        dietary: [],
        isSignature: true,
      },
      {
        name: "Baked Polenta",
        description: "Award-winning creamy polenta with Italian sausage, mushrooms, and three cheeses",
        price: "$19.95",
        image: "/baked-polenta-with-italian-sausage-and-melted-chee.png",
        dietary: ["GF"],
        isSignature: true,
      },
      {
        name: "Osso Buco",
        description: "Braised veal shanks in rich tomato wine sauce, served with creamy risotto",
        price: "$28.95",
        image: "/osso-buco-braised-veal-shank-with-risotto.png",
        dietary: ["GF"],
        isSignature: true,
      },
      {
        name: "Fettuccine Alfredo",
        description: "Fresh fettuccine in our house-made cream sauce with Parmigiano-Reggiano",
        price: "$16.95",
        image: "/fettuccine-alfredo-with-parmesan-cheese.png",
        dietary: ["V"],
        isSignature: false,
      },
      {
        name: "Lasagna della Casa",
        description: "Traditional meat lasagna with ricotta, mozzarella, and our signature meat sauce",
        price: "$21.95",
        image: "/traditional-meat-lasagna-with-ricotta-and-mozzarel.png",
        dietary: [],
        isSignature: false,
      },
      {
        name: "Chicken Parmigiana",
        description: "Breaded chicken breast with marinara and mozzarella, served with spaghetti",
        price: "$22.95",
        image: "/chicken-parmigiana-with-spaghetti-and-marinara.png",
        dietary: [],
        isSignature: false,
      },
    ],
    pizza: [
      {
        name: "Margherita",
        description: "San Marzano tomatoes, fresh mozzarella, basil, extra virgin olive oil",
        price: "$16.95",
        image: "/wood-fired-margherita-pizza-with-fresh-basil-and-m.png",
        dietary: ["V"],
        isSignature: true,
      },
      {
        name: "Pepperoni Classico",
        description: "House-made pepperoni, mozzarella, and our signature pizza sauce",
        price: "$18.95",
        image: "/pepperoni-pizza-with-mozzarella-and-tomato-sauce.png",
        dietary: [],
        isSignature: false,
      },
      {
        name: "The Works",
        description: "Pepperoni, sausage, mushrooms, bell peppers, onions, black olives",
        price: "$22.95",
        image: "/supreme-pizza-with-pepperoni-sausage-and-vegetable.png",
        dietary: [],
        isSignature: false,
      },
      {
        name: "Quattro Stagioni",
        description: "Four seasons pizza: artichokes, ham, mushrooms, olives on four quarters",
        price: "$21.95",
        image: "/quattro-stagioni-pizza-with-artichokes-and-ham.png",
        dietary: [],
        isSignature: true,
      },
      {
        name: "Vegetarian Deluxe",
        description: "Roasted vegetables, goat cheese, sun-dried tomatoes, fresh herbs",
        price: "$19.95",
        image: "/vegetarian-pizza-with-roasted-vegetables-and-goat-.png",
        dietary: ["V"],
        isSignature: false,
      },
    ],
    desserts: [
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso-soaked ladyfingers and mascarpone",
        price: "$8.95",
        image: "/classic-tiramisu-with-mascarpone-and-espresso.png",
        dietary: ["V"],
        isSignature: true,
      },
      {
        name: "Cannoli Siciliani",
        description: "Crispy shells filled with sweet ricotta and chocolate chips",
        price: "$7.95",
        image: "/cannoli-siciliani-with-ricotta-and-chocolate-chips.png",
        dietary: ["V"],
        isSignature: false,
      },
      {
        name: "Panna Cotta",
        description: "Vanilla bean panna cotta with seasonal berry compote",
        price: "$7.95",
        image: "/vanilla-panna-cotta-with-berry-compote.png",
        dietary: ["V", "GF"],
        isSignature: false,
      },
    ],
    beverages: [
      {
        name: "Italian Wine Selection",
        description: "Curated selection of Italian wines from Tuscany, Piedmont, and Veneto",
        price: "$8-15/glass",
        image: "/italian-wine-selection-with-glasses-and-bottles.png",
        dietary: ["V", "GF"],
        isSignature: false,
      },
      {
        name: "Espresso & Coffee",
        description: "Authentic Italian espresso, cappuccino, and specialty coffee drinks",
        price: "$3-6",
        image: "/placeholder.svg?height=300&width=400",
        dietary: ["V", "GF"],
        isSignature: false,
      },
      {
        name: "San Pellegrino",
        description: "Sparkling and still Italian mineral water",
        price: "$3.95",
        image: "/placeholder.svg?height=300&width=400",
        dietary: ["V", "GF"],
        isSignature: false,
      },
    ],
  }

  const dietaryOptions = [
    { id: "V", label: "Vegetarian", icon: Leaf, color: "bg-accent" },
    { id: "GF", label: "Gluten-Free", icon: Wheat, color: "bg-secondary" },
  ]

  const toggleDietaryFilter = (filter: string) => {
    setDietaryFilter((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true)
    setTimeout(() => {
      setActiveCategory(categoryId)
      setIsLoading(false)
    }, 300)
  }

  const filteredItems =
    menuItems[activeCategory as keyof typeof menuItems]?.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesDietary = dietaryFilter.length === 0 || dietaryFilter.some((filter) => item.dietary.includes(filter))
      return matchesSearch && matchesDietary
    }) || []

  const handleMoreInfo = (item: any) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  useEffect(() => {
    const handleResizeObserverError = (e: ErrorEvent) => {
      if (e.message.includes("ResizeObserver loop completed")) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
    window.addEventListener("error", handleResizeObserverError)

    const observer = new IntersectionObserver(
      (entries) => {
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !entry.target.classList.contains("animate-fade-in-up")) {
              entry.target.classList.add("animate-fade-in-up")
            }
          })
        })
      },
      {
        threshold: 0.1,
        rootMargin: "50px", // Add root margin to trigger animations earlier
      },
    )

    const timeoutId = setTimeout(() => {
      const cards = document.querySelectorAll(".menu-card")
      cards.forEach((card) => observer.observe(card))
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      observer.disconnect()
      window.removeEventListener("error", handleResizeObserverError)
    }
  }, [activeCategory]) // Only depend on activeCategory, not filteredItems

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex gap-2">
              {dietaryOptions.map((option) => (
                <Button
                  key={option.id}
                  variant={dietaryFilter.includes(option.id) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleDietaryFilter(option.id)}
                  className={`transition-all duration-300 hover:scale-105 ${dietaryFilter.includes(option.id) ? option.color : ""}`}
                >
                  <option.icon className="w-4 h-4 mr-2" />
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => handleCategoryChange(category.id)}
                className={`transition-all duration-300 hover:scale-105 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="overflow-hidden animate-pulse">
                  <div className="h-48 bg-muted"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded mb-4 w-3/4"></div>
                    <div className="h-8 bg-muted rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <Card
                  key={index}
                  className="menu-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-none shadow-lg overflow-hidden flex flex-col opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {item.isSignature && (
                        <Badge className="bg-primary text-primary-foreground text-xs animate-pulse">
                          <Star className="w-3 h-3 mr-1" />
                          Pasta King's Choice
                        </Badge>
                      )}
                      {item.dietary.map((diet) => {
                        const option = dietaryOptions.find((opt) => opt.id === diet)
                        return option ? (
                          <Badge key={diet} className={`${option.color} text-xs`}>
                            <option.icon className="w-3 h-3 mr-1" />
                            {diet}
                          </Badge>
                        ) : null
                      })}
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </h3>
                      <span className="font-bold text-primary text-lg group-hover:scale-110 transition-transform duration-300">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">{item.description}</p>

                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent mt-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      onClick={() => handleMoreInfo(item)}
                    >
                      <Info className="w-4 h-4 mr-2" />
                      More Info & Nutrition
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && !isLoading && (
            <div className="text-center py-12 animate-fade-in">
              <p className="text-muted-foreground text-lg">No items found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setDietaryFilter([])
                }}
                className="mt-4 transition-all duration-300 hover:scale-105"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Order Online CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto hover:bg-primary/10 transition-all duration-500">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Ready to Order?</h3>
            <p className="text-muted-foreground mb-6">
              Call us to place your order for pickup or dine-in reservations. Experience authentic Italian cuisine made
              with love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Call Button */}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => window.open("tel:+17075882787", "_self")}
              >
                Call (707) 588-2787
              </Button>
              {/* Reservation Button */}
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-all duration-300 hover:scale-105"
              >
                Make Reservation
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Nutritional Info Modal */}
      {selectedItem && (
        <NutritionalInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={selectedItem} />
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  )
}
