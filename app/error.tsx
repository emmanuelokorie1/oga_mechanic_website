"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { routes } from "@/constant/routes";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden px-6">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
      
      {/* Abstract Grid/Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-lg text-center">
        
        {/* Animated Icon Container */}
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center mb-8 relative border border-red-500/20"
        >
            <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-red-500/10 rounded-full blur-xl"
            />
            <AlertTriangle className="w-10 h-10 text-red-500 relative z-10" />
        </motion.div>
        
        {/* Text Content */}
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
        >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                System Malfunction
            </h2>
            
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                We've encountered an unexpected engine trouble. <br className="hidden sm:block"/>
                Our mechanics have been notified of the issue.
            </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
            <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-red-700 transition-all shadow-[0_4px_20px_rgba(211,3,9,0.25)] hover:shadow-[0_4px_25px_rgba(211,3,9,0.4)] active:scale-95"
            >
            <RefreshCcw className="w-5 h-5" />
            <span>Try Again</span>
            </button>
            
            <Link
            href={routes.home}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all active:scale-95"
            >
            <Home className="w-5 h-5" />
            <span>Return Home</span>
            </Link>
        </motion.div>

        {/* Technical Error Details (Optional/Collapsible) */}
        {process.env.NODE_ENV === 'development' && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 p-4 bg-gray-900/50 rounded-lg border border-white/5 text-left w-full overflow-hidden"
            >
                <p className="text-xs text-red-400 font-mono break-all">
                    Error Code: {error.digest || 'UNKNOWN'}
                </p>
                <p className="text-xs text-gray-500 font-mono mt-2 truncate">
                    {error.message}
                </p>
            </motion.div>
        )}
      </div>
    </div>
  );
}
