import { router } from 'expo-router';
import { useState } from 'react';

import { Body, Card, Heading, Input, PrimaryButton, Screen } from '@/src/components/ui';

export default function OnboardingPersonaScreen() {
  const [persona, setPersona] = useState('Focused Student');

  return (
    <Screen>
      <Heading>Role Model Persona</Heading>
      <Card>
        <Body>Choose who you want to become and we will tailor a starter routine.</Body>
        <Input value={persona} onChangeText={setPersona} placeholder="Disciplined Athlete / Focused Student / Calm Professional" />
      </Card>
      <PrimaryButton title="Continue to Paywall" onPress={() => router.push('/(onboarding)/paywall')} />
    </Screen>
  );
}
