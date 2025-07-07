import React from 'react';
import { Heart, Star, Globe, Sparkles, User, Mail } from 'lucide-react';

interface BanglaResultProps {
  interpretation: string;
  userName: string;
  userEmail: string;
  soulUrgeNumber: number;
  soulUrgeName: string;
  isLoading?: boolean;
}

export function BanglaResult({ interpretation, userName, userEmail, soulUrgeNumber, soulUrgeName, isLoading }: BanglaResultProps) {
  if (isLoading) {
    return (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-purple-400/30 to-indigo-400/30 rounded-3xl blur-2xl"></div>
        
        <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-10 border border-amber-400/30 shadow-2xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-400/30">
              <Globe className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent mb-4">
              বিশেষ বিশ্লেষণ তৈরি হচ্ছে
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-200"></div>
            </div>
            <p className="text-slate-300">আপনার জন্য বিশেষ বাংলা বিশ্লেষণ প্রস্তুত করা হচ্ছে...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-purple-400/30 to-indigo-400/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
      
      <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-10 border border-amber-400/30 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-amber-400/50">
            <Globe className="w-10 h-10 text-amber-400" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent mb-2">
            বিশেষ ব্যক্তিগত বিশ্লেষণ
          </h2>
          <div className="flex items-center justify-center space-x-4 text-sm text-slate-300 mb-4">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-amber-400" />
              <span>{userName}</span>
            </div>
            <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-purple-400" />
              <span>সোল আর্জ {soulUrgeNumber}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl p-8 border border-amber-400/20 backdrop-blur-sm">
            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-12 h-12 border border-amber-400/20 rotate-45 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border border-purple-400/20 rotate-12 rounded-full"></div>
            
            {/* Content */}
            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-full flex items-center justify-center border border-amber-400/30">
                    <Heart className="w-4 h-4 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-300">আপনার আত্মিক পরিচয়</h3>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full flex items-center justify-center border border-purple-400/30">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                  </div>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div className="text-slate-200 leading-relaxed text-lg font-light whitespace-pre-line">
                  {interpretation}
                </div>
              </div>
            </div>
          </div>
          
          {/* Email Info */}
          <div className="mt-6 p-4 bg-slate-800/40 rounded-xl border border-slate-600/30">
            <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
              <Mail className="w-4 h-4" />
              <span>এই বিশ্লেষণ {userEmail} এ পাঠানো হয়েছে</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}