export interface SoulUrgeResult {
  number: number;
  name: string;
  description: string;
}

const VOWEL_VALUES: Record<string, number> = {
  A: 1, E: 5, I: 9, O: 6, U: 3, Y: 7
};

const SOUL_URGE_NAMES: Record<number, string> = {
  1: "দ্য পাইওনিয়ার - অগ্রদূত",
  2: "দ্য পিসমেকার - শান্তিদূত", 
  3: "দ্য ক্রিয়েটর - সৃষ্টিকর্তা",
  4: "দ্য বিল্ডার - স্থপতি",
  5: "দ্য এক্সপ্লোরার - অভিযাত্রী",
  6: "দ্য নার্চারার - পালনকারী",
  7: "দ্য সিকার - সত্যান্বেষী",
  8: "দ্য অ্যাচিভার - বিজয়ী",
  9: "দ্য হিউম্যানিটারিয়ান - মানবদরদী",
  11: "দ্য ভিশনারি - দ্রষ্টা",
  22: "দ্য মাস্টার বিল্ডার - মহাস্থপতি",
  33: "দ্য মাস্টার টিচার - মহাগুরু"
};

const SOUL_URGE_DESCRIPTIONS: Record<number, string> = {
  1: "আপনার আত্মা নেতৃত্বের জন্য আকুল। আপনি জন্মগতভাবে পথপ্রদর্শক, যিনি অন্যদের অনুপ্রাণিত করেন এবং নতুন দিগন্ত উন্মোচন করেন।",
  2: "আপনার হৃদয় সম্প্রীতি ও ভালোবাসার জন্য তৃষ্ণার্ত। আপনি প্রাকৃতিক শান্তিদূত, যিনি বিভেদ দূর করেন এবং একতা আনেন।",
  3: "আপনার আত্মা সৃজনশীলতার আগুনে জ্বলে। আপনি শিল্পী, স্বপ্নদ্রষ্টা, যিনি সৌন্দর্য ও আনন্দ দিয়ে পৃথিবীকে রাঙিয়ে তোলেন।",
  4: "আপনার অন্তর কঠোর পরিশ্রম ও স্থায়িত্বের জন্য আকাঙ্ক্ষা করে। আপনি ভিত্তি নির্মাতা, যিনি দৃঢ় ও টেকসই কিছু গড়ে তোলেন।",
  5: "আপনার আত্মা স্বাধীনতা ও অভিযানের জন্য উদগ্রীব। আপনি মুক্ত পাখি, যিনি নতুন অভিজ্ঞতা ও পরিবর্তনে আনন্দ পান।",
  6: "আপনার হৃদয় সেবা ও যত্নের জন্য ব্যাকুল। আপনি প্রাকৃতিক পালনকর্তা, যিনি অন্যদের সুখ ও কল্যাণে নিজেকে নিয়োজিত করেন।",
  7: "আপনার আত্মা গভীর সত্য ও জ্ঞানের জন্য অনুসন্ধান করে। আপনি রহস্যবেত্তা, যিনি জীবনের গূঢ় রহস্য উন্মোচনে মগ্ন।",
  8: "আপনার অন্তর সাফল্য ও ক্ষমতার জন্য আকাঙ্ক্ষা করে। আপনি প্রাকৃতিক নেতা, যিনি বস্তুগত ও আধ্যাত্মিক উভয় জগতে বিজয় অর্জন করেন।",
  9: "আপনার আত্মা মানবতার সেবায় নিবেদিত। আপনি বিশ্বব্যাপী দৃষ্টিভঙ্গির অধিকারী, যিনি সকলের কল্যাণে কাজ করেন।",
  11: "আপনার আত্মা অতিপ্রাকৃত অন্তর্দৃষ্টির অধিকারী। আপনি আধ্যাত্মিক পথপ্রদর্শক, যিনি অন্যদের উচ্চতর সত্যের দিকে পরিচালিত করেন।",
  22: "আপনার আত্মা মহৎ স্বপ্নকে বাস্তবে রূপ দেওয়ার ক্ষমতা রাখে। আপনি বিশ্ব পরিবর্তনকারী, যিনি মানবতার জন্য স্থায়ী উত্তরাধিকার রেখে যান।",
  33: "আপনার আত্মা নিঃশর্ত ভালোবাসা ও জ্ঞানের প্রতীক। আপনি মহান শিক্ষক, যিনি অন্যদের আত্মিক উন্নতিতে সহায়তা করেন।"
};

export function extractVowels(name: string): string[] {
  return name.toUpperCase()
    .split('')
    .filter(char => VOWEL_VALUES.hasOwnProperty(char));
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
  const sum = vowels.reduce((total, vowel) => total + VOWEL_VALUES[vowel], 0);
  const finalNumber = reduceToSingleDigit(sum);

  return {
    number: finalNumber,
    name: SOUL_URGE_NAMES[finalNumber] || "Unknown",
    description: SOUL_URGE_DESCRIPTIONS[finalNumber] || ""
  };
}