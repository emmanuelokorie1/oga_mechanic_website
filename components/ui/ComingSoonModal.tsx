"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, X, Mail, CheckCircle, Bell } from "lucide-react";
import toast from "react-hot-toast";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${baseUrl}/users/subscribe/`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
              email: email,
          }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        toast.success("You're on the list! We'll notify you when we launch.");
        setEmail("");
      } else {
         let errorMessage = "Subscription failed";
         if (data.errors && data.errors.email && Array.isArray(data.errors.email) && data.errors.email.length > 0) {
             errorMessage = data.errors.email[0];
         } else if (typeof data === 'string') {
             errorMessage = data;
         } else if (data.message) {
             errorMessage = data.message;
         }
         throw new Error(errorMessage);
      }
    } catch (err: any) {
      console.error("Subscription error:", err);
      toast.error(err.message || "Something went wrong. Please try again.");
      setError(err.message || "Failed to subscribe");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetState = () => {
      onClose();
      setTimeout(() => {
          setIsSuccess(false);
          setEmail("");
          setError("");
      }, 300);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={resetState}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Simple Minimal Header */}
            <div className="pt-8 pb-4 text-center px-6">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {isSuccess ? (
                        <CheckCircle className="w-8 h-8 text-primary" />
                    ) : (
                        <Smartphone className="w-8 h-8 text-primary" />
                    )}
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {isSuccess ? "You're All Set!" : "Coming Soon"}
                </h2>
                <p className="text-gray-500 text-sm">
                    {isSuccess ? "Keep an eye on your inbox." : "Get ready for the ultimate auto experience."}
                </p>

                <button 
                    onClick={resetState}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Body */}
            <div className="px-8 pb-8">
                <AnimatePresence mode="wait">
                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center space-y-6"
                        >
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Thank you for your interest! We are working hard to bring Oga Mechanic to your device. We will send you an email as soon as we launch on the App Store and Google Play.
                            </p>
                            <button
                                onClick={resetState}
                                className="w-full bg-gray-100 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Close
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <p className="text-gray-500 text-center leading-relaxed text-sm">
                                Be the first to know when our mobile app goes live. Sign up for early access and exclusive launch offers.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-semibold text-gray-700 uppercase tracking-wider ml-1">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            className={`w-full pl-10 pr-4 py-3 bg-white border rounded-lg outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm ${
                                                error ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-primary"
                                            }`}
                                        />
                                    </div>
                                    {error && <p className="text-red-500 text-xs ml-1 font-medium">{error}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            <span>Joining...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Bell className="w-4 h-4" />
                                            <span>Notify Me When Launched</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonModal;