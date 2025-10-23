import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "System Status | AQLAAN",
  description: "Real-time status of AQLAAN services and systems. Check uptime, incidents, and maintenance schedules.",
};

export default function StatusPage() {
  const services = [
    {
      name: "AI Platform API",
      status: "operational",
      uptime: "99.98%",
    },
    {
      name: "Computer Vision API",
      status: "operational",
      uptime: "99.95%",
    },
    {
      name: "Language Intelligence API",
      status: "operational",
      uptime: "99.97%",
    },
    {
      name: "Dashboard & Console",
      status: "operational",
      uptime: "99.99%",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                System Status
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Real-time status of all AQLAAN services and systems. We monitor our infrastructure
                24/7 to ensure reliable service delivery for our customers.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">All Systems Operational</span>
                </div>
                <div className="text-gray-400">
                  99.97% uptime this month
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  Subscribe to Updates
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">View API Status</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Current Status</h2>
              <p className="text-gray-400 text-lg">
                Real-time status of all AQLAAN services and components.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.name} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        service.status === 'operational' ? 'bg-green-400' :
                        service.status === 'degraded' ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`}></div>
                      <span className={`text-sm font-semibold capitalize ${
                        service.status === 'operational' ? 'text-green-400' :
                        service.status === 'degraded' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="text-gray-500">Uptime</div>
                    <div className="font-semibold text-green-400">{service.uptime}</div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Recent Incidents</h2>
              <p className="text-gray-400 text-lg">
                Historical record of service incidents and their resolutions.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            <FadeIn>
              <Card className="border-l-4 border-green-400">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-1">All Systems Operational</h3>
                    <p className="text-gray-400 text-sm">No recent incidents</p>
                  </div>
                  <div className="text-sm text-gray-500">Last updated: Just now</div>
                </div>
                <p className="text-gray-400">
                  All AQLAAN services are operating normally. Our monitoring systems show no active issues.
                </p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="border-l-4 border-yellow-400">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-1">Minor API Latency</h3>
                    <p className="text-gray-400 text-sm">Resolved - October 20, 2025</p>
                  </div>
                  <div className="text-sm text-gray-500">Duration: 15 minutes</div>
                </div>
                <p className="text-gray-400">
                  Temporary increase in API response times due to high traffic. Issue was automatically resolved by our scaling systems.
                </p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="border-l-4 border-green-400">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-1">Scheduled Maintenance</h3>
                    <p className="text-gray-400 text-sm">Completed - October 15, 2025</p>
                  </div>
                  <div className="text-sm text-gray-500">Duration: 2 hours</div>
                </div>
                <p className="text-gray-400">
                  Routine infrastructure maintenance completed successfully. No service disruption occurred.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Upcoming Maintenance</h2>
              <p className="text-gray-400 text-lg">
                Planned maintenance windows and system updates.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <Card className="group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                    Database Optimization
                  </h3>
                  <div className="text-sm text-gray-500">November 5, 2025</div>
                </div>
                <div className="text-sm text-gray-400 mb-3">
                  <div>Time: 02:00 - 04:00 UTC</div>
                  <div>Expected Duration: 2 hours</div>
                </div>
                <p className="text-gray-400 text-sm">
                  Routine database maintenance to improve performance. Minimal impact expected.
                </p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold group-hover:text-green-400 transition-colors">
                    API Version Update
                  </h3>
                  <div className="text-sm text-gray-500">November 12, 2025</div>
                </div>
                <div className="text-sm text-gray-400 mb-3">
                  <div>Time: 01:00 - 03:00 UTC</div>
                  <div>Expected Duration: 2 hours</div>
                </div>
                <p className="text-gray-400 text-sm">
                  Deployment of new API features and security updates. Backward compatibility maintained.
                </p>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}