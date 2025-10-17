import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';

const OwnerAnalytics = () => {
  // Dummy analytics data
  const footfallData = [
    { day: 'Mon', count: 320 },
    { day: 'Tue', count: 380 },
    { day: 'Wed', count: 420 },
    { day: 'Thu', count: 390 },
    { day: 'Fri', count: 480 },
    { day: 'Sat', count: 520 },
    { day: 'Sun', count: 450 },
  ];

  const occupancyTrends = [
    { time: '6 AM', rate: 25 },
    { time: '9 AM', rate: 78 },
    { time: '12 PM', rate: 85 },
    { time: '3 PM', rate: 70 },
    { time: '6 PM', rate: 90 },
    { time: '9 PM', rate: 45 },
  ];

  const revenueProjection = [
    { month: 'Jan', revenue: 12500 },
    { month: 'Feb', revenue: 13200 },
    { month: 'Mar', revenue: 14100 },
    { month: 'Apr', revenue: 15300 },
    { month: 'May', revenue: 16800 },
    { month: 'Jun', revenue: 18200 },
  ];

  const usageDistribution = [
    { name: 'Short Term (<2h)', value: 35, color: '#3b82f6' },
    { name: 'Medium (2-4h)', value: 45, color: '#10b981' },
    { name: 'Long Term (4h+)', value: 20, color: '#8b5cf6' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
          <p className="text-gray-600">
            Comprehensive insights into your parking business
          </p>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <Users className="h-8 w-8 text-blue-600" />
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-sm text-gray-600">Avg. Daily Footfall</p>
            <p className="text-3xl font-bold text-gray-900">423</p>
            <p className="text-sm text-green-600 mt-1">↑ 8.2% vs last week</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="h-8 w-8 text-green-600" />
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-sm text-gray-600">Monthly Revenue</p>
            <p className="text-3xl font-bold text-gray-900">$18,200</p>
            <p className="text-sm text-green-600 mt-1">↑ 12.5% growth</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-sm text-gray-600">Avg. Occupancy</p>
            <p className="text-3xl font-bold text-gray-900">76%</p>
            <p className="text-sm text-green-600 mt-1">↑ 5.3% improvement</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <Calendar className="h-8 w-8 text-orange-600" />
              <span className="text-xs text-gray-500">This Month</span>
            </div>
            <p className="text-sm text-gray-600">Total Bookings</p>
            <p className="text-3xl font-bold text-gray-900">1,247</p>
            <p className="text-sm text-blue-600 mt-1">42 bookings/day</p>
          </motion.div>
        </div>

        {/* Estimated Footfall */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Weekly Footfall Estimate
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={footfallData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis label={{ value: 'Visitors', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Occupancy Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-md p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Daily Occupancy Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={occupancyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis label={{ value: 'Occupancy (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Revenue Projection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Revenue Projections
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueProjection}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ fill: '#8b5cf6', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-900">
                <strong>Projected Growth:</strong> Your revenue is trending upward with an
                expected 15% increase next month.
              </p>
            </div>
          </motion.div>

          {/* Usage Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Parking Duration Distribution
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={usageDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {usageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {usageDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{item.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 to-primary-800 text-white rounded-xl shadow-md p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Key Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="bg-white/20 rounded-lg p-4 mb-3">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Peak Hours</h3>
              <p className="text-primary-100 text-sm">
                Your busiest time is 6-8 PM with 90% occupancy. Consider dynamic pricing.
              </p>
            </div>
            <div>
              <div className="bg-white/20 rounded-lg p-4 mb-3">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Customer Behavior</h3>
              <p className="text-primary-100 text-sm">
                Most customers (45%) park for 2-4 hours. Optimize pricing for this segment.
              </p>
            </div>
            <div>
              <div className="bg-white/20 rounded-lg p-4 mb-3">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Revenue Opportunity</h3>
              <p className="text-primary-100 text-sm">
                Weekend occupancy is lower. Consider promotions to boost weekend revenue.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OwnerAnalytics;
