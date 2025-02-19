import React, { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface NavbarProps {
  onOpenAuth: (type: 'login' | 'signup') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Instagram className="w-8 h-8 text-pink-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Instaxbot
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onOpenAuth('login')}
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
      
      <motion.div
        className="h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500"
        style={{ scaleX, transformOrigin: "0%" }}
      />
    </nav>
  );
};

export default Navbar;