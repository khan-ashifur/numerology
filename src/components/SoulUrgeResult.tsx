import React from 'react';
import { Heart, Sparkles, User, Eye, Star, Zap } from 'lucide-react';
import { SoulUrgeResult as SoulUrgeResultType } from '../types/numerology';

interface SoulUrgeResultProps {
  result: SoulUrgeResultType;
  isLoading?: boolean;
}

export function SoulUrgeResult({ result, isLoading }: SoulUrgeResultProps) {
  return (
    <div className="relative group">
      {/* Mystical Aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-purple-400/30 to-indigo-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-10 border border-amber-400/30 shadow-2xl">
        {/* Sacred Geometry Background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute top-4 right-4 w-16 h-16 border border-amber-400/20 rotate-45 rounded-lg"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border border-purple-400/20 rotate-12 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-indigo-400/10 rounded-full"></div>
        </div>
        
        <div className="relative text-center">
          {/* Sacred Number Circle */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-full flex items-center justify-center border-2 border-amber-400/50 backdrop-blur-sm relative">
              <span className="text-6xl font-bold bg-gradient-to-br from-amber-400 to-purple-400 bg-clip-text text-transparent">
                {result.number}
              </span>
              
              {/* Rotating Outer Ring */}
              <div className="absolute inset-0 border border-amber-400/30 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
              
              {/* Inner Sacred Symbols */}
              <div className="absolute inset-2 border border-purple-400/20 rounded-full"></div>
            </div>
            
            {/* Floating Mystical Elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-80 delay-1000"></div>
          </div>
          
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
            {result.name}
          </h2>
          <p className="text-amber-300/80 mb-8 text-lg font-light">আপনার আত্মার পবিত্র কম্পন</p>
          
          {/* Mystical Attributes */}
          <div className="flex items-center justify-center space-x-8 text-sm mb-8">
            <div className="flex items-center space-x-2 text-amber-300">
              <Heart className="w-4 h-4" />
              <span>অন্তর্নিহিত আগুন</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-300">
              <Eye className="w-4 h-4" />
              <span>আত্মার দৃষ্টি</span>
            </div>
            <div className="flex items-center space-x-2 text-indigo-300">
              <Star className="w-4 h-4" />
              <span>ঐশ্বরিক উদ্দেশ্য</span>
            </div>
          </div>
        </div>
        
        {/* Oracle Interpretation */}
        {result.interpretation && (
          <div className="relative mt-10 p-8 bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl border border-amber-400/20 backdrop-blur-sm">
            {/* Mystical Header */}
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-full flex items-center justify-center border border-amber-400/30">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="text-xl font-semibold text-amber-300">দৈববাণীর প্রকাশ</h3>
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full flex items-center justify-center border border-purple-400/30">
                  <Zap className="w-4 h-4 text-purple-400" />
                </div>
              </div>
            </div>
            
            {isLoading ? (
              <div className="flex items-center justify-center space-x-3 py-8">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
                <span className="text-slate-300 ml-4 font-light">দৈববাণী বলছে...</span>
              </div>
            ) : (
              <div className="relative">
                {/* Decorative Quotes */}
                <div className="absolute -top-2 -left-2 text-4xl text-amber-400/30 font-serif">"</div>
                <div className="absolute -bottom-6 -right-2 text-4xl text-amber-400/30 font-serif">"</div>
                
                <p className="text-slate-200 leading-relaxed text-lg font-light px-4">
                  {result.interpretation}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}