"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
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

import { useLenis } from "lenis/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const scaleX = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useLenis(({ progress, limit }) => {
    // If the page is not scrollable (limit === 0), keep the bar empty.
    // Also ensures we don't get NaN or Infinity
    const safeProgress = limit <= 0 ? 0 : progress;
    scaleX.set(safeProgress || 0);
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  if (pathname === routes.signup || pathname === routes.verifyOtp) {
    return null;
  }

  return (
    <>
      <motion.header
        className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center left-1/2 -translate-x-1/2 ${scrolled
          ? "top-4 w-[90%] md:w-[70%] max-w-6xl rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-2xl py-2 overflow-hidden"
          : "top-0 w-full max-w-full rounded-none bg-transparent border-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <Link
                href="/"
                className="relative z-50 block"
              >
                <Image
                  src={icons.logo}
                  alt="Oga Mechanic Logo"
                  width={90}
                  height={90}
                  className="w-full h-full object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1.5 rounded-full border border-white/5 shadow-inner shadow-white/5">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full group"
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-nav-pill"
                          className="absolute inset-0 bg-primary rounded-full shadow-[0_0_20px_rgba(211,3,9,0.4)]"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      <span
                        className={`relative z-10 cursor-pointer transition-colors duration-200 ${isActive
                          ? "text-white"
                          : "text-gray-300 group-hover:text-white"
                          }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <CTAButton
                text="Get Started For Free"
                href={routes.signup}
                className={`border transition-all duration-300 ${scrolled
                  ? "bg-white text-primary border-white hover:bg-gray-100"
                  : "bg-primary text-white border-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(211,3,9,0.3)]"
                  }`}
                classNameIcon={
                  scrolled ? "bg-primary text-white" : "bg-white text-primary"
                }
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </nav>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary origin-left"
          style={{ scaleX }}
        />
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden flex items-center justify-center overflow-hidden"
          >
            {/* Background decorative blobs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col items-center justify-between h-full py-24 w-full max-w-sm px-6 relative z-10">

              {/* Menu Items */}
              <div className="flex flex-col gap-6 w-full text-center mt-12">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`text-4xl font-bold tracking-tight transition-all duration-300 ${isActive
                          ? "text-primary scale-105"
                          : "text-white/60 hover:text-white"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer Actions */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full flex flex-col gap-6"
              >
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />

                <div className="flex justify-center gap-6 text-white/50">
                  <div className="flex items-center gap-2 text-sm" 
                  onClick={() => { 
                    router.push(routes.contact); 
                    setMobileMenuOpen(false) }}
                    >
                    <Phone className="w-4 h-4" />
                    <span>Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm"
                    onClick={() => {
                      router.push(routes.contact);
                      setMobileMenuOpen(false)
                    }}
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <CTAButton
                    text="Get Started For Free"
                    href={routes.signup}
                    className="bg-primary text-white rounded-full border-primary w-full justify-center py-3 text-lg shadow-[0_0_30px_rgba(211,3,9,0.3)] hover:shadow-[0_0_50px_rgba(211,3,9,0.5)] transition-shadow"
                    classNameIcon="bg-white text-primary"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;