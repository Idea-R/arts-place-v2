// Single source of truth for every fact and every dish on this site.
//
// WHY THIS FILE EXISTS
// The original v0 generation invented its content: a 1983 opening date, a Tuscan
// childhood, eight named customer testimonials, a nine-entry company timeline, and a
// menu of dishes the kitchen does not serve. All of it read as real. This file
// replaces that with sourced content and keeps it in one editable place.
//
// THE RULE
// Nothing appears on screen that is not in this file. If a fact is not verified with
// the family or the kitchen, it carries `confirmed: false` and the UI marks it.
// Never invent a date, an award, a review, a quote, or a price. If a number is
// unknown, leave it out. An empty section is honest; a plausible one is not.
//
// HOW TO EDIT
//   Change a price or dish:  edit `menu` below.
//   Change hours or contact: edit `site` below.
//   Confirm a fact:          flip its `confirmed` to true once verified.

export type Fact<T> = { value: T; confirmed: boolean }

const unconfirmed = <T,>(value: T): Fact<T> => ({ value, confirmed: false })
const confirmed = <T,>(value: T): Fact<T> => ({ value, confirmed: true })

export const site = {
  name: "Art's Place",
  suffix: "Ristorante",
  tagline: "Where Friends Meet",
  taglineItalian: "Dove amici si incontrano",

  // Consistent across the Weebly site, Yelp, Google, and the Chamber listing.
  phone: confirmed("(707) 588-2787"),
  phoneSpoken: confirmed("(707) 588-ARTS"),
  city: confirmed("Rohnert Park"),
  region: confirmed("CA"),
  postalCode: confirmed("94928"),

  // Sources disagree on whether the street line carries "West". Confirm before launch.
  streetAddress: unconfirmed("563 Rohnert Park Expressway"),

  // Every public source agrees on 11:30am to 9:00pm daily. The old site last
  // published these in 2024, so the kitchen still has to confirm them.
  // The earlier v0 build claimed Friday and Saturday until 10:00pm. No source says that.
  hours: unconfirmed([
    { days: "Sunday to Thursday", hours: "11:30am to 9:00pm" },
    { days: "Friday & Saturday", hours: "11:30am to 9:00pm" },
  ]),

  // No public email address exists yet. The domain is registered, so one can be
  // created, but nothing is published until it actually receives mail.
  email: unconfirmed(""),
} as const

/**
 * Art Ibleto's biography. Sourced from the engagement research, NOT from the
 * earlier v0 copy, which placed him in Tuscany and had him opening in 1983.
 *
 * Past tense throughout. He passed away in 2020. This is not a style preference:
 * present-tense copy about a founder who has died reads as careless to the family
 * and to every regular who knew him.
 *
 * Dates still need family sign-off, so this whole group is unconfirmed.
 */
export const story = unconfirmed({
  birthplace: "Sesta Godano, a village near Genoa",
  wartime: "the Italian resistance",
  arrivalCity: "Petaluma",
  arrivalYear: "1949",
  fairStand: "the Spaghetti Palace",
  fairVenue: "the Sonoma County Fair",
  fairYear: "1974",
  openedYear: "2013",
  passedYear: "2020",
  passedAge: "94",
})

/**
 * Only milestones we can source. The previous timeline invented nine entries,
 * including a 1987 Harvest Fair win, a 1992 oven installation, a 1998 patio
 * expansion, a 2005 Chamber of Commerce Business of the Year award, and a 2010
 * second generation joining. None of those were verified, and inventing an award
 * from a real organization is the worst of them.
 *
 * If the family confirms more milestones, add them here.
 */
export const timeline = unconfirmed([
  {
    year: "1949",
    title: "Arrival in Sonoma County",
    description:
      "Art Ibleto arrived in Petaluma from Sesta Godano, a village near Genoa, after fighting with the Italian resistance as a teenager.",
  },
  {
    year: "1974",
    title: "The Spaghetti Palace",
    description:
      "Art opened the Spaghetti Palace at the Sonoma County Fair. Generations grew up on his half and half spaghetti and his baked polenta, and he became the Pasta King.",
  },
  {
    year: "2013",
    title: "Art's Place Opens",
    description:
      "Art opened Art's Place in Rohnert Park so the food could have a home open every day, not just fair week.",
  },
  {
    year: "2020",
    title: "A Legacy Continues",
    description:
      "Art passed away at 94. The kitchen he built keeps running on his recipes.",
  },
])

/**
 * Awards. The old build claimed "15+ Awards Won" with no source. The only award
 * language we can trace is the Harvest Fair double gold on the baked polenta, which
 * appeared on the restaurant's own site. Everything else waits for the family.
 */
export const awards = unconfirmed([
  {
    title: "Harvest Fair Double Gold",
    detail: "Baked Polenta, as described on the restaurant's own menu.",
  },
])

/**
 * Customer reviews.
 *
 * Deliberately empty. The previous build shipped eight five-star testimonials
 * attributed to invented people (Maria Rodriguez, David Chen, Jennifer Thompson,
 * Robert Wilson, and four more on the catering page). Fabricated reviews attributed
 * to named individuals are not placeholder copy; in published marketing they are a
 * compliance problem, and the family would spot them immediately.
 *
 * Art's Place has 448 real reviews on Yelp and hundreds more on Google. Pull real
 * quotes with attribution and permission, then add them here.
 */
