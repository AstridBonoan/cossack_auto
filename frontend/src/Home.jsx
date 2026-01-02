import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-charcoal mb-3 tracking-tight leading-tight">
            COSSACK AUTO
          </h1>
          <p className="text-muted-gray text-lg md:text-xl uppercase tracking-wider mb-6 font-body font-semibold">
            AUTO REPAIR & SERVICE
          </p>
          <div className="h-1 w-24 bg-cossack-red mx-auto mb-8"></div>
          <p className="text-muted-gray text-lg md:text-xl leading-relaxed mb-12 font-body max-w-3xl mx-auto">
            Honest work. Fair prices. Neighborhood service since day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/reservation"
              className="bg-cossack-red hover:bg-cossack-red/90 active:bg-cossack-red/95 text-off-white font-heading font-bold py-3 px-8 md:py-4 md:px-10 uppercase tracking-wider text-base md:text-lg transition-all duration-200 min-w-[180px] shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="bg-charcoal hover:bg-charcoal/90 active:bg-charcoal/95 text-off-white font-heading font-bold py-3 px-8 md:py-4 md:px-10 uppercase tracking-wider text-base md:text-lg transition-all duration-200 border-2 border-charcoal min-w-[180px] shadow-md hover:shadow-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

