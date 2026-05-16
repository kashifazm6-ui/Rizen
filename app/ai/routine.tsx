import { useState } from 'react';

import { generateAiText } from '@/src/lib/ai';
import { Body, Card, Heading, Input, PrimaryButton, Screen } from '@/src/components/ui';

export default function AiRoutineScreen() {
  const [goal, setGoal] = useState('I want to lose weight and feel less stressed');
  const [response, setResponse] = useState('');

  return (
    <Screen>
      <Heading>AI Routine Generator</Heading>
      <Card>
        <Input value={goal} onChangeText={setGoal} placeholder="Describe your goal" />
        <PrimaryButton
          title="Generate"
          onPress={async () => {
            const text = await generateAiText(`Create a practical daily routine for: ${goal}`);
            setResponse(text);
          }}
        />
      </Card>
      <Card><Body>{response || 'Generated routine will appear here.'}</Body></Card>
    </Screen>
  );
}
