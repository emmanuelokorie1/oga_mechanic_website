"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/constant";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

type Service = {
    id: string;
    title: string;
    tagline: string;
    description: string;
    image: string;
};

const services: Service[] = [
    {
        id: "01",
        title: "Vehicle Marketplace",
        tagline: "Buy & Sell Cars and Spare Parts",
        description:
            "Discover quality vehicles and genuine spare parts from trusted sellers. Browse, compare, and make confident purchase decisions, or participate in car bidding for great deals.",
        image: images.market,
    },
    {
        id: "02",
        title: "Vehicle Care & Support",
        tagline: "Repairs, Servicing & Maintenance",
        description:
            "Connect with skilled mechanics for repairs, servicing, diagnostics, and routine maintenance. Track your car's repair history and get reliable support whenever issues arise.",
        image: images.mechanic,
    },
    {
        id: "03",
        title: "Mobility & Ride Services",
        tagline: "Safe and Reliable Transportation",
        description:
            "Book trusted rides quickly and move around with ease. Enjoy comfortable transportation for daily commutes and special trips with verified drivers.",
        image: images.ride,
    },
    {
        id: "04",
        title: "Car Rentals",
        tagline: "Flexible Short-Term and Long-Term Rentals",
        description:
            "Rent vehicles that fit your lifestyle and budget. Choose from a wide range of cars with transparent pricing, flexible plans, and easy booking.",
        image: images.rental,
    },
    {
        id: "05",
        title: "Expert Support",
        tagline: "Chat with Auto Professionals",
        description:
            "Get real-time guidance from automobile experts. Ask questions, receive maintenance tips, and make smarter vehicle decisions backed by experience.",
        image: images.expert,
    },
    {
        id: "06",
        title: "Car Towing Services",
        tagline: "Emergency Roadside Assistance",
        description:
            "Stranded on the road? Get fast and reliable towing services 24/7. Our professional tow trucks safely transport your vehicle to your preferred location or nearest mechanic.",
        image: images.towing,
    },
    // {
    //     id: "07",
    //     title: "Gas Services",
    //     tagline: "On-Demand Gas Delivery",
    //     description:
    //         "Order gas conveniently through the platform and have it delivered safely to your location. Save time and avoid unnecessary trips.",
    //     image: images.gas,
    // },
];

const OurServices = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section
            aria-labelledby="services-heading"
            className="bg-[#050505] py-20 lg:py-32 text-white relative"
        >
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Sticky Sidebar */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32 self-start flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h4 className="text-red-600 font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
                                <span className="w-8 h-0.5 bg-red-600 inline-block"></span>
                                Our Services
                            </h4>

                            <h2
                                id="services-heading"
                                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
                            >
                                Everything Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Vehicle Needs</span>
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
                                Oga Mechanic brings all automobile
                                services into one seamless platform
                                designed for convenience and reliability.
                                From buying and selling cars, accessing
                                genuine spare parts, finding skilled mechanics,
                                and chatting with auto specialists, to booking rides,
                                renting vehicles, and ordering gas, we make vehicle
                                ownership and mobility easier. With trusted professionals,
                                flexible pricing, and a user-friendly experience,
                                Oga Mechanic ensures you get
                                quality service at every step.
                            </p>

                            <button 
                                onClick={() => setShowModal(true)}
                                className="text-white border-b border-red-600 pb-1 hover:text-red-500 transition-colors w-fit"
                            >
                                Download the App &rarr;
                            </button>
                        </motion.div>
                    </div>

                    {/* Services List */}
                    <div className="w-full lg:w-2/3 space-y-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative bg-[#0F0F0F] rounded-[2rem] p-8 md:p-12 overflow-hidden hover:bg-[#141414] transition-colors duration-500 border border-white/5"
                            >
                                {/* Left Red Accent Line */}
                                <div className="absolute left-0 top-12 bottom-12 w-1 bg-red-600 rounded-r-full" />

                                {/* Header */}
                                <div className="flex items-center gap-4 mb-8 pl-4">
                                    <span className="text-red-600 font-bold text-4xl leading-none font-mono">
                                        {service.id}
                                    </span>
                                    <div className="h-px bg-white/20 flex-1 border-t border-dashed border-gray-600 mx-4" />
                                    <span className="text-gray-500 text-sm tracking-widest uppercase">Services</span>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col md:flex-row gap-8 items-center pl-4">

                                    {/* Image */}
                                    <div className="relative h-[220px] w-full md:w-[260px] shrink-0 rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Image Overlay */}
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>

                                    {/* Text */}
                                    <div className="flex-1 space-y-3">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-red-500 transition-colors">
                                            {service.title}
                                        </h3>

                                        <h4 className="text-gray-300 font-medium text-lg">
                                            {service.tagline}
                                        </h4>

                                        <p className="text-gray-500 leading-relaxed text-sm md:text-base pt-2">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Modal */}
            <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
};

export default OurServices;