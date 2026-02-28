import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Terminované vklady | Kalkulačka a srovnání 2025",
    template: "%s | terminované-vklady.cz",
  },
  description:
    "Spočítejte výnosy terminovaného vkladu, porovnejte nabídky bank a dozvíte se vše o terminovaných vkladech. Nezávislý informační portál.",
  keywords: ["terminovaný vklad", "terminované vklady", "kalkulačka úroků", "spořicí účet", "úrokové sazby bank"],
  openGraph: {
    siteName: "terminované-vklady.cz",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
