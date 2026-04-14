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
  title: "Wave. Discover People Nearby",
  description:
    "Wave uses Bluetooth to discover people around you. Wave at someone. If they wave back, you match and see each other's socials. No profiles, no swiping, just real-world connections.",
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
    title: "Wave. Discover People Nearby",
    description:
      "Wave at people around you. If they wave back, you match and see each other's socials.",
    type: "website",
    locale: "en_US",
    siteName: "Wave",
    url: "https://www.wavenearby.com",
    images: [{ url: "/app-icon.png", width: 512, height: 512, alt: "Wave app icon" }],
  },
  twitter: {
    card: "summary",
    title: "Wave. Discover People Nearby",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Wave",
    operatingSystem: "iOS",
    applicationCategory: "SocialNetworkingApplication",
    description:
      "Wave uses Bluetooth to discover people around you. Wave at someone. If they wave back, you match and see each other's socials. No profiles, no swiping, just real-world connections.",
    url: "https://www.wavenearby.com",
    downloadUrl: "https://apps.apple.com/app/id6760919706",
    installUrl: "https://apps.apple.com/app/id6760919706",
    image: "https://www.wavenearby.com/app-icon.png",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "BK Solutions SH.P.K." },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does Wave find people nearby?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wave uses Bluetooth to detect other Wave users nearby. Your phone sends out an anonymous signal that automatically changes every 15 minutes, so you're always untraceable. No GPS or location data is used for discovery.",
        },
      },
      {
        "@type": "Question",
        name: "Is Wave free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Wave is free to download and use. All core features like discovering people, waving, matching, and exchanging socials are completely free.",
        },
      },
      {
        "@type": "Question",
        name: "Can someone see my identity before we match?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Your name, photo, and social handles are completely hidden until both of you wave at each other. Before a mutual wave, all anyone sees is an anonymous dot on their radar.",
        },
      },
      {
        "@type": "Question",
        name: "What happens after we match?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once you match, you can see each other's Instagram and Snapchat handles. Tap to open their profile directly and start a conversation.",
        },
      },
      {
        "@type": "Question",
        name: "Is my location tracked?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Wave uses Bluetooth only. We never track your GPS location. If you opt in to Nearby Alerts, your approximate location is checked once to see if others are nearby, but it's never stored or shared.",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
