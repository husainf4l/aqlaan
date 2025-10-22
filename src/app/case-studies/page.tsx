import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Case Studies | AQLAAN",
  description: "Explore real-world AI implementations and success stories from organizations transforming their businesses with AQLAAN solutions.",
};

export default function CaseStudiesPage() {
  const featuredCase = {
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Manual quality inspection causing 15% defect rate and delayed deliveries",
    solution: "AI-powered computer vision system for real-time quality control",
    results: [
      { metric: "85%", label: "Reduction in defects" },
      { metric: "60%", label: "Faster inspection time" },
      { metric: "$2.5M", label: "Annual cost savings" },
      { metric: "99.2%", label: "Product quality" },
    ],
    quote: "AQLAAN's AI solution transformed our quality control process. We're now catching defects that human inspectors missed while reducing inspection time by 60%.",
    author: "Jennifer Martinez, Quality Director",
    image: "🏭",
  };

  const caseStudies = [
    {
      company: "MediHealth Systems",
      industry: "Healthcare",
      challenge: "Radiology backlog causing 3-week delays in diagnosis",
      solution: "AI-assisted medical imaging analysis and prioritization",
      results: ["70% faster diagnosis", "40% reduced workload", "$1.8M annual savings"],
      image: "HEALTH",
    },
    {
      company: "RetailFlow Inc",
      industry: "Retail",
      challenge: "High shrinkage and poor inventory management",
      solution: "Computer vision for loss prevention and automated inventory",
      results: ["65% reduction in shrinkage", "30% inventory accuracy", "25% operational efficiency"],
      image: "SHOP",
    },
    {
      company: "LogiChain Solutions",
      industry: "Logistics",
      challenge: "Inefficient route optimization and delivery delays",
      solution: "AI-powered route optimization and predictive maintenance",
      results: ["40% fuel savings", "25% faster deliveries", "50% maintenance cost reduction"],
      image: "🚚",
    },
    {
      company: "FinServe Bank",
      industry: "Financial Services",
      challenge: "Manual document processing and compliance checks",
      solution: "Intelligent document processing and automated compliance",
      results: ["80% faster processing", "99.5% accuracy", "60% cost reduction"],
      image: "BANK",
    },
    {
      company: "AgriTech Farms",
      industry: "Agriculture",
      challenge: "Inefficient crop monitoring and resource management",
      solution: "AI-powered crop analysis and precision agriculture",
      results: ["35% yield increase", "40% water savings", "25% reduced chemical use"],
      image: "FARM",
    },
    {
      company: "SmartCity Infrastructure",
      industry: "Government",
      challenge: "Traffic congestion and poor urban planning",
      solution: "AI traffic management and smart city optimization",
      results: ["30% reduced congestion", "20% energy savings", "15% improved air quality"],
      image: "🏙️",
    },
  ];

  const industries = [
    { name: "Healthcare", count: 12, icon: "HEALTH" },
    { name: "Manufacturing", count: 18, icon: "🏭" },
    { name: "Retail", count: 15, icon: "SHOP" },
    { name: "Financial Services", count: 10, icon: "BANK" },
    { name: "Logistics", count: 8, icon: "🚚" },
    { name: "Agriculture", count: 6, icon: "FARM" },
    { name: "Government", count: 9, icon: "CAPITOL" },
    { name: "Technology", count: 14, icon: "COMPUTER" },
  ];

  const metrics = [
    { value: "500+", label: "Successful Implementations" },
    { value: "$2.5B", label: "Client Value Generated" },
    { value: "99.5%", label: "Average Solution Accuracy" },
    { value: "40%", label: "Average Efficiency Gain" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Case Studies
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Real results from real implementations. Discover how organizations across industries
                are transforming their operations and achieving breakthrough outcomes with AQLAAN AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Browse by Industry
                </Button>
                <Button variant="outline">Download Case Study</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-gray-400 text-lg">
                Quantifiable impact across hundreds of AI implementations.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <FadeIn key={metric.label} delay={index * 0.1}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold text-blue-400 mb-2">{metric.value}</div>
                  <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                    {metric.label}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Featured Success Story</h2>
              <p className="text-gray-400 text-lg">
                In-depth look at a transformative AI implementation.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <Card className="group hover:scale-105 transition-transform duration-300">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="text-6xl mb-6">{featuredCase.image}</div>
                  <div className="bg-blue-900/20 rounded-lg p-4 mb-6">
                    <div className="text-blue-400 text-sm font-semibold mb-1">{featuredCase.industry}</div>
                    <div className="text-xl font-bold">{featuredCase.company}</div>
                  </div>
                  <blockquote className="text-gray-300 italic mb-4">
                    &quot;{featuredCase.quote}&quot;
                  </blockquote>
                  <div className="text-gray-400 text-sm">- {featuredCase.author}</div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Challenge</h3>
                  <p className="text-gray-400 mb-6">{featuredCase.challenge}</p>

                  <h3 className="text-xl font-semibold mb-4">Solution</h3>
                  <p className="text-gray-400 mb-6">{featuredCase.solution}</p>

                  <h3 className="text-xl font-semibold mb-4">Key Results</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {featuredCase.results.map((result) => (
                      <div key={result.label} className="bg-gray-800/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-400">{result.metric}</div>
                        <div className="text-sm text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Industries Filter */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Browse by Industry</h2>
              <p className="text-gray-400 text-lg">
                Find case studies relevant to your industry.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
            {industries.map((industry, index) => (
              <FadeIn key={industry.name} delay={index * 0.05}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="text-3xl mb-2">{industry.icon}</div>
                  <div className="font-semibold group-hover:text-blue-400 transition-colors text-sm">
                    {industry.name}
                  </div>
                  <div className="text-gray-500 text-xs">{industry.count} studies</div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-400 text-lg">
                Real-world implementations delivering measurable business impact.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.company} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="text-4xl mb-4">{study.image}</div>
                  <div className="bg-blue-900/20 rounded-lg p-3 mb-4">
                    <div className="text-blue-400 text-sm font-semibold">{study.industry}</div>
                    <div className="text-lg font-bold">{study.company}</div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    Challenge
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{study.challenge}</p>
                  <h4 className="text-md font-semibold mb-2">Solution & Results</h4>
                  <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
                  <div className="space-y-2">
                    {study.results.map((result) => (
                      <div key={result} className="text-sm text-green-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {result}
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}