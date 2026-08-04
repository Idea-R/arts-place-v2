"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CreditCard,
  BarChart3,
  MessageSquare,
  Sparkles,
  ChevronDown,
} from "lucide-react"

/**
 * Connector panels.
 *
 * DESIGNED PREVIEWS, not live integrations, and every one says so on screen. That
 * label is not decoration: this dashboard sits next to genuinely working menu CRUD,
 * so without it a viewer would reasonably assume these work too. Overselling an
 * integration is how you end up owing someone a POS build nobody quoted.
 *
 * Every figure is marked sample. None of these numbers is the restaurant's.
 */

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b py-2 text-sm last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium tabular-nums">{value}</span>
    </div>
  )
}

const PANELS = [
  {
    id: "pos",
    name: "SkyTab POS",
    icon: CreditCard,
    summary: "Orders, menu sync, and today's takings in one place.",
    rows: [
      ["Orders today", "sample"],
      ["Covers", "sample"],
      ["Menu last synced", "not connected"],
    ],
    detail:
      "Push the menu straight to the till so the board and the POS never disagree, and pull the order feed back so this page shows the night as it happens.",
  },
  {
    id: "reporting",
    name: "Reporting",
    icon: BarChart3,
    summary: "What sells, what sits, and what changed.",
    rows: [
      ["Top seller this week", "sample"],
      ["Covers by day", "sample"],
      ["Slow movers", "sample"],
    ],
    detail:
      "A reason to open this on a Monday rather than only when a price is wrong. Price history already exists in the change log, so you can see when something moved and who moved it.",
  },
  {
    id: "social",
    name: "Social & reviews",
    icon: MessageSquare,
    summary: "One inbox for Yelp and Google. Push a special to social.",
    rows: [
      ["Yelp reviews", "448 (public count)"],
      ["Google reviews", "hundreds (public count)"],
      ["Unanswered", "not connected"],
    ],
    detail:
      "Reviews from both platforms in one list with reply drafting, and a composer that pushes tonight's special to Facebook and Instagram from the same place it was published here.",
  },
  {
    id: "ai",
    name: "AI tooling",
    icon: Sparkles,
    summary: "Draft the words, suggest the price, describe the photo.",
    rows: [
      ["Dish descriptions", "draft & edit"],
      ["Weekly special post", "draft & edit"],
      ["Price from food cost", "suggestion only"],
      ["Alt text for uploads", "automatic"],
    ],
    detail:
      "Everything drafted, never published on its own. A suggested price is a starting point for the kitchen, not a decision, and alt text written at upload time keeps the site accessible without anyone remembering to do it.",
  },
]

export function Connectors() {
  const [open, setOpen] = useState<string | null>("pos")

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-serif text-xl font-semibold">Connections</h2>
          <p className="text-sm text-muted-foreground">
            Where this goes next: the till, the numbers, the reviews, and the writing.
          </p>
        </div>
        <Badge variant="outline" className="border-amber-500 text-amber-700 dark:text-amber-400">
          Preview, not connected
        </Badge>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {PANELS.map((p) => {
          const isOpen = open === p.id
          const Icon = p.icon
          return (
            <Card key={p.id} className="overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : p.id)}
                aria-expanded={isOpen}
                className="flex w-full items-start gap-4 p-5 text-left"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="block font-serif font-semibold">{p.name}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {p.summary}
                  </span>
                </span>
                <ChevronDown
                  className={`mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>

              {isOpen && (
                <CardContent className="border-t pt-4">
                  {p.rows.map(([label, value]) => (
                    <Row key={label} label={label} value={value} />
                  ))}
                  <p className="mt-4 text-sm text-muted-foreground">{p.detail}</p>
                </CardContent>
              )}
            </Card>
          )
        })}
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Figures marked sample are illustrative. None of these panels is wired to a live
        service yet, and the numbers are not the restaurant&rsquo;s. The menu editing on
        the other tabs, by contrast, is real and saves to the database.
      </p>
    </div>
  )
}
