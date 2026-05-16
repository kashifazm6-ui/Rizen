import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { Body, Card, Heading, PrimaryButton, Screen } from '@/src/components/ui';

const goals = ['fitness', 'mental health', 'productivity', 'sleep', 'weight loss', 'general wellness'];

export default function OnboardingQuizScreen() {
  const [goal, setGoal] = useState(goals[0]);

  return (
    <Screen>
      <Heading>Personalization Quiz</Heading>
      <Body>Main goal, wake/sleep rhythm, challenge profile, and preferred routine windows.</Body>
      <Card>
        <Body>What is your main goal?</Body>
        {goals.map((item) => (
          <Pressable key={item} onPress={() => setGoal(item)} style={{ paddingVertical: 8 }}>
            <Text style={{ color: goal === item ? '#fb7185' : '#cbd5e1' }}>{goal === item ? '●' : '○'} {item}</Text>
          </Pressable>
        ))}
      </Card>
      <PrimaryButton title="Continue to MBTI" onPress={() => router.push('/(onboarding)/mbti')} />
    </Screen>
  );
}
