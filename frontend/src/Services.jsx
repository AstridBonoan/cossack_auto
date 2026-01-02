import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchServices()
  }, [])

  const fetchServices = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/services')
      if (!response.ok) {
        throw new Error('Failed to fetch services')
      }
      const data = await response.json()
      setServices(data.services || [])
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching services:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4 tracking-tight text-center">Services</h1>
          <div className="h-1 w-20 bg-cossack-red mx-auto mb-6"></div>
          <p className="text-muted-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-center font-body">
            From routine maintenance to major repairs, we've got you covered.
          </p>
        </div>

        <div className="container mx-auto px-6 md:px-8 pb-16 md:pb-24">
          {loading && (
            <div className="text-center py-24">
              <p className="text-muted-gray text-sm uppercase tracking-wide font-body">Loading services...</p>
            </div>
          )}

          {error && (
            <div className="bg-off-white border-2 border-cossack-red px-8 py-6 mb-12">
              <p className="font-body font-semibold text-charcoal mb-2">Error</p>
              <p className="text-muted-gray text-sm font-body">{error}</p>
              <p className="text-muted-gray/70 text-xs mt-3 font-body">Make sure the Flask backend is running on port 5000</p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-off-white border border-border-gray p-8 md:p-10 hover:border-charcoal/40 transition-colors"
                >
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4 uppercase tracking-tight">
                    {service.name}
                  </h3>
                  <p className="text-muted-gray mb-8 text-base leading-relaxed font-body">{service.description}</p>
                  <div className="flex justify-between items-baseline mb-8 pb-8 border-b border-border-gray">
                    <span className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                      ${service.price}
                    </span>
                    <span className="text-xs text-muted-gray uppercase tracking-wide font-body">
                      {service.duration}
                    </span>
                  </div>
                  <Link
                    to="/reservation"
                    className="block w-full bg-charcoal hover:bg-charcoal/90 text-off-white font-heading font-bold py-4 px-6 uppercase tracking-wide text-base md:text-lg transition-colors text-center border-2 border-charcoal"
                  >
                    Book Service
                  </Link>
                </div>
              ))}
            </div>
          )}

          {!loading && !error && services.length === 0 && (
            <div className="bg-off-white border border-border-gray p-12 text-center">
              <p className="text-muted-gray text-sm uppercase tracking-wide font-body">No services available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Services

