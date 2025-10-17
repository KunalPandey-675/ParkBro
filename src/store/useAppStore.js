import { create } from 'zustand';

// Dummy parking spots data
const generateParkingSpots = () => {
  const spots = [];
  for (let i = 1; i <= 50; i++) {
    const random = Math.random();
    let status = 'vacant';
    if (random < 0.3) status = 'occupied';
    else if (random < 0.5) status = 'suggested';
    
    spots.push({
      id: i,
      spotNumber: `A${i}`,
      status,
      price: Math.floor(Math.random() * 15) + 5,
      location: 'Downtown Parking Zone',
    });
  }
  return spots;
};

// Dummy events data
const dummyEvents = [
  {
    id: 1,
    name: 'Summer Music Festival',
    date: '2025-11-15',
    location: 'Central Park Arena',
    availableSpots: 120,
    price: 25
  },
  {
    id: 2,
    name: 'Tech Conference 2025',
    date: '2025-11-20',
    location: 'Convention Center',
    availableSpots: 80,
    price: 15
  },
  {
    id: 3,
    name: 'Football Championship',
    date: '2025-12-01',
    location: 'City Stadium',
    availableSpots: 200,
    price: 30
  }
];

const useAppStore = create((set) => ({
  // User type: 'driver' or 'owner'
  userType: 'driver',
  
  // Parking spots data
  parkingSpots: generateParkingSpots(),
  
  // User bookings
  bookings: [],
  
  // Events for prebooking
  events: dummyEvents,
  
  // Selected spot for booking
  selectedSpot: null,
  
  // Owner's parking locations
  ownerLocations: [
    {
      id: 1,
      name: 'Downtown Plaza',
      totalSpots: 100,
      occupiedSpots: 75,
      revenue: 12500,
      avgPrice: 12
    },
    {
      id: 2,
      name: 'Airport Parking',
      totalSpots: 200,
      occupiedSpots: 150,
      revenue: 25000,
      avgPrice: 15
    },
    {
      id: 3,
      name: 'Mall Parking',
      totalSpots: 150,
      occupiedSpots: 100,
      revenue: 8000,
      avgPrice: 8
    }
  ],
  
  // Actions
  setUserType: (type) => set({ userType: type }),
  
  setParkingSpots: (spots) => set({ parkingSpots: spots }),
  
  setSelectedSpot: (spot) => set({ selectedSpot: spot }),
  
  addBooking: (booking) =>
    set((state) => ({ 
      bookings: [...state.bookings, { 
        ...booking, 
        id: Date.now(), 
        status: 'active',
        bookingDate: new Date().toISOString()
      }] 
    })),
  
  cancelBooking: (bookingId) =>
    set((state) => ({
      bookings: state.bookings.map((booking) =>
        booking.id === bookingId
          ? { ...booking, status: 'cancelled', penalty: 5 }
          : booking
      ),
    })),
  
  refreshParkingSpots: () => set({ parkingSpots: generateParkingSpots() }),
}));

export default useAppStore;
