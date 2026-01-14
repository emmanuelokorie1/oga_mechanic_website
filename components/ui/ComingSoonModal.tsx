"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Construction } from "lucide-react";
import Image from "next/image";
import { images } from "@/constant";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 text-center overflow-hidden"
          >
            {/* Close Button */}
             <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
             >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>

            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                 <Construction className="w-8 h-8 text-red-500" />
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Coming Soon!
            </h2>
            
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              We are working hard to bring you the Oga Mechanic mobile app. Stay tuned for the launch on App Store and Google Play!
            </p>

            <button
               onClick={onClose}
               className="w-full bg-[#D10000] cursor-pointer text-white font-bold py-3 rounded-xl hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl outline-none"
            >
              Got it
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;
