import React from 'react';
import { ArrowLeft, Home, Heart, Calendar, Sparkles, Eye, Crown, Compass } from 'lucide-react';
import { CalculationResult } from '../App';
import { EmailPrompt } from './EmailPrompt';

interface ResultsPageProps {
  result: CalculationResult;
  showEmailPrompt: boolean;
  isGeneratingReading: boolean;
  onEmailSubmit: (email: string) => void;
  onBack: () => void;
  onHome: () => void;
}

export function ResultsPage({ result, showEmailPrompt, isGeneratingReading, onEmailSubmit, onBack, onHome }: ResultsPageProps) {
  const getIcon = () => {
    return result.type === 'soul-urge' ? Heart : Calendar;
  };

  const getGradient = () => {
    return result.type === 'soul-urge' 
      ? 'from-amber-400 to-orange-400'
      : 'from-purple-400 to-indigo-400';
  };

  const getBorderColor = () => {
    return result.type === 'soul-urge' 
      ? 'border-amber-400/30'
      : 'border-purple-400/30';
  };

  const getGlowColor = () => {
    return result.type === 'soul-urge'
      ? 'from-amber-400/30 via-orange-400/30 to-red-400/30'
      : 'from-purple-400/30 via-indigo-400/30 to-blue-400/30';
  };

  const Icon = getIcon();

  return (
    <>
      {showEmailPrompt && (
        <EmailPrompt
          onSubmit={onEmailSubmit}
          type={result.type}
        />
      )}
      
    <div className="container mx-auto px-4 py-12">
      {/* Navigation */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onBack}
          className="group flex items-center space-x-2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>আবার গণনা করুন</span>
        </button>
        
        <button
          onClick={onHome}
          className="group flex items-center space-x-2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
        >
          <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
          <span>হোম পেজ</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main Result */}
        <div className="relative group mb-12">
          <div className={`absolute inset-0 bg-gradient-to-br ${getGlowColor()} rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500`}></div>
          
          <div className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-10 border ${getBorderColor()} shadow-2xl`}>
            {/* Sacred Geometry Background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div className="absolute top-4 right-4 w-16 h-16 border border-amber-400/20 rotate-45 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border border-purple-400/20 rotate-12 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-indigo-400/10 rounded-full"></div>
            </div>
            
            <div className="relative text-center">
              {/* Sacred Number Circle */}
              <div className="relative inline-block mb-8">
                <div className={`w-40 h-40 bg-gradient-to-br ${result.type === 'soul-urge' ? 'from-amber-400/20 to-orange-400/20' : 'from-purple-400/20 to-indigo-400/20'} rounded-full flex items-center justify-center border-2 ${result.type === 'soul-urge' ? 'border-amber-400/50' : 'border-purple-400/50'} backdrop-blur-sm relative`}>
                  <span className={`text-7xl font-bold bg-gradient-to-br ${getGradient()} bg-clip-text text-transparent`}>
                    {result.number}
                  </span>
                  
                  {/* Rotating Outer Ring */}
                  <div className={`absolute inset-0 border ${result.type === 'soul-urge' ? 'border-amber-400/30' : 'border-purple-400/30'} rounded-full animate-spin`} style={{animationDuration: '15s'}}></div>
                  
                  {/* Inner Sacred Symbols */}
                  <div className={`absolute inset-2 border ${result.type === 'soul-urge' ? 'border-orange-400/20' : 'border-indigo-400/20'} rounded-full`}></div>
                  
                  {/* Pulsing Core */}
                  <div className={`absolute inset-8 bg-gradient-to-br ${result.type === 'soul-urge' ? 'from-amber-400/10 to-orange-400/10' : 'from-purple-400/10 to-indigo-400/10'} rounded-full animate-pulse`}></div>
                </div>
                
                {/* Floating Mystical Elements */}
                <div className={`absolute -top-3 -right-3 w-6 h-6 ${result.type === 'soul-urge' ? 'bg-amber-400' : 'bg-purple-400'} rounded-full animate-pulse opacity-60`}>
                  <Crown className="w-4 h-4 text-slate-900 m-1" />
                </div>
                <div className={`absolute -bottom-3 -left-3 w-5 h-5 ${result.type === 'soul-urge' ? 'bg-orange-400' : 'bg-indigo-400'} rounded-full animate-pulse opacity-80 delay-1000`}>
                  <Eye className="w-3 h-3 text-slate-900 m-1" />
                </div>
              </div>
              
              <h1 className={`text-5xl font-bold mb-4 bg-gradient-to-r ${getGradient()} bg-clip-text text-transparent`}>
                {result.name}
              </h1>
              <p className={`${result.type === 'soul-urge' ? 'text-amber-300/80' : 'text-purple-300/80'} mb-8 text-xl font-light`}>
                {result.type === 'soul-urge' ? 'আপনার আত্মার পবিত্র পরিচয়' : 'আপনার জীবনের পবিত্র পথ'}
              </p>
              
              {/* Basic Description */}
              <div className="mb-10 p-6 bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-2xl border border-amber-400/20 backdrop-blur-sm">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-6 h-6 ${result.type === 'soul-urge' ? 'text-amber-400' : 'text-purple-400'}`} />
                    <h3 className={`text-2xl font-semibold ${result.type === 'soul-urge' ? 'text-amber-300' : 'text-purple-300'}`}>
                      {result.type === 'soul-urge' ? 'আপনার আত্মার সত্য' : 'আপনার জীবনের উদ্দেশ্য'}
                    </h3>
                    <Sparkles className={`w-6 h-6 ${result.type === 'soul-urge' ? 'text-amber-400' : 'text-purple-400'}`} />
                  </div>
                </div>
                <p className="text-slate-200 leading-relaxed text-lg font-light">
                  {result.description}
                </p>
              </div>
              
              {/* Input Information */}
              <div className="flex items-center justify-center space-x-8 text-sm mb-8">
                <div className={`flex items-center space-x-2 ${result.type === 'soul-urge' ? 'text-amber-300' : 'text-purple-300'} group/attr`}>
                  <Icon className="w-5 h-5 group-hover/attr:scale-110 transition-transform duration-200" />
                  <span className="font-light">{result.inputMethod}: {result.inputValue}</span>
                </div>
                <div className={`flex items-center space-x-2 ${result.type === 'soul-urge' ? 'text-orange-300' : 'text-indigo-300'} group/attr`}>
                  <Compass className="w-5 h-5 group-hover/attr:scale-110 transition-transform duration-200" />
                  <span className="font-light">নম্বর: {result.number}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personalized Reading */}
        <div className="relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${getGlowColor()} rounded-3xl blur-xl`}></div>
          
          <div className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-10 border ${getBorderColor()} shadow-2xl`}>
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 bg-gradient-to-br ${result.type === 'soul-urge' ? 'from-amber-400/20 to-orange-400/20' : 'from-purple-400/20 to-indigo-400/20'} rounded-full flex items-center justify-center border ${result.type === 'soul-urge' ? 'border-amber-400/30' : 'border-purple-400/30'}`}>
                  <Sparkles className={`w-4 h-4 ${result.type === 'soul-urge' ? 'text-amber-400' : 'text-purple-400'}`} />
                </div>
                <h2 className={`text-3xl font-semibold ${result.type === 'soul-urge' ? 'text-amber-300' : 'text-purple-300'}`}>
                  আপনার ব্যক্তিগত পাঠ
                </h2>
                <div className={`w-8 h-8 bg-gradient-to-br ${result.type === 'soul-urge' ? 'from-orange-400/20 to-red-400/20' : 'from-indigo-400/20 to-blue-400/20'} rounded-full flex items-center justify-center border ${result.type === 'soul-urge' ? 'border-orange-400/30' : 'border-indigo-400/30'}`}>
                  <Eye className={`w-4 h-4 ${result.type === 'soul-urge' ? 'text-orange-400' : 'text-indigo-400'}`} />
                </div>
              </div>
            </div>
            
            {isGeneratingReading ? (
              <div className="flex flex-col items-center justify-center space-y-6 py-16">
                {/* Mystical Loading Animation */}
                <div className="relative">
                  <div className={`w-24 h-24 border-4 ${result.type === 'soul-urge' ? 'border-amber-400/30' : 'border-purple-400/30'} rounded-full animate-spin`}>
                    <div className={`absolute inset-2 border-2 ${result.type === 'soul-urge' ? 'border-orange-400/50' : 'border-indigo-400/50'} rounded-full animate-spin`} style={{animationDirection: 'reverse', animationDuration: '3s'}}></div>
                    <div className={`absolute inset-4 border ${result.type === 'soul-urge' ? 'border-amber-400' : 'border-purple-400'} rounded-full animate-pulse`}></div>
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-center`}>
                    <Eye className={`w-8 h-8 ${result.type === 'soul-urge' ? 'text-amber-400' : 'text-purple-400'} animate-pulse`} />
                  </div>
                </div>
                
                <div className="text-center space-y-3">
                  <p className={`text-2xl font-semibold ${result.type === 'soul-urge' ? 'text-amber-300' : 'text-purple-300'}`}>
                    আপনার বিস্তারিত ফলাফল বের হচ্ছে...
                  </p>
                  <p className="text-slate-300 text-lg font-light">
                    আপনার জন্য বিশেষ AI বিশ্লেষণ তৈরি করা হচ্ছে
                  </p>
                  <p className="text-slate-400 text-sm">
                    এই গভীর পাঠ তৈরি করতে কয়েক মুহূর্ত সময় লাগবে
                  </p>
                  
                  {/* Floating mystical elements */}
                  <div className="flex items-center justify-center space-x-4 mt-6">
                    <div className={`w-2 h-2 ${result.type === 'soul-urge' ? 'bg-amber-400' : 'bg-purple-400'} rounded-full animate-bounce`}></div>
                    <div className={`w-2 h-2 ${result.type === 'soul-urge' ? 'bg-orange-400' : 'bg-indigo-400'} rounded-full animate-bounce delay-100`}></div>
                    <div className={`w-2 h-2 ${result.type === 'soul-urge' ? 'bg-red-400' : 'bg-blue-400'} rounded-full animate-bounce delay-200`}></div>
                  </div>
                </div>
              </div>
            ) : result.reading ? (
              <div className="relative">
                {/* Decorative Quotes */}
                <div className={`absolute -top-2 -left-2 text-4xl ${result.type === 'soul-urge' ? 'text-amber-400/30' : 'text-purple-400/30'} font-serif`}>"</div>
                <div className={`absolute -bottom-6 -right-2 text-4xl ${result.type === 'soul-urge' ? 'text-amber-400/30' : 'text-purple-400/30'} font-serif`}>"</div>
                
                <div className="prose prose-invert max-w-none px-4">
                  <div className="text-slate-200 leading-relaxed text-lg font-light whitespace-pre-line">
                    {result.reading}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-slate-400 text-lg">
                  ব্যক্তিগত পাঠ তৈরি করতে ইমেইল প্রয়োজন।
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}