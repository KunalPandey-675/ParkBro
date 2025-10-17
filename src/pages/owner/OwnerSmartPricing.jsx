import { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

const OwnerSmartPricing = () => {
  const [selectedLocation, setSelectedLocation] = useState('downtown');

  // Dummy ML-driven pricing data
  const pricingData = [
    { time: '6 AM', predictedPrice: 8, currentPrice: 10, demand: 30 },
    { time: '8 AM', predictedPrice: 15, currentPrice: 12, demand: 75 },
    { time: '10 AM', predictedPrice: 12, currentPrice: 12, demand: 60 },
    { time: '12 PM', predictedPrice: 14, currentPrice: 12, demand: 70 },
    { time: '2 PM', predictedPrice: 11, currentPrice: 12, demand: 55 },
    { time: '4 PM', predictedPrice: 13, currentPrice: 12, demand: 65 },
    { time: '6 PM', predictedPrice: 16, currentPrice: 12, demand: 85 },
    { time: '8 PM', predictedPrice: 10, currentPrice: 10, demand: 45 },
  ];

  const recommendations = [
    {
      id: 1,
      title: 'Increase Morning Price',
      description: 'Peak demand at 8 AM suggests increasing price to $15/hr',
      impact: '+$450/week',
      status: 'recommended',
    },
    {
      id: 2,
      title: 'Evening Rush Pricing',
      description: 'Apply dynamic pricing between 5-7 PM for maximum revenue',
      impact: '+$380/week',
      status: 'recommended',
    },
    {
      id: 3,
      title: 'Weekend Discount',
      description: 'Lower prices on weekends to increase occupancy',
      impact: '+15% occupancy',
      status: 'optional',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Smart Pricing</h1>
          <p className="text-gray-600">
            AI-powered pricing optimization for maximum revenue
          </p>
        </motion.div>

        {/* Location Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8"
        >
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Select Location
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full sm:w-2/3 md:w-1/3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="downtown">Downtown Plaza</option>
            <option value="airport">Airport Parking</option>
            <option value="mall">Mall Parking</option>
          </select>
        </motion.div>

        {/* Pricing Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Predicted vs Current Pricing
          </h2>
          <div className="overflow-x-auto">
            <ResponsiveContainer width="100%" height={300} minWidth={300}>
              <LineChart data={pricingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="time" 
                  fontSize={12}
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} 
                  fontSize={12}
                  tick={{ fontSize: 10 }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="predictedPrice"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="AI Predicted Price"
                />
                <Line
                  type="monotone"
                  dataKey="currentPrice"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Current Price"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 mt-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-1 bg-blue-500"></div>
              <span className="text-xs sm:text-sm text-gray-600">AI Predicted Price</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-1 bg-green-500" style={{ borderTop: '2px dashed' }}></div>
              <span className="text-xs sm:text-sm text-gray-600">Current Price</span>
            </div>
          </div>
        </motion.div>

        {/* Demand Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Demand Forecast</h2>
          <div className="overflow-x-auto">
            <ResponsiveContainer width="100%" height={300} minWidth={300}>
              <LineChart data={pricingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="time" 
                  fontSize={12}
                  tick={{ fontSize: 10 }}
                />
                <YAxis 
                  label={{ value: 'Demand (%)', angle: -90, position: 'insideLeft' }} 
                  fontSize={12}
                  tick={{ fontSize: 10 }}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="demand"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  fill="#8b5cf6"
                  name="Demand"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Recommendations */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Pricing Recommendations
          </h2>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-lg transition"
              >
                <div className="flex flex-col">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                    <div
                      className={`p-2 rounded-lg flex-shrink-0 ${
                        rec.status === 'recommended'
                          ? 'bg-blue-100'
                          : 'bg-gray-100'
                      }`}
                    >
                      {rec.status === 'recommended' ? (
                        <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                        {rec.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-2">{rec.description}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                        <span
                          className={`text-xs sm:text-sm font-medium ${
                            rec.status === 'recommended'
                              ? 'text-blue-600'
                              : 'text-gray-600'
                          }`}
                        >
                          {rec.status === 'recommended'
                            ? '⚡ Recommended'
                            : '💡 Optional'}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-green-600">
                          {rec.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-gray-100">
                    <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold text-sm">
                      Apply
                    </button>
                    <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm">
                      Dismiss
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Manual Price Adjustment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-white rounded-xl shadow-md p-4 sm:p-6"
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Manual Price Adjustment
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Base Price ($/hour)
              </label>
              <input
                type="number"
                defaultValue={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Peak Hours Multiplier
              </label>
              <input
                type="number"
                step="0.1"
                defaultValue={1.5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          <button className="mt-4 sm:mt-6 w-full sm:w-auto bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold">
            Update Pricing
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default OwnerSmartPricing;
