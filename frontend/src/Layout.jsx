import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-off-white">
      <header className="bg-charcoal text-off-white border-b-2 border-border-gray texture-charcoal">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between py-5 md:py-7 lg:py-8">
            {/* Logo + Name */}
            <Link to="/" className="flex items-center gap-5 md:gap-6 lg:gap-8">
              <div className="relative inline-block">
              <img 
                  src="/cossack_auto/logo/cosscack.PNG"
                  alt="Cossack Auto Logo" 
                  className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 flex-shrink-0"
                  style={{ 
                    filter: 'brightness(1.2) contrast(1.3)',
                    mixBlendMode: 'normal'
                  }}
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold tracking-tight">COSSACK AUTO</h1>
              </div>
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-10 lg:gap-12">
              <Link to="/" className="text-off-white hover:text-off-white/80 font-body text-sm md:text-base uppercase tracking-wider transition-colors font-medium">Home</Link>
              <Link to="/about" className="text-off-white hover:text-off-white/80 font-body text-sm md:text-base uppercase tracking-wider transition-colors font-medium">About</Link>
              <Link to="/services" className="text-off-white hover:text-off-white/80 font-body text-sm md:text-base uppercase tracking-wider transition-colors font-medium">Services</Link>
              <Link to="/pricing" className="text-off-white hover:text-off-white/80 font-body text-sm md:text-base uppercase tracking-wider transition-colors font-medium">Pricing</Link>
              <Link to="/reviews" className="text-off-white hover:text-off-white/80 font-body text-sm md:text-base uppercase tracking-wider transition-colors font-medium">Reviews</Link>
              <Link to="/reservation" className="text-off-white hover:text-off-white/80 font-body text-sm md:text-base uppercase tracking-wider transition-colors font-medium">Book</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-off-white p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* CTA Button - Desktop */}
            <Link 
              to="/reservation"
              className="hidden md:block bg-cossack-red hover:bg-cossack-red/90 text-off-white font-heading font-bold py-3 px-6 lg:py-4 lg:px-8 uppercase tracking-wider text-sm md:text-base transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden border-t border-border-gray py-4">
              <div className="flex flex-col gap-4">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors py-2">Home</Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors py-2">About</Link>
                <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors py-2">Services</Link>
                <Link to="/pricing" onClick={() => setMobileMenuOpen(false)} className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors py-2">Pricing</Link>
                <Link to="/reviews" onClick={() => setMobileMenuOpen(false)} className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors py-2">Reviews</Link>
                <Link to="/reservation" onClick={() => setMobileMenuOpen(false)} className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors py-2">Book</Link>
                <Link 
                  to="/reservation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-cossack-red hover:bg-cossack-red/90 text-off-white font-heading font-bold py-3 px-6 uppercase tracking-wide text-sm transition-colors mt-2 text-center"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {children}

      <footer className="bg-charcoal text-off-white mt-20 md:mt-28 lg:mt-32 border-t-2 border-border-gray texture-charcoal">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-12 lg:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm md:text-base text-muted-gray uppercase tracking-wider font-body font-medium">
                &copy; 2024 Cossack Auto
              </p>
            </div>
            <div className="flex-shrink-0 opacity-60">
              <img 
                src="/cossack_auto/logo/cossack_stamp.PNG" 
                alt="Cossack Auto Stamp" 
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bar */}
      {location.pathname !== '/reservation' && (
        <div className="fixed bottom-0 left-0 right-0 bg-charcoal text-off-white border-t border-border-gray texture-charcoal md:hidden z-50">
          <div className="grid grid-cols-3 divide-x divide-border-gray">
            <a 
              href="tel:" 
              className="py-4 text-center font-heading font-bold text-sm uppercase tracking-wide hover:bg-charcoal/80 transition-colors"
            >
              Call
            </a>
            <a 
              href="sms:" 
              className="py-4 text-center font-heading font-bold text-sm uppercase tracking-wide hover:bg-charcoal/80 transition-colors"
            >
              Text
            </a>
            <Link 
              to="/reservation"
              className="py-4 text-center font-heading font-bold text-sm uppercase tracking-wide bg-cossack-red hover:bg-cossack-red/90 transition-colors"
            >
              Book
            </Link>
          </div>
        </div>
      )}

      {/* Spacer for mobile sticky bar */}
      {location.pathname !== '/reservation' && (
        <div className="h-16 md:hidden"></div>
      )}
    </div>
  )
}

export default Layout

