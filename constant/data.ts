import { Mail, MapPin, Phone } from "lucide-react";
export const email = "info@ogamechanic.ng";
export const phone = "+234 (01) 462 37827";
export const phone2 = "+234 (0) 803 528 3267";
export const address = "29 Berkley Street, Lagos Island, Lagos.";

export const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/ogamechanic", icon: "Facebook" },
    { label: "Twitter", href: "https://twitter.com/ogamechanic", icon: "Twitter" },
    { label: "Instagram", href: "https://www.instagram.com/ogamechanic", icon: "Instagram" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/ogamechanic", icon: "LinkedIn" }
];

export const contactData = [
    {
        icon: Mail,
        title: "Email",
        description: "Our friendly team is here to help.",
        links: [
            { label: email, href: "mailto:" + email }
        ]
    },
    {
        icon: MapPin,
        title: "Office",
        description: "Come say hello at our office HQ.",
        text: address
    },
    {
        icon: Phone,
        title: "Phone",
        description: "Mon-Fri from 8am to 5pm.",
        links: [
            { label: phone, href: "tel:" + phone },
            { label: phone2, href: "tel:" + phone2 }
        ]
    }
];

export const faqData = [
    {
        question: "What business sectors has Oga Mechanic built for?",
        answer: "Oga Mechanic caters to a wide range of sectors including private vehicle owners, corporate fleets, logistics companies, and auto-dealerships. Our platform is designed to streamline auto care for anyone who needs reliable mechanic services."
    },
    {
        question: "How do I book a service?",
        answer: "Booking is easy! Simply download our mobile app, sign up, and choose the service you need. You can schedule a repair, maintenance, or inspection at your convenience."
    },
    {
        question: "Is there a warranty on repairs?",
        answer: "Yes, we offer a warranty on all repairs carried out through our verified mechanics. The specific terms depend on the type of service and parts used, but we ensure quality and peace of mind."
    },
    {
        question: "Can I track my vehicle repair status?",
        answer: "Absolutely. Our app provides real-time updates on your vehicle's repair status, from pick-up to diagnosis and completion."
    },
    {
        question: "Do you offer emergency roadside assistance?",
        answer: "Yes, Oga Mechanic offers 24/7 emergency roadside assistance for breakdowns, flat tires, battery jumps, and more."
    }
];
