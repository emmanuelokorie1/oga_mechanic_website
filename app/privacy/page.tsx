import React from "react";
import PageHero from "@/components/shared/PageHero";
import { images } from "@/constant";

const PrivacyPage = () => {
  return (
    <main>
      <PageHero image={images.abouthero} title="Privacy Policy" />
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">1. Introduction</h2>
            <p className="mb-6">
              At Oga Mechanic, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our services and tell you about your privacy rights and how the law protects you.
            </p>

            <h2 className="text-3xl font-bold mb-6">2. Data We Collect</h2>
            <p className="mb-6">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 mb-6 font-medium">
                <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">3. How We Use Your Data</h2>
            <p className="mb-6">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 font-medium">
                <li>To register you as a new customer.</li>
                <li>To process and deliver your order including: Manage payments, fees and charges; Collect and recover money owed to us.</li>
                <li>To manage our relationship with you which will include: Notifying you about changes to our terms or privacy policy; Asking you to leave a review or take a survey.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">4. Data Security</h2>
            <p className="mb-6">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>

            <h2 className="text-3xl font-bold mb-6">5. Your Legal Rights</h2>
            <p className="mb-6">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data. You have the right to:
            </p>
             <ul className="list-disc pl-6 mb-6 font-medium">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
            </ul>

             <p className="text-sm text-gray-500 mt-12 bg-gray-50 p-4 rounded-xl border border-gray-100">
                Last Updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;
