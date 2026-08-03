"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ChefHat, Lock } from "lucide-react"
import { createClient } from "@/lib/supabase/client"

/**
 * Team sign in.
 *
 * This used to be a client-side string comparison against hardcoded credentials,
 * with the demo password printed on the page. It is now a real Supabase Auth sign
 * in, and having an account is still not enough on its own: a matching row in
 * team_members is what row level security actually checks before letting anyone
 * read or change restaurant data.
 */
export default function AdminLogin() {
  const router = useRouter()
  const params = useSearchParams()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const supabase = createClient()
    const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password })

    if (authError) {
      setError(authError.message)
      setIsLoading(false)
      return
    }

    // An auth account alone grants nothing. Confirm this user is on the team before
    // sending them to a dashboard that would otherwise come back empty.
    const { data: member } = await supabase
      .from("team_members")
      .select("id, full_name, role")
      .eq("id", data.user.id)
      .maybeSingle()

    if (!member) {
      await supabase.auth.signOut()
      setError("That account is not on the Art's Place team yet. Ask a manager to add you.")
      setIsLoading(false)
      return
    }

    router.push(params.get("next") || "/admin/dashboard")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-italian-red/5 to-basil-green/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-italian-red rounded-full flex items-center justify-center">
            <ChefHat className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="font-serif text-2xl">Art&rsquo;s Place</CardTitle>
          <CardDescription>Team sign in. Menus, prices, and daily specials.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="you@artsplacerp.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
            {error && (
              <Alert variant="destructive">
                <Lock className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <Button
              type="submit"
              className="w-full bg-italian-red hover:bg-italian-red/90"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Accounts are created by a manager. Nothing here is public.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
