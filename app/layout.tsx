import type { Metadata } from "next";
import { Fira_Sans, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";
import SmoothScroller from "@/components/layout/SmoothScroller";
import BackToTop from "@/components/ui/BackToTop";

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
  title: "Oga Mechanic - Your Ultimate Auto Hub",
  description: "Buy & sell cars, find expert mechanics, and book rides—all in one place.",
  metadataBase: new URL("https://ogamechanic.ng"), // Assuming this domain, can be updated
  keywords: ["mechanic", "auto repair", "buy cars", "sell cars", "ride booking", "nigeria", "auto parts"],
  authors: [{ name: "Oga Mechanic Team" }],
  openGraph: {
    title: "Oga Mechanic - Your Ultimate Auto Hub",
    description: "The complete automobile experience. Buy & sell cars, find expert mechanics, rental, gas supply, and book rides.",
    url: "https://ogamechanic.ng",
    siteName: "Oga Mechanic",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Needs to be added to public/ or mocked
        width: 1200,
        height: 630,
        alt: "Oga Mechanic - Your Ultimate Auto Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oga Mechanic - Your Ultimate Auto Hub",
    description: "The complete automobile experience. Buy & sell cars, find expert mechanics, rental, gas supply, and book rides.",
    images: ["/og-image.jpg"], // Needs to be added to public/ or mocked
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
            <Toaster position="top-center" reverseOrder={false} />
            <BackToTop />
          </SmoothScroller>
        </Providers>
      </body>
    </html>
  );
}
