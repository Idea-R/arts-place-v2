import { Card, CardContent } from "@/components/ui/card"
import { Users, Briefcase, Wine, Music, Heart, Utensils } from "lucide-react"

export function EventTypes() {
  const eventTypes = [
    {
      icon: Heart,
      title: "Private Celebrations",
      description: "Birthdays, anniversaries, graduations, and family milestones",
      features: ["Customized menu options", "Decorative lighting", "Private patio access", "Dedicated server"],
      capacity: "10-50 guests",
      pricing: "Starting at $35/person",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description: "Business meetings, team building, company parties, and client dinners",
      features: ["AV equipment available", "Professional atmosphere", "Flexible seating", "Corporate catering"],
      capacity: "15-50 guests",
      pricing: "Starting at $40/person",
    },
    {
      icon: Wine,
      title: "Wine Dinners",
      description: "Curated wine pairings with our signature Italian dishes",
      features: ["Sommelier-selected wines", "Multi-course tasting", "Educational experience", "Take-home notes"],
      capacity: "20-40 guests",
      pricing: "Starting at $65/person",
    },
    {
      icon: Music,
      title: "Live Music Nights",
      description: "Intimate acoustic performances with dinner service",
      features: ["Local musicians", "Acoustic atmosphere", "Full dinner service", "Reserved seating"],
      capacity: "25-50 guests",
      pricing: "Starting at $45/person",
    },
    {
      icon: Users,
      title: "Wedding Rehearsals",
      description: "Intimate rehearsal dinners in a romantic setting",
      features: ["Romantic lighting", "Customized menu", "Bridal party seating", "Special decorations"],
      capacity: "15-35 guests",
      pricing: "Starting at $50/person",
    },
    {
      icon: Utensils,
      title: "Cooking Classes",
      description: "Learn to make authentic Italian dishes with Chef Art",
      features: ["Hands-on instruction", "Recipe cards", "Wine pairings", "Take-home ingredients"],
      capacity: "8-16 guests",
      pricing: "Starting at $75/person",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Event Types We Host</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From intimate family celebrations to corporate gatherings, our versatile patio space and authentic Italian
            cuisine create the perfect backdrop for any occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {eventTypes.map((eventType, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <eventType.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-center mb-3">{eventType.title}</h3>
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">{eventType.description}</p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-foreground">Capacity:</span>
                    <span className="text-muted-foreground">{eventType.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium text-foreground">Pricing:</span>
                    <span className="text-primary font-semibold">{eventType.pricing}</span>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-2 text-sm">Included Features:</h4>
                    <ul className="space-y-1">
                      {eventType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
