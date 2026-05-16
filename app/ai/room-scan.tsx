import { Alert } from 'react-native';

import { Body, Card, Heading, PrimaryButton, Screen } from '@/src/components/ui';

export default function AiRoomScanScreen() {
  return (
    <Screen>
      <Heading>AI Room Scanner (Stub)</Heading>
      <Card>
        <Body>Capture a room image and auto-generate a cleanup checklist.</Body>
        <PrimaryButton title="Open camera (stub)" onPress={() => Alert.alert('Stub', 'Camera flow scaffolded. Add expo-camera + vision pipeline next.')} />
      </Card>
    </Screen>
  );
}
