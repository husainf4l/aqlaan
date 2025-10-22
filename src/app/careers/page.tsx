"use client";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { MapPin, Briefcase, Users, TrendingUp } from "lucide-react";

export default function CareersPage() {
  const departments = [
    {
      name: "Engineering",
      icon: Briefcase,
      description: "Build the next generation of AI and automation platforms",
      openings: 15,
      locations: ["San Francisco", "London", "Singapore"],
    },
    {
      name: "Product",
      icon: TrendingUp,
      description: "Shape product strategy and drive innovation",
      openings: 8,
      locations: ["San Francisco", "Berlin"],
    },
    {
      name: "Sales & Partnerships",
      icon: Users,
      description: "Grow our enterprise relationships and market presence",
      openings: 12,
      locations: ["New York", "London", "Dubai"],
    },
    {
      name: "Research & Development",
      icon: Briefcase,
      description: "Push the boundaries of AI research and development",
      openings: 10,
      locations: ["San Francisco", "Toronto"],
    },
  ];

  const benefits = [
    { title: "Competitive Salary", desc: "Industry-leading compensation packages" },
    { title: "Equity Stakes", desc: "Participate in company growth with stock options" },
    { title: "Health Insurance", desc: "Comprehensive medical, dental, and vision coverage" },
    { title: "Flexible Work", desc: "Remote-first culture with flexible hours" },
    { title: "Professional Development", desc: "Learning budget and conference attendance" },
    { title: "Wellness Program", desc: "Gym memberships, mental health support" },
  ];

  const jobListings = [
    {
      title: "Senior Machine Learning Engineer",
      department: "Engineering",
      location: "San Francisco",
      level: "Senior",
      type: "Full-time",
    },
    {
      title: "Product Manager - AI Platform",
      department: "Product",
      location: "San Francisco",
      level: "Mid",
      type: "Full-time",
    },
    {
      title: "Enterprise Account Executive",
      department: "Sales",
      location: "New York",
      level: "Senior",
      type: "Full-time",
    },
    {
      title: "AI Research Scientist",
      department: "Research",
      location: "Toronto",
      level: "Senior",
      type: "Full-time",
    },
    {
      title: "Frontend Engineer",
      department: "Engineering",
      location: "London",
      level: "Mid",
      type: "Full-time",
    },
    {
      title: "Solutions Architect",
      department: "Engineering",
      location: "Singapore",
      level: "Senior",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Shape the Future with Us
            </motion.h1>
            <motion.p
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join AQLAAN and be part of a team revolutionizing AI and automation. We&apos;re looking for talented individuals who are passionate about solving complex problems.
            </motion.p>
          </div>
        </FadeIn>
      </section>

      {/* Departments */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">Open Departments</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <FadeIn key={dept.name} delay={index * 0.1}>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Icon className="w-10 h-10 text-blue-400 mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{dept.name}</h3>
                      </div>
                      <div className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full font-semibold">
                        {dept.openings} Open
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{dept.description}</p>
                    <div className="flex items-center text-sm text-gray-500 space-x-2">
                      <MapPin size={16} />
                      <span>{dept.locations.join(", ")}</span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">Why Join AQLAAN</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={benefit.title} delay={index * 0.1}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16">Open Positions</h2>
          </FadeIn>
          <div className="space-y-4">
            {jobListings.map((job, index) => (
              <FadeIn key={job.title} delay={index * 0.05}>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-500 transition-colors flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <span className="flex items-center space-x-1">
                        <Briefcase size={16} />
                        <span>{job.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </span>
                      <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded text-xs font-semibold">
                        {job.level}
                      </span>
                      <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded text-xs font-semibold">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2">
                    Apply Now
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/50 rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                At AQLAAN, we foster a culture of innovation, collaboration, and continuous learning. We believe in empowering our team members to take ownership, experiment, and grow. Our diverse, globally distributed team is united by a passion for advancing AI technology and making a positive impact on the world.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="text-lg font-bold text-blue-400 mb-2">Innovation</h3>
                  <p className="text-gray-400">Encouraged to experiment and push boundaries</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-purple-400 mb-2">Collaboration</h3>
                  <p className="text-gray-400">Cross-functional teams working toward shared goals</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-pink-400 mb-2">Growth</h3>
                  <p className="text-gray-400">Continuous learning and career development</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


    </div>
  );
}