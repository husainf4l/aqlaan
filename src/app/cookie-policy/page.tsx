import FadeIn from '@/components/animations/FadeIn';
import { Cookie } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full">
                <Cookie className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              This Cookie Policy explains how AQLAAN uses cookies and similar technologies to enhance your experience on our platform.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">

            {/* What Are Cookies */}
            <FadeIn>
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <div className="flex items-start space-x-4">
                  <Cookie className="h-6 w-6 text-blue-600 mt-1 shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      What Are Cookies?
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our platform.
                    </p>
                    <p className="text-gray-600">
                      Cookies can be categorized as essential, functional, analytics, and marketing cookies, each serving different purposes in enhancing your interaction with our services.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Contact Us */}
            <FadeIn>
              <div className="bg-white rounded-lg shadow-sm border p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Cookie Policy or our use of cookies, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all">
                    Contact Us
                  </a>
                  <a href="mailto:privacy@aqlaan.com" className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-gray-200 hover:bg-gray-800 font-semibold rounded-lg transition-all">
                    privacy@aqlaan.com
                  </a>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">
            Last Updated: December 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
