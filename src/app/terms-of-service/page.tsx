"use client";
import { FileText, Scale, AlertTriangle, Calendar, Shield } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";

export default function TermsOfServicePage() {
  const lastUpdated = "March 14, 2026";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using AQLAAN services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services. Your continued use of the platform constitutes acceptance of any modifications to these terms."
    },
    {
      title: "2. Service Description",
      content: "AQLAAN provides enterprise AI infrastructure including API access to language models, vector databases, embeddings, and related AI services. We reserve the right to modify, suspend, or discontinue any aspect of the service at any time with reasonable notice to users."
    },
    {
      title: "3. Account Registration and Responsibilities",
      items: [
        "You must provide accurate, current, and complete information during registration",
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You must notify us immediately of any unauthorized access to your account",
        "You are responsible for all activities that occur under your account",
        "Accounts are non-transferable without our written consent"
      ]
    },
    {
      title: "4. Acceptable Use Policy",
      content: "You agree not to use our services to:",
      items: [
        "Violate any applicable laws or regulations",
        "Infringe upon intellectual property rights of others",
        "Transmit harmful code, viruses, or malicious software",
        "Attempt to gain unauthorized access to our systems",
        "Generate illegal, harmful, or abusive content",
        "Reverse engineer or attempt to extract our proprietary models",
        "Use the service for cryptocurrency mining or other resource-intensive unauthorized purposes",
        "Resell or redistribute our services without a valid reseller agreement"
      ]
    },
    {
      title: "5. API Usage and Rate Limits",
      content: "Your subscription plan includes specific rate limits, quotas, and usage restrictions. Exceeding these limits may result in throttling, additional charges, or service suspension. We monitor usage patterns to prevent abuse and ensure fair access for all users. Commercial use requires an appropriate commercial license."
    },
    {
      title: "6. Data Ownership and Intellectual Property",
      items: [
        "You retain all rights to the data you submit to our services (\"Customer Data\")",
        "We retain all rights to our platform, including APIs, models, and documentation",
        "You grant us a limited license to process Customer Data solely to provide services",
        "We may use anonymized, aggregated data to improve our services",
        "Model outputs generated from your inputs belong to you, subject to our usage policies"
      ]
    },
    {
      title: "7. Payment and Billing",
      content: "Subscription fees are billed in advance on a monthly or annual basis. Usage-based charges are billed in arrears. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days notice. Failure to pay may result in service suspension or termination. You are responsible for all applicable taxes."
    },
    {
      title: "8. Service Level Agreement (SLA)",
      content: "We commit to 99.9% uptime for our production services, calculated monthly. SLA credits are provided for documented downtime exceeding this threshold, as detailed in our SLA document. Scheduled maintenance and outages caused by factors beyond our control are excluded from SLA calculations."
    },
    {
      title: "9. Data Privacy and Security",
      content: "We process your data in accordance with our Privacy Policy and applicable data protection laws. We implement industry-standard security measures including encryption, access controls, and regular security audits. However, no system is completely secure, and you use the service at your own risk."
    },
    {
      title: "10. Confidentiality",
      content: "Both parties agree to keep confidential information disclosed during the business relationship confidential. This obligation survives termination for 3 years. Confidential information does not include information that is publicly available, independently developed, or lawfully received from third parties."
    },
    {
      title: "11. Warranties and Disclaimers",
      content: "We provide services \"as is\" without warranties of any kind. We do not guarantee that services will be error-free, secure, or uninterrupted. We disclaim all implied warranties including merchantability, fitness for a particular purpose, and non-infringement to the fullest extent permitted by law."
    },
    {
      title: "12. Limitation of Liability",
      content: "To the maximum extent permitted by law, AQLAAN shall not be liable for indirect, incidental, consequential, or punitive damages. Our total liability is limited to the fees paid by you in the 12 months preceding the claim. Some jurisdictions do not allow these limitations, so they may not apply to you."
    },
    {
      title: "13. Indemnification",
      content: "You agree to indemnify and hold AQLAAN harmless from claims arising from your use of the services, violation of these terms, or infringement of third-party rights. We reserve the right to assume exclusive defense of any matter subject to indemnification."
    },
    {
      title: "14. Term and Termination",
      content: "These terms remain in effect until terminated. You may terminate by canceling your subscription. We may terminate or suspend access immediately for violations of these terms. Upon termination, your right to use services ceases immediately, and we may delete your data per our retention policy."
    },
    {
      title: "15. Export Compliance",
      content: "Our services are subject to export control laws. You agree not to export, re-export, or transfer our services to prohibited countries or entities. You represent that you are not on any government prohibited parties list."
    },
    {
      title: "16. Governing Law and Dispute Resolution",
      content: "These terms are governed by the laws of Jordan. Any disputes shall first be resolved through good faith negotiations. If unresolved, disputes shall be submitted to binding arbitration in Amman, Jordan, except where prohibited by law. Both parties waive the right to jury trial."
    },
    {
      title: "17. Modifications to Terms",
      content: "We may modify these terms at any time. Material changes will be communicated via email and posted on our website 30 days before taking effect. Continued use after changes constitutes acceptance. If you disagree with modifications, you may terminate your account."
    },
    {
      title: "18. Entire Agreement",
      content: "These terms, together with our Privacy Policy and any applicable SLA or DPA, constitute the entire agreement between you and AQLAAN. These terms supersede all prior agreements and communications. Any conflicting terms in purchase orders are rejected."
    },
    {
      title: "19. Contact Information",
      content: "For questions about these terms, contact us at legal@aqlaan.com or write to: AQLAAN, Attn: Legal Department, Amman, Jordan."
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
                <Scale className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Terms of Service</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Terms of Service
              </h1>
              
              <p className="text-lg text-[var(--muted)] mb-2">
                Legal agreement governing your use of AQLAAN services
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                <Calendar className="w-4 h-4" />
                Last Updated: {lastUpdated}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card className="bg-yellow-500/5 border-yellow-500/20">
              <div className="flex gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2 text-yellow-600 dark:text-yellow-400">Important Notice</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    Please read these terms carefully before using our services. By creating an account or using AQLAAN, 
                    you agree to be legally bound by these terms. These terms contain important provisions including 
                    limitation of liability, dispute resolution, and your responsibilities as a user.
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-12 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <FadeIn key={section.title} delay={index * 0.03}>
                <Card className="bg-[var(--bg)]">
                  <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                  {section.content && (
                    <p className="text-[var(--muted)] leading-relaxed mb-4">{section.content}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-3 text-[var(--muted)] leading-relaxed">
                          <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
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
                <FileText className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h2 className="text-2xl font-bold text-white mb-3">Questions About Terms?</h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Our legal team is available to clarify any aspect of these terms.
                </p>
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                  Contact Legal Team
                </button>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
