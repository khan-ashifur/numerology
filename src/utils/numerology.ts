import { SoulUrgeResult, CalculationStep } from '../types/numerology';

const VOWEL_VALUES: Record<string, number> = {
  A: 1, E: 5, I: 9, O: 6, U: 3, Y: 7
};

const SOUL_URGE_NAMES: Record<number, string> = {
  1: "The Leader",
  2: "The Peacemaker", 
  3: "The Creative",
  4: "The Builder",
  5: "The Freedom Seeker",
  6: "The Nurturer",
  7: "The Seeker",
  8: "The Achiever",
  9: "The Humanitarian",
  11: "The Intuitive",
  22: "The Master Builder",
  33: "The Master Teacher"
};

export function extractVowels(name: string): string[] {
  return name.toUpperCase()
    .split('')
    .filter(char => VOWEL_VALUES.hasOwnProperty(char));
}

export function calculateSteps(vowels: string[]): CalculationStep[] {
  return vowels.map((vowel, index) => ({
    letter: vowel,
    value: VOWEL_VALUES[vowel],
    position: index
  }));
}

export function reduceToSingleDigit(num: number): number {
  // Don't reduce master numbers 11, 22, 33
  if (num === 11 || num === 22 || num === 33) {
    return num;
  }
  
  while (num > 9) {
    num = num.toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
    
    // Check for master numbers after each reduction
    if (num === 11 || num === 22 || num === 33) {
      return num;
    }
  }
  
  return num;
}

export function calculateSoulUrge(fullName: string): SoulUrgeResult {
  const vowels = extractVowels(fullName);
  const steps = calculateSteps(vowels);
  const sum = steps.reduce((total, step) => total + step.value, 0);
  const finalNumber = reduceToSingleDigit(sum);
  
  const calculation = steps.length > 0 
    ? `${steps.map(s => `${s.letter}(${s.value})`).join(' + ')} = ${sum}${sum !== finalNumber ? ` → ${finalNumber}` : ''}`
    : '';

  return {
    number: finalNumber,
    name: SOUL_URGE_NAMES[finalNumber] || "Unknown",
    vowels,
    calculation
  };
}