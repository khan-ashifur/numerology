import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getPersonalizedInterpretation(
  soulUrgeNumber: number, 
  soulUrgeName: string, 
  userName: string
): Promise<string> {
  try {
    const prompt = `আপনি একজন পেশাদার সংখ্যাতত্ত্ববিদ যিনি ব্যক্তিগত সোল আর্জ নম্বর ব্যাখ্যা প্রদান করেন।

ব্যক্তির নাম "${userName}" এবং তাদের সোল আর্জ নম্বর ${soulUrgeNumber} (${soulUrgeName})।

অনুগ্রহ করে একটি উষ্ণ, অন্তর্দৃষ্টিপূর্ণ এবং ব্যক্তিগত ব্যাখ্যা প্রদান করুন যাতে থাকবে:
- এই সোল আর্জ নম্বর তাদের অন্তর্নিহিত আকাঙ্ক্ষা এবং প্রেরণার জন্য কী অর্থ বহন করে
- তাদের মূল আবেগিক চাহিদা এবং আত্মিক স্তরে কী তাদের চালিত করে
- কীভাবে তারা তাদের প্রকৃত সত্তার সাথে সামঞ্জস্য রাখতে পারে সে বিষয়ে নির্দেশনা
- নির্দিষ্ট শক্তি এবং সম্ভাব্য চ্যালেঞ্জের উল্লেখ
- ইতিবাচক, ক্ষমতায়নকারী টোন বজায় রাখুন
- প্রায় ১৫০-২০০ শব্দের মধ্যে হোক

এটি ব্যক্তিগত এবং অর্থবহ অনুভব করান, সাধারণ নয়। সম্পূর্ণ বাংলায় লিখুন।`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || 
           "এই মুহূর্তে ব্যাখ্যা তৈরি করা সম্ভব হচ্ছে না। অনুগ্রহ করে আবার চেষ্টা করুন।";
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('ব্যক্তিগত ব্যাখ্যা তৈরি করতে ব্যর্থ। অনুগ্রহ করে আপনার API কী পরীক্ষা করুন এবং আবার চেষ্টা করুন।');
  }
}

export async function getBanglaDetailedInterpretation(
  soulUrgeNumber: number,
  soulUrgeName: string,
  userName: string,
  userEmail: string
): Promise<string> {
  try {
    const prompt = `আপনি একজন পেশাদার সংখ্যাতত্ত্ববিদ যিনি বাংলায় বিস্তারিত সোল আর্জ নম্বর বিশ্লেষণ প্রদান করেন।

ব্যক্তির নাম: "${userName}"
ইমেইল: "${userEmail}"
সোল আর্জ নম্বর: ${soulUrgeNumber} (${soulUrgeName})

অনুগ্রহ করে একটি বিস্তারিত, ব্যক্তিগত এবং অর্থবহ বিশ্লেষণ প্রদান করুন যাতে থাকবে:

১. আত্মিক পরিচয় ও মূল প্রেরণা
২. ব্যক্তিত্বের গভীর বৈশিষ্ট্য
৩. জীবনের উদ্দেশ্য ও লক্ষ্য
৪. সম্পর্কের ক্ষেত্রে প্রবণতা
৫. ক্যারিয়ার ও পেশাগত দিকনির্দেশনা
৬. চ্যালেঞ্জ ও সুযোগ
৭. আধ্যাত্মিক বৃদ্ধির পথ
৮. ব্যবহারিক পরামর্শ

বিশ্লেষণটি:
- সম্পূর্ণ বাংলায় লিখুন
- ব্যক্তিগত ও উষ্ণ টোনে হোক
- ৪০০-৫০০ শব্দের মধ্যে হোক
- ইতিবাচক ও অনুপ্রেরণামূলক হোক
- সুন্দর বাংলা ভাষায় লিখুন

ব্যক্তির নামটি বিশ্লেষণে অন্তর্ভুক্ত করুন এবং এটি যেন একটি ব্যক্তিগত চিঠির মতো অনুভূত হয়।`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 800,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || 
           "এই মুহূর্তে বিশ্লেষণ তৈরি করা সম্ভব হচ্ছে না। অনুগ্রহ করে আবার চেষ্টা করুন।";
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('বিস্তারিত বিশ্লেষণ তৈরি করতে ব্যর্থ। অনুগ্রহ করে আপনার API কী পরীক্ষা করুন এবং আবার চেষ্টা করুন।');
  }
}