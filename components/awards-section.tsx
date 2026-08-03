import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Star, Trophy, Medal } from "lucide-react"

export function AwardsSection() {
  const awards = [
    {
      year: "2023",
      title: "Best Italian Restaurant",
      organization: "Sonoma County Food & Wine Awards",
      description: "Recognized for outstanding authentic Italian cuisine and exceptional service.",
      icon: Trophy,
      featured: true,
    },
    {
      year: "2022",
      title: "Gold Medal - Pasta Division",
      organization: "Sonoma County Harvest Fair",
      description: "Spaghetti Half & Half wins gold for the 15th consecutive year.",
      icon: Medal,
      featured: false,
    },
    {
      year: "2021",
      title: "Community Champion Award",
      organization: "Rohnert Park Chamber of Commerce",
      description: "Honored for exceptional community service during challenging times.",
      icon: Star,
      featured: false,
    },
    {
      year: "2020",
      title: "Excellence in Hospitality",
      organization: "North Bay Business Journal",
      description: "Recognized for maintaining quality and care during the pandemic.",
      icon: Award,
      featured: false,
    },
    {
      year: "2019",
      title: "Best Wood-Fired Pizza",
      organization: "Press Democrat Readers' Choice",
      description: "Voted best wood-fired pizza in Sonoma County by readers.",
      icon: Trophy,
      featured: false,
    },
    {
      year: "2018",
      title: "Lifetime Achievement Award",
      organization: "California Restaurant Association",
      description: "Art Ibleto honored for 35+ years of culinary excellence.",
      icon: Star,
      featured: true,
    },
  ]

  const pressFeatures = [
    {
      publication: "San Francisco Chronicle",
      headline: "The Pasta King's Kingdom: A Sonoma County Gem",
      quote: "Art's Place serves some of the most authentic Italian food north of San Francisco.",
      year: "2023",
    },
    {
      publication: "Press Democrat",
      headline: "40 Years of Italian Excellence in Rohnert Park",
      quote: "Art Ibleto has created more than a restaurant—he's built a community gathering place.",
      year: "2023",
    },
    {
      publication: "Sonoma Magazine",
      headline: "The Secret to Perfect Pasta",
      quote: "The Pasta King's techniques are a masterclass in traditional Italian cooking.",
      year: "2022",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Awards Section */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Awards & Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Four decades of culinary excellence recognized by industry professionals and the community we proudly serve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {awards.map((award, index) => (
            <Card
              key={index}
              className={`border-none shadow-lg hover:shadow-xl transition-shadow ${
                award.featured ? "ring-2 ring-primary/20 bg-primary/5" : ""
              }`}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <award.icon className="h-8 w-8 text-primary" />
                </div>

                <div className="flex items-center justify-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">
                    {award.year}
                  </Badge>
                  {award.featured && <Badge className="bg-primary text-primary-foreground text-xs">Featured</Badge>}
                </div>

                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{award.title}</h3>
                <p className="text-primary font-medium text-sm mb-3">{award.organization}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Press Features */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">Featured in the Press</h3>
          <div className="space-y-6">
            {pressFeatures.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg mb-1">{feature.headline}</h4>
                      <p className="text-primary font-medium text-sm">{feature.publication}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.year}
                    </Badge>
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed border-l-4 border-primary/20 pl-4">
                    "{feature.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
