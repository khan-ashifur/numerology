import React from 'react';
import { CalculationStep } from '../types/numerology';

interface CalculationStepsProps {
  steps: CalculationStep[];
  calculation: string;
}

export function CalculationSteps({ steps, calculation }: CalculationStepsProps) {
  if (steps.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
        Calculation Breakdown
      </h3>
      
      <div className="space-y-3 mb-4">
        <div className="flex flex-wrap gap-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg px-3 py-2 shadow-sm border border-purple-100 transition-all duration-200 hover:shadow-md"
            >
              <span className="font-bold text-purple-600 text-lg">{step.letter}</span>
              <span className="mx-2 text-gray-400">=</span>
              <span className="font-semibold text-gray-700">{step.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 border border-purple-100">
        <p className="text-sm text-gray-600 mb-2">Final Calculation:</p>
        <p className="font-mono text-purple-700 font-semibold">{calculation}</p>
      </div>
    </div>
  );
}