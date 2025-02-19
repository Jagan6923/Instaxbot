import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                placeholder="Your name"
              />
            </div>

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
                Message
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;