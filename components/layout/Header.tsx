"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { icons } from "@/constant";
import { routes } from "@/constant/routes";
import { CTAButton } from "@/components/ui/CTAButton";

const navItems = [
  { name: "Home", href: routes.home },
  { name: "About us", href: routes.about },
  { name: "Services", href: routes.services },
  { name: "Contact us", href: routes.contact },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname === routes.signup || pathname === routes.verifyOtp) {
    return null;
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50'
            : 'bg-black border-b border-white/10'
          }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={icons.logo}
                alt="Oga Mechanic Logo"
                width={40}
                height={40}
                className="w-40 h-40"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
              {navItems.filter((item) => item.name !== "Home").map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-[1.1rem] font-medium transition-colors ${
                      isActive ? "text-red-500" : "text-white hover:text-red-500"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-500"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <CTAButton
                  text="Get Started"
                  href={routes.signup}
                  className="bg-white text-primary border border-primary hover:bg-gray-50"
                  classNameIcon="bg-primary text-white rounded-lg p-2"
                />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black p-6 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-xl font-bold text-white">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium transition-colors ${
                      isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="h-px bg-white/10 my-4" />
               <CTAButton
                text="Get Started For Free"
                href={routes.signup}
                className="bg-white text-primary border border-primary"
                classNameIcon="bg-primary text-white rounded-lg p-2"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;