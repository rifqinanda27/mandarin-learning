import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  Moon,
  Sun,
  Clock,
  Volume2,
  Eye,
  ShieldCheck,
  Check,
  Download,
} from 'lucide-react';
import { StorageService } from '../services/storage';
import { UserSettings, ThemeMode } from '../types';

export const Settings: React.FC = () => {
  const [settings, setSettings] = useState<UserSettings>(StorageService.getSettings());
  const [savedNotice, setSavedNotice] = useState(false);

  const update = (partial: Partial<UserSettings>) => {
    const updated = StorageService.saveSettings(partial);
    setSettings(updated);

    if (partial.theme) {
      if (partial.theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto animate-in fade-in duration-200">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 dark:text-ink-50">
            Settings & Preferences
          </h1>
          <p className="text-sm text-ink-600 dark:text-ink-300">
            Personalize your daily routine, visual presentation, and audio behavior.
          </p>
        </div>
        {savedNotice && (
          <span className="text-xs font-bold text-jade-600 dark:text-jade-400 flex items-center gap-1 bg-jade-100 dark:bg-jade-950/60 px-3 py-1 rounded-full animate-in fade-in">
            <Check size={14} /> Saved
          </span>
        )}
      </div>

      {/* Daily Learning Goal */}
      <div className="bg-cream-50 dark:bg-ink-900 p-6 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-soft space-y-4">
        <div className="flex items-center gap-2">
          <Clock size={18} className="text-vermilion-600" />
          <h2 className="font-bold text-base text-ink-900 dark:text-ink-50">Daily Learning Target</h2>
        </div>
        <p className="text-xs text-ink-600 dark:text-ink-300">
          How many minutes per day do you aim to spend practicing Mandarin?
        </p>

        <div className="grid grid-cols-4 gap-2.5">
          {[5, 10, 15, 20].map((mins) => (
            <button
              key={mins}
              type="button"
              onClick={() => update({ dailyGoalMinutes: mins })}
              className={`py-3 rounded-2xl font-bold text-sm border text-center transition-all ${
                settings.dailyGoalMinutes === mins
                  ? 'border-vermilion-600 bg-vermilion-600 text-white shadow-vermilion'
                  : 'border-cream-300 dark:border-ink-800 text-ink-700 dark:text-ink-300 hover:bg-cream-200/50'
              }`}
            >
              {mins} mins
            </button>
          ))}
        </div>
      </div>

      {/* Visual Theme */}
      <div className="bg-cream-50 dark:bg-ink-900 p-6 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-soft space-y-4">
        <h2 className="font-bold text-base text-ink-900 dark:text-ink-50">Interface Theme</h2>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => update({ theme: 'light' })}
            className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
              settings.theme === 'light'
                ? 'border-vermilion-600 bg-vermilion-50 dark:bg-vermilion-950/40 text-vermilion-900 dark:text-vermilion-100 font-bold'
                : 'border-cream-300 dark:border-ink-800 text-ink-700 dark:text-ink-300 hover:bg-cream-200/50'
            }`}
          >
            <Sun size={20} className="text-amber-500" />
            <div className="text-left text-xs">
              <div>Light Theme</div>
              <div className="text-[11px] text-ink-400 font-normal">Warm cream & dark charcoal</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => update({ theme: 'dark' })}
            className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
              settings.theme === 'dark'
                ? 'border-vermilion-600 bg-vermilion-50 dark:bg-vermilion-950/40 text-vermilion-900 dark:text-vermilion-100 font-bold'
                : 'border-cream-300 dark:border-ink-800 text-ink-700 dark:text-ink-300 hover:bg-cream-200/50'
            }`}
          >
            <Moon size={20} className="text-indigo-400" />
            <div className="text-left text-xs">
              <div>Dark Theme</div>
              <div className="text-[11px] text-ink-400 font-normal">Muted charcoal & vermilion</div>
            </div>
          </button>
        </div>
      </div>

      {/* Audio Playback & Voice Notice */}
      <div className="bg-cream-50 dark:bg-ink-900 p-6 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-soft space-y-4">
        <div className="flex items-center gap-2">
          <Volume2 size={18} className="text-vermilion-600" />
          <h2 className="font-bold text-base text-ink-900 dark:text-ink-50">Pronunciation & Audio</h2>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-ink-600 dark:text-ink-300">
            Speech Rate
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            {[0.75, 0.9, 1.1].map((speed) => (
              <button
                key={speed}
                type="button"
                onClick={() => update({ audioSpeed: speed })}
                className={`py-2 px-3 rounded-xl font-bold text-xs border text-center transition-all ${
                  settings.audioSpeed === speed
                    ? 'border-vermilion-600 bg-vermilion-600 text-white shadow-sm'
                    : 'border-cream-300 dark:border-ink-800 text-ink-700 dark:text-ink-300 hover:bg-cream-200/50'
                }`}
              >
                {speed === 0.75 ? '0.75x (Slow)' : speed === 0.9 ? '0.9x (Standard)' : '1.1x (Natural)'}
              </button>
            ))}
          </div>
        </div>

        {/* Audio Transparency Disclosure */}
        <div className="p-3.5 rounded-2xl bg-cream-100 dark:bg-ink-800 border border-cream-300 dark:border-ink-700 text-xs text-ink-600 dark:text-ink-300 space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-ink-800 dark:text-ink-200">
            <ShieldCheck size={14} className="text-jade-600" />
            <span>Speech Synthesis Disclosure</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            Everyday Mandarin utilizes your browser's local Web Speech Synthesis API (<code>zh-CN</code>) for offline pronunciation. Voice quality, timbre, and accent depend on the voices installed on your operating system (Windows, macOS, iOS, or Android). Synthetic audio is never represented as native human studio recordings.
          </p>
        </div>
      </div>
    </div>
  );
};
