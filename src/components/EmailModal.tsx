import React, { useState } from 'react';
import { Mail, Sparkles, X, Globe, Heart } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  isLoading: boolean;
  soulUrgeNumber: number;
  soulUrgeName: string;
}

export function EmailModal({ isOpen, onClose, onSubmit, isLoading, soulUrgeNumber, soulUrgeName }: EmailModalProps) {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit(email.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative max-w-md w-full">
        {/* Mystical Aura */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 via-purple-400/30 to-indigo-400/30 rounded-3xl blur-xl"></div>
        
        <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-3xl p-8 border border-amber-400/30 shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-slate-700/60 hover:bg-slate-600/60 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-4 h-4 text-slate-300" />
          </button>

          {/* Sacred Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-400/30">
              <Globe className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent mb-2">
              বিশেষ ব্যক্তিগত বিশ্লেষণ
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              আপনার সোল আর্জ নম্বর <span className="text-amber-400 font-semibold">{soulUrgeNumber}</span> ({soulUrgeName}) এর জন্য 
              বাংলায় বিস্তারিত ব্যক্তিগত বিশ্লেষণ পেতে আপনার ইমেইল দিন
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-6 space-y-3">
            <div className="flex items-center space-x-3 text-sm text-slate-300">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span>বাংলায় বিস্তারিত ব্যক্তিত্ব বিশ্লেষণ</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-300">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>জীবনের লক্ষ্য ও উদ্দেশ্য নির্দেশনা</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-300">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span>সম্পর্ক ও ক্যারিয়ার পরামর্শ</span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="আপনার ইমেইল ঠিকানা..."
                className="w-full px-4 py-4 bg-slate-700/60 backdrop-blur-sm border border-amber-400/30 rounded-xl focus:border-amber-400 focus:outline-none transition-all duration-300 text-amber-100 placeholder-slate-400"
                disabled={isLoading}
                required
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Mail className="w-5 h-5 text-amber-400/60" />
              </div>
            </div>

            <button
              type="submit"
              disabled={!email.trim() || isLoading}
              className="group relative w-full py-4 px-6 bg-gradient-to-r from-amber-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex items-center justify-center space-x-3">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>বিশ্লেষণ তৈরি হচ্ছে...</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5" />
                    <span>বিস্তারিত বিশ্লেষণ পান</span>
                    <Sparkles className="w-4 h-4 opacity-80" />
                  </>
                )}
              </div>
            </button>
          </form>

          {/* Privacy Note */}
          <p className="text-xs text-slate-400 text-center mt-4">
            আপনার ইমেইল সুরক্ষিত থাকবে এবং শুধুমাত্র বিশ্লেষণ পাঠানোর জন্য ব্যবহৃত হবে
          </p>
        </div>
      </div>
    </div>
  );
}