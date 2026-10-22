import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { StorageService } from '../../services/storage';
import { LearningGoal, UserLevel } from '../../types';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({ isOpen, onClose }) => {
  const [level, setLevel] = useState<UserLevel>('beginner');
  const [goal, setGoal] = useState<LearningGoal>('daily_convo');
  const [dailyMinutes, setDailyMinutes] = useState<number>(10);

  if (!isOpen) return null;

  const handleFinish = () => {
    StorageService.saveSettings({
      level,
      learningGoal: goal,
      dailyGoalMinutes: dailyMinutes,
      onboarded: true,
    });
    onClose();
  };

  const handleSkip = () => {
    StorageService.saveSettings({
      onboarded: true,
    });
    onClose();
  };

  const levels: Array<{ id: UserLevel; title: string; desc: string }> = [
    { id: 'beginner', title: 'Complete Beginner', desc: 'New to Mandarin, starting with Pinyin, tones & greetings.' },
    { id: 'elementary', title: 'Elementary (HSK 1-2)', desc: 'Know basics, want practical daily food, travel & shopping talk.' },
    { id: 'intermediate', title: 'Intermediate (HSK 2-3)', desc: 'Expanding nuance, politeness, WeChat texting & reading.' },
  ];

  const goals: Array<{ id: LearningGoal; title: string; desc: string }> = [
    { id: 'daily_convo', title: 'Everyday Conversation', desc: 'Chat naturally with friends, order food, and express feelings.' },
    { id: 'travel', title: 'Travel & Dining in China', desc: 'Navigate the subway, order regional specialties, pay digitally.' },
    { id: 'work', title: 'Workplace & Etiquette', desc: 'Polite office communication, emails, and client meetings.' },
    { id: 'hsk', title: 'HSK 1–3 Certification', desc: 'Structured vocabulary, character recognition, and grammar rules.' },
  ];

  const minuteOptions = [5, 10, 15, 20];

  return (
    <div className="fixed inset-0 z-50 bg-ink-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-vermilion-600 to-vermilion-700 flex items-center justify-center text-white font-hanzi font-bold text-2xl shadow-vermilion">
            汉
          </div>
          <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-50">Welcome to Everyday Mandarin</h2>
          <p className="text-sm text-ink-600 dark:text-ink-400">
            Learn what to say, how to say it naturally, and why context matters — 100% offline ready.
          </p>
        </div>

        {/* Section 1: Level */}
        <div className="space-y-2.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
            What is your current Mandarin level?
          </label>
          <div className="grid grid-cols-1 gap-2">
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setLevel(lvl.id)}
                className={`p-3 rounded-2xl text-left border transition-all flex items-start justify-between ${
                  level === lvl.id
                    ? 'border-vermilion-600 bg-vermilion-50/60 dark:bg-vermilion-950/40 text-vermilion-900 dark:text-vermilion-100'
                    : 'border-cream-300 dark:border-ink-800 hover:bg-cream-200/50 dark:hover:bg-ink-800/50 text-ink-700 dark:text-ink-300'
                }`}
              >
                <div>
                  <div className="font-semibold text-sm">{lvl.title}</div>
                  <div className="text-xs text-ink-500 dark:text-ink-400 mt-0.5">{lvl.desc}</div>
                </div>
                {level === lvl.id && <Check size={18} className="text-vermilion-600 mt-1 shrink-0" />}
              </button>
            ))}
          </div>
        </div>

        {/* Section 2: Goal */}
        <div className="space-y-2.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
            What is your primary focus?
          </label>
          <div className="grid grid-cols-2 gap-2">
            {goals.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setGoal(g.id)}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  goal === g.id
                    ? 'border-vermilion-600 bg-vermilion-50/60 dark:bg-vermilion-950/40 text-vermilion-900 dark:text-vermilion-100'
                    : 'border-cream-300 dark:border-ink-800 hover:bg-cream-200/50 dark:hover:bg-ink-800/50 text-ink-700 dark:text-ink-300'
                }`}
              >
                <div className="font-semibold text-xs">{g.title}</div>
                <div className="text-[11px] text-ink-500 dark:text-ink-400 mt-0.5 line-clamp-2">{g.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Section 3: Daily Target */}
        <div className="space-y-2.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
            Daily Learning Goal
          </label>
          <div className="grid grid-cols-4 gap-2">
            {minuteOptions.map((mins) => (
              <button
                key={mins}
                type="button"
                onClick={() => setDailyMinutes(mins)}
                className={`py-2 px-3 rounded-xl font-bold text-sm border text-center transition-all ${
                  dailyMinutes === mins
                    ? 'border-vermilion-600 bg-vermilion-600 text-white shadow-vermilion'
                    : 'border-cream-300 dark:border-ink-800 text-ink-700 dark:text-ink-300 hover:bg-cream-200/50 dark:hover:bg-ink-800/50'
                }`}
              >
                {mins} min
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={handleSkip}
            className="text-xs font-medium text-ink-500 hover:text-ink-800 dark:hover:text-ink-300"
          >
            Skip for now
          </button>
          <button
            type="button"
            onClick={handleFinish}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-semibold text-sm shadow-vermilion transition-all active:scale-95"
          >
            <span>Start Learning</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
