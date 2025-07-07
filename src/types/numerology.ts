export interface SoulUrgeResult {
  number: number;
  name: string;
  vowels: string[];
  calculation: string;
  interpretation?: string;
}

export interface CalculationStep {
  letter: string;
  value: number;
  position: number;
}