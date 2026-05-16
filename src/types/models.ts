export type GoalType = 'fitness' | 'mental_health' | 'productivity' | 'sleep' | 'weight_loss' | 'general_wellness';

export type Task = {
  id: string;
  title: string;
  category: string;
  reminder?: string;
  completed: boolean;
  steps?: string[];
};

export type Habit = {
  id: string;
  name: string;
  category: string;
  streak: number;
  bestStreak: number;
  weekly: boolean[];
};

export type JournalEntry = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export type MoodLog = {
  date: string;
  mood: 1 | 2 | 3 | 4 | 5;
  tags: string[];
};
