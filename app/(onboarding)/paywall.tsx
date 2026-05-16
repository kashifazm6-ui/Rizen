import { router } from 'expo-router';

import { Body, Card, Heading, PrimaryButton, Screen } from '@/src/components/ui';
import { useAuth } from '@/src/providers/auth-provider';

export default function OnboardingPaywallScreen() {
  const { setOnboardingComplete } = useAuth();

  return (
    <Screen>
      <Heading>Choose your plan</Heading>
      <Card>
        <Body>Monthly $4.99</Body>
        <Body>Yearly $29.99 (7-day free trial, best value)</Body>
        <Body>Lifetime $59.99</Body>
        <Body>Soft exit is always available — no aggressive countdowns.</Body>
      </Card>
      <PrimaryButton
        title="Continue with Free"
        onPress={async () => {
          await setOnboardingComplete(true);
          router.replace('/(tabs)');
        }}
      />
      <PrimaryButton title="Open Premium Paywall" onPress={() => router.push('/paywall')} />
    </Screen>
  );
}
