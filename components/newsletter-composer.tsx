"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Send, Users, Loader2, CheckCircle } from "lucide-react"

export default function NewsletterComposer() {
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [template, setTemplate] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [sentCount, setSentCount] = useState(0)

  const templates = [
    { id: "weekly-special", name: "Weekly Special", description: "Promote this week's featured dishes" },
    { id: "event-announcement", name: "Event Announcement", description: "Announce upcoming events" },
    { id: "new-menu", name: "New Menu Items", description: "Introduce new dishes to the menu" },
    { id: "holiday-special", name: "Holiday Special", description: "Holiday promotions and hours" },
  ]

  const mockRecipients = [
    { email: "john@example.com", preferences: ["weeklySpecials", "eventNotifications"] },
    { email: "sarah@example.com", preferences: ["weeklySpecials", "newMenuItems"] },
    { email: "mike@example.com", preferences: ["eventNotifications"] },
  ]

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/admin/newsletter/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          content,
          template,
          recipients: mockRecipients,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSentCount(data.sentCount)
        setIsSent(true)
        setTimeout(() => setIsSent(false), 5000)
        setSubject("")
        setContent("")
        setTemplate("")
      }
    } catch (error) {
      console.error("Newsletter send error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSent) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Newsletter Sent Successfully!</h3>
          <p className="text-muted-foreground mb-4">Your newsletter was delivered to {sentCount} subscribers.</p>
          <Button onClick={() => setIsSent(false)} variant="outline">
            Send Another Newsletter
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Compose Newsletter
          </CardTitle>
          <CardDescription>Create and send newsletters to your subscribers</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSend} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="template">Email Template</Label>
                <Select value={template} onValueChange={setTemplate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a template" />
                  </SelectTrigger>
                  <SelectContent>
                    {templates.map((tmpl) => (
                      <SelectItem key={tmpl.id} value={tmpl.id}>
                        <div>
                          <div className="font-medium">{tmpl.name}</div>
                          <div className="text-sm text-muted-foreground">{tmpl.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Recipients</Label>
                <div className="flex items-center gap-2 p-3 border rounded-md">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{mockRecipients.length} subscribers</span>
                  <Badge variant="secondary" className="ml-auto">
                    Active
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject Line</Label>
              <Input
                id="subject"
                placeholder="Enter email subject..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Email Content</Label>
              <Textarea
                id="content"
                placeholder="Write your newsletter content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                disabled={isLoading}
                rows={8}
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <Alert className="flex-1 mr-4">
                <AlertDescription>
                  This will send to {mockRecipients.length} active subscribers based on their preferences.
                </AlertDescription>
              </Alert>

              <Button
                type="submit"
                className="bg-italian-red hover:bg-italian-red/90"
                disabled={isLoading || !subject || !content}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Newsletter
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
