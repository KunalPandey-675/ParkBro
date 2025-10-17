import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Ticket } from 'lucide-react';
import useAppStore from '../../store/useAppStore';

const DriverEvents = () => {
  const { events, addBooking } = useAppStore();

  const handleBookEvent = (event) => {
    // Add event booking
    addBooking({
      spotNumber: `Event-${event.id}`,
      location: event.location,
      price: event.price,
      duration: 'Event duration',
      eventName: event.name,
    });
    
    alert(`Successfully pre-booked parking for ${event.name}!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Event Parking</h1>
          <p className="text-gray-600">
            Pre-book parking for upcoming events and save your spot
          </p>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <Ticket className="h-12 w-12" />
            <div>
              <h2 className="text-2xl font-bold">Smart Event Parking</h2>
              <p className="text-primary-100">
                Reserve your parking spot before the event and avoid the rush
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-primary-100">
            <li>✓ Guaranteed parking spot near the venue</li>
            <li>✓ Skip the queues and save time</li>
            <li>✓ Special event pricing</li>
          </ul>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              {/* Event Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <Ticket className="h-24 w-24 text-white opacity-50" />
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {event.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>{event.availableSpots} spots available</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="text-sm text-gray-600">Parking Price</p>
                    <p className="text-2xl font-bold text-primary-600">${event.price}</p>
                  </div>
                  <button
                    onClick={() => handleBookEvent(event)}
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-semibold"
                  >
                    Pre-Book
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-xl shadow-md p-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Pre-Book Event Parking?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Calendar className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Save Time</h3>
              <p className="text-gray-600 text-sm">
                No need to arrive early or circle around looking for parking
              </p>
            </div>
            <div>
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Best Locations</h3>
              <p className="text-gray-600 text-sm">
                Get parking spots closest to the venue entrance
              </p>
            </div>
            <div>
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                <Ticket className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Guaranteed Spot</h3>
              <p className="text-gray-600 text-sm">
                Your parking is secured even for sold-out events
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DriverEvents;
