import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Computer Vision | AQLAAN",
  description: "Advanced computer vision solutions for object detection, image recognition, and visual analytics. Transform visual data into actionable insights.",
};

export default function ComputerVisionPage() {
  const applications = [
    {
      title: "Quality Control & Inspection",
      description: "Automated visual inspection systems that detect defects with higher accuracy than human inspectors.",
      icon: "INSPECT",
      benefits: ["99.9% accuracy", "24/7 operation", "Cost reduction"],
    },
    {
      title: "Retail Analytics",
      description: "Track customer behavior, optimize store layouts, and prevent theft with intelligent video analytics.",
      icon: "RETAIL",
      benefits: ["Customer insights", "Loss prevention", "Layout optimization"],
    },
    {
      title: "Security & Surveillance",
      description: "Advanced threat detection, facial recognition, and anomaly detection for comprehensive security.",
      icon: "SECURITY",
      benefits: ["Real-time alerts", "Facial recognition", "Anomaly detection"],
    },
    {
      title: "Medical Imaging",
      description: "Assist in diagnosis with automated analysis of X-rays, MRIs, and other medical imaging data.",
      icon: "MEDICAL",
      benefits: ["Early detection", "Diagnostic support", "Workflow efficiency"],
    },
    {
      title: "Autonomous Vehicles",
      description: "Enable self-driving capabilities with real-time object detection and environmental understanding.",
      icon: "AUTO",
      benefits: ["Safety enhancement", "Navigation accuracy", "Traffic optimization"],
    },
    {
      title: "Agriculture & Farming",
      description: "Monitor crop health, detect pests, and optimize irrigation with aerial and ground-based imaging.",
      icon: "FARM",
      benefits: ["Yield optimization", "Pest detection", "Resource efficiency"],
    },
  ];

  const technologies = [
    {
      name: "Object Detection",
      description: "Real-time identification and localization of objects in images and video streams.",
      accuracy: "95%",
    },
    {
      name: "Image Classification",
      description: "Categorize images into predefined classes with high precision.",
      accuracy: "97%",
    },
    {
      name: "Facial Recognition",
      description: "Identify and verify individuals from facial features.",
      accuracy: "99%",
    },
    {
      name: "Optical Character Recognition",
      description: "Extract text from images and documents with contextual understanding.",
      accuracy: "98%",
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
                Computer Vision
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                See the world through AI eyes. Our advanced computer vision solutions transform visual data
                into actionable insights, enabling automation, analysis, and decision-making across industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Explore Solutions
                </Button>
                <Button variant="outline">View Demos</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Industry Applications</h2>
              <p className="text-gray-400 text-lg">
                Computer vision solutions tailored for diverse industry needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <FadeIn key={app.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="text-lg font-bold mb-4 text-blue-400 bg-gray-800 px-3 py-1 rounded-lg inline-block">{app.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{app.description}</p>
                  <div className="space-y-2">
                    {app.benefits.map((benefit) => (
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

      {/* Technology Capabilities */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Core Technologies</h2>
              <p className="text-gray-400 text-lg">
                Advanced computer vision capabilities with industry-leading accuracy.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <FadeIn key={tech.name} delay={index * 0.1}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{tech.accuracy}</div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Real-World Impact</h2>
              <p className="text-gray-400 text-lg">
                See how computer vision is transforming businesses across industries.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div className="bg-linear-to-br from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-4">Manufacturing Excellence</h3>
                <p className="text-gray-400 mb-6">
                  Automated quality inspection reduced defect rates by 85% and improved production efficiency by 40%.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-400">85%</div>
                    <div className="text-sm text-gray-500">Defect Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">40%</div>
                    <div className="text-sm text-gray-500">Efficiency Gain</div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-linear-to-br from-green-900/20 to-blue-900/20 rounded-2xl p-8 border border-green-500/20">
                <h3 className="text-2xl font-bold mb-4">Retail Intelligence</h3>
                <p className="text-gray-400 mb-6">
                  Smart video analytics increased sales by 25% through optimized store layouts and personalized marketing.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">25%</div>
                    <div className="text-sm text-gray-500">Sales Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">60%</div>
                    <div className="text-sm text-gray-500">Loss Prevention</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}