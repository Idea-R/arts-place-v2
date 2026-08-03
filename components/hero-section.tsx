"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { site } from "@/lib/content"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src="/authentic-italian-pasta-dish-with-fresh-basil-and-.png"
          alt="Authentic Italian cuisine at Art's Place"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center items-center gap-6 mb-8 text-sm">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300 hover:scale-105">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span>Pasta King Recipes</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300 hover:scale-105">
            Family Owned
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300 hover:scale-105">
            Wood Fired
          </div>
        </div>

        {/* Main headline. No span of years is asserted here: the founding dates are
            still unconfirmed, and the previous "Since 1983" was wrong outright. */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in-up">
          {site.tagline}
          <span className="block text-secondary italic">{site.taglineItalian}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 text-balance max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Authentic Italian in Rohnert Park, from the{" "}
          <span className="text-secondary font-semibold">Pasta King's</span> own recipes
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Call to Order
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/menu">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground font-semibold text-lg px-8 py-4 bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              View Menu
            </Button>
          </Link>
        </div>

        {/* Signature tagline */}
        <p className="mt-8 text-lg text-secondary animate-fade-in-up animation-delay-600">
          Rohnert Park, California
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
