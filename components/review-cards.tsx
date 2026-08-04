import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { reviews, type Review } from "@/lib/reviews"

/**
 * Review cards, styled per platform.
 *
 * Google and Yelp each have a visual signature people recognise instantly, and
 * borrowing it does real work: a card that looks like it came from Google reads as
 * something a stranger wrote, where a card in our own house style reads as marketing
 * copy we wrote about ourselves. Which is the whole point, because these are real.
 *
 * No aggregate rating anywhere. Google is 4.4, Yelp is 3.8, and showing the flattering
 * one or averaging them into a number that exists nowhere would be the same dishonesty
 * this project has spent its time removing. Each card carries that reviewer's own
 * stars and implies nothing beyond itself.
 */

function Stars({ n, className }: { n: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 ${className ?? ""}`} aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < n ? "fill-current" : "opacity-25"}`}
          aria-hidden
        />
      ))}
    </span>
  )
}

function GoogleCard({ r }: { r: Review }) {
  return (
    <Card className="border shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* The four-colour G, drawn rather than fetched, so no external request
                and no logo file to go stale. */}
            <span
              aria-hidden
              className="grid h-6 w-6 place-items-center rounded-full text-[0.7rem] font-bold"
              style={{
                background:
                  "conic-gradient(#EA4335 0 25%, #FBBC05 0 50%, #34A853 0 75%, #4285F4 0)",
                color: "white",
              }}
            >
              G
            </span>
            <span className="text-sm font-medium">Google</span>
          </div>
          <Stars n={r.stars} className="text-[#FBBC05]" />
        </div>

        <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
          {r.quote}
        </blockquote>

        <footer className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{r.author}</span>
          <span>&middot;</span>
          <span>{r.date}</span>
        </footer>
      </CardContent>
    </Card>
  )
}

function YelpCard({ r }: { r: Review }) {
  return (
    <Card className="border shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded bg-[#D32323] px-2 py-0.5 text-[0.7rem] font-bold tracking-tight text-white">
            yelp
          </span>
          <Stars n={r.stars} className="text-[#D32323]" />
        </div>

        <blockquote className="mt-3 text-sm leading-relaxed text-foreground">
          {r.quote}
        </blockquote>

        <footer className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{r.author}</span>
          {r.location && (
            <>
              <span>&middot;</span>
              <span>{r.location}</span>
            </>
          )}
          <span>&middot;</span>
          <span>{r.date}</span>
        </footer>
      </CardContent>
    </Card>
  )
}

export function ReviewCards() {
  if (reviews.length === 0) return null

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            What guests say
          </h2>
          <p className="text-muted-foreground">
            Real reviews from Google and Yelp. We did not write these.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {reviews.map((r, i) =>
            r.platform === "google" ? (
              <GoogleCard key={i} r={r} />
            ) : (
              <YelpCard key={i} r={r} />
            ),
          )}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Quoted from public listings, trimmed only at sentence breaks.{" "}
          <a
            href="https://www.yelp.com/biz/arts-place-rohnert-park"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read them all on Yelp
          </a>
          .
        </p>
      </div>
    </section>
  )
}
