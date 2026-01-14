"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import { images, icons } from "@/constant";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

const ScanApp = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="py-12 md:py-24 px-4 md:px-8 bg-white relative overflow-hidden">
            <div className="container mx-auto">
                <div className="bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] rounded-[2.5rem] md:rounded-[3.5rem] py-16 lg:py-0 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 overflow-hidden relative shadow-2xl">
                    
                    {/* Background Glow Effect */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

                    {/* Left Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full max-w-xl z-10 py-0 lg:py-24"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight text-center lg:text-left tracking-tight">
                            Get yourself a future as you take the endeavor to become the best
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg mb-10 md:mb-12 max-w-md mx-auto lg:mx-0 text-center lg:text-left leading-relaxed">
                            We make sure we give you every single thing you need for your online study
                        </p>

                        {/* QR Code & Download Section */}
                        <div className="border border-white/10 border-dashed rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 max-w-lg mx-auto lg:mx-0 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors duration-300">
                            
                            {/* QR Code Placeholder */}
                            <div className="bg-white p-3 rounded-2xl shrink-0 shadow-lg">
                                <QrCode className="w-16 h-16 md:w-20 md:h-20 text-black" strokeWidth={1.5} />
                            </div>

                            <div className="flex flex-col gap-4 text-center md:text-left">
                                <p className="text-white text-base font-medium leading-normal">
                                    Scan to download Genius Home app now. <br />
                                    <span className="text-gray-400 font-normal text-sm">Available on Appstore & Playstore.</span>
                                </p>
                                
                                <div className="flex items-center justify-center md:justify-start gap-3">
                                     <button 
                                        onClick={() => setShowModal(true)}
                                        className="bg-white p-2.5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-sm"
                                     >
                                        <Image src={icons.google} alt="Play Store" className="w-6 h-6 md:w-7 md:h-7" />
                                     </button>
                                     <button 
                                        onClick={() => setShowModal(true)}
                                        className="bg-white p-2.5 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-sm"
                                     >
                                        <Image src={icons.apple} alt="App Store" className="w-6 h-6 md:w-7 md:h-7" />
                                     </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 w-full flex justify-center items-center z-10 self-end"
                    >
                        <div className="relative w-[800px] max-w-[800px] md:max-w-[700px] lg:max-w-[800px]">
                            {/* We use only screen2 as requested which contains the group of phones */}
                            <Image 
                                src={images.screen2} 
                                alt="App Screenshots" 
                                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 will-change-transform"
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

export default ScanApp;