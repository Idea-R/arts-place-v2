"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

export function EventGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/outdoor-patio-dining-area-with-string-lights-and-i.png",
      alt: "Outdoor patio with string lights and dining setup",
      title: "Evening Patio Ambiance",
    },
    {
      src: "/private-party-setup-on-restaurant-patio-with-elega.png",
      alt: "Private party setup with elegant table arrangements",
      title: "Private Party Setup",
    },
    {
      src: "/wine-dinner-event-with-italian-food-and-wine-pairi.png",
      alt: "Wine dinner event with food and wine pairings",
      title: "Wine Dinner Experience",
    },
    {
      src: "/live-music-performance-on-restaurant-patio-with-ac.png",
      alt: "Live acoustic music performance on patio",
      title: "Live Music Night",
    },
    {
      src: "/corporate-event-setup-with-professional-table-arra.png",
      alt: "Corporate event with professional table arrangements",
      title: "Corporate Event Setup",
    },
    {
      src: "/wedding-rehearsal-dinner-setup-with-romantic-light.png",
      alt: "Wedding rehearsal dinner with romantic lighting",
      title: "Wedding Rehearsal Dinner",
    },
  ]

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Event Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we transform our beautiful patio space for different types of events and celebrations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-sm">Click to view larger</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />

              {/* Close button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Navigation */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Image title */}
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-lg font-semibold bg-black/50 rounded px-4 py-2 inline-block">
                  {galleryImages[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
