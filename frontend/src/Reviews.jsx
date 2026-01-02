import { useState } from 'react'

function Reviews() {
  const [reviews] = useState([
    {
      id: 1,
      name: "Mike Johnson",
      rating: 5,
      date: "2 weeks ago",
      service: "Brake Service",
      review: "Honest, fast, and fair pricing. They fixed my brakes and explained everything clearly. No upselling, just good work. Highly recommend!"
    },
    {
      id: 2,
      name: "Sarah Martinez",
      rating: 5,
      date: "1 month ago",
      service: "Oil Change & Inspection",
      review: "Best auto shop in the area. They treat you like family and always do quality work. I've been coming here for years and wouldn't go anywhere else."
    },
    {
      id: 3,
      name: "David Chen",
      rating: 5,
      date: "3 weeks ago",
      service: "Engine Diagnostic",
      review: "Quick diagnosis and fair price. They found the issue right away and got me back on the road. Professional and trustworthy."
    },
    {
      id: 4,
      name: "Jennifer Williams",
      rating: 5,
      date: "2 months ago",
      service: "AC Service",
      review: "My AC was blowing hot air. They fixed it quickly and the price was exactly what they quoted. Great service, will definitely return."
    },
    {
      id: 5,
      name: "Robert Taylor",
      rating: 5,
      date: "1 week ago",
      service: "Transmission Service",
      review: "These guys know what they're doing. Fixed my transmission issue and saved me a lot of money compared to the dealer. Honest mechanics are hard to find!"
    },
    {
      id: 6,
      name: "Lisa Anderson",
      rating: 5,
      date: "3 months ago",
      service: "General Maintenance",
      review: "Reliable, honest, and affordable. They've been taking care of my car for years. I trust them completely with all my auto needs."
    }
  ])

  const renderStars = (rating) => {
    return '★'.repeat(rating)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-charcoal mb-6 tracking-tight">Customer Reviews</h1>
          <div className="h-1.5 w-32 bg-cossack-red mx-auto mb-8"></div>
          <p className="text-muted-gray text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-body font-medium">
            See what our customers have to say about their experience at Cossack Auto.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-28 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-14">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-off-white border-2 border-border-gray p-10 md:p-12 hover:border-charcoal/40 transition-all duration-200"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-charcoal uppercase tracking-tight">
                    {review.name}
                  </h3>
                  <span className="text-cossack-red text-xl md:text-2xl font-heading">
                    {renderStars(review.rating)}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-gray font-body font-medium">
                  <span>{review.service}</span>
                  <span>•</span>
                  <span>{review.date}</span>
                </div>
              </div>
              <p className="text-muted-gray text-base md:text-lg leading-relaxed font-body">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Average Rating Section */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-4xl mx-auto bg-off-white border-2 border-border-gray p-12 md:p-14 lg:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6 tracking-tight">Overall Rating</h2>
          <div className="h-1.5 w-32 bg-cossack-red mx-auto mb-10"></div>
          <div className="mb-8">
            <span className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-charcoal">5.0</span>
            <div className="text-cossack-red text-4xl md:text-5xl font-heading mt-4">
              {renderStars(5)}
            </div>
          </div>
          <p className="text-muted-gray text-base md:text-lg font-body font-medium">
            Based on customer reviews
          </p>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="container mx-auto px-6 md:px-12 lg:px-16 pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6 tracking-tight">Share Your Experience</h2>
          <div className="h-1.5 w-32 bg-cossack-red mx-auto mb-8"></div>
          <p className="text-muted-gray text-lg md:text-xl leading-relaxed font-body mb-10 font-medium">
            Had a great experience? We'd love to hear from you. Your feedback helps us serve you better.
          </p>
          <a
            href="tel:+1234567890"
            className="inline-block bg-charcoal hover:bg-charcoal/90 active:bg-charcoal/95 text-off-white font-heading font-bold py-5 px-10 md:py-6 md:px-12 uppercase tracking-wider text-lg md:text-xl transition-all duration-200 border-2 border-charcoal shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  )
}

export default Reviews

