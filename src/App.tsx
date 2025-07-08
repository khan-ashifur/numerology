import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { SoulUrgeInput } from './components/SoulUrgeInput';
import { LifePathInput } from './components/LifePathInput';
import { ResultsPage } from './components/ResultsPage';
import { calculateSoulUrge } from './utils/soulUrge';
import { calculateLifePath } from './utils/lifePath';
import { getPersonalizedReading } from './services/openai';

export type Screen = 'home' | 'soul-urge' | 'life-path' | 'results';
export type NumerologyType = 'soul-urge' | 'life-path';

export interface CalculationResult {
  number: number;
  name: string;
  description: string;
  type: NumerologyType;
  inputMethod: string;
  inputValue: string;
  reading?: string;
  userEmail?: string;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isGeneratingReading, setIsGeneratingReading] = useState(false);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);

  const handleSoulUrgeCalculation = async (name: string) => {
    const calculationResult = calculateSoulUrge(name);
    
    const result: CalculationResult = {
      ...calculationResult,
      type: 'soul-urge',
      inputMethod: 'নাম',
      inputValue: name
    };
    
    setResult(result);
    setCurrentScreen('results');
    setShowEmailPrompt(true);
  };

  const handleLifePathCalculation = async (birthdate: string) => {
    const calculationResult = calculateLifePath(birthdate);
    
    const result: CalculationResult = {
      ...calculationResult,
      type: 'life-path',
      inputMethod: 'জন্ম তারিখ',
      inputValue: birthdate
    };
    
    setResult(result);
    setCurrentScreen('results');
    setShowEmailPrompt(true);
  };

  const handleEmailSubmit = async (email: string) => {
    if (!result) return;
    
    setShowEmailPrompt(false);
    setResult(prev => prev ? { ...prev, userEmail: email } : null);
    
    // Generate personalized reading after email is provided
    setIsGeneratingReading(true);
    try {
      const reading = await getPersonalizedReading(
        result.type,
        result.inputMethod,
        result.inputValue,
        result.number
      );
      setResult(prev => prev ? { ...prev, reading } : null);
    } catch (error) {
      console.error('Failed to generate reading:', error);
    } finally {
      setIsGeneratingReading(false);
    }
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    setResult(null);
    setShowEmailPrompt(false);
  };

  const handleBackToInput = () => {
    if (result?.type === 'soul-urge') {
      setCurrentScreen('soul-urge');
    } else {
      setCurrentScreen('life-path');
    }
    setResult(null);
    setShowEmailPrompt(false);
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

      <div className="relative z-10">
        {currentScreen === 'home' && (
          <HomePage
            onSoulUrgeClick={() => setCurrentScreen('soul-urge')}
            onLifePathClick={() => setCurrentScreen('life-path')}
          />
        )}
        
        {currentScreen === 'soul-urge' && (
          <SoulUrgeInput
            onCalculate={handleSoulUrgeCalculation}
            onBack={handleBackToHome}
          />
        )}
        
        {currentScreen === 'life-path' && (
          <LifePathInput
            onCalculate={handleLifePathCalculation}
            onBack={handleBackToHome}
          />
        )}
        
        {currentScreen === 'results' && result && (
          <ResultsPage
            result={result}
            showEmailPrompt={showEmailPrompt}
            isGeneratingReading={isGeneratingReading}
            onEmailSubmit={handleEmailSubmit}
            onBack={handleBackToInput}
            onHome={handleBackToHome}
          />
        )}
      </div>
    </div>
  );
}

export default App;