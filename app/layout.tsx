import type { Metadata, Viewport } from "next";
import { Fira_Sans, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import SmoothScroller from "@/components/layout/SmoothScroller";
import BackToTop from "@/components/ui/BackToTop";
import { icons } from "@/constant";
import ChatWidget from "@/components/ui/ChatWidget";
import JsonLd from "@/components/seo/JsonLd";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-fira-sans",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ogamechanic.org"),
  title: {
    default: "Oga Mechanic Global - Your Ultimate Auto Hub",
    template: "%s | Oga Mechanic Global"
  },
  description: "The complete automobile experience in Nigeria. Buy & sell cars, find expert mechanics, book rides, rent vehicles, and get 24/7 towing services.",
  keywords: ["mechanic", "auto repair", "buy cars", "sell cars", "ride booking", "nigeria", "auto parts", "car rental", "towing service", "vehicle maintenance"],
  authors: [{ name: "Oga Mechanic Team" }],
  creator: "Oga Mechanic Global",
  publisher: "Oga Mechanic Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Oga Mechanic Global - Your Ultimate Auto Hub",
    description: "The complete automobile experience. Buy & sell cars, find expert mechanics, rental, gas supply, and book rides.",
    url: "https://ogamechanic.org",
    siteName: "Oga Mechanic Global",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", // Start serving this dynamically if needed, or put a static file in public
        width: 1200,
        height: 630,
        alt: "Oga Mechanic Global - Your Ultimate Auto Hub",
      },
      {
        url: icons.logo.src,
        width: 800,
        height: 600,
        alt: "Oga Mechanic Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oga Mechanic Global - Your Ultimate Auto Hub",
    description: "The complete automobile experience. Buy & sell cars, find expert mechanics, rental, gas supply, and book rides.",
    site: "@ogamechanic", // Update with actual handle if available
    creator: "@ogamechanic",
    images: [icons.logo.src], // Ideally use a large landscape image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://ogamechanic.org",
  },
  category: "automotive",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#D10000", // Updated to match brand red
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} ${geist.variable} antialiased font-sans`}
      >
        <Providers>
          <SmoothScroller>
            <Header />
            {children}
            <JsonLd />
            {/* <TawkTo /> */}
            {/* <ChatWidget /> */}
            <Toaster position="top-center" reverseOrder={false} />
            <BackToTop />
          </SmoothScroller>
        </Providers>
      </body>
    </html>
  );
}
