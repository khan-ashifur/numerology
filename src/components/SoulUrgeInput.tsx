import React, { useState } from 'react';
import { Heart, ArrowLeft, Sparkles } from 'lucide-react';

interface SoulUrgeInputProps {
  onCalculate: (name: string) => void;
  onBack: () => void;
}

export function SoulUrgeInput({ onCalculate, onBack }: SoulUrgeInputProps) {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setIsLoading(true);
      await onCalculate(name.trim());
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group flex items-center space-x-2 text-amber-400 hover:text-amber-300 transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
        <span>ফিরে যান</span>
      </button>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-amber-400/50">
            <Heart className="w-12 h-12 text-amber-400" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
            সোল আর্জ গণনা
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            আপনার পূর্ণ নাম দিয়ে আত্মার গভীরতম আকাঙ্ক্ষা আবিষ্কার করুন
          </p>
        </div>

        {/* Input Form */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-red-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          
          <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-3xl p-10 border border-amber-400/20">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <label className="block text-amber-300 text-lg font-semibold mb-4">
                  আপনার পূর্ণ নাম লিখুন
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="উদাহরণ: মোহাম্মদ রহিম উদ্দিন"
                  className="w-full px-6 py-4 text-xl bg-slate-700/60 backdrop-blur-sm border-2 border-amber-400/30 rounded-2xl focus:border-amber-400 focus:outline-none transition-all duration-300 text-amber-100 placeholder-slate-400 font-light"
                  disabled={isLoading}
                />
                
                <div className="absolute right-4 top-12">
                  <Sparkles className="w-6 h-6 text-amber-400/60" />
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-xl p-4 border border-amber-400/20">
                <p className="text-slate-300 text-sm font-light">
                  <strong className="text-amber-400">নোট:</strong> জন্মের সময় দেওয়া সম্পূর্ণ নাম ব্যবহার করুন। 
                  শুধুমাত্র স্বরবর্ণগুলি (অ, আ, ই, ঈ, উ, ঊ, এ, ঐ, ও, ঔ) গণনায় ব্যবহৃত হবে।
                </p>
              </div>

              <button
                type="submit"
                disabled={!name.trim() || isLoading}
                className="group relative w-full py-4 px-8 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl font-semibold text-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center justify-center space-x-3">
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>আপনার সোল আর্জ গণনা করা হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-6 h-6" />
                      <span>আমার সোল আর্জ আবিষ্কার করুন</span>
                      <Sparkles className="w-5 h-5 opacity-80" />
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-amber-400/20">
            <h3 className="text-amber-300 font-semibold mb-3">সোল আর্জ কী?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              আপনার নামের স্বরবর্ণগুলি থেকে গণনা করা এই সংখ্যা আপনার অন্তর্নিহিত আকাঙ্ক্ষা, 
              আবেগিক চাহিদা এবং আত্মার গভীরতম প্রেরণা প্রকাশ করে।
            </p>
          </div>
          
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-amber-400/20">
            <h3 className="text-amber-300 font-semibold mb-3">কেন গুরুত্বপূর্ণ?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              এটি আপনাকে বুঝতে সাহায্য করে কী আপনাকে সত্যিকারের খুশি দেয়, 
              কোন পথে আপনি পূর্ণতা পাবেন এবং কীভাবে আপনার প্রকৃত সত্তার সাথে সামঞ্জস্য রাখবেন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}