/**
 * Real customer reviews, pulled from the public Google and Yelp listings on
 * 2026-08-04.
 *
 * Rules this file exists to enforce:
 *
 * 1. NOTHING HERE IS WRITTEN BY US. Every quote is verbatim from a public review.
 *    The previous build shipped eight invented testimonials with invented names,
 *    which is exactly what these replace.
 * 2. Attribution as the platform shows it. Yelp already abbreviates surnames, so
 *    Google names are abbreviated to match rather than publishing a full name in a
 *    context the reviewer did not choose.
 * 3. Quotes are trimmed at sentence boundaries only. No word is changed, and nothing
 *    is trimmed in a way that flips the meaning.
 * 4. NO AGGREGATE RATING is displayed anywhere. Google sits at 4.4 and Yelp at 3.8,
 *    and picking the flattering one, or averaging them into a number that exists
 *    nowhere, would be the same dishonesty in a new hat. Individual reviews carry
 *    their own star count and nothing else is implied.
 *
 * Before launch: ask the restaurant whether they want these specific reviews shown.
 * They are public, and quoting them with attribution is ordinary practice, but it is
 * their relationship with those customers, not ours.
 */

export type Review = {
  quote: string;
  author: string;
  location?: string;
  platform: "google" | "yelp";
  date: string;
  stars: number;
  sourceUrl: string;
};

const GOOGLE_URL =
  "https://www.google.com/maps/place/Art's+Place/@38.3478702,-122.7233288,17z";
const YELP_URL = "https://www.yelp.com/biz/arts-place-rohnert-park";

export const reviews: Review[] = [
  {
    quote:
      "Their half and half pasta (marinara and pesto) is the best in town and always has been! Every year we'd go to the fair, that's what we would get.",
    author: "Kendra S.",
    location: "Petaluma, CA",
    platform: "yelp",
    date: "June 2026",
    stars: 5,
    sourceUrl: YELP_URL,
  },
  {
    quote:
      "You could order a water off of this menu and it's going to be phenomenal. The food here is authentic and fresh.",
    author: "Rheanna K.",
    platform: "google",
    date: "2026",
    stars: 5,
    sourceUrl: GOOGLE_URL,
  },
  {
    quote:
      "Art's is one of our favorite places to eat! The food is always delicious, the service is friendly, and the atmosphere is great. Every time my family comes to visit from out of town, they always ask to go back to Art's for dinner.",
    author: "Marlys J.",
    location: "San Rafael, CA",
    platform: "yelp",
    date: "July 2026",
    stars: 5,
    sourceUrl: YELP_URL,
  },
  {
    quote:
      "Love the ambiance, food was perfectly cooked, service excellent.",
    author: "Google reviewer",
    platform: "google",
    date: "2026",
    stars: 5,
    sourceUrl: GOOGLE_URL,
  },
];
