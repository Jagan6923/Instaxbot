import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Check,
  MessageCircle,
  ShoppingBag,
  Zap,
  Bell,
  Users,
  Shield,
} from "lucide-react";

const features = [
  { icon: MessageCircle, text: "Automated Replies" },
  { icon: ShoppingBag, text: "Order Management" },
  { icon: Users, text: "CRM Inbox" },
  { icon: Zap, text: "Workflow Automation" },
  { icon: Bell, text: "Real-Time Notifications" },
  { icon: Shield, text: "Premium Support" },
];

export function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-purple-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to grow your Instagram business
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-[linear-gradient(115deg,_#f9ce34,_#ee2a7b,_#6228d7)] p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Professional Plan</h3>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-4xl font-bold">₹1,999</span>
              <span className="text-lg opacity-80">/month</span>
            </div>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="text-lg line-through opacity-60">₹2,500</span>
              <span className="bg-white/20 text-white text-sm px-2 py-1 rounded-full">
                Save 20%
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 bg-[linear-gradient(90deg, #E8C45D 0%, #E44D78 49%, #8561C5 100%);
] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get Started Now
            </motion.button>

            <p className="text-center mt-4 text-sm text-gray-500">
              30-day money-back guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
