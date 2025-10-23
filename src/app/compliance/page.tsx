import FadeIn from '@/components/animations/FadeIn';
import { Shield, Award, Lock, CheckCircle, FileText, Users } from 'lucide-react';

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-green-100 rounded-full">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Compliance & Certifications
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AQLAAN is committed to maintaining the highest standards of security, privacy, and regulatory compliance in everything we do.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">

            {/* Our Commitment */}
            <FadeIn>
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      Our Commitment to Compliance
                    </h2>
                    <p className="text-gray-600 mb-4">
                      At AQLAAN, compliance is not just a requirement—it&apos;s a fundamental part of our mission to build trustworthy AI solutions. We adhere to global standards and regulations to ensure the security, privacy, and ethical use of our platform.
                    </p>
                    <p className="text-gray-600">
                      Our compliance framework covers data protection, information security, ethical AI practices, and industry-specific regulations relevant to our enterprise customers.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Certifications */}
            <FadeIn>
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Certifications & Standards
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <h3 className="font-semibold text-gray-900">SOC 2 Type II</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                          System and Organization Controls 2 certification demonstrating our commitment to security, availability, processing integrity, confidentiality, and privacy of customer data.
                        </p>
                      </div>
                      <div className="border rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <h3 className="font-semibold text-gray-900">ISO 27001</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                          International standard for information security management systems, ensuring systematic management of sensitive company and customer information.
                        </p>
                      </div>
                      <div className="border rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <h3 className="font-semibold text-gray-900">GDPR Compliant</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Full compliance with the General Data Protection Regulation, including data protection by design and default, and comprehensive data subject rights.
                        </p>
                      </div>
                      <div className="border rounded-lg p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <h3 className="font-semibold text-gray-900">CCPA Ready</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Prepared for California Consumer Privacy Act requirements, with robust data protection and consumer rights mechanisms in place.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Security Measures */}
            <FadeIn>
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <div className="flex items-start space-x-4">
                  <Lock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      Security Measures
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We implement comprehensive security measures across all aspects of our platform:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Data Encryption</h3>
                        <p className="text-gray-600 text-sm">
                          All data is encrypted in transit and at rest using industry-standard encryption protocols (TLS 1.3, AES-256).
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Access Controls</h3>
                        <p className="text-gray-600 text-sm">
                          Role-based access control (RBAC) and multi-factor authentication (MFA) for all user accounts and administrative access.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Regular Audits</h3>
                        <p className="text-gray-600 text-sm">
                          Continuous security monitoring, regular penetration testing, and third-party security audits.
                        </p>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Incident Response</h3>
                        <p className="text-gray-600 text-sm">
                          24/7 incident response team with documented procedures for security incidents and data breaches.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Ethical AI Framework */}
            <FadeIn>
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      Ethical AI Framework
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Our AI systems are built with ethics and responsibility at their core:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li><strong>Fairness & Bias Mitigation:</strong> Regular audits for bias in AI models and decision-making processes</li>
                      <li><strong>Transparency:</strong> Clear documentation of AI model capabilities, limitations, and decision-making processes</li>
                      <li><strong>Accountability:</strong> Human oversight for critical AI decisions and regular performance monitoring</li>
                      <li><strong>Privacy by Design:</strong> Privacy considerations integrated into all AI development and deployment processes</li>
                      <li><strong>Data Governance:</strong> Strict controls over data collection, usage, and retention for AI training</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Regulatory Compliance */}
            <FadeIn>
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      Regulatory Compliance
                    </h2>
                    <p className="text-gray-600 mb-6">
                      We comply with relevant regulations and standards applicable to our industry and geographic reach:
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Data Protection Regulations</h3>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                          <li>GDPR (General Data Protection Regulation)</li>
                          <li>CCPA (California Consumer Privacy Act)</li>
                          <li>LGPD (Brazil&apos;s General Data Protection Law)</li>
                          <li>PIPEDA (Personal Information Protection and Electronic Documents Act)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">Industry Standards</h3>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                          <li>ISO 27001 (Information Security Management)</li>
                          <li>SOC 2 (Trust Services Criteria)</li>
                          <li>PCI DSS (Payment Card Industry Data Security Standard)</li>
                          <li>CSA STAR (Cloud Security Alliance)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 mb-2">AI-Specific Regulations</h3>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                          <li>EU AI Act compliance framework</li>
                          <li>Responsible AI practices aligned with NIST guidelines</li>
                          <li>Regular AI ethics and bias assessments</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Third-Party Assessments */}
            <FadeIn>
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Third-Party Assessments
                </h2>
                <p className="text-gray-600 mb-6">
                  Our security and compliance posture is regularly validated by independent third-party assessors:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Annual SOC 2 Audits</h3>
                      <p className="text-gray-600 text-sm">Comprehensive assessment of our security controls and processes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Penetration Testing</h3>
                      <p className="text-gray-600 text-sm">Regular security testing by certified ethical hackers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900">Vulnerability Assessments</h3>
                      <p className="text-gray-600 text-sm">Continuous monitoring and remediation of security vulnerabilities</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact for Compliance */}
            <FadeIn>
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contact Our Compliance Team
                </h2>
                <p className="text-gray-600 mb-6">
                  For questions about our compliance program, security measures, or to request additional information about our certifications, please contact our compliance team:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
                    Contact Us
                  </a>
                  <a href="mailto:compliance@aqlaan.com" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-gray-200 hover:bg-gray-800 font-semibold rounded-lg transition-all">
                    compliance@aqlaan.com
                  </a>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">
            Last Updated: December 2024
          </p>
        </div>
      </footer>
    </div>
  );
}