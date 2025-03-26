import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, Video } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, isOpen]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[80%] md:w-[70%] z-50 px-4 py-2 rounded-full transition-all duration-500 shadow-lg border border-white/20 backdrop-blur-lg ${
      visible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
    } ${prevScrollPos > 50 ? 'bg-white/40 text-indigo-900 scale-95' : 'bg-white/20 text-white scale-100'}`}>
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Brain className="h-6 w-6 text-indigo-600" />
          <span className="font-bold text-lg ml-2">EDUTOU</span>
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          {menuItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className="px-3 py-1.5 text-sm font-medium rounded-lg hover:bg-white/30 transition-all"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/enroll"
            className="px-4 py-1.5 font-medium rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-[0_0_15px_rgba(79,70,229,0.5)]"
          >
            Enroll
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 p-2 rounded-xl bg-black/50 backdrop-blur-md">
          {menuItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-3 py-2 text-white hover:bg-white/20 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/enroll"
            className="block mt-2 px-3 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-center"
            onClick={() => setIsOpen(false)}
          >
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export { Navbar };