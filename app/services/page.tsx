"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/constant";
import UserType from "@/components/home/UserType";
import GetApp from "@/components/home/GetApp";
import Footer from "@/components/layout/Footer";
import WhyUs from "./WhyUs";
import OurServices from "./OurServices";
import ScanApp from "@/components/home/ScanApp";

const ServicesPage = () => {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative mt-20 h-[400px] lg:h-[500px] w-full flex items-center overflow-hidden">
        <Image
          src={images.serviceHero}
          alt="Services Hero"
          fill
          className="object-cover"
          priority
        />
        {/* <div className="absolute inset-0 bg-black/60" />  */}
        <div className="container mx-auto px-6 relative z-10 flex items-center h-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mt-20 drop-shadow-md"
            >
              Services
            </motion.h1>
        </div>
      </section>
      
      {/* Why Us Section */}
      <WhyUs />

       {/* Our Services Section */}
      <OurServices />

      {/* CTA Section */}
      <ScanApp />

      <Footer />
    </main>
  );
};

export default ServicesPage;
