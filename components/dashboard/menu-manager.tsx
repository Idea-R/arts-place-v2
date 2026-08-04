"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, Pencil, Trash2, Star, X, AlertCircle } from "lucide-react"
import { saveMenuItem, deleteMenuItem, toggleItemAvailability } from "@/app/admin/dashboard/actions"
import { PhotoUpload } from "./photo-upload"

type Item = {
  id: string
  name: string
  description: string | null
  price: string
  is_signature: boolean
  is_available: boolean
  category_id: string
  photo_url?: string | null
}
type Category = { id: string; name: string; items: Item[] }

export function MenuManager({ categories }: { categories: Category[] }) {
  const [editing, setEditing] = useState<Partial<Item> | null>(null)
  const [error, setError] = useState("")
  const [pending, start] = useTransition()

  const submit = (formData: FormData) => {
    setError("")
    start(async () => {
      const res = await saveMenuItem(formData)
      if (res.ok) setEditing(null)
      else setError(res.error)
    })
  }

  const remove = (item: Item) => {
    // Deleting a dish is easy to do by accident and there is no undo, so it asks.
    if (!confirm(`Remove "${item.name}" from the menu? This cannot be undone.`)) return
    start(async () => {
      const res = await deleteMenuItem(item.id)
      if (!res.ok) setError(res.error)
    })
  }

  return (
    <div className="space-y-8">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {editing && (
        <Card className="border-primary/40 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg font-semibold">
                {editing.id ? "Edit dish" : "Add a dish"}
              </h3>
              <Button variant="ghost" size="sm" onClick={() => setEditing(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <form action={submit} className="grid gap-4 md:grid-cols-2">
              {editing.id && <input type="hidden" name="id" value={editing.id} />}
              <div className="space-y-2">
                <Label htmlFor="name">Dish name</Label>
                <Input id="name" name="name" defaultValue={editing.name ?? ""} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  defaultValue={editing.price ?? ""}
                  placeholder="$19"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Type it exactly as it should read. Sizes are fine: &ldquo;Small $20 / Large $29&rdquo;.
                </p>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  defaultValue={editing.description ?? ""}
                  placeholder="marinara & pesto sauces"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category_id">Category</Label>
                <select
                  id="category_id"
                  name="category_id"
                  defaultValue={editing.category_id ?? categories[0]?.id}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end gap-6">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="is_signature"
                    defaultChecked={editing.is_signature ?? false}
                    className="h-4 w-4"
                  />
                  House signature
                </label>
              </div>
              <div className="md:col-span-2">
                <PhotoUpload
                  key={editing.id ?? "new"}
                  initialUrl={editing.photo_url ?? null}
                  label="Dish photo (optional)"
                />
              </div>
              <div className="md:col-span-2 flex gap-3">
                <Button type="submit" disabled={pending}>
                  {pending ? "Saving..." : "Save to the menu"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setEditing(null)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {categories.map((category) => (
        <div key={category.id}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-serif text-xl font-semibold">
              {category.name}
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                {category.items.length} items
              </span>
            </h3>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setEditing({ category_id: category.id })}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add dish
            </Button>
          </div>

          <div className="space-y-2">
            {category.items.map((item) => (
              <div
                key={item.id}
                className={`flex items-center gap-4 p-3 rounded-lg border bg-card ${
                  item.is_available ? "" : "opacity-60"
                }`}
              >
                {item.photo_url ? (
                  <img
                    src={item.photo_url}
                    alt=""
                    className="h-12 w-12 rounded object-cover border flex-shrink-0"
                  />
                ) : (
                  <div className="h-12 w-12 rounded border border-dashed flex-shrink-0" />
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium truncate">{item.name}</span>
                    {item.is_signature && (
                      <Badge variant="secondary" className="text-xs">
                        <Star className="h-3 w-3 mr-1" />
                        Signature
                      </Badge>
                    )}
                    {!item.is_available && (
                      <Badge variant="outline" className="text-xs">
                        Sold out
                      </Badge>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm text-muted-foreground truncate">{item.description}</p>
                  )}
                </div>

                <span className="font-semibold text-primary whitespace-nowrap">{item.price}</span>

                <div className="flex items-center gap-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    title={item.is_available ? "Mark sold out for today" : "Back on the menu"}
                    onClick={() =>
                      start(async () => {
                        const r = await toggleItemAvailability(item.id, !item.is_available)
                        if (!r.ok) setError(r.error)
                      })
                    }
                  >
                    {item.is_available ? "86 it" : "Restore"}
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => setEditing(item)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => remove(item)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
