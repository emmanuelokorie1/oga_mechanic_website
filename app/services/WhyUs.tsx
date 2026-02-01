"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { images } from "@/constant";
import { Settings, CheckCircle2 } from "lucide-react";

const featuresLeft = [
  {
    title: "All-in-One Auto Solutions",
    description:
      "Access multiple automobile services on a single platform, saving you time, effort, and unnecessary stress.",
  },
  {
    title: "Trusted & Verified Professionals",
    description:
      "We connect you only with skilled mechanics, drivers, and merchants you can rely on.",
  },
  {
    title: "Simple & Easy to use Platform",
    description:
      "Our intuitive design ensures smooth navigation, quick bookings, and hassle-free service access.",
  },
];

const featuresRight = [
  {
    title: "Flexible Pricing Plans",
    description:
      "Choose pricing options that fit your needs, whether you're an individual user or a business.",
  },
  {
    title: "Expert Guidance",
    description:
      "Get instant assistance and professional advice through our specialist chat feature.",
  },
  {
    title: "Built for Convenience & Speed",
    description:
      "From discovery to delivery, every service is designed to be fast, efficient, and dependable.",
  },
];

const FeatureItemLeft = ({ title, description }: { title: string; description: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col-reverse sm:flex-row-reverse lg:flex-row items-center sm:items-start gap-4 text-center sm:text-left lg:text-right lg:justify-end"
  >
    <div className="flex-1">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-base leading-relaxed">{description}</p>
    </div>
    <div className="shrink-0 relative">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center relative z-10 border border-red-50">
             <Settings className="w-12 h-12 text-red-500" />
             <div className="absolute top-2 right-2 bg-white rounded-full">
                 <CheckCircle2 className="w-5 h-5 text-red-600 fill-white" />
             </div>
        </div>
    </div>
  </motion.div>
);

const FeatureItemRight = ({ title, description }: { title: string; description: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
  >
    <div className="shrink-0 relative">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center relative z-10 border border-red-50">
             <Settings className="w-12 h-12 text-red-500" />
             <div className="absolute top-2 right-2 bg-white rounded-full">
                 <CheckCircle2 className="w-5 h-5 text-red-600 fill-white" />
             </div>
        </div>
    </div>
    <div className="flex-1">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-base leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const WhyUs = () => {
  const scrollRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const carY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const carRotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const carScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <section ref={scrollRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center sm:mb-20 mb-10">
          <h4 className="text-red-600 font-bold tracking-wider uppercase text-base mb-3">
            WHY US?
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 max-w-2xl mx-auto leading-tight">
            We are ensuring the best customer experience
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/3 md:space-y-24 sm:space-y-12 space-y-8 order-2 lg:order-1">
            {featuresLeft.map((feature, index) => (
              <FeatureItemLeft key={index} {...feature} />
            ))}
          </div>

          {/* Center Image */}
          <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2 mb-10 lg:mb-0">
            <motion.div
                style={{ y: carY, rotate: carRotate, scale: carScale }}
                className="relative sm:w-[350px] w-full h-[500px] md:w-[450px] md:h-[700px]"
            >
                {/* Car Image */}
                <Image
                    src={images.serviceCar} 
                    alt="Red Sports Car"
                    fill
                    className="object-contain"
                    priority
                />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 md:space-y-24 sm:space-y-12 space-y-8 order-3 gap-4">
            {featuresRight.map((feature, index) => (
              <FeatureItemRight key={index} {...feature} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;