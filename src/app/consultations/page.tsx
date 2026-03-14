"use client";
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Clock, Award, Zap, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedHeroBlob } from '@/components/animations/AnimatedHeroBlob';
import BackgroundMotion from '@/components/visuals/BackgroundMotion';

// Lazy load heavy components (saves ~600KB on initial load)
const AnimatedTestimonials = dynamic(
  () => import('@/components/ui/animated-testimonials').then(mod => ({ default: mod.AnimatedTestimonials })),
  { ssr: false, loading: () => <div className="h-96 animate-pulse bg-gray-800/20 rounded-3xl" /> }
);

const GlobeFeatureSection = dynamic(
  () => import('@/components/ui/globe-feature-section'),
  { ssr: false, loading: () => <div className="h-screen animate-pulse bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl" /> }
);

interface Consultant {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  rating: number;
  sessionsCompleted: number;
  price: string;
  available: boolean;
  credentials: string[];
  expertise: string[];
  image: string;
}

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
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Background Motion */}
      <BackgroundMotion />
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Hero Blob */}
        <AnimatedHeroBlob />
        
        {/* Animated gradient background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Animated grid background */}
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 0%, transparent 100%)',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '64px 64px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Main content - Centered layout */}
        <div className="max-w-5xl mx-auto relative z-10 w-full">
          <div className="text-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Main heading */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--text)] leading-[1.1] tracking-tighter mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Expert advice,{' '}
                <span className="relative inline-block text-[var(--text)]">
                  on demand
                </span>
              </motion.h1>
              
              <motion.p
                className="text-base md:text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Connect with world-class specialists in real-time. Get instant insights powered by AI technology.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Link href="#experts">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-blue-500/25">
                    Browse Experts
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

              </motion.div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="relative py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4 tracking-tight">
              Trusted by industry leaders
            </h2>
            <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto font-light leading-relaxed">
              Hear from professionals who transformed their organizations with AI consultations
            </p>
          </motion.div>

          <AnimatedTestimonials 
            testimonials={[
              {
                quote: "The AI consultation transformed how we approach cloud infrastructure. The expert's guidance on multi-tenant architecture saved us months of development time and countless architectural mistakes.",
                name: "Sarah Chen",
                designation: "CTO at TechFlow Systems",
                src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop",
              },
              {
                quote: "Working with the ML engineer on our RAG pipeline was a game-changer. Their deep expertise in document intelligence helped us build a production-ready system in weeks, not months.",
                name: "Michael Rodriguez",
                designation: "VP Engineering at DataCore",
                src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop",
              },
              {
                quote: "The ERP integration consultation exceeded all expectations. Our workflow automation now handles 10x the volume with zero manual intervention. Absolutely transformative for our operations.",
                name: "Emily Watson",
                designation: "COO at Enterprise Solutions Inc",
                src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
              },
              {
                quote: "Outstanding expertise in Azure Kubernetes deployment. The consultant's real-world experience and AI-powered insights helped us scale from 100 to 10,000 concurrent users seamlessly.",
                name: "James Kim",
                designation: "Lead DevOps Engineer at CloudScale",
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
              },
              {
                quote: "The combination of human expertise and AI assistance is incredibly powerful. Our team now has a robust document intelligence system that processes thousands of files daily with 99% accuracy.",
                name: "Lisa Thompson",
                designation: "Director of AI at FinTech Innovators",
                src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
              },
            ]}
            autoplay={true}
            className="mx-auto"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 md:py-32 px-6 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-sm font-medium tracking-wider uppercase text-blue-500 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Process
            </motion.p>
            
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4 tracking-tight leading-[1.1]">
              Three simple steps
            </h2>
            <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed max-w-3xl mx-auto font-light">
              Getting expert advice has never been this simple. Start in under 60 seconds.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                number: '01',
                title: 'Choose an expert',
                description: 'Browse our curated network of specialists. Filter by expertise, availability, and ratings to find your perfect match.',
                icon: MessageCircle,
                gradient: 'from-blue-500 to-cyan-500',
                iconColor: 'text-blue-500',
              },
              {
                number: '02',
                title: 'Start chatting',
                description: 'Connect instantly through our secure platform. Share your challenge and get real-time guidance with AI-enhanced insights.',
                icon: Zap,
                gradient: 'from-purple-500 to-pink-500',
                iconColor: 'text-purple-500',
              },
              {
                number: '03',
                title: 'Get solutions',
                description: 'Receive actionable recommendations and strategic advice. Full transcript and AI summary delivered after each session.',
                icon: Award,
                gradient: 'from-green-500 to-emerald-500',
                iconColor: 'text-emerald-500',
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative h-full p-5 rounded-2xl bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient}/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Step number badge */}
                  <div className="relative mb-4">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${step.gradient} text-white font-bold text-sm`}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <step.icon className={`w-5 h-5 ${step.iconColor} group-hover:scale-110 transition-transform duration-500`} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-base font-semibold text-[var(--text)] mb-2 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--muted)] leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </div>

                {/* Arrow connector for desktop */}
                {index < 2 && (
                  <motion.div 
                    className="hidden md:block absolute top-1/2 -right-3 z-10"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[var(--bg)] border-2 border-white/20 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white/40">
                        <path d="M3 6h6m0 0L6 3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Sessions */}
      {sessions.length > 0 && (
        <section className="relative py-20 md:py-32 px-6 bg-[var(--bg-secondary)]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold tracking-wider uppercase text-blue-500 mb-4">Your Activity</p>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--text)] mb-4 tracking-tight">My Sessions</h2>
              <p className="text-sm md:text-base text-[var(--muted)] max-w-2xl mx-auto">
                Your active and past consultation sessions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sessions.map((session, index) => (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative"
                >
                  <div className="relative h-full p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden">
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-[var(--text)] group-hover:text-white transition-colors duration-300">{session.consultant.name}</h3>
                        <div className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
                          session.status === 'active'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : session.status === 'waiting'
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                            : 'bg-gray-500/20 text-white/60 border border-white/10'
                        }`}>
                          {session.status}
                        </div>
                      </div>

                      <p className="text-sm text-[var(--muted)] mb-6 group-hover:text-white/70 transition-colors duration-300">
                        {new Date(session.startTime).toLocaleDateString()} at{' '}
                        {new Date(session.startTime).toLocaleTimeString()}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[var(--muted)] group-hover:text-white/60 transition-colors duration-300">
                          <MessageCircle className="w-4 h-4 inline mr-1" />
                          {session._count.messages} messages
                        </span>
                        <Link href={`/consultations/${session.id}`}>
                          <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-[var(--text)] hover:text-white text-sm font-medium border border-white/10 hover:border-white/20 transition-all duration-300">
                            {session.status === 'active' ? 'Join Chat →' : 'View Details'}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="relative py-24 md:py-32 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-[var(--text)] mb-6 tracking-tighter">
              Built for excellence
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto font-light">
              Enterprise-grade platform with cutting-edge AI technology
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: MessageCircle, 
                title: 'Real-time collaboration', 
                description: 'Instant messaging with typing indicators, read receipts, file sharing, and code snippets. Stay connected without interruption.',
                gradient: 'from-blue-500 to-cyan-500',
                iconBg: 'bg-blue-500',
              },
              { 
                icon: Zap, 
                title: 'AI-powered insights', 
                description: 'Advanced AI analyzes conversations in real-time, providing contextual suggestions and intelligent recommendations.',
                gradient: 'from-purple-500 to-pink-500',
                iconBg: 'bg-purple-500',
              },
              { 
                icon: Award, 
                title: 'Complete analytics', 
                description: 'Comprehensive session transcripts, AI-generated summaries, key insights, and actionable follow-up items.',
                gradient: 'from-green-500 to-emerald-500',
                iconBg: 'bg-green-500',
              },
              { 
                icon: Shield, 
                title: 'Enterprise security', 
                description: 'Bank-level encryption, SOC 2 compliance, and complete data privacy. Your conversations stay confidential.',
                gradient: 'from-orange-500 to-red-500',
                iconBg: 'bg-orange-500',
              },
              { 
                icon: Clock, 
                title: 'Instant availability', 
                description: '24/7 access to our expert network. No scheduling needed—connect with specialists whenever you need them.',
                gradient: 'from-violet-500 to-purple-500',
                iconBg: 'bg-violet-500',
              },
              { 
                icon: Sparkles, 
                title: 'Smart matching', 
                description: 'Our AI matches you with the perfect expert based on your specific needs, industry, and challenges.',
                gradient: 'from-pink-500 to-rose-500',
                iconBg: 'bg-pink-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.08, 
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative h-full"
                >
                  <div className="relative h-full p-8 rounded-2xl bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--card-border)] hover:border-[var(--card-hover-border)] transition-all duration-500 overflow-hidden">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />
                    
                    <div className="relative">
                      {/* Icon */}
                      <div className={`inline-flex w-12 h-12 rounded-xl ${feature.iconBg} items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                      </div>

                      <h3 className="text-xl font-bold text-[var(--text)] mb-3 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[var(--muted)] leading-relaxed group-hover:text-[var(--text)] transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>

                    {/* Shimmer */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--surface)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Card with Globe */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlobeFeatureSection />
          </motion.div>
        </div>
      </section>


    </div>
  );
}