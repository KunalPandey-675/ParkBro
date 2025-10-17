import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, CreditCard, Check } from 'lucide-react';
import useAppStore from '../../store/useAppStore';

const DriverBooking = () => {
  const navigate = useNavigate();
  const { selectedSpot, addBooking } = useAppStore();
  const [showPayment, setShowPayment] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [duration, setDuration] = useState(2);

  if (!selectedSpot) {
    navigate('/driver/search');
    return null;
  }

  const totalPrice = selectedSpot.price * duration;

  const handlePayment = () => {
    setShowPayment(true);
  };

  const handleConfirmPayment = () => {
    // Add booking to store
    addBooking({
      spotNumber: selectedSpot.spotNumber,
      location: selectedSpot.location,
      price: totalPrice,
      duration: `${duration} hours`,
    });
    
    setShowPayment(false);
    setShowConfirmation(true);
    
    // Redirect to dashboard after 3 seconds
    setTimeout(() => {
      navigate('/driver/dashboard');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Booking Summary</h1>
          <p className="text-gray-600">Review your booking details and complete payment</p>
        </motion.div>

        {!showConfirmation ? (
          <>
            {/* Booking Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-md p-8 mb-6"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Parking Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Location</span>
                  </div>
                  <span className="font-semibold text-gray-900">{selectedSpot.location}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="h-5 w-5 text-gray-500 font-bold">P</div>
                    <span className="text-gray-700">Spot Number</span>
                  </div>
                  <span className="font-semibold text-gray-900">{selectedSpot.spotNumber}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Date</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Duration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setDuration(Math.max(1, duration - 1))}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="font-semibold text-gray-900 px-4">{duration} hours</span>
                    <button
                      onClick={() => setDuration(duration + 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">Price per hour</span>
                  </div>
                  <span className="font-semibold text-gray-900">${selectedSpot.price}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t-2 border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-gray-900">Total Amount</span>
                  <span className="text-3xl font-bold text-primary-600">${totalPrice}</span>
                </div>
              </div>
            </motion.div>

            {/* Payment Button */}
            {!showPayment && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handlePayment}
                className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition shadow-lg"
              >
                Pay to Reserve
              </motion.button>
            )}

            {/* Payment Modal */}
            {showPayment && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl shadow-md p-8"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Payment Details</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <button
                  onClick={handleConfirmPayment}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition"
                >
                  Confirm Payment - ${totalPrice}
                </button>
              </motion.div>
            )}
          </>
        ) : (
          /* Confirmation Card */
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-md p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Check className="h-12 w-12 text-green-600" />
            </motion.div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Your parking spot has been successfully reserved.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Spot Number:</span>
                  <span className="font-semibold">{selectedSpot.spotNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-semibold">{selectedSpot.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{duration} hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Paid:</span>
                  <span className="font-semibold text-primary-600">${totalPrice}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Redirecting to dashboard...
            </p>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 3 }}
                className="bg-primary-600 h-2 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DriverBooking;
