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
        <section id="contact" className="w-full bg-white">
            {/* Hero Section */}
            <PageHero 
                image={images.contactHero}
                title="Contact Us"
            />

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
                            <form onSubmit={formik.handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input
                                        label="First name"
                                        type="text"
                                        id="firstName"
                                        placeholder="First name"
                                        {...formik.getFieldProps("firstName")}
                                        error={formik.touched.firstName && formik.errors.firstName}
                                    />
                                    <Input
                                        label="Last name"
                                        type="text"
                                        id="lastName"
                                        placeholder="Last name"
                                        {...formik.getFieldProps("lastName")}
                                        error={formik.touched.lastName && formik.errors.lastName}
                                    />
                                </div>

                                <Input
                                    label="Company name"
                                    type="text"
                                    id="company"
                                    placeholder="Enter company name"
                                    {...formik.getFieldProps("company")}
                                    error={formik.touched.company && formik.errors.company}
                                    />

                                <Input
                                    label="Email"
                                    type="email"
                                    id="email"
                                    placeholder="you@company.com"
                                    {...formik.getFieldProps("email")}
                                    error={formik.touched.email && formik.errors.email}
                                />

                                <Input
                                    label="Contact number"
                                    type="tel"
                                    id="phone"
                                    placeholder="Enter contact number"
                                    {...formik.getFieldProps("phone")}
                                    error={formik.touched.phone && formik.errors.phone}
                                />

                                <Textarea
                                    label="Message"
                                    id="message"
                                    rows={4}
                                    placeholder="How can we help you?"
                                    {...formik.getFieldProps("message")}
                                    error={formik.touched.message && formik.errors.message}
                                />

                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Oga Mechanic requires your contact information in order to assist with your enquiry. For more information about how your data will be used, as well as our privacy practices.
                                </p>

                                <div className="w-full md:w-[60%] mx-auto pt-8">
                                    <CTAButton
                                        text={formik.isSubmitting ? "Submitting..." : "Submit"}
                                        type="submit"
                                        disabled={formik.isSubmitting}
                                        className="bg-transparent text-primary border border-primary w-full justify-between hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed"
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
