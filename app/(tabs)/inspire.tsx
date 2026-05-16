import { router } from 'expo-router';

import { Body, Card, Heading, PrimaryButton, Screen } from '@/src/components/ui';

const sections = [
  'Meditate',
  'Workouts',
  'Motivation',
  'Soundscapes',
  'Mental Health Tests',
  'Video Routines',
  'Self-Care Articles',
];

export default function InspireTab() {
  return (
    <Screen>
      <Heading>Inspire Library</Heading>
      <Body>Premium content for body and mind.</Body>
      {sections.map((section) => (
        <Card key={section}>
          <Body>{section}</Body>
          <Body>Curated content block with timer/bookmark support scaffold.</Body>
        </Card>
      ))}
      <PrimaryButton title="Open AI Daily Coach" onPress={() => router.push('/ai/coach')} />
    </Screen>
  );
}
