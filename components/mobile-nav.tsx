"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, UtensilsCrossed, Users, MapPin, Phone } from "lucide-react"
import { site } from "@/lib/content"

/**
 * Mobile bottom bar.
 *
 * The header is sticky, which keeps a way out on screen, but it is a desktop nav
 * shrunk down: a hamburger and a logo. On a phone, and this is a restaurant site so
 * that is most of the traffic, the four things people actually want should be one
 * thumb away without opening anything.
 *
 * Call gets its own slot in the restaurant's red, because it is the action that ends
 * a visit to this site well. Every target is 56px tall, comfortably past the 44px
 * accessibility floor.
 */

const tel = site.phone.value.replace(/[^\d+]/g, "")

const ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/menu", label: "Menu", icon: UtensilsCrossed },
  { href: "/events", label: "Groups", icon: Users },
  { href: "/contact", label: "Visit", icon: MapPin },
]

export function MobileNav() {
  const pathname = usePathname()
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <nav
      aria-label="Primary mobile"
      className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <ul className="grid grid-cols-5">
        {ITEMS.map((item) => {
          const active = isActive(item.href)
          const Icon = item.icon
          return (
            <li key={item.href} className="flex">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`flex min-h-14 flex-1 flex-col items-center justify-center gap-1 text-[0.65rem] transition-colors ${
                  active
                    ? "text-primary shadow-[inset_0_2px_0_0_hsl(var(--primary))]"
                    : "text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden />
                {item.label}
              </Link>
            </li>
          )
        })}
        <li className="flex">
          <a
            href={`tel:${tel}`}
            className="flex min-h-14 flex-1 flex-col items-center justify-center gap-1 text-[0.65rem] font-medium text-primary"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call
          </a>
        </li>
      </ul>
    </nav>
  )
}
