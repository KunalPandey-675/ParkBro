import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Clock, RefreshCw } from 'lucide-react';
import useAppStore from '../../store/useAppStore';
import ParkingGrid from '../../components/ParkingGrid';

const DriverSearch = () => {
  const navigate = useNavigate();
  const { parkingSpots, setSelectedSpot, refreshParkingSpots } = useAppStore();
  const [selectedSpotId, setSelectedSpotId] = useState(null);
  const [searchParams, setSearchParams] = useState({
    location: 'Downtown Parking Zone',
    date: new Date().toISOString().split('T')[0],
    time: '09:00',
  });

  const handleSelectSpot = (spot) => {
    setSelectedSpotId(spot.id);
    setSelectedSpot(spot);
  };

  const handleProceedToBooking = () => {
    if (selectedSpotId) {
      navigate('/driver/booking');
    }
  };

  const availableSpots = parkingSpots.filter((spot) => spot.status !== 'occupied');
  const occupiedCount = parkingSpots.filter((spot) => spot.status === 'occupied').length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Find Parking</h1>
          <p className="text-gray-600">Search and select your perfect parking spot</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Location
              </label>
              <input
                type="text"
                value={searchParams.location}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, location: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Enter location"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Date
              </label>
              <input
                type="date"
                value={searchParams.date}
                onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="inline h-4 w-4 mr-1" />
                Time
              </label>
              <input
                type="time"
                value={searchParams.time}
                onChange={(e) => setSearchParams({ ...searchParams, time: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={refreshParkingSpots}
                className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition flex items-center justify-center space-x-2"
              >
                <RefreshCw className="h-5 w-5" />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow p-4"
          >
            <p className="text-sm text-gray-600">Total Spots</p>
            <p className="text-2xl font-bold text-gray-900">{parkingSpots.length}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow p-4"
          >
            <p className="text-sm text-gray-600">Available</p>
            <p className="text-2xl font-bold text-green-600">{availableSpots.length}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow p-4"
          >
            <p className="text-sm text-gray-600">Occupied</p>
            <p className="text-2xl font-bold text-red-600">{occupiedCount}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow p-4"
          >
            <p className="text-sm text-gray-600">Avg. Price</p>
            <p className="text-2xl font-bold text-primary-600">
              ${Math.floor(parkingSpots.reduce((sum, spot) => sum + spot.price, 0) / parkingSpots.length)}
            </p>
          </motion.div>
        </div>

        {/* Parking Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Available Parking Spots
          </h2>
          <ParkingGrid
            spots={parkingSpots}
            onSelectSpot={handleSelectSpot}
            selectedSpotId={selectedSpotId}
          />
        </motion.div>

        {/* Selected Spot Info & Proceed Button */}
        {selectedSpotId && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-md p-6 sticky bottom-4"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Selected: Spot {parkingSpots.find((s) => s.id === selectedSpotId)?.spotNumber}
                </h3>
                <p className="text-gray-600">
                  Price: ${parkingSpots.find((s) => s.id === selectedSpotId)?.price} /hr
                </p>
              </div>
              <button
                onClick={handleProceedToBooking}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
              >
                Proceed to Booking
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DriverSearch;
