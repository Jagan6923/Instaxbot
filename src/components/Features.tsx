import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Bot, Inbox, Workflow, Bell, Users } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI-Powered Automated Replies",
    description:
      "Instantly respond to customer inquiries with smart, contextual responses.",
  },
  {
    icon: Inbox,
    title: "Seamless Message Management",
    description:
      "Organize, track, and manage all your conversations efficiently in one place.",
  },
  {
    icon: Bot,
    title: "Smart Workflow Automation",
    description:
      "Automate repetitive tasks and streamline your business operations.",
  },
  {
    icon: Bell,
    title: "Real-Time Notifications",
    description:
      "Never miss an important message with instant alerts and updates.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with role-based access and shared inboxes.",
  },
  {
    icon: Workflow,
    title: "Advanced Analytics",
    description: "Track performance and gain insights with detailed reporting.",
  },
];

export const Features: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.1, 0.3], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section
      id="feature"
      className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe')] bg-cover bg-center opacity-[0.015]"
        style={{
          scale: useTransform(scrollYProgress, [0.1, 0.4], [1.2, 1]),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div style={{ scale, opacity }} className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to automate and scale your Instagram business
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "tween",
                  stiffness: 100,
                }}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  className="relative"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;