"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images, icons } from "@/constant";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

const GetApp = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-20 lg:py-[160px] bg-white">
      <div className="container mx-auto px-6">
        {/* Red Background Container */}
        <div className="relative bg-[#B70207] pb-4 rounded-3xl flex flex-col lg:flex-row items-center overflow-hidden lg:overflow-visible">

          {/* Desktop Phone Mockup (Hidden on Mobile) */}
          <div className="hidden lg:block w-[45%] relative self-stretch">
            <motion.div
              initial={{ opacity: 0, x: -80, y: "-50%" }}
              whileInView={{ opacity: 1, x: 0, y: "-50%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute left-[-20px] xl:left-[100px] top-1/2 z-20"
            >
              <div className="relative w-[320px] xl:w-[360px] h-[640px] xl:h-[750px]">
                <Image
                  src={images.screen1}
                  alt="Oga Mechanic Mobile App Interface"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Content Grid */}
          <div className="w-full lg:w-[55%] z-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-8 lg:pr-20 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Get Your Oga Mechanic <br className="hidden sm:block" />
                Mobile Application
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                Start earning money today by unlocking the power of your savings
                with our platform&apos;s competitive interest rates.
              </p>

              {/* Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.button
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto cursor-pointer"
                >
                  <Image src={icons.apple} alt="" width={28} height={28} className="flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Download on the</div>
                    <div className="text-base font-bold">App Store</div>
                  </div>
                </motion.button>

                <motion.button
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-black rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto cursor-pointer"
                >
                  <Image src={icons.google} alt="" width={28} height={28} className="flex-shrink-0" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Get it on</div>
                    <div className="text-base font-bold">Google Play</div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Mobile Phone Mockup (Visible ONLY on Mobile) */}
          <div className="block lg:hidden w-full relative mt-0 px-4 pb-4">
             <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full flex justify-center"
            >
              <div className="relative w-[280px] h-[550px] sm:w-[320px] sm:h-[600px] mb-[-40px]">
                <Image
                  src={images.screen1}
                  alt="Oga Mechanic Mobile App Interface"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Modal */}
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default GetApp;