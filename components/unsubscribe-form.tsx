"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, CheckCircle, Loader2 } from "lucide-react"

export default function UnsubscribeForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isUnsubscribed, setIsUnsubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/newsletter/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token: "demo-token" }),
      })

      const data = await response.json()

      if (data.success) {
        setIsUnsubscribed(true)
      } else {
        setError(data.message || "Failed to unsubscribe")
      }
    } catch (error) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isUnsubscribed) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Successfully Unsubscribed</h2>
          <p className="text-muted-foreground mb-6">
            You have been removed from our mailing list. We're sorry to see you go!
          </p>
          <p className="text-sm text-muted-foreground">
            You can always visit us at the restaurant or resubscribe anytime on our website.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 w-16 h-16 bg-italian-red/10 rounded-full flex items-center justify-center">
          <Mail className="w-8 h-8 text-italian-red" />
        </div>
        <CardTitle className="text-2xl font-bold">Unsubscribe</CardTitle>
        <CardDescription>
          We're sorry to see you go. Enter your email address to unsubscribe from our newsletter.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleUnsubscribe} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button type="submit" className="w-full bg-italian-red hover:bg-italian-red/90" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Unsubscribing...
              </>
            ) : (
              "Unsubscribe"
            )}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Changed your mind?{" "}
            <a href="/" className="text-italian-red hover:underline">
              Return to homepage
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
