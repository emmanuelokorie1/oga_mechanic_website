import type { Metadata } from "next";
import { Fira_Sans, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Providers from "./providers";
import { Toaster } from "react-hot-toast";

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
          <Header />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </Providers>
      </body>
    </html>
  );
}
