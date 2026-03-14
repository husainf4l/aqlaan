"use client";
import { Shield, Lock, Eye, Database, Globe, Mail, Calendar } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 14, 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "1.1 Information You Provide",
          text: "We collect information you provide directly, including: account registration details (name, email, company), payment information, API usage data, and support communications."
        },
        {
          subtitle: "1.2 Automatically Collected Information",
          text: "We automatically collect technical data including: IP addresses, device information, browser type, API usage patterns, performance metrics, and authentication logs."
        },
        {
          subtitle: "1.3 Data You Process Through Our Services",
          text: "When you use AQLAAN AI services, you may submit data for processing (embeddings, model inference, etc.). This data is processed according to your instructions and our Data Processing Agreement."
        }
      ]
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          subtitle: "2.1 Service Delivery",
          text: "We use your information to provide, maintain, and improve our AI platform, process API requests, manage your account, and deliver customer support."
        },
        {
          subtitle: "2.2 Communication",
          text: "We send service updates, security alerts, billing notifications, and (with your consent) marketing communications about new features and offerings."
        },
        {
          subtitle: "2.3 Security & Compliance",
          text: "We use data to detect and prevent fraud, ensure platform security, comply with legal obligations, and maintain audit trails for compliance purposes."
        },
        {
          subtitle: "2.4 Analytics & Improvement",
          text: "We analyze aggregated, anonymized usage patterns to improve our services, optimize performance, and develop new features."
        }
      ]
    },
    {
      title: "3. Data Storage and Security",
      content: [
        {
          subtitle: "3.1 Data Location",
          text: "Your data is stored in secure data centers operated by our cloud providers (Azure, AWS) in regions you specify during account setup. We support data residency requirements for GDPR and other regulations."
        },
        {
          subtitle: "3.2 Security Measures",
          text: "We implement industry-standard security controls including: end-to-end encryption in transit and at rest (AES-256), multi-factor authentication, role-based access controls, regular security audits, and SOC 2 Type II compliance."
        },
        {
          subtitle: "3.3 Data Retention",
          text: "We retain your data for as long as your account is active or as needed to provide services. You can request data deletion at any time. Backup data is retained for 90 days for disaster recovery purposes."
        }
      ]
    },
    {
      title: "4. Data Sharing and Disclosure",
      content: [
        {
          subtitle: "4.1 Third-Party Service Providers",
          text: "We share data with trusted service providers who assist in platform operations (cloud hosting, payment processing, analytics). All providers are contractually bound to protect your data."
        },
        {
          subtitle: "4.2 Legal Requirements",
          text: "We may disclose information when required by law, court order, or government request, or to protect our rights, property, and safety."
        },
        {
          subtitle: "4.3 Business Transfers",
          text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will notify you and ensure continued protection of your data."
        },
        {
          subtitle: "4.4 No Selling of Personal Data",
          text: "We do not sell, rent, or trade your personal information to third parties for their marketing purposes."
        }
      ]
    },
    {
      title: "5. Your Privacy Rights",
      content: [
        {
          subtitle: "5.1 Access and Portability",
          text: "You have the right to access your personal data and receive a copy in a portable format (JSON, CSV)."
        },
        {
          subtitle: "5.2 Correction and Deletion",
          text: "You can update your account information at any time and request deletion of your personal data, subject to legal retention requirements."
        },
        {
          subtitle: "5.3 Processing Restrictions",
          text: "You can object to certain data processing activities or request restrictions on how we process your data."
        },
        {
          subtitle: "5.4 Marketing Opt-Out",
          text: "You can unsubscribe from marketing communications at any time using the link in our emails or through your account settings."
        },
        {
          subtitle: "5.5 GDPR Rights",
          text: "If you are in the European Economic Area, you have additional rights under GDPR including data portability, right to be forgotten, and right to lodge a complaint with a supervisory authority."
        }
      ]
    },
    {
      title: "6. Children's Privacy",
      content: [
        {
          subtitle: "",
          text: "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal data, please contact us."
        }
      ]
    },
    {
      title: "7. International Data Transfers",
      content: [
        {
          subtitle: "",
          text: "Your data may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place, including Standard Contractual Clauses approved by the European Commission for transfers from the EEA."
        }
      ]
    },
    {
      title: "8. Cookies and Tracking Technologies",
      content: [
        {
          subtitle: "",
          text: "We use cookies and similar technologies for authentication, preferences, analytics, and security. See our Cookie Policy for detailed information about the cookies we use and your choices."
        }
      ]
    },
    {
      title: "9. Updates to This Policy",
      content: [
        {
          subtitle: "",
          text: "We may update this Privacy Policy periodically. We will notify you of material changes via email or prominent notice on our platform. Continued use after changes constitutes acceptance of the updated policy."
        }
      ]
    },
    {
      title: "10. Contact Us",
      content: [
        {
          subtitle: "",
          text: "For privacy-related questions, to exercise your rights, or to contact our Data Protection Officer, please email: privacy@aqlaan.com or write to: AQLAAN, Attn: Privacy Officer, Amman, Jordan."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-[var(--bg)] via-[var(--bg-secondary)] to-[var(--bg)]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Privacy Policy</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Privacy Policy
              </h1>
              
              <p className="text-lg text-[var(--muted)] mb-2">
                Your privacy and data security are our top priorities
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                <Calendar className="w-4 h-4" />
                Last Updated: {lastUpdated}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card className="bg-blue-500/5 border-blue-500/20">
              <h2 className="text-2xl font-bold mb-4">Privacy at a Glance</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <Lock className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Secure by Design</div>
                    <div className="text-sm text-[var(--muted)]">End-to-end encryption, SOC 2 Type II compliant</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Eye className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">Full Transparency</div>
                    <div className="text-sm text-[var(--muted)]">You control your data, we never sell it</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Globe className="w-6 h-6 text-blue-400 flex-shrink-0" />
                  <div>
                    <div className="font-semibold mb-1">GDPR Compliant</div>
                    <div className="text-sm text-[var(--muted)]">Full compliance with global privacy regulations</div>
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-12 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.05}>
                <Card className="bg-[var(--bg)]">
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {item.subtitle && (
                          <h3 className="font-semibold text-lg mb-2 text-blue-400">{item.subtitle}</h3>
                        )}
                        <p className="text-[var(--muted)] leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card className="text-center bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:75px_75px]" />
              <div className="relative">
                <Mail className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h2 className="text-2xl font-bold text-white mb-3">Questions About Privacy?</h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Our privacy team is here to help. Contact us at privacy@aqlaan.com
                </p>
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                  Contact Privacy Team
                </button>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
