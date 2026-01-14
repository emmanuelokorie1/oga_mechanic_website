"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/constant";
import { contactData } from "@/constant/data";
import { CTAButton } from "../../components/ui/CTAButton";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";

const ContactUs = () => {
    return (
        <section id="contact" className="w-full bg-white">
            {/* Hero Section */}
            <div className="relative mt-20 h-[350px] lg:h-[450px] w-full flex items-center overflow-hidden">
                <Image
                    src={images.contactHero}
                    alt="Contact Us Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-white"
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-16 lg:py-24">

                <div className="mb-12">
                    <h4 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">
                        REACH OUT NOW!
                    </h4>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Business enquiries
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        We&apos;d love to hear from you. Please fill out this form or shoot us an email.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Side - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-[40%] space-y-6 lg:space-y-10"
                    >

                        <div className="space-y-6 lg:space-y-8">
                            {contactData.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-600 mb-1 py-1 lg:py-3">{item.description}</p>
                                        
                                        {/* Render text if available (for address) */}
                                        {item.text && (
                                            <a 
                                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.text)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary font-medium py-1 lg:py-3 block hover:underline"
                                            >
                                                {item.text}
                                            </a>
                                        )}

                                        {/* Render links if available (for email/phone) */}
                                        {item.links && (
                                            <div className="flex flex-col gap-1">
                                                {item.links.map((link, i) => (
                                                    <a 
                                                        key={i} 
                                                        href={link.href} 
                                                        className="text-primary font-medium hover:underline"
                                                    >
                                                        {link.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-[60%]"
                    >
                        <div className="bg-white sm:p-6 p-4 md:p-8 rounded-2xl shadow-md border border-gray-100">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        label="First name"
                                        type="text"
                                        id="firstName"
                                        placeholder="First name"
                                    />
                                    <Input
                                        label="Last name"
                                        type="text"
                                        id="lastName"
                                        placeholder="Last name"
                                    />
                                </div>

                                <Input
                                    label="Company name"
                                    type="text"
                                    id="company"
                                    placeholder="Enter company name"
                                    />

                                <Input
                                    label="Email"
                                    type="email"
                                    id="email"
                                    placeholder="you@company.com"
                                />

                                <Input
                                    label="Contact number"
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter contact number"
                                />

                                <Textarea
                                    label="Message"
                                    id="message"
                                    rows={4}
                                />

                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Oga Mechanic requires your contact information in order to assist with your enquiry. For more information about how your data will be used, as well as our privacy practices.
                                </p>

                                <div className="w-full md:w-[60%] mx-auto pt-8">
                                    <CTAButton
                                        text="Submit"
                                        type="submit"
                                        className="bg-transparent text-primary border border-primary w-full justify-between hover:bg-red-50"
                                        classNameIcon="bg-primary text-white"
                                    />
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;
