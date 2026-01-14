"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { images, icons } from "@/constant";
import { routes } from "@/constant/routes";
import { Loader2, ArrowLeft } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import SuccessModal from "./SuccessModal";

const VerifyOtpPage = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [userEmail, setUserEmail] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    // Retrieve email from storage for context
    const email = localStorage.getItem("signup_email");
    if (email) {
      setUserEmail(email);
    }
    // Focus first input
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Allow only numbers
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace to focus previous
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
    if (pastedData.every(char => !isNaN(Number(char)))) {
      const newOtp = [...otp];
      pastedData.forEach((char, index) => {
        if (index < 6) newOtp[index] = char;
      });
      setOtp(newOtp);
      inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    localStorage.removeItem("signup_email");
    router.push(routes.home);
  };

  const mutation = useMutation({
    mutationFn: async (otpCode: string) => {
      const payload = {
        email: userEmail,
        code: otpCode,
      };

      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${baseUrl}/users/verify-email-code/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || JSON.stringify(data) || "Verification failed");
      }
      return data;
    },
    onSuccess: (data) => {
      // Show modal instead of immediate redirect
      setShowSuccessModal(true);
    },
    onError: (error) => {
      toast.error(error.message || "Invalid code. Please try again.");
    },
  });

  const resendMutation = useMutation({
    mutationFn: async () => {
      const payload = { email: userEmail };
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${baseUrl}/users/resend-verification-code/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || JSON.stringify(data) || "Resend failed");
      }
      return data;
    },
    onSuccess: () => {
      toast.success("Verification code resent successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to resend code.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length !== 6) {
      toast.error("Please enter the complete 6-digit code.");
      return;
    }
    mutation.mutate(otpCode);
  };

  const handleResend = () => {
    if (!userEmail) {
      toast.error("Email not found. Please sign up again.");
      return;
    }
    resendMutation.mutate();
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Image */}
      <div className="hidden lg:block w-[40%] relative">
        <Image
          src={images.signup} // Reusing signup image for consistency
          alt="Verification Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-[60%] bg-gray-50 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 relative">

        <Link href={routes.signup} className="absolute top-8 left-8 text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </Link>

        {/* Logo */}
        <div onClick={() => router.back()} className="absolute top-8 cursor-pointer border border-gray-300 rounded-md p-2 left-8 text-gray-600 hover:text-gray-900 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </div>

        {/* Success Modal */}
        <SuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />

        <div className="max-w-md w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Verification</h1>
            <p className="text-gray-500 mb-8">
              We sent a code to <span className="font-semibold text-gray-900">{userEmail || "your email"}</span>. Enter it below to verify your account.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => { inputRefs.current[index] = el }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold rounded-xl border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all bg-white text-gray-900"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-[#D10000] cursor-pointer text-white font-bold py-3.5 rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {mutation.isPending ? <Loader2 className="animate-spin w-6 h-6 mx-auto" /> : "Verify Code"}
              </button>

              <div className="text-center text-gray-500 text-sm flex items-center justify-center gap-1">
                Didn't receive the code?{" "}
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendMutation.isPending}
                  className="text-red-600 font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
                >
                  {resendMutation.isPending ? (
                    <Loader2 className="animate-spin w-3 h-3" />
                  ) : (
                    "Resend"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;