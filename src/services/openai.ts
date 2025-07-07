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