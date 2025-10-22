"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

interface Consultant {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  price: string;
  available: boolean;
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
  const [consultants] = useState<Consultant[]>([
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      specialty: 'AI Strategy & Implementation',
      rating: 5,
      price: '$150/hour',
      available: true,
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      specialty: 'Machine Learning Engineering',
      rating: 5,
      price: '$180/hour',
      available: true,
    },
    {
      id: '3',
      name: 'Dr. Emily Watson',
      specialty: 'Data Science & Analytics',
      rating: 5,
      price: '$140/hour',
      available: false,
    },
  ]);

  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    // In a real app, fetch sessions from API
    // For now, we'll show mock data
    setSessions([]);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-linear-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Live Consultations
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Instant expert consultations powered by AI. Chat live with professionals
              for personalized guidance, strategy, and implementation support.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
                Browse Consultants
              </Button>
              <Button variant="outline">View My Sessions</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Available Consultants */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Expert Consultants</h2>
              <p className="text-gray-400 text-lg">
                Connect with industry-leading AI and technology experts.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultants.map((consultant, index) => (
              <FadeIn key={consultant.id} delay={index * 0.1}>
                <Card className="group hover:scale-105 transition-transform duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {consultant.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm ${
                      consultant.available
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {consultant.available ? 'Available' : 'Busy'}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {consultant.name}
                  </h3>
                  <p className="text-gray-400 mb-3">{consultant.specialty}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {'★'.repeat(consultant.rating)}
                    </div>
                    <span className="text-sm text-gray-500">({consultant.rating}.0)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-400">{consultant.price}</span>
                    <Button
                      className="bg-linear-to-r from-blue-600 to-purple-500 hover:from-blue-700 hover:to-purple-600"
                      disabled={!consultant.available}
                    >
                      {consultant.available ? 'Book Session' : 'Unavailable'}
                    </Button>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* My Sessions */}
      {sessions.length > 0 && (
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">My Sessions</h2>
                <p className="text-gray-400 text-lg">
                  Your active and past consultation sessions.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sessions.map((session, index) => (
                <FadeIn key={session.id} delay={index * 0.1}>
                  <Card className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{session.consultant.name}</h3>
                      <div className={`px-3 py-1 rounded-full text-sm ${
                        session.status === 'active'
                          ? 'bg-green-500/20 text-green-400'
                          : session.status === 'waiting'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {session.status}
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4">
                      {new Date(session.startTime).toLocaleDateString()} at{' '}
                      {new Date(session.startTime).toLocaleTimeString()}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {session._count.messages} messages
                      </span>
                      <Link href={`/consultations/${session.id}`}>
                        <Button variant="outline" size="sm">
                          {session.status === 'active' ? 'Join Chat' : 'View Details'}
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Live Consultations?</h2>
              <p className="text-gray-400 text-lg">
                Experience the future of professional consulting with real-time AI-powered support.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="text-4xl mb-4 font-bold text-blue-400">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Real-time Chat</h3>
                <p className="text-gray-400">
                  Instant messaging with typing indicators and read receipts for seamless communication.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="text-4xl mb-4 font-bold text-green-400">🤖</div>
                <h3 className="text-xl font-semibold mb-3">AI Assistant</h3>
                <p className="text-gray-400">
                  Intelligent AI assistant joins conversations to provide summaries and suggestions.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="text-4xl mb-4 font-bold text-purple-400">📊</div>
                <h3 className="text-xl font-semibold mb-3">Session Analytics</h3>
                <p className="text-gray-400">
                  Detailed insights and transcripts from every consultation session.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-linear-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready for Expert Guidance?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Book your first consultation today and experience the power of live AI expertise.
            </p>
            <Button className="bg-white text-blue-600 font-bold hover:bg-gray-100 px-8 py-4">
              Start Consulting
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}