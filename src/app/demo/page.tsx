"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Play, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    companySize: "",
    useCase: "",
    timeline: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Demo request submitted:", formData);
    // You can integrate with your backend API here
  };

  const benefits = [
    {
      icon: <Play className="w-6 h-6" />,
      title: "Live Product Demo",
      description: "See AQLAAN in action with a personalized walkthrough of our AI platform"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Consultation",
      description: "Connect with our AI specialists to discuss your specific use cases and requirements"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Custom Solution Planning",
      description: "Get a tailored roadmap for implementing AI solutions in your organization"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Book a demo at your convenience with our team of AI experts"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Solutions",
      content: "The demo was incredibly insightful. We could see exactly how AQLAAN&apos;s AI would transform our operations.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Innovation",
      company: "Global Dynamics",
      content: "Outstanding presentation. The team&apos;s expertise and the platform&apos;s capabilities exceeded our expectations.",
      rating: 5
    },
    {
      name: "Dr. Emily Watson",
      role: "Director of AI",
      company: "MedTech Innovations",
      content: "The demo clearly showed how AQLAAN can accelerate our healthcare AI initiatives. Highly recommended.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-cyan-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-cyan-600/10" />

        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Book Your
                <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {" "}AI Demo
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
              >
                Experience the power of AQLAAN&apos;s AI platform firsthand. Schedule a personalized demo
                and discover how our enterprise-grade AI solutions can transform your business operations.
              </motion.p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                What You&apos;ll Get from Your Demo
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive demo experience is designed to showcase the full potential
                of AQLAAN&apos;s AI platform and how it can drive transformation in your organization.
              </p>
            </div>
          </SlideUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300 h-full">
                  <div className="p-6">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 text-white">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Schedule Your Personalized Demo
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and our team will contact you within 24 hours
                to schedule your demo session.
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.2}>
            <Card className="bg-gray-900/50 border-gray-800">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Job Title *
                      </label>
                      <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your job title"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Company Size
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Implementation Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediately">Immediately</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="exploring">Just exploring</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Primary Use Case
                    </label>
                    <select
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your primary use case</option>
                      <option value="automation">Process Automation</option>
                      <option value="analytics">Data Analytics & Insights</option>
                      <option value="computer-vision">Computer Vision</option>
                      <option value="nlp">Natural Language Processing</option>
                      <option value="healthcare">Healthcare AI</option>
                      <option value="infrastructure">Infrastructure Monitoring</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your specific needs, challenges, or questions..."
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Schedule My Demo
                    </Button>
                    <p className="text-gray-400 text-sm mt-4">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                      We&apos;ll contact you within 24 hours to schedule your demo.
                    </p>
                  </div>
                </form>
              </div>
            </Card>
          </SlideUp>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                What Our Demo Attendees Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Hear from industry leaders who have experienced our AI platform through personalized demos.
              </p>
            </div>
          </SlideUp>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <SlideUp key={index} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-800 hover:bg-gray-800/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">
                      {testimonial.content}
                    </p>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </SlideUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Demo FAQ
              </h2>
              <p className="text-xl text-gray-300">
                Common questions about our demo process and what to expect.
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.2}>
            <div className="space-y-6">
              {[
                {
                  question: "How long does a demo session last?",
                  answer: "Our standard demo sessions are 45-60 minutes long, including time for Q&A and discussion of your specific use cases."
                },
                {
                  question: "Do I need technical expertise to attend?",
                  answer: "Not at all! Our demos are designed for both technical and non-technical audiences. We&apos;ll explain concepts clearly and focus on business value."
                },
                {
                  question: "What should I prepare before the demo?",
                  answer: "Think about your current challenges, goals, and any specific use cases you&apos;d like to explore. We&apos;ll customize the demo based on your needs."
                },
                {
                  question: "Is the demo recorded?",
                  answer: "With your permission, we can record the session for your reference. All recordings are securely stored and shared only with attendees."
                },
                {
                  question: "What happens after the demo?",
                  answer: "We&apos;ll follow up with additional resources, a detailed proposal if requested, and answer any remaining questions you might have."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}