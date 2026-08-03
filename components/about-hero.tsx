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
          {/* No "Since 1983" badge: the date was wrong, and no span of years is
              asserted anywhere until the founding dates are confirmed. */}
          <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
            <Badge className="bg-primary text-primary-foreground px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Sonoma County
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

          {/* Past tense. Art passed away in 2020. */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Some people are remembered for one great dish. Art Ibleto was remembered for feeding a whole county.
          </p>

          {/* The stats bar that used to sit here claimed "40+ Years of Service",
              "1000s Happy Families", "15+ Awards Won", and "3 Generations". None of
              those figures had a source, so the bar is gone rather than guessed at.
              If the family confirms real numbers, they belong in lib/content.ts. */}
        </div>
      </div>
    </section>
  )
}
