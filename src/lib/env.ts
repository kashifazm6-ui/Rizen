import Constants from 'expo-constants';

type Env = {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  GEMINI_API_KEY: string;
  REVENUECAT_API_KEY_IOS: string;
  REVENUECAT_API_KEY_ANDROID: string;
};

const extra = (Constants.expoConfig?.extra ?? {}) as Partial<Env>;
const safeSupabaseUrl = extra.SUPABASE_URL?.startsWith('http') ? extra.SUPABASE_URL : 'https://example.supabase.co';

export const env: Env = {
  SUPABASE_URL: safeSupabaseUrl,
  SUPABASE_ANON_KEY: extra.SUPABASE_ANON_KEY ?? 'public-anon-key-placeholder',
  GEMINI_API_KEY: extra.GEMINI_API_KEY ?? 'your_gemini_api_key_here',
  REVENUECAT_API_KEY_IOS: extra.REVENUECAT_API_KEY_IOS ?? 'your_revenuecat_ios_key_here',
  REVENUECAT_API_KEY_ANDROID: extra.REVENUECAT_API_KEY_ANDROID ?? 'your_revenuecat_android_key_here',
};
