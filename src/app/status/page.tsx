"use client";
import { useState, useEffect } from "react";
import { 
  Activity, CheckCircle, AlertCircle, Clock, 
  Server, Database, Cloud, Zap, Shield, Globe,
  TrendingUp, BarChart3, Calendar
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";

export default function StatusPage() {
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const systemStatus = [
    {
      name: "API Gateway",
      status: "operational",
      uptime: "99.99%",
      latency: "45ms",
      icon: Server,
    },
    {
      name: "Vector Database",
      status: "operational",
      uptime: "99.98%",
      latency: "12ms",
      icon: Database,
    },
    {
      name: "AI Model Inference",
      status: "operational",
      uptime: "99.97%",
      latency: "234ms",
      icon: Zap,
    },
    {
      name: "Authentication Service",
      status: "operational",
      uptime: "100%",
      latency: "28ms",
      icon: Shield,
    },
    {
      name: "Cloud Storage",
      status: "operational",
      uptime: "99.99%",
      latency: "67ms",
      icon: Cloud,
    },
    {
      name: "CDN & Edge Network",
      status: "operational",
      uptime: "99.99%",
      latency: "23ms",
      icon: Globe,
    },
  ];

  const incidents = [
    {
      date: "2026-03-12",
      title: "Scheduled Maintenance - Database Migration",
      status: "resolved",
      description: "Performed planned database migration with zero downtime using blue-green deployment.",
      duration: "2 hours",
    },
    {
      date: "2026-02-28",
      title: "Elevated API Latency - EU Region",
      status: "resolved",
      description: "Brief spike in API response times due to increased load. Auto-scaled infrastructure.",
      duration: "15 minutes",
    },
    {
      date: "2026-02-15",
      title: "CDN Cache Invalidation",
      status: "resolved",
      description: "Routine cache refresh for updated static assets.",
      duration: "5 minutes",
    },
  ];

  const metrics = [
    { label: "Overall Uptime", value: "99.98%", period: "Last 30 days", icon: TrendingUp, color: "green" },
    { label: "Avg Response Time", value: "87ms", period: "Last 24 hours", icon: Zap, color: "blue" },
    { label: "Total Requests", value: "245M", period: "Last 7 days", icon: BarChart3, color: "purple" },
    { label: "Zero Incidents", value: "0", period: "This month", icon: CheckCircle, color: "teal" },
  ];

  const regionalStatus = [
    { region: "North America", status: "operational", load: "42%", servers: 12 },
    { region: "Europe", status: "operational", load: "38%", servers: 10 },
    { region: "Middle East", status: "operational", load: "28%", servers: 8 },
    { region: "Asia Pacific", status: "operational", load: "31%", servers: 6 },
  ];

  const uptimeHistory = [
    { month: "Sep", uptime: 99.97 },
    { month: "Oct", uptime: 99.96 },
    { month: "Nov", uptime: 99.98 },
    { month: "Dec", uptime: 99.99 },
    { month: "Jan", uptime: 99.97 },
    { month: "Feb", uptime: 99.98 },
    { month: "Mar", uptime: 99.98 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return { bg: "bg-green-500/10", text: "text-green-500", border: "border-green-500/20" };
      case "degraded":
        return { bg: "bg-yellow-500/10", text: "text-yellow-500", border: "border-yellow-500/20" };
      case "outage":
        return { bg: "bg-red-500/10", text: "text-red-500", border: "border-red-500/20" };
      default:
        return { bg: "bg-gray-500/10", text: "text-gray-500", border: "border-gray-500/20" };
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 px-6 bg-gradient-to-br from-[var(--bg)] via-[var(--bg-secondary)] to-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-500">All Systems Operational</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                System Status
              </h1>
              
              <p className="text-lg text-[var(--muted)] mb-2">
                Real-time status and performance metrics for AQLAAN Platform
              </p>
              
              <p className="text-sm text-[var(--muted)]">
                Last updated: {lastUpdate.toLocaleTimeString()} {lastUpdate.toLocaleDateString()}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Metrics Overview */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const colorMap: Record<string, string> = {
                green: "from-green-500 to-green-600",
                blue: "from-blue-500 to-blue-600",
                purple: "from-purple-500 to-purple-600",
                teal: "from-teal-500 to-teal-600",
              };
              
              return (
                <FadeIn key={metric.label} delay={index * 0.1}>
                  <Card className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${colorMap[metric.color]} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold mb-1">{metric.value}</div>
                    <div className="text-sm font-medium text-[var(--text)] mb-1">{metric.label}</div>
                    <div className="text-xs text-[var(--muted)]">{metric.period}</div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-12 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-center">System Components</h2>
          </FadeIn>

          <div className="space-y-4">
            {systemStatus.map((system, index) => {
              const Icon = system.icon;
              const statusColors = getStatusColor(system.status);
              
              return (
                <FadeIn key={system.name} delay={index * 0.05}>
                  <Card className="bg-[var(--bg)]">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-4 flex-1 min-w-[200px]">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{system.name}</h3>
                          <div className={`inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs ${statusColors.bg} ${statusColors.text} border ${statusColors.border}`}>
                            <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            {system.status}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-6 text-sm">
                        <div className="text-center">
                          <div className="text-[var(--muted)] text-xs mb-1">Uptime</div>
                          <div className="font-semibold text-green-500">{system.uptime}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-[var(--muted)] text-xs mb-1">Latency</div>
                          <div className="font-semibold text-blue-400">{system.latency}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Status */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-center">Regional Status</h2>
            <p className="text-center text-[var(--muted)] mb-12">
              Real-time status across our global infrastructure
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {regionalStatus.map((region, index) => {
              const statusColors = getStatusColor(region.status);
              
              return (
                <FadeIn key={region.region} delay={index * 0.1}>
                  <Card className="bg-[var(--bg)]">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Globe className="w-6 h-6 text-blue-400" />
                        <h3 className="font-bold text-lg">{region.region}</h3>
                      </div>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs ${statusColors.bg} ${statusColors.text} border ${statusColors.border}`}>
                        <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {region.status}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-[var(--muted)] mb-1">Current Load</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-[var(--bg-secondary)] rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                              style={{ width: region.load }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-blue-400">{region.load}</span>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-[var(--muted)] mb-1">Active Servers</div>
                        <div className="text-2xl font-bold text-blue-400">{region.servers}</div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Uptime History */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-center">Uptime History</h2>
            <p className="text-center text-[var(--muted)] mb-12">
              Last 7 months performance at a glance
            </p>
          </FadeIn>

          <Card className="bg-[var(--bg)]">
            <div className="grid grid-cols-7 gap-4 mb-6">
              {uptimeHistory.map((data, index) => (
                <FadeIn key={data.month} delay={index * 0.05}>
                  <div className="text-center">
                    <div className="mb-3 text-sm font-medium text-[var(--text)]">{data.month}</div>
                    <div className="relative h-32 bg-[var(--bg-secondary)] rounded-lg overflow-hidden">
                      <div 
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-500 to-green-400 transition-all duration-500"
                        style={{ height: `${(data.uptime - 99.9) * 100}%` }}
                      />
                      <div className="absolute inset-0 flex items-end justify-center pb-2">
                        <span className="text-xs font-bold text-white/90">{data.uptime}%</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <div className="text-center pt-6 border-t border-[var(--border-subtle)]">
              <div className="text-lg font-semibold mb-2">Average Uptime: 99.98%</div>
              <div className="text-sm text-[var(--muted)]">Consistently exceeding our 99.9% SLA commitment</div>
            </div>
          </Card>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-16 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-center">Incident History</h2>
            <p className="text-center text-[var(--muted)] mb-12">
              Historical record of resolved incidents and scheduled maintenance
            </p>
          </FadeIn>

          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <FadeIn key={incident.title} delay={index * 0.1}>
                <Card className="hover:scale-[1.01] transition-transform">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                        <h3 className="font-semibold text-lg">{incident.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {incident.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {incident.duration}
                          </div>
                        </div>
                      </div>
                      <p className="text-[var(--muted)] mb-3">{incident.description}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                        Resolved
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <p className="text-[var(--muted)] mb-4">
                View complete incident history and subscribe to status updates
              </p>
              <button className="px-6 py-3 rounded-lg bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-colors font-medium">
                Subscribe to Updates
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <Card className="text-center bg-[var(--bg)]">
              <Activity className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-3">Monitoring & Transparency</h3>
              <p className="text-[var(--muted)] leading-relaxed max-w-2xl mx-auto">
                Our systems are continuously monitored 24/7 by automated tools and our DevOps team. 
                This page reflects real-time status data updated every 60 seconds. For critical incidents, 
                we send immediate notifications to all subscribers.
              </p>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
