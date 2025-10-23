import { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Community | AQLAAN",
  description: "Join the AQLAAN developer community. Connect with fellow developers, share knowledge, and contribute to the future of AI.",
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Join Our Community
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Connect with thousands of developers, share knowledge, and help shape the future of AI.
                Whether you're a seasoned developer or just getting started, there's a place for you in the AQLAAN community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  Join Discord
                </Button>
                <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300">View GitHub</Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Community by Numbers</h2>
              <p className="text-gray-400 text-lg">
                Growing together, one developer at a time.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn>
              <Card className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2">12K+</div>
                <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                  Community Members
                </div>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-400 group-hover:text-green-400 transition-colors">
                  Countries Represented
                </div>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-purple-400 mb-2">1.2K+</div>
                <div className="text-gray-400 group-hover:text-purple-400 transition-colors">
                  Open Source Contributors
                </div>
              </Card>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Card className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-400 group-hover:text-yellow-400 transition-colors">
                  Community Support
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Community Features</h2>
              <p className="text-gray-400 text-lg">
                Everything you need to connect, learn, and contribute.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn>
              <Card className="text-center group hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">Discussion Forums</h3>
                <p className="text-gray-400 mb-4">
                  Engage in technical discussions, ask questions, and share your knowledge with the community.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2">
                  Join Forums
                </Button>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="text-center group hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">Community Events</h3>
                <p className="text-gray-400 mb-4">
                  Attend webinars, hackathons, and meetups. Stay updated on upcoming community events.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2">
                  View Events
                </Button>
              </Card>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Card className="text-center group hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">Open Source</h3>
                <p className="text-gray-400 mb-4">
                  Contribute to our open-source projects and help build the future of AI together.
                </p>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-2">
                  Contribute
                </Button>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
              <p className="text-gray-400 text-lg">
                Ready to join the AQLAAN community? Here's how you can get started.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            <FadeIn>
              <div>
                <h3 className="text-2xl font-semibold mb-4">For Developers</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    <span>Access our comprehensive API documentation and SDKs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    <span>Participate in our bug bounty program</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    <span>Contribute to open-source projects on GitHub</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                    <span>Join technical discussions and help others</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-2xl font-semibold mb-4">For Organizations</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    <span>Partner with us for enterprise integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    <span>Access exclusive enterprise support channels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    <span>Participate in beta testing programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 shrink-0"></div>
                    <span>Host joint events and webinars</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}