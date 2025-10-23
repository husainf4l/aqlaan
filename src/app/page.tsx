import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
    metadataBase: new URL('http://localhost:3000'),
    title: "AQLAAN - Empowering AI and Automation",
    description: "AQLAAN brings intelligence, scalability, and precision to your business through data-driven solutions.",
    keywords: ["AI", "automation", "machine learning", "data labeling", "enterprise solutions"],
    authors: [{ name: "AQLAAN Team" }],
    openGraph: {
        title: "AQLAAN - Empowering AI and Automation",
        description: "Transform your business with cutting-edge AI and automation solutions.",
        url: "https://aqlaan.com",
        siteName: "AQLAAN",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "AQLAAN - AI and Automation",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AQLAAN - Empowering AI and Automation",
        description: "Transform your business with cutting-edge AI and automation solutions.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function HomePage() {
  return <HomeClient />;
}
