import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, Text } from 'react-native';

import { Body, Card, Heading, Input, PrimaryButton, Screen } from '@/src/components/ui';
import { useAuth } from '@/src/providers/auth-provider';

export default function LoginScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <Heading>RIZEN</Heading>
      <Body>Welcome back. Build the life you want, one habit at a time.</Body>
      <Card>
        <Input value={email} onChangeText={setEmail} autoCapitalize="none" placeholder="Email" keyboardType="email-address" />
        <Input value={password} onChangeText={setPassword} secureTextEntry placeholder="Password" />
        <PrimaryButton
          title="Log In"
          onPress={async () => {
            const error = await signIn(email.trim(), password);
            if (error) return Alert.alert('Login failed', error);
            router.replace('/');
          }}
        />
      </Card>
      <Card>
        <Body>Social sign-in placeholders:</Body>
        <PrimaryButton title="Continue with Google" onPress={() => Alert.alert('Coming soon', 'Google sign-in placeholder')} />
        <PrimaryButton title="Continue with Apple" onPress={() => Alert.alert('Coming soon', 'Apple sign-in placeholder')} />
      </Card>
      <Link href="/(auth)/forgot-password" asChild>
        <Pressable><Text style={{ color: '#fdba74' }}>Forgot Password?</Text></Pressable>
      </Link>
      <Link href="/(auth)/signup" asChild>
        <Pressable><Text style={{ color: '#fdba74' }}>Create account</Text></Pressable>
      </Link>
    </Screen>
  );
}
