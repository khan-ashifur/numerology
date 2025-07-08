import React from 'react';
import { Heart, Calendar, Eye, Stars, Sparkles, Crown, Compass } from 'lucide-react';

interface HomePageProps {
  onSoulUrgeClick: () => void;
  onLifePathClick: () => void;
}

export function HomePage({ onSoulUrgeClick, onLifePathClick }: HomePageProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Mystical Header */}
      <div className="text-center mb-20">
        <div className="relative inline-block mb-8">
          {/* Sacred Circle with Inner Symbol */}
          <div className="w-28 h-28 border-2 border-amber-400 rounded-full flex items-center justify-center relative bg-gradient-to-br from-amber-400/10 to-purple-400/10 backdrop-blur-sm">
            <div className="w-20 h-20 border border-amber-300/50 rounded-full flex items-center justify-center">
              <Eye className="w-10 h-10 text-amber-400" />
            </div>
            {/* Rotating outer ring */}
            <div className="absolute inset-0 border border-purple-400/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          </div>
        </div>
        
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
          সংখ্যাতত্ত্ব জগৎ
        </h1>
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <Stars className="w-5 h-5 text-amber-400" />
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
        </div>
        <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
          প্রাচীন সংখ্যাতত্ত্বের মাধ্যমে আপনার আত্মার গভীরতম রহস্য আবিষ্কার করুন
        </p>
      </div>

      {/* Main CTA Buttons */}
      <div className="max-w-4xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Soul Urge Button */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-orange-400/30 to-red-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <button
              onClick={onSoulUrgeClick}
              className="relative w-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-10 border border-amber-400/30 shadow-2xl hover:border-amber-400/60 transform transition-all duration-500 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-amber-400/50 group-hover:border-amber-400/80 transition-all duration-300">
                  <Heart className="w-10 h-10 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
                  🔮 নাম দিয়ে গণনা
                </h2>
                <p className="text-xl text-amber-300/80 mb-6 font-light">সোল আর্জ নম্বর</p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  আপনার পূর্ণ নাম থেকে আবিষ্কার করুন আপনার আত্মার গভীরতম আকাঙ্ক্ষা এবং অন্তর্নিহিত প্রেরণা
                </p>
                
                <div className="inline-flex items-center space-x-2 text-amber-400 font-semibold group-hover:text-amber-300 transition-colors duration-300">
                  <span>আপনার সোল আর্জ আবিষ্কার করুন</span>
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
            </button>
          </div>

          {/* Life Path Button */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-indigo-400/30 to-blue-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <button
              onClick={onLifePathClick}
              className="relative w-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-10 border border-purple-400/30 shadow-2xl hover:border-purple-400/60 transform transition-all duration-500 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-purple-400/50 group-hover:border-purple-400/80 transition-all duration-300">
                  <Calendar className="w-10 h-10 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                  📆 জন্ম তারিখ দিয়ে গণনা
                </h2>
                <p className="text-xl text-purple-300/80 mb-6 font-light">লাইফ পাথ নম্বর</p>
                <p className="text-slate-300 leading-relaxed mb-8">
                  আপনার জন্ম তারিখ থেকে জানুন আপনার জীবনের মূল উদ্দেশ্য এবং আধ্যাত্মিক যাত্রার দিকনির্দেশনা
                </p>
                
                <div className="inline-flex items-center space-x-2 text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300">
                  <span>আপনার লাইফ পাথ আবিষ্কার করুন</span>
                  <Compass className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-400/30">
                <Heart className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-amber-300 mb-3">আত্মার আকাঙ্ক্ষা</h3>
              <p className="text-slate-300 text-sm leading-relaxed">আপনার অন্তর্নিহিত ইচ্ছা এবং আবেগিক চাহিদাগুলি আবিষ্কার করুন যা আপনার সিদ্ধান্তগুলি পরিচালনা করে।</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-400/30">
                <Compass className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-purple-300 mb-3">জীবনের দিকনির্দেশনা</h3>
              <p className="text-slate-300 text-sm leading-relaxed">আপনার জীবনের মূল উদ্দেশ্য এবং আধ্যাত্মিক যাত্রার পথ সম্পর্কে গভীর অন্তর্দৃষ্টি পান।</p>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-400/30">
                <Crown className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-3">ব্যক্তিগত জাগরণ</h3>
              <p className="text-slate-300 text-sm leading-relaxed">আপনার প্রকৃত সম্ভাবনা উন্মোচন করুন এবং আপনার সর্বোচ্চ সত্তার সাথে সামঞ্জস্য রাখুন।</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mystical Footer */}
      <div className="text-center mt-20">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
          <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
        </div>
        <p className="text-slate-400 text-sm font-light">
          প্রাচীন জ্ঞান এবং আধুনিক অন্তর্দৃষ্টির মিলনে আপনার আত্মিক যাত্রা শুরু করুন
        </p>
      </div>
    </div>
  );
}