"use client"

import Link from "next/link"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Gift, Loader2 } from "lucide-react"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [discountCode, setDiscountCode] = useState("")
  const [preferences, setPreferences] = useState({
    weeklySpecials: true,
    eventNotifications: true,
    newMenuItems: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, preferences }),
      })

      const data = await response.json()

      if (data.success) {
        setDiscountCode(data.discountCode)
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
        setEmail("")
      }
    } catch (error) {
      console.error("Subscription error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto border-none shadow-2xl">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="h-8 w-8 text-secondary" />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
              Keep In Touch
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Be the first to hear about specials, seasonal dishes, and what is happening on the patio.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 text-center sm:text-left"
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Mail className="w-4 h-4 mr-2" />}
                    {isLoading ? "Joining..." : "Join Now"}
                  </Button>
                </div>

                <div className="text-left space-y-3 pt-4 border-t border-border/20">
                  <p className="text-sm font-medium text-foreground">Email Preferences:</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="weeklySpecials"
                        checked={preferences.weeklySpecials}
                        onCheckedChange={(checked) =>
                          setPreferences((prev) => ({ ...prev, weeklySpecials: checked as boolean }))
                        }
                      />
                      <label htmlFor="weeklySpecials" className="text-sm text-muted-foreground">
                        Weekly specials and promotions
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="eventNotifications"
                        checked={preferences.eventNotifications}
                        onCheckedChange={(checked) =>
                          setPreferences((prev) => ({ ...prev, eventNotifications: checked as boolean }))
                        }
                      />
                      <label htmlFor="eventNotifications" className="text-sm text-muted-foreground">
                        Event announcements and live music
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newMenuItems"
                        checked={preferences.newMenuItems}
                        onCheckedChange={(checked) =>
                          setPreferences((prev) => ({ ...prev, newMenuItems: checked as boolean }))
                        }
                      />
                      <label htmlFor="newMenuItems" className="text-sm text-muted-foreground">
                        New menu items and seasonal dishes
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-accent/10 text-accent p-6 rounded-lg">
                  <p className="font-semibold text-lg">Thanks for signing up</p>
                  <p className="text-sm mt-2">
                    Demo only: this form is not connected to an email service yet, so nothing was stored or sent.
                  </p>
                </div>
              </div>
            )}

            <p className="text-xs text-muted-foreground mt-6">
              We respect your privacy.{" "}
              <Link href="/unsubscribe" className="underline hover:no-underline">
                Unsubscribe
              </Link>{" "}
              at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
