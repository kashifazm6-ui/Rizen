import { useState } from 'react';

import { generateAiText } from '@/src/lib/ai';
import { Body, Card, Heading, Input, PrimaryButton, Screen } from '@/src/components/ui';

export default function AiCoachScreen() {
  const [question, setQuestion] = useState('What habit should I focus on this week?');
  const [answer, setAnswer] = useState('');

  return (
    <Screen>
      <Heading>AI Daily Coach</Heading>
      <Card>
        <Input value={question} onChangeText={setQuestion} placeholder="Ask your coach" />
        <PrimaryButton
          title="Send"
          onPress={async () => {
            const text = await generateAiText(`You are a supportive wellness coach. User question: ${question}`);
            setAnswer(text);
          }}
        />
      </Card>
      <Card><Body>{answer || 'Coach response appears here.'}</Body></Card>
    </Screen>
  );
}
