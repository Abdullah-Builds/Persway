# Persway - Product Description Generator

A professional React application that generates compelling, psychology-driven product descriptions using neuro-sales principles.

## Features

- **Real AI-Powered Generation**: Uses OpenAI GPT-4 to transform basic product details into compelling sales copy
- **Dual Description Styles**: Choose between high-converting aggressive style or professional tone
- **Psychology-Based Design**: UI elements designed to build trust and encourage engagement
- **Real-time Preview**: Instant generation and copy-to-clipboard functionality
- **Responsive Design**: Optimized for desktop and mobile devices
- **Professional UI**: Clean, modern interface with smooth animations

## Technology Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for development and building
- **Supabase Edge Functions** for AI backend
- **OpenAI GPT-4** for description generation

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd persway
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## AI Configuration

To enable AI-powered description generation:

1. **Set up Supabase**: Click "Connect to Supabase" in the top right
2. **Configure OpenAI API**: Add your OpenAI API key to Supabase environment variables:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
3. **Deploy Edge Function**: The `generate-description` function will be automatically deployed

### Environment Variables Required:
- `OPENAI_API_KEY`: Your OpenAI API key for GPT-4 access

### Fallback Behavior:
If the AI service is unavailable, the app automatically falls back to local template-based generation.

## Usage

1. **Fill Product Details**: Enter your product information in the form
   - Product Name (required)
   - Category (required)
   - Target Audience (required)
   - Key Features (optional)
   - Benefits (optional)
   - Price Range (optional)
   - Unique Value Proposition (optional)

2. **Choose Style**: Select between "High-Converting" or "Professional" description style

3. **Generate**: Click "Generate Description" to create your sales copy

4. **Copy & Use**: Copy the generated description and use it for your marketing materials

## Project Structure

```
persway/
├── components/
│   ├── Header.tsx          # App header with branding
│   ├── ProductForm.tsx     # Product information input form
│   └── DescriptionOutput.tsx # Generated description display
├── services/
│   └── aiService.ts        # AI API integration service
├── utils/
│   └── descriptionGenerator.ts # Description generation logic
├── supabase/functions/
│   └── generate-description/ # AI backend edge function
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Neuro-Sales Principles Applied

- **Social Proof**: Customer testimonials and user counts
- **Scarcity**: Limited time offers and quantity limitations
- **Authority**: Professional design and expert positioning
- **Reciprocity**: Free bonuses and valuable content
- **Urgency**: Time-sensitive language and calls-to-action
- **Trust Signals**: Guarantees and risk reversal

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions about Persway, please open an issue in the repository.
