'use client'

export function Hero() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Car Rental Services
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Reliable and affordable transportation across Africa. Browse our fleet of well-maintained vehicles for your travel needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Browse Vehicles
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
            Request Quote
          </button> */}
        </div>
      </div>
    </section>
  )
}
