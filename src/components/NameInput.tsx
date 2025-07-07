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
    <div className="relative group">
      {/* Mystical Aura */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      
      <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-3xl p-10 border border-amber-400/20">
        {/* Sacred Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-amber-400/50">
            <Calculator className="w-10 h-10 text-amber-400" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent mb-4">
            আপনার পূর্ণ নাম লিখুন
          </h2>
          <p className="text-slate-300 text-lg font-light">
            জন্মের সময় দেওয়া সম্পূর্ণ নাম দিন যা আপনার আত্মার কম্পন ধারণ করে
          </p>
        </div>

        {/* Sacred Input Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="উদাহরণ: মোহাম্মদ রহিম উদ্দিন"
              className="w-full px-6 py-4 text-xl bg-slate-700/60 backdrop-blur-sm border-2 border-amber-400/30 rounded-2xl focus:border-amber-400 focus:outline-none transition-all duration-300 text-amber-100 placeholder-slate-400 font-light"
              disabled={isLoading}
            />
            
            {/* Mystical Input Decoration */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <Sparkles className="w-6 h-6 text-amber-400/60" />
            </div>
          </div>

          <button
            type="submit"
            disabled={!name.trim() || isLoading}
            className="group relative w-full py-4 px-8 bg-gradient-to-r from-amber-600 to-purple-600 text-white rounded-2xl font-semibold text-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex items-center justify-center space-x-3">
              {isLoading ? (
                <>
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>পবিত্র গণনা চলছে...</span>
                </>
              ) : (
                <>
                  <Calculator className="w-6 h-6" />
                  <span>সোল আর্জ নম্বর আবিষ্কার করুন</span>
                  <Sparkles className="w-5 h-5 opacity-80" />
                </>
              )}
            </div>
          </button>
        </form>

        {/* Mystical Note */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm font-light">
            শুধুমাত্র স্বরবর্ণগুলি (অ, আ, ই, ঈ, উ, ঊ, এ, ঐ, ও, ঔ) গণনায় ব্যবহৃত হবে
          </p>
        </div>
      </div>
    </div>
  );
}