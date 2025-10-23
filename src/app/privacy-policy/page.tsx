import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Mail } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, such as when you create an account, use our services, contact us, or participate in our events. This may include your name, email address, phone number, company information, and payment details."
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect certain information when you use our platform, including IP addresses, browser types, operating systems, referring URLs, and usage patterns."
        },
        {
          subtitle: "Cookies and Tracking Technologies",
          text: "We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content."
        }
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Provision",
          text: "To provide, maintain, and improve our AI platform and services."
        },
        {
          subtitle: "Communication",
          text: "To communicate with you about our services, updates, and respond to your inquiries."
        },
        {
          subtitle: "Analytics",
          text: "To analyze usage patterns and improve our platform's performance and user experience."
        },
        {
          subtitle: "Legal Compliance",
          text: "To comply with legal obligations and protect our rights and the rights of others."
        }
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures including encryption, access controls, and regular security audits to protect your data."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only as long as necessary to provide our services and comply with legal obligations."
        },
        {
          subtitle: "Data Sharing",
          text: "We do not sell, trade, or rent your personal information to third parties. We may share data only in limited circumstances as described in this policy."
        }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Your Rights",
      content: [
        {
          subtitle: "Access and Control",
          text: "You have the right to access, update, or delete your personal information. You can also opt out of marketing communications."
        },
        {
          subtitle: "Data Portability",
          text: "You can request a copy of your data in a structured, machine-readable format."
        },
        {
          subtitle: "Withdraw Consent",
          text: "You can withdraw consent for data processing at any time where consent is the legal basis."
        }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Third-Party Services",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may use third-party service providers to help operate our platform. These providers are contractually obligated to protect your data."
        },
        {
          subtitle: "Analytics Services",
          text: "We use analytics services to understand how our platform is used and to improve our services."
        },
        {
          subtitle: "Payment Processors",
          text: "Payment information is processed by secure third-party payment processors."
        }
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Contact Us",
      content: [
        {
          subtitle: "Privacy Inquiries",
          text: "If you have questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at privacy@aqlaan.com."
        },
        {
          subtitle: "Updates",
          text: "We may update this Privacy Policy from time to time. We will notify you of any material changes via email or platform notification."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-cyan-600/10" />

        <div className="relative max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy
                <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="border-b border-gray-800 pb-12 last:border-b-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-4 text-white">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>

                  <div className="space-y-6 ml-16">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Last Updated */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm text-center">
              Last updated: October 23, 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}