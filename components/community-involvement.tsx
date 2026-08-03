import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, GraduationCap, HandHeart } from "lucide-react"

export function CommunityInvolvement() {
  const communityInitiatives = [
    {
      icon: Heart,
      title: "Local Charity Support",
      description:
        "Annual fundraising dinners for local charities, donating thousands of dollars to support families in need throughout Sonoma County.",
      impact: "$50,000+ raised annually",
    },
    {
      icon: GraduationCap,
      title: "Culinary Education",
      description:
        "Partnering with local high schools to provide culinary internships and scholarships for aspiring chefs in our community.",
      impact: "25+ students mentored",
    },
    {
      icon: Users,
      title: "Community Events",
      description:
        "Hosting and sponsoring local festivals, farmers markets, and community celebrations that bring neighbors together.",
      impact: "12+ events annually",
    },
    {
      icon: HandHeart,
      title: "Senior Meal Program",
      description:
        "Providing discounted meals and free delivery for local seniors, ensuring no one in our community goes without a warm, nutritious meal.",
      impact: "200+ seniors served monthly",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Giving Back</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Art's Place isn't just a restaurant, it's part of the Rohnert Park community.
            we've been committed to giving back and supporting the neighbors who have supported us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {communityInitiatives.map((initiative, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <initiative.icon className="h-8 w-8 text-accent" />
                </div>

                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{initiative.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{initiative.description}</p>

                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-primary font-semibold text-sm">{initiative.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Quote */}
        <div className="max-w-3xl mx-auto text-center">
          <Card className="border-none shadow-xl bg-primary/5">
            <CardContent className="p-8">
              <blockquote className="text-foreground font-medium italic text-xl leading-relaxed mb-6">
                "We believe that a restaurant's success is measured not just by the food we serve, but by the positive
                impact we have on our community. Every meal we prepare, every event we host, and every dollar we donate
                is our way of saying 'thank you' to the community that has embraced us as family."
              </blockquote>
              <cite className="text-primary font-semibold text-lg">— Art Ibleto & Family</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
