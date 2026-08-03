"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Star } from "lucide-react"
import { menu } from "@/lib/content"

export function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState(menu.value[0]?.id ?? "starters")
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Menu content comes from lib/content.ts, transcribed from the restaurant's own
  // published menu. It used to be hardcoded here: about twenty invented dishes,
  // including an Osso Buco at $28.95 that the kitchen does not serve, and real dishes
  // priced wrongly (Baked Polenta was listed at $19.95 against a real $16).
  //
  // Dietary badges are deliberately NOT inferred. The previous version marked dishes
  // "GF" and "V" with no source behind it. An unverified allergen claim on a
  // restaurant menu is a safety problem, not a formatting detail. Badges return only
  // when the kitchen confirms each dish.
  const categories = menu.value.map((category) => ({
    id: category.id,
    name: category.name,
    count: category.items.length,
  }))

  const menuItems = Object.fromEntries(
    menu.value.map((category) => [
      category.id,
      category.items.map((item) => ({
        name: item.name,
        description: item.description ?? "",
        price: item.price,
        image: null as string | null,
        dietary: [] as string[],
        isSignature: item.signature ?? false,
      })),
    ]),
  )

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
      return matchesSearch
    }) || []

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
                  className="menu-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-none shadow-lg overflow-hidden flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Photography is omitted until the restaurant supplies real photos.
                      The generated stock images that shipped here depicted dishes the
                      kitchen does not serve, so pairing one with a real dish name would
                      misrepresent the plate. */}
                  {item.image && (
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3 gap-4">
                      <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.name}
                        {item.isSignature && (
                          <Badge className="bg-primary text-primary-foreground text-xs ml-2 align-middle">
                            <Star className="w-3 h-3 mr-1" />
                            House signature
                          </Badge>
                        )}
                      </h3>
                      <span className="font-bold text-primary text-lg whitespace-nowrap">{item.price}</span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{item.description}</p>

                    {/* The "More Info & Nutrition" button was removed along with the
                        modal behind it. That modal generated calorie, protein, carb and
                        sodium figures with Math.random() on every render and printed a
                        fixed allergen notice on every dish regardless of ingredients.
                        Invented nutrition and allergen information is a safety matter,
                        not a placeholder. It returns only with real kitchen data. */}
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
