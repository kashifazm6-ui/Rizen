import { router } from 'expo-router';
import { useState } from 'react';

import { Body, Card, Heading, Input, PrimaryButton, Screen } from '@/src/components/ui';

export default function OnboardingContractScreen() {
  const [name, setName] = useState('');

  return (
    <Screen>
      <Heading>Commitment Contract</Heading>
      <Card>
        <Body>I, {name || '[your name]'}, commit to becoming a better version of myself.</Body>
        <Input value={name} onChangeText={setName} placeholder="Type your name" />
        <PrimaryButton title="I Commit" onPress={() => router.push('/(onboarding)/persona')} />
      </Card>
    </Screen>
  );
}
