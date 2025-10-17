import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import DriverSearch from './pages/driver/DriverSearch';
import DriverBooking from './pages/driver/DriverBooking';
import DriverDashboard from './pages/driver/DriverDashboard';
import DriverEvents from './pages/driver/DriverEvents';
import OwnerDashboard from './pages/owner/OwnerDashboard';
import OwnerSmartPricing from './pages/owner/OwnerSmartPricing';
import OwnerAnalytics from './pages/owner/OwnerAnalytics';
import OwnerPolicies from './pages/owner/OwnerPolicies';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<Landing />} />
              
              {/* Driver Routes */}
              <Route path="/driver/search" element={<DriverSearch />} />
              <Route path="/driver/booking" element={<DriverBooking />} />
              <Route path="/driver/dashboard" element={<DriverDashboard />} />
              <Route path="/driver/events" element={<DriverEvents />} />
              
              {/* Owner Routes */}
              <Route path="/owner/dashboard" element={<OwnerDashboard />} />
              <Route path="/owner/smart-pricing" element={<OwnerSmartPricing />} />
              <Route path="/owner/analytics" element={<OwnerAnalytics />} />
              <Route path="/owner/policies" element={<OwnerPolicies />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
