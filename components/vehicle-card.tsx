'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Vehicle {
  id: number
  name: string
  image: string
  inboundPrice: string
  outboundPrice: string
}

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
        <Image
          src={vehicle.image || "/placeholder.svg"}
          alt={vehicle.name}
          width={300}
          height={200}
          className="object-cover w-full h-full"
          priority={false}
        />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl text-foreground font-bold">{vehicle.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary/10 rounded-lg p-3 border border-primary/20">
            <p className="text-xs font-medium text-foreground mb-1">In-Bound</p>
            <p className="text-xl font-bold text-foreground">
              {vehicle.inboundPrice}
              <span className="text-sm font-medium text-foreground/80 ml-1">/24hrs</span>
            </p>
          </div>
          <div className="bg-secondary/20 rounded-lg p-3 border border-secondary/20">
            <p className="text-xs font-medium text-foreground mb-1">Out-Bound</p>
            <p className="text-xl font-bold text-foreground">
              {vehicle.outboundPrice}
              <span className="text-sm font-medium text-foreground/80 ml-1">/24hrs</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}