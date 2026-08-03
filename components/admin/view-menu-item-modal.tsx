"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ViewMenuItemModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  item: any
}

export function ViewMenuItemModal({ open, onOpenChange, item }: ViewMenuItemModalProps) {
  if (!item) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-italian-red">{item.price}</span>
            <div className="flex gap-2">
              <Badge className="bg-green-100 text-green-800">{item.status}</Badge>
              {item.featured && <Badge className="bg-pasta-gold text-black">Featured</Badge>}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Category</h4>
            <Badge variant="outline">{item.category}</Badge>
          </div>

          <Separator />

          <div>
            <h4 className="font-medium mb-2">Description</h4>
            <p className="text-gray-600">
              {item.name === "Fettuccine Alfredo" &&
                "Creamy fettuccine pasta tossed in our signature Alfredo sauce with fresh parmesan cheese."}
              {item.name === "Margherita Pizza" &&
                "Classic wood-fired pizza with fresh mozzarella, tomato sauce, and basil leaves."}
              {item.name === "Chicken Parmigiana" &&
                "Breaded chicken breast topped with marinara sauce and melted mozzarella, served with spaghetti."}
              {item.name === "Caesar Salad" &&
                "Crisp romaine lettuce with our house-made Caesar dressing, croutons, and parmesan cheese."}
              {item.name === "Tiramisu" &&
                "Traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream."}
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-2">Dietary Information</h4>
            <div className="flex flex-wrap gap-2">
              {item.category === "Appetizers" && <Badge variant="secondary">Vegetarian</Badge>}
              {item.name === "Margherita Pizza" && <Badge variant="secondary">Vegetarian</Badge>}
              {item.name === "Tiramisu" && <Badge variant="secondary">Contains Alcohol</Badge>}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Allergens</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="destructive">Dairy</Badge>
              <Badge variant="destructive">Gluten</Badge>
              {item.name === "Tiramisu" && <Badge variant="destructive">Eggs</Badge>}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-1">Prep Time</h4>
              <p className="text-gray-600">
                {item.category === "Pizza"
                  ? "15-20 min"
                  : item.category === "Pasta"
                    ? "12-15 min"
                    : item.category === "Entrees"
                      ? "20-25 min"
                      : item.category === "Appetizers"
                        ? "8-10 min"
                        : "5 min"}
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-1">Calories</h4>
              <p className="text-gray-600">
                {item.category === "Pizza"
                  ? "320"
                  : item.category === "Pasta"
                    ? "580"
                    : item.category === "Entrees"
                      ? "650"
                      : item.category === "Appetizers"
                        ? "180"
                        : "420"}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
