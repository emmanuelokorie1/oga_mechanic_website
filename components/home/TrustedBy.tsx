"use client";

import React, { useState } from "react";
import { Wrench, Settings, Zap, Truck, ShieldCheck, Cog, Award, PenTool } from "lucide-react";

// Placeholder Companies
const companies = [
  { name: "AutoFix Pro", icon: Wrench },
  { name: "GearShift Motors", icon: Cog },
  { name: "TurboTech", icon: Zap },
  { name: "Velocity Auto", icon: Truck },
  { name: "Prime Parts", icon: Settings },
  { name: "DriveSafe", icon: ShieldCheck },
  { name: "Elite Mechanics", icon: Award },
  { name: "MechMaster", icon: PenTool },
];

const TrustedBy = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-10 text-center">
        <p className="text-gray-400 font-semibold text-xs md:text-sm tracking-[0.2em] uppercase">
            Trusted by top leading companies
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Local Style for Keyframes */}
        <style>
          {`
            @keyframes marquee-logos {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
        
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div 
          className="flex w-fit items-center gap-16 md:gap-24 cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ 
            animation: "marquee-logos 40s linear infinite",
            animationPlayState: isPaused ? "paused" : "running"
          }}
        >
            {/* Original List */}
            {companies.map((company, index) => (
                <div key={`original-${index}`} className="flex items-center gap-3 group grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary/10 transition-colors">
                         <company.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-lg md:text-xl font-bold text-gray-700 group-hover:text-black whitespace-nowrap transition-colors">{company.name}</span>
                </div>
            ))}
            {/* Duplicated List for Loop */}
             {companies.map((company, index) => (
                <div key={`dup-${index}`} className="flex items-center gap-3 group grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                     <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary/10 transition-colors">
                         <company.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-lg md:text-xl font-bold text-gray-700 group-hover:text-black whitespace-nowrap transition-colors">{company.name}</span>
                </div>
            ))}
             {/* Tripled List for extra width safety */}
             {companies.map((company, index) => (
                <div key={`trip-${index}`} className="flex items-center gap-3 group grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                     <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary/10 transition-colors">
                         <company.icon className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-lg md:text-xl font-bold text-gray-700 group-hover:text-black whitespace-nowrap transition-colors">{company.name}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
