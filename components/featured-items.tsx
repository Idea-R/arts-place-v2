"use client"

import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Flame } from "lucide-react"
import Link from "next/link"
import { menu } from "@/lib/content"

export function FeaturedItems() {

  // Real signature dishes with real prices, pulled from lib/content.ts. The four
  // dishes that used to sit here were part invented (Osso Buco at $28.95 is not on
  // the menu) and part mispriced (Half & Half was $18.95 against a real $19, Baked
  // Polenta $19.95 against a real $16). Badges like "Award Winner" and "Sunday
  // Special" had no source and are gone.
  const signatureNames = ["Spaghetti Half & Half", "Baked Polenta", "Margherita"]
  const featuredDishes = menu.value
    .flatMap((category) => category.items)
    .filter((item) => signatureNames.includes(item.name))
    .map((item) => ({
      name: item.name,
      description: item.description ?? "",
      price: item.price,
      image: null as string | null,
      badges: [] as string[],
      isSpicy: false,
      isSignature: item.signature ?? false,
    }))

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
              className="featured-card group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-none shadow-lg overflow-hidden flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Real photography replaces this once the restaurant supplies it. */}
              {dish.image && (
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3 gap-3">
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <span className="font-bold text-primary text-lg whitespace-nowrap">{dish.price}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{dish.description}</p>

                {dish.isSignature && (
                  <p className="mt-4 text-xs uppercase tracking-wider text-primary flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    House signature
                  </p>
                )}
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
