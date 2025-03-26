import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Brain, Rocket, Code, Zap, Users, Award, ArrowRight } from 'lucide-react';


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Redefining Education with AI-Driven Learning
              </h1>
              <p className="text-xl text-indigo-200 mb-8">
                "The ones who learn, adapt, and innovate… change the world." 🚀
                No outdated curriculums. No meaningless certifications.
                Just fluid, evolving skills that make you unstoppable.
              </p>
              <div className="mt-8">
                <Link
                  to="/enroll"
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Students learning with AI" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Course</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accelerate your career with our most popular program
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full font-semibold text-sm mb-4">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Full Stack Foundation: 7-Day AI-Powered Web Development Workshop
                </h3>
                <p className="text-gray-700 mb-6">
                  Master the essentials of modern web development in just one week with our AI-enhanced learning approach. 
                  Build real-world projects and gain the skills employers are looking for.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <Rocket className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>Accelerated learning with AI assistance</span>
                  </li>
                  <li className="flex items-center">
                    <Code className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>Hands-on project building</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-indigo-600 mr-2" />
                    <span>Industry mentor guidance</span>
                  </li>
                </ul>
                <Link 
                  to="/courses/full-stack-foundation" 
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Web Development Workshop" 
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EDUTOU?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing education with cutting-edge technology and industry-aligned mentorship
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Learning</h3>
              <p className="text-gray-600">
                Our adaptive AI system personalizes your learning journey, focusing on areas where you need the most help and accelerating through concepts you grasp quickly.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-World Execution</h3>
              <p className="text-gray-600">
                Build actual projects that solve real problems. Our hands-on approach ensures you gain practical experience that translates directly to workplace skills.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry-Aligned Mentorship</h3>
              <p className="text-gray-600">
                Learn directly from professionals who are active in the industry. Our mentors provide guidance based on current market demands and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have accelerated their careers with EDUTOU's innovative learning approach.
          </p>
          <Link 
            to="/enroll" 
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-900 hover:bg-indigo-100 rounded-lg font-medium transition-colors"
          >
            Enroll Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have accelerated their careers with EDUTOU's innovative learning approach.
          </p>
          <Link 
            to="/enroll" 
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Enroll in Workshop
          </Link>
        </div>
      </section>
    </div>  );
};

export default Home;