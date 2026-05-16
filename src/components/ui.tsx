import { ComponentProps, PropsWithChildren } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { palette } from '@/src/theme';

export function Screen({ children }: PropsWithChildren) {
  return <ScrollView style={styles.screen} contentContainerStyle={styles.content}>{children}</ScrollView>;
}

export function Card({ children }: PropsWithChildren) {
  return <View style={styles.card}>{children}</View>;
}

export function Heading({ children }: PropsWithChildren) {
  return <Text style={styles.heading}>{children}</Text>;
}

export function Body({ children }: PropsWithChildren) {
  return <Text style={styles.body}>{children}</Text>;
}

export function Input(props: ComponentProps<typeof TextInput>) {
  return <TextInput placeholderTextColor={palette.muted} style={styles.input} {...props} />;
}

export function PrimaryButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable accessibilityRole="button" style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.background },
  content: { padding: 16, gap: 12, paddingBottom: 48 },
  card: {
    backgroundColor: palette.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: palette.border,
    padding: 16,
    gap: 8,
  },
  heading: { color: palette.text, fontSize: 24, fontWeight: '700' },
  body: { color: palette.muted, fontSize: 14, lineHeight: 20 },
  input: {
    borderWidth: 1,
    borderColor: palette.border,
    backgroundColor: '#111827',
    color: palette.text,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: palette.accent,
    borderRadius: 999,
    minHeight: 46,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  buttonLabel: { color: '#fff', fontWeight: '700' },
});
