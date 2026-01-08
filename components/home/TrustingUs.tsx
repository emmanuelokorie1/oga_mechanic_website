"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { images } from "@/constant"; // Using available images as placeholders

const testimonials = [
    {
        id: 1,
        name: "Cassie Carleton",
        role: "CLIENT, USA",
        quote: "My SUV had been through some rough weather and was looking very dull when I brought it in. The team took their time and really transformed it. The exterior shine was flawless interior cleaning!",
        image: images.user, // Placeholder
    },
    {
        id: 2,
        name: "Ronald Benson",
        role: "CLIENT, UK",
        quote: "Finding a reliable mechanic used to be a nightmare until I found Oga Mechanic. The service was prompt, professional, and transparent. Highly recommended for anyone!",
        image: images.driver, // Placeholder
    },
    {
        id: 3,
        name: "Daniel Reed",
        role: "CLIENT, FRANCE",
        quote: "I sold my car within days of listing it here. The process was smooth, and the support team was incredibly helpful throughout. Great platform!",
        image: images.mechanic, // Placeholder
    },
];

const TrustingUs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="relative py-16 md:py-24 bg-[#0A0A0A] overflow-hidden text-white">
            {/* Honeycomb Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.3v34.6L30 69.2 0 51.9V17.3zM30 104l30-17.3V52.1L30 34.8 0 52.1v34.6z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="container mx-auto px-6 relative z-10">

                {/* Top Label */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-10 md:mb-16"
                >
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-gray-200 text-xs font-semibold tracking-[0.2em] text-[.9rem] uppercase">
                        People Trusting Us!
                    </span>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start">

                    {/* Main Quote Area */}
                    <div className="flex flex-col md:flex-row w-full gap-6 md:gap-0 relative">
                        {/* Outline Quote Icon - Responsive scaling */}
                        <div className="opacity-50 md:opacity-100 z-0 bg-transparent">
                            <svg className="w-[100px] h-auto md:w-[166px] md:h-[123px]" width="166" height="123" viewBox="0 0 166 123" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="165.833" height="122.5" fill="url(#pattern0_2385_264)" />
                                <defs>
                                    <pattern id="pattern0_2385_264" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_2385_264" transform="scale(0.00502513 0.00680272)" />
                                    </pattern>
                                    <image id="image0_2385_264" width="199" height="147" preserveAspectRatio="none" xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>

                        </div>

                        <div className="pl-0 md:pl-16 pt-0 md:pt-8 min-h-[160px] md:min-h-[200px] z-10 w-full md:w-auto">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-lg sm:text-x md:text-2xl lg:text-3xl font-light leading-relaxed text-gray-100 italic md:not-italic"
                                >
                                    &quot;{testimonials[activeTab].quote}&quot;
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-auto flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-800">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={testimonials[activeTab].image}
                                        alt={testimonials[activeTab].name}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation & Stats */}
                <div className="mt-16 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">

                    {/* Tabs */}
                    <div className="flex gap-8 md:gap-16 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto scrollbar-hide">
                        {testimonials.map((t, index) => (
                            <button
                                key={t.id}
                                onClick={() => setActiveTab(index)}
                                onMouseEnter={() => setActiveTab(index)}
                                className={`group flex flex-col items-start min-w-max transition-all duration-300 relative pb-4 text-left shrink-0`}
                            >
                                <span className="text-red-900 text-xs font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
                                    0{t.id}.
                                </span>
                                <span className={`text-base md:text-lg font-medium mb-1 transition-colors duration-300 ${activeTab === index ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                    {t.name}
                                </span>
                                <span className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-wider">
                                    {t.role}
                                </span>

                                {/* Active Line Indicator */}
                                <div className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${activeTab === index ? 'w-full' : 'w-0 group-hover:w-1/3'}`} />
                            </button>
                        ))}
                    </div>

                    {/* Rating */}
                    <div className="flex items-end gap-3 md:gap-4 w-full md:w-auto justify-between md:justify-end border-t border-white/5 md:border-none pt-6 md:pt-0">
                        <div className="text-right">
                            <div className="flex items-center justify-end gap-1 mb-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary" />
                                ))}
                            </div>
                            <div className="text-[10px] md:text-xs text-gray-400 font-medium whitespace-nowrap">
                                30000+ People Trusting us!
                            </div>
                        </div>
                        <div className="text-5xl md:text-6xl font-light text-primary leading-none">
                            4.9
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TrustingUs;