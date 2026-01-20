"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/constant";
import MissionVission from "./MissionVission";
import Benefits from "./Benefits";
import DownloadApp from "./DownloadApp";
import ScanApp from "@/components/home/ScanApp";
import Footer from "@/components/layout/Footer";

import PageHero from "@/components/shared/PageHero";

import Stats from "./Stats";
import Testimonials from "./Testimonials";

const AboutPage = () => {
  return (
    <main className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <PageHero 
        image={images.abouthero}
        title="About Us"
      />

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Left Column - Text */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 space-y-6"
            >
              <h4 className="text-primary font-bold tracking-wide uppercase text-base md:text-lg">
                ALL YOUR AUTO NEEDS, ONE PLATFORM
              </h4>
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-xl">
                <p>
                  Oga Mechanic is a complete automobile services platform connecting car owners, drivers, mechanics, and merchants. From buying and selling cars, finding trusted mechanics, renting vehicles, ordering gas, to chatting with auto specialists, we make every auto service simple, reliable, and convenient.
                </p>
                <p>
                  We built Oga Mechanic to simplify the way people interact with the auto world. Whether you&apos;re looking to buy a car, get expert advice, find a skilled mechanic, or manage vehicle needs on the go, our platform brings everything together in one seamless experience. With trusted professionals, flexible services, and easy access, we make vehicle ownership and management effortless for everyone.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative w-full flex items-center justify-center"
              >
                 <Image
                    src={images.heroImage}
                    alt="Oga Mechanic Logo Box"
                    width={400}
                    height={300}
                    className="object-contain w-full h-auto"
                 />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Mission & Vision Section */}
      <MissionVission />

      {/* Benefits Section */}
      <Benefits />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Download App Section */}
      <DownloadApp />

       <ScanApp />

        <Footer />
    </main>
  );
};

export default AboutPage;
