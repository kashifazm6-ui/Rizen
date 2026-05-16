import { useMemo } from 'react';

import { buildMoodInsight } from '@/src/lib/ai';
import { Body, Card, Heading, Screen } from '@/src/components/ui';
import { useAppState } from '@/src/providers/app-state-provider';

export default function AiInsightsScreen() {
  const { moodLogs } = useAppState();
  const insight = useMemo(() => buildMoodInsight(moodLogs), [moodLogs]);

  return (
    <Screen>
      <Heading>AI Mood Insights</Heading>
      <Card>
        <Body>{insight}</Body>
      </Card>
    </Screen>
  );
}
