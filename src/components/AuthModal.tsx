import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface AuthModalProps {
  type: 'login' | 'signup';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ type, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl p-8 w-full max-w-md relative"
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
          
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {type === 'login' ? 'Welcome Back!' : 'Create Account'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            
            {type === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            )}
            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              {type === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;