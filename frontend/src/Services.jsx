import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { servicesData } from './servicesData'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Try to fetch from API, fallback to static data
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      setLoading(true)
      // Try API first
      const response = await fetch('/api/services')
      if (response.ok) {
        const data = await response.json()
        setServices(data.services || [])
        setError(null)
      } else {
        // Fallback to static data
        setServices(servicesData)
        setError(null)
      }
    } catch (err) {
      // If API fails, use static data (for GitHub Pages)
      setServices(servicesData)
      setError(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        <div className="mb-20 md:mb-28 lg:mb-32">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-charcoal mb-6 tracking-tight text-center">Services</h1>
          <div className="h-1.5 w-32 bg-cossack-red mx-auto mb-8"></div>
          <p className="text-muted-gray text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-center font-body font-medium">
            From routine maintenance to major repairs, we've got you covered.
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-28 lg:pb-32">
          {loading && (
            <div className="text-center py-32">
              <p className="text-muted-gray text-base uppercase tracking-wider font-body font-medium">Loading services...</p>
            </div>
          )}

          {error && (
            <div className="bg-off-white border-2 border-cossack-red px-10 py-8 mb-16">
              <p className="font-body font-semibold text-charcoal mb-3 text-lg">Error</p>
              <p className="text-muted-gray text-base font-body">{error}</p>
              <p className="text-muted-gray/70 text-sm mt-4 font-body">Make sure the Flask backend is running on port 5000</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-off-white border-2 border-border-gray p-10 md:p-12 lg:p-14 hover:border-charcoal/40 transition-colors"
                >
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6 uppercase tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-muted-gray mb-10 text-base md:text-lg leading-relaxed font-body">{service.description}</p>
                  <div className="flex justify-between items-baseline mb-10 pb-10 border-b-2 border-border-gray">
                    <span className="text-4xl md:text-5xl font-heading font-bold text-charcoal">
                      ${service.price}
                    </span>
                    <span className="text-sm text-muted-gray uppercase tracking-wider font-body font-medium">
                      {service.duration}
                    </span>
                  </div>
                  <Link
                    to="/reservation"
                    className="block w-full bg-charcoal hover:bg-charcoal/90 active:bg-charcoal/95 text-off-white font-heading font-bold py-5 px-8 uppercase tracking-wider text-lg md:text-xl transition-all duration-200 text-center border-2 border-charcoal shadow-lg hover:shadow-xl"
                  >
                    Book Service
                  </Link>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && services.length === 0 && (
            <div className="bg-off-white border-2 border-border-gray p-16 text-center">
              <p className="text-muted-gray text-base uppercase tracking-wider font-body font-medium">No services available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Services

