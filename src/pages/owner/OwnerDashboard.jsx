import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, MapPin, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import useAppStore from '../../store/useAppStore';

const OwnerDashboard = () => {
  const { ownerLocations } = useAppStore();

  const totalRevenue = ownerLocations.reduce((sum, loc) => sum + loc.revenue, 0);
  const totalSpots = ownerLocations.reduce((sum, loc) => sum + loc.totalSpots, 0);
  const totalOccupied = ownerLocations.reduce((sum, loc) => sum + loc.occupiedSpots, 0);
  const avgOccupancy = Math.round((totalOccupied / totalSpots) * 100);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Owner Dashboard</h1>
          <p className="text-gray-600">Manage your parking locations and earnings</p>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Revenue</p>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">${totalRevenue.toLocaleString()}</p>
            <p className="text-sm text-green-600 mt-1">↑ 12% from last month</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Total Locations</p>
              <MapPin className="h-5 w-5 text-primary-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{ownerLocations.length}</p>
            <p className="text-sm text-gray-500 mt-1">{totalSpots} parking spots</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Occupancy Rate</p>
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">{avgOccupancy}%</p>
            <p className="text-sm text-blue-600 mt-1">{totalOccupied} / {totalSpots} spots</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">Avg. Price</p>
              <BarChart3 className="h-5 w-5 text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-gray-900">
              ${Math.floor(ownerLocations.reduce((sum, loc) => sum + loc.avgPrice, 0) / ownerLocations.length)}
            </p>
            <p className="text-sm text-gray-500 mt-1">per hour</p>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link to="/owner/smart-pricing">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary-500 to-primary-700 text-white rounded-xl shadow-md p-6 cursor-pointer"
            >
              <TrendingUp className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Pricing</h3>
              <p className="text-primary-100">
                Optimize your pricing with AI-driven predictions
              </p>
            </motion.div>
          </Link>

          <Link to="/owner/analytics">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl shadow-md p-6 cursor-pointer"
            >
              <BarChart3 className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics</h3>
              <p className="text-blue-100">
                View detailed insights and trends
              </p>
            </motion.div>
          </Link>

          <Link to="/owner/policies">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl shadow-md p-6 cursor-pointer"
            >
              <svg className="h-10 w-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Policies</h3>
              <p className="text-purple-100">
                Review cancellation and refund policies
              </p>
            </motion.div>
          </Link>
        </div>

        {/* Parking Locations */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Parking Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ownerLocations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-500">{location.totalSpots} total spots</p>
                  </div>
                  <MapPin className="h-6 w-6 text-gray-400" />
                </div>

                {/* Occupancy Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Occupancy</span>
                    <span>{Math.round((location.occupiedSpots / location.totalSpots) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all"
                      style={{
                        width: `${(location.occupiedSpots / location.totalSpots) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {location.occupiedSpots} / {location.totalSpots} occupied
                  </p>
                </div>

                {/* Stats */}
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Revenue</span>
                    <span className="font-semibold text-green-600">
                      ${location.revenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Avg. Price</span>
                    <span className="font-semibold text-gray-900">${location.avgPrice}/hr</span>
                  </div>
                </div>

                <button className="mt-4 w-full bg-primary-50 text-primary-600 py-2 rounded-lg hover:bg-primary-100 transition font-semibold text-sm">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
