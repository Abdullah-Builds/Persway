import React from 'react';
import { Target, Sparkles, ArrowRight, ShoppingBag, Store, Package, Globe } from 'lucide-react';

export interface ProductData {
  name: string;
  category: string;
  targetAudience: string;
  keyFeatures: string;
  benefits: string;
  priceRange: string;
  uniqueValue: string;
  platform: string;
}

interface ProductFormProps {
  productData: ProductData;
  onInputChange: (field: keyof ProductData, value: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const platforms = [
  { value: 'amazon', label: 'Amazon', icon: ShoppingBag },
  { value: 'shopify', label: 'Shopify', icon: Store },
  { value: 'etsy', label: 'Etsy', icon: Package },
  { value: 'ebay', label: 'eBay', icon: Globe },
  { value: 'facebook', label: 'Facebook Marketplace', icon: Globe },
  { value: 'instagram', label: 'Instagram Shop', icon: Globe },
  { value: 'website', label: 'Website/Blog', icon: Globe },
  { value: 'general', label: 'General Use', icon: Target }
];

export const ProductForm: React.FC<ProductFormProps> = ({
  productData,
  onInputChange,
  onGenerate,
  isGenerating
}) => {
  const isFormValid = productData.name && productData.category && productData.targetAudience && productData.platform;

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
      <div className="flex items-center mb-6">
        <Target className="h-6 w-6 text-blue-600 mr-3" />
        <h2 className="text-2xl font-semibold text-gray-900">Product Details</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Name *
          </label>
          <input
            type="text"
            value={productData.name}
            onChange={(e) => onInputChange('name', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="e.g., SmartFit Pro Watch"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category *
          </label>
          <input
            type="text"
            value={productData.category}
            onChange={(e) => onInputChange('category', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="e.g., Fitness Tracker, Software, Course"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Audience *
          </label>
          <input
            type="text"
            value={productData.targetAudience}
            onChange={(e) => onInputChange('targetAudience', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="e.g., Fitness enthusiasts, Small business owners"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Platform *
          </label>
          <div className="relative">
            <select
              value={productData.platform}
              onChange={(e) => onInputChange('platform', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white"
            >
              <option value="">Select a platform...</option>
              {platforms.map((platform) => (
                <option key={platform.value} value={platform.value}>
                  {platform.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              {productData.platform && (
                React.createElement(
                  platforms.find(p => p.value === productData.platform)?.icon || Target,
                  { className: "h-5 w-5 text-gray-400" }
                )
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Key Features
          </label>
          <textarea
            value={productData.keyFeatures}
            onChange={(e) => onInputChange('keyFeatures', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="List your main features..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Benefits
          </label>
          <textarea
            value={productData.benefits}
            onChange={(e) => onInputChange('benefits', e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="What problems does it solve? What outcomes do users get?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <input
            type="text"
            value={productData.priceRange}
            onChange={(e) => onInputChange('priceRange', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="e.g., $99, $49-$199, Free with premium options"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Unique Value Proposition
          </label>
          <textarea
            value={productData.uniqueValue}
            onChange={(e) => onInputChange('uniqueValue', e.target.value)}
            rows={2}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="What makes your product different from competitors?"
          />
        </div>

        <button
          onClick={onGenerate}
          disabled={!isFormValid || isGenerating}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              AI is crafting your description...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5 mr-3" />
              Generate Description
              <ArrowRight className="h-5 w-5 ml-3" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};