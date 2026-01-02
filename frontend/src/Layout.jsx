import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="min-h-screen bg-off-white">
      <header className="bg-charcoal text-off-white border-b border-border-gray texture-charcoal">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between py-4 md:py-6">
            {/* Logo + Name */}
            <Link to="/" className="flex items-center gap-4 md:gap-6">
              <div className="relative inline-block">
              <img 
                  src="/cossack_auto/logo/cosscack.PNG"
                  alt="Cossack Auto Logo" 
                  className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0"
                  style={{ 
                    filter: 'brightness(1.2) contrast(1.3)',
                    mixBlendMode: 'normal'
                  }}
                />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-heading font-bold tracking-tight">COSSACK AUTO</h1>
              </div>
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors">Home</Link>
              <Link to="/about" className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors">About</Link>
              <Link to="/services" className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors">Services</Link>
              <Link to="/pricing" className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors">Pricing</Link>
              <Link to="/reviews" className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors">Reviews</Link>
              <Link to="/reservation" className="text-off-white hover:text-off-white/80 font-body text-sm uppercase tracking-wide transition-colors">Book</Link>
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
              className="hidden md:block bg-cossack-red hover:bg-cossack-red/90 text-off-white font-heading font-bold py-2 px-4 md:py-3 md:px-6 uppercase tracking-wide text-sm transition-colors"
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

      <footer className="bg-charcoal text-off-white mt-16 md:mt-20 border-t border-border-gray texture-charcoal">
        <div className="container mx-auto px-6 md:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs text-muted-gray uppercase tracking-wide font-body">
                &copy; 2024 Cossack Auto
              </p>
            </div>
            <div className="flex-shrink-0 opacity-60">
              <img 
                src="/cossack_auto/logo/cossack_stamp.PNG" 
                alt="Cossack Auto Stamp" 
                className="w-16 h-16 md:w-20 md:h-20"
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

