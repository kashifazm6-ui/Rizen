import Constants from 'expo-constants';

type Env = {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
  GEMINI_API_KEY: string;
  REVENUECAT_API_KEY_IOS: string;
  REVENUECAT_API_KEY_ANDROID: string;
};

const extra = (Constants.expoConfig?.extra ?? {}) as Partial<Env>;

export const env: Env = {
  SUPABASE_URL: extra.SUPABASE_URL ?? 'your_supabase_url_here',
  SUPABASE_ANON_KEY: extra.SUPABASE_ANON_KEY ?? 'your_supabase_anon_key_here',
  GEMINI_API_KEY: extra.GEMINI_API_KEY ?? 'your_gemini_api_key_here',
  REVENUECAT_API_KEY_IOS: extra.REVENUECAT_API_KEY_IOS ?? 'your_revenuecat_ios_key_here',
  REVENUECAT_API_KEY_ANDROID: extra.REVENUECAT_API_KEY_ANDROID ?? 'your_revenuecat_android_key_here',
};
