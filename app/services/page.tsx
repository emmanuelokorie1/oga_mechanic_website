"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/constant";
import UserType from "@/components/home/UserType";
import GetApp from "@/components/home/GetApp";
import Footer from "@/components/layout/Footer";
import WhyUs from "./WhyUs";
import OurServices from "./OurServices";
import ScanApp from "@/components/home/ScanApp";
import PageHero from "@/components/shared/PageHero";

const ServicesPage = () => {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      <PageHero 
        image={images.serviceHero}
        title="Services"
      />
      
      {/* Why Us Section */}
      <WhyUs />

       {/* Our Services Section */}
      <OurServices />

      {/* CTA Section */}
      <ScanApp />

      <Footer />
    </main>
  );
};

export default ServicesPage;
