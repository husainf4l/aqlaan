"use client";
import { useState } from 'react';
import { motion } from "framer-motion";
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AnimatedHeroBlob } from '@/components/animations/AnimatedHeroBlob';
import BackgroundMotion from '@/components/visuals/BackgroundMotion';
import { 
  Calendar, 
  Clock, 
  Video, 
  CheckCircle, 
  ArrowRight,
  Users,
  Sparkles,
  Zap,
  Shield,
  BarChart3
} from "lucide-react";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    role: '',
    industry: '',
    teamSize: '',
    interest: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Demo request:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-[var(--bg)] overflow-hidden">
        <AnimatedHeroBlob />
        <BackgroundMotion />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/10 dark:bg-slate-700/30 border border-slate-500/20 dark:border-slate-600/30 mb-6"
          >
            <Video className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Book a Demo</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-[var(--text)] dark:text-white"
          >
            See AQLAAN in Action
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[var(--muted)] max-w-2xl mx-auto mb-12"
          >
            Schedule a personalized demo with our experts and discover how AQLAAN can transform your business with AI
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                {!isSubmitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-[var(--text)] mb-6">Request a Demo</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[var(--text)] mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--text)] mb-2">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[var(--text)] mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Company Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--text)] mb-2">
                            Your Role *
                          </label>
                          <select
                            name="role"
                            required
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select Role</option>
                            <option value="executive">C-Level Executive</option>
                            <option value="director">Director</option>
                            <option value="manager">Manager</option>
                            <option value="engineer">Engineer/Developer</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[var(--text)] mb-2">
                            Industry
                          </label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select Industry</option>
                            <option value="technology">Technology</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="finance">Finance</option>
                            <option value="retail">Retail</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--text)] mb-2">
                            Team Size
                          </label>
                          <select
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select Size</option>
                            <option value="1-10">1-10</option>
                            <option value="11-50">11-50</option>
                            <option value="51-200">51-200</option>
                            <option value="201-1000">201-1000</option>
                            <option value="1000+">1000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[var(--text)] mb-2">
                          Area of Interest *
                        </label>
                        <select
                          name="interest"
                          required
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select Solution</option>
                          <option value="enterprise-automation">Enterprise Automation</option>
                          <option value="computer-vision">Computer Vision</option>
                          <option value="language-intelligence">Language Intelligence</option>
                          <option value="healthcare-ai">Healthcare AI</option>
                          <option value="infrastructure-ai">Infrastructure AI</option>
                          <option value="custom">Custom Solution</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[var(--text)] mb-2">
                          Tell us about your needs
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                          placeholder="What are you looking to achieve with AI?"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-slate-700 dark:bg-slate-800 hover:bg-slate-600 dark:hover:bg-slate-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Schedule Demo
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-slate-500/20 dark:bg-slate-700/40 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text)] mb-4">Thank You!</h3>
                    <p className="text-[var(--muted)] mb-8">
                      We&apos;ve received your demo request. Our team will reach out within 24 hours to schedule your personalized demo.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-[var(--surface)] hover:bg-[var(--card-bg)] text-[var(--text)] px-6 py-3 rounded-xl"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                )}
              </Card>
            </motion.div>

            {/* Right Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* What to Expect */}
              <Card className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-500/20 dark:bg-slate-700/40 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text)] mb-2">What to Expect</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-[var(--muted)]">
                        <CheckCircle className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>30-minute personalized demo session</span>
                      </li>
                      <li className="flex items-start gap-2 text-[var(--muted)]">
                        <CheckCircle className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>Live Q&A with our AI experts</span>
                      </li>
                      <li className="flex items-start gap-2 text-[var(--muted)]">
                        <CheckCircle className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>Customized use case discussion</span>
                      </li>
                      <li className="flex items-start gap-2 text-[var(--muted)]">
                        <CheckCircle className="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
                        <span>Architecture and integration overview</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Demo Features */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-[var(--text)] mb-4">Demo Highlights</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-500/20 dark:bg-slate-700/40 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text)] mb-1">Real-time AI Processing</h4>
                      <p className="text-sm text-[var(--muted)]">See our models in action with live data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-500/20 dark:bg-slate-700/40 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text)] mb-1">Analytics Dashboard</h4>
                      <p className="text-sm text-[var(--muted)]">Explore our intuitive analytics interface</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-500/20 dark:bg-slate-700/40 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text)] mb-1">Enterprise Security</h4>
                      <p className="text-sm text-[var(--muted)]">Learn about our security measures</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Stats */}
              <Card className="p-6 bg-slate-500/5 dark:bg-slate-800/20 border-slate-500/20 dark:border-slate-700/30">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  <h3 className="text-xl font-bold text-[var(--text)]">Why AQLAAN?</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-slate-700 dark:text-slate-300 mb-1">99.9%</div>
                    <div className="text-sm text-[var(--muted)]">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-700 dark:text-slate-300 mb-1">24/7</div>
                    <div className="text-sm text-[var(--muted)]">Support</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-700 dark:text-slate-300 mb-1">50+</div>
                    <div className="text-sm text-[var(--muted)]">Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-700 dark:text-slate-300 mb-1">SOC 2</div>
                    <div className="text-sm text-[var(--muted)]">Certified</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
