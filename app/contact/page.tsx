import ContactUs from "@/app/contact/ContactUs";
import React from "react";
import FAQ from "./FAQ";
import ScanApp from "@/components/home/ScanApp";
import Footer from "@/components/layout/Footer";

const ContactPage = () => {
  return (
    <>
      <ContactUs />
      <FAQ />
      <ScanApp />
      <Footer />
    </>
  );
};

export default ContactPage;