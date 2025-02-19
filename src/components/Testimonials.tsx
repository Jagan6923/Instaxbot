import  { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { Heart, MessageCircle } from "lucide-react";

const testimonials = [
  {
    username: "fashionista_store",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=600&fit=crop",
    caption:
      "Since using @instaxbot, our response time has improved by 80%! Customer satisfaction is at an all-time high. 🚀 #BusinessAutomation",
    likes: 1243,
    comments: 89,
  },
  {
    username: "tech_gadgets_hub",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=600&fit=crop",
    caption:
      "Managing hundreds of DMs was impossible before @instaxbot. Now we handle inquiries 24/7! 💯 #CustomerService",
    likes: 892,
    comments: 45,
  },
  {
    username: "beauty_essentials",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    image:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=600&fit=crop",
    caption:
      "Our sales increased by 45% after implementing @instaxbot! The automated responses are a game-changer. ✨ #BusinessGrowth",
    likes: 2156,
    comments: 134,
  },
];

export function Testimonials() {
  // Initialize state for each slide
  const [heartFilled, setHeartFilled] = useState(
    new Array(testimonials.length).fill(false)
  );

  const handleHeartClick = (index: number) => {
    // Update state for the specific slide
    setHeartFilled((prev) => {
      const newHeartFilled = [...prev];
      newHeartFilled[index] = !newHeartFilled[index];
      return newHeartFilled;
    });
  };

  // Duplicate testimonials to create infinite loop effect
  const infiniteTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="tes"
      className="py-24 bg-gradient-to-b from-purple-50 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how businesses are transforming their Instagram presence with
            Instaxbot
          </p>
        </motion.div>

        <div className="max-w-sm mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Phone frame */}
            <div className="absolute inset-0 bg-black rounded-[3rem] -z-10 shadow-xl" />

            <div className="relative mx-auto bg-white rounded-[2.5rem] overflow-hidden p-3">
              <Swiper
                effect="cards"
                grabCursor={true}
                modules={[Autoplay, EffectCards]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true} // Ensure loop is set to true
                className="w-full"
              >
                {infiniteTestimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <motion.div
                      className="bg-white rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Post header */}
                      <div className="flex items-center p-3">
                        <motion.img
                          src={testimonial.avatar}
                          alt={testimonial.username}
                          className="w-8 h-8 rounded-full object-cover"
                          whileHover={{ scale: 1.1 }}
                        />
                        <span className="ml-2 font-semibold">
                          {testimonial.username}
                        </span>
                      </div>

                      {/* Post image */}
                      <motion.img
                        src={testimonial.image}
                        alt="Post"
                        className="w-full aspect-square object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Post content */}
                      <div className="p-3">
                        <div className="flex items-center space-x-4 mb-2">
                          <motion.button
                            className="text-red-500"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() =>
                              handleHeartClick(index % testimonials.length)
                            }
                          >
                            <Heart
                              size={24}
                              className={
                                heartFilled[index % testimonials.length]
                                  ? "fill-red-500"
                                  : ""
                              }
                            />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <MessageCircle size={24} />
                          </motion.button>
                        </div>
                        <div className="font-semibold mb-1">
                          {testimonial.likes.toLocaleString()} likes
                        </div>
                        <p>
                          <span className="font-semibold">
                            {testimonial.username}
                          </span>{" "}
                          {testimonial.caption}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          View all {testimonial.comments} comments
                        </p>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;