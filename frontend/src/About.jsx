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

      {/* Values Section */}
      <section className="container mx-auto px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4 tracking-tight text-center">Our Values</h2>
          <div className="h-1 w-24 bg-cossack-red mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-off-white border border-border-gray p-8 hover:border-charcoal/40 transition-colors">
              <h3 className="text-xl font-heading font-bold text-charcoal mb-4 uppercase tracking-tight">Honesty</h3>
              <p className="text-muted-gray text-sm leading-relaxed font-body">
                We tell you what needs to be done, what can wait, and what's optional. No upselling, no pressure—just honest advice.
              </p>
            </div>
            <div className="bg-off-white border border-border-gray p-8 hover:border-charcoal/40 transition-colors">
              <h3 className="text-xl font-heading font-bold text-charcoal mb-4 uppercase tracking-tight">Quality</h3>
              <p className="text-muted-gray text-sm leading-relaxed font-body">
                We use quality parts and proven techniques. Every job is done right the first time, because your safety matters.
              </p>
            </div>
            <div className="bg-off-white border border-border-gray p-8 hover:border-charcoal/40 transition-colors">
              <h3 className="text-xl font-heading font-bold text-charcoal mb-4 uppercase tracking-tight">Community</h3>
              <p className="text-muted-gray text-sm leading-relaxed font-body">
                We're part of this neighborhood. We know your name, we know your car, and we're here when you need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto bg-off-white border border-border-gray p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4 tracking-tight text-center">Get in Touch</h2>
          <div className="h-1 w-24 bg-cossack-red mx-auto mb-8"></div>
          <div className="space-y-6 text-center">
            <div>
              <p className="text-muted-gray text-base font-body mb-2">Visit us or give us a call</p>
              <p className="text-charcoal font-body text-lg">We're here to help with all your auto repair needs.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About

