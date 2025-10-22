import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Healthcare AI | AQLAAN",
  description: "Transform healthcare with AI-powered diagnostics, personalized medicine, and intelligent healthcare management systems.",
};

export default function HealthcareAIPage() {
  const solutions = [
    {
      title: "Medical Imaging Analysis",
      description: "AI-powered analysis of X-rays, MRIs, and CT scans for faster, more accurate diagnoses.",
      icon: "🩺",
      impact: "Early detection of conditions with 95% accuracy",
      features: ["Radiology assistance", "Pathology analysis", "Screening automation"],
    },
    {
      title: "Predictive Diagnostics",
      description: "Machine learning models that predict health risks and recommend preventive measures.",
      icon: "PREDICT",
      impact: "Reduce hospital readmissions by 30%",
      features: ["Risk assessment", "Preventive care", "Outcome prediction"],
    },
    {
      title: "Personalized Treatment",
      description: "AI-driven treatment recommendations based on patient genetics and medical history.",
      icon: "MEDS",
      impact: "Improve treatment success rates by 25%",
      features: ["Genomic analysis", "Treatment optimization", "Drug discovery"],
    },
    {
      title: "Clinical Decision Support",
      description: "Real-time assistance for healthcare providers with evidence-based recommendations.",
      icon: "DATA",
      impact: "Enhance clinical decision accuracy by 40%",
      features: ["Diagnosis support", "Treatment guidelines", "Patient monitoring"],
    },
    {
      title: "Healthcare Administration",
      description: "Automate administrative tasks and optimize healthcare operations and resource allocation.",
      icon: "HEALTH",
      impact: "Reduce administrative costs by 50%",
      features: ["Appointment scheduling", "Billing automation", "Resource optimization"],
    },
    {
      title: "Remote Patient Monitoring",
      description: "Continuous health monitoring with AI analysis of wearable device data and vital signs.",
      icon: "MOBILE",
      impact: "Enable proactive care for chronic conditions",
      features: ["Vital sign monitoring", "Anomaly detection", "Telemedicine support"],
    },
  ];

  const compliance = [
    {
      standard: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      status: "Fully Compliant",
    },
    {
      standard: "GDPR",
      description: "General Data Protection Regulation for patient data privacy",
      status: "Certified",
    },
    {
      standard: "FDA",
      description: "Food and Drug Administration regulations for medical devices",
      status: "Approved",
    },
    {
      standard: "HITRUST",
      description: "Healthcare security and risk management framework",
      status: "Certified",
    },
  ];

  const caseStudies = [
    {
      hospital: "Metropolitan Medical Center",
      challenge: "Overwhelmed radiology department with 500+ daily scans",
      solution: "AI-powered image analysis reduced diagnosis time by 60% and improved accuracy",
      results: ["60% faster diagnosis", "15% higher accuracy", "30% cost reduction"],
    },
    {
      hospital: "Regional Health Network",
      challenge: "High readmission rates for chronic disease patients",
      solution: "Predictive analytics identified at-risk patients and enabled preventive interventions",
      results: ["35% fewer readmissions", "25% better outcomes", "20% cost savings"],
    },
    {
      hospital: "Specialty Cancer Institute",
      challenge: "Inefficient treatment planning and patient monitoring",
      solution: "AI-driven personalized treatment plans and continuous monitoring system",
      results: ["40% better treatment response", "50% faster recovery", "90% patient satisfaction"],
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
                Healthcare AI
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Revolutionizing healthcare with artificial intelligence. From diagnostic assistance to
                personalized treatment plans, our AI solutions are improving patient outcomes and
                transforming healthcare delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                  Healthcare Solutions
                </Button>
                <Button variant="outline">Clinical Trials</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">AI Healthcare Solutions</h2>
              <p className="text-gray-400 text-lg">
                Comprehensive AI solutions designed specifically for healthcare challenges.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <FadeIn key={solution.title} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{solution.description}</p>
                  <div className="bg-blue-900/20 rounded-lg p-3 mb-4">
                    <p className="text-blue-300 text-sm font-semibold">{solution.impact}</p>
                  </div>
                  <div className="space-y-2">
                    {solution.features.map((feature) => (
                      <div key={feature} className="text-sm text-gray-500 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Regulatory Compliance</h2>
              <p className="text-gray-400 text-lg">
                Enterprise-grade security and compliance for healthcare data and operations.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {compliance.map((item, index) => (
              <FadeIn key={item.standard} delay={index * 0.1}>
                <Card className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-green-400 mb-2">CHECK</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                    {item.standard}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                  <div className="text-green-400 text-sm font-semibold">{item.status}</div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Clinical Success Stories</h2>
              <p className="text-gray-400 text-lg">
                Real healthcare implementations delivering measurable improvements in patient care.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.hospital} delay={index * 0.2}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="text-blue-400 text-sm font-semibold mb-2">{study.hospital}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    Challenge
                  </h3>
                  <p className="text-gray-400 mb-4">{study.challenge}</p>
                  <h4 className="text-lg font-semibold mb-2">Solution & Results</h4>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result) => (
                      <div key={result} className="text-center p-3 bg-gray-800/50 rounded-lg">
                        <div className="text-green-400 font-semibold">{result}</div>
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