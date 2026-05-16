import DraggableFlatList, { RenderItemParams } from 'react-native-draggable-flatlist';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

import { Body, Card, Heading, Input, PrimaryButton, Screen } from '@/src/components/ui';
import { useAppState } from '@/src/providers/app-state-provider';
import { Task } from '@/src/types/models';

export default function HomeTab() {
  const { tasks, toggleTask, reorderTasks, addTask } = useAppState();
  const [newTask, setNewTask] = useState('');
  const completion = useMemo(() => Math.round((tasks.filter((t) => t.completed).length / Math.max(tasks.length, 1)) * 100), [tasks]);

  const renderItem = ({ item, drag, isActive }: RenderItemParams<Task>) => (
    <Pressable onLongPress={drag} disabled={isActive} style={{ opacity: isActive ? 0.85 : 1 }}>
      <Card>
        <Text style={{ color: '#f8fafc', fontWeight: '600' }}>{item.title}</Text>
        <Text style={{ color: '#94a3b8' }}>{item.category} {item.reminder ? `• ${item.reminder}` : ''}</Text>
        <Text style={{ color: '#94a3b8' }}>Steps: {(item.steps ?? []).join(' → ') || '—'}</Text>
        <PrimaryButton title={item.completed ? 'Mark Incomplete' : 'Mark Complete'} onPress={() => toggleTask(item.id)} />
      </Card>
    </Pressable>
  );

  return (
    <Screen>
      <Heading>Good day 👋</Heading>
      <Body>Today completion: {completion}% • 🔥 Day 12</Body>
      <Card>
        <Body>Quick Add</Body>
        <Input value={newTask} onChangeText={setNewTask} placeholder="Add task" />
        <PrimaryButton
          title="Add"
          onPress={() => {
            if (!newTask.trim()) return;
            addTask({ id: String(Date.now()), title: newTask.trim(), category: 'Custom', completed: false });
            setNewTask('');
          }}
        />
        <PrimaryButton title="✨ Generate with AI" onPress={() => router.push('/ai/task')} />
      </Card>
      <Card>
        <Body>Long press and drag to reorder tasks.</Body>
        <DraggableFlatList data={tasks} onDragEnd={({ data }) => reorderTasks(data)} keyExtractor={(item) => item.id} renderItem={renderItem} />
      </Card>
      <PrimaryButton title="🎡 Spin wheel pick" onPress={() => Alert.alert('Spin Result', tasks[Math.floor(Math.random() * tasks.length)]?.title ?? 'No tasks')} />
      <PrimaryButton title="Daily mood check-in" onPress={() => router.push('/(tabs)/journal')} />
    </Screen>
  );
}
