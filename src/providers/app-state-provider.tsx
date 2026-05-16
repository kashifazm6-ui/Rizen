import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react';

import { Habit, JournalEntry, MoodLog, Task } from '@/src/types/models';

type AppStateContextValue = {
  tasks: Task[];
  habits: Habit[];
  moodLogs: MoodLog[];
  journals: JournalEntry[];
  water: number;
  addTask: (task: Task) => void;
  toggleTask: (id: string) => void;
  reorderTasks: (tasks: Task[]) => void;
  addHabit: (habit: Habit) => void;
  logMood: (mood: MoodLog) => void;
  addJournal: (entry: JournalEntry) => void;
  setWater: (value: number) => void;
};

const AppStateContext = createContext<AppStateContextValue | null>(null);

const starterTasks: Task[] = [
  { id: 't1', title: 'Morning Workout', category: 'Fitness', reminder: '07:00', completed: false, steps: ['Warm up', 'Run', 'Cool down'] },
  { id: 't2', title: 'Hydration check', category: 'Health', reminder: '10:00', completed: false },
  { id: 't3', title: 'Evening journal', category: 'Mindset', reminder: '21:00', completed: false },
];

const starterHabits: Habit[] = [
  { id: 'h1', name: '10-min Meditation', category: 'Mindfulness', streak: 7, bestStreak: 21, weekly: [true, true, false, true, true, false, true] },
  { id: 'h2', name: 'Drink 8 glasses water', category: 'Hydration', streak: 4, bestStreak: 12, weekly: [true, true, true, false, true, true, false] },
];

export function AppStateProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>(starterTasks);
  const [habits, setHabits] = useState<Habit[]>(starterHabits);
  const [moodLogs, setMoodLogs] = useState<MoodLog[]>([]);
  const [journals, setJournals] = useState<JournalEntry[]>([]);
  const [water, setWater] = useState(4);

  const value = useMemo<AppStateContextValue>(
    () => ({
      tasks,
      habits,
      moodLogs,
      journals,
      water,
      addTask: (task: Task) => setTasks((prev) => [task, ...prev]),
      toggleTask: (id: string) => setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))),
      reorderTasks: (nextTasks: Task[]) => setTasks(nextTasks),
      addHabit: (habit: Habit) => setHabits((prev) => [habit, ...prev]),
      logMood: (mood: MoodLog) => setMoodLogs((prev) => [mood, ...prev]),
      addJournal: (entry: JournalEntry) => setJournals((prev) => [entry, ...prev]),
      setWater,
    }),
    [tasks, habits, moodLogs, journals, water],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
