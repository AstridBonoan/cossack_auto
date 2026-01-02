import { Link } from 'react-router-dom'

function Home() {

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-8 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-charcoal mb-6 tracking-tight">
            COSSACK AUTO
          </h1>
          <div className="h-1 w-24 bg-cossack-red mx-auto mb-8"></div>
          <p className="text-muted-gray text-xl md:text-2xl leading-relaxed mb-12 font-body max-w-3xl mx-auto">
            Honest work. Fair prices. Neighborhood service since day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservation"
              className="bg-cossack-red hover:bg-cossack-red/90 text-off-white font-heading font-bold py-4 px-8 uppercase tracking-wide text-lg transition-colors"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="bg-charcoal hover:bg-charcoal/90 text-off-white font-heading font-bold py-4 px-8 uppercase tracking-wide text-lg transition-colors border-2 border-charcoal"
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

