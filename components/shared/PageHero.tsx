"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  image: string | StaticImageData;
  title: string;
  alt?: string;
  className?: string;
}

const PageHero = ({ image, title, alt, className = "" }: PageHeroProps) => {
  return (
    <section className={`relative h-[400px] lg:h-[650px] bg-black/60 backdrop-blur-sm w-full flex items-center overflow-hidden ${className}`}>
      <Image
        src={image}
        alt={alt || title}
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
          {title}
        </motion.h1>
      </div>
    </section>
  );
};

export default PageHero;
