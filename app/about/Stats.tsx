"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Wrench, Car, Store, MapPin, Star } from "lucide-react";

const stats = [
  { label: "Verified Mechanics", value: "500+", icon: Wrench },
  { label: "Pro Drivers & Riders", value: "1.2k+", icon: Car },
  { label: "Auto Merchants", value: "300+", icon: Store },
  { label: "Happy Users", value: "10k+", icon: Users },
  { label: "Cities Covered", value: "15+", icon: MapPin },
  { label: "Satisfaction Rate", value: "98%", icon: Star },
];

const Stats = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-primary to-red-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[100px]" />
             <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black rounded-full blur-[100px]" />
             <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" /> 
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center text-white">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</h3>
              <p className="text-white/70 text-xs md:text-sm font-medium uppercase tracking-wider group-hover:text-white transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;