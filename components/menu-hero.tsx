import { Badge } from "@/components/ui/badge"
import { Star, Award, Flame } from "lucide-react"

export function MenuHero() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fresh-italian-ingredients-herbs-tomatoes-pasta.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badges */}
          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            <Badge className="bg-primary text-primary-foreground px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning Recipes
            </Badge>
            <Badge className="bg-accent text-accent-foreground px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              40+ Years of Tradition
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
              <Flame className="w-4 h-4 mr-2" />
              Wood-Fired Fresh Daily
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            The Pasta King's
            <span className="block text-primary">Authentic Menu</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Every dish tells a story of Italian tradition, crafted with the finest ingredients and recipes perfected
            over four decades. From our signature Spaghetti Half & Half to our wood-fired pizzas, taste the authentic
            flavors that made Art famous throughout Sonoma County.
          </p>

          {/* Special note */}
          <div className="bg-white/95 border border-white/20 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-gray-900 font-medium mb-2">
              <span className="text-primary font-semibold">Chef's Note:</span> All pasta is made fresh daily using
              traditional Italian techniques.
            </p>
            <p className="text-sm text-gray-700">
              Gluten-free and vegetarian options available. Please inform your server of any dietary restrictions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
