import { Platform } from 'react-native';
import Purchases from 'react-native-purchases';

import { env } from '@/src/lib/env';

let configured = false;

export async function configureRevenueCat(userId?: string) {
  const apiKey = Platform.select({
    ios: env.REVENUECAT_API_KEY_IOS,
    android: env.REVENUECAT_API_KEY_ANDROID,
    default: '',
  });

  if (!apiKey || apiKey.includes('your_revenuecat')) return;
  if (configured) return;

  await Purchases.configure({ apiKey, appUserID: userId });
  configured = true;
}

export async function getOfferingsSafely() {
  try {
    const offerings = await Purchases.getOfferings();
    return offerings.current;
  } catch {
    return null;
  }
}

export async function restorePurchasesSafely() {
  try {
    return await Purchases.restorePurchases();
  } catch {
    return null;
  }
}
