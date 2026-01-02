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
      <section className="container mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4 tracking-tight">Pricing</h1>
          <div className="h-1 w-24 bg-cossack-red mx-auto mb-6"></div>
          <p className="text-muted-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-body">
            Transparent pricing. No surprises. Fair rates for quality work.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="bg-off-white border border-border-gray p-8 md:p-10 hover:border-charcoal/40 transition-colors"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4 uppercase tracking-tight">
                {tier.name}
              </h3>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-heading font-bold text-charcoal">
                  {tier.price}
                </span>
              </div>
              <p className="text-muted-gray mb-8 text-base leading-relaxed font-body">
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-muted-gray mr-3 font-body">•</span>
                    <span className="text-muted-gray text-sm font-body">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/reservation"
                className="block w-full bg-charcoal hover:bg-charcoal/90 active:bg-charcoal/95 text-off-white font-heading font-bold py-4 px-6 uppercase tracking-wide text-base md:text-lg transition-all duration-200 text-center border-2 border-charcoal shadow-md hover:shadow-lg"
              >
                Book Service
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Common Services Pricing */}
      <section className="container mx-auto px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4 tracking-tight text-center">
            Common Services
          </h2>
          <div className="h-1 w-24 bg-cossack-red mx-auto mb-12"></div>
          <div className="bg-off-white border border-border-gray">
            <div className="divide-y divide-border-gray">
              {commonServices.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-6 px-6 md:px-8 hover:bg-off-white/50 transition-colors"
                >
                  <span className="text-charcoal font-body text-base md:text-lg">
                    {item.service}
                  </span>
                  <span className="text-charcoal font-heading font-bold text-lg md:text-xl">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-gray text-sm font-body mb-6">
              * Prices may vary based on vehicle make, model, and specific requirements.
            </p>
            <Link
              to="/reservation"
              className="inline-block bg-cossack-red hover:bg-cossack-red/90 active:bg-cossack-red/95 text-off-white font-heading font-bold py-4 px-8 uppercase tracking-wide text-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="container mx-auto px-6 md:px-8 lg:px-12 pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto bg-off-white border border-border-gray p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-4 uppercase tracking-tight">
            Transparent Pricing
          </h3>
          <p className="text-muted-gray text-base leading-relaxed font-body mb-4">
            We believe in honest, upfront pricing. All estimates are provided before work begins, and we'll never perform additional services without your approval.
          </p>
          <p className="text-muted-gray text-base leading-relaxed font-body">
            For complex repairs or custom work, we'll provide a detailed estimate after inspection. No hidden fees, no surprises—just fair pricing for quality service.
          </p>
        </div>
      </section>
    </>
  )
}

export default Pricing

