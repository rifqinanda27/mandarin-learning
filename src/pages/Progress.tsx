import React, { useState, useEffect } from 'react';
import {
  BarChart2,
  Flame,
  Clock,
  BookOpen,
  MessageSquare,
  FileText,
  PenTool,
  Bookmark,
  Sparkles,
  Download,
  Upload,
  RotateCcw,
  AlertTriangle,
  Calendar,
} from 'lucide-react';
import { StorageService } from '../services/storage';
import { UserProgress, UserSettings } from '../types';
import { allLessons } from '../data/curriculum';

export const Progress: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>(StorageService.getProgress());
  const [settings, setSettings] = useState<UserSettings>(StorageService.getSettings());
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  useEffect(() => {
    setProgress(StorageService.getProgress());
    setSettings(StorageService.getSettings());
  }, []);

  const handleExport = () => {
    const dataStr = StorageService.exportData();
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `everyday-mandarin-progress-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = StorageService.importData(content);
      if (success) {
        setProgress(StorageService.getProgress());
        setSettings(StorageService.getSettings());
        setImportStatus('Progress imported successfully!');
      } else {
        setImportStatus('Invalid JSON progress file.');
      }
    };
    reader.readAsText(file);
  };

  const handleReset = () => {
    StorageService.resetAll();
    setProgress(StorageService.getProgress());
    setSettings(StorageService.getSettings());
    setShowResetConfirm(false);
  };

  // Recent 7 days activity chart
  const recentDays = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const mins = progress.dailyMinutes[key] || 0;
    return { key, dayName, mins };
  });

  const maxMins = Math.max(15, ...recentDays.map((d) => d.mins));

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Title */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 dark:text-ink-50">
          Learning Analytics & History
        </h1>
        <p className="text-sm text-ink-600 dark:text-ink-300">
          100% genuine local statistics derived from real lessons, conversations, readings, and writing exercises.
        </p>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Streak */}
        <div className="p-5 rounded-3xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 shadow-sm space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-vermilion-600">
            <Flame size={14} className="fill-vermilion-600" />
            <span>Streak</span>
          </div>
          <div className="text-3xl font-extrabold text-ink-900 dark:text-ink-50">
            {progress.streak.currentStreak} <span className="text-sm font-normal text-ink-400">days</span>
          </div>
          <div className="text-[11px] text-ink-500">Best: {progress.streak.bestStreak} days</div>
        </div>

        {/* Lessons Completed */}
        <div className="p-5 rounded-3xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 shadow-sm space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-jade-600">
            <BookOpen size={14} />
            <span>Lessons</span>
          </div>
          <div className="text-3xl font-extrabold text-ink-900 dark:text-ink-50">
            {Object.keys(progress.completedLessons).length}
          </div>
          <div className="text-[11px] text-ink-500">Out of {allLessons.length} lessons</div>
        </div>

        {/* Dialogues */}
        <div className="p-5 rounded-3xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 shadow-sm space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600">
            <MessageSquare size={14} />
            <span>Dialogues</span>
          </div>
          <div className="text-3xl font-extrabold text-ink-900 dark:text-ink-50">
            {Object.keys(progress.completedScenarios).length}
          </div>
          <div className="text-[11px] text-ink-500">Scenarios mastered</div>
        </div>

        {/* Characters Practiced */}
        <div className="p-5 rounded-3xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 shadow-sm space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ink-700 dark:text-ink-300">
            <PenTool size={14} />
            <span>Characters</span>
          </div>
          <div className="text-3xl font-extrabold text-ink-900 dark:text-ink-50">
            {Object.keys(progress.practicedCharacters).length}
          </div>
          <div className="text-[11px] text-ink-500">Hanzi practiced</div>
        </div>
      </div>

      {/* 7-Day Activity Chart */}
      <section className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 sm:p-7 border border-cream-300 dark:border-ink-800 shadow-soft space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-vermilion-600" />
            <h2 className="text-base font-bold text-ink-900 dark:text-ink-50">
              Last 7 Days Activity (Minutes)
            </h2>
          </div>
          <span className="text-xs text-ink-500">Daily Goal: {settings.dailyGoalMinutes} min</span>
        </div>

        <div className="grid grid-cols-7 gap-2 items-end h-40 pt-6 pb-2">
          {recentDays.map((d) => {
            const heightPct = Math.min(100, Math.round((d.mins / maxMins) * 100));
            const isMet = d.mins >= settings.dailyGoalMinutes;

            return (
              <div key={d.key} className="flex flex-col items-center h-full justify-end gap-1.5">
                <span className="text-[10px] font-bold text-ink-500">{d.mins}m</span>
                <div className="w-full max-w-[36px] bg-cream-200 dark:bg-ink-800 rounded-t-lg h-full flex items-end overflow-hidden">
                  <div
                    style={{ height: `${heightPct}%` }}
                    className={`w-full rounded-t-lg transition-all duration-300 ${
                      isMet ? 'bg-jade-500' : d.mins > 0 ? 'bg-vermilion-600' : 'bg-transparent'
                    }`}
                  />
                </div>
                <span className="text-[11px] font-medium text-ink-600 dark:text-ink-400">
                  {d.dayName}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quiz History Table */}
      <section className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 sm:p-7 border border-cream-300 dark:border-ink-800 shadow-soft space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-vermilion-600" />
          <h2 className="text-base font-bold text-ink-900 dark:text-ink-50">Recent Quiz Results</h2>
        </div>

        {progress.quizHistory.length === 0 ? (
          <p className="text-xs text-ink-500 py-3">
            No quiz attempts recorded yet. Head over to the Quiz arena to test yourself!
          </p>
        ) : (
          <div className="divide-y divide-cream-200 dark:divide-ink-800 overflow-x-auto">
            {progress.quizHistory.slice(0, 5).map((q) => (
              <div key={q.id} className="py-3 flex items-center justify-between text-xs min-w-[300px]">
                <div>
                  <div className="font-bold text-ink-900 dark:text-ink-50">{q.title}</div>
                  <div className="text-[11px] text-ink-400">
                    {new Date(q.date).toLocaleDateString()} • {q.category}
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-extrabold text-sm text-vermilion-600">
                    {q.score} / {q.total}
                  </span>
                  <div className="text-[10px] text-ink-400">
                    {Math.round((q.score / q.total) * 100)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Data Backup & Migration Section */}
      <section className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 sm:p-7 border border-cream-300 dark:border-ink-800 shadow-soft space-y-4">
        <div className="space-y-1">
          <h2 className="text-base font-bold text-ink-900 dark:text-ink-50">Local Data Backup & Migration</h2>
          <p className="text-xs text-ink-600 dark:text-ink-300">
            Everyday Mandarin respects your privacy: 100% of your progress is stored locally in your browser storage and never uploaded to remote servers. You can export or import JSON backups at any time.
          </p>
        </div>

        {importStatus && (
          <div className="text-xs p-3 rounded-xl bg-vermilion-50 dark:bg-vermilion-950/40 text-vermilion-900 dark:text-vermilion-200 border border-vermilion-200">
            {importStatus}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            type="button"
            onClick={handleExport}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-semibold text-xs shadow-sm transition-all"
          >
            <Download size={14} />
            <span>Export Progress (JSON)</span>
          </button>

          <label className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cream-300 dark:border-ink-700 text-ink-700 dark:text-ink-300 hover:bg-cream-200/50 font-semibold text-xs cursor-pointer transition-all">
            <Upload size={14} />
            <span>Import Progress</span>
            <input type="file" accept=".json" onChange={handleImportFile} className="hidden" />
          </label>

          <button
            type="button"
            onClick={() => setShowResetConfirm(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-red-300 dark:border-red-900 text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 font-semibold text-xs ml-auto transition-all"
          >
            <RotateCcw size={14} />
            <span>Reset All Progress</span>
          </button>
        </div>

        {/* Confirmation modal */}
        {showResetConfirm && (
          <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-900 text-xs text-red-900 dark:text-red-200 space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm">
              <AlertTriangle size={16} />
              <span>Are you sure you want to erase all learning progress?</span>
            </div>
            <p>
              This will reset your completed lessons, quiz scores, flashcard spaced repetition data, and streaks. This cannot be undone unless you have an exported JSON backup.
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-1.5 rounded-lg bg-red-600 text-white font-bold text-xs"
              >
                Yes, Erase Everything
              </button>
              <button
                type="button"
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-1.5 rounded-lg border border-red-300 text-red-800 dark:text-red-300 font-medium text-xs"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
