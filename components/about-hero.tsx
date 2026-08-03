import { Badge } from "@/components/ui/badge"
import { Award, Heart, Clock } from "lucide-react"

export function AboutHero() {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/older-chef-large-build-kitchen-facing-away.png')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges */}
          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            <Badge className="bg-primary text-primary-foreground px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Since 1983
            </Badge>
            <Badge className="bg-accent text-accent-foreground px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Award-Winning
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Family Owned
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Meet the
            <span className="block text-primary">Pasta King</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            For over four decades, Art Ibleto has been crafting authentic Italian cuisine that brings families together
            and creates lasting memories. This is the story of passion, tradition, and the pursuit of culinary
            perfection.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40+</div>
              <div className="text-sm text-white/80">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000s</div>
              <div className="text-sm text-white/80">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-white/80">Awards Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-white/80">Generations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
