import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollReset from "@/components/ScrollReset";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Aqlaan - Middle East Enterprise AI Intelligence",
    template: "%s | Aqlaan - AI Intelligence",
  },
  description:
    "Aqlaan engineers scalable AI solutions using advanced frameworks like LangGraph, PyTorch, and OpenCV to automate, optimize, and empower Middle East businesses with enterprise-grade artificial intelligence.",
  keywords: [
    "AI solutions",
    "artificial intelligence",
    "Middle East AI",
    "enterprise AI",
    "machine learning",
    "LangGraph",
    "PyTorch",
    "OpenCV",
    "Microsoft AI",
    "Google AI",
    "LangChain",
    "TensorFlow",
    "AI automation",
    "AI optimization",
    "computer vision",
    "deep learning",
    "AI frameworks",
    "business intelligence",
    "scalable AI",
  ],
  authors: [{ name: "Aqlaan" }],
  creator: "Aqlaan",
  publisher: "Aqlaan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aqlaan.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aqlaan - Middle East Enterprise AI Intelligence",
    description:
      "Engineering scalable AI solutions with advanced frameworks to automate, optimize, and empower modern businesses across the Middle East.",
    url: "https://aqlaan.com",
    siteName: "Aqlaan",
    images: [
      {
        url: "/aqlaan-logo.webp",
        width: 1200,
        height: 630,
        alt: "Aqlaan - AI Intelligence Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqlaan - Middle East Enterprise AI Intelligence",
    description:
      "Engineering scalable AI solutions with advanced frameworks to automate, optimize, and empower modern businesses.",
    images: ["/aqlaan-logo.webp"],
    creator: "@aqlaan",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aqlaan",
    description: "Middle East Enterprise AI Intelligence solutions provider",
    url: "https://aqlaan.com",
    logo: "https://aqlaan.com/aqlaan-logo.webp",
    sameAs: [
      "https://twitter.com/aqlaan",
      "https://linkedin.com/company/aqlaan",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: ["AE", "SA", "EG", "JO", "LB", "KW", "QA", "BH", "OM"],
      availableLanguage: ["English", "Arabic"],
    },
    service: {
      "@type": "Service",
      name: "AI Solutions",
      description:
        "Enterprise-grade artificial intelligence solutions using advanced frameworks",
      provider: {
        "@type": "Organization",
        name: "Aqlaan",
      },
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://aqlaan.com" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.history.scrollRestoration = 'manual';
                window.addEventListener('beforeunload', function() {
                  window.scrollTo(0, 0);
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased font-sans`}>
        <ScrollReset />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
