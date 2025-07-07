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
    const prompt = `You are a professional numerologist providing a personalized Soul Urge Number interpretation. 

The person's name is "${userName}" and their Soul Urge Number is ${soulUrgeNumber} (${soulUrgeName}).

Please provide a warm, insightful, and personalized interpretation that:
- Explains what this Soul Urge Number means for their inner desires and motivations
- Describes their core emotional needs and what drives them at a soul level
- Offers guidance on how they can align with their authentic self
- Mentions specific strengths and potential challenges
- Keeps a positive, empowering tone
- Is approximately 150-200 words

Make it feel personal and meaningful, not generic.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 300,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || 
           "Unable to generate interpretation at this time. Please try again.";
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw new Error('Failed to generate personalized interpretation. Please check your API key and try again.');
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