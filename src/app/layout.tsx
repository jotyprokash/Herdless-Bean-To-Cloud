import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Herdless Coffee BD | Specialty Coffee Roasters",
  description: "Premium specialty coffee born for the urban rush. We source the finest beans and roast them right here in Bangladesh.",
  openGraph: {
    title: "Herdless Coffee BD",
    description: "Premium specialty coffee born for the urban rush.",
    siteName: "Herdless Coffee",
    locale: "en_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <Toaster />
      </body>
    </html>
  );
}
