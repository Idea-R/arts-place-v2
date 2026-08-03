"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Flame, Info } from "lucide-react"
import { NutritionalInfoModal } from "./nutritional-info-modal"
import Link from "next/link"

export function FeaturedItems() {
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const featuredDishes = [
    {
      name: "Spaghetti Half & Half",
      description:
        "Our signature dish - half meat sauce, half marinara. A Harvest Fair favorite that's been winning hearts for decades.",
      price: "$18.95",
      image: "/spaghetti-half-and-half-with-meat-sauce-and-marina.png",
      badges: ["Fair Favorite", "Signature"],
      isSpicy: false,
      isSignature: true,
    },
    {
      name: "Wood-Fired Margherita Pizza",
      description:
        "Fresh mozzarella, San Marzano tomatoes, and basil on our hand-tossed dough, cooked in our authentic wood-fired oven.",
      price: "$16.95",
      image: "/wood-fired-margherita-pizza-with-fresh-basil-and-m.png",
      badges: ["Wood-Fired"],
      isSpicy: false,
      dietary: ["V"],
      isSignature: true,
    },
    {
      name: "Baked Polenta",
      description:
        "Award-winning creamy polenta baked with Italian sausage, mushrooms, and three cheeses. A true comfort food masterpiece.",
      price: "$19.95",
      image: "/baked-polenta-with-italian-sausage-and-melted-chee.png",
      badges: ["Award Winner", "Pasta King's Choice"],
      isSpicy: false,
      dietary: ["GF"],
      isSignature: true,
    },
    {
      name: "Osso Buco",
      description:
        "Tender braised veal shanks in a rich tomato and wine sauce, served with creamy risotto. A Sunday special that sells out fast.",
      price: "$28.95",
      image: "/osso-buco-braised-veal-shank-with-risotto.png",
      badges: ["Sunday Special", "Premium"],
      isSpicy: false,
      dietary: ["GF"],
      isSignature: true,
    },
  ]

  const handleMoreInfo = (dish: any) => {
    setSelectedItem(dish)
    setIsModalOpen(true)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = document.querySelectorAll(".featured-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Pasta King Favorites</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the dishes that made Art famous throughout Sonoma County. Each recipe tells a story of tradition,
            passion, and authentic Italian flavors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {featuredDishes.map((dish, index) => (
            <Card
              key={index}
              className="featured-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-none shadow-lg overflow-hidden flex flex-col opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {dish.badges.map((badge, badgeIndex) => (
                    <Badge
                      key={badgeIndex}
                      className={`text-xs transition-all duration-300 hover:scale-105 ${
                        badge.includes("Award") || badge.includes("Signature")
                          ? "bg-primary text-primary-foreground animate-pulse"
                          : badge.includes("Special")
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-accent text-accent-foreground"
                      }`}
                    >
                      {badge.includes("Award") && <Star className="w-3 h-3 mr-1" />}
                      {badge}
                    </Badge>
                  ))}
                </div>
                {dish.isSpicy && (
                  <div className="absolute top-3 right-3">
                    <Flame className="h-5 w-5 text-orange-500 animate-pulse" />
                  </div>
                )}
              </div>

              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <span className="font-bold text-primary text-lg group-hover:scale-110 transition-transform duration-300">
                    {dish.price}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">{dish.description}</p>

                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent mt-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => handleMoreInfo(dish)}
                >
                  <Info className="w-4 h-4 mr-2" />
                  More Info & Nutrition
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/menu">
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>

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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
