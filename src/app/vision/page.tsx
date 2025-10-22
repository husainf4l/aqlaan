import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Vision | AQLAAN",
  description: "AQLAAN's vision for the future of AI - democratizing artificial intelligence to solve humanity's greatest challenges.",
};

export default function VisionPage() {
  const vision = {
    title: "Democratizing AI for Humanity",
    description: "We envision a world where artificial intelligence is accessible to everyone, empowering individuals and organizations to solve complex problems and create positive change.",
    pillars: [
      {
        title: "Accessibility",
        description: "Making AI tools and knowledge available to people regardless of their technical background or resources.",
        icon: "WORLD",
      },
      {
        title: "Ethics",
        description: "Developing AI responsibly with transparency, fairness, and accountability at the core of our approach.",
        icon: "BALANCE",
      },
      {
        title: "Innovation",
        description: "Pushing the boundaries of what's possible with AI to solve unprecedented challenges.",
        icon: "LAUNCH",
      },
      {
        title: "Impact",
        description: "Creating measurable positive change in healthcare, education, environment, and society.",
        icon: "IDEA",
      },
    ],
  };

  const roadmap = [
    {
      phase: "Phase 1: Foundation (2024)",
      status: "Current",
      achievements: [
        "Enterprise AI platform launch",
        "Healthcare AI suite deployment",
        "Global expansion to 50+ countries",
        "1M+ API calls processed daily",
      ],
      goals: [
        "Achieve SOC 2 Type II compliance",
        "Launch computer vision platform",
        "Expand team to 500+ employees",
      ],
    },
    {
      phase: "Phase 2: Scale (2025)",
      status: "Upcoming",
      achievements: [],
      goals: [
        "Launch consumer AI products",
        "Open-source core AI models",
        "Establish AI ethics council",
        "Reach 10M+ daily active users",
      ],
    },
    {
      phase: "Phase 3: Transform (2026-2027)",
      status: "Future",
      achievements: [],
      goals: [
        "AI-powered universal healthcare access",
        "Climate change mitigation platform",
        "Global education transformation",
        "Sustainable AI infrastructure",
      ],
    },
  ];

  const impact = [
    {
      area: "Healthcare",
      current: "Reducing diagnostic errors by 40%",
      future: "AI-assisted universal healthcare access",
      icon: "HEALTH",
      metrics: { current: "40%", future: "100%", beneficiaries: "1B+" },
    },
    {
      area: "Education",
      current: "Personalized learning for 10M students",
      future: "AI tutors for every child worldwide",
      icon: "EDU",
      metrics: { current: "10M", future: "2B", beneficiaries: "2B+" },
    },
    {
      area: "Environment",
      current: "20% reduction in industrial emissions",
      future: "Carbon-neutral AI infrastructure",
      icon: "GREEN",
      metrics: { current: "20%", future: "100%", beneficiaries: "Global" },
    },
    {
      area: "Economic Development",
      current: "Created 50K+ AI-related jobs",
      future: "AI skills training for 100M people",
      icon: "WORK",
      metrics: { current: "50K", future: "100M", beneficiaries: "Developing economies" },
    },
  ];

  const principles = [
    {
      title: "Human-Centric AI",
      description: "AI should augment human capabilities, not replace them. We design systems that work alongside people to enhance their potential.",
    },
    {
      title: "Transparency & Trust",
      description: "Every AI decision should be explainable and auditable. We believe in building trust through openness and accountability.",
    },
    {
      title: "Inclusive Innovation",
      description: "AI should benefit everyone, not just the privileged few. We work to ensure AI accessibility across all demographics and regions.",
    },
    {
      title: "Sustainable Development",
      description: "AI development should contribute to environmental sustainability and long-term human flourishing.",
    },
    {
      title: "Continuous Learning",
      description: "AI systems should evolve and improve over time, learning from their interactions while maintaining safety and ethics.",
    },
    {
      title: "Global Collaboration",
      description: "AI challenges are global and require international cooperation. We actively collaborate across borders and cultures.",
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
                Our Vision
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                {vision.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Join Our Mission
                </Button>
                <Button variant="outline">Read Our Manifesto</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Vision Pillars</h2>
              <p className="text-gray-400 text-lg">
                The foundational principles guiding our mission.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vision.pillars.map((pillar, index) => (
              <FadeIn key={pillar.title} delay={index * 0.1}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="text-5xl mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400">{pillar.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Roadmap</h2>
              <p className="text-gray-400 text-lg">
                Milestones and goals shaping our journey forward.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {roadmap.map((phase, index) => (
              <FadeIn key={phase.phase} delay={index * 0.2}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">
                      {phase.phase}
                    </h3>
                    <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      phase.status === 'Current' ? 'bg-blue-900/50 text-blue-400' :
                      phase.status === 'Upcoming' ? 'bg-yellow-900/50 text-yellow-400' :
                      'bg-gray-700 text-gray-400'
                    }`}>
                      {phase.status}
                    </div>
                  </div>

                  {phase.achievements.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-green-400">Achievements</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.achievements.map((achievement) => (
                          <div key={achievement} className="text-gray-400 flex items-center">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">Goals</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {phase.goals.map((goal) => (
                        <div key={goal} className="text-gray-400 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {goal}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Global Impact</h2>
              <p className="text-gray-400 text-lg">
                Measuring our progress toward creating positive change worldwide.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {impact.map((area, index) => (
              <FadeIn key={area.area} delay={index * 0.2}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{area.icon}</div>
                    <h3 className="text-2xl font-semibold group-hover:text-blue-400 transition-colors">
                      {area.area}
                    </h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Current Impact</div>
                      <div className="text-gray-300">{area.current}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Future Vision</div>
                      <div className="text-blue-400">{area.future}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{area.metrics.current}</div>
                      <div className="text-xs text-gray-500">Current</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-400">{area.metrics.future}</div>
                      <div className="text-xs text-gray-500">Target</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">{area.metrics.beneficiaries}</div>
                      <div className="text-xs text-gray-500">Beneficiaries</div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Principles</h2>
              <p className="text-gray-400 text-lg">
                The core values that guide our decisions and actions.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <FadeIn key={principle.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-gray-400">{principle.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}