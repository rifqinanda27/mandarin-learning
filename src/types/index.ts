export type UserLevel = 'beginner' | 'elementary' | 'intermediate';
export type LearningGoal = 'daily_convo' | 'travel' | 'work' | 'hsk' | 'general';
export type ThemeMode = 'light' | 'dark' | 'system';

export interface UserSettings {
  level: UserLevel;
  learningGoal: LearningGoal;
  dailyGoalMinutes: number;
  pinyinVisibility: 'always' | 'hover' | 'hidden';
  translationVisibility: 'visible' | 'hidden';
  theme: ThemeMode;
  audioSpeed: number;
  autoPlayAudio: boolean;
  onboarded: boolean;
}

export interface Exercise {
  id: string;
  type: 'multiple-choice' | 'sentence-order' | 'fill-blank' | 'formality-pick' | 'pinyin-match';
  question: string;
  hanzi?: string;
  pinyin?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
}

export interface Lesson {
  id: string;
  unitId: number;
  unitTitle: string;
  lessonNumber: number;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  level: string;
  objectives: string[];
  grammarAndUsage: Array<{
    title: string;
    explanation: string;
    tip?: string;
  }>;
  vocabulary: Array<{
    hanzi: string;
    pinyin: string;
    english: string;
    notes?: string;
  }>;
  dialogueOrSentences: Array<{
    speaker?: string;
    hanzi: string;
    pinyin: string;
    english: string;
    context?: string;
  }>;
  culturalNote?: string;
  exercises: Exercise[];
}

export interface FormalityComparison {
  id: string;
  title: string;
  category: 'greetings' | 'requests' | 'thanking' | 'apologizing' | 'inviting' | 'disagreeing' | 'workplace' | 'texting';
  context: string;
  interlocutors: string;
  socialDistance: string;
  informal: {
    hanzi: string;
    pinyin: string;
    english: string;
    whenToUse: string;
    riskOfMisuse?: string;
  };
  polite: {
    hanzi: string;
    pinyin: string;
    english: string;
    whenToUse: string;
    note?: string;
  };
  formalOrHonorific?: {
    hanzi: string;
    pinyin: string;
    english: string;
    whenToUse: string;
  };
  whyItMatters: string;
  commonPitfall: string;
  exercise: Exercise;
}

export interface ScenarioOption {
  text: string;
  pinyin: string;
  english: string;
  nextNodeId: string;
  feedback: string;
  tone: 'natural' | 'too-casual' | 'too-formal' | 'polite';
  culturalTip?: string;
}

export interface ScenarioNode {
  id: string;
  speaker: string;
  hanzi: string;
  pinyin: string;
  english: string;
  options: ScenarioOption[];
  isEnding?: boolean;
}

export interface ConversationScenario {
  id: string;
  title: string;
  category: string;
  description: string;
  location: string;
  relationship: string;
  formalityLevel: 'Casual' | 'Polite' | 'Formal';
  objective: string;
  initialNodeId: string;
  nodes: Record<string, ScenarioNode>;
  summaryPhrases: Array<{
    hanzi: string;
    pinyin: string;
    english: string;
    note: string;
  }>;
}

export interface ReadingQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ReadingPassage {
  id: string;
  title: string;
  category: 'menu' | 'chat' | 'sign' | 'transport' | 'invitation' | 'email' | 'notice' | 'schedule' | 'story';
  difficulty: 'HSK 1' | 'HSK 2' | 'HSK 3';
  summary: string;
  chineseText: string;
  pinyinText: string;
  englishText: string;
  glossary: Array<{ hanzi: string; pinyin: string; english: string }>;
  questions: ReadingQuestion[];
}

export interface WritingCharacter {
  character: string;
  pinyin: string;
  meaning: string;
  strokeCount: number;
  strokeSteps: string[];
  radical: string;
  hskLevel: number;
  commonWords: Array<{ hanzi: string; pinyin: string; english: string }>;
  practicalSentence: { hanzi: string; pinyin: string; english: string };
}

export interface PracticalWritingTask {
  id: string;
  title: string;
  instruction: string;
  targetContext: string;
  promptChinese?: string;
  suggestedAnswers: Array<{
    hanzi: string;
    pinyin: string;
    english: string;
    style: 'casual' | 'polite';
  }>;
  keyPhrasesToUse: Array<{ hanzi: string; pinyin: string; english: string }>;
}

export interface VocabWord {
  id: string;
  hanzi: string;
  pinyin: string;
  english: string;
  partOfSpeech: string;
  hskLevel: number;
  topic: string;
  example: {
    hanzi: string;
    pinyin: string;
    english: string;
  };
  usageNote?: string;
}

export interface VocabProgressItem {
  status: 'learning' | 'review' | 'mastered';
  nextReviewDate: string; // ISO string
  intervalDays: number;
  easeFactor: number;
  repetitionCount: number;
  lastReviewed?: string;
}

export interface UserProgress {
  completedLessons: Record<string, { completedAt: string; score: number; durationSeconds?: number }>;
  completedScenarios: Record<string, { completedAt: string; choicesMade: number }>;
  completedReadings: Record<string, { completedAt: string; score: number }>;
  practicedCharacters: Record<string, { lastPracticedAt: string; count: number }>;
  completedWritingTasks: Record<string, { completedAt: string }>;
  vocabProgress: Record<string, VocabProgressItem>;
  quizHistory: Array<{
    id: string;
    title: string;
    category: string;
    date: string;
    score: number;
    total: number;
  }>;
  dailyMinutes: Record<string, number>; // "YYYY-MM-DD" -> minutes
  streak: {
    currentStreak: number;
    bestStreak: number;
    lastActiveDate: string; // "YYYY-MM-DD"
  };
}
