"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AnimatedHeroBlob } from "@/components/animations/AnimatedHeroBlob";
import BackgroundMotion from "@/components/visuals/BackgroundMotion";
import { 
  MessageSquare,
  Smile,
  Tags,
  Globe,
  Bot,
  FileText,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Zap
} from "lucide-react";

export default function LanguageIntelligencePage() {
  const capabilities = [
    {
      title: "Sentiment Analysis",
      description: "Understand customer emotions and opinions from text data with high accuracy.",
      icon: Smile,
      accuracy: "94%",
      applications: ["Customer feedback", "Social media monitoring", "Brand reputation"],
    },
    {
      title: "Text Classification",
      description: "Automatically categorize and tag content for efficient content management.",
      icon: Tags,
      accuracy: "96%",
      applications: ["Content moderation", "Document organization", "Support ticket routing"],
    },
    {
      title: "Named Entity Recognition",
      description: "Extract and classify named entities like people, organizations, and locations.",
      icon: Tags,
      accuracy: "92%",
      applications: ["Information extraction", "Knowledge graphs", "Compliance monitoring"],
    },
    {
      title: "Language Translation",
      description: "Real-time translation between multiple languages with context preservation.",
      icon: Globe,
      accuracy: "98%",
      applications: ["Global communication", "Content localization", "Multilingual support"],
    },
    {
      title: "Chatbot & Virtual Assistants",
      description: "Intelligent conversational AI that understands context and provides relevant responses.",
      icon: Bot,
      accuracy: "89%",
      applications: ["Customer service", "Internal helpdesk", "Personal assistants"],
    },
    {
      title: "Content Summarization",
      description: "Generate concise summaries of long documents while preserving key information.",
      icon: FileText,
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
    <div className="min-h-screen">
      {/* Background Motion */}
      <BackgroundMotion />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 bg-[var(--bg)] overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Hero Blob */}
        <AnimatedHeroBlob />
        
        {/* Animated background gradient blobs */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-slate-500/10 to-slate-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Main content */}
        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <MessageSquare className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Natural Language Processing</span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] leading-[1.1] tracking-tighter mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Language{' '}
                <span className="relative inline-block text-[var(--text)]">
                  Intelligence
                </span>
              </motion.h1>
              
              <motion.p
                className="text-base md:text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Unlock the power of human language with advanced natural language processing.
                Understand, analyze, and generate human-like text with unprecedented accuracy and context awareness.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Link href="#capabilities">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-purple-500/25">
                    Explore Capabilities
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div className="text-3xl font-bold text-[var(--text)]">98%</div>
                  </div>
                  <div className="text-sm text-[var(--muted)]">Accuracy</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Globe className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div className="text-3xl font-bold text-[var(--text)]">100+</div>
                  </div>
                  <div className="text-sm text-[var(--muted)]">Languages</div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    <div className="text-3xl font-bold text-[var(--text)]">Real-time</div>
                  </div>
                  <div className="text-sm text-[var(--muted)]">Processing</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-20 px-6 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI Language{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Advanced NLP solutions for understanding and processing human language.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:scale-105 transition-all duration-300 h-full hover:shadow-xl hover:shadow-purple-500/10 border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-purple-500/10 rounded-xl inline-block group-hover:bg-purple-500/20 transition-colors">
                        <Icon className="w-8 h-8 text-purple-400" />
                      </div>
                      <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <div className="text-lg font-bold text-blue-400">{capability.accuracy}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-[var(--muted)] mb-4 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                    <div className="space-y-2 pt-4 border-t border-white/5">
                      <div className="text-sm font-semibold text-[var(--muted)] mb-2">Applications:</div>
                      {capability.applications.map((app) => (
                        <div key={app} className="text-sm flex items-center gap-2 text-[var(--muted)]">
                          <CheckCircle className="w-4 h-4 flex-shrink-0 text-purple-400" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Language Support */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Global{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Language Support
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Process and understand content in multiple languages with native-level accuracy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-purple-500/20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language}
                      className="text-center py-3 px-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all hover:scale-105 border border-white/5"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                    >
                      <span className="text-[var(--text)] font-medium">{language}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="text-center pt-6 border-t border-white/10">
                  <p className="text-[var(--muted)] flex items-center justify-center gap-2">
                    <Globe className="w-5 h-5 text-purple-400" />
                    <span>And 100+ more languages supported</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industry{' '}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Applications
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Real-world implementations delivering measurable business value.
            </p>
          </motion.div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.industry}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 border-white/5">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                        <Users className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-400 text-sm font-semibold">{useCase.industry}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                        Challenge
                      </h3>
                      <p className="text-[var(--muted)] mb-4 leading-relaxed">{useCase.challenge}</p>
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-blue-400" />
                        Solution
                      </h4>
                      <p className="text-[var(--muted)] leading-relaxed">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        Key Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(useCase.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-4 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="text-2xl font-bold text-purple-400 mb-1">{value}</div>
                            <div className="text-sm text-[var(--muted)] capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            className="relative overflow-hidden bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 rounded-3xl p-12 border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
            
            <div className="relative z-10 text-center">
              <div className="mb-4 inline-block p-3 bg-purple-500/10 rounded-xl">
                <MessageSquare className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Unlock Language Intelligence?
              </h2>
              <p className="text-[var(--muted)] text-lg mb-8 max-w-2xl mx-auto">
                Connect with our NLP experts to discover how we can transform your text data into actionable insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-purple-500/25">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}