import React, { useState } from 'react';
import { Heart, Stars, Info, AlertCircle } from 'lucide-react';
import { NameInput } from './components/NameInput';
import { SoulUrgeResult } from './components/SoulUrgeResult';
import { CalculationSteps } from './components/CalculationSteps';
import { calculateSoulUrge, calculateSteps } from './utils/numerology';
import { getPersonalizedInterpretation } from './services/openai';
import { SoulUrgeResult as SoulUrgeResultType } from './types/numerology';

function App() {
  const [result, setResult] = useState<SoulUrgeResultType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingInterpretation, setIsGeneratingInterpretation] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async (name: string) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const calculationResult = calculateSoulUrge(name);
      setResult(calculationResult);
      
      // Generate personalized interpretation
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
        setError('Could not generate personalized interpretation. Please check your OpenAI API key.');
      } finally {
        setIsGeneratingInterpretation(false);
      }
    } catch (err) {
      setError('An error occurred during calculation. Please try again.');
      console.error('Calculation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Soul Urge Number Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover your deepest desires and inner motivations through the ancient wisdom of numerology
          </p>
        </div>

        {/* API Key Notice */}
        {!import.meta.env.VITE_OPENAI_API_KEY || import.meta.env.VITE_OPENAI_API_KEY === 'your_openai_api_key_here' ? (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-amber-50 border border-amber-200 rounded-xl">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-1">OpenAI API Key Required</h3>
                <p className="text-sm text-amber-700">
                  To get personalized interpretations, please add your OpenAI API key to the <code className="bg-amber-100 px-1 rounded">.env</code> file.
                  You can still calculate your Soul Urge Number without it.
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-xl">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-red-800 mb-1">Error</h3>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {!result ? (
            <div className="text-center">
              <NameInput onCalculate={handleCalculate} isLoading={isLoading} />
              
              {/* Info Section */}
              <div className="mt-16 grid md:grid-cols-3 gap-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Inner Desires</h3>
                  <p className="text-gray-600 text-sm">Uncover what your soul truly yearns for and what drives you at the deepest level.</p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stars className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Core Motivations</h3>
                  <p className="text-gray-600 text-sm">Understand the fundamental forces that motivate your choices and actions.</p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Info className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Growth</h3>
                  <p className="text-gray-600 text-sm">Gain insights to align with your authentic self and live more purposefully.</p>
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
              
              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="bg-white/80 backdrop-blur-sm text-purple-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-200 hover:scale-105 border border-purple-200"
                >
                  Calculate Another Name
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 text-sm">
          <p>Soul Urge Numbers are calculated using the vowels in your full birth name</p>
        </div>
      </div>
    </div>
  );
}

export default App;