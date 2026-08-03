"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Edit, Trash2, Plus, Search, Filter } from "lucide-react"
import { AddMenuItemModal } from "./add-menu-item-modal"
import { ViewMenuItemModal } from "./view-menu-item-modal"
import { EditMenuItemModal } from "./edit-menu-item-modal"

const menuItems = [
  { id: 1, name: "Fettuccine Alfredo", category: "Pasta", price: "$18.95", status: "Active", featured: true },
  { id: 2, name: "Margherita Pizza", category: "Pizza", price: "$16.95", status: "Active", featured: false },
  { id: 3, name: "Chicken Parmigiana", category: "Entrees", price: "$22.95", status: "Active", featured: true },
  { id: 4, name: "Caesar Salad", category: "Appetizers", price: "$12.95", status: "Active", featured: false },
  { id: 5, name: "Tiramisu", category: "Desserts", price: "$8.95", status: "Active", featured: false },
]

export function AdminMenuManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [showAddModal, setShowAddModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Menu Management</h2>
          <p className="text-gray-600">Manage your restaurant menu items</p>
        </div>
        <Button onClick={() => setShowAddModal(true)} className="bg-italian-red hover:bg-italian-red/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Menu Item
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search menu items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Appetizers">Appetizers</SelectItem>
                <SelectItem value="Pasta">Pasta</SelectItem>
                <SelectItem value="Pizza">Pizza</SelectItem>
                <SelectItem value="Entrees">Entrees</SelectItem>
                <SelectItem value="Desserts">Desserts</SelectItem>
                <SelectItem value="Beverages">Beverages</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Menu Items Table */}
      <Card>
        <CardHeader>
          <CardTitle>Menu Items ({filteredItems.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">Item Name</th>
                  <th className="text-left py-3 px-4 font-medium">Category</th>
                  <th className="text-left py-3 px-4 font-medium">Price</th>
                  <th className="text-left py-3 px-4 font-medium">Status</th>
                  <th className="text-left py-3 px-4 font-medium">Featured</th>
                  <th className="text-left py-3 px-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{item.name}</td>
                    <td className="py-3 px-4">
                      <Badge variant="outline">{item.category}</Badge>
                    </td>
                    <td className="py-3 px-4">{item.price}</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-green-100 text-green-800">{item.status}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      {item.featured && <Badge className="bg-pasta-gold text-black">Featured</Badge>}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedItem(item)
                            setShowViewModal(true)
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedItem(item)
                            setShowEditModal(true)
                          }}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Modals */}
      <AddMenuItemModal open={showAddModal} onOpenChange={setShowAddModal} />
      <ViewMenuItemModal open={showViewModal} onOpenChange={setShowViewModal} item={selectedItem} />
      <EditMenuItemModal open={showEditModal} onOpenChange={setShowEditModal} item={selectedItem} />
    </div>
  )
}
