import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Press & Media | AQLAAN",
  description: "Latest news, press releases, and media coverage about AQLAAN's AI innovations and company milestones.",
};

export default function PressPage() {
  const pressReleases = [
    {
      title: "AQLAAN Raises $150M Series C to Accelerate Enterprise AI Adoption",
      date: "December 20, 2024",
      summary: "Leading AI platform company secures major funding to expand global operations and accelerate product development.",
      outlets: ["TechCrunch", "Reuters", "Bloomberg"],
      type: "Funding",
      image: "MONEY",
    },
    {
      title: "AQLAAN Launches Revolutionary Healthcare AI Suite",
      date: "December 15, 2024",
      summary: "New medical AI platform combines diagnostic accuracy with clinical workflow optimization.",
      outlets: ["Healthcare IT News", "MedTech", "AI in Healthcare"],
      type: "Product Launch",
      image: "HEALTH",
    },
    {
      title: "AQLAAN Partners with Fortune 500 Companies for AI Transformation",
      date: "December 10, 2024",
      summary: "Strategic partnerships announced with leading enterprises to implement large-scale AI solutions.",
      outlets: ["Forbes", "Wall Street Journal", "CNBC"],
      type: "Partnership",
      image: "PARTNERSHIP",
    },
    {
      title: "AQLAAN Achieves SOC 2 Type II Compliance",
      date: "December 5, 2024",
      summary: "Independent audit confirms AQLAAN's enterprise-grade security and compliance standards.",
      outlets: ["Security Magazine", "Compliance Weekly", "Tech Security"],
      type: "Compliance",
      image: "SECURE",
    },
    {
      title: "AQLAAN Opens New Global Headquarters in San Francisco",
      date: "November 28, 2024",
      summary: "State-of-the-art facility designed to foster innovation and collaboration in AI development.",
      outlets: ["Silicon Valley Business", "SF Business Times", "Tech Hub"],
      type: "Company News",
      image: "CORP",
    },
    {
      title: "AQLAAN Named Leader in Gartner Magic Quadrant for AI Platforms",
      date: "November 20, 2024",
      summary: "Recognition for AQLAAN's comprehensive AI platform capabilities and market vision.",
      outlets: ["Gartner", "AI Today", "Enterprise Tech"],
      type: "Award",
      image: "AWARD",
    },
  ];

  const mediaCoverage = [
    {
      title: "How AQLAAN is Democratizing Enterprise AI",
      outlet: "Forbes",
      date: "December 18, 2024",
      author: "Sarah Chen",
      excerpt: "AQLAAN's platform approach is making sophisticated AI accessible to businesses of all sizes.",
      type: "Feature",
    },
    {
      title: "The AI Revolution in Healthcare: AQLAAN's Breakthrough",
      outlet: "The New York Times",
      date: "December 12, 2024",
      author: "Dr. Michael Rodriguez",
      excerpt: "Medical professionals weigh in on how AI is transforming patient care and diagnostics.",
      type: "In-depth",
    },
    {
      title: "AQLAAN's $150M Raise Signals AI Market Maturity",
      outlet: "TechCrunch",
      date: "December 8, 2024",
      author: "Alex Thompson",
      excerpt: "Investment round reflects growing confidence in enterprise AI solutions.",
      type: "Analysis",
    },
    {
      title: "Inside AQLAAN's AI Ethics Framework",
      outlet: "Wired",
      date: "December 1, 2024",
      author: "Lisa Park",
      excerpt: "How the company balances innovation with responsible AI development.",
      type: "Investigation",
    },
  ];

  const pressKit = {
    logo: "Brand assets and logo guidelines",
    photos: "Executive headshots and office images",
    factsheet: "Company overview and key statistics",
    bios: "Executive and founder biographies",
    videos: "Product demos and company videos",
    presentations: "Investor and product presentations",
  };

  const stats = [
    { value: "500+", label: "Media Mentions" },
    { value: "50+", label: "Countries Covered" },
    { value: "25+", label: "Press Releases" },
    { value: "15+", label: "Awards & Recognition" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Press & Media
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Stay updated with the latest news, announcements, and insights from AQLAAN.
                Access press releases, media coverage, and press kit materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Latest Press Releases
                </Button>
                <Button variant="outline">Download Press Kit</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Media Impact</h2>
              <p className="text-gray-400 text-lg">
                AQLAAN&apos;s presence in global media and industry recognition.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                    {stat.label}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Press Releases</h2>
              <p className="text-gray-400 text-lg">
                Official announcements and company news.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <FadeIn key={release.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{release.image}</div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-900/50 text-blue-400 text-xs px-2 py-1 rounded">
                      {release.type}
                    </span>
                    <span className="text-gray-500 text-sm">{release.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {release.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{release.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {release.outlets.map((outlet) => (
                      <span key={outlet} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                        {outlet}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">Read Full Release</Button>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Media Coverage</h2>
              <p className="text-gray-400 text-lg">
                Featured articles and analysis from leading publications.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {mediaCoverage.map((article, index) => (
              <FadeIn key={article.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="bg-green-900/50 text-green-400 text-sm px-3 py-1 rounded">
                        {article.type}
                      </span>
                      <span className="text-gray-500 text-sm">{article.outlet}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 mb-3">{article.excerpt}</p>
                  <div className="text-sm text-gray-500">By {article.author}</div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Press Kit</h2>
              <p className="text-gray-400 text-lg">
                Download brand assets, company information, and media resources.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(pressKit).map(([key, value], index) => (
              <FadeIn key={key} delay={index * 0.1}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="text-4xl mb-4">
                    {key === 'logo' ? 'DESIGN' :
                     key === 'photos' ? 'PHOTO' :
                     key === 'factsheet' ? 'DOC' :
                     key === 'bios' ? 'PERSON' :
                     key === 'videos' ? 'MOVIE' : 'DATA'}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 capitalize group-hover:text-blue-400 transition-colors">
                    {key}
                  </h3>
                  <p className="text-gray-400 text-sm">{value}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>




    </div>
  );
}