import React from 'react';
import { Brain, Zap, Target, Award, Users, TrendingUp, Shield, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-3xl shadow-lg">
                <Brain className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Persway
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The world's most advanced AI-powered product description generator, built on proven neuro-sales principles and behavioral psychology
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">10,000+</div>
              <div className="text-gray-600 text-sm">Happy Users</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">85%</div>
              <div className="text-gray-600 text-sm">Conversion Boost</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
              <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">2 Sec</div>
              <div className="text-gray-600 text-sm">Generation Time</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-100">
              <Award className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-gray-600 text-sm">Uptime</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-2xl mr-4">
                  <Brain className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Neuro-Sales Technology</h3>
                  <p className="text-gray-600">Advanced psychology meets AI</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Our AI is trained on thousands of high-converting product descriptions and incorporates proven psychological triggers like scarcity, social proof, and urgency to maximize your sales potential.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="h-4 w-4 text-green-500 mr-2" />
                  <span>Behavioral psychology principles</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Sparkles className="h-4 w-4 text-purple-500 mr-2" />
                  <span>Emotional trigger optimization</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4 text-blue-500 mr-2" />
                  <span>Conversion-focused language</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-2xl mr-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Platform Optimization</h3>
                  <p className="text-gray-600">Tailored for every marketplace</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Generate descriptions optimized for specific platforms like Amazon, Shopify, Etsy, and more. Each platform has unique requirements and customer expectations that our AI understands.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Target className="h-4 w-4 text-green-500 mr-2" />
                  <span>Platform-specific formatting</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Sparkles className="h-4 w-4 text-purple-500 mr-2" />
                  <span>SEO-optimized content</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4 text-blue-500 mr-2" />
                  <span>Audience-targeted messaging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto">
              To democratize high-converting copywriting by making advanced neuro-sales techniques accessible to every business owner, entrepreneur, and marketer through the power of AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};