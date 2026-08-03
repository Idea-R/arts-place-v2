"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Star, Leaf, Wheat, Flame, Clock, Users } from "lucide-react"

interface NutritionalInfoModalProps {
  isOpen: boolean
  onClose: () => void
  item: {
    name: string
    description: string
    price: string
    image: string
    dietary?: string[]
    isSignature?: boolean
    isSpicy?: boolean
  }
}

export function NutritionalInfoModal({ isOpen, onClose, item }: NutritionalInfoModalProps) {
  // Sample nutritional data - in a real app, this would come from your database
  const nutritionalInfo = {
    calories: Math.floor(Math.random() * 400) + 300,
    protein: Math.floor(Math.random() * 30) + 15,
    carbs: Math.floor(Math.random() * 50) + 25,
    fat: Math.floor(Math.random() * 25) + 10,
    fiber: Math.floor(Math.random() * 8) + 2,
    sodium: Math.floor(Math.random() * 800) + 400,
    servingSize: "1 portion",
    prepTime: "15-20 minutes",
    allergens: ["Contains: Wheat, Dairy", "May contain: Eggs, Nuts"],
  }

  const dietaryOptions = [
    { id: "V", label: "Vegetarian", icon: Leaf, color: "bg-green-100 text-green-800" },
    { id: "GF", label: "Gluten-Free", icon: Wheat, color: "bg-amber-100 text-amber-800" },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl text-foreground">{item.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image and Basic Info */}
          <div className="relative">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute top-3 left-3 flex flex-wrap gap-1">
              {item.isSignature && (
                <Badge className="bg-primary text-primary-foreground text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  Pasta King's Choice
                </Badge>
              )}
              {item.dietary?.map((diet) => {
                const option = dietaryOptions.find((opt) => opt.id === diet)
                return option ? (
                  <Badge key={diet} className={`${option.color} text-xs`}>
                    <option.icon className="w-3 h-3 mr-1" />
                    {option.label}
                  </Badge>
                ) : null
              })}
            </div>
            {item.isSpicy && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-orange-100 text-orange-800 text-xs">
                  <Flame className="w-3 h-3 mr-1" />
                  Spicy
                </Badge>
              </div>
            )}
          </div>

          {/* Description and Price */}
          <div className="flex justify-between items-start">
            <p className="text-muted-foreground leading-relaxed flex-1 mr-4">{item.description}</p>
            <span className="font-bold text-primary text-2xl">{item.price}</span>
          </div>

          <Separator />

          {/* Quick Facts */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{nutritionalInfo.prepTime}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{nutritionalInfo.servingSize}</span>
            </div>
          </div>

          <Separator />

          {/* Nutritional Information */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nutritional Information</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-bold text-2xl text-primary">{nutritionalInfo.calories}</div>
                <div className="text-sm text-muted-foreground">Calories</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-bold text-2xl text-primary">{nutritionalInfo.protein}g</div>
                <div className="text-sm text-muted-foreground">Protein</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-bold text-2xl text-primary">{nutritionalInfo.carbs}g</div>
                <div className="text-sm text-muted-foreground">Carbs</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-bold text-2xl text-primary">{nutritionalInfo.fat}g</div>
                <div className="text-sm text-muted-foreground">Fat</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-bold text-2xl text-primary">{nutritionalInfo.fiber}g</div>
                <div className="text-sm text-muted-foreground">Fiber</div>
              </div>
              <div className="text-center p-3 bg-muted rounded-lg">
                <div className="font-bold text-2xl text-primary">{nutritionalInfo.sodium}mg</div>
                <div className="text-sm text-muted-foreground">Sodium</div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Allergen Information */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Allergen Information</h3>
            <div className="space-y-2">
              {nutritionalInfo.allergens.map((allergen, index) => (
                <div key={index} className="text-sm text-muted-foreground bg-muted p-2 rounded">
                  {allergen}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              size="lg"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                // In a real app, this would open a reservation or call system
                window.open("tel:+17075882787", "_self")
              }}
            >
              Call to Order: (707) 588-2787
            </Button>
            <Button size="lg" variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
