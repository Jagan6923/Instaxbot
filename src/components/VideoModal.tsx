// VideoModal.tsx
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import video1 from "./video4.mp4";
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
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
            className="absolute top-2 right-2 text-white hover:text-gray-900"
          >
            <X size={24} />
          </button>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={video1}
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[500px] rounded-lg"
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoModal;
