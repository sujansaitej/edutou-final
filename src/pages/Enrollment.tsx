import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Clock, Calendar, Users } from 'lucide-react';

const Enrollment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    course: 'Full Stack Foundation',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // PhonePe payment integration logic
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Pricing Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-8 text-white text-center">
        <div className="animate-pulse inline-block bg-yellow-400 text-black font-bold px-4 py-1 rounded-full mb-4">
          Limited Time Offer
        </div>
        <h1 className="text-4xl font-bold mb-4">Full Stack Foundation Workshop</h1>
        <div className="text-6xl font-bold mb-4">
          <span className="text-2xl line-through text-gray-300">₹999</span>
          <span className="ml-4">₹100</span>
        </div>
        <div className="flex justify-center gap-8 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span>7 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span>Live Sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            <span>Limited Seats</span>
          </div>
        </div>
        <div className="text-lg">
          <Zap className="inline h-5 w-5 mr-2" />
          Grab your seat now and kickstart your tech career!
        </div>
      </div>

      {/* Enrollment Form */}
      <div className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Register Now</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">College/Institution</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              value={formData.college}
              onChange={(e) => setFormData({...formData, college: e.target.value})}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
          >
            <img src="/phonepe-logo.png" alt="PhonePe" className="h-6 w-6" />
            Pay ₹100 with PhonePe
          </button>
        </form>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">Industry-Ready Skills</h3>
          <p>Learn practical skills that employers are actively seeking</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">Live Mentorship</h3>
          <p>Get guidance from experienced developers in real-time</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-lg mb-2">Hands-on Projects</h3>
          <p>Build real projects to showcase in your portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
