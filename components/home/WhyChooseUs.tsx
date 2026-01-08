"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Car, 
  Calendar, 
  Wrench, 
  CarFront, 
  MessageCircle, 
  Cog, 
  Fuel, 
  DollarSign 
} from "lucide-react";

/**
 * Feature Data
 * Mapping the 8 cards from the design.
 */
const features = [
  {
    title: "Luxurious Car Rentals",
    description: "Flexible car rentals for any need is provided seamlessly for you in the mobile app.",
    icon: Car,
  },
  {
    title: "Easy Ride Booking Services",
    description: "Get where you need to go effortlessly. Reliable drivers, real-time tracking, and smooth payments at your fingertips.",
    icon: Calendar,
  },
  {
    title: "Find a Mechanic",
    description: "Book trusted and professional mechanics anytime, any-day for your car repairs",
    icon: Wrench,
  },
  {
    title: "Car Sales",
    description: "Explore, compare, and purchase cars from trusted sellers, quick and secure.",
    icon: CarFront,
  },
  {
    title: "Chat a Specialist",
    description: "Get instant advice from certified auto specialists—diagnostics, guidance, and recommendations at your fingertips.",
    icon: MessageCircle,
  },
  {
    title: "Spare Parts Sales",
    description: "Find genuine spare parts from verified sellers to keep your vehicle running smoothly.",
    icon: Cog,
  },
  {
    title: "Gas Sales",
    description: "Order gas quickly and reliably from trusted suppliers, delivered to your location.",
    icon: Fuel,
  },
  {
    title: "Flexible Pricing",
    description: "Pay only for what you need. Oga Mechanic's flexible plans make auto services simple, fair, and budget-friendly.",
    icon: DollarSign,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="md:py-20 pt-6 pb-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Title Block (Takes up the first slot in the grid) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-[#B70207] font-bold tracking-wider uppercase mb-3">
              Why Choose Us?
            </h4>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Exceptional <br /> Service in Every <br /> Mile, Every Time
            </h2>
          </motion.div>

          {/* 2. Feature Cards */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-[#1A1A1A] rounded-2xl p-8 hover:bg-black transition-colors duration-300 group"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-6 group-hover:border-primary transition-colors">
                <feature.icon className="w-6 h-6 text-[#B70207]" />
              </div>

              {/* Text Content */}
              <h3 className="text-white text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;