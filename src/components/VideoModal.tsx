import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import video from "./video4.mp4";
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full"
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            <X size={24} />
          </button>
          <div className="w-full h-[500px]">
            {" "}
            {/* Set a fixed height */}
            <iframe
              src={video}
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoModal;
