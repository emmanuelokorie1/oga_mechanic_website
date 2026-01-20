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
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            className="relative w-full max-w-sm bg-white rounded-[2rem] shadow-2xl p-8 text-center overflow-hidden"
          >
            {/* Success Icon Animation */}
            <div className="mb-6 relative flex justify-center">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center relative">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                    </motion.div>
                    
                    {/* Ring animation */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.5, scale: 1.2 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                        className="absolute inset-0 rounded-full border-2 border-green-200"
                    />
                </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Registration Successful!
            </h2>
            
            <p className="text-gray-500 mb-8 leading-relaxed text-base">
              Welcome to Oga Mechanic. Your account has been verified successfully.
            </p>

            <button
               onClick={onClose}
               className="w-full bg-[#D10000] cursor-pointer text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-red-100"
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
