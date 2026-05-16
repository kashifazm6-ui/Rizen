import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Switch, Text } from 'react-native';

import { configureRevenueCat, restorePurchasesSafely } from '@/src/lib/revenuecat';
import { registerForPushNotifications, scheduleEveningReflection, scheduleMorningSummary } from '@/src/lib/notifications';
import { Body, Card, Heading, PrimaryButton, Screen } from '@/src/components/ui';
import { useAppState } from '@/src/providers/app-state-provider';
import { useAuth } from '@/src/providers/auth-provider';

export default function ProfileTab() {
  const { habits, tasks, journals, moodLogs } = useAppState();
  const { signOut, session } = useAuth();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  return (
    <Screen>
      <Heading>Profile</Heading>
      <Card>
        <Text style={{ color: '#f8fafc', fontWeight: '700' }}>{session?.user.email ?? 'RIZEN Member'}</Text>
        <Body>MBTI: INTJ • Persona: Focused Student</Body>
        <Body>Total habits completed: {habits.reduce((sum, h) => sum + h.weekly.filter(Boolean).length, 0)}</Body>
      </Card>
      <Card>
        <Body>Weekly summary</Body>
        <Body>Tasks: {tasks.length} • Mood logs: {moodLogs.length} • Journal entries: {journals.length}</Body>
      </Card>
      <Card>
        <Text style={{ color: '#f8fafc', marginBottom: 8 }}>Notification Settings</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={async (enabled) => {
            setNotificationsEnabled(enabled);
            if (!enabled) return;
            await registerForPushNotifications();
            await scheduleMorningSummary();
            await scheduleEveningReflection();
          }}
        />
      </Card>
      <Card>
        <PrimaryButton title="Manage Subscription" onPress={async () => {
          await configureRevenueCat(session?.user.id);
          router.push('/paywall');
        }} />
        <PrimaryButton title="Restore Purchases" onPress={async () => {
          const result = await restorePurchasesSafely();
          Alert.alert('Restore', result ? 'Purchases restored where available.' : 'No purchases restored.');
        }} />
      </Card>
      <Card>
        <PrimaryButton title="AI Routine Generator" onPress={() => router.push('/ai/routine')} />
        <PrimaryButton title="AI Room Scanner" onPress={() => router.push('/ai/room-scan')} />
        <PrimaryButton title="AI Mood Insights" onPress={() => router.push('/ai/insights')} />
      </Card>
      <PrimaryButton title="Sign Out" onPress={async () => { await signOut(); router.replace('/'); }} />
    </Screen>
  );
}
