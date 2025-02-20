import { motion } from "framer-motion";
import {
  MessageSquare,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Heart,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="container mx-auto px-4 mx-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-8 h-8 text-pink-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Instaxbot
              </span>
            </div>
            <p className="text-gray-600">
              Automating Instagram business communications with AI-powered
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Features", id: "features" },
                { name: "Pricing", id: "pricing" },
                { name: "Use Cases", id: "use-cases" },
                { name: "About", id: "about" },
              ].map((link) => (
                <motion.li
                  key={link.name}
                  className="text-gray-600 hover:text-pink-500 cursor-pointer"
                >
                  <a href={`#${link.id}`}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <motion.li
                    key={link}
                    className="text-gray-600 hover:text-pink-500 cursor-pointer"
                  >
                    {link}
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="https://www.instagram.com/"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-10 h-10 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-full flex items-center justify-center text-pink-500 hover:text-purple-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t text-center text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-pink-500" /> by Instaxbot
            Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
