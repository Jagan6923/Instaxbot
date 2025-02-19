import { motion, useScroll, useTransform } from "framer-motion";
import {
  MessageCircle,
  Heart,
  ShoppingBag,
  Send,
  Zap,
} from "lucide-react";

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const Hero= () => {
  const { scrollY, scrollYProgress } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <div className="min-h-screen pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ y: y1 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-2 items-center mb-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="text-primary" size={24} />
              </motion.div>
              <span className="text-gray-600 font-medium">
                Loved by 10,000+ businesses
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl font-bold leading-tight mb-6"
              style={{
                y: useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]),
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Boost Your Instagram Sales with{" "}
              </motion.span>
              <motion.span
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                Smart Automation
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8"
              style={{
                y: useTransform(scrollYProgress, [0, 0.5], ["0%", "150%"]),
              }}
            >
              Simplify Instagram customer interactions with automated messaging
              and seamless order management. Save time, boost sales, and delight
              customers.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              style={{
                y: useTransform(scrollYProgress, [0, 0.5], ["0%", "200%"]),
              }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(225, 48, 108, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg transition-all duration-300 text-lg font-semibold hover:shadow-lg hover:shadow-primary/25"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#E1306C",
                  color: "white",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg transition-all duration-300 text-lg font-semibold"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6"
              style={{
                y: useTransform(scrollYProgress, [0, 0.5], ["0%", "250%"]),
              }}
            >
              {[
                { icon: MessageCircle, text: "Smart Replies" },
                { icon: ShoppingBag, text: "Order Management" },
                { icon: Send, text: "Instant DMs" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.div
                    className="p-2 bg-primary/10 rounded-lg transition-all duration-300 group-hover:bg-primary/20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="text-primary transition-all duration-300 group-hover:scale-110" />
                  </motion.div>
                  <span className="text-gray-600 transition-all duration-300 group-hover:text-gray-900">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ scale, opacity }}
            className="relative"
          >
            <motion.div
              animate={floatingAnimation}
              className="relative w-full aspect-square"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80"
                alt="Instagram Business Management"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                y: useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]),
              }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Zap className="text-white" size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-600">Average Response Time</p>
                  <p className="text-xl font-bold text-gray-900">
                    Under 1 minute
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              style={{
                y: useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]),
              }}
              className="absolute -top-8 -right-8 bg-white p-6 rounded-xl shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Heart className="text-primary" size={20} />
                </motion.div>
                <div>
                  <p className="text-sm text-gray-600">Customer Satisfaction</p>
                  <p className="text-xl font-bold text-gray-900">98%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;