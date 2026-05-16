import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppStateProvider } from '@/src/providers/app-state-provider';
import { AuthProvider } from '@/src/providers/auth-provider';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <AppStateProvider>
          <StatusBar style="light" />
          <Stack screenOptions={{ headerStyle: { backgroundColor: '#0b1220' }, headerTintColor: '#f8fafc' }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="ai" options={{ headerShown: false }} />
            <Stack.Screen name="paywall" options={{ presentation: 'modal', title: 'Upgrade to Premium' }} />
          </Stack>
        </AppStateProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
