"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, Clock, Phone, Mail, MessageSquare } from "lucide-react"

export function EventBookingForm() {
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    eventTime: "",
    guestCount: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with backend/email service
    console.log("Event booking inquiry:", formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const eventTypes = [
    "Private Celebration",
    "Corporate Event",
    "Wine Dinner",
    "Wedding Rehearsal",
    "Live Music Night",
    "Cooking Class",
    "Other",
  ]

  const timeSlots = [
    "11:30 AM - 2:00 PM",
    "2:30 PM - 5:00 PM",
    "5:30 PM - 8:00 PM",
    "8:30 PM - 11:00 PM",
    "Full Day Event",
  ]

  if (isSubmitted) {
    return (
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto border-none shadow-xl">
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-accent" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Thank You!</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We've received your event inquiry and will contact you within 24 hours to discuss your special occasion.
                We're excited to help make your event unforgettable!
              </p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-sm text-foreground">
                  <strong>Need immediate assistance?</strong>
                  <br />
                  Call us at (707) 588-2787
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Book Your Event</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to plan your special occasion? Fill out the form below and we'll contact you within 24 hours to
            discuss your event details and create a customized experience.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto border-none shadow-xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="font-serif text-2xl">Event Inquiry Form</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Event Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="eventType" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Event Type
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("eventType", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guestCount" className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    Number of Guests
                  </Label>
                  <Input
                    id="guestCount"
                    type="number"
                    min="1"
                    max="50"
                    placeholder="e.g., 25"
                    value={formData.guestCount}
                    onChange={(e) => handleInputChange("guestCount", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="eventDate">Preferred Date</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange("eventDate", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventTime" className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    Preferred Time
                  </Label>
                  <Select onValueChange={(value) => handleInputChange("eventTime", value)} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border-t border-border pt-8">
                <h3 className="font-serif text-xl font-semibold mb-6">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <Label htmlFor="specialRequests">Special Requests or Additional Information</Label>
                <Textarea
                  id="specialRequests"
                  placeholder="Tell us about any dietary restrictions, decorating preferences, special occasions, or other details that will help us create the perfect event for you..."
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-4"
                >
                  Submit Event Inquiry
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll contact you within 24 hours to discuss your event details and provide a customized quote.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
