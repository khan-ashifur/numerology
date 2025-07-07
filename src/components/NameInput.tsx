import React, { useState } from 'react';
import { Calculator, Sparkles, Eye } from 'lucide-react';

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
    <div className="relative max-w-lg mx-auto">
      {/* Mystical Aura */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl"></div>
      
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative mb-6">
          {/* Sacred Input Field */}
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your sacred name..."
              className="w-full px-8 py-6 text-xl bg-slate-800/60 backdrop-blur-sm border-2 border-amber-400/30 rounded-2xl focus:border-amber-400 focus:outline-none transition-all duration-300 text-amber-100 placeholder-slate-400 shadow-lg"
              disabled={isLoading}
            />
            
            {/* Mystical Icon */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-full flex items-center justify-center border border-amber-400/30">
                <Eye className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
        
        {/* Mystical Submit Button */}
        <button
          type="submit"
          disabled={!name.trim() || isLoading}
          className="group relative w-full py-6 px-8 bg-gradient-to-r from-amber-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
        >
          {/* Button Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Button Content */}
          <div className="relative flex items-center justify-center space-x-3">
            {isLoading ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Consulting the Oracle...</span>
              </>
            ) : (
              <>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Calculator className="w-4 h-4" />
                </div>
                <span>Reveal Soul Urge</span>
                <Sparkles className="w-5 h-5 opacity-80" />
              </>
            )}
          </div>
          
          {/* Mystical Particles */}
          {!isLoading && (
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <div className="absolute top-2 left-4 w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
              <div className="absolute bottom-3 right-6 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-4 w-0.5 h-0.5 bg-white/50 rounded-full animate-pulse delay-500"></div>
            </div>
          )}
        </button>
      </form>
    </div>
  );
}