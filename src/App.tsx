import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import CourseDetail from './pages/CourseDetail';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Enrollment from './pages/Enrollment';
import PaymentSuccess from './pages/PaymentSuccess';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/full-stack-foundation" element={<CourseDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/enroll" element={<Enrollment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;