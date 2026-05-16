import { useState } from 'react';
import { Text, View } from 'react-native';

import { Body, Card, Heading, Input, PrimaryButton, Screen } from '@/src/components/ui';
import { useAppState } from '@/src/providers/app-state-provider';

export default function HabitsTab() {
  const { habits, addHabit } = useAppState();
  const [habitName, setHabitName] = useState('');

  return (
    <Screen>
      <Heading>Habit Tracker</Heading>
      <Body>Build streaks with smart categories and AI-assisted setup.</Body>
      <Card>
        <Input value={habitName} onChangeText={setHabitName} placeholder="Add habit" />
        <PrimaryButton
          title="Add Habit"
          onPress={() => {
            if (!habitName.trim()) return;
            addHabit({ id: String(Date.now()), name: habitName.trim(), category: 'Custom', streak: 0, bestStreak: 0, weekly: [false, false, false, false, false, false, false] });
            setHabitName('');
          }}
        />
      </Card>
      {habits.map((habit) => (
        <Card key={habit.id}>
          <Text style={{ color: '#f8fafc', fontWeight: '700' }}>{habit.name}</Text>
          <Text style={{ color: '#94a3b8' }}>{habit.category} • Streak {habit.streak} • Best {habit.bestStreak}</Text>
          <View style={{ flexDirection: 'row', gap: 6 }}>
            {habit.weekly.map((done, idx) => (
              <View key={idx} style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: done ? '#34d399' : '#334155' }} />
            ))}
          </View>
        </Card>
      ))}
    </Screen>
  );
}
