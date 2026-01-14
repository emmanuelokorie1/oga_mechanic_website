import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { images } from "@/constant";
import { useState, useEffect } from "react";
import ComingSoonModal from "@/components/ui/ComingSoonModal";
import { useRouter } from "next/navigation";
import { routes } from "@/constant/routes";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const messages = [
    {
      subtitle: "All Your Auto Needs, Seamlessly Connected",
      description: "delivers a full spectrum automobile experience buying, servicing, rentals, fuel supply, and expert assistance all in one place."
    },
    {
      subtitle: "Your Trusted Partner for Every Journey",
      description: "connects you with certified mechanics, quality parts, and reliable services keeping your vehicle running smoothly every mile of the way."
    },
    {
      subtitle: "Drive with Confidence, Anytime, Anywhere",
      description: "provides instant access to expert mechanics, emergency services, and vehicle maintenance ensuring you're never stranded on the road."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [messages.length]);
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-semibold text-primary tracking-wide uppercase">Premium Car Care</span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none">
                <span className="text-primary">OGA</span>
                <br />
                <span className="text-gray-900">Mechanic</span>
              </h1>
              
              {/* Animated Subtitle */}
              <div className="relative h-10 lg:h-10 overflow-hidden mt-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentIndex}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-xl lg:text-2xl text-gray-600 font-medium max-w-lg absolute"
                  >
                    {messages[currentIndex].subtitle}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Animated Description */}
            <div className="relative min-h-[60px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                  className="text-lg text-gray-500 leading-relaxed max-w-xl absolute"
                >
                  <span className="text-primary font-semibold">Oga Mechanic</span> {messages[currentIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => setShowModal(true)}
                className="group h-14 px-8 bg-primary hover:bg-red-700 text-white rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 cursor-pointer"
              >
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download App
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push(routes.services)}
                className="group h-14 px-8 border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary rounded-xl transition-all duration-300 cursor-pointer"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            
          </div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative -mr-26 lg:-mr-30"
          >
            <div className="relative">
              {/* Image */}
              <Image
                src={images.heroImage}
                alt="Oga Mechanic App Interface"
                width={1400}
                height={1400}
                className="w-[140%] lg:w-[150%] h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Modal */}
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default Hero;