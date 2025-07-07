export interface SoulUrgeResult {
  number: number;
  name: string;
  description: string;
  powers: string[];
  challenges: string[];
  vowels: string[];
  calculation: string;
  interpretation?: string;
}

export interface CalculationStep {
  letter: string;
  value: number;
  position: number;
}