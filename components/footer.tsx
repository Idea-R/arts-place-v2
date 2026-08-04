import Link from "next/link"
import { Facebook, Instagram, Twitter, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">A</span>
              </div>
              <div>
                <div className="font-serif text-lg font-bold text-primary">Art's Place</div>
                <div className="text-xs text-muted">Ristorante</div>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-6 md:mb-4">
              Authentic Italian in Rohnert Park. Home of the Pasta King's
              award-winning recipes.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-background mb-4">Quick Links</h3>
            <ul className="space-y-3 md:space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-muted hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted hover:text-primary transition-colors">
                  Large Groups
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-muted hover:text-primary transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-3 md:space-y-2 text-sm">
              <li>
                <Link href="/events" className="text-muted hover:text-primary transition-colors">
                  Large Groups
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-muted hover:text-primary transition-colors">
                  Catering
                </Link>
              </li>
              {/* "Wine Dinners" and "Gift Cards" were listed here as services. Neither
                  is confirmed to exist. They return once the restaurant says so. */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-background mb-4">Contact Info</h3>
            <div className="space-y-4 md:space-y-3 text-sm">
              <div className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted text-center md:text-left">
                  563 Rohnert Park Expressway West
                  <br />
                  Rohnert Park, CA 94928
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted">(707) 588-2787</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted/20 mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Art's Place Ristorante. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
