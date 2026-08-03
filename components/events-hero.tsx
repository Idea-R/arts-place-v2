import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Star, MapPin } from "lucide-react"

export function EventsHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/outdoor-patio-dining-area-with-string-lights-and-i.png"
          alt="Art's Place outdoor patio event space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Capacity badge */}
        <div className="flex justify-center mb-8">
          <Badge className="bg-primary text-primary-foreground px-6 py-3 text-lg font-semibold">
            <Users className="w-5 h-5 mr-2" />
            Seats up to 50 Guests
          </Badge>
        </div>

        {/* Main headline */}
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-balance">
          Your Perfect Event
          <span className="block text-secondary">Awaits</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
          Create unforgettable memories on our enchanting outdoor patio, where authentic Italian cuisine meets
          exceptional hospitality under the stars.
        </p>

        {/* Features */}
        <div className="flex justify-center items-center gap-8 mb-8 flex-wrap text-sm">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <MapPin className="h-4 w-4" />
            <span>Beautiful Patio Setting</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Star className="h-4 w-4 fill-secondary text-secondary" />
            <span>Award-Winning Cuisine</span>
          </div>
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Calendar className="h-4 w-4" />
            <span>Full Event Planning</span>
          </div>
        </div>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-4"
          >
            Book Your Event
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground font-semibold text-lg px-8 py-4 bg-transparent"
          >
            View Catering Menu
          </Button>
        </div>
      </div>
    </section>
  )
}
