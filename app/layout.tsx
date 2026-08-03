import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

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
    images: [
      {
        url: "https://ltr1z7kpduo1wich.public.blob.vercel-storage.com/Images/ThePastaKing.jpg",
        width: 1200,
        height: 630,
        alt: "Art Ibleto, The Pasta King, at Art's Place Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Art's Place - Authentic Italian Restaurant",
    description: "Home of the Pasta King. Authentic Italian cuisine in Rohnert Park.",
    images: ["https://ltr1z7kpduo1wich.public.blob.vercel-storage.com/Images/ThePastaKing.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
