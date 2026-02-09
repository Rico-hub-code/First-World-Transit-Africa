'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { VehicleGrid } from '@/components/vehicle-grid'
import { Documents } from '@/components/documents'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VehicleGrid />
        <Documents />
      </main>
      <Footer />
    </div>
  )
}
