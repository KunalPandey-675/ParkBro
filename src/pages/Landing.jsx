import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, MapPin, CreditCard, CheckCircle, Users, Building } from 'lucide-react';
import useAppStore from '../store/useAppStore';

const Landing = () => {
  const setUserType = useAppStore((state) => state.setUserType);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const steps = [
    {
      icon: Users,
      title: 'Sign Up',
      description: 'Create your account in seconds',
    },
    {
      icon: MapPin,
      title: 'Select Slot',
      description: 'Find the perfect parking spot',
    },
    {
      icon: CreditCard,
      title: 'Pay Securely',
      description: 'Complete your booking with ease',
    },
    {
      icon: CheckCircle,
      title: 'Confirmation',
      description: 'Get instant booking confirmation',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-20 overflow-hidden"
      >
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Smart Parking <br />
                <span className="text-primary-200">Simplified.</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Find, book, and manage parking spots effortlessly. Join thousands of drivers and
                space owners making parking stress-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/driver/search"
                  onClick={() => setUserType('driver')}
                  className="group bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition flex items-center justify-center space-x-2"
                >
                  <Car className="h-6 w-6" />
                  <span>For Drivers</span>
                </Link>
                <Link
                  to="/owner/dashboard"
                  onClick={() => setUserType('owner')}
                  className="group bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-900 transition flex items-center justify-center space-x-2 border-2 border-primary-600"
                >
                  <Building className="h-6 w-6" />
                  <span>For Space Owners</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hidden md:block"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <Car className="h-48 w-48 mx-auto text-primary-200" />
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center space-x-3 text-primary-100">
                      <CheckCircle className="h-5 w-5" />
                      <span>Real-time Availability</span>
                    </div>
                    <div className="flex items-center space-x-3 text-primary-100">
                      <CheckCircle className="h-5 w-5" />
                      <span>Predictive Pricing</span>
                    </div>
                    <div className="flex items-center space-x-3 text-primary-100">
                      <CheckCircle className="h-5 w-5" />
                      <span>Instant Booking</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Get started in just 4 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                  <div className="absolute -top-3 -left-3 bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-1 bg-primary-300"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ParkBro?</h2>
            <p className="text-xl text-gray-600">
              The smartest way to manage your parking needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MapPin className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Smart Search</h3>
              <p className="text-gray-600">
                Find available parking spots near you with real-time updates and predictive
                availability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <CreditCard className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Dynamic Pricing</h3>
              <p className="text-gray-600">
                AI-powered pricing that adapts to demand, ensuring fair rates for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="h-10 w-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Instant Booking</h3>
              <p className="text-gray-600">
                Reserve your spot in seconds and get instant confirmation on your device.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Join ParkBro today and experience hassle-free parking management.
            </p>
            <Link
              to="/driver/search"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition"
            >
              Find Parking Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
