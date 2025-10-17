import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, X } from 'lucide-react';
import useAppStore from '../../store/useAppStore';
import BookingCard from '../../components/BookingCard';

const DriverDashboard = () => {
  const { bookings, cancelBooking } = useAppStore();
  const [showPenaltyModal, setShowPenaltyModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleCancelBooking = (bookingId) => {
    setSelectedBooking(bookingId);
    setShowPenaltyModal(true);
  };

  const confirmCancellation = () => {
    if (selectedBooking) {
      cancelBooking(selectedBooking);
      setShowPenaltyModal(false);
      setSelectedBooking(null);
    }
  };

  const activeBookings = bookings.filter((b) => b.status === 'active');
  const pastBookings = bookings.filter((b) => b.status !== 'active');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Dashboard</h1>
          <p className="text-gray-600">Manage your parking bookings</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <p className="text-sm text-gray-600 mb-1">Active Bookings</p>
            <p className="text-3xl font-bold text-primary-600">{activeBookings.length}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <p className="text-sm text-gray-600 mb-1">Total Bookings</p>
            <p className="text-3xl font-bold text-gray-900">{bookings.length}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <p className="text-sm text-gray-600 mb-1">Total Spent</p>
            <p className="text-3xl font-bold text-green-600">
              ${bookings.reduce((sum, b) => sum + b.price, 0)}
            </p>
          </motion.div>
        </div>

        {/* Active Bookings */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Active Bookings</h2>
          {activeBookings.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeBookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  onCancel={handleCancelBooking}
                  showActions={true}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-md p-12 text-center"
            >
              <p className="text-gray-500 text-lg">No active bookings</p>
              <a
                href="/driver/search"
                className="inline-block mt-4 text-primary-600 hover:text-primary-700 font-semibold"
              >
                Find Parking →
              </a>
            </motion.div>
          )}
        </div>

        {/* Past Bookings */}
        {pastBookings.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Past Bookings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastBookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  booking={booking}
                  showActions={false}
                />
              ))}
            </div>
          </div>
        )}

        {/* Penalty Modal */}
        {showPenaltyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowPenaltyModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <AlertCircle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Cancellation Warning
                  </h3>
                </div>
                <button
                  onClick={() => setShowPenaltyModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <p className="text-gray-600 mb-6">
                Cancelling this booking will incur a penalty fee of <strong>$5</strong>. 
                This amount will be deducted from your total.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Cancellation policies vary by location and timing. 
                  Please review our cancellation policy for more details.
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowPenaltyModal(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
                >
                  Keep Booking
                </button>
                <button
                  onClick={confirmCancellation}
                  className="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition font-semibold"
                >
                  Cancel Anyway
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DriverDashboard;
