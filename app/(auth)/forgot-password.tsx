import { useState } from 'react';
import { Alert } from 'react-native';

import { Body, Card, Heading, Input, PrimaryButton, Screen } from '@/src/components/ui';
import { useAuth } from '@/src/providers/auth-provider';

export default function ForgotPasswordScreen() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');

  return (
    <Screen>
      <Heading>Reset your password</Heading>
      <Body>We'll email you secure reset instructions.</Body>
      <Card>
        <Input value={email} onChangeText={setEmail} autoCapitalize="none" placeholder="Email" keyboardType="email-address" />
        <PrimaryButton
          title="Send reset link"
          onPress={async () => {
            const error = await resetPassword(email.trim());
            if (error) return Alert.alert('Could not send email', error);
            Alert.alert('Check your email', 'Password reset instructions sent.');
          }}
        />
      </Card>
    </Screen>
  );
}
