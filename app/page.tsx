import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// import { Roles } from "@/components/home/Roles";
import Hero1 from "@/components/home/Hero1";
import AboutUs from "@/components/home/AboutUs";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import UserType from "@/components/home/UserType";
import HowItWorks from "@/components/home/HowItWorks";
import TrustingUs from "@/components/home/TrustingUs";
import GetApp from "@/components/home/GetApp";
import ScanApp from "@/components/home/ScanApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 selection:bg-red-500/30 selection:text-red-900">
      
      <Hero1 />
      <AboutUs />
      <GetApp />
      <WhyChooseUs />
      <UserType />
      <HowItWorks />
      <TrustingUs />
      <ScanApp />
      <Footer />
    </main>
  );
}