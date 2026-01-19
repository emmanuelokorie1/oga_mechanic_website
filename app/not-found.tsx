"use client";

import Link from "next/link";
import Image from "next/image";
import { CTAButton } from "@/components/ui/CTAButton";
import { routes } from "@/constant/routes";
import { images } from "@/constant";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900/40 via-black to-black" />
      
      {/* Decorative Tire Trace or Blob (Abstract) */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* 404 Text Layered */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative"
        >
            <h1 className="text-[12rem] md:text-[18rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-black select-none leading-none">
                404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl">
                    Whoops!
                </span>
            </div>
        </motion.div>

        {/* Message */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-xl mx-auto space-y-6 -mt-10 md:-mt-20 z-10"
        >
            <p className="text-xl text-gray-400">
                It looks like you've taken a wrong turn or this part of the garage is currently empty.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <CTAButton
                    text="Back to Garage"
                    href={routes.home}
                    className="bg-primary text-white border-primary py-4 px-8 text-lg hover:bg-red-700 shadow-[0_0_30px_rgba(211,3,9,0.2)]"
                    classNameIcon="bg-white text-primary"
                />
            </div>
        </motion.div>
      </div>

       {/* Optional Car Image Overlay (Faded at bottom) */}
       <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.5, y: 50 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute bottom-0 w-full max-w-4xl opacity-50 pointer-events-none"
       >
           <Image 
                src={images.car} 
                alt="Car" 
                width={800} 
                height={400} 
                className="w-full h-auto object-contain mx-auto opacity-20"
           />
       </motion.div>

    </div>
  );
}
