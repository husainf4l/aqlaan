"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  slug: string;
}

const samplePosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Enterprise AI: Multi-Agent Systems in Production",
    excerpt: "Explore how multi-agent AI systems are revolutionizing enterprise automation, from autonomous workflows to intelligent decision-making processes.",
    content: "Full blog content here...",
    author: "Dr. Sarah Ahmed",
    publishedAt: "2024-12-15",
    readTime: "8 min read",
    category: "Enterprise AI",
    tags: ["Multi-Agent", "Automation", "LangGraph", "Production"],
    imageUrl: "/blog.jpg",
    slug: "future-enterprise-ai-multi-agent-systems"
  },
  {
    id: "2",
    title: "Implementing Privacy-First AI in Financial Services",
    excerpt: "Learn how financial institutions are deploying secure AI solutions while maintaining regulatory compliance and data privacy standards.",
    content: "Full blog content here...",
    author: "Omar Hassan",
    publishedAt: "2024-12-10",
    readTime: "12 min read",
    category: "Financial AI",
    tags: ["Privacy", "FinTech", "Compliance", "Security"],
    imageUrl: "/blog.jpg",
    slug: "privacy-first-ai-financial-services"
  },
  {
    id: "3",
    title: "Computer Vision Breakthroughs: Real-World Applications",
    excerpt: "Discover the latest advances in computer vision technology and their practical implementations across industries from healthcare to manufacturing.",
    content: "Full blog content here...",
    author: "Amira Khalil",
    publishedAt: "2024-12-05",
    readTime: "10 min read",
    category: "Computer Vision",
    tags: ["OpenCV", "Healthcare", "Manufacturing", "Deep Learning"],
    imageUrl: "/blog.jpg",
    slug: "computer-vision-breakthroughs-applications"
  },
  {
    id: "4",
    title: "AI Governance in the Middle East: Best Practices Guide",
    excerpt: "A comprehensive guide to implementing AI governance frameworks that align with Middle Eastern regulatory requirements and cultural considerations.",
    content: "Full blog content here...",
    author: "Dr. Khalid Al-Rashid",
    publishedAt: "2024-11-28",
    readTime: "15 min read",
    category: "AI Governance",
    tags: ["Governance", "Middle East", "Regulation", "Ethics"],
    imageUrl: "/blog.jpg",
    slug: "ai-governance-middle-east-best-practices"
  },
  {
    id: "5",
    title: "Scaling PyTorch Models for Enterprise Production",
    excerpt: "Technical deep-dive into optimizing PyTorch models for enterprise-scale deployment, covering performance tuning and infrastructure considerations.",
    content: "Full blog content here...",
    author: "Hassan Al-Mahmoud",
    publishedAt: "2024-11-20",
    readTime: "18 min read",
    category: "Technical",
    tags: ["PyTorch", "Scaling", "Performance", "Infrastructure"],
    imageUrl: "/blog.jpg",
    slug: "scaling-pytorch-models-enterprise-production"
  },
  {
    id: "6",
    title: "The ROI of AI Implementation: Case Studies from MENA",
    excerpt: "Real-world case studies showcasing measurable returns on AI investments across various industries in the Middle East and North Africa region.",
    content: "Full blog content here...",
    author: "Layla Mostafa",
    publishedAt: "2024-11-15",
    readTime: "14 min read",
    category: "Business Intelligence",
    tags: ["ROI", "Case Studies", "MENA", "Business Value"],
    imageUrl: "/blog.jpg",
    slug: "roi-ai-implementation-case-studies-mena"
  }
];

const categories = ["All", "Enterprise AI", "Financial AI", "Computer Vision", "AI Governance", "Technical", "Business Intelligence"];

export default function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = samplePosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <div className="mb-16 space-y-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search articles, topics, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/[0.05] border border-white/[0.1] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-white/[0.2] transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-red-500 to-purple-600 text-white"
                    : "bg-white/[0.05] text-gray-300 hover:bg-white/[0.1] hover:text-white border border-white/[0.1]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-400 text-center">
            {filteredPosts.length === samplePosts.length
              ? `${filteredPosts.length} articles`
              : `${filteredPosts.length} articles found`}
            {searchQuery && ` for "${searchQuery}"`}
          </p>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <svg
                className="w-16 h-16 text-gray-600 mb-4 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-400">
                Try adjusting your search terms or filters to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-6 py-2 bg-white/[0.05] border border-white/[0.1] rounded-lg text-gray-300 hover:bg-white/[0.1] hover:text-white transition-all duration-300"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredPosts.length > 0 && (
          <div className="text-center mt-16">
            <button className="px-8 py-4 bg-white/[0.05] border border-white/[0.1] rounded-xl text-gray-300 hover:bg-white/[0.1] hover:text-white transition-all duration-300 font-medium">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}