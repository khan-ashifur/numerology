import React from 'react';
import { CalculationStep } from '../types/numerology';
import { Sparkles, Plus, ArrowRight } from 'lucide-react';

interface CalculationStepsProps {
  steps: CalculationStep[];
  calculation: string;
}

export function CalculationSteps({ steps, calculation }: CalculationStepsProps) {
  if (steps.length === 0) return null;

  return (
    <div className="relative group">
      {/* Mystical Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 via-purple-400/20 to-indigo-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
      
      <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/20">
        {/* Sacred Header */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <h3 className="text-xl font-semibold text-amber-300">Sacred Calculation</h3>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
        
        {/* Vowel Values Display */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {steps.map((step, index) => (
              <div key={index} className="group/step relative">
                {/* Individual Vowel Card */}
                <div className="bg-gradient-to-br from-slate-700/60 to-slate-800/60 rounded-xl px-6 py-4 border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400/20 to-purple-400/20 rounded-full flex items-center justify-center border border-amber-400/30">
                      <span className="font-bold text-amber-400 text-lg">{step.letter}</span>
                    </div>
                    <div className="text-slate-400">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full flex items-center justify-center border border-purple-400/30">
                      <span className="font-semibold text-purple-300">{step.value}</span>
                    </div>
                  </div>
                </div>
                
                {/* Mystical Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 text-amber-400/40">
                    <Plus className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Final Calculation */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/60 rounded-xl p-6 border border-purple-400/20 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-semibold">Divine Mathematics</span>
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-mono text-amber-300 text-lg font-semibold bg-slate-800/40 rounded-lg px-4 py-2 border border-amber-400/20">
                {calculation}
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-amber-400/30 rounded-tl-lg"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-purple-400/30 rounded-br-lg"></div>
        </div>
      </div>
    </div>
  );
}