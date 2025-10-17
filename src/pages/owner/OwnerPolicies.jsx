import { motion } from 'framer-motion';
import { FileText, AlertCircle, Clock, DollarSign, XCircle } from 'lucide-react';

const OwnerPolicies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Policies & Terms</h1>
          <p className="text-gray-600">
            Review our cancellation, penalty, and refund policies
          </p>
        </motion.div>

        {/* Cancellation Policy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-md p-8 mb-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <XCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Cancellation Policy</h2>
          </div>

          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Free Cancellation</h3>
              <p className="text-gray-600">
                Cancel your booking up to <strong>2 hours before</strong> your reserved time
                for a full refund with no penalty.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Late Cancellation</h3>
              <p className="text-gray-600">
                Cancellations made <strong>less than 2 hours</strong> before your reservation
                will incur a <strong>$5 penalty fee</strong>.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">No-Show Policy</h3>
              <p className="text-gray-600">
                Failure to show up for your reservation without cancellation will result in{' '}
                <strong>no refund</strong> and a <strong>$10 penalty</strong>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Penalty Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-md p-8 mb-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Penalty Policy</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Penalty Fees</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Violation
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                        Penalty
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-gray-600">
                        Late cancellation (&lt;2 hours)
                      </td>
                      <td className="px-4 py-3 font-semibold text-red-600">$5</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-600">No-show</td>
                      <td className="px-4 py-3 font-semibold text-red-600">$10</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-600">Overstay (per hour)</td>
                      <td className="px-4 py-3 font-semibold text-red-600">$15</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-gray-600">Parking in wrong spot</td>
                      <td className="px-4 py-3 font-semibold text-red-600">$20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-900">
                <strong>Note:</strong> Penalties are automatically deducted from your refund
                amount or charged to your payment method.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Refund Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-8 mb-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">Refund Policy</h2>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Refund Processing Time</h3>
              <p className="text-gray-600 mb-4">
                Approved refunds are processed within <strong>3-5 business days</strong> and
                will be credited back to your original payment method.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <h4 className="font-semibold text-gray-900">Full Refund</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Cancellation 2+ hours before reservation time
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <h4 className="font-semibold text-gray-900">Partial Refund</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Cancellation &lt;2 hours: Refund minus $5 penalty
                </p>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-900">
                <strong>Tip:</strong> Set up cancellation alerts in your dashboard to avoid
                late cancellation fees.
              </p>
            </div>
          </div>
        </motion.div>

        {/* General Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-md p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FileText className="h-8 w-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900">General Terms</h2>
          </div>

          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Booking Duration</h3>
              <p>
                Your parking reservation is valid for the selected duration only. Overstaying
                will result in additional charges at a rate of $15 per hour.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Payment</h3>
              <p>
                All payments must be made at the time of booking. We accept major credit
                cards, debit cards, and digital payment methods.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Vehicle Restrictions</h3>
              <p>
                Standard parking spots are designed for regular passenger vehicles. Oversized
                vehicles, RVs, or commercial trucks may require special parking arrangements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Liability</h3>
              <p>
                While we strive to provide secure parking facilities, ParkBro is not
                responsible for theft, damage, or loss of vehicles or belongings. Please
                ensure your vehicle is locked and valuables are secured.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Modifications</h3>
              <p>
                You may modify your reservation up to 2 hours before the start time without
                penalty. Modifications made within 2 hours may incur fees.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-3">Have Questions?</h3>
          <p className="text-primary-100 mb-6">
            Our support team is here to help with any policy-related questions.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition">
            Contact Support
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default OwnerPolicies;
