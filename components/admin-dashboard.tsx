"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Users,
  Calendar,
  Mail,
  TrendingUp,
  ChefHat,
  Settings,
  Eye,
  Edit,
  Trash2,
  Plus,
  CheckCircle,
  Clock,
  AlertCircle,
  Home,
  Save,
  X,
  Filter,
  Search,
  UtensilsCrossed,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import NewsletterComposer from "./newsletter-composer"
import { AdminMenuManagement } from "./admin/admin-menu-management"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [editingItem, setEditingItem] = useState<any>(null)
  const [viewingItem, setViewingItem] = useState<any>(null)
  const [isAddingItem, setIsAddingItem] = useState(false)
  const [editingEvent, setEditingEvent] = useState<any>(null)
  const [isAddingEvent, setIsAddingEvent] = useState(false)
  const [eventFilter, setEventFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Mock data
  const stats = {
    totalOrders: 156,
    pendingEvents: 8,
    emailSubscribers: 342,
    monthlyRevenue: 28500,
  }

  const [recentEvents, setRecentEvents] = useState([
    {
      id: 1,
      name: "Johnson Wedding Rehearsal",
      date: "2024-01-15",
      time: "6:00 PM",
      guests: 25,
      status: "pending",
      type: "private-party",
      contact: "Sarah Johnson",
      phone: "(707) 555-0123",
      email: "sarah@example.com",
      notes: "Outdoor patio preferred, vegetarian options needed",
      catering: "premium",
      location: "onsite",
    },
    {
      id: 2,
      name: "Corporate Team Dinner",
      date: "2024-01-18",
      time: "7:00 PM",
      guests: 40,
      status: "confirmed",
      type: "corporate",
      contact: "Mike Chen",
      phone: "(707) 555-0456",
      email: "mike@techcorp.com",
      notes: "Business dinner, wine pairing requested",
      catering: "deluxe",
      location: "onsite",
    },
    {
      id: 3,
      name: "Birthday Celebration",
      date: "2024-01-20",
      time: "5:30 PM",
      guests: 15,
      status: "pending",
      type: "celebration",
      contact: "Lisa Rodriguez",
      phone: "(707) 555-0789",
      email: "lisa@example.com",
      notes: "Birthday cake needed, family-friendly atmosphere",
      catering: "casual",
      location: "onsite",
    },
    {
      id: 4,
      name: "Office Lunch Catering",
      date: "2024-01-22",
      time: "12:00 PM",
      guests: 30,
      status: "confirmed",
      type: "catering",
      contact: "David Kim",
      phone: "(707) 555-0321",
      email: "david@startup.com",
      notes: "Delivery to office, setup included",
      catering: "business",
      location: "offsite",
    },
  ])

  const cateringPackages = [
    {
      id: 1,
      name: "Casual Gathering",
      price: 25,
      description: "Perfect for informal gatherings and family events",
      items: ["Antipasto platter", "Choice of 2 pasta dishes", "Garden salad", "Garlic bread"],
      minGuests: 10,
    },
    {
      id: 2,
      name: "Business Lunch",
      price: 35,
      description: "Professional catering for corporate events",
      items: ["Antipasto platter", "Choice of 3 entrees", "Caesar salad", "Dessert selection"],
      minGuests: 15,
    },
    {
      id: 3,
      name: "Deluxe Experience",
      price: 45,
      description: "Premium dining experience for special occasions",
      items: ["Premium antipasto", "Choice of 4 entrees", "Wine pairing", "Tiramisu"],
      minGuests: 20,
    },
    {
      id: 4,
      name: "Premium Celebration",
      price: 65,
      description: "Our finest catering package for milestone events",
      items: ["Gourmet antipasto", "5-course meal", "Premium wine selection", "Custom dessert"],
      minGuests: 25,
    },
  ]

  const handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      name: "New Menu Item",
      category: "Pasta",
      price: 0,
      status: "active",
      description: "",
      ingredients: "",
      allergens: [],
      featured: false,
    }
  }

  const handleAddEvent = () => {
    const newEvent = {
      id: Date.now(),
      name: "New Event",
      date: "",
      time: "",
      guests: 0,
      status: "pending",
      type: "private-party",
      contact: "",
      phone: "",
      email: "",
      notes: "",
      catering: "casual",
      location: "onsite",
    }
    setEditingEvent(newEvent)
    setIsAddingEvent(true)
  }

  const handleSaveNewEvent = () => {
    if (editingEvent) {
      setRecentEvents((events) => [...events, editingEvent])
      setEditingEvent(null)
      setIsAddingEvent(false)
    }
  }

  const handleDeleteEvent = (id: number) => {
    setRecentEvents((events) => events.filter((event) => event.id !== id))
  }

  const handleEditEvent = (event: any) => {
    setEditingEvent(event)
    setIsAddingEvent(false)
  }

  const handleSaveEvent = () => {
    if (editingEvent) {
      setRecentEvents((events) =>
        events.map((event) => (event.id === editingEvent.id ? { ...event, ...editingEvent } : event)),
      )
      setEditingEvent(null)
    }
  }

  const filteredEvents = recentEvents.filter((event) => {
    const matchesFilter = eventFilter === "all" || event.status === eventFilter || event.type === eventFilter
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const emailSubscribers = [
    {
      id: 1,
      email: "john@example.com",
      subscribed: "2024-01-10",
      status: "active",
      preferences: ["weeklySpecials", "eventNotifications"],
    },
    {
      id: 2,
      email: "sarah@example.com",
      subscribed: "2024-01-12",
      status: "active",
      preferences: ["weeklySpecials", "newMenuItems"],
    },
    {
      id: 3,
      email: "mike@example.com",
      subscribed: "2024-01-14",
      status: "active",
      preferences: ["eventNotifications"],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <ChefHat className="w-6 h-6 sm:w-8 sm:h-8 text-italian-red" />
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Art's Place Admin</h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Restaurant Management Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link href="/">
              <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
                <Home className="w-4 h-4 mr-2" />
                Return to Site
              </Button>
              <Button variant="outline" size="sm" className="sm:hidden bg-transparent">
                <Home className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="hidden sm:flex bg-transparent">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm" className="sm:hidden bg-transparent">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="p-3 sm:p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
          <div className="overflow-x-auto">
            <TabsList className="grid w-full grid-cols-5 min-w-[500px] sm:min-w-0">
              <TabsTrigger value="overview" className="text-xs sm:text-sm">
                Overview
              </TabsTrigger>
              <TabsTrigger value="menu" className="text-xs sm:text-sm">
                Menu
              </TabsTrigger>
              <TabsTrigger value="events" className="text-xs sm:text-sm">
                Events
              </TabsTrigger>
              <TabsTrigger value="catering" className="text-xs sm:text-sm">
                Catering
              </TabsTrigger>
              <TabsTrigger value="marketing" className="text-xs sm:text-sm">
                Marketing
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium">Total Orders</CardTitle>
                  <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold">{stats.totalOrders}</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium">Pending Events</CardTitle>
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold">{stats.pendingEvents}</div>
                  <p className="text-xs text-muted-foreground">Require attention</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium">Email Subscribers</CardTitle>
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold">{stats.emailSubscribers}</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xs sm:text-sm font-medium">Monthly Revenue</CardTitle>
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-lg sm:text-2xl font-bold">${stats.monthlyRevenue.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Recent Event Bookings</CardTitle>
                  <CardDescription>Latest event inquiries and bookings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    {recentEvents.slice(0, 3).map((event) => (
                      <div
                        key={event.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border rounded-lg space-y-2 sm:space-y-0"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-sm sm:text-base">{event.name}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {event.date} • {event.guests} guests
                          </p>
                        </div>
                        <Badge
                          variant={event.status === "confirmed" ? "default" : "secondary"}
                          className="self-start sm:self-center"
                        >
                          {event.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Quick Actions</CardTitle>
                  <CardDescription>Common management tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3">
                  <Button
                    className="w-full justify-start bg-transparent text-sm"
                    variant="outline"
                    onClick={handleAddItem}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Menu Item
                  </Button>
                  <Button
                    className="w-full justify-start bg-transparent text-sm"
                    variant="outline"
                    onClick={handleAddEvent}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Add New Event
                  </Button>
                  <Button className="w-full justify-start bg-transparent text-sm" variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Newsletter
                  </Button>
                  <Button className="w-full justify-start bg-transparent text-sm" variant="outline">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Analytics
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="menu" className="space-y-4 sm:space-y-6">
            <AdminMenuManagement />
          </TabsContent>

          <TabsContent value="events" className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Event Bookings</h2>
                <p className="text-sm text-muted-foreground">Manage event inquiries and bookings</p>
              </div>
              <Button className="bg-italian-red hover:bg-italian-red/90 text-sm" onClick={handleAddEvent}>
                <Plus className="w-4 h-4 mr-2" />
                Add Event
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search events..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 text-sm"
                  />
                </div>
              </div>
              <Select value={eventFilter} onValueChange={setEventFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filter events" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Events</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="private-party">Private Parties</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="catering">Catering</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card>
              <CardContent className="p-0">
                {/* Desktop table view */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b">
                      <tr>
                        <th className="text-left p-4 font-medium">Event Name</th>
                        <th className="text-left p-4 font-medium">Date & Time</th>
                        <th className="text-left p-4 font-medium">Guests</th>
                        <th className="text-left p-4 font-medium">Type</th>
                        <th className="text-left p-4 font-medium">Location</th>
                        <th className="text-left p-4 font-medium">Status</th>
                        <th className="text-left p-4 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredEvents.map((event) => (
                        <tr key={event.id} className="border-b">
                          <td className="p-4 font-medium">{event.name}</td>
                          <td className="p-4">
                            <div>
                              <p>{event.date}</p>
                              <p className="text-sm text-muted-foreground">{event.time}</p>
                            </div>
                          </td>
                          <td className="p-4">{event.guests}</td>
                          <td className="p-4">
                            <Badge variant="outline">{event.type.replace("-", " ")}</Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              {event.location === "onsite" ? (
                                <ChefHat className="w-4 h-4 mr-1" />
                              ) : (
                                <MapPin className="w-4 h-4 mr-1" />
                              )}
                              {event.location}
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge variant={event.status === "confirmed" ? "default" : "secondary"}>
                              {event.status === "confirmed" ? (
                                <CheckCircle className="w-3 h-3 mr-1" />
                              ) : event.status === "pending" ? (
                                <Clock className="w-3 h-3 mr-1" />
                              ) : (
                                <AlertCircle className="w-3 h-3 mr-1" />
                              )}
                              {event.status}
                            </Badge>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>{event.name}</DialogTitle>
                                    <DialogDescription>Event booking details</DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                      <div>
                                        <Label className="font-medium">Contact</Label>
                                        <p className="text-sm text-muted-foreground mt-1">{event.contact}</p>
                                      </div>
                                      <div>
                                        <Label className="font-medium">Phone</Label>
                                        <p className="text-sm text-muted-foreground mt-1">{event.phone}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <Label className="font-medium">Email</Label>
                                      <p className="text-sm text-muted-foreground mt-1">{event.email}</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                      <div>
                                        <Label className="font-medium">Date & Time</Label>
                                        <p className="text-sm text-muted-foreground mt-1">
                                          {event.date} at {event.time}
                                        </p>
                                      </div>
                                      <div>
                                        <Label className="font-medium">Guests</Label>
                                        <p className="text-sm text-muted-foreground mt-1">{event.guests}</p>
                                      </div>
                                      <div>
                                        <Label className="font-medium">Catering Package</Label>
                                        <p className="text-sm text-muted-foreground mt-1">{event.catering}</p>
                                      </div>
                                    </div>
                                    <div>
                                      <Label className="font-medium">Special Notes</Label>
                                      <p className="text-sm text-muted-foreground mt-1">{event.notes}</p>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button size="sm" variant="outline" onClick={() => handleEditEvent(event)}>
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleDeleteEvent(event.id)}>
                                <Trash2 className="w-4 h-4" />
                              </Button>
                              {event.status === "pending" && (
                                <Button size="sm" className="bg-basil-green hover:bg-basil-green/90">
                                  Confirm
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile card view */}
                <div className="lg:hidden space-y-3 p-4">
                  {filteredEvents.map((event) => (
                    <Card key={event.id} className="border">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="font-medium text-sm">{event.name}</h3>
                              <p className="text-xs text-muted-foreground mt-1">
                                {event.date} at {event.time}
                              </p>
                            </div>
                            <Badge variant={event.status === "confirmed" ? "default" : "secondary"} className="text-xs">
                              {event.status}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div>
                              <span className="text-muted-foreground">Guests:</span> {event.guests}
                            </div>
                            <div>
                              <span className="text-muted-foreground">Type:</span> {event.type.replace("-", " ")}
                            </div>
                            <div>
                              <span className="text-muted-foreground">Location:</span> {event.location}
                            </div>
                            <div>
                              <span className="text-muted-foreground">Package:</span> {event.catering}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t">
                            <div className="flex space-x-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline">
                                    <Eye className="w-3 h-3 mr-1" />
                                    View
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-lg mx-4">
                                  <DialogHeader>
                                    <DialogTitle className="text-lg">{event.name}</DialogTitle>
                                    <DialogDescription>Event booking details</DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-4">
                                    <div className="space-y-3">
                                      <div>
                                        <Label className="font-medium text-sm">Contact</Label>
                                        <p className="text-sm text-muted-foreground mt-1">{event.contact}</p>
                                      </div>
                                      <div>
                                        <Label className="font-medium text-sm">Phone</Label>
                                        <p className="text-sm text-muted-foreground mt-1">{event.phone}</p>
                                      </div>
                                      <div>
                                        <Label className="font-medium text-sm">Email</Label>
                                        <p className="text-sm text-muted-foreground mt-1">{event.email}</p>
                                      </div>
                                      <div>
                                        <Label className="font-medium text-sm">Date & Time</Label>
                                        <p className="text-sm text-muted-foreground mt-1">
                                          {event.date} at {event.time}
                                        </p>
                                      </div>
                                      <div>
                                        <Label className="font-medium text-sm">Guests</Label>
                                        <p className="text-sm text-muted-foreground mt-1">{event.guests}</p>
                                      </div>
                                      <div>
                                        <Label className="font-medium text-sm">Catering Package</Label>
                                        <p className="text-sm text-muted-foreground mt-1">{event.catering}</p>
                                      </div>
                                      <div>
                                        <Label className="font-medium text-sm">Special Notes</Label>
                                        <p className="text-sm text-muted-foreground mt-1">{event.notes}</p>
                                      </div>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button size="sm" variant="outline" onClick={() => handleEditEvent(event)}>
                                <Edit className="w-3 h-3 mr-1" />
                                Edit
                              </Button>
                            </div>
                            {event.status === "pending" && (
                              <Button size="sm" className="bg-basil-green hover:bg-basil-green/90 text-xs">
                                Confirm
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* ... existing event editing dialog ... */}
            {editingEvent && (
              <Dialog open={!!editingEvent} onOpenChange={() => setEditingEvent(null)}>
                <DialogContent className="max-w-2xl mx-4">
                  <DialogHeader>
                    <DialogTitle>{isAddingEvent ? "Add New Event" : "Edit Event"}</DialogTitle>
                    <DialogDescription>
                      {isAddingEvent ? "Create a new event booking" : "Update event details"}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 max-h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="eventName">Event Name</Label>
                        <Input
                          id="eventName"
                          value={editingEvent.name}
                          onChange={(e) => setEditingEvent({ ...editingEvent, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Input
                          id="guests"
                          type="number"
                          value={editingEvent.guests}
                          onChange={(e) =>
                            setEditingEvent({ ...editingEvent, guests: Number.parseInt(e.target.value) })
                          }
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={editingEvent.date}
                          onChange={(e) => setEditingEvent({ ...editingEvent, date: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time</Label>
                        <Input
                          id="time"
                          type="time"
                          value={editingEvent.time}
                          onChange={(e) => setEditingEvent({ ...editingEvent, time: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="eventType">Event Type</Label>
                        <Select
                          value={editingEvent.type}
                          onValueChange={(value) => setEditingEvent({ ...editingEvent, type: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="private-party">Private Party</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="celebration">Celebration</SelectItem>
                            <SelectItem value="catering">Catering</SelectItem>
                            <SelectItem value="wine-dinner">Wine Dinner</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Select
                          value={editingEvent.location}
                          onValueChange={(value) => setEditingEvent({ ...editingEvent, location: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="onsite">On-site</SelectItem>
                            <SelectItem value="offsite">Off-site Catering</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="catering">Catering Package</Label>
                        <Select
                          value={editingEvent.catering}
                          onValueChange={(value) => setEditingEvent({ ...editingEvent, catering: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="casual">Casual Gathering</SelectItem>
                            <SelectItem value="business">Business Lunch</SelectItem>
                            <SelectItem value="deluxe">Deluxe Experience</SelectItem>
                            <SelectItem value="premium">Premium Celebration</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact">Contact Name</Label>
                        <Input
                          id="contact"
                          value={editingEvent.contact}
                          onChange={(e) => setEditingEvent({ ...editingEvent, contact: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={editingEvent.phone}
                          onChange={(e) => setEditingEvent({ ...editingEvent, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={editingEvent.email}
                        onChange={(e) => setEditingEvent({ ...editingEvent, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="notes">Special Notes</Label>
                      <Textarea
                        id="notes"
                        value={editingEvent.notes}
                        onChange={(e) => setEditingEvent({ ...editingEvent, notes: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                      <Button variant="outline" onClick={() => setEditingEvent(null)} className="w-full sm:w-auto">
                        <X className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                      <Button
                        onClick={isAddingEvent ? handleSaveNewEvent : handleSaveEvent}
                        className="bg-italian-red hover:bg-italian-red/90 w-full sm:w-auto"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        {isAddingEvent ? "Add Event" : "Save Changes"}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </TabsContent>

          <TabsContent value="catering" className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Catering Packages</h2>
                <p className="text-sm text-muted-foreground">Manage catering options for events and off-site orders</p>
              </div>
              <Button className="bg-italian-red hover:bg-italian-red/90 text-sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Package
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {cateringPackages.map((pkg) => (
                <Card key={pkg.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="flex items-center text-base sm:text-lg">
                        <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-italian-red" />
                        {pkg.name}
                      </CardTitle>
                      <div className="text-right">
                        <div className="text-lg sm:text-2xl font-bold text-italian-red">${pkg.price}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">per person</div>
                      </div>
                    </div>
                    <CardDescription className="text-sm">{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label className="font-medium text-sm">Package Includes:</Label>
                        <ul className="mt-2 space-y-1">
                          {pkg.items.map((item, index) => (
                            <li key={index} className="text-xs sm:text-sm text-muted-foreground flex items-center">
                              <CheckCircle className="w-3 h-3 mr-2 text-basil-green flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="text-xs sm:text-sm text-muted-foreground">Minimum {pkg.minGuests} guests</div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Catering Statistics</CardTitle>
                <CardDescription>Overview of catering performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold">24</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Events This Month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold">$12,450</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Catering Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold">18</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Off-site Orders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold">4.8</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Average Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="marketing" className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2">
                <NewsletterComposer />
              </div>

              <div className="space-y-4 sm:space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Subscriber Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="text-lg sm:text-2xl font-bold">{stats.emailSubscribers}</div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Total Subscribers</p>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold">24.5%</div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Open Rate</p>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold">8.2%</div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Click Rate</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg sm:text-xl">Recent Subscribers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {emailSubscribers.slice(0, 3).map((subscriber) => (
                        <div key={subscriber.id} className="flex items-center justify-between text-sm">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{subscriber.email}</p>
                            <p className="text-xs text-muted-foreground">{subscriber.preferences.length} preferences</p>
                          </div>
                          <Badge variant="outline" className="text-xs ml-2">
                            {subscriber.subscribed}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
