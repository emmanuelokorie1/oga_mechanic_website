"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constant";
import { Users, Car, Wrench, Store } from "lucide-react";

const types = [
  {
    title: "Primary Users",
    description: "What they do:",
    items: [
      "Access all services on Oga Mechanic",
      "Buy or sell cars",
      "Rent vehicles",
      "Order gas",
      "Find trusted mechanics",
      "Chat with auto specialists",
    ],
    image: images.user,
    tag: "1M+ USERS",
    icon: Users,
    gradient: "from-primary to-orange-600",
  },
  {
    title: "Drivers & Riders",
    description: "What they do:",
    items: [
      "Accept ride requests (drivers) or book rides (riders)",
      "Track trips in real-time",
      "Manage earnings and trip history (drivers)",
    ],
    image: images.driver,
    tag: "900+ USERS",
    icon: Car,
    gradient: "from-orange-600 to-amber-600",
  },
  {
    title: "Mechanics",
    description: "What they do:",
    items: [
      "Receive service requests from car owners",
      "Manage availability, pricing, and bookings",
      "Build trust through ratings and reviews",
    ],
    image: images.mechanic,
    tag: "5K+ USERS",
    icon: Wrench,
    gradient: "from-red-700 to-primary",
  },
  {
    title: "Merchants",
    description: "What they do:",
    items: [
      "List vehicles or auto products for sale",
      "Manage inventory and pricing",
      "Connect directly with serious buyers",
    ],
    image: images.merchant,
    tag: "1K+ USERS",
    icon: Store,
    gradient: "from-amber-600 to-orange-600",
  },
];

const UserType = () => {
  return (
    <section className="pb-24 sm:pt-10 pt-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center sm:mb-16 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-bold tracking-wider uppercase text-xs">
              Our User Types
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Built For <span className="text-primary">Everyone</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Oga Mechanic is built for everyone in the auto ecosystem. Car owners, drivers, riders, mechanics, and merchants can access the right services, anytime, anywhere.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6">
          {types.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={type.image}
                    alt={type.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">

                  {/* Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${type.gradient} bg-clip-text text-transparent`}>
                      {type.tag}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {type.title}
                  </h3>

                  <p className="text-gray-300 text-sm font-medium mb-3">
                    {type.description}
                  </p>

                  <ul className="space-y-2">
                    {type.items.map((item, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${type.gradient} flex-shrink-0`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserType;