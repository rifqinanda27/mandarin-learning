import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Clock, Moon, Sun, Download, Scale, Sparkles, Settings } from 'lucide-react';
import { StorageService } from '../../services/storage';
import { UserProgress, UserSettings } from '../../types';

interface TopHeaderProps {
  onOpenInstall?: () => void;
  canInstall?: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onOpenInstall, canInstall }) => {
  const [settings, setSettings] = useState<UserSettings>(StorageService.getSettings());
  const [progress, setProgress] = useState<UserProgress>(StorageService.getProgress());

  useEffect(() => {
    const handleStorageUpdate = () => {
      setSettings(StorageService.getSettings());
      setProgress(StorageService.getProgress());
    };
    window.addEventListener('storage', handleStorageUpdate);
    const interval = setInterval(handleStorageUpdate, 2000);
    return () => {
      window.removeEventListener('storage', handleStorageUpdate);
      clearInterval(interval);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = settings.theme === 'dark' ? 'light' : 'dark';
    const updated = StorageService.saveSettings({ theme: newTheme });
    setSettings(updated);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const todayStr = (() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  })();

  const minutesToday = progress.dailyMinutes[todayStr] || 0;
  const goalMinutes = settings.dailyGoalMinutes || 10;
  const goalProgressPct = Math.min(100, Math.round((minutesToday / goalMinutes) * 100));

  return (
    <header className="sticky top-0 bg-cream-100/90 dark:bg-ink-950/90 backdrop-blur-md border-b border-cream-300 dark:border-ink-800 z-20 px-4 py-3 flex items-center justify-between">
      {/* Left on Mobile: Logo; on Desktop: Context Page Status */}
      <div className="flex items-center gap-3">
        <div className="md:hidden flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-vermilion-600 flex items-center justify-center text-white font-hanzi font-bold text-lg shadow-sm">
            汉
          </div>
          <span className="font-bold text-sm tracking-tight text-ink-900 dark:text-ink-50">Everyday Mandarin</span>
        </div>

        {/* Mobile quick links */}
        <div className="md:hidden flex items-center gap-1.5 ml-1">
          <Link
            to="/formality"
            title="Speech & Etiquette"
            className="p-1.5 text-xs rounded-lg text-ink-600 dark:text-ink-300 hover:bg-cream-200 dark:hover:bg-ink-800"
          >
            <Scale size={16} />
          </Link>
          <Link
            to="/quiz"
            title="Quiz"
            className="p-1.5 text-xs rounded-lg text-ink-600 dark:text-ink-300 hover:bg-cream-200 dark:hover:bg-ink-800"
          >
            <Sparkles size={16} />
          </Link>
          <Link
            to="/settings"
            title="Settings"
            className="p-1.5 text-xs rounded-lg text-ink-600 dark:text-ink-300 hover:bg-cream-200 dark:hover:bg-ink-800"
          >
            <Settings size={16} />
          </Link>
        </div>
      </div>

      {/* Right Stats & Action Badges */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Streak Pill */}
        <div
          title={`Active Streak: ${progress.streak.currentStreak} day(s)`}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-vermilion-100/70 dark:bg-vermilion-950/60 text-vermilion-800 dark:text-vermilion-300 text-xs font-semibold"
        >
          <Flame size={14} className="text-vermilion-600 fill-vermilion-600" />
          <span>{progress.streak.currentStreak}d</span>
        </div>

        {/* Daily Goal Progress */}
        <Link
          to="/progress"
          title={`Today: ${minutesToday} of ${goalMinutes} min goal (${goalProgressPct}%)`}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-jade-100/70 dark:bg-jade-950/60 text-jade-800 dark:text-jade-300 text-xs font-semibold hover:opacity-90 transition-opacity"
        >
          <Clock size={13} className="text-jade-600" />
          <span>{minutesToday}/{goalMinutes}m</span>
        </Link>

        {/* Install Button (Mobile top) */}
        {onOpenInstall && (
          <button
            type="button"
            onClick={onOpenInstall}
            title={canInstall ? 'Install App' : 'Install Guide'}
            className="md:hidden p-2 rounded-xl text-ink-700 dark:text-ink-300 hover:bg-cream-200 dark:hover:bg-ink-800 transition-colors"
          >
            <Download size={18} className="text-vermilion-600" />
          </button>
        )}

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          title={`Switch to ${settings.theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          aria-label="Toggle theme"
          className="p-2 rounded-xl text-ink-600 dark:text-ink-300 hover:bg-cream-200/80 dark:hover:bg-ink-800 transition-colors"
        >
          {settings.theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
};
