import { UserProgress, UserSettings } from '../types';

const STORAGE_VERSION = 1;
const SETTINGS_KEY = 'everyday_mandarin_settings_v' + STORAGE_VERSION;
const PROGRESS_KEY = 'everyday_mandarin_progress_v' + STORAGE_VERSION;

export const DEFAULT_SETTINGS: UserSettings = {
  level: 'beginner',
  learningGoal: 'daily_convo',
  dailyGoalMinutes: 10,
  pinyinVisibility: 'always',
  translationVisibility: 'visible',
  theme: 'light',
  audioSpeed: 1.0,
  autoPlayAudio: true,
  onboarded: false,
};

export const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: {},
  completedScenarios: {},
  completedReadings: {},
  practicedCharacters: {},
  completedWritingTasks: {},
  vocabProgress: {},
  quizHistory: [],
  dailyMinutes: {},
  streak: {
    currentStreak: 0,
    bestStreak: 0,
    lastActiveDate: '',
  },
};

function getTodayString(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getYesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export class StorageService {
  static getSettings(): UserSettings {
    try {
      const data = localStorage.getItem(SETTINGS_KEY);
      if (!data) return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
      return { ...DEFAULT_SETTINGS, ...JSON.parse(data) };
    } catch {
      return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
    }
  }

  static saveSettings(settings: Partial<UserSettings>): UserSettings {
    try {
      const current = this.getSettings();
      const updated = { ...current, ...settings };
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(updated));
      return updated;
    } catch {
      return JSON.parse(JSON.stringify(DEFAULT_SETTINGS));
    }
  }

  static getProgress(): UserProgress {
    try {
      const data = localStorage.getItem(PROGRESS_KEY);
      if (!data) return JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
      const parsed = JSON.parse(data);
      return {
        completedLessons: parsed.completedLessons || {},
        completedScenarios: parsed.completedScenarios || {},
        completedReadings: parsed.completedReadings || {},
        practicedCharacters: parsed.practicedCharacters || {},
        completedWritingTasks: parsed.completedWritingTasks || {},
        vocabProgress: parsed.vocabProgress || {},
        quizHistory: parsed.quizHistory || [],
        dailyMinutes: parsed.dailyMinutes || {},
        streak: parsed.streak || { currentStreak: 0, bestStreak: 0, lastActiveDate: '' },
      };
    } catch {
      return JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
    }
  }

  static saveProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  }

  static recordActivity(minutesSpent: number = 1): UserProgress {
    const progress = this.getProgress();
    const today = getTodayString();
    const yesterday = getYesterdayString();

    // Update daily minutes
    progress.dailyMinutes[today] = (progress.dailyMinutes[today] || 0) + minutesSpent;

    // Update streak based on genuine real activity
    const lastActive = progress.streak.lastActiveDate;
    if (lastActive === today) {
      // Already active today, streak remains unchanged
    } else if (lastActive === yesterday) {
      // Active yesterday, so increment streak
      progress.streak.currentStreak += 1;
      if (progress.streak.currentStreak > progress.streak.bestStreak) {
        progress.streak.bestStreak = progress.streak.currentStreak;
      }
      progress.streak.lastActiveDate = today;
    } else {
      // Broken streak or fresh start
      progress.streak.currentStreak = 1;
      if (progress.streak.bestStreak < 1) {
        progress.streak.bestStreak = 1;
      }
      progress.streak.lastActiveDate = today;
    }

    this.saveProgress(progress);
    return progress;
  }

  static markLessonComplete(lessonId: string, score: number, durationSeconds: number = 180): UserProgress {
    const progress = this.getProgress();
    progress.completedLessons[lessonId] = {
      completedAt: new Date().toISOString(),
      score,
      durationSeconds,
    };
    this.saveProgress(progress);
    return this.recordActivity(Math.max(1, Math.round(durationSeconds / 60)));
  }

  static markScenarioComplete(scenarioId: string, choicesMade: number): UserProgress {
    const progress = this.getProgress();
    progress.completedScenarios[scenarioId] = {
      completedAt: new Date().toISOString(),
      choicesMade,
    };
    this.saveProgress(progress);
    return this.recordActivity(2);
  }

  static markReadingComplete(readingId: string, score: number): UserProgress {
    const progress = this.getProgress();
    progress.completedReadings[readingId] = {
      completedAt: new Date().toISOString(),
      score,
    };
    this.saveProgress(progress);
    return this.recordActivity(2);
  }

  static recordCharacterPractice(character: string): UserProgress {
    const progress = this.getProgress();
    const current = progress.practicedCharacters[character] || { count: 0, lastPracticedAt: '' };
    progress.practicedCharacters[character] = {
      count: current.count + 1,
      lastPracticedAt: new Date().toISOString(),
    };
    this.saveProgress(progress);
    return this.recordActivity(1);
  }

  static updateVocabSpacedRepetition(wordId: string, isKnown: boolean): UserProgress {
    const progress = this.getProgress();
    const now = new Date();
    const existing = progress.vocabProgress[wordId] || {
      status: 'learning',
      nextReviewDate: now.toISOString(),
      intervalDays: 1,
      easeFactor: 2.5,
      repetitionCount: 0,
    };

    let nextInterval = 1;
    let newRepetitions = existing.repetitionCount;
    let newEase = existing.easeFactor;
    let newStatus: 'learning' | 'review' | 'mastered' = existing.status;

    if (isKnown) {
      newRepetitions += 1;
      if (newRepetitions === 1) {
        nextInterval = 1;
      } else if (newRepetitions === 2) {
        nextInterval = 3;
      } else {
        nextInterval = Math.round(existing.intervalDays * newEase);
      }
      newEase = Math.max(1.3, newEase + 0.1);
      newStatus = newRepetitions >= 4 ? 'mastered' : 'review';
    } else {
      newRepetitions = 0;
      nextInterval = 1;
      newEase = Math.max(1.3, newEase - 0.2);
      newStatus = 'learning';
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + nextInterval);

    progress.vocabProgress[wordId] = {
      status: newStatus,
      nextReviewDate: nextDate.toISOString(),
      intervalDays: nextInterval,
      easeFactor: newEase,
      repetitionCount: newRepetitions,
      lastReviewed: now.toISOString(),
    };

    this.saveProgress(progress);
    return this.recordActivity(1);
  }

  static addQuizResult(title: string, category: string, score: number, total: number): UserProgress {
    const progress = this.getProgress();
    progress.quizHistory.unshift({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      title,
      category,
      date: new Date().toISOString(),
      score,
      total,
    });
    // Keep max 50 recent quiz records
    if (progress.quizHistory.length > 50) {
      progress.quizHistory = progress.quizHistory.slice(0, 50);
    }
    this.saveProgress(progress);
    return this.recordActivity(2);
  }

  static exportData(): string {
    const data = {
      version: STORAGE_VERSION,
      exportedAt: new Date().toISOString(),
      settings: this.getSettings(),
      progress: this.getProgress(),
    };
    return JSON.stringify(data, null, 2);
  }

  static importData(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || typeof parsed !== 'object') return false;

      if (parsed.settings) {
        this.saveSettings(parsed.settings);
      }
      if (parsed.progress) {
        this.saveProgress(parsed.progress);
      }
      return true;
    } catch (e) {
      console.error('Failed to parse imported JSON', e);
      return false;
    }
  }

  static resetAll(): void {
    localStorage.removeItem(SETTINGS_KEY);
    localStorage.removeItem(PROGRESS_KEY);
  }
}
