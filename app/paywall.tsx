import { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { configureRevenueCat, getOfferingsSafely, restorePurchasesSafely } from '@/src/lib/revenuecat';
import { Body, Card, Heading, PrimaryButton, Screen } from '@/src/components/ui';
import { useAuth } from '@/src/providers/auth-provider';

export default function PaywallScreen() {
  const { session } = useAuth();
  const [offeringInfo, setOfferingInfo] = useState('Loading RevenueCat offerings...');

  useEffect(() => {
    (async () => {
      try {
        await configureRevenueCat(session?.user.id);
        const offerings = await getOfferingsSafely();
        setOfferingInfo(offerings ? `Current offering: ${offerings.identifier}` : 'Using static plans (RevenueCat placeholder mode).');
      } catch {
        setOfferingInfo('RevenueCat unavailable in current environment.');
      }
    })();
  }, [session?.user.id]);

  return (
    <Screen>
      <Heading>Premium Membership</Heading>
      <Card>
        <Body>Monthly: $4.99</Body>
        <Body>Yearly: $29.99 (7-day free trial)</Body>
        <Body>Lifetime: $59.99</Body>
        <Body>{offeringInfo}</Body>
      </Card>
      <PrimaryButton title="Start Yearly Trial" onPress={() => Alert.alert('Purchase', 'Connect products in RevenueCat dashboard to enable checkout.')} />
      <PrimaryButton
        title="Restore Purchases"
        onPress={async () => {
          const result = await restorePurchasesSafely();
          Alert.alert('Restore', result ? 'Purchases restored where available.' : 'No purchases restored.');
        }}
      />
    </Screen>
  );
}
