"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Chinedu Okafor",
    role: "Car Owner",
    content: "Oga Mechanic saved me when my car broke down on the mainland. The mechanic arrived in 20 minutes and fixed it perfectly. Highly recommended!",
    rating: 5
  },
  {
    name: "Sarah Adebayo",
    role: "Business Owner",
    content: "I use Oga Mechanic for my small fleet of delivery vans. Maintenance tracking is so easy now, and we've saved money on repairs.",
    rating: 5
  },
  {
    name: "Emeka Johnson",
    role: "Driver",
    content: "Best app for finding genuine parts. No more fake spare parts issues for me. The verification process is real.",
    rating: 4
  },
  {
    name: "Tunde Bakare",
    role: "Mechanic",
    content: "Since joining Oga Mechanic, my customer base has grown. The app is easy to use and payments are always on time.",
    rating: 5
  },
  {
    name: "Adewale King",
    role: "Car Dealer",
    content: "Selling cars on this platform is stress-free. Serious buyers and a secure process. Kudos to the team!",
    rating: 5
  },
];

const TestimonialCard = ({ data }: { data: typeof testimonials[0] }) => (
  <div className="bg-white rounded-2xl shadow-md m-3 p-10 w-[400px] md:w-[550px] flex-shrink-0 mx-6 border border-gray-100 hover:border-primary/20 transition-colors">
    <div className="flex justify-start mb-6">
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
        <Quote className="w-6 h-6 text-primary" />
      </div>
    </div>

    <p className="text-gray-700 italic mb-8 leading-relaxed text-lg md:text-xl h-[150px] overflow-hidden">
      &quot;{data.content}&quot;
    </p>

    <div className="flex items-center justify-between mt-auto">
      <div>
        <h4 className="text-xl font-bold text-gray-900">{data.name}</h4>
        <p className="text-gray-500">{data.role}</p>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < data.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"}`}
          />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h4 className="text-primary font-bold tracking-wider uppercase text-sm md:text-base mb-3">
          TESTIMONIALS
        </h4>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          What People Say About Us
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Local Style for Keyframes */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>

        <div
          className="flex w-fit cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            animation: "marquee 40s linear infinite",
            animationPlayState: isPaused ? "paused" : "running"
          }}
        >
          {/* Original List */}
          {testimonials.map((item, index) => (
            <TestimonialCard key={`original-${index}`} data={item} />
          ))}
          {/* Duplicated List for Loop */}
          {testimonials.map((item, index) => (
            <TestimonialCard key={`dup-${index}`} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;