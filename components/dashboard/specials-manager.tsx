"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, X, AlertCircle, CalendarDays } from "lucide-react"
import { saveSpecial, endSpecial } from "@/app/admin/dashboard/actions"

type Special = {
  id: string
  title: string
  description: string | null
  price: string | null
  starts_on: string
  ends_on: string | null
  is_active: boolean
}

export function SpecialsManager({ specials }: { specials: Special[] }) {
  const [adding, setAdding] = useState(false)
  const [error, setError] = useState("")
  const [pending, start] = useTransition()

  const today = new Date().toISOString().slice(0, 10)

  const submit = (formData: FormData) => {
    setError("")
    start(async () => {
      const res = await saveSpecial(formData)
      if (res.ok) setAdding(false)
      else setError(res.error)
    })
  }

  const isRunning = (s: Special) =>
    s.is_active && s.starts_on <= today && (!s.ends_on || s.ends_on >= today)

  return (
    <div className="space-y-6">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Specials appear on the site automatically between their start and end dates. Set them up in
          advance and they take care of themselves.
        </p>
        {!adding && (
          <Button size="sm" onClick={() => setAdding(true)}>
            <Plus className="h-4 w-4 mr-1" />
            New special
          </Button>
        )}
      </div>

      {adding && (
        <Card className="border-primary/40">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg font-semibold">New special</h3>
              <Button variant="ghost" size="sm" onClick={() => setAdding(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <form action={submit} className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">What is it</Label>
                <Input id="title" name="title" placeholder="Fish Friday" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price (optional)</Label>
                <Input id="price" name="price" placeholder="$21" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  placeholder="Fresh catch, roasted potatoes, seasonal veg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="starts_on">Starts</Label>
                <Input id="starts_on" name="starts_on" type="date" defaultValue={today} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ends_on">Ends (leave blank to run until you stop it)</Label>
                <Input id="ends_on" name="ends_on" type="date" />
              </div>
              <div className="md:col-span-2 flex gap-3">
                <Button type="submit" disabled={pending}>
                  {pending ? "Saving..." : "Publish special"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setAdding(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {specials.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="p-8 text-center">
            <CalendarDays className="h-6 w-6 mx-auto mb-3 text-muted-foreground" />
            <p className="font-medium">No specials running</p>
            <p className="text-sm text-muted-foreground">
              Add one and it appears on the website straight away.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {specials.map((s) => (
            <div key={s.id} className="flex items-center gap-4 p-3 rounded-lg border bg-card">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{s.title}</span>
                  {isRunning(s) ? (
                    <Badge className="text-xs">Live now</Badge>
                  ) : s.starts_on > today ? (
                    <Badge variant="secondary" className="text-xs">
                      Scheduled
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-xs">
                      Ended
                    </Badge>
                  )}
                </div>
                {s.description && (
                  <p className="text-sm text-muted-foreground truncate">{s.description}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  {s.starts_on}
                  {s.ends_on ? ` to ${s.ends_on}` : " onward"}
                </p>
              </div>
              {s.price && <span className="font-semibold text-primary">{s.price}</span>}
              {s.is_active && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() =>
                    start(async () => {
                      const r = await endSpecial(s.id)
                      if (!r.ok) setError(r.error)
                    })
                  }
                >
                  End it
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
