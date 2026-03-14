"use client";
import { motion } from "framer-motion";
import { 
  Zap, 
  TrendingUp, 
  Shield, 
  Sparkles, 
  FileText, 
  MessageSquare, 
  Package, 
  CheckCircle2,
  ArrowRight,
  Users,
  BarChart3,
  Clock
} from "lucide-react";

export default function EnterpriseAutomationPage() {
  const benefits = [
    {
      title: "Cost Reduction",
      value: "40%",
      description: "Average operational cost savings",
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-500",
    },
    {
      title: "Efficiency Gain",
      value: "60%",
      description: "Improvement in process efficiency",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500",
    },
    {
      title: "Error Reduction",
      value: "80%",
      description: "Reduction in manual errors",
      icon: CheckCircle2,
      gradient: "from-green-500 to-emerald-500",
      iconColor: "text-emerald-500",
    },
    {
      title: "Scalability",
      value: "∞",
      description: "Unlimited scaling potential",
      icon: BarChart3,
      gradient: "from-orange-500 to-red-500",
      iconColor: "text-orange-500",
    },
  ];

  const features = [
    {
      title: "Intelligent Process Automation",
      description: "Automate complex business processes with AI-powered decision making and workflow optimization.",
      details: ["Rule-based automation", "Machine learning integration", "Real-time monitoring"],
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Document Processing",
      description: "Extract, classify, and process documents automatically with advanced OCR and NLP capabilities.",
      details: ["Multi-format support", "Data extraction", "Compliance automation"],
      icon: FileText,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Customer Service Automation",
      description: "Handle customer inquiries 24/7 with intelligent chatbots and automated ticketing systems.",
      details: ["Natural language processing", "Multi-channel support", "Sentiment analysis"],
      icon: MessageSquare,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Supply Chain Optimization",
      description: "Optimize inventory management, demand forecasting, and logistics with predictive analytics.",
      details: ["Demand forecasting", "Inventory optimization", "Route optimization"],
      icon: Package,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const caseStudies = [
    {
      company: "Global Manufacturing Corp",
      result: "Reduced operational costs by 45% and improved delivery times by 30%",
      industry: "Manufacturing",
      metric: "45%",
      metricLabel: "Cost Reduction",
    },
    {
      company: "Financial Services Inc",
      result: "Automated 80% of manual processes, saving 200+ employee hours weekly",
      industry: "Finance",
      metric: "200+",
      metricLabel: "Hours Saved/Week",
    },
    {
      company: "Healthcare Network",
      result: "Streamlined patient onboarding and reduced administrative errors by 75%",
      industry: "Healthcare",
      metric: "75%",
      metricLabel: "Error Reduction",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Analyze",
      description: "Deep dive into your current processes to identify automation opportunities and pain points.",
      icon: Users,
    },
    {
      step: "02",
      title: "Design",
      description: "Create custom automation workflows tailored to your specific business requirements.",
      icon: Shield,
    },
    {
      step: "03",
      title: "Deploy",
      description: "Implement and integrate automation solutions seamlessly into your existing infrastructure.",
      icon: Sparkles,
    },
    {
      step: "04",
      title: "Optimize",
      description: "Continuously monitor, measure, and improve automation performance for maximum ROI.",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
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
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text)] leading-[1.1] tracking-tighter mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Transform Operations with{" "}
              <span className="relative inline-block text-[var(--text)]">
                Intelligent Automation
              </span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Scale your business operations with AI-powered automation. Reduce costs by 40%, eliminate errors, and unlock unlimited growth potential.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text)]">
              Measurable Impact
            </h2>
            <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto">
              Real results from enterprise automation delivered to businesses worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <motion.div
                    className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -8 }}
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.7 }}
                    />

                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${benefit.gradient} mb-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className={`text-4xl font-bold mb-3 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                        {benefit.value}
                      </div>
                      
                      <h3 className="text-lg font-bold mb-2 text-[var(--text)] group-hover:text-white transition-colors">
                        {benefit.title}
                      </h3>
                      
                      <p className="text-xs text-[var(--muted)] leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-6 bg-[var(--bg-secondary)] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text)]">
              Comprehensive Solutions
            </h2>
            <p className="text-base md:text-lg text-[var(--muted)] max-w-2xl mx-auto">
              End-to-end automation for every business process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <motion.div
                    className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden h-full"
                    whileHover={{ y: -8 }}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.7 }}
                    />

                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold mb-4 text-[var(--text)] group-hover:text-white transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-[var(--muted)] mb-6 leading-relaxed">
                        {feature.description}
                      </p>

                      <ul className="space-y-3">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-[var(--border)] mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Methodology
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--text)]">
              How We Automate
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              A proven four-step process to transform your operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {/* Arrow connector (except last item) */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-3 z-20">
                      <ArrowRight className="w-6 h-6 text-[var(--muted)]" />
                    </div>
                  )}

                  <motion.div
                    className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden h-full"
                    whileHover={{ y: -8 }}
                  >
                    {/* Gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10">
                      {/* Step number */}
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-slate-700 dark:bg-slate-800 mb-6">
                        <span className="text-2xl font-bold text-white">{step.step}</span>
                      </div>

                      {/* Icon */}
                      <div className="mb-6">
                        <Icon className="w-8 h-8 text-slate-600 dark:text-slate-400" />
                      </div>

                      <h3 className="text-xl font-bold mb-4 text-[var(--text)] group-hover:text-white transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-sm text-[var(--muted)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-32 px-6 bg-[var(--bg-secondary)] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-[var(--border)] mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--text)]">
              Proven Success
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              Real-world transformations from leading enterprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <motion.div
                  className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden h-full"
                  whileHover={{ y: -8 }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.7 }}
                  />

                  <div className="relative z-10">
                    {/* Industry badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
                      <span className="text-xs font-semibold text-orange-400">{study.industry}</span>
                    </div>

                    {/* Company */}
                    <h3 className="text-xl font-bold mb-4 text-[var(--text)] group-hover:text-white transition-colors">
                      {study.company}
                    </h3>

                    {/* Metric display */}
                    <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                        {study.metric}
                      </div>
                      <div className="text-sm text-[var(--muted)]">{study.metricLabel}</div>
                    </div>

                    {/* Result */}
                    <p className="text-sm text-[var(--muted)] leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-500/10 dark:bg-slate-700/30 border border-slate-500/20 dark:border-slate-600/30 backdrop-blur-xl mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                Ready to Transform?
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--text)]">
              Start Your Automation Journey
            </h2>
            
            <p className="text-xl text-[var(--muted)] mb-12 max-w-2xl mx-auto">
              Join hundreds of enterprises already transforming their operations with intelligent automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold overflow-hidden shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              
              <motion.button
                className="px-8 py-4 rounded-xl bg-[var(--card-bg)] backdrop-blur-sm border-2 border-[var(--border)] text-[var(--text)] font-semibold hover:bg-[var(--surface)] hover:border-[var(--card-hover-border)] transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}