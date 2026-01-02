import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-charcoal mb-4 tracking-tight leading-none">
            COSSACK AUTO
          </h1>
          <p className="text-muted-gray text-xl md:text-2xl lg:text-3xl uppercase tracking-wider mb-8 font-body font-semibold">
            AUTO REPAIR & SERVICE
          </p>
          <div className="h-1.5 w-32 bg-cossack-red mx-auto mb-12"></div>
          <p className="text-muted-gray text-xl md:text-2xl lg:text-3xl leading-relaxed mb-16 font-body max-w-4xl mx-auto font-medium">
            Honest work. Fair prices. Neighborhood service since day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/reservation"
              className="bg-cossack-red hover:bg-cossack-red/90 text-off-white font-heading font-bold py-5 px-10 md:py-6 md:px-12 uppercase tracking-wider text-lg md:text-xl transition-colors min-w-[200px]"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="bg-charcoal hover:bg-charcoal/90 text-off-white font-heading font-bold py-5 px-10 md:py-6 md:px-12 uppercase tracking-wider text-lg md:text-xl transition-colors border-2 border-charcoal min-w-[200px]"
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

