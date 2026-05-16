# RIZEN

React Native Expo app with Expo Router, Supabase auth/data scaffolding, Gemini AI feature scaffolds, Expo Notifications, and RevenueCat paywall UI.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment variables in `.env`:
   ```env
   SUPABASE_URL=your_supabase_url_here
   SUPABASE_ANON_KEY=your_supabase_anon_key_here
   GEMINI_API_KEY=your_gemini_api_key_here
   REVENUECAT_API_KEY_IOS=your_revenuecat_ios_key_here
   REVENUECAT_API_KEY_ANDROID=your_revenuecat_android_key_here
   ```
3. Start app:
   ```bash
   npx expo start
   ```

## Navigation structure

- Auth: login, signup, forgot password
- Onboarding: welcome, quiz, MBTI, commitment contract, persona, onboarding paywall
- Tabs: Home, Habits, Inspire, Journal, Profile
- AI routes: routine generator, task creator, room scanner stub, daily coach, mood insights
- Paywall modal: RevenueCat plan + restore purchases scaffold
