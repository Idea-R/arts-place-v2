import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { MobileNav } from "@/components/mobile-nav"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Art's Place - Authentic Italian Restaurant | Rohnert Park, CA",
  description:
    "Authentic Italian cuisine at Art's Place in Rohnert Park, home of the Pasta King. Pasta, wood fired pizza, and the family recipes Art Ibleto built his name on.",
  keywords: [
    "Italian restaurant",
    "Rohnert Park",
    "Pasta King",
    "authentic Italian",
    "wood-fired pizza",
    "family restaurant",
    "Sonoma County dining",
    "Art Ibleto",
    "Italian cuisine",
    "event venue",
  ],
  authors: [{ name: "Art's Place Restaurant" }],
  creator: "Art's Place Restaurant",
  publisher: "Art's Place Restaurant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Art's Place - Authentic Italian Restaurant | The Pasta King",
    description:
      "Home of the Pasta King. Authentic Italian cuisine in Rohnert Park: pasta, wood fired pizza, and family recipes.",
    type: "website",
    locale: "en_US",
    url: "https://artsplacerp.com",
    siteName: "Art's Place Restaurant",
    // Served from this repo, not from the old v0 project's Vercel blob store. That
    // store belongs to a project we intend to delete, and the share image for the
    // whole site should not depend on something we are about to turn off.
    // Dimensions are the file's real ones. They were declared 1200x630, which the
    // photo has never been, so every platform was being told the wrong crop.
    images: [
      {
        url: "/photos/art-ibleto.jpg",
        width: 1536,
        height: 1536,
        alt: "Art Ibleto, The Pasta King, at Art's Place Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Art's Place - Authentic Italian Restaurant",
    description: "Home of the Pasta King. Authentic Italian cuisine in Rohnert Park.",
    images: ["/photos/art-ibleto.jpg"],
  },
  // `verification` removed. It carried the literal string "your-google-verification-code",
  // which Next.js emitted as a real google-site-verification meta tag. A placeholder
  // shipped as a verification token is worse than no tag: it is a broken claim of
  // ownership on a listing that, as it happens, is still unclaimed. Add the real token
  // when the Google Business Profile is claimed.
  category: "restaurant",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>{children}        <MobileNav />
      </body>
    </html>
  )
}
