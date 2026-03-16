import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wave — Discover People Nearby",
  description:
    "Wave uses Bluetooth to discover people around you. Wave at someone — if they wave back, you match and see each other's socials. No profiles, no swiping, just real-world connections.",
  keywords: [
    "wave",
    "nearby",
    "bluetooth",
    "social",
    "meet people",
    "proximity",
    "discover",
    "match",
    "real world",
  ],
  openGraph: {
    title: "Wave — Discover People Nearby",
    description:
      "Wave at people around you. If they wave back, you match and see each other's socials.",
    type: "website",
    locale: "en_US",
    siteName: "Wave",
    images: [{ url: "/app-icon.png", width: 512, height: 512, alt: "Wave app icon" }],
  },
  twitter: {
    card: "summary",
    title: "Wave — Discover People Nearby",
    description:
      "Wave at people around you. If they wave back, you match and see each other's socials.",
    images: ["/app-icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
