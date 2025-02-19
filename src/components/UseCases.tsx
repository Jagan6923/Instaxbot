import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Camera, Palette, Coffee } from "lucide-react";

const useCases = [
  {
    icon: ShoppingBag,
    title: "E-commerce Stores",
    description:
      "Automate order processing and customer support for your online store.",
  },
  {
    icon: Camera,
    title: "Photography Studios",
    description:
      "Manage booking inquiries and client communications efficiently.",
  },
  {
    icon: Palette,
    title: "Art Galleries",
    description:
      "Handle artwork inquiries and sales conversations automatically.",
  },
  {
    icon: Coffee,
    title: "Cafes & Restaurants",
    description: "Process takeaway orders and reservations seamlessly.",
  },
];

export const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Perfect for Every Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how different businesses are growing with Instaxbot
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
