import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Blog | AQLAAN",
  description: "Stay updated with the latest AI trends, insights, and innovations from AQLAAN's team of AI experts and researchers.",
};

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Enterprise AI: Trends Shaping 2024",
    excerpt: "Explore the transformative trends that are reshaping how businesses leverage artificial intelligence for competitive advantage.",
    author: "Dr. Sarah Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI Trends",
    image: "LAUNCH",
  };

  const categories = [
    { name: "AI Trends", count: 24, color: "bg-blue-500" },
    { name: "Machine Learning", count: 18, color: "bg-green-500" },
    { name: "Computer Vision", count: 15, color: "bg-purple-500" },
    { name: "Natural Language Processing", count: 12, color: "bg-orange-500" },
    { name: "Enterprise AI", count: 20, color: "bg-red-500" },
    { name: "Case Studies", count: 16, color: "bg-cyan-500" },
  ];

  const recentPosts = [
    {
      title: "Building Scalable AI Infrastructure: Best Practices",
      excerpt: "Learn how to design and implement AI systems that can handle enterprise-scale workloads.",
      author: "Michael Rodriguez",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Infrastructure",
      image: "BUILD",
    },
    {
      title: "Computer Vision in Manufacturing: Quality Control Revolution",
      excerpt: "How AI-powered visual inspection is transforming manufacturing quality assurance.",
      author: "Emma Thompson",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Computer Vision",
      image: "SEARCH",
    },
    {
      title: "The Ethics of AI: Balancing Innovation and Responsibility",
      excerpt: "Exploring the ethical considerations in AI development and deployment.",
      author: "Dr. James Wilson",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "AI Ethics",
      image: "BALANCE",
    },
    {
      title: "NLP Breakthroughs: Understanding Context Like Humans",
      excerpt: "Recent advances in natural language processing that bring us closer to human-like understanding.",
      author: "Lisa Park",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "NLP",
      image: "CHAT",
    },
    {
      title: "Healthcare AI: From Diagnosis to Personalized Treatment",
      excerpt: "How AI is revolutionizing healthcare delivery and patient outcomes.",
      author: "Dr. Robert Chen",
      date: "December 3, 2024",
      readTime: "9 min read",
      category: "Healthcare",
      image: "HEALTH",
    },
    {
      title: "Edge AI: Bringing Intelligence to IoT Devices",
      excerpt: "The rise of edge computing and its impact on IoT and real-time AI applications.",
      author: "Alex Kumar",
      date: "December 1, 2024",
      readTime: "5 min read",
      category: "Edge Computing",
      image: "SIGNAL",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                AI Insights Blog
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Deep dives into artificial intelligence, machine learning, and the future of technology.
                Expert analysis, research insights, and practical applications from AQLAAN&apos;s team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Latest Articles
                </Button>
                <Button variant="outline">Subscribe to Newsletter</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
            </div>
          </FadeIn>

          <FadeIn>
            <Card className="group hover:scale-105 transition-transform duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-6xl mb-6 md:mb-0">{featuredPost.image}</div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{featuredPost.author}</div>
                      <div className="text-sm text-gray-500">{featuredPost.date}</div>
                    </div>
                    <Button>Read Article</Button>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore by Category</h2>
              <p className="text-gray-400">Find articles that match your interests</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <FadeIn key={category.name} delay={index * 0.1}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-lg">{category.count}</span>
                  </div>
                  <h3 className="font-semibold group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Recent Articles</h2>
              <p className="text-gray-400">Stay updated with our latest insights and research</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <FadeIn key={post.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="text-4xl mb-4">{post.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div>
                      <div className="font-medium">{post.author}</div>
                      <div className="text-gray-500">{post.date}</div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="text-center mt-12">
              <Button variant="outline" className="px-8 py-3">
                Load More Articles
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>


    </div>
  );
}