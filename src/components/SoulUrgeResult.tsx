import React from 'react';
import { Heart, Sparkles, User } from 'lucide-react';
import { SoulUrgeResult } from '../types/numerology';

interface SoulUrgeResultProps {
  result: SoulUrgeResult;
  isLoading?: boolean;
}

export function SoulUrgeResult({ result, isLoading }: SoulUrgeResultProps) {
  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl transform transition-all duration-500 hover:scale-105">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
          <span className="text-4xl font-bold text-white">{result.number}</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-2">{result.name}</h2>
        <p className="text-purple-100 mb-6">Your Soul Urge Number</p>
        
        <div className="flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center">
            <Heart className="w-4 h-4 mr-2" />
            <span>Inner Desires</span>
          </div>
          <div className="flex items-center">
            <Sparkles className="w-4 h-4 mr-2" />
            <span>Core Motivations</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>Authentic Self</span>
          </div>
        </div>
      </div>
      
      {result.interpretation && (
        <div className="mt-8 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            Your Personalized Reading
          </h3>
          {isLoading ? (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              <span className="text-purple-100">Generating your personalized interpretation...</span>
            </div>
          ) : (
            <p className="text-purple-50 leading-relaxed">{result.interpretation}</p>
          )}
        </div>
      )}
    </div>
  );
}