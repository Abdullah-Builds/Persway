import React from 'react';
import { Brain, User } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
  onUserProfileClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLoginClick, onSignupClick, onUserProfileClick, }) => {
  return (
    <div className="text-center mb-12 relative">
      {/* User Profile Circle - Top Left */}
      <div className="absolute top-0 left-0">
        <button
          onClick={onUserProfileClick}
          className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <User className="h-6 w-6" />
        </button>
      </div>
      {/* Auth Buttons */}
      <div className="flex absolute top-2 right-0  space-x-3">
        <button
          onClick={onLoginClick}
          className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <span className="text-sm font-medium">Sign In</span>
        </button>

        <button
          onClick={onSignupClick}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <span className="text-sm font-medium">Sign Up</span>
        </button>
      </div>

      <div className="flex items-center justify-center mb-4">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-2xl shadow-lg">
          <Brain className="h-8 w-8 text-white" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Persway
      </h1>
      <div className="flex items-center justify-center mb-4">
        <span className="text-lg text-indigo-600 font-semibold bg-indigo-50 px-4 py-2 rounded-full">
          Powered by Neuro Sales AI
        </span>
      </div>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Transform your product details into compelling, psychology-driven descriptions that convert
      </p>
    </div>
  );
};