import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Language Intelligence | AQLAAN",
  description: "Advanced natural language processing and understanding solutions for text analysis, sentiment detection, and intelligent communication.",
};

export default function LanguageIntelligencePage() {
  const capabilities = [
    {
      title: "Sentiment Analysis",
      description: "Understand customer emotions and opinions from text data with high accuracy.",
      icon: "HAPPY",
      accuracy: "94%",
      applications: ["Customer feedback", "Social media monitoring", "Brand reputation"],
    },
    {
      title: "Text Classification",
      description: "Automatically categorize and tag content for efficient content management.",
      icon: "LIST",
      accuracy: "96%",
      applications: ["Content moderation", "Document organization", "Support ticket routing"],
    },
    {
      title: "Named Entity Recognition",
      description: "Extract and classify named entities like people, organizations, and locations.",
      icon: "LABEL",
      accuracy: "92%",
      applications: ["Information extraction", "Knowledge graphs", "Compliance monitoring"],
    },
    {
      title: "Language Translation",
      description: "Real-time translation between multiple languages with context preservation.",
      icon: "WEB",
      accuracy: "98%",
      applications: ["Global communication", "Content localization", "Multilingual support"],
    },
    {
      title: "Chatbot & Virtual Assistants",
      description: "Intelligent conversational AI that understands context and provides relevant responses.",
      icon: "🤖",
      accuracy: "89%",
      applications: ["Customer service", "Internal helpdesk", "Personal assistants"],
    },
    {
      title: "Content Summarization",
      description: "Generate concise summaries of long documents while preserving key information.",
      icon: "WRITE",
      accuracy: "91%",
      applications: ["Research synthesis", "News aggregation", "Document review"],
    },
  ];

  const languages = [
    "English", "Spanish", "French", "German", "Chinese", "Japanese",
    "Arabic", "Hindi", "Portuguese", "Russian", "Korean", "Italian"
  ];

  const useCases = [
    {
      industry: "Customer Service",
      challenge: "Handle 10,000+ daily inquiries with consistent quality",
      solution: "AI-powered chatbot reduced response time by 80% and improved satisfaction scores",
      metrics: { efficiency: "80%", satisfaction: "95%", cost: "60%" },
    },
    {
      industry: "Financial Services",
      challenge: "Monitor market sentiment across global news and social media",
      solution: "Real-time sentiment analysis provided early warning signals for market movements",
      metrics: { accuracy: "92%", speed: "Real-time", coverage: "50M+" },
    },
    {
      industry: "Healthcare",
      challenge: "Extract insights from unstructured medical records",
      solution: "NLP system automated patient data extraction and clinical decision support",
      metrics: { accuracy: "96%", time: "90%", errors: "75%" },
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Language Intelligence
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Unlock the power of human language with advanced natural language processing.
                Understand, analyze, and generate human-like text with unprecedented accuracy and context awareness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Explore Capabilities
                </Button>
                <Button variant="outline">Try Demo</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">AI Language Capabilities</h2>
              <p className="text-gray-400 text-lg">
                Advanced NLP solutions for understanding and processing human language.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <FadeIn key={capability.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{capability.icon}</div>
                    <div className="text-lg font-bold text-blue-400">{capability.accuracy}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{capability.description}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-300 mb-2">Applications:</div>
                    {capability.applications.map((app) => (
                      <div key={app} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        {app}
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Global Language Support</h2>
              <p className="text-gray-400 text-lg">
                Process and understand content in multiple languages with native-level accuracy.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="bg-linear-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {languages.map((language) => (
                  <div key={language} className="text-center py-3 px-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
                    <span className="text-gray-300 font-medium">{language}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-400">And 100+ more languages supported</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Industry Applications</h2>
              <p className="text-gray-400 text-lg">
                Real-world implementations delivering measurable business value.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <FadeIn key={useCase.industry} delay={index * 0.2}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-blue-400 text-sm font-semibold mb-2">{useCase.industry}</div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                        Challenge
                      </h3>
                      <p className="text-gray-400 mb-4">{useCase.challenge}</p>
                      <h4 className="text-lg font-semibold mb-2">Solution</h4>
                      <p className="text-gray-300">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4">Key Metrics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(useCase.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-gray-800/50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-400">{value}</div>
                            <div className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>
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