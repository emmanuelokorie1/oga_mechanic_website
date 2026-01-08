"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CTAButton } from "../ui/CTAButton";

const steps = [
    {
        step: "STEP 1",
        title: "Choose User Type",
        description: "Select whether you're a Car Owner, Driver/Rider, Mechanic, or Merchant to unlock the services designed just for you",
    },
    {
        step: "STEP 2",
        title: "Sign up",
        description: "Create your account to access all Oga Mechanic services, whether you're a car owner, driver, mechanic, or merchant.",
    },
    {
        step: "STEP 3",
        title: "Select Your Service",
        description: "Pick the service you need—buy/sell a car, find a mechanic, rent a car, order gas, or chat with a specialist.",
    },
    {
        step: "STEP 4",
        title: "Enjoy Your Service",
        description: "Complete your request and experience reliable, fast, and convenient auto services every time.",
    },
];

const HowItWorks = () => {
    return (
        <section className="md:py-12 pb-12 pt-6 overflow-hidden">
            <div className="container mx-auto px-6 ">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">

                    {/* Left Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3 lg:sticky lg:self-start"
                    >
                        <h4 className="text-[#B70207] font-bold tracking-wider uppercase mb-6 text-lg">
                            HOW IT WORKS
                        </h4>

                        <h2 className="text-4xl text-gray-900 font-medium leading-tight sm:mb-12 mb-6">
                            Follow these simple steps to choose your ideal vehicle and drive away effortlessly.
                        </h2>

                        {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Register now
              <span className="bg-primary text-white rounded-full p-1 group-hover:bg-white group-hover:text-primary transition-colors">
                <ArrowRight size={16} />
              </span>
            </motion.button> */}

                        <CTAButton
                            text="Register now"
                            className="bg-white text-primary border border-primary"
                            classNameIcon="bg-primary text-white rounded-lg p-2"
                        />
                    </motion.div>



                    {/* Right Side - Timeline */}
                    <div className="lg:w-2/3 relative py-">
                        {/* Vertical Line */}
                        <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-primary hidden md:block" />

                        <div className="flex flex-col gap-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative flex gap-8 md:gap-12"
                                >
                                    {/* Timeline Dot */}
                                    <div className="hidden md:flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-primary border-4 border-white shadow-sm z-10" />
                                    </div>

                                    {/* Card */}
                                    <div className="flex-1 bg-[#1A1A1A] rounded-2xl p-8 md:p-10 hover:shadow-xl transition-shadow duration-300">
                                        <span className="text-primary font-serif italic text-lg mb-2 block">
                                            {step.step}
                                        </span>
                                        <h3 className="text-white text-2xl font-bold mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HowItWorks;