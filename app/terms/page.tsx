import React from "react";
import PageHero from "@/components/shared/PageHero";
import { images } from "@/constant";

const TermsPage = () => {
  return (
    <main>
      <PageHero image={images.abouthero} title="Terms of Service" />
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">1. Introduction</h2>
            <p className="mb-6">
              Welcome to Oga Mechanic. By using our website and services, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully. If you do not agree to these terms, you should not use this site or our services.
            </p>

            <h2 className="text-3xl font-bold mb-6">2. Acceptance of Agreement</h2>
            <p className="mb-6">
              You agree to the terms and conditions outlined in this Terms of Service Agreement ("Agreement") with respect to our site (the "Site"). This Agreement constitutes the entire and only agreement between us and you, and supersedes all prior or contemporaneous agreements, representations, warranties and understandings with respect to the Site, the content, products or services provided by or through the Site, and the subject matter of this Agreement.
            </p>

            <h2 className="text-3xl font-bold mb-6">3. Service Description</h2>
            <p className="mb-6">
              Oga Mechanic provides a platform connecting vehicle owners with mechanics, drivers, and other automotive service providers. We act as an intermediary and are not responsible for the direct actions of third-party service providers, though we strive to maintain high standards of quality and reliability.
            </p>

            <h2 className="text-3xl font-bold mb-6">4. User Responsibilities</h2>
            <p className="mb-6">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 font-medium">
                <li>Provide accurate and up-to-date information during registration and service requests.</li>
                <li>Maintain the confidentiality of your account credentials.</li>
                <li>Respect the rights and property of Oga Mechanic and its service providers.</li>
                <li>Use the service only for lawful purposes.</li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">5. Limitation of Liability</h2>
            <p className="mb-6">
              In no event will Oga Mechanic be liable for any incidental, indirect, consequential or special damages of any kind, or any damages whatsoever, including, without limitation, those resulting from loss of profit, loss of contracts, goodwill, data, information, income, anticipated savings or business relationships, whether or not advised of the possibility of such damage, arising out of or in connection with the use of this website or any linked websites.
            </p>

            <h2 className="text-3xl font-bold mb-6">6. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to change these Terms of Service at any time. Address the "Last Updated" date at the bottom of this page to see when the Agreement was last revised. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
            
            <p className="text-sm text-gray-500 mt-12 bg-gray-50 p-4 rounded-xl border border-gray-100">
                Last Updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;
