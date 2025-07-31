import React from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Heart, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="w-full border-b border-gray-200 py-3 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-red-700 ml-10">
          Exclusive
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-red-700 transition ${
                isActive ? " text-red-700" : "text-gray-700 "
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-red-700 transition ${
                  isActive ? " text-red-700" : "text-gray-700 "
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-red-700 transition ${
                isActive ? " text-red-700" : "text-gray-700 "
              }`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:text-red-700 transition ${
               isActive ? " text-red-700" : "text-gray-700 "
              }`
            }
          >
            Log in
          </NavLink>
        </nav>

        {/* Right Side: Search + Icons */}
        <div className="flex items-center gap-x-4">
          {/* Search Bar */}
          <div className="relative w-52">
            <input
              type="text"
              placeholder="What are you looking for"
              className="w-full px-4 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent shadow-sm transition"
            />
            <span className="absolute right-3 top-2 text-gray-500">
              <Search size={18} />
            </span>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 text-gray-600 mr-10">
            <Heart className="cursor-pointer hover:text-red-700" />
            <ShoppingCart className="cursor-pointer hover:text-red-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
