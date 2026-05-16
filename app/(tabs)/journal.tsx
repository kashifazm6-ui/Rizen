import { useMemo, useState } from 'react';
import { Text, View } from 'react-native';

import { buildMoodInsight } from '@/src/lib/ai';
import { Body, Card, Heading, Input, PrimaryButton, Screen } from '@/src/components/ui';
import { useAppState } from '@/src/providers/app-state-provider';

const moods = [
  { label: '😫', value: 1 as const },
  { label: '😕', value: 2 as const },
  { label: '😐', value: 3 as const },
  { label: '🙂', value: 4 as const },
  { label: '😄', value: 5 as const },
];

export default function JournalTab() {
  const { moodLogs, logMood, journals, addJournal, water, setWater } = useAppState();
  const [journalText, setJournalText] = useState('');
  const insight = useMemo(() => buildMoodInsight(moodLogs), [moodLogs]);

  return (
    <Screen>
      <Heading>Journal & Mood</Heading>
      <Card>
        <Body>Daily mood check-in</Body>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {moods.map((m) => (
            <PrimaryButton key={m.value} title={m.label} onPress={() => logMood({ date: new Date().toISOString(), mood: m.value, tags: [] })} />
          ))}
        </View>
      </Card>
      <Card>
        <Body>Guided prompt: What's one thing you're proud of today?</Body>
        <Input multiline numberOfLines={4} value={journalText} onChangeText={setJournalText} placeholder="Write freely..." />
        <PrimaryButton
          title="Save Journal"
          onPress={() => {
            if (!journalText.trim()) return;
            addJournal({ id: String(Date.now()), title: 'Daily Reflection', content: journalText.trim(), createdAt: new Date().toISOString() });
            setJournalText('');
          }}
        />
      </Card>
      <Card>
        <Body>Water intake: {water}/8</Body>
        <PrimaryButton title="+1 Glass" onPress={() => setWater(Math.min(20, water + 1))} />
      </Card>
      <Card>
        <Text style={{ color: '#f8fafc', fontWeight: '700' }}>AI Mood Insight</Text>
        <Body>{insight}</Body>
      </Card>
      {journals.map((entry) => (
        <Card key={entry.id}>
          <Text style={{ color: '#f8fafc' }}>{entry.title}</Text>
          <Body>{entry.content}</Body>
        </Card>
      ))}
    </Screen>
  );
}
