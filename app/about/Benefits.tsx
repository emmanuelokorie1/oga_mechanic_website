"use client";

import React from "react";
import { CheckCheck } from "lucide-react";
import { motion } from "framer-motion";

const benefitsData = [
  {
    title: "All-in-One Auto Platform",
    description:
      "Access car sales, spare parts, gas supply, ride services, rentals, and mechanic support, all in one place.",
  },
  {
    title: "Trusted Auto Professionals",
    description:
      "Connect with verified mechanics, merchants, and specialists you can rely on for quality service.",
  },
  {
    title: "Seamless Convenience",
    description:
      "Book services, chat experts, and manage your auto needs anytime, anywhere.",
  },
  {
    title: "Flexible Pricing Options",
    description:
      "Choose pricing plans that fit your needs, whether you're a regular user or a business.",
  },
  {
    title: "Built for Everyone",
    description:
      "Designed to serve car owners, drivers, mechanics, and merchants within one connected ecosystem.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-[#0A0A0A] text-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-red-600 font-bold tracking-wider uppercase text-sm md:text-base mb-4">
            BENEFITS
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Discover what sets <span className="text-red-600 italic">Oga Mechanic</span>{" "}
            apart!
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {benefitsData.map((benefit, index) => {
            // Determine grid span based on index
            // First 2 items span 3 columns (half width on large screens)
            // Last 3 items span 2 columns (third width on large screens)
            const isTopRow = index < 2;
            const colSpan = isTopRow ? "lg:col-span-3" : "lg:col-span-2";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${colSpan} bg-[#1F1F1F] p-8 md:p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group`}
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                  <CheckCheck className="w-6 h-6 text-red-600" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;