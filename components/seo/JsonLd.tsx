import Script from 'next/script';

const JsonLd = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Oga Mechanic Global",
        "url": "https://ogamechanic.org",
        "logo": "https://ogamechanic.org/logo.png", // Ensure this path is correct or dynamic
        "description": "The complete automobile experience in Nigeria. Buy & sell cars, find expert mechanics, and book rides.",
        "sameAs": [
            "https://facebook.com/ogamechanic", // Update with actual links
            "https://twitter.com/ogamechanic",
            "https://instagram.com/ogamechanic"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+234-800-000-0000", // Update with actual supported number
            "contactType": "Customer Service",
            "areaServed": "NG",
            "availableLanguage": "English"
        }
    };

    return (
        <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
