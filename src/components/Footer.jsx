import { Link } from 'react-router-dom';
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-8 w-8 text-primary-400" />
              <span className="text-2xl font-bold">ParkBro</span>
            </div>
            <p className="text-gray-400">
              Smart parking solutions for modern cities. Find, book, and manage parking spots effortlessly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/driver/search" className="text-gray-400 hover:text-white transition">
                  Find Parking
                </Link>
              </li>
              <li>
                <Link to="/driver/events" className="text-gray-400 hover:text-white transition">
                  Event Parking
                </Link>
              </li>
              <li>
                <Link to="/owner/dashboard" className="text-gray-400 hover:text-white transition">
                  List Your Space
                </Link>
              </li>
              <li>
                <Link to="/owner/policies" className="text-gray-400 hover:text-white transition">
                  Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* For Drivers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Drivers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/driver/dashboard" className="text-gray-400 hover:text-white transition">
                  My Bookings
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>support@parkbro.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>123 Park St, City</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ParkBro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