export const testimonials: Fact<
  { quote: string; author: string; source: string }[]
> = unconfirmed([])

export type MenuItem = {
  name: string
  description?: string
  price: string
  /** Marks a genuine house signature, not a marketing flourish. */
  signature?: boolean
}

export type MenuCategory = {
  id: string
  name: string
  note?: string
  items: MenuItem[]
}

/**
 * The menu, transcribed from the restaurant's own published menu with prices and
 * wording preserved exactly. Do not round, tidy, or "improve" a price or a
 * description. If a price looks wrong, flag it rather than fixing it.
 *
 * The previous build listed dishes the kitchen does not serve, including Osso Buco
 * at $28.95, Arancini, Lasagna della Casa, and Quattro Stagioni, and it priced real
 * dishes wrongly (Baked Polenta at $19.95 against a real $16).
 *
 * Drinks, desserts, kids, wine, and beer are not here yet. Those pages exist on the
 * old site but have not been re-confirmed, and a partial menu is better than an
 * invented one.
 */
export const menu: Fact<MenuCategory[]> = unconfirmed([
  {
    id: "starters",
    name: "Starters",
    items: [
      { name: "Breaded Cheese Raviolis", description: "deep fried, marinara or pesto", price: "$13" },
      { name: "Mozzarella Sticks", description: "with marinara", price: "$11" },
      { name: "Fried Calamari", description: "cocktail or garlic aioli", price: "$12" },
      { name: "Bruschetta", description: "tomato, basil, balsamic", price: "$9" },
      { name: "Fried Zucchini", description: "ranch", price: "$9" },
      { name: "BBQ Pulled Pork Sliders", description: "coleslaw", price: "$12" },
      { name: "Onion Rings", description: "beer battered", price: "$10" },
      { name: "Chicken Wings", description: "hot buffalo or BBQ", price: "$14" },
      { name: "Cheesy Garlic Bread", description: "marinara dip", price: "$12" },
      { name: "Pesto Pizza Bites", description: "marinara dip", price: "$10" },
      { name: "Focaccia Bread", description: "house made", price: "$4" },
      { name: "Basket of Fries", price: "$8" },
    ],
  },
  {
    id: "pasta-king-signature-dishes",
    name: "Pasta King Signature Dishes",
    note: "Served with a side of garlic bread.",
    items: [
      { name: "Spaghetti Half & Half", description: "marinara & pesto sauces, the most popular dish at the fair", price: "$19", signature: true },
      { name: "Baked Polenta", description: "layered with cheese, marinara or creamy pesto béchamel sauce", price: "$16", signature: true },
      { name: "Spaghetti & Meatballs", description: "three house made meatballs on a plate of pasta & sauce", price: "$24" },
      { name: "Baked Lasagna", description: "choice of meat sauce, creamy marinara or creamy pesto béchamel", price: "$19" },
      { name: "Cheese Tortellini", description: "in a creamy parmesan sauce with prosciutto & peas", price: "$23" },
      { name: "Cheese Tortellini", description: "choice of sauce", price: "$19" },
      { name: "Ravioli", description: "beef or cheese, with choice of sauce", price: "$20" },
      { name: "Shrimp Scampi", description: "angel hair pasta, tomatoes, garlic, white wine, lemon, capers & red onion", price: "$24" },
      { name: "Fettuccine Alfredo", description: "classic preparation with garlic, cream & parmesan", price: "$18" },
      { name: "Chicken Parmesan", price: "$23" },
      { name: "Linguine & Clams", price: "$24" },
      { name: "Pasta Primavera", price: "$22" },
    ],
  },
  {
    id: "wood-fired-pizza",
    name: "Wood Fired Pizza",
    note: "Cooked in our Italian wood burning oven. Medium size only, $25.",
    items: [
      { name: "Margherita", description: "Roma tomatoes, basil & fresh mozzarella", price: "$25" },
      { name: "Pesto Chicken", description: "pesto sauce, grilled chicken, shaved parmesan", price: "$25" },
      { name: "Italian Sausage", description: "with roasted red peppers & roasted garlic", price: "$25" },
      { name: "Canadian Bacon", description: "with caramelized onions & pineapple", price: "$25" },
      { name: "Red Pepper Aioli", description: "with grilled chicken, bacon & roasted red peppers", price: "$25" },
      { name: "Chipotle Chicken", description: "with pico de gallo, garnished with sour cream drizzle", price: "$25" },
      { name: "Buffalo Blues", description: "with hot buffalo sauce, chicken & blue cheese crumbles", price: "$25" },
    ],
  },
  {
    id: "signature-pizzas",
    name: "Signature Pizzas",
    items: [
      { name: "Carne", description: "salami, pepperoni & Italian sausage", price: "Small $20 / Medium $24 / Large $29" },
    ],
  },
])

/** True only when every operational fact has been verified with the client. */
export const allFactsConfirmed =
  site.streetAddress.confirmed && site.hours.confirmed && story.confirmed
