import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function PastaKingStory() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://ltr1z7kpduo1wich.public.blob.vercel-storage.com/Images/ThePastaKing.jpg"
                alt="Art Ibleto, The Pasta King, in his kitchen"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <Quote className="h-8 w-8" />
              </div>
            </div>

            {/* Story Content */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                The Man Behind the Magic
              </h2>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Art Ibleto's journey began in the hills of Tuscany, where he learned the secrets of authentic Italian
                  cooking from his grandmother. Armed with family recipes passed down through generations and an
                  unwavering commitment to quality, Art immigrated to California with a dream of sharing true Italian
                  flavors with his new community.
                </p>

                <p>
                  In 1983, Art opened the doors of Art's Place in Rohnert Park, transforming a small space into what
                  would become Sonoma County's most beloved Italian restaurant. His dedication to using only the finest
                  ingredients, making pasta fresh daily, and treating every guest like family quickly earned him the
                  affectionate title of "The Pasta King."
                </p>

                <p>
                  What sets Art apart isn't just his culinary expertise—it's his genuine love for bringing people
                  together. Whether you're celebrating a special occasion or simply enjoying a weeknight dinner, Art
                  ensures that every meal is prepared with the same care and attention he would give to his own family.
                </p>
              </div>

              {/* Quote */}
              <Card className="mt-8 border-l-4 border-l-primary bg-primary/5">
                <CardContent className="p-6">
                  <blockquote className="text-foreground font-medium italic text-lg">
                    "Cooking is not just about feeding the body—it's about nourishing the soul and creating memories
                    that last a lifetime. Every dish that leaves my kitchen carries with it the love and tradition of my
                    Italian heritage."
                  </blockquote>
                  <cite className="text-primary font-semibold mt-4 block">— Art Ibleto, The Pasta King</cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
