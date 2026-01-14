"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { videos, icons } from "@/constant";
import { CTAButton } from "../ui/CTAButton";
import { useState } from "react";
import ComingSoonModal from "@/components/ui/ComingSoonModal";
import { routes } from "@/constant/routes";

const Hero1 = () => {
    const [showModal, setShowModal] = useState(false);

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

                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        {/* Download App Button */}
                        <button 
                            onClick={() => setShowModal(true)}
                            className="group cursor-pointer flex items-center justify-between sm:justify-start gap-3 p-1 pl-4 bg-white hover:bg-gray-100 text-primary rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 w-full sm:w-auto"
                        >
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
                                href={routes.services}
                                className="bg-transparent text-white border border-white w-full sm:w-auto justify-between sm:justify-start"
                                classNameIcon="bg-white text-primary rounded-lg p-2"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Modal */}
            <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
};

export default Hero1;