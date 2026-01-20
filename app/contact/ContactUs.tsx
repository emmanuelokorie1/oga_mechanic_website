"use client";

import React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { contactData } from "@/constant/data";
import { CTAButton } from "../../components/ui/CTAButton";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import PageHero from "@/components/shared/PageHero";
import { images } from "@/constant";

const ContactUs = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            company: "",
            email: "",
            phone: "",
            message: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            company: Yup.string(),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            phone: Yup.string().required("Phone number is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: `${values.firstName} ${values.lastName}`,
                        email: values.email,
                        message: `
Name: ${values.firstName} ${values.lastName}
Company: ${values.company || "N/A"}
Phone: ${values.phone}
Email: ${values.email}

Message:
${values.message}
                        `,
                        subject: `New Contact from ${values.firstName} ${values.lastName}` // Optional subject
                    }),
                });

                if (response.ok) {
                    toast.success("Message sent successfully! We'll get back to you soon.");
                    resetForm();
                } else {
                    throw new Error("Failed to send message");
                }
            } catch (error) {
                toast.error("Something went wrong. Please try again.");
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <section id="contact" className="w-full bg-gray-50/50">
            {/* Hero Section */}
            <PageHero 
                image={images.contactHero}
                title="Contact Us"
            />

            {/* Main Content */}
            <div className="container mx-auto px-6 py-20 lg:py-32">
                
                <div className="flex flex-col lg:flex-row shadow-lg rounded-[2.5rem] overflow-hidden bg-white">

                    {/* Left Side - Info (Dark Theme) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-[40%] bg-[#0F0F0F] text-white p-10 lg:p-16 flex flex-col justify-between relative overflow-hidden"
                    >
                         {/* Background Pattern */}
                         <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[120px] opacity-20 pointer-events-none" />
                         <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-10 pointer-events-none" />

                         <div className="relative z-10">
                            <h4 className="text-red-500 font-bold tracking-widest uppercase mb-6 text-sm">
                                Contact Information
                            </h4>
                            <h2 className="text-4xl font-bold mb-6 leading-tight">
                                Let&apos;s start a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">conversation</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-12">
                                We&apos;d love to hear from you. Fill out the form or reach us via the details below.
                            </p>

                            <div className="space-y-8">
                                {contactData.map((item, index) => (
                                    <div key={index} className="flex gap-6 group">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
                                            <item.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-500 transition-colors">{item.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                            
                                            {item.text && (
                                                <a 
                                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.text)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white font-medium block mt-2 hover:text-red-400 transition-colors"
                                                >
                                                    {item.text}
                                                </a>
                                            )}

                                            {item.links && (
                                                <div className="flex flex-col gap-1 mt-2">
                                                    {item.links.map((link, i) => (
                                                        <a 
                                                            key={i} 
                                                            href={link.href} 
                                                            className="text-white font-medium hover:text-red-400 transition-colors"
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
                         </div>
                    </motion.div>

                    {/* Right Side - Form (Light Theme) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-[60%] p-10 lg:p-16 flex flex-col justify-center"
                    >
                        <form onSubmit={formik.handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Input
                                    label="First name"
                                    type="text"
                                    id="firstName"
                                    placeholder="Enter first name"
                                    {...formik.getFieldProps("firstName")}
                                    error={formik.touched.firstName && formik.errors.firstName}
                                    className="bg-gray-50 border-gray-100 focus:bg-white transition-all h-12"
                                />
                                <Input
                                    label="Last name"
                                    type="text"
                                    id="lastName"
                                    placeholder="Enter last name"
                                    {...formik.getFieldProps("lastName")}
                                    error={formik.touched.lastName && formik.errors.lastName}
                                    className="bg-gray-50 border-gray-100 focus:bg-white transition-all h-12"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Input
                                    label="Email"
                                    type="email"
                                    id="email"
                                    placeholder="you@company.com"
                                    {...formik.getFieldProps("email")}
                                    error={formik.touched.email && formik.errors.email}
                                    className="bg-gray-50 border-gray-100 focus:bg-white transition-all h-12"
                                />
                                <Input
                                    label="Contact number"
                                    type="tel"
                                    id="phone"
                                    placeholder="+234..."
                                    {...formik.getFieldProps("phone")}
                                    error={formik.touched.phone && formik.errors.phone}
                                    className="bg-gray-50 border-gray-100 focus:bg-white transition-all h-12"
                                />
                            </div>

                            <Input
                                label="Company name (Optional)"
                                type="text"
                                id="company"
                                placeholder="Enter company name"
                                {...formik.getFieldProps("company")}
                                error={formik.touched.company && formik.errors.company}
                                className="bg-gray-50 border-gray-100 focus:bg-white transition-all h-12"
                            />

                            <Textarea
                                label="Message"
                                id="message"
                                rows={5}
                                placeholder="Tell us how we can help..."
                                {...formik.getFieldProps("message")}
                                error={formik.touched.message && formik.errors.message}
                                className="bg-gray-50 border-gray-100 focus:bg-white transition-all"
                            />

                            <div className="pt-4">
                                <CTAButton
                                    text={formik.isSubmitting ? "Sending..." : "Send Message"}
                                    type="submit"
                                    disabled={formik.isSubmitting}
                                    className="bg-red-600 text-white w-full md:w-auto px-10 py-4 h-auto text-lg rounded-xl hover:bg-red-700 shadow-xl shadow-red-200 transition-all transform hover:-translate-y-1"
                                />
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;
