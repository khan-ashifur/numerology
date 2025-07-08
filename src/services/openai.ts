import OpenAI from 'openai';
import { NumerologyType } from '../App';

// Check if API key is available
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: apiKey || 'dummy-key',
  dangerouslyAllowBrowser: true
});

export async function getPersonalizedReading(
  type: NumerologyType,
  method: string,
  inputValue: string,
  number: number
): Promise<string> {
  // Check if API key is available
  if (!apiKey || apiKey === 'your_openai_api_key_here') {
    throw new Error('OpenAI API key not configured');
  }

  try {
    const numerologyTypeText = type === 'soul-urge' ? 'সোল আর্জ' : 'লাইফ পাথ';
    
    const prompt = `আপনি একজন আত্মিক, আবেগময় বুদ্ধিমান বাংলাদেশী জীবন পথপ্রদর্শক। ব্যবহারকারী তাদের ${method} ("${inputValue}") দিয়েছেন, যা ${numerologyTypeText} নম্বর ${number} এ গণনা করা হয়েছে।

এই সংখ্যার ভিত্তিতে, একটি অত্যন্ত ব্যক্তিগত, আবেগময় অনুরণনশীল পাঠ লিখুন যা ব্যবহারকারীকে গভীরভাবে দেখা, অনুপ্রাণিত এবং মৃদুভাবে চ্যালেঞ্জ করা অনুভব করায়। কাব্যিক ভাষা ব্যবহার করুন, একজন জ্ঞানী গল্পকারের মতো লিখুন যিনি মানুষের সংগ্রাম এবং আকাঙ্ক্ষা বোঝেন।

দ্বিতীয় ব্যক্তিতে কথা বলুন, যেমন: "আপনি সবসময়ই অনুভব করেছেন…"

টোন: বাংলা, নরম, জ্ঞানী, রহস্যময়। কঠোর ভাষা ব্যবহার করবেন না। ব্যবহারকারীকে অনুভব করান যে এটি "তাদের মতোই"।

আউটপুটে অবশ্যই অন্তর্ভুক্ত থাকতে হবে:

1. 🎯 **ব্যক্তিত্বের সংক্ষিপ্ত বিবরণ** — এই সংখ্যা তাদের অন্তর্নিহিত আকাঙ্ক্ষা বা পথ সম্পর্কে কী প্রকাশ করে।
2. 💡 **আবেগিক শক্তি** — কী তাদের অনন্য, শক্তিশালী, আবেগময়ভাবে সমৃদ্ধ করে তোলে।
3. 🌱 **চ্যালেঞ্জ/ছায়া** — তাদের জীবনে যে প্যাটার্নগুলি সম্পর্কে সচেতন হতে হবে।
4. 🔥 **মৃদু ধাক্কা** — তাদের আত্মার সাথে সামঞ্জস্য রাখতে আজ থেকেই কী করা শুরু করতে হবে।

কমপক্ষে ৫০০-৮০০ শব্দ লিখুন। সাধারণ হওয়া এড়িয়ে চলুন। এটি অন্তরঙ্গ এবং উপযুক্ত অনুভব করা উচিত।

সংখ্যাতত্ত্বের ধরন: ${numerologyTypeText}
ইনপুট পদ্ধতি: ${method}
ব্যবহারকারীর ইনপুট: ${inputValue}
চূড়ান্ত সংখ্যা: ${number}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 1200,
      temperature: 0.8,
    });

    return completion.choices[0]?.message?.content || 
           "এই মুহূর্তে ব্যক্তিগত পাঠ তৈরি করা সম্ভব হচ্ছে না। অনুগ্রহ করে আবার চেষ্টা করুন।";
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('ব্যক্তিগত পাঠ তৈরি করতে ব্যর্থ। অনুগ্রহ করে আপনার API কী পরীক্ষা করুন এবং আবার চেষ্টা করুন।');
  }
}