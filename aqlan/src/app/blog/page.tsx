import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogList from "@/components/blog/BlogList";

export const metadata: Metadata = {
  title: "AI Insights & Industry Blog",
  description:
    "Stay updated with the latest AI trends, enterprise solutions, and industry insights from AQLAAN's team of AI experts and engineers.",
  keywords: [
    "AI blog",
    "artificial intelligence insights",
    "enterprise AI trends",
    "machine learning articles",
    "AI implementation",
    "technology insights",
    "AI case studies",
    "industry analysis",
    "AI best practices",
    "Middle East AI",
  ],
  openGraph: {
    title: "AI Insights & Industry Blog | AQLAAN",
    description:
      "Discover the latest AI trends, enterprise solutions, and industry insights from AQLAAN's team of experts.",
    url: "https://aqlaan.com/blog",
    siteName: "AQLAAN",
    images: [
      {
        url: "/blog-og.webp",
        width: 1200,
        height: 630,
        alt: "AQLAAN AI Blog - Insights & Trends",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Insights & Industry Blog | AQLAAN",
    description:
      "Discover the latest AI trends and enterprise solutions from AQLAAN's experts.",
    images: ["/blog-og.webp"],
  },
};

export default function BlogPage() {
  return (
    <main className="pt-16">
      <BlogHero />
      <BlogList />
    </main>
  );
}