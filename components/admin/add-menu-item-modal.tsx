"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface AddMenuItemModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddMenuItemModal({ open, onOpenChange }: AddMenuItemModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    featured: false,
    vegetarian: false,
    glutenFree: false,
    spicy: false,
    ingredients: "",
    allergens: [] as string[],
    prepTime: "",
    calories: "",
  })

  const [newAllergen, setNewAllergen] = useState("")

  const addAllergen = () => {
    if (newAllergen && !formData.allergens.includes(newAllergen)) {
      setFormData((prev) => ({
        ...prev,
        allergens: [...prev.allergens, newAllergen],
      }))
      setNewAllergen("")
    }
  }

  const removeAllergen = (allergen: string) => {
    setFormData((prev) => ({
      ...prev,
      allergens: prev.allergens.filter((a) => a !== allergen),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Adding new menu item:", formData)
    onOpenChange(false)
    // Reset form
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      featured: false,
      vegetarian: false,
      glutenFree: false,
      spicy: false,
      ingredients: "",
      allergens: [],
      prepTime: "",
      calories: "",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Menu Item</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Item Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Price *</Label>
              <Input
                id="price"
                value={formData.price}
                onChange={(e) => setFormData((prev) => ({ ...prev, price: e.target.value }))}
                placeholder="$0.00"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Category *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Appetizers">Appetizers</SelectItem>
                  <SelectItem value="Pasta">Pasta</SelectItem>
                  <SelectItem value="Pizza">Pizza</SelectItem>
                  <SelectItem value="Entrees">Entrees</SelectItem>
                  <SelectItem value="Desserts">Desserts</SelectItem>
                  <SelectItem value="Beverages">Beverages</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="prepTime">Prep Time (minutes)</Label>
              <Input
                id="prepTime"
                value={formData.prepTime}
                onChange={(e) => setFormData((prev) => ({ ...prev, prepTime: e.target.value }))}
                type="number"
              />
            </div>
          </div>

          {/* Dietary Options */}
          <div className="space-y-4">
            <Label>Dietary Options</Label>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, featured: checked }))}
                />
                <Label htmlFor="featured">Featured Item</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="vegetarian"
                  checked={formData.vegetarian}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, vegetarian: checked }))}
                />
                <Label htmlFor="vegetarian">Vegetarian</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="glutenFree"
                  checked={formData.glutenFree}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, glutenFree: checked }))}
                />
                <Label htmlFor="glutenFree">Gluten Free</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="spicy"
                  checked={formData.spicy}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, spicy: checked }))}
                />
                <Label htmlFor="spicy">Spicy</Label>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div>
            <Label htmlFor="ingredients">Main Ingredients</Label>
            <Textarea
              id="ingredients"
              value={formData.ingredients}
              onChange={(e) => setFormData((prev) => ({ ...prev, ingredients: e.target.value }))}
              placeholder="List main ingredients separated by commas"
              rows={2}
            />
          </div>

          {/* Allergens */}
          <div>
            <Label>Allergens</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={newAllergen}
                onChange={(e) => setNewAllergen(e.target.value)}
                placeholder="Add allergen"
                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addAllergen())}
              />
              <Button type="button" onClick={addAllergen} variant="outline">
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.allergens.map((allergen) => (
                <Badge key={allergen} variant="secondary" className="flex items-center gap-1">
                  {allergen}
                  <X className="w-3 h-3 cursor-pointer" onClick={() => removeAllergen(allergen)} />
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="calories">Calories (optional)</Label>
            <Input
              id="calories"
              value={formData.calories}
              onChange={(e) => setFormData((prev) => ({ ...prev, calories: e.target.value }))}
              type="number"
            />
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Add Menu Item
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
