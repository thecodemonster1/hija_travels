import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/layout/SplashScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Hija Travels - Premium Sri Lanka Tours",
  description:
    "Experience authentic Sri Lanka with a professional local guide. Personalized tours for individuals and families.",
  keywords: "Sri Lanka tours, travel guide, tourism, vacation, custom tours",
  openGraph: {
    title: "Hija Travels - Premium Sri Lanka Tours",
    description:
      "Experience authentic Sri Lanka with a professional local guide",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <SplashScreen />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
