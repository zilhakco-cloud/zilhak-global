import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";
import { CustomCursor } from "@/components/CustomCursor";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zilhakglobal.com/#organization",
      name: "Zilhak Global Associates",
      url: "https://zilhakglobal.com",
      description: "FBR-registered AI & technology company building intelligent solutions for businesses across Pakistan and beyond.",
      foundingDate: "2024",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 150 },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sargodha",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      sameAs: [
        "https://github.com/zilhak-global",
        "https://linkedin.com/company/zilhak-global",
        "https://twitter.com/zilhakglobal",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://zilhakglobal.com/#localbusiness",
      name: "Zilhak Global Associates",
      image: "https://zilhakglobal.com/og-image.png",
      url: "https://zilhakglobal.com",
      telephone: "",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sargodha",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      priceRange: "$$",
      openingHours: "Mo-Fr 09:00-18:00",
    },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Zilhak Global Associates — AI & Tech Company Pakistan",
    template: "%s | Zilhak Global Associates",
  },
  description:
    "AI solutions, app development, and agentic systems by Zilhak Global Associates. Powered by DigiNext Society — 150+ trained AI builders from Superior University Sargodha.",
  keywords: [
    "AI development company Pakistan",
    "app development Sargodha",
    "agentic AI",
    "Zilhak Global",
    "DigiNext Society",
    "AI chatbot development Pakistan",
    "SEO agency Pakistan",
    "agentic AI company Pakistan",
    "startup tech company Pakistan",
    "DigiNext Society Superior University",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Zilhak Global Associates",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-body bg-z-bg-base text-z-text-primary antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>
          <CustomCursor />
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
