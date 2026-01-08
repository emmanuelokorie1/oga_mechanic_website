"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Find a Mechanic",
    description: "Connect with expert mechanics for your car repair needs.",
    image: "/assets/mechanic2.svg",
    className: "md:col-span-2",
    bgColor: "#F3F2FE",
    borderColor: "#ACA6FF",
  },
  {
    title: "Order a Ride",
    description: "Fast and reliable ride booking service instantly.",
    image: "/assets/orderRide.svg",
    className: "md:col-span-1",
    bgColor: "#F3F2FE",
    borderColor: "#ACA6FF",
  },
  {
    title: "Buy a Car",
    description: "Browse and purchase your dream car with confidence.",
    image: "/assets/buycar.svg",
    className: "md:col-span-1",
    bgColor: "#F8FFD8",
    borderColor: "#F6B80D",
  },
  {
    title: "Buy Spare Parts",
    description: "Genuine spare parts for all vehicle makes and models.",
    image: "/assets/sparePart.svg",
    className: "md:col-span-2",
    bgColor: "#FFF8F5",
    borderColor: "#5A4F49",
  },
  {
    title: "Tow Services",
    description: "24/7 towing assistance whenever you need it.",
    image: "/assets/carTow.svg",
    className: "md:col-span-1",
    bgColor: "#F3FFF1",
    borderColor: "#189804",
  },
  {
    title: "Rent a Car",
    description: "Flexible car rental options for short or long trips.",
    image: "/assets/rent.svg",
    className: "md:col-span-2",
    bgColor: "#F3FFF1",
    borderColor: "#189804",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function FeatureGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-xl text-gray-500">
              Your one-stop destination for everything automotive.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600">
              ←
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-600">
              →
            </button>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              style={{
                background: `linear-gradient(180deg, ${feature.bgColor} 0%, #ffffff 100%)`,
                borderColor: feature.borderColor,
              }}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border p-8 transition-all hover:-translate-y-1 hover:shadow-xl",
                feature.className
              )}
            >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Image src={feature.image} alt={feature.title} width={96} height={96} />
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                   <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 overflow-hidden p-2 shadow-sm">
                     <Image src={feature.image} alt={feature.title} width={40} height={40} className="object-contain" />
                   </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
