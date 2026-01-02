function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4 tracking-tight">About Us</h1>
          <div className="h-1 w-24 bg-cossack-red mx-auto mb-6"></div>
          <p className="text-muted-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-body">
            Your trusted neighborhood auto repair shop. Honest work, fair prices, quality service.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6 uppercase tracking-tight">Our Story</h2>
              <div className="space-y-4">
                <p className="text-muted-gray text-base leading-relaxed font-body">
                  Cossack Auto has been serving the community with reliable, honest auto repair services for years. We're not a flashy chain—we're your neighborhood shop.
                </p>
                <p className="text-muted-gray text-base leading-relaxed font-body">
                  Our experienced mechanics treat every vehicle like their own, using quality parts and proven techniques to get you back on the road safely.
                </p>
                <p className="text-muted-gray text-base leading-relaxed font-body">
                  We believe in building relationships with our customers, not just fixing cars. When you bring your vehicle to Cossack Auto, you're part of the family.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6 uppercase tracking-tight">Why Choose Us</h2>
              <ul className="space-y-4 text-muted-gray font-body">
                <li className="flex items-start">
                  <span className="text-cossack-red mr-3 font-bold text-lg">•</span>
                  <span className="text-base leading-relaxed">Fair, transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cossack-red mr-3 font-bold text-lg">•</span>
                  <span className="text-base leading-relaxed">Experienced mechanics you can trust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cossack-red mr-3 font-bold text-lg">•</span>
                  <span className="text-base leading-relaxed">Quality parts and honest recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cossack-red mr-3 font-bold text-lg">•</span>
                  <span className="text-base leading-relaxed">Neighborhood service with a personal touch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cossack-red mr-3 font-bold text-lg">•</span>
                  <span className="text-base leading-relaxed">Stand behind our work with warranties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About

