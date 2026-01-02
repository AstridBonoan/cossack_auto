import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorBoundary from './ErrorBoundary'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import Services from './Services'
import Pricing from './Pricing'
import Reviews from './Reviews'
import Reservation from './Reservation'

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  )
}

export default App

