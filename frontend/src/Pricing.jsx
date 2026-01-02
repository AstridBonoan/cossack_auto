import { Link } from 'react-router-dom'

function Pricing() {
  const pricingTiers = [
    {
      name: "Basic Service",
      price: "Starting at $49",
      description: "Essential maintenance and minor repairs",
      features: [
        "Oil Change",
        "Tire Rotation",
        "Basic Inspection",
        "Fluid Top-Off"
      ]
    },
    {
      name: "Standard Service",
      price: "Starting at $149",
      description: "Comprehensive maintenance and common repairs",
      features: [
        "All Basic Services",
        "Brake Service",
        "Battery Check & Replacement",
        "Filter Replacements",
        "Diagnostic Scan"
      ]
    },
    {
      name: "Premium Service",
      price: "Starting at $299",
      description: "Complete service package and major repairs",
      features: [
        "All Standard Services",
        "Engine Diagnostic",
        "Transmission Service",
        "Suspension Work",
        "AC Service",
        "Priority Scheduling"
      ]
    }
  ]

  const commonServices = [
    { service: "Oil Change", price: "$49.99" },
    { service: "Brake Service", price: "$199.99" },
    { service: "Tire Rotation", price: "$29.99" },
    { service: "Engine Diagnostic", price: "$89.99" },
    { service: "Battery Replacement", price: "$129.99" },
    { service: "AC Service", price: "$149.99" },
    { service: "Transmission Service", price: "$249.99" },
    { service: "Suspension Repair", price: "$199.99" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-charcoal mb-6 tracking-tight">Pricing</h1>
          <div className="h-1.5 w-32 bg-cossack-red mx-auto mb-8"></div>
          <p className="text-muted-gray text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-body font-medium">
            Transparent pricing. No surprises. Fair rates for quality work.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-28 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-14 mb-20">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="bg-off-white border-2 border-border-gray p-10 md:p-12 lg:p-14 hover:border-charcoal/40 transition-colors"
            >
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6 uppercase tracking-tight">
                {tier.name}
              </h3>
              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-heading font-bold text-charcoal">
                  {tier.price}
                </span>
              </div>
              <p className="text-muted-gray mb-10 text-base md:text-lg leading-relaxed font-body">
                {tier.description}
              </p>
              <ul className="space-y-4 mb-10">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-muted-gray mr-4 font-body text-lg">•</span>
                    <span className="text-muted-gray text-base font-body">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/reservation"
                className="block w-full bg-charcoal hover:bg-charcoal/90 text-off-white font-heading font-bold py-5 px-8 uppercase tracking-wider text-lg md:text-xl transition-colors text-center border-2 border-charcoal"
              >
                Book Service
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Common Services Pricing */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal mb-6 tracking-tight text-center">
            Common Services
          </h2>
          <div className="h-1.5 w-32 bg-cossack-red mx-auto mb-16"></div>
          <div className="bg-off-white border-2 border-border-gray">
            <div className="divide-y-2 divide-border-gray">
              {commonServices.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-8 px-8 md:px-12 hover:bg-off-white/50 transition-colors"
                >
                  <span className="text-charcoal font-body text-lg md:text-xl font-medium">
                    {item.service}
                  </span>
                  <span className="text-charcoal font-heading font-bold text-xl md:text-2xl">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-muted-gray text-base font-body mb-8 font-medium">
              * Prices may vary based on vehicle make, model, and specific requirements.
            </p>
            <Link
              to="/reservation"
              className="inline-block bg-cossack-red hover:bg-cossack-red/90 text-off-white font-heading font-bold py-5 px-10 md:py-6 md:px-12 uppercase tracking-wider text-lg md:text-xl transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-4xl mx-auto bg-off-white border-2 border-border-gray p-12 md:p-14 lg:p-16">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6 uppercase tracking-tight">
            Transparent Pricing
          </h3>
          <p className="text-muted-gray text-base md:text-lg leading-relaxed font-body mb-6">
            We believe in honest, upfront pricing. All estimates are provided before work begins, and we'll never perform additional services without your approval.
          </p>
          <p className="text-muted-gray text-base md:text-lg leading-relaxed font-body">
            For complex repairs or custom work, we'll provide a detailed estimate after inspection. No hidden fees, no surprises—just fair pricing for quality service.
          </p>
        </div>
      </section>
    </>
  )
}

export default Pricing

