import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Partners | AQLAAN",
  description: "Strategic partnerships and collaborations that drive innovation and expand AQLAAN's AI ecosystem.",
};

export default function PartnersPage() {
  const partnerTypes = [
    {
      category: "Technology Partners",
      description: "Leading tech companies providing complementary technologies and platforms.",
      partners: [
        { name: "Microsoft Azure", logo: "CLOUD", type: "Cloud Infrastructure" },
        { name: "NVIDIA", logo: "GAME", type: "AI Hardware" },
        { name: "Databricks", logo: "DATA", type: "Data Platform" },
        { name: "Snowflake", logo: "SNOW", type: "Data Warehouse" },
      ],
    },
    {
      category: "Industry Leaders",
      description: "Fortune 500 companies and industry leaders adopting AQLAAN solutions.",
      partners: [
        { name: "Johnson & Johnson", logo: "HEALTH", type: "Healthcare" },
        { name: "Siemens", logo: "GEAR", type: "Manufacturing" },
        { name: "Walmart", logo: "STORE", type: "Retail" },
        { name: "Goldman Sachs", logo: "BANK", type: "Financial Services" },
      ],
    },
    {
      category: "Research Institutions",
      description: "Academic and research partners advancing AI science and applications.",
      partners: [
        { name: "MIT", logo: "EDU", type: "Research" },
        { name: "Stanford AI Lab", logo: "🤖", type: "Research" },
        { name: "Oxford AI", logo: "BOOKS", type: "Research" },
        { name: "Carnegie Mellon", logo: "CAPITOL", type: "Research" },
      ],
    },
    {
      category: "Startup Ecosystem",
      description: "Innovative startups building the next generation of AI applications.",
      partners: [
        { name: "Anthropic", logo: "🧠", type: "AI Safety" },
        { name: "Cohere", logo: "THINK", type: "NLP" },
        { name: "Hugging Face", logo: "🤗", type: "ML Platform" },
        { name: "Weights & Biases", logo: "BALANCE", type: "MLOps" },
      ],
    },
  ];

  const partnershipPrograms = [
    {
      name: "Technology Alliance",
      description: "Joint technology development and integration partnerships.",
      benefits: ["Co-development opportunities", "Technical integration support", "Shared R&D resources"],
      icon: "LINK",
    },
    {
      name: "Solution Provider Network",
      description: "Certified partners delivering AQLAAN solutions to customers.",
      benefits: ["Training and certification", "Go-to-market support", "Revenue sharing"],
      icon: "WEB",
    },
    {
      name: "Research Collaboration",
      description: "Academic and research partnerships advancing AI capabilities.",
      benefits: ["Joint research projects", "Access to talent pool", "Publication opportunities"],
      icon: "SCIENCE",
    },
    {
      name: "Industry Consortium",
      description: "Cross-industry collaboration on AI standards and best practices.",
      benefits: ["Industry influence", "Standards development", "Knowledge sharing"],
      icon: "🤝",
    },
  ];

  const successStories = [
    {
      partners: "AQLAAN + Microsoft",
      achievement: "Integrated AI platform deployment reaching 1M+ users",
      impact: "$500M in combined revenue growth",
      description: "Strategic partnership combining AQLAAN's AI expertise with Microsoft's cloud infrastructure.",
    },
    {
      partners: "AQLAAN + Johnson & Johnson",
      achievement: "AI-powered diagnostic platform reducing errors by 40%",
      impact: "Improved patient outcomes across 50 hospitals",
      description: "Healthcare transformation through collaborative AI development and implementation.",
    },
    {
      partners: "AQLAAN + MIT",
      achievement: "Breakthrough research in ethical AI published in Nature",
      impact: "Advanced AI safety standards industry-wide",
      description: "Academic collaboration driving fundamental advances in responsible AI development.",
    },
  ];

  const becomePartner = {
    steps: [
      "Submit partnership inquiry",
      "Initial qualification review",
      "Partnership agreement negotiation",
      "Joint business planning",
      "Go-to-market execution",
    ],
    requirements: [
      "Technical expertise alignment",
      "Market presence and reach",
      "Commitment to AI innovation",
      "Compliance and security standards",
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Strategic Partners
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Building the future of AI through powerful partnerships. Together with industry leaders,
                we accelerate innovation and deliver transformative AI solutions worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Become a Partner
                </Button>
                <Button variant="outline">View Partnership Programs</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Partner Ecosystem</h2>
              <p className="text-gray-400 text-lg">
                Collaborating with the world&apos;s leading organizations across technology and industry.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {partnerTypes.map((category, categoryIndex) => (
              <FadeIn key={category.category} delay={categoryIndex * 0.2}>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
                  <p className="text-gray-400 mb-8">{category.description}</p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.partners.map((partner, partnerIndex) => (
                      <FadeIn key={partner.name} delay={partnerIndex * 0.1}>
                        <Card className="text-center group hover:scale-105 transition-transform duration-300">
                          <div className="text-4xl mb-3">{partner.logo}</div>
                          <h4 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                            {partner.name}
                          </h4>
                          <div className="text-sm text-gray-500">{partner.type}</div>
                        </Card>
                      </FadeIn>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Partnership Programs</h2>
              <p className="text-gray-400 text-lg">
                Structured programs designed to maximize mutual success and growth.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipPrograms.map((program, index) => (
              <FadeIn key={program.name} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl mb-4">{program.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    {program.benefits.map((benefit) => (
                      <div key={benefit} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Partnership Success Stories</h2>
              <p className="text-gray-400 text-lg">
                Real results from our collaborative partnerships.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {successStories.map((story, index) => (
              <FadeIn key={story.partners} delay={index * 0.2}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                        {story.partners}
                      </h3>
                      <p className="text-gray-400 mb-4">{story.description}</p>
                      <div className="space-y-2">
                        <div>
                          <div className="text-sm text-gray-500">Achievement</div>
                          <div className="text-gray-300">{story.achievement}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Impact</div>
                          <div className="text-green-400 font-semibold">{story.impact}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-6xl opacity-20">🤝</div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Become a Partner</h2>
              <p className="text-gray-400 text-lg">
                Join our ecosystem and accelerate your AI innovation journey.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Partnership Process</h3>
                <div className="space-y-4">
                  {becomePartner.steps.map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Requirements</h3>
                <div className="space-y-4">
                  {becomePartner.requirements.map((requirement) => (
                    <div key={requirement} className="flex items-start">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-4 mt-2"></span>
                      <span className="text-gray-300">{requirement}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button className="w-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                    Start Partnership Inquiry
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-linear-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to Partner with AQLAAN?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let&apos;s explore how we can collaborate to drive AI innovation and create mutual success.
            </p>
            <Button className="bg-white text-blue-600 font-bold hover:bg-gray-100 px-8 py-4">
              Contact Partnership Team
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}