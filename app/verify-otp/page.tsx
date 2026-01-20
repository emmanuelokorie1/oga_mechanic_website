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
  const [showSuccessModal, setShowSuccessModal] = useState(true);

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
      {/* Left Side - Image & overlay (Hidden on Mobile) */}
      <div className="hidden lg:block w-[45%] relative overflow-hidden">
        <Image
          src={images.signup} // Reusing signup image for consistency
          alt="Verification Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
        
        <div className="absolute bottom-0 left-0 p-12 text-white z-10">
             <div className="mb-6">
                <Image src={icons.logo} alt="Oga Mechanic" width={180} height={180} className="" />
             </div>
             <h2 className="text-4xl font-bold mb-4 leading-tight">Secure your account <br/> in seconds.</h2>
             <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                Protecting your data and ensuring a safe experience is our top priority.
             </p>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center items-center px-6 py-12 lg:p-12 relative bg-white">

        {/* Logo */}
        <div onClick={() => router.back()} className="absolute top-8 left-8 cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-600" />
        </div>

        {/* Success Modal */}
        <SuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />

        <div className="max-w-md w-full mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
             <div className="text-center mb-10">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Verify your email</h1>
                <p className="text-gray-500 text-lg">
                   We sent a code to <span className="font-semibold text-gray-900">{userEmail || "your email"}</span>. Enter it below to verify your account.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex justify-between gap-2 sm:gap-4">
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
                    className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold rounded-xl border border-gray-200 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all bg-gray-50 focus:bg-white text-gray-900"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-[#D10000] cursor-pointer text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-all transform hover:-translate-y-0.5 shadow-xl shadow-red-100 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {mutation.isPending ? <Loader2 className="animate-spin w-6 h-6 mx-auto" /> : "Verify Code"}
              </button>

              <div className="text-center text-gray-500 text-base flex items-center justify-center gap-1.5 mt-6">
                Didn&apos;t receive the code?
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendMutation.isPending}
                  className="text-[#D10000] font-bold hover:underline disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer"
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