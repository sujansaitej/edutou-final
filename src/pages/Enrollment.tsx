import React, { useState } from "react";
import { Clock, Calendar, Users, CheckCircle, BookOpen, Trophy, Star } from "lucide-react";

const Enrollment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    course: "Full Stack Foundation",
    referralCode: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const benefits = [
    { icon: <BookOpen className="h-6 w-6" />, text: "Live Classes For all 7 days" },
    { icon: <Trophy className="h-6 w-6" />, text: "Certificate of Completion with online verification" },
    { icon: <Star className="h-6 w-6" />, text: "1 Year of Community Support" },
    { icon: <CheckCircle className="h-6 w-6" />, text: "Limited slots available, book now and secure your spots" },
  ];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.location.href = "https://forms.gle/9qquW2zCkJadoTRD9";
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Course Details */}
        <div>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
            <div className="animate-pulse inline-block bg-yellow-400 text-black font-bold px-4 py-1 rounded-full mb-4">
              🎯 Limited Seats Available
            </div>
            <h1 className="text-4xl font-bold mb-4">Full Stack Foundation Workshop</h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Clock className="h-5 w-5" />
                <span>7 Days Intensive</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Calendar className="h-5 w-5" />
                <span>Live Sessions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
                <Users className="h-5 w-5" />
                <span>Limited Seats</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-6xl font-bold flex items-baseline">
                ₹100 <span className="text-lg ml-2">for complete access</span>
              </div>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg">
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Enrollment Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Secure Your Seat Now</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="Your WhatsApp number"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">College/Institution *</label>
              <input
                type="text"
                required
                placeholder="Your college name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              />
            </div>

            <div>
          
              
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? "Processing..." : "Enroll Now & Next Step"}
            </button>

            {message && <p className="text-center text-sm text-gray-600 mt-2">{message}</p>}

            <p className="text-center text-sm text-gray-600">
              By enrolling, you agree to our Terms of Service and Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
