'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground/95 text-background py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-foreground font-bold">
                FW
              </div>
              <div>
                <h3 className="font-bold">First World Transit Africa</h3>
                <p className="text-sm opacity-80">Premium Car Rentals</p>
              </div>
            </div>
            <p className="text-sm opacity-80">
              Providing reliable and affordable transportation solutions across Africa.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <span>+260 573338401</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <span>firstworldtransitafrica@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>South Chilenje Plot No 31516</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2 text-sm">
              <a href="#vehicles" className="block hover:underline">
                Browse Vehicles
              </a>
              <a href="#documents" className="block hover:underline">
                Download Documents
              </a>
              <a href="#contact" className="block hover:underline">
                Contact Support
              </a>
            </nav>
          </div> */}
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="text-center text-sm opacity-80">
            <p>
              © {new Date().getFullYear()} First World Transit Africa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
