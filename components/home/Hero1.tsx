"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { videos, icons } from "@/constant";
import { CTAButton } from "../ui/CTAButton";

const Hero1 = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
            {/* Background Video/GIF */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={videos.heroVideo}
                    alt="Mechanic working"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container mx-auto px-6 py-20 relative z-10 mt-[80px] lg:mt-0">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-white tracking-wide uppercase">Premium Car Care</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6 mb-8"
                    >
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none">
                            <span className="text-primary">OGA</span>{" "}
                            <span className="text-white italic">MECHANIC</span>
                        </h1>

                        <p className="text-xl sm:text-3xl lg:text-4xl font-bold text-white">
                            The Complete <span className="text-red-500 italic">automobile</span> Experience
                        </p>
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-10 max-w-2xl"
                    >
                        <p className="text-base sm:text-lg text-gray-200 leading-relaxed mb-6 pr-0 lg:pr-[4rem]">
                            From <span className="text-white font-semibold">car purchases</span> to{" "}
                            <span className="text-white font-semibold">repairs</span>,{" "}
                            <span className="text-white font-semibold">rentals</span>,{" "}
                            <span className="text-white font-semibold">gas supply</span>, and{" "}
                            <span className="text-white font-semibold">expert support</span>
                            <span className="text-red-500 font-bold"> Oga Mechanic</span> brings every auto service together.
                        </p>

                        {/* Feature Pills */}
                        {/* <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-sm font-medium text-white">Simple</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <span className="text-sm font-medium text-white">Fast</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                <span className="text-sm font-medium text-white">Reliable</span>
                            </div>
                        </div> */}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        {/* Download App Button */}
                        <button className="group cursor-pointer flex items-center justify-between sm:justify-start gap-3 p-1 pl-4 bg-white hover:bg-gray-100 text-primary rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto">
                            <span className="text-base transition-transform duration-300 group-hover:translate-x-1">Download app</span>
                            <div className="flex items-center gap-1 px-3 py-2 border border-primary rounded-xl transition-all duration-300 group-hover:border-red-700 group-hover:bg-red-50">
                                {/* Google Play Icon */}
                                <Image
                                    src={icons.google}
                                    alt="Google Play"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                                />
                                {/* Apple Icon */}
                                <Image
                                    src={icons.apple}
                                    alt="Apple App Store"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:delay-75"
                                />
                            </div>
                        </button>

                        <div className="w-full sm:w-auto">
                            <CTAButton
                                text="Explore services"
                                className="bg-transparent text-white border border-white w-full sm:w-auto justify-between sm:justify-start"
                                classNameIcon="bg-white text-primary rounded-lg p-2"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero1;