import { motion } from "framer-motion";
import { Zap, Shield, Clock, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Users",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Secure",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-purple-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Why Choose Instaxbot?
          </h2>
          <p className="text-xl text-gray-600">
            We're on a mission to revolutionize how businesses handle their
            Instagram communications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto"
          >
            <h3 className="text-2xl font-bold mb-4 ">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Born from the challenges faced by Instagram businesses, Instaxbot
              was created to simplify customer interactions and automate
              repetitive tasks. We understand the struggles of managing
              countless DMs while trying to grow your business.
            </p>
            <p className="text-gray-600">
              Today, we're proud to help thousands of businesses save time,
              increase sales, and provide better customer service through our
              intelligent automation platform.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center max-w-xs mx-auto"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-pink-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
