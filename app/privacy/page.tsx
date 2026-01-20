import React from "react";
import PageHero from "@/components/shared/PageHero";
import { images } from "@/constant";
import Footer from "@/components/layout/Footer";

const PrivacyPage = () => {
  return (
    <main className="bg-white">
      <PageHero image={images.abouthero} title="Privacy Policy" />
      
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
                        <li><a href="#data-collection" className="hover:text-red-600 transition-colors block">2. Data We Collect</a></li>
                        <li><a href="#data-usage" className="hover:text-red-600 transition-colors block">3. How We Use Your Data</a></li>
                        <li><a href="#security" className="hover:text-red-600 transition-colors block">4. Data Security</a></li>
                        <li><a href="#rights" className="hover:text-red-600 transition-colors block">5. Your Legal Rights</a></li>
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
                            At Oga Mechanic, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our services and tell you about your privacy rights and how the law protects you.
                        </p>
                    </div>

                    <div id="data-collection" className="mb-12 scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Data We Collect</h2>
                        <p className="mb-6 leading-relaxed">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul className="space-y-4 list-none pl-0">
                            {[
                                { title: "Identity Data", desc: "Includes first name, last name, username or similar identifier." },
                                { title: "Contact Data", desc: "Includes billing address, delivery address, email address and telephone numbers." },
                                { title: "Transaction Data", desc: "Includes details about payments to and from you and other details of products and services you have purchased from us." },
                                { title: "Technical Data", desc: "Includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start bg-gray-50 p-4 rounded-xl border border-gray-100">
                                    <div className="w-2 h-2 rounded-full bg-red-600 mt-2.5 shrink-0" />
                                    <div>
                                        <strong className="text-gray-900 block mb-1">{item.title}</strong>
                                        <span className="text-gray-500 text-sm">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div id="data-usage" className="mb-12 scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. How We Use Your Data</h2>
                        <p className="mb-6 leading-relaxed">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul className="space-y-3 pl-6 list-disc marker:text-red-500">
                            <li>To register you as a new customer.</li>
                            <li>To process and deliver your order including: Manage payments, fees and charges; Collect and recover money owed to us.</li>
                            <li>To manage our relationship with you which will include: Notifying you about changes to our terms or privacy policy; Asking you to leave a review or take a survey.</li>
                        </ul>
                    </div>

                    <div id="security" className="mb-12 scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
                        <p className="leading-relaxed">
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                        </p>
                    </div>

                    <div id="rights" className="mb-12 scroll-mt-32">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Your Legal Rights</h2>
                        <p className="mb-6 leading-relaxed">
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data. You have the right to:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Request access to your personal data",
                                "Request correction of your personal data",
                                "Request erasure of your personal data",
                                "Object to processing of your personal data",
                                "Request restriction of processing",
                                "Request transfer of your personal data",
                                "Right to withdraw consent"
                            ].map((right, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                    <span className="font-medium text-gray-700">{right}</span>
                                </div>
                            ))}
                        </div>
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

export default PrivacyPage;
