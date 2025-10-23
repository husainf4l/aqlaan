import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Documentation | AQLAAN",
  description: "Comprehensive documentation for AQLAAN AI platform, APIs, SDKs, and integration guides.",
};

export default function DocsPage() {
  const quickStart = [
    {
      title: "Getting Started",
      description: "Quick setup guide for new users",
      time: "5 min",
      difficulty: "Beginner",
      icon: "LAUNCH",
    },
    {
      title: "API Authentication",
      description: "Learn how to authenticate with AQLAAN APIs",
      time: "10 min",
      difficulty: "Beginner",
      icon: "LOCK",
    },
    {
      title: "First AI Model",
      description: "Deploy your first machine learning model",
      time: "15 min",
      difficulty: "Intermediate",
      icon: "MODEL",
    },
  ];

  const apiDocs = [
    {
      name: "Vision API",
      description: "Computer vision capabilities for image analysis and recognition",
      endpoints: 12,
      version: "v2.1",
      status: "Stable",
    },
    {
      name: "Language API",
      description: "Natural language processing for text analysis and generation",
      endpoints: 15,
      version: "v2.0",
      status: "Stable",
    },
    {
      name: "Automation API",
      description: "Workflow automation and business process management",
      endpoints: 8,
      version: "v1.8",
      status: "Stable",
    },
    {
      name: "Analytics API",
      description: "Real-time analytics and insights generation",
      endpoints: 10,
      version: "v1.5",
      status: "Beta",
    },
  ];

  const guides = [
    {
      category: "Integration Guides",
      items: [
        "REST API Integration",
        "SDK Installation",
        "Webhook Configuration",
        "OAuth 2.0 Setup",
        "Custom Model Deployment",
      ],
    },
    {
      category: "Best Practices",
      items: [
        "Performance Optimization",
        "Security Guidelines",
        "Error Handling",
        "Rate Limiting",
        "Data Privacy",
      ],
    },
    {
      category: "Use Cases",
      items: [
        "Computer Vision Applications",
        "NLP Chatbots",
        "Document Processing",
        "Predictive Analytics",
        "IoT Integration",
      ],
    },
  ];

  const resources = [
    {
      title: "API Reference",
      description: "Complete API documentation with examples",
      icon: "BOOKS",
      link: "#",
    },
    {
      title: "SDK Downloads",
      description: "Download SDKs for popular programming languages",
      icon: "PACKAGE",
      link: "#",
    },
    {
      title: "Code Samples",
      description: "Ready-to-use code examples and templates",
      icon: "COMPUTER",
      link: "#",
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step video guides and walkthroughs",
      icon: "VIDEO",
      link: "#",
    },
    {
      title: "Community Forum",
      description: "Get help from the AQLAAN developer community",
      icon: "TEAM",
      link: "#",
    },
    {
      title: "Status Page",
      description: "Real-time API status and incident reports",
      icon: "DATA",
      link: "#",
    },
  ];

  const changelog = [
    {
      version: "v2.1.0",
      date: "December 15, 2024",
      changes: [
        "Enhanced Vision API with new object detection models",
        "Improved accuracy for medical imaging analysis",
        "Added support for batch processing",
      ],
      type: "Major",
    },
    {
      version: "v2.0.5",
      date: "December 10, 2024",
      changes: [
        "Bug fixes in Language API tokenization",
        "Performance improvements for large documents",
        "Updated security certificates",
      ],
      type: "Patch",
    },
    {
      version: "v2.0.0",
      date: "December 1, 2024",
      changes: [
        "Major Language API overhaul with GPT-4 integration",
        "New conversational AI capabilities",
        "Enhanced multilingual support",
      ],
      type: "Major",
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
                Developer Documentation
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Everything you need to integrate AQLAAN AI into your applications.
                From quick starts to advanced integrations, find comprehensive guides and API references.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  Quick Start Guide
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">API Reference</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Quick Start</h2>
              <p className="text-gray-400 text-lg">
                Get up and running with AQLAAN in minutes.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {quickStart.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{item.time}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      item.difficulty === 'Beginner' ? 'bg-green-900/50 text-green-400' :
                      item.difficulty === 'Intermediate' ? 'bg-yellow-900/50 text-yellow-400' :
                      'bg-red-900/50 text-red-400'
                    }`}>
                      {item.difficulty}
                    </span>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">API Documentation</h2>
              <p className="text-gray-400 text-lg">
                Comprehensive API references for all AQLAAN services.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {apiDocs.map((api, index) => (
              <FadeIn key={api.name} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {api.name}
                    </h3>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      api.status === 'Stable' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'
                    }`}>
                      {api.status}
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{api.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{api.endpoints} endpoints</span>
                    <span className="text-blue-400">{api.version}</span>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Guides and Tutorials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Guides & Tutorials</h2>
              <p className="text-gray-400 text-lg">
                Step-by-step guides for integration and best practices.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <FadeIn key={guide.category} delay={index * 0.2}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                    {guide.category}
                  </h3>
                  <ul className="space-y-3">
                    {guide.items.map((item) => (
                      <li key={item} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Developer Resources</h2>
              <p className="text-gray-400 text-lg">
                Tools, libraries, and community resources to accelerate development.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <FadeIn key={resource.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{resource.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Recent Updates</h2>
              <p className="text-gray-400 text-lg">
                Latest features, improvements, and bug fixes.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {changelog.map((entry, index) => (
              <FadeIn key={entry.version} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                        {entry.version}
                      </h3>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        entry.type === 'Major' ? 'bg-blue-900/50 text-blue-400' :
                        entry.type === 'Patch' ? 'bg-green-900/50 text-green-400' :
                        'bg-yellow-900/50 text-yellow-400'
                      }`}>
                        {entry.type}
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm">{entry.date}</span>
                  </div>
                  <ul className="space-y-2">
                    {entry.changes.map((change) => (
                      <li key={change} className="text-gray-400 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2"></span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}