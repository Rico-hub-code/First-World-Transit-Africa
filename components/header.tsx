'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Menu, X, Sun, Moon } from 'lucide-react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              FW
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">First World Transit Africa</h1>
              <p className="text-xs text-muted-foreground">Car Rental Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#vehicles" className="text-foreground hover:text-primary transition-colors">
              Vehicles
            </a>
            <a href="#documents" className="text-foreground hover:text-primary transition-colors">
              Documents
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Theme Toggle & Menu */}
          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="text-foreground"
            >
              {mounted && (theme === 'light' ? <Moon size={20} /> : <Sun size={20} />)}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-3 pt-4">
              <a
                href="#vehicles"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Vehicles
              </a>
              <a
                href="#documents"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Documents
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
