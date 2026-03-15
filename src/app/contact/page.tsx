"use client";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AnimatedHeroBlob } from '@/components/animations/AnimatedHeroBlob';
import BackgroundMotion from '@/components/visuals/BackgroundMotion';
import { 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Calendar, 
  CheckCircle, 
  Zap, 
  Brain, 
  BarChart3,
  Users
} from "lucide-react";

interface Session {
  id: string;
  consultantId: string;
  clientId: string;
  startTime: string;
  status: string;
  consultant: {
    name: string;
  };
  client: {
    name: string;
  };
  messages: Record<string, unknown>[];
  _count: {
    messages: number;
  };
}

export default function ConsultationsPage() {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    // In a real app, fetch sessions from API
    // For now, we'll show mock data
    setSessions([]);
  }, []);

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
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-slate-500/10 dark:bg-slate-700/30 border border-slate-500/20 dark:border-slate-600/30 rounded-full px-6 py-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <MessageSquare className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Contact Aqlaan</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Let&apos;s{' '}
              <span className="relative inline-block text-[var(--text)]">
                Connect
              </span>
            </h1>
            
            <p className="text-xl text-[var(--muted)] max-w-3xl mx-auto mb-12 leading-relaxed">
              Instant expert consultations powered by AI. Chat live with professionals
              for personalized guidance, strategy, and implementation support.
            </p>
          </motion.div>


        </div>
      </section>

      {/* Available Consultants */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Schedule Your{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Consultation
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Get a personalized consultation with AQLAAN&apos;s AI and automation experts. Our team will help you discover how we can transform your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
            {/* Consultation Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="mb-6 p-3 bg-blue-500/10 rounded-xl inline-block">
                  <Calendar className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-6">Request a Consultation</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--muted)] mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-[var(--surface)] border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--muted)] mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-[var(--surface)] border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--muted)] mb-2">Company</label>
                    <input type="text" className="w-full px-4 py-3 bg-[var(--surface)] border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your company" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--muted)] mb-2">Industry</label>
                    <select className="w-full px-4 py-3 bg-[var(--surface)] border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors">
                      <option>Select industry</option>
                      <option>Healthcare</option>
                      <option>Manufacturing</option>
                      <option>Finance</option>
                      <option>Retail</option>
                      <option>Technology</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--muted)] mb-2">Preferred Date & Time</label>
                    <input type="datetime-local" className="w-full px-4 py-3 bg-[var(--surface)] border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl">
                    Schedule Consultation
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Consultation Details */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-6 border-white/5 hover:border-blue-500/30 transition-colors">
                <div className="mb-3 p-2 bg-blue-500/10 rounded-lg inline-block">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-blue-400 mb-3">WHAT TO EXPECT</h3>
                <ul className="space-y-2 text-[var(--muted)] text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>30-minute personalized consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Live product walkthrough</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Custom solutions discussion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Q&A with our experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span>Implementation roadmap</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 border-white/5 hover:border-purple-500/30 transition-colors">
                <div className="mb-3 p-2 bg-purple-500/10 rounded-lg inline-block">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-purple-400 mb-3">PERFECT FOR</h3>
                <ul className="space-y-2 text-[var(--muted)] text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>Enterprise decision makers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>Technical teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>Business leaders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>Solution architects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <span>Digital transformation teams</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>



      {/* My Sessions */}
      {sessions.length > 0 && (
        <section className="py-20 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                My{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Sessions
                </span>
              </h2>
              <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
                Your active and past consultation sessions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sessions.map((session, index) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:scale-105 transition-all duration-300 border-white/5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{session.consultant.name}</h3>
                      <div className={`px-3 py-1 rounded-full text-sm ${
                        session.status === 'active'
                          ? 'bg-green-500/20 text-green-400'
                          : session.status === 'waiting'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-gray-500/20 text-[var(--muted)]'
                      }`}>
                        {session.status}
                      </div>
                    </div>

                    <p className="text-[var(--muted)] text-sm mb-4">
                      {new Date(session.startTime).toLocaleDateString()} at{' '}
                      {new Date(session.startTime).toLocaleTimeString()}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[var(--muted)] opacity-80">
                        {session._count.messages} messages
                      </span>
                      <Link href={`/consultations/${session.id}`}>
                        <Button variant="outline" size="sm">
                          {session.status === 'active' ? 'Join Chat' : 'View Details'}
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Live{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Consultations?
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
              Experience the future of professional consulting with real-time AI-powered support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="mb-6 inline-block p-6 bg-blue-500/10 rounded-2xl">
                <Zap className="w-12 h-12 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Chat</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Instant messaging with typing indicators and read receipts for seamless communication.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-6 inline-block p-6 bg-green-500/10 rounded-2xl">
                <Brain className="w-12 h-12 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Assistant</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Intelligent AI assistant joins conversations to provide summaries and suggestions.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="mb-6 inline-block p-6 bg-purple-500/10 rounded-2xl">
                <BarChart3 className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Session Analytics</h3>
              <p className="text-[var(--muted)] leading-relaxed">
                Detailed insights and transcripts from every consultation session.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-block p-4 bg-blue-500/10 rounded-2xl">
              <MessageSquare className="w-12 h-12 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to{' '}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Get Started?
              </span>
            </h2>
            <p className="text-[var(--muted)] text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule your consultation today and discover how Aqlaan can transform your business with cutting-edge AI solutions.
            </p>

          </motion.div>
        </div>
      </section>
    </div>
  );
}