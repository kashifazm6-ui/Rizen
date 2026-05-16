import { router } from 'expo-router';

import { Body, Card, Heading, PrimaryButton, Screen } from '@/src/components/ui';

export default function OnboardingWelcomeScreen() {
  return (
    <Screen>
      <Heading>Your transformation starts now</Heading>
      <Card>
        <Body>Chaotic days → calm structure.</Body>
        <Body>Build the life you've always wanted, one habit at a time.</Body>
        <PrimaryButton title="Start My Journey" onPress={() => router.push('/(onboarding)/quiz')} />
      </Card>
    </Screen>
  );
}
