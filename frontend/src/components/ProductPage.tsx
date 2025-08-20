import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { ProductForm, ProductData } from '../components/ProductForm';
import { DescriptionOutput } from '../components/DescriptionOutput';
import { AuthModal } from '../components/AuthModal';
import { AboutSection } from '../components/AboutSection';
import { AIService } from '../../../backend/services/aiService';
import { account } from "../../../backend/Authentication/appwrite";
import { findByEmail } from '../../../backend/Database/database';
import { UserProfile, SetUserDtl } from '../components/UserProfile';
import React from 'react';

function ProductPage() {
  useEffect(() => {
    (async () => {
      try {
        const user = await account.get().catch(() => null);
        if (!user || !user.email) return false;
        const results = await findByEmail(user.email);
        if (!results || results.length === 0) {
          alert("User not registered");
          return false;
        } else {
          SetUserDtl(user);
        }
      } catch {}
    })();
  }, []);

  const [productData, setProductData] = useState<ProductData>({
    name: '',
    category: '',
    targetAudience: '',
    keyFeatures: '',
    benefits: '',
    priceRange: '',
    uniqueValue: '',
    platform: ''
  });

  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [descriptionStyle, setDescriptionStyle] = useState<'aggressive' | 'professional'>('aggressive');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [showUserProfile, setShowUserProfile] = useState(false);

  const handleInputChange = (field: keyof ProductData, value: string) => {
    setProductData(prev => ({ ...prev, [field]: value }));
  };

  const generateDescription = async () => {
    setIsGenerating(true);
    try {
      const description = await AIService.generateDescription(productData, descriptionStyle);
      setGeneratedDescription(description);
    } catch (error) {
      console.error('Failed to generate description:', error);
      setGeneratedDescription('Failed to generate description. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedDescription);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Header
          onUserProfileClick={() => setShowUserProfile(true)}
          onLoginClick={() => handleAuthClick('login')}
          onSignupClick={() => handleAuthClick('signup')}
        />

        {/* Style Toggle */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
            <div className="flex items-center justify-center space-x-4">
              <span className="text-sm font-medium text-gray-700">Description Style:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setDescriptionStyle('aggressive')}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${descriptionStyle === 'aggressive'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  High-Converting
                </button>
                <button
                  onClick={() => setDescriptionStyle('professional')}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${descriptionStyle === 'professional'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  Professional
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <ProductForm
            productData={productData}
            onInputChange={handleInputChange}
            onGenerate={generateDescription}
            isGenerating={isGenerating}
          />

          <DescriptionOutput
            generatedDescription={generatedDescription}
            onCopy={copyToClipboard}
            isCopied={isCopied}
          />
        </div>

        <AboutSection
        />

        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          mode={authMode}
          onSwitchMode={setAuthMode}
        />
        <UserProfile
          isOpen={showUserProfile}
          onClose={() => setShowUserProfile(false)}
        />
      </div>
    </div>
  );
}

export default ProductPage;
