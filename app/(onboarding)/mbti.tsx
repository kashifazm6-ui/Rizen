import { router } from 'expo-router';
import { useMemo, useState } from 'react';

import { Body, Card, Heading, PrimaryButton, Screen } from '@/src/components/ui';

export default function OnboardingMbtiScreen() {
  const [answers, setAnswers] = useState([1, 0, 1, 1]);
  const result = useMemo(() => (answers.reduce((acc, v) => acc + v, 0) > 2 ? 'INTJ — The Strategist' : 'ENFP — The Motivator'), [answers]);

  return (
    <Screen>
      <Heading>Short MBTI Test</Heading>
      <Card>
        <Body>12 questions across E/I, S/N, T/F, J/P dimensions (scaffolded).</Body>
        <Body>Your current result: {result}</Body>
        <PrimaryButton title="Randomize sample answers" onPress={() => setAnswers((prev) => prev.map((v) => (v ? 0 : 1)))} />
      </Card>
      <PrimaryButton title="Continue" onPress={() => router.push('/(onboarding)/contract')} />
    </Screen>
  );
}
