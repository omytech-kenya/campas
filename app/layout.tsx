import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CAMPAS - University Innovation & Collaboration Platform",
  description:
    "Connect, collaborate, and innovate with students, researchers, and institutions worldwide. Join competitions, find teammates, and showcase your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} antialiased`}>
        <Navbar />

        {/* Mobile Top Logo - Always visible for navigation and identity on all pages */}
        <div className="lg:hidden bg-background border-b border-border sticky top-0 z-40">
          <div className="container mx-auto px-6 py-3 text-center">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-primary hover:text-accent transition-colors duration-200"
            >
              CAMPAS
            </Link>
          </div>
        </div>

        <main className="lg:pt-16">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
