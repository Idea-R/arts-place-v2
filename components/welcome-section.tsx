import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Users } from "lucide-react"

export function WelcomeSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Welcome to Art's Place</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Where every meal is a celebration of authentic Italian tradition. For over four decades, Art Ibleto, known
            throughout Sonoma County as "The Pasta King," has been crafting award-winning Italian dishes that bring
            families together and create lasting memories.
          </p>
          <div className="mt-6 text-right">
            <p className="font-serif text-lg text-primary italic">- Art Ibleto, The Pasta King</p>
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Award-Winning</h3>
              <p className="text-muted-foreground">
                Recognized at the Sonoma County Harvest Fair for our exceptional pasta and authentic Italian recipes.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Family Tradition</h3>
              <p className="text-muted-foreground">
                Four decades of serving authentic Italian cuisine with recipes passed down through generations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">Community Hub</h3>
              <p className="text-muted-foreground">
                A gathering place for families and friends, where every guest is treated like family.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
