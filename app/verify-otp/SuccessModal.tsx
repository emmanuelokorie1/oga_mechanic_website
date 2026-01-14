"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button"; // Assuming we have a Button component, ensuring imports work. If not will use standard button.
// Actually, let's just use standard Tailwind classes to be safe and consistent with the page style, or verify if Button exists. 
// The user previously used a standard button with Tailwind classes in page.tsx. I will stick to that to ensure it matches the premium red login button style.

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-600" />

            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                 <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Welcome to Oga Mechanic!
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Thanks for registering on Oga Mechanic. <br/>
              The app is coming soon. <br/>
              We'll keep in touch with you.
            </p>

            <button
               onClick={onClose}
               className="w-full bg-[#D10000] cursor-pointer text-white font-bold py-3.5 rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Go to Home
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SuccessModal;
