"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Linkedin, Instagram, Youtube, Facebook, MapPin } from "lucide-react"; // Using MapPin as placeholder for the logo icon
import { images, icons } from "@/constant";

// Custom icons wrapper if needed, or use lucide
// For TikTok we might need a custom SVG or just use a placeholder from Lucide if available (it's not always in all versions)
// I'll check icons export first, but for now I will use placeholders or standard lucide icons.

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-all duration-300"
  >
    <Icon size={18} />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-gray-400 hover:text-white transition-colors text-sm">
      {children}
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden pt-16 pb-8">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src={images.car}
          alt="Footer Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-3xl font-bold mb-3">
              Stay Informed, Stay Inspired.
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm">
              Be the first to get updates on Oga Mechanic&apos;s news. Subscribe to our newsletter today.
            </p>
          </div>

          <div className="w-full lg:w-auto flex-1 max-w-lg">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1.5 pl-6 focus-within:border-white/20 transition-colors">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none text-white placeholder:text-gray-500 flex-1 min-w-0"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-6 py-2.5 flex items-center gap-2 font-medium transition-colors text-sm">
                Subscribe
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-10">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              {/* Replace with actual Logo image if available */}
              <Image src={icons.logo} alt="Oga Mechanic" width={200} height={200} />
              
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Youtube} />
              <SocialLink href="#" icon={Facebook} />
              {/* Note: Lucide might not have TikTok, checking icons. If typically needed I'd use a custom SVG or just standard social set */}
            </div>
          </div>

          {/* Quick Link 1 */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h3 className="text-base font-medium mb-4">Quick links</h3>
            <ul className="space-y-3">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Donate</FooterLink>
              <FooterLink href="#">Friends of Jagaban</FooterLink>
            </ul>
          </div>

          {/* Quick Link 2 */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-medium mb-4">Quick links</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Grassroot</FooterLink>
              <FooterLink href="#">News & Media</FooterLink>
              <FooterLink href="#">Project & Policies</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-medium mb-4">Support</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Contact us</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5 text-xs text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()} Ogamechanic.org. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms & Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;