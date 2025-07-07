import React, { useState } from 'react';
import { Heart, Stars, Info, AlertCircle, Eye, Compass, Zap } from 'lucide-react';
import { NameInput } from './components/NameInput';
import { SoulUrgeResult } from './components/SoulUrgeResult';
import { CalculationSteps } from './components/CalculationSteps';
import { EmailModal } from './components/EmailModal';
import { BanglaResult } from './components/BanglaResult';
import { calculateSoulUrge, calculateSteps } from './utils/numerology';
import { getPersonalizedInterpretation, getBanglaDetailedInterpretation } from './services/openai';
import { SoulUrgeResult as SoulUrgeResultType } from './types/numerology';

function App() {
  const [result, setResult] = useState<SoulUrgeResultType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingInterpretation, setIsGeneratingInterpretation] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [banglaResult, setBanglaResult] = useState<{
    interpretation: string;
    email: string;
  } | null>(null);
  const [isGeneratingBangla, setIsGeneratingBangla] = useState(false);

  const handleCalculate = async (name: string) => {
    setIsLoading(true);
    setError(null);
    setBanglaResult(null);
    
    try {
      const calculationResult = calculateSoulUrge(name);
      setResult(calculationResult);
      
      // Generate basic interpretation
      setIsGeneratingInterpretation(true);
      try {
        const interpretation = await getPersonalizedInterpretation(
          calculationResult.number,
          calculationResult.name,
          name
        );
        
        setResult(prev => prev ? { ...prev, interpretation } : null);
      } catch (interpretationError) {
        console.error('Failed to generate interpretation:', interpretationError);
        // Don't show error for missing API key, just continue without interpretation
        setResult(prev => prev ? { ...prev, interpretation: null } : null);
      } finally {
        setIsGeneratingInterpretation(false);
      }
    } catch (err) {
      setError('গণনার সময় একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
      console.error('Calculation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSubmit = async (email: string) => {
    if (!result) return;
    
    setIsGeneratingBangla(true);
    try {
      const banglaInterpretation = await getBanglaDetailedInterpretation(
        result.number,
        result.name,
        result.vowels.join(''),
        email
      );
      
      setBanglaResult({
        interpretation: banglaInterpretation,
        email
      });
      setShowEmailModal(false);
    } catch (error) {
      console.error('Failed to generate Bangla interpretation:', error);
      setError('বাংলা বিশ্লেষণ তৈরি করতে ব্যর্থ। অনুগ্রহ করে আবার চেষ্টা করুন।');
    } finally {
      setIsGeneratingBangla(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
    setBanglaResult(null);
    setShowEmailModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Mystical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sacred Geometry Patterns */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-amber-400/20 rotate-45 rounded-lg"></div>
        <div className="absolute top-20 left-20 w-24 h-24 border border-amber-400/30 rotate-12 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-purple-400/20 rotate-45">
          <div className="w-full h-full border border-purple-400/30 rotate-45 rounded-lg"></div>
        </div>
        
        {/* Floating Mystical Orbs */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-80 delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-40 delay-2000"></div>
        
        {/* Constellation Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="constellation" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="#fbbf24"/>
              <circle cx="150" cy="100" r="1" fill="#a855f7"/>
              <circle cx="100" cy="150" r="1" fill="#6366f1"/>
              <line x1="50" y1="50" x2="150" y2="100" stroke="#fbbf24" strokeWidth="0.5"/>
              <line x1="150" y1="100" x2="100" y2="150" stroke="#a855f7" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation)"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Mystical Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            {/* Sacred Circle with Inner Symbol */}
            <div className="w-24 h-24 border-2 border-amber-400 rounded-full flex items-center justify-center relative bg-gradient-to-br from-amber-400/10 to-purple-400/10 backdrop-blur-sm">
              <div className="w-16 h-16 border border-amber-300/50 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-amber-400" />
              </div>
              {/* Rotating outer ring */}
              <div className="absolute inset-0 border border-purple-400/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
            সোল আর্জ ক্যালকুলেটর
          </h1>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
            <Stars className="w-4 h-4 text-amber-400" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            প্রাচীন সংখ্যাতত্ত্বের মাধ্যমে আপনার আত্মার গভীরতম আকাঙ্ক্ষা আবিষ্কার করুন
          </p>
        </div>

        {/* API Key Notice */}

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-red-900/20 border border-red-400/30 rounded-xl backdrop-blur-sm">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-300 mb-2">ভবিষ্যৎ দর্শনে বাধা</h3>
                <p className="text-sm text-red-200/80">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {!result ? (
            <div className="text-center">
              <NameInput onCalculate={handleCalculate} isLoading={isLoading} />
              
              {/* Mystical Info Cards */}
              <div className="mt-20 grid md:grid-cols-3 gap-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-purple-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-400/30">
                      <Heart className="w-8 h-8 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-amber-300 mb-3">আত্মার আকাঙ্ক্ষা</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">আপনার আধ্যাত্মিক সত্তার গভীরতম আকাঙ্ক্ষা আবিষ্কার করুন যা আপনার জীবনের যাত্রাকে পরিচালিত করে।</p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-purple-400/30">
                      <Compass className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-purple-300 mb-3">অন্তর্নিহিত দিকনির্দেশনা</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">রহস্যময় শক্তিগুলি বুঝুন যা আপনার পছন্দগুলি পরিচালনা করে এবং আপনার পথ আলোকিত করে।</p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/20 to-cyan-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                  <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-400/30">
                      <Zap className="w-8 h-8 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-indigo-300 mb-3">জাগরণ</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">আপনার প্রকৃত কম্পনের সাথে সামঞ্জস্য রাখুন এবং আপনার সর্বোচ্চ সম্ভাবনা আনলক করুন।</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <SoulUrgeResult result={result} isLoading={isGeneratingInterpretation} />
              
              <CalculationSteps 
                steps={calculateSteps(result.vowels)} 
                calculation={result.calculation} 
              />

              {/* Get Detailed Analysis Button */}
              {result.interpretation && !banglaResult && (
                <div className="text-center">
                  <button
                    onClick={() => setShowEmailModal(true)}
                    className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center space-x-2">
                      <Heart className="w-5 h-5" />
                      <span>বাংলায় বিস্তারিত বিশ্লেষণ পান</span>
                    </span>
                  </button>
                </div>
              )}

              {/* Bangla Detailed Result */}
              {banglaResult && (
                <BanglaResult
                  interpretation={banglaResult.interpretation}
                  userName={result.vowels.join('')}
                  userEmail={banglaResult.email}
                  soulUrgeNumber={result.number}
                  soulUrgeName={result.name}
                />
              )}

              {/* Loading Bangla Result */}
              {isGeneratingBangla && (
                <BanglaResult
                  interpretation=""
                  userName={result.vowels.join('')}
                  userEmail=""
                  soulUrgeNumber={result.number}
                  soulUrgeName={result.name}
                  isLoading={true}
                />
              )}
              
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="group relative px-8 py-4 bg-slate-800/60 backdrop-blur-sm text-amber-300 rounded-xl font-semibold shadow-lg border border-amber-400/30 hover:border-amber-400/60 transform transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-purple-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">অন্য নাম গণনা করুন</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mystical Footer */}
        <div className="text-center mt-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
          </div>
          <p className="text-slate-400 text-sm font-light">
            আপনার জন্মনামের স্বরবর্ণগুলি আপনার আত্মার পবিত্র নকশার চাবিকাঠি ধারণ করে
          </p>
        </div>
      </div>

      {/* Email Modal */}
      <EmailModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onSubmit={handleEmailSubmit}
        isLoading={isGeneratingBangla}
        soulUrgeNumber={result?.number || 0}
        soulUrgeName={result?.name || ''}
      />
    </div>
  );
}

export default App;