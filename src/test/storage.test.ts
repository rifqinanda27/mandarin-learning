import { describe, it, expect, beforeEach } from 'vitest';
import { StorageService, DEFAULT_SETTINGS, DEFAULT_PROGRESS } from '../services/storage';

describe('StorageService', () => {
  beforeEach(() => {
    StorageService.resetAll();
  });

  it('should initialize with default settings and progress', () => {
    const settings = StorageService.getSettings();
    expect(settings.dailyGoalMinutes).toBe(10);
    expect(settings.level).toBe('beginner');

    const progress = StorageService.getProgress();
    expect(progress.completedLessons).toEqual({});
    expect(progress.streak.currentStreak).toBe(0);
  });

  it('should save and update user settings', () => {
    const updated = StorageService.saveSettings({ dailyGoalMinutes: 15, theme: 'dark' });
    expect(updated.dailyGoalMinutes).toBe(15);
    expect(updated.theme).toBe('dark');

    const retrieved = StorageService.getSettings();
    expect(retrieved.dailyGoalMinutes).toBe(15);
    expect(retrieved.theme).toBe('dark');
  });

  it('should mark a lesson complete and record activity minutes', () => {
    const progress = StorageService.markLessonComplete('lesson-1', 100, 300);
    expect(progress.completedLessons['lesson-1']).toBeDefined();
    expect(progress.completedLessons['lesson-1'].score).toBe(100);
    expect(progress.streak.currentStreak).toBe(1);
    expect(progress.streak.bestStreak).toBe(1);
  });

  it('should advance spaced repetition intervals on known words', () => {
    const p1 = StorageService.updateVocabSpacedRepetition('v-1', true);
    expect(p1.vocabProgress['v-1'].repetitionCount).toBe(1);
    expect(p1.vocabProgress['v-1'].intervalDays).toBe(1);

    const p2 = StorageService.updateVocabSpacedRepetition('v-1', true);
    expect(p2.vocabProgress['v-1'].repetitionCount).toBe(2);
    expect(p2.vocabProgress['v-1'].intervalDays).toBe(3);
  });

  it('should export and import progress data correctly', () => {
    StorageService.markLessonComplete('lesson-2', 90, 600);
    StorageService.saveSettings({ dailyGoalMinutes: 20 });

    const exportedJson = StorageService.exportData();
    expect(exportedJson).toContain('lesson-2');
    expect(exportedJson).toContain('"dailyGoalMinutes": 20');

    // Reset and verify empty
    StorageService.resetAll();
    expect(StorageService.getProgress().completedLessons['lesson-2']).toBeUndefined();

    // Import back
    const success = StorageService.importData(exportedJson);
    expect(success).toBe(true);
    expect(StorageService.getProgress().completedLessons['lesson-2']).toBeDefined();
    expect(StorageService.getSettings().dailyGoalMinutes).toBe(20);
  });
});
