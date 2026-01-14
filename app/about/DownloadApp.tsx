import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images, icons } from "@/constant";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

const DownloadApp = () => {
    // Arbitrary selection of avatars for the social proof group
    const avatars = [images.user, images.driver, images.mechanic, images.merchant];
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="pt-10 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

                    {/* Left Column - Phone Mockup (Image) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-center"
                    >
                        <div className="relative w-[300px] h-[400px] md:w-[450px] md:h-[750px]">
                            <Image
                                src={images.keep}
                                alt="Oga Mechanic App Interface"
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
                    >
                        {/* Avatar Group */}
                        <div className="flex items-center -space-x-4">
                            {avatars.map((avatar, index) => (
                                <div key={index} className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden">
                                    <Image
                                        src={avatar}
                                        alt={`User ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                            <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-gray-100 text-xs font-bold text-red-600">
                                100k+
                            </div>
                        </div>

                        {/* Title Section */}
                        <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 max-w-md">
                                Join over 100k+ people and get started with Oga Mechanic
                            </h2>
                        </div>

                        {/* Store Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => setShowModal(true)}
                                className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors shadow-lg cursor-pointer"
                            >
                                <Image src={icons.apple} alt="Apple Logo" width={24} height={24} className="w-6 h-6 invert" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-medium">Get on</div>
                                    <div className="text-sm font-bold leading-none">app store</div>
                                </div>
                            </button>
                            <button 
                                onClick={() => setShowModal(true)}
                                className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-lg cursor-pointer"
                            >
                                <Image src={icons.google} alt="Google Play Logo" width={24} height={24} className="w-6 h-6" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-medium text-gray-500">Get on</div>
                                    <div className="text-sm font-bold leading-none">play store</div>
                                </div>
                            </button>
                        </div>

                    </motion.div>
                </div>
            </div>
            
            {/* Modal */}
            <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
};

export default DownloadApp;