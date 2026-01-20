import React from "react";
import PageHero from "@/components/shared/PageHero";
import { images } from "@/constant";
import Footer from "@/components/layout/Footer";

const TermsPage = () => {
  return (
    <main className="bg-white">
      <PageHero image={images.abouthero} title="Terms of Service" />
      
      <section className="relative py-20 lg:py-28">
        {/* Decorative Background */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-[120px] opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-50 rounded-full blur-[120px] opacity-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

             {/* Sidebar / Quick Nav (Sticky on Desktop) */}
            <div className="hidden lg:block w-[30%] shrink-0">
                <div className="sticky top-32 p-8 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-6 text-lg">Table of Contents</h3>
                    <ul className="space-y-4 text-gray-600 font-medium text-sm">
                        <li><a href="#introduction" className="hover:text-red-600 transition-colors block">1. Introduction</a></li>
                        <li><a href="#acceptance" className="hover:text-red-600 transition-colors block">2. Acceptance of Agreement</a></li>
                        <li><a href="#service" className="hover:text-red-600 transition-colors block">3. Service Description</a></li>
                        <li><a href="#responsibilities" className="hover:text-red-600 transition-colors block">4. User Responsibilities</a></li>
                        <li><a href="#liability" className="hover:text-red-600 transition-colors block">5. Limitation of Liability</a></li>
                        <li><a href="#changes" className="hover:text-red-600 transition-colors block">6. Changes to Terms</a></li>
                    </ul>
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">Last Updated</p>
                        <p className="text-gray-900 font-bold">January 15, 2026</p>
                    </div>
                </div>
            </div>

             {/* Main Content */}
            <div className="w-full lg:w-[70%]">
                 <div className="prose prose-lg prose-red max-w-none text-gray-600">
                    
                    <div id="introduction" className="mb-12 scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
                        <p className="leading-relaxed">
                             Welcome to Oga Mechanic. By using our website and services, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully. If you do not agree to these terms, you should not use this site or our services.
                        </p>
                    </div>

                    <div id="acceptance" className="mb-12 scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Acceptance of Agreement</h2>
                        <p className="leading-relaxed">
                            You agree to the terms and conditions outlined in this Terms of Service Agreement (&quot;Agreement&quot;) with respect to our site (the &quot;Site&quot;). This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior or contemporaneous agreements, representations, warranties and understandings with respect to the Site, the content, products or services provided by or through the Site, and the subject matter of this Agreement.
                        </p>
                    </div>

                    <div id="service" className="mb-12 scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Service Description</h2>
                        <p className="leading-relaxed">
                            Oga Mechanic provides a platform connecting vehicle owners with mechanics, drivers, and other automotive service providers. We act as an intermediary and are not responsible for the direct actions of third-party service providers, though we strive to maintain high standards of quality and reliability.
                        </p>
                    </div>

                    <div id="responsibilities" className="mb-12 scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Responsibilities</h2>
                        <p className="mb-6 leading-relaxed">
                            As a user of our services, you agree to:
                        </p>
                        <ul className="space-y-4 list-none pl-0">
                            {[
                                "Provide accurate and up-to-date information during registration and service requests.",
                                "Maintain the confidentiality of your account credentials.",
                                "Respect the rights and property of Oga Mechanic and its service providers.",
                                "Use the service only for lawful purposes."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-red-600 mt-2.5 shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div id="liability" className="mb-12 scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Limitation of Liability</h2>
                        <p className="leading-relaxed">
                            In no event will Oga Mechanic be liable for any incidental, indirect, consequential or special damages of any kind, or any damages whatsoever, including, without limitation, those resulting from loss of profit, loss of contracts, goodwill, data, information, income, anticipated savings or business relationships, whether or not advised of the possibility of such damage, arising out of or in connection with the use of this website or any linked websites.
                        </p>
                    </div>

                    <div id="changes" className="mb-12 scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Changes to Terms</h2>
                        <p className="leading-relaxed">
                            We reserve the right to change these Terms of Service at any time. Address the &quot;Last Updated&quot; date at the bottom of this page to see when the Agreement was last revised. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms of Service.
                        </p>
                    </div>

                 </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TermsPage;
