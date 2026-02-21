'use client'

import { VehicleCard } from './vehicle-card'

const vehicles = [
  {
    id: 1,
    name: 'Mark X',
    image: '/vehicles/Mark x.jpg',
    inboundPrice: 'k650',
    outboundPrice: 'k900',
  },
  {
    id: 2,
    name: 'Honda CR-V',
    image: '/vehicles/honda cr-v.jpg',
    inboundPrice: 'k800',
    outboundPrice: 'k1300',
  },
  {
    id: 3,
    name: 'Hyundai Veloster',
    image: '/vehicles/Hyundia veloster.png',
    inboundPrice: 'k1000',
    outboundPrice: 'k1500',
  },
  {
    id: 4,
    name: 'Mercedes-Benz Vito',
    image: '/vehicles/mercedes-vito.png',
    inboundPrice: 'k1200',
    outboundPrice: 'k1700',
  },
  {
    id: 5,
    name: 'Toyota Land Cruiser',
    image: '/vehicles/land-cruiser.jpg',
    inboundPrice: 'k1700',
    outboundPrice: 'k2200',
  },
  { 
    id: 6,
    name: 'BMW 745i',
    image: '/vehicles/BMW.jpg',
    inboundPrice: 'k900',
    outboundPrice: 'k1300',
  },
  // {
  //   id: 7,
  //   name: 'Honda Fit Aria',
  //   image: '/vehicles/honda fit.jpg',
  //   inboundPrice: 'k500',
  //   outboundPrice: 'k900',
  // },
  // {
  //   id: 8,
  //   name: 'Lexus IS',
  //   image: '/vehicles/lexus-is.jpg',
  //   inboundPrice: 'k0',
  //   outboundPrice: 'k0',
  // },
]

export function VehicleGrid() {
  return (
    <section id="vehicles" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Available Vehicles
          </h2>
          <p className="text-muted-foreground max-w-2xl text-balance">
            Browse our selection of well-maintained vehicles. Choose between in-bound and out-bound rental options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  )
}
