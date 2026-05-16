import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, Text } from 'react-native';

import { Body, Card, Heading, Input, PrimaryButton, Screen } from '@/src/components/ui';
import { useAuth } from '@/src/providers/auth-provider';

export default function SignUpScreen() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <Heading>Create your RIZEN account</Heading>
      <Body>Start your growth journey.</Body>
      <Card>
        <Input value={email} onChangeText={setEmail} autoCapitalize="none" placeholder="Email" keyboardType="email-address" />
        <Input value={password} onChangeText={setPassword} secureTextEntry placeholder="Password" />
        <PrimaryButton
          title="Sign Up"
          onPress={async () => {
            const error = await signUp(email.trim(), password);
            if (error) return Alert.alert('Sign-up failed', error);
            Alert.alert('Success', 'Check your inbox for verification if required.');
            router.replace('/(auth)/login');
          }}
        />
      </Card>
      <Link href="/(auth)/login" asChild>
        <Pressable><Text style={{ color: '#fdba74' }}>Already have an account? Log in</Text></Pressable>
      </Link>
    </Screen>
  );
}
