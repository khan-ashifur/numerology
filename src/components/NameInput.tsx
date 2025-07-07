import React, { useState } from 'react';
import { Calculator, Sparkles } from 'lucide-react';

interface NameInputProps {
  onCalculate: (name: string) => void;
  isLoading: boolean;
}

export function NameInput({ onCalculate, isLoading }: NameInputProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onCalculate(name.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          className="w-full px-6 py-4 text-lg border-2 border-purple-200 rounded-2xl focus:border-purple-500 focus:outline-none transition-all duration-200 bg-white/80 backdrop-blur-sm shadow-lg"
          disabled={isLoading}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <Sparkles className="w-6 h-6 text-purple-400" />
        </div>
      </div>
      
      <button
        type="submit"
        disabled={!name.trim() || isLoading}
        className="w-full mt-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-8 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
            <span>Calculating...</span>
          </>
        ) : (
          <>
            <Calculator className="w-5 h-5" />
            <span>Calculate Soul Urge</span>
          </>
        )}
      </button>
    </form>
  );
}