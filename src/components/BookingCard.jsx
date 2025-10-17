import { motion } from 'framer-motion';
import { Calendar, MapPin, DollarSign, Clock } from 'lucide-react';

// Booking card component for displaying booking information
const BookingCard = ({ booking, onCancel, showActions = true }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Spot {booking.spotNumber}
          </h3>
          <span
            className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
              booking.status
            )}`}
          >
            {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
          </span>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary-600">${booking.price}</p>
          <p className="text-sm text-gray-500">Total</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-3 text-gray-600">
          <MapPin className="h-5 w-5" />
          <span>{booking.location}</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-600">
          <Calendar className="h-5 w-5" />
          <span>{new Date(booking.bookingDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-600">
          <Clock className="h-5 w-5" />
          <span>{booking.duration || '2 hours'}</span>
        </div>
      </div>

      {booking.penalty && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800">
            <strong>Penalty Applied:</strong> ${booking.penalty}
          </p>
        </div>
      )}

      {showActions && booking.status === 'active' && (
        <button
          onClick={() => onCancel(booking.id)}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Cancel Booking
        </button>
      )}
    </motion.div>
  );
};

export default BookingCard;
