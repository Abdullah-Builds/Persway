import React from 'react';
import { Zap, Copy, Check, Brain, Sparkles, Target, TrendingUp, Award, Lightbulb, Rocket } from 'lucide-react';

interface DescriptionOutputProps {
  generatedDescription: string;
  onCopy: () => void;
  isCopied: boolean;
}

export const DescriptionOutput: React.FC<DescriptionOutputProps> = ({
  generatedDescription,
  onCopy,
  isCopied
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Zap className="h-6 w-6 text-indigo-600 mr-3" />
          <h2 className="text-2xl font-semibold text-gray-900">Generated Description</h2>
        </div>
        {generatedDescription && (
          <button
            onClick={onCopy}
            className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-200"
          >
            {isCopied ? (
              <>
                <Check className="h-4 w-4 mr-2 text-green-600" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 mr-2" />
                Copy
              </>
            )}
          </button>
        )}
      </div>

      <div className="min-h-[400px] bg-gray-50 rounded-2xl p-6">
        {generatedDescription ? (
          <div className="prose prose-sm max-w-none">
            <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
              {generatedDescription}
            </pre>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            {/* Magic Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 w-full max-w-2xl">
              {/* Ready to Create Magic Card */}
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-2xl">
                <Brain className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Ready to Create Magic?
                </h3>
                <p className="text-gray-500 text-sm">
                  Let our AI craft compelling, psychology-driven descriptions that convert.
                </p>
              </div>

              {/* Neuro-Sales Powered Card */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl">
                <Sparkles className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Neuro-Sales Powered
                </h3>
                <p className="text-gray-500 text-sm">
                  Advanced psychology principles that trigger buying decisions.
                </p>
              </div>

              {/* Conversion Focused Card */}
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-2xl">
                <Target className="h-10 w-10 text-green-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Conversion Focused
                </h3>
                <p className="text-gray-500 text-sm">
                  Every word is optimized to maximize your sales potential.
                </p>
              </div>

              {/* Instant Results Card */}
              <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-2xl">
                <Rocket className="h-10 w-10 text-orange-600 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Instant Results
                </h3>
                <p className="text-gray-500 text-sm">
                  Generate professional descriptions in seconds, not hours.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 w-full max-w-md">
              <div className="flex items-center mb-3">
                <Award className="h-5 w-5 text-yellow-500 mr-2" />
                <span className="font-medium text-gray-700">What You Get:</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-blue-500 mr-2" />
                  <span>Psychology-driven copy that converts</span>
                </div>
                <div className="flex items-center">
                  <Lightbulb className="h-4 w-4 text-yellow-500 mr-2" />
                  <span>Multiple style variations</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 text-purple-500 mr-2" />
                  <span>Instant copy-to-clipboard</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {generatedDescription && (
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <div className="flex items-start">
            <div className="bg-green-500 rounded-full p-1 mr-3 mt-0.5">
              <Check className="h-3 w-3 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-green-800 mb-1">Description Generated!</h4>
              <p className="text-sm text-green-700">
                Your neuro-sales optimized product description is ready. Copy it and watch your conversions soar!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};