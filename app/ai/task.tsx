import { useState } from 'react';

import { generateAiText } from '@/src/lib/ai';
import { Body, Card, Heading, Input, PrimaryButton, Screen } from '@/src/components/ui';

export default function AiTaskScreen() {
  const [idea, setIdea] = useState('get fit');
  const [result, setResult] = useState('');

  return (
    <Screen>
      <Heading>AI Task Creator</Heading>
      <Card>
        <Input value={idea} onChangeText={setIdea} placeholder="Rough idea" />
        <PrimaryButton
          title="Transform into task"
          onPress={async () => {
            const text = await generateAiText(`Turn this idea into a clear habit task with substeps and suggested reminder: ${idea}`);
            setResult(text);
          }}
        />
      </Card>
      <Card><Body>{result || 'AI task output will appear here.'}</Body></Card>
    </Screen>
  );
}
