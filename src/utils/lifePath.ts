export interface LifePathResult {
  number: number;
  name: string;
  description: string;
}

const LIFE_PATH_NAMES: Record<number, string> = {
  1: "দ্য লিডার - নেতা",
  2: "দ্য কোঅপারেটর - সহযোগী", 
  3: "দ্য ক্রিয়েটিভ - সৃজনশীল",
  4: "দ্য বিল্ডার - নির্মাতা",
  5: "দ্য ফ্রিডম সিকার - স্বাধীনতাকামী",
  6: "দ্য নার্চারার - পালনকারী",
  7: "দ্য সিকার - অনুসন্ধানকারী",
  8: "দ্য অ্যাচিভার - অর্জনকারী",
  9: "দ্য হিউম্যানিটারিয়ান - মানবদরদী",
  11: "দ্য ইনটুইটিভ - অন্তর্দর্শী",
  22: "দ্য মাস্টার বিল্ডার - মহানির্মাতা",
  33: "দ্য মাস্টার টিচার - মহাশিক্ষক"
};

const LIFE_PATH_DESCRIPTIONS: Record<number, string> = {
  1: "আপনি জন্মগত নেতা। আপনার জীবনের উদ্দেশ্য হলো নতুন পথ তৈরি করা, অন্যদের অনুপ্রাণিত করা এবং স্বাধীনতার সাথে আপনার লক্ষ্য অর্জন করা।",
  2: "আপনার জীবনের পথ সহযোগিতা ও সম্প্রীতির মাধ্যমে। আপনি শান্তি আনয়নকারী, যিনি অন্যদের সাথে মিলেমিশে কাজ করে বড় কিছু অর্জন করেন।",
  3: "আপনার জীবনের উদ্দেশ্য সৃজনশীলতা ও আনন্দের মাধ্যমে অন্যদের অনুপ্রাণিত করা। আপনি শিল্পী, যোগাযোগকারী এবং আনন্দদাতা।",
  4: "আপনার পথ কঠোর পরিশ্রম ও স্থিতিশীলতার। আপনি ভবিষ্যতের জন্য দৃঢ় ভিত্তি তৈরি করেন এবং ব্যবহারিক সমাধান খুঁজে পান।",
  5: "আপনার জীবনের যাত্রা স্বাধীনতা ও অভিজ্ঞতার মাধ্যমে। আপনি অভিযাত্রী, যিনি পরিবর্তনের মাধ্যমে বৃদ্ধি পান এবং অন্যদের নতুন দৃষ্টিভঙ্গি দেন।",
  6: "আপনার উদ্দেশ্য সেবা ও যত্নের মাধ্যমে। আপনি প্রাকৃতিক নিরাময়কারী, যিনি পরিবার ও সমাজের কল্যাণে নিজেকে নিয়োজিত করেন।",
  7: "আপনার পথ জ্ঞান ও আধ্যাত্মিক সত্যের অনুসন্ধান। আপনি গবেষক, দার্শনিক, যিনি গভীর প্রশ্নের উত্তর খোঁজেন।",
  8: "আপনার জীবনের লক্ষ্য বস্তুগত ও আধ্যাত্মিক সাফল্যের ভারসাম্য। আপনি ক্ষমতাশালী নেতা, যিনি বড় স্বপ্ন বাস্তবায়ন করেন।",
  9: "আপনার উদ্দেশ্য মানবতার সেবা। আপনি বিশ্বব্যাপী দৃষ্টিভঙ্গির অধিকারী, যিনি সকলের কল্যাণে কাজ করেন এবং উদার হৃদয়ের অধিকারী।",
  11: "আপনার পথ আধ্যাত্মিক নেতৃত্ব ও অনুপ্রেরণার। আপনি স্বজ্ঞাত পথপ্রদর্শক, যিনি অন্যদের উচ্চতর সচেতনতার দিকে পরিচালিত করেন।",
  22: "আপনার জীবনের উদ্দেশ্য বিশ্বব্যাপী প্রভাব সৃষ্টি। আপনি মহান স্বপ্নদ্রষ্টা ও বাস্তবায়নকারী, যিনি মানবতার জন্য স্থায়ী পরিবর্তন আনেন।",
  33: "আপনার পথ নিঃশর্ত ভালোবাসা ও শিক্ষার মাধ্যমে। আপনি মহান শিক্ষক, যিনি অন্যদের আত্মিক উন্নতিতে সহায়তা করেন।"
};

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

export function calculateLifePath(birthdate: string): LifePathResult {
  // Parse the date (DD/MM/YYYY format)
  const parts = birthdate.split('/');
  if (parts.length !== 3) {
    throw new Error('Invalid date format. Please use DD/MM/YYYY');
  }
  
  const day = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const year = parseInt(parts[2]);
  
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    throw new Error('Invalid date values');
  }
  
  // Calculate the sum of all digits
  const daySum = day.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  const monthSum = month.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  const yearSum = year.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  
  const totalSum = daySum + monthSum + yearSum;
  const finalNumber = reduceToSingleDigit(totalSum);
  
  return {
    number: finalNumber,
    name: LIFE_PATH_NAMES[finalNumber] || "Unknown",
    description: LIFE_PATH_DESCRIPTIONS[finalNumber] || ""
  };
}