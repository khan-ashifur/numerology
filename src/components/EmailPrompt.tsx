import React, { useState } from 'react';
import { Mail, Sparkles, Eye, Crown } from 'lucide-react';

interface EmailPromptProps {
  onSubmit: (email: string) => void;
  type: 'soul-urge' | 'life-path';
}

export function EmailPrompt({ onSubmit, type }: EmailPromptProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setIsSubmitting(true);
      
      // Submit to Netlify Forms
      try {
        const formData = new FormData();
        formData.append('email', email.trim());
        formData.append('calculation-type', type === 'soul-urge' ? 'সোল আর্জ' : 'লাইফ পাথ');
        formData.append('timestamp', new Date().toLocaleString('bn-BD'));
        
        

const backendURL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

await fetch(`${backendURL}/api/save-email/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: email.trim(),
    type: type === 'soul-urge' ? 'সোল আর্জ' : 'লাইফ পাথ',
    timestamp: new Date().toLocaleString('bn-BD'),
  }),
});


      } catch (error) {
        console.log('Form submission error:', error);
        // Continue anyway - don't block the user experience
      }
      
      await onSubmit(email.trim());
      setIsSubmitting(false);
    }
  };

  const getGradient = () => {
    return type === 'soul-urge' 
      ? 'from-amber-400 to-orange-400'
      : 'from-purple-400 to-indigo-400';
  };

  const getBorderColor = () => {
    return type === 'soul-urge' 
      ? 'border-amber-400/30'
      : 'border-purple-400/30';
  };

  const getGlowColor = () => {
    return type === 'soul-urge'
      ? 'from-amber-400/30 via-orange-400/30 to-red-400/30'
      : 'from-purple-400/30 via-indigo-400/30 to-blue-400/30';
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative group max-w-md w-full">
        <div className={`absolute inset-0 bg-gradient-to-br ${getGlowColor()} rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
        
        <div className={`relative bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-3xl p-8 border ${getBorderColor()} shadow-2xl`}>
          {/* Sacred Geometry Background */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <div className="absolute top-4 right-4 w-12 h-12 border border-amber-400/20 rotate-45 rounded-lg"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border border-purple-400/20 rotate-12 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-indigo-400/10 rounded-full"></div>
          </div>
          
          <div className="relative text-center">
            {/* Sacred Icon */}
            <div className="relative inline-block mb-6">
              <div className={`w-20 h-20 bg-gradient-to-br ${type === 'soul-urge' ? 'from-amber-400/20 to-orange-400/20' : 'from-purple-400/20 to-indigo-400/20'} rounded-full flex items-center justify-center border-2 ${type === 'soul-urge' ? 'border-amber-400/50' : 'border-purple-400/50'} backdrop-blur-sm relative`}>
                <Mail className={`w-8 h-8 ${type === 'soul-urge' ? 'text-amber-400' : 'text-purple-400'}`} />
                
                {/* Rotating Outer Ring */}
                <div className={`absolute inset-0 border ${type === 'soul-urge' ? 'border-amber-400/30' : 'border-purple-400/30'} rounded-full animate-spin`} style={{animationDuration: '10s'}}></div>
                
                {/* Floating Mystical Elements */}
                <div className={`absolute -top-2 -right-2 w-4 h-4 ${type === 'soul-urge' ? 'bg-amber-400' : 'bg-purple-400'} rounded-full animate-pulse opacity-60`}>
                  <Crown className="w-2 h-2 text-slate-900 m-1" />
                </div>
                <div className={`absolute -bottom-2 -left-2 w-3 h-3 ${type === 'soul-urge' ? 'bg-orange-400' : 'bg-indigo-400'} rounded-full animate-pulse opacity-80 delay-1000`}>
                  <Eye className="w-2 h-2 text-slate-900 m-0.5" />
                </div>
              </div>
            </div>
            
            <h2 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${getGradient()} bg-clip-text text-transparent`}>
              আপনার বিশেষ পাঠের জন্য
            </h2>
            <p className={`${type === 'soul-urge' ? 'text-amber-300/80' : 'text-purple-300/80'} mb-6 text-lg font-light`}>
              ইমেইল ঠিকানা প্রয়োজন
            </p>
            
            <div className="mb-6 p-4 bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-xl border border-amber-400/20 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-3">
                <div className="flex items-center space-x-2">
                  <Sparkles className={`w-5 h-5 ${type === 'soul-urge' ? 'text-amber-400' : 'text-purple-400'}`} />
                  <span className={`text-lg font-semibold ${type === 'soul-urge' ? 'text-amber-300' : 'text-purple-300'}`}>
                    বিশেষ AI বিশ্লেষণ
                  </span>
                  <Eye className={`w-5 h-5 ${type === 'soul-urge' ? 'text-amber-400' : 'text-purple-400'}`} />
                </div>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed font-light">
                আপনার জন্য একটি গভীর, ব্যক্তিগত এবং আবেগময় পাঠ তৈরি করতে আমাদের AI সিস্টেম কাজ করবে। 
                এই বিশেষ বিশ্লেষণ পেতে আপনার ইমেইল ঠিকানা প্রয়োজন।
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden Netlify form fields */}
              <input type="hidden" name="form-name" value="numerology-emails" />
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                  className={`w-full px-4 py-3 text-lg bg-slate-700/60 backdrop-blur-sm border-2 ${type === 'soul-urge' ? 'border-amber-400/30 focus:border-amber-400' : 'border-purple-400/30 focus:border-purple-400'} rounded-xl focus:outline-none transition-all duration-300 ${type === 'soul-urge' ? 'text-amber-100' : 'text-purple-100'} placeholder-slate-400 font-light`}
                  disabled={isSubmitting}
                  required
                />
                
                <div className="absolute right-3 top-3">
                  <Mail className={`w-6 h-6 ${type === 'soul-urge' ? 'text-amber-400/60' : 'text-purple-400/60'}`} />
                </div>
              </div>
              
              {/* Hidden fields for additional data */}
              <input type="hidden" name="calculation-type" value={type === 'soul-urge' ? 'সোল আর্জ' : 'লাইফ পাথ'} />
              <input type="hidden" name="timestamp" value={new Date().toLocaleString('bn-BD')} />

              <button
                type="submit"
                disabled={!email.trim() || !email.includes('@') || isSubmitting}
                className={`group relative w-full py-3 px-6 bg-gradient-to-r ${type === 'soul-urge' ? 'from-amber-600 to-orange-600' : 'from-purple-600 to-indigo-600'} text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${type === 'soul-urge' ? 'from-amber-400/20 to-orange-400/20' : 'from-purple-400/20 to-indigo-400/20'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative flex items-center justify-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>প্রক্রিয়া করা হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      <span>আমার বিশেষ পাঠ শুরু করুন</span>
                      <Eye className="w-5 h-5 opacity-80" />
                    </>
                  )}
                </div>
              </button>
            </form>
            
            <p className="text-slate-400 text-xs mt-4 font-light">
              আপনার ইমেইল সুরক্ষিত থাকবে এবং শুধুমাত্র আপনার পাঠ প্রেরণের জন্য ব্যবহৃত হবে
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}