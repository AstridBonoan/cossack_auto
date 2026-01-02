import { useState } from 'react'

function Reservation() {
  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: currentYear - 1984 }, (_, i) => 1985 + i).reverse()
  
  const makes = [
    'Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge',
    'Ford', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jeep', 'Kia', 'Lexus',
    'Lincoln', 'Mazda', 'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Oldsmobile',
    'Pontiac', 'Porsche', 'Subaru', 'Toyota', 'Volkswagen', 'Volvo', 'Other'
  ]

  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    contactNumber: '',
    description: '',
    picture: null
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'picture') {
      setFormData(prev => ({
        ...prev,
        picture: files[0] || null
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    // Validate required fields
    if (!formData.year || !formData.make || !formData.model || !formData.contactNumber || !formData.description) {
      setError('Please fill in all required fields')
      setSubmitting(false)
      return
    }

    try {
      const submitData = new FormData()
      submitData.append('year', formData.year)
      submitData.append('make', formData.make)
      submitData.append('model', formData.model)
      submitData.append('contact_number', formData.contactNumber)
      submitData.append('description', formData.description)
      if (formData.picture) {
        submitData.append('picture', formData.picture)
      }

      const response = await fetch('/api/reservations', {
        method: 'POST',
        body: submitData
      })

      if (!response.ok) {
        throw new Error('Failed to submit reservation')
      }

      setSubmitted(true)
      setFormData({
        year: '',
        make: '',
        model: '',
        contactNumber: '',
        description: '',
        picture: null
      })
    } catch (err) {
      setError(err.message || 'Failed to submit reservation. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-off-white border-2 border-cossack-red p-12 mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">Reservation Submitted</h2>
            <p className="text-muted-gray text-lg font-body mb-6">
              Thank you for your reservation request. We'll contact you soon to confirm your appointment.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-cossack-red hover:bg-cossack-red/90 text-off-white font-heading font-bold py-3 px-8 uppercase tracking-wide transition-colors"
            >
              Submit Another
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-4 tracking-tight">Book a Reservation</h1>
            <div className="h-1 w-20 bg-cossack-red mb-6"></div>
            <p className="text-muted-gray text-base md:text-lg leading-relaxed font-body">
              Fill out the form below to request a reservation. We'll contact you to confirm your appointment.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-off-white border border-border-gray p-8 md:p-12">
            {error && (
              <div className="bg-off-white border-2 border-cossack-red px-6 py-4 mb-8">
                <p className="text-charcoal font-body font-semibold">{error}</p>
              </div>
            )}

            <div className="space-y-8">
              {/* Vehicle Information */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6 uppercase tracking-tight">Vehicle Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="year" className="block text-charcoal font-body font-semibold mb-2 uppercase text-sm tracking-wide">
                      Year <span className="text-cossack-red">*</span>
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-gray bg-off-white text-charcoal font-body focus:outline-none focus:border-charcoal transition-colors"
                    >
                      <option value="">Select Year</option>
                      {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="make" className="block text-charcoal font-body font-semibold mb-2 uppercase text-sm tracking-wide">
                      Make <span className="text-cossack-red">*</span>
                    </label>
                    <select
                      id="make"
                      name="make"
                      value={formData.make}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-gray bg-off-white text-charcoal font-body focus:outline-none focus:border-charcoal transition-colors"
                    >
                      <option value="">Select Make</option>
                      {makes.map(make => (
                        <option key={make} value={make}>{make}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="model" className="block text-charcoal font-body font-semibold mb-2 uppercase text-sm tracking-wide">
                      Model <span className="text-cossack-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      placeholder="Camry"
                      required
                      className="w-full px-4 py-3 border border-border-gray bg-off-white text-charcoal font-body focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-charcoal mb-6 uppercase tracking-tight">Contact Information</h2>
                <div>
                  <label htmlFor="contactNumber" className="block text-charcoal font-body font-semibold mb-2 uppercase text-sm tracking-wide">
                    Contact Number <span className="text-cossack-red">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    required
                    className="w-full px-4 py-3 border border-border-gray bg-off-white text-charcoal font-body focus:outline-none focus:border-charcoal transition-colors"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-charcoal font-body font-semibold mb-2 uppercase text-sm tracking-wide">
                  Brief Description <span className="text-cossack-red">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the issue or service needed..."
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border-gray bg-off-white text-charcoal font-body focus:outline-none focus:border-charcoal transition-colors resize-none"
                />
              </div>

              {/* Picture Upload */}
              <div>
                <label htmlFor="picture" className="block text-charcoal font-body font-semibold mb-2 uppercase text-sm tracking-wide">
                  Picture (Optional)
                </label>
                <input
                  type="file"
                  id="picture"
                  name="picture"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-gray bg-off-white text-charcoal font-body focus:outline-none focus:border-charcoal transition-colors file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-charcoal file:text-off-white file:font-heading file:font-bold file:uppercase file:tracking-wide file:cursor-pointer hover:file:bg-charcoal/90"
                />
                {formData.picture && (
                  <p className="mt-2 text-muted-gray text-sm font-body">
                    Selected: {formData.picture.name}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-cossack-red hover:bg-cossack-red/90 disabled:bg-muted-gray disabled:cursor-not-allowed text-off-white font-heading font-bold py-4 px-6 uppercase tracking-wide text-lg transition-colors"
                >
                  {submitting ? 'Submitting...' : 'Submit Reservation'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Reservation

