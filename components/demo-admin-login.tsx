"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calendar, Camera, ChefHat, Users, TrendingUp, Clock } from "lucide-react"

export function DemoAdminLogin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login delay
    setTimeout(() => {
      setIsLoggedIn(true)
      setIsLoading(false)
    }, 1500)
  }

  if (isLoggedIn) {
    return (
      <div className="w-full max-w-6xl mx-auto animate-fade-in">
        <Card className="mb-6 hover-lift">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl font-serif text-primary">Staff Dashboard</CardTitle>
                <CardDescription className="text-lg">Manage Art's Place Restaurant</CardDescription>
              </div>
              <Badge variant="secondary" className="bg-accent text-accent-foreground animate-pulse">
                Demo Mode
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 hover-lift">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">$2,847</p>
                    <p className="text-sm text-muted-foreground">Today's Sales</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover-lift">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">127</p>
                    <p className="text-sm text-muted-foreground">Customers Served</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover-lift">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary">8</p>
                    <p className="text-sm text-muted-foreground">Event Inquiries</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 hover-lift">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">4.8</p>
                    <p className="text-sm text-muted-foreground">Avg Rating</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover-lift group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <ChefHat className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-primary">Menu Management</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Update prices, add new items, manage daily specials and seasonal offerings
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Active Items</span>
                    <span className="font-semibold">47</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Daily Specials</span>
                    <span className="font-semibold">3</span>
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                  Manage Menu
                </Button>
              </Card>

              <Card className="p-6 hover-lift group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-accent">Event Bookings</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  View and respond to event inquiries, manage patio reservations and special occasions
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Pending Inquiries</span>
                    <span className="font-semibold text-secondary">8</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Confirmed Events</span>
                    <span className="font-semibold">12</span>
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 hover:scale-105 transition-all duration-300">
                  View Bookings
                </Button>
              </Card>

              <Card className="p-6 hover-lift group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                    <Camera className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-secondary">Image Gallery</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Upload and manage restaurant photos, menu items, and event gallery images
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Total Images</span>
                    <span className="font-semibold">156</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Recent Uploads</span>
                    <span className="font-semibold">7</span>
                  </div>
                </div>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground hover:scale-105 transition-all duration-300">
                  Manage Images
                </Button>
              </Card>
            </div>

            <div className="pt-6 border-t mt-8">
              <Button
                variant="ghost"
                onClick={() => setIsLoggedIn(false)}
                className="text-muted-foreground hover:text-foreground hover:scale-105 transition-all duration-300"
              >
                Sign Out (Demo)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto animate-scale-in hover-lift">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-serif text-primary">Staff Login</CardTitle>
        <CardDescription className="text-lg">Access the restaurant management dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm font-medium">
              Username
            </Label>
            <Input
              id="username"
              placeholder="Enter username"
              defaultValue="demo@artsplace.com"
              disabled={isLoading}
              className="focus-ring transition-all duration-300"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              defaultValue="demo123"
              disabled={isLoading}
              className="focus-ring transition-all duration-300"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-lg py-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Signing In...
              </div>
            ) : (
              "Sign In"
            )}
          </Button>
          <div className="text-center p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Demo credentials are pre-filled.</strong>
              <br />
              This is a visual demonstration of the staff dashboard capabilities.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
