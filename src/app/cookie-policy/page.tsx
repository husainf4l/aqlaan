"use client";
import { useState } from "react";
import { Cookie, Calendar, Shield, Settings, CheckCircle, X } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function CookiePolicyPage() {
  const lastUpdated = "March 14, 2026";
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });

  const cookieTypes = [
    {
      name: "Essential Cookies",
      required: true,
      description: "These cookies are necessary for the website to function and cannot be disabled. They enable core functionality such as security, authentication, and session management.",
      examples: [
        { name: "session_id", duration: "Session", purpose: "Maintains user session and authentication state" },
        { name: "csrf_token", duration: "Session", purpose: "Protects against cross-site request forgery attacks" },
        { name: "cookie_consent", duration: "1 year", purpose: "Stores your cookie preferences" },
      ]
    },
    {
      name: "Analytics Cookies",
      required: false,
      description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our services.",
      examples: [
        { name: "_ga", duration: "2 years", purpose: "Google Analytics - distinguishes users" },
        { name: "_gid", duration: "24 hours", purpose: "Google Analytics - distinguishes users" },
        { name: "aqlaan_analytics", duration: "1 year", purpose: "Internal analytics for platform usage patterns" },
      ]
    },
    {
      name: "Marketing Cookies",
      required: false,
      description: "These cookies track your visit to our website and the pages you interact with. We use this information to show you more relevant ads and personalize your experience.",
      examples: [
        { name: "fbp", duration: "3 months", purpose: "Facebook Pixel - tracks conversions and retargeting" },
        { name: "li_sugr", duration: "90 days", purpose: "LinkedIn - browser identification" },
        { name: "aqlaan_campaign", duration: "30 days", purpose: "Tracks campaign attribution and referrals" },
      ]
    },
  ];

  const thirdPartyCookies = [
    { provider: "Google Analytics", purpose: "Website analytics and performance measurement", privacy: "https://policies.google.com/privacy" },
    { provider: "Facebook", purpose: "Conversion tracking and advertising", privacy: "https://www.facebook.com/privacy" },
    { provider: "LinkedIn", purpose: "Professional network integration and analytics", privacy: "https://www.linkedin.com/legal/privacy-policy" },
    { provider: "Stripe", purpose: "Payment processing and fraud prevention", privacy: "https://stripe.com/privacy" },
  ];

  const handleSavePreferences = () => {
    // In a real implementation, this would save to cookies/localStorage
    console.log("Saved preferences:", cookiePreferences);
    alert("Cookie preferences saved successfully!");
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-[var(--bg)] via-[var(--bg-secondary)] to-[var(--bg)]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Cookie className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Cookie Policy</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Cookie Policy
              </h1>
              
              <p className="text-lg text-[var(--muted)] mb-2">
                How we use cookies and similar technologies
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm text-[var(--muted)]">
                <Calendar className="w-4 h-4" />
                Last Updated: {lastUpdated}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card>
              <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our services, and improving our platform.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period). We also use first-party cookies (set by us) and third-party cookies (set by our partners).
              </p>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Cookie Preferences */}
      <section className="py-12 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card className="bg-[var(--bg)]">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold">Manage Cookie Preferences</h2>
              </div>
              
              <div className="space-y-6">
                {cookieTypes.map((type) => (
                  <div key={type.name} className="border border-[var(--border-subtle)] rounded-lg p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                          {type.name}
                          {type.required && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-normal">
                              Always Active
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-[var(--muted)] mb-4">{type.description}</p>
                      </div>
                      {!type.required && (
                        <button
                          onClick={() => {
                            const key = type.name.toLowerCase().replace(' cookies', '') as keyof typeof cookiePreferences;
                            setCookiePreferences(prev => ({ ...prev, [key]: !prev[key] }));
                          }}
                          className={`flex-shrink-0 w-12 h-6 rounded-full transition-colors relative ${
                            cookiePreferences[type.name.toLowerCase().replace(' cookies', '') as keyof typeof cookiePreferences]
                              ? 'bg-blue-500'
                              : 'bg-gray-600'
                          }`}
                        >
                          <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                            cookiePreferences[type.name.toLowerCase().replace(' cookies', '') as keyof typeof cookiePreferences]
                              ? 'translate-x-6'
                              : 'translate-x-0.5'
                          }`} />
                        </button>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      {type.examples.map((example) => (
                        <div key={example.name} className="text-sm bg-[var(--bg-secondary)] p-3 rounded">
                          <div className="flex justify-between items-start gap-4 flex-wrap">
                            <div className="flex-1 min-w-[200px]">
                              <span className="font-mono text-blue-400">{example.name}</span>
                              <p className="text-[var(--muted)] mt-1">{example.purpose}</p>
                            </div>
                            <span className="text-[var(--muted)] text-xs whitespace-nowrap">{example.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex gap-4 justify-end">
                <Button onClick={handleSavePreferences} className="bg-gradient-to-r from-blue-600 to-cyan-500">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
                <Button variant="outline" onClick={() => setCookiePreferences({ essential: true, analytics: false, marketing: false })}>
                  <X className="w-4 h-4 mr-2" />
                  Reject Optional
                </Button>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Third-Party Cookies */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-center">Third-Party Cookies</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-6">
            {thirdPartyCookies.map((cookie, index) => (
              <FadeIn key={cookie.provider} delay={index * 0.1}>
                <Card className="h-full">
                  <h3 className="font-bold text-lg mb-2">{cookie.provider}</h3>
                  <p className="text-sm text-[var(--muted)] mb-4">{cookie.purpose}</p>
                  <a 
                    href={cookie.privacy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                  >
                    View Privacy Policy →
                  </a>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How to Control Cookies */}
      <section className="py-12 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card className="bg-[var(--bg)]">
              <h2 className="text-2xl font-bold mb-6">How to Control Cookies</h2>
              <div className="space-y-4 text-[var(--muted)] leading-relaxed">
                <p>
                  You can control and manage cookies in several ways:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies. Check your browser&apos;s help section for instructions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>Preference Center:</strong> Use our cookie preference manager above to enable or disable specific cookie categories.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>Third-Party Tools:</strong> Use opt-out tools provided by advertising networks and analytics providers.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>Do Not Track:</strong> We respect Do Not Track (DNT) signals from your browser.</span>
                  </li>
                </ul>
                <p className="mt-6 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg text-sm">
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website. Essential cookies cannot be disabled as they are necessary for the site to work properly.
                </p>
              </div>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card className="text-center bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:75px_75px]" />
              <div className="relative">
                <Shield className="w-12 h-12 mx-auto mb-4 text-white/90" />
                <h2 className="text-2xl font-bold text-white mb-3">Questions About Cookies?</h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Contact our privacy team for more information about our cookie practices.
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
