import { Card, CardContent } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import { awards } from "@/lib/content"

/**
 * Awards and press.
 *
 * This component previously listed six awards attributed to six real organisations
 * (Sonoma County Food & Wine Awards, Sonoma County Harvest Fair, Rohnert Park Chamber
 * of Commerce, North Bay Business Journal, Press Democrat Readers' Choice, California
 * Restaurant Association) with years and citations. None were verified.
 *
 * It also carried a "Featured in the Press" block with three quotations attributed to
 * the San Francisco Chronicle, the Press Democrat, and Sonoma Magazine. Those
 * publications never wrote those words. Putting invented quotes in the mouth of a
 * real newspaper is the most serious thing that was in this codebase, and the press
 * block is gone entirely rather than softened.
 *
 * What remains is the one award we can actually trace: the Harvest Fair double gold
 * on the baked polenta, which the restaurant states on its own menu. Add more only
 * when the family confirms them, in lib/content.ts.
 */
export function AwardsSection() {
  const list = awards.value

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Recognition</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Art competed at the Sonoma County Harvest Fair for years. We are collecting that record from the family
            rather than guessing at it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {list.map((award, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{award.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{award.detail}</p>
              </CardContent>
            </Card>
          ))}

          <Card className="border-dashed">
            <CardContent className="p-6 text-center flex flex-col justify-center h-full">
              <p className="text-foreground font-medium mb-2">More to come</p>
              <p className="text-sm text-muted-foreground">
                Awards and press mentions are added here once the family confirms them.
              </p>
            </CardContent>
          </Card>
        </div>

        {!awards.confirmed && (
          <p className="mt-8 text-center text-xs uppercase tracking-wider text-muted-foreground">
            Awards to confirm with the family
          </p>
        )}
      </div>
    </section>
  )
}
