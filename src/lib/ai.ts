import { env } from '@/src/lib/env';

const GEMINI_MODEL = 'gemini-1.5-flash';

export async function generateAiText(prompt: string): Promise<string> {
  if (!env.GEMINI_API_KEY || env.GEMINI_API_KEY.includes('your_gemini_api_key_here')) {
    return 'AI is configured in scaffold mode. Add GEMINI_API_KEY in .env to enable live responses.';
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${env.GEMINI_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      }),
    },
  );

  if (!response.ok) {
    throw new Error(`Gemini request failed with status ${response.status}`);
  }

  const payload = await response.json();
  return payload?.candidates?.[0]?.content?.parts?.[0]?.text ?? 'No AI response available.';
}

export function buildMoodInsight(logs: { mood: number; date: string }[]): string {
  if (logs.length < 14) {
    return 'Log at least 14 days to unlock personalized mood insights.';
  }

  const average = logs.reduce((acc, item) => acc + item.mood, 0) / logs.length;
  if (average >= 4) return 'You are trending positive. Keep protecting the habits that sustain this momentum.';
  if (average >= 3) return 'Your baseline is steady. Add one small recovery ritual on high-stress days.';
  return 'Mood trend is low. Prioritize sleep, hydration, and 10-minute movement breaks this week.';
}
