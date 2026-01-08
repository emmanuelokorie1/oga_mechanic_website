"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircle, MinusCircle, Mail } from "lucide-react";
import { email, faqData } from "@/constant/data";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white sm:py-16 pb-16 pt-6 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Side - Header & Support */}
          <div className="w-full lg:w-[40%] space-y-12">
            <div>
              <h4 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">
                COMMON QUERIES
              </h4>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 text-lg">
                Everything you need to know about Oga Mechanic
              </p>
            </div>

          
          </div>

          {/* Right Side - Accordion List */}
          <div className="w-full lg:w-[60%] space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
                >
                  <span className="sm:text-lg text-md md:text-xl font-medium text-gray-900 pr-8">
                    {item.question}
                  </span>
                  <div className="shrink-0 text-primary">
                    {openIndex === index ? (
                       <MinusCircle className="w-6 h-6" />
                    ) : (
                       <PlusCircle className="w-6 h-6" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed md:text-base text-sm">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            {/* Mobile Support Section (visible only on mobile) */}
            <div className="block lg:hidden mt-12 space-y-6 pt-8 border-t border-gray-100">
               <h3 className="text-2xl font-bold text-gray-900">
                Still Have Questions? We&apos;re Here to Help
               </h3>
               <p className="text-gray-600 leading-relaxed">
                Our dedicated team is here to provide personalized support and guidance to ensure you have all the information you need. Contact us today to learn more about our solutions, services, projects or anything else you&apos;re curious about.
               </p>
               <a href="mailto:info@mechanic.ng" className="flex items-center gap-2 text-primary font-bold hover:underline">
                    <Mail className="w-5 h-5" />
                    info@ogamechanic.ng
               </a>
            </div>

          </div>
        </div>

          <div className="hidden lg:block space-y-6 mt-12">
               <h3 className="text-2xl font-bold text-gray-900">
                Still Have Questions? We&apos;re Here to Help
               </h3>
               <p className="text-gray-600 leading-relaxed">
                Our dedicated team is here to provide personalized support and guidance to ensure you have all the information you need. Contact us today to learn more about our solutions, services, projects or anything else you&apos;re curious about.
               </p>
               <a href={`mailto:${email}`} className="flex items-center gap-2 text-primary font-bold hover:underline">
                    <Mail className="w-5 h-5" />
                    {email}
               </a>
            </div>
      </div>
    </section>
  );
};

export default FAQ;