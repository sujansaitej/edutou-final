import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Lightbulb, Brain } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-indigo-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="h-8 w-8 text-indigo-300 mr-2" />
              <span className="font-bold text-xl tracking-tight">EDUTOU</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 transition-colors">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 transition-colors">
              About
            </Link>
            <Link to="/courses" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 transition-colors">
              Courses
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-800 transition-colors">
              Contact
            </Link>
            <Link 
              to="/enroll" 
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-200 hover:text-white hover:bg-indigo-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-indigo-800">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/courses"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 hover:bg-indigo-700 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;