"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin, Instagram, Youtube, Facebook, Loader2 } from "lucide-react";
import { images, icons, routes } from "@/constant";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const SocialLink = ({ href, icon: Icon, delay }: { href: string; icon: any, delay: number }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    whileHover={{ scale: 1.1, backgroundColor: "#DC2626" }}
    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-all cursor-pointer"
  >
    <Icon size={18} />
  </motion.a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-2 group">
      <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 h-[1px] bg-red-500"></span>
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
        toast.error("Please enter your email address");
        return;
    }

    setLoading(true);
    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                subject: "New Newsletter Subscription",
                message: "Please add me to the newsletter list.",
                type: "newsletter"
            }),
        });
        
        const data = await response.json();

        if (response.ok) {
            toast.success("Subscribed successfully!");
            setEmail("");
        } else {
            throw new Error(data.message || "Subscription failed");
        }
    } catch (error) {
        toast.error("Failed to subscribe. Please try again.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden pt-12 pb-10">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900/30 via-black to-black pointer-events-none" />
      
      {/* Abstract Grid Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Newsletter Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-white/5 border border-white/10 rounded-3xl sm:p-8 p-4 md:p-12 mb-10 relative overflow-hidden"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-xl relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Stay Informed, Stay Inspired.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Be the first to get updates on Oga Mechanic's news, features, and exclusive offers.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-lg relative z-10">
            <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-full p-2 pl-6 focus-within:border-red-500/50 transition-colors w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none text-white placeholder:text-gray-600 flex-1 min-w-0 py-2"
              />
              <button 
                type="submit" 
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-full px-6 py-3 flex items-center gap-2 font-medium transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
              >
                {loading ? <Loader2 size={18} className="animate-spin" /> : (
                    <>
                        Subscribe
                        <ArrowRight size={18} />
                    </>
                )}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12 border-t border-white/5 pt-10">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Logo */}
            <Link href="/" className="block w-48 relative opacity-90 hover:opacity-100 transition-opacity">
               <Image src={icons.logo} alt="Oga Mechanic" width={180} height={60} className="object-contain" />
            </Link>

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                The complete automobile experience. From car purchases to repairs, rentals, gas supply, and expert support, we bring every auto service together.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <SocialLink href="#" icon={Linkedin} delay={0} />
              <SocialLink href="#" icon={Instagram} delay={0.1} />
              <SocialLink href="#" icon={Youtube} delay={0.2} />
              <SocialLink href="#" icon={Facebook} delay={0.3} />
            </div>
          </div>

          {/* Quick Link 1 */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4">
              <FooterLink href={routes.about}>About Us</FooterLink>
              <FooterLink href={routes.services}>Services</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Press</FooterLink>
            </ul>
          </div>

          {/* Quick Link 2 */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Mechanic Center</FooterLink>
              <FooterLink href="#">Safety</FooterLink>
              <FooterLink href={routes.terms}>Terms & Rules</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-4">
              <FooterLink href={routes.contact}>Contact Us</FooterLink>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href={routes.privacy}>Privacy Policy</FooterLink>
              <FooterLink href={routes.terms}>Terms of Service</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-xs text-gray-600">
          <p>
            Copyright © {new Date().getFullYear()} Oga Mechanic. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-gray-500">All Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;