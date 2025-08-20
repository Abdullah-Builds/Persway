import { ProductData } from '../../frontend/src/components/ProductForm';

export class AIService {
  private static readonly API_BASE_URL = 'http://localhost:5000';

  static async generateDescription(productData: ProductData, style: 'aggressive' | 'professional'): Promise<string> {
    try {
      debugger;
      console.log('🚀 Sending request to backend...', { productData, style });
      
      const response = await fetch(`${this.API_BASE_URL}/api/data`, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productData: {
            ...productData,
            style 
          }
        })
      });

      console.log('📡 Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Backend error:', errorText);
        throw new Error(`Backend error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('✅ Backend response:', data);

      let generatedText = '';
      
      if (data.choices && data.choices[0] && data.choices[0].message) {
        // OpenRouter format
        generatedText = data.choices[0].message.content;
      } else if (data.message) {
        // Your custom format
        generatedText = data.message;
      } else if (typeof data === 'string') {
        // Direct string response
        generatedText = data;
      } else {
        console.warn('⚠️ Unexpected response format:', data);
        generatedText = JSON.stringify(data);
      }

      if (!generatedText || generatedText.trim() === '') {
        throw new Error('Empty response from AI service');
      }

      return generatedText;

    } catch (error) {
      console.error('❌ AI Service Error:', error);
      
      // Check if it's a network error
      if (error instanceof TypeError && error.message.includes('fetch')) {
        console.warn('🔄 Network error, falling back to local generation');
        return this.generateLocalDescription(productData, style);
      }
      
      // For other errors, still provide fallback
      console.warn('🔄 AI service failed, using fallback generation');
      return this.generateLocalDescription(productData, style);
    }
  }

  private static generateLocalDescription(productData: ProductData, style: 'aggressive' | 'professional'): string {
    const { name, category, targetAudience, keyFeatures, benefits, priceRange, uniqueValue, platform } = productData;

    if (style === 'aggressive') {
      return `🚀 INTRODUCING ${name.toUpperCase()} - THE GAME-CHANGER FOR ${targetAudience.toUpperCase()}

Transform your ${category.toLowerCase()} experience with the revolutionary ${name} - specifically engineered for discerning ${targetAudience.toLowerCase()} who demand excellence.

🎯 BREAKTHROUGH FEATURES THAT DELIVER RESULTS
${keyFeatures || 'Advanced capabilities designed to exceed your expectations'}

💡 UNLOCK THESE POWERFUL BENEFITS
${benefits || 'Experience transformative results that matter to your success'}

⚡ EXCLUSIVE COMPETITIVE ADVANTAGE
${uniqueValue || 'What sets us apart is our relentless commitment to your success'}

💰 SMART INVESTMENT FOR MAXIMUM ROI
${priceRange ? `Starting at just ${priceRange}` : 'Competitively priced for exceptional value'} - because premium quality shouldn't compromise your budget.

🔥 LIMITED TIME OPPORTUNITY
Join over 10,000+ satisfied ${targetAudience.toLowerCase()} who've already revolutionized their ${category.toLowerCase()} approach with ${name}.

⭐ RISK-FREE GUARANTEE
We're so confident in ${name}'s ability to transform your results, we back it with our 30-day satisfaction guarantee.

🎁 EXCLUSIVE BONUS: Order today and receive our premium ${category} optimization guide (valued at $97) - absolutely FREE!

Perfect for ${platform === 'amazon' ? 'Amazon listings' : platform === 'shopify' ? 'Shopify stores' : platform === 'etsy' ? 'Etsy shops' : `${platform} marketplace`}.

Don't let your competitors gain the advantage. Secure your ${name} today and experience the difference that premium ${category.toLowerCase()} solutions make.

ORDER NOW - Your future self will thank you for making this smart decision today.

[GET ${name.toUpperCase()} NOW] - Limited quantities available`;
    } else {
      return `Discover ${name} - The Premium ${category} Solution for ${targetAudience}

Are you tired of settling for mediocre ${category.toLowerCase()} options? ${name} changes everything.

WHAT MAKES ${name.toUpperCase()} DIFFERENT:
• ${keyFeatures || 'Cutting-edge features that deliver real results'}
• ${benefits || 'Proven benefits that transform your experience'}
• ${uniqueValue || 'Unique advantages you won\'t find anywhere else'}

PERFECT FOR:
✓ ${targetAudience} seeking premium quality
✓ Professionals who value efficiency and results
✓ Anyone ready to upgrade their ${category.toLowerCase()} experience
✓ Optimized for ${platform === 'amazon' ? 'Amazon marketplace' : platform === 'shopify' ? 'Shopify stores' : platform === 'etsy' ? 'Etsy marketplace' : `${platform} platform`}

INVESTMENT: ${priceRange || 'Competitive pricing with exceptional value'}

Ready to experience the ${name} difference?

[Order ${name} Today] - Join thousands of satisfied customers worldwide.`;
    }
  }
}