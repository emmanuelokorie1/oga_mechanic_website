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
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
             <h4 className="text-red-600 font-bold tracking-widest uppercase text-sm">
                SUPPORT & HELP
              </h4>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Frequently Asked <span className="text-red-600">Questions</span>
              </h2>
              <p className="text-gray-500 text-lg">
                Find answers to common questions about Oga Mechanic service, payments, and safety.
              </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
             {faqData.map((item, index) => (
              <div 
                key={index} 
                className={`border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-white shadow-lg ring-1 ring-gray-100' : 'bg-gray-50/50 hover:bg-gray-50'}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer focus:outline-none"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === index ? 'text-gray-900' : 'text-gray-600'}`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-red-600' : 'text-gray-400'}`}>
                       <PlusCircle className={`w-6 h-6 ${openIndex === index ? "hidden" : "block"}`} />
                       <MinusCircle className={`w-6 h-6 ${openIndex === index ? "block" : "hidden"}`} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-gray-500 leading-relaxed md:text-base text-sm border-t border-gray-50 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-20">
            <div className="bg-[#0F0F0F] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 pointer-events-none" />
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-10 pointer-events-none" />
                 
                 <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
                    </p>
                    <a 
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        Get in touch
                    </a>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;