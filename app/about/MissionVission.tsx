"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "@/constant";

const MissionVission = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  const content = {
    vision: {
      title: "Our Vision",
      text: "To become Africa's most trusted and comprehensive automobile services platform. We aim to redefine how people buy, maintain, and interact with vehicles, creating a connected and reliable auto ecosystem that empowers users and professionals alike.",
      image: images.vision, // Placeholder as per plan
    },
    mission: {
      title: "Our Mission",
      text: "To simplify and connect every automobile service in one reliable platform. We provide car owners, drivers, mechanics, and merchants with seamless access to buying and selling cars, finding trusted mechanics, renting vehicles, ordering gas, and chatting with auto specialists—making vehicle ownership and management fast, convenient, and trustworthy.",
      image: images.mission, // Placeholder as per plan
    },
  };

  return (
    <section className="pb-16 pt-2 sm:py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8 md:mb-12">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === "vision"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Our Vision
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                activeTab === "mission"
                  ? "bg-red-600 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Our Mission
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex flex-col md:block relative w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-300 md:h-[600px]">
          {/* Image Section */}
          <div className="relative h-64 md:absolute md:inset-0 md:h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={content[activeTab].image}
                  alt={content[activeTab].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20" /> {/* Slight overlay for contrast */}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text Card overlay */}
          <div className="relative md:absolute md:inset-0 md:flex md:justify-end md:items-center md:pr-5 bg-white md:bg-transparent">
            <motion.div
              key={activeTab + "-text"}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 md:p-12 md:shadow-xl w-full md:max-w-md md:h-[94%] md:rounded-lg flex flex-col justify-center gap-4 md:justify-between"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-6">
                {content[activeTab].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {content[activeTab].text}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVission;