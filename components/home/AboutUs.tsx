"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '../ui/CTAButton';

const stats = [
    { value: '2.5K', suffix: '+', label: 'Ride bookings', color: 'text-primary' },
    { value: '300', suffix: '+', label: 'Cars rented out', color: 'text-gray-800' },
    { value: '99', suffix: '%', label: 'Happy users', color: 'text-gray-800' },
    { value: '50', suffix: '+', label: 'Daily bookings', color: 'text-gray-800' },
];

const AboutUs = () => {
    return (
        <section id="about" className="py-12 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Left Side - Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='w-full lg:w-[30%]'
                    >
                        <h2 className="text-xl sm:text-3xl text-primary lg:text-4xl font-semibold text-gray-900 leading-tight">
                            ABOUT US
                        </h2>
                    </motion.div>

                    {/* Right Side - Stats, Description & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8 w-full lg:w-[70%]"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                Discover the passion behind Oga Mechanic, where trusted auto services, expert support, and convenience come together.
                            </h2>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-left md:text-center"
                                >
                                    <div className="text-4xl md:text-5xl font-semibold mb-2">
                                        <span className={stat.color}>{stat.value}</span>
                                        <span className={stat.color}>{stat.suffix}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className='flex flex-col md:flex-row justify-between gap-6'>
                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-lg w-full md:w-[60%]">
                                Explore cars for sale, connect with skilled mechanics, rent vehicles,
                                order gas, and chat with auto specialists. Oga Mechanic puts every
                                auto service you need at your fingertips.
                            </p>

                            {/* CTA Button */}
                            <div className="w-auto">
                                <CTAButton
                                    text="Explore services"
                                    href="#services"
                                    className="bg-transparent text-primary border border-primary w-auto justify-between"
                                    classNameIcon="bg-primary text-white"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;