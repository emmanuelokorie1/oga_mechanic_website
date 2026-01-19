"use client";

import Image from "next/image";
import { icons } from "@/constant";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
        
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-black to-black" />
      
      {/* Abstract Animated Shapes */}
      <motion.div 
        animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
        }}
        transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
        }}
        className="absolute w-[500px] h-[500px] rounded-full border border-white/5 blur-3xl"
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container */}
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-full"
            >
                <Image
                    src={icons.logo2}
                    alt="Oga Mechanic"
                    fill
                    className="object-contain"
                    priority
                />
            </motion.div>
            
            {/* Spinning Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] rounded-full border border-t-primary border-r-transparent border-b-transparent border-l-transparent w-[calc(100%+40px)] h-[calc(100%+40px)]"
            />
             <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] rounded-full border border-b-white/20 border-t-transparent border-r-transparent border-l-transparent w-[calc(100%+20px)] h-[calc(100%+20px)]"
            />
        </div>

        {/* Text */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col items-center gap-2"
        >
            <h2 className="text-2xl font-bold text-white tracking-widest">OGA MECHANIC</h2>
            <div className="flex items-center gap-1">
                <span className="text-sm text-gray-400">Loading Experience</span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.1 }}
                    className="text-primary text-xl leading-none"
                >
                    .
                </motion.span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.2, repeatDelay: 0.1 }}
                    className="text-primary text-xl leading-none"
                >
                    .
                </motion.span>
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.4, repeatDelay: 0.1 }}
                    className="text-primary text-xl leading-none"
                >
                    .
                </motion.span>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
