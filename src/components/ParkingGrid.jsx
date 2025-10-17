import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// Parking grid component showing available spots
const ParkingGrid = ({ spots, onSelectSpot, selectedSpotId }) => {
  const getSpotColor = (status) => {
    switch (status) {
      case 'occupied':
        return 'bg-[#FF0000]';
      case 'suggested':
        return 'bg-yellow-500';
      case 'vacant':
        return 'bg-green-500';
      default:
        return 'bg-gray-300';
    }
  };

  const getSpotBorderColor = (status) => {
    switch (status) {
      case 'occupied':
        return 'border-red-800';
      case 'suggested':
        return 'border-yellow-600';
      case 'vacant':
        return 'border-green-600';
      default:
        return 'border-gray-400';
    }
  };

  return (
    <div>
      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#FF0000] rounded"></div>
          <span className="text-sm text-gray-700">Occupied</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span className="text-sm text-gray-700">Suggested</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-700">Vacant</span>
        </div>
      </div>

      {/* Parking Grid */}
      <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-3">
        {spots.map((spot) => (
          <motion.button
            key={spot.id}
            whileHover={spot.status !== 'occupied' ? { scale: 1.1 } : {}}
            whileTap={spot.status !== 'occupied' ? { scale: 0.95 } : {}}
            onClick={() => spot.status !== 'occupied' && onSelectSpot(spot)}
            disabled={spot.status === 'occupied'}
            className={`
              relative aspect-square rounded-lg border-2 
              ${getSpotColor(spot.status)} 
              ${getSpotBorderColor(spot.status)}
              ${spot.status === 'occupied' ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:shadow-lg'}
              ${selectedSpotId === spot.id ? 'ring-4 ring-primary-500' : ''}
              transition-all duration-200
            `}
          >
            <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
              {spot.spotNumber}
            </span>
            {selectedSpotId === spot.id && (
              <div className="absolute -top-1 -right-1 bg-primary-600 rounded-full p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Entry/Exit indicators */}
      <div className="flex justify-between mt-6 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Entry Point</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span>Exit Point</span>
        </div>
      </div>
    </div>
  );
};

export default ParkingGrid;
