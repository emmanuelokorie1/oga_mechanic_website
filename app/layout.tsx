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
  title: "Oga Mechanic Global - Your Ultimate Auto Hub",
  description: "Buy & sell cars, find expert mechanics, and book rides—all in one place.",
  metadataBase: new URL("https://ogamechanic.org"), // Assuming this domain, can be updated
  keywords: ["mechanic", "auto repair", "buy cars", "sell cars", "ride booking", "nigeria", "auto parts"],
  authors: [{ name: "Oga Mechanic Team" }],
  openGraph: {
    title: "Oga Mechanic Global - Your Ultimate Auto Hub",
    description: "The complete automobile experience. Buy & sell cars, find expert mechanics, rental, gas supply, and book rides.",
    url: "https://ogamechanic.org",
    siteName: "Oga Mechanic Global",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: icons.logo.src,
        width: 1200,
        height: 630,
        alt: "Oga Mechanic Global - Your Ultimate Auto Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oga Mechanic Global - Your Ultimate Auto Hub",
    description: "The complete automobile experience. Buy & sell cars, find expert mechanics, rental, gas supply, and book rides.",
    images: [icons.logo.src, icons.logo1.src, icons.logo2.src],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#B70207",
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
