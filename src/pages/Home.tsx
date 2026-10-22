import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  MessageSquare,
  Scale,
  Sparkles,
  ArrowRight,
  Flame,
  Clock,
  Bookmark,
  CheckCircle2,
  Calendar,
  Compass,
} from 'lucide-react';
import { StorageService } from '../services/storage';
import { UserProgress, UserSettings } from '../types';
import { allLessons } from '../data/curriculum';
import { AudioButton } from '../components/common/AudioButton';
import { PinyinText } from '../components/common/PinyinText';
import { vocabularyList } from '../data/vocabulary';

export const Home: React.FC = () => {
  const [settings, setSettings] = useState<UserSettings>(StorageService.getSettings());
  const [progress, setProgress] = useState<UserProgress>(StorageService.getProgress());

  useEffect(() => {
    setSettings(StorageService.getSettings());
    setProgress(StorageService.getProgress());
  }, []);

  // Time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { zh: '早上好！', en: 'Good morning!', desc: 'Start your day with a standard morning review.' };
    if (hour < 18) return { zh: '下午好！', en: 'Good afternoon!', desc: 'Keep your momentum going with conversational practice.' };
    return { zh: '晚上好！', en: 'Good evening!', desc: 'Relax and consolidate what you learned today.' };
  };

  const greeting = getGreeting();

  // Next recommended lesson
  const completedLessonIds = Object.keys(progress.completedLessons);
  const nextLesson = allLessons.find(l => !completedLessonIds.includes(l.id)) || allLessons[0];
  const lastCompletedLessonId = completedLessonIds[completedLessonIds.length - 1];
  const lastLesson = allLessons.find(l => l.id === lastCompletedLessonId);

  // Daily goal calculation
  const todayStr = (() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  })();

  const minutesToday = progress.dailyMinutes[todayStr] || 0;
  const goalMinutes = settings.dailyGoalMinutes || 10;
  const goalCompleted = minutesToday >= goalMinutes;
  const goalPercentage = Math.min(100, Math.round((minutesToday / goalMinutes) * 100));

  // Spaced repetition review queue count
  const now = new Date().toISOString();
  const vocabDueCount = Object.entries(progress.vocabProgress).filter(([_, item]) => item.nextReviewDate <= now).length;

  // Daily featured phrase
  const dailyPhrase = {
    hanzi: '学而时习之，不亦说乎？',
    pinyin: 'Xué ér shí xí zhī, bú yì yuè hū?',
    english: 'Is it not a pleasure to learn and constantly practice what one has learned?',
    note: 'From the Analects of Confucius (论语). In modern daily Mandarin, regular small reviews yield lasting fluency.',
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Hero Greeting & Daily Ring */}
      <section className="bg-gradient-to-br from-cream-50 to-cream-200/50 dark:from-ink-900 dark:to-ink-950 p-6 sm:p-8 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vermilion-100 dark:bg-vermilion-950/60 text-vermilion-800 dark:text-vermilion-300 text-xs font-semibold">
            <Flame size={14} className="fill-vermilion-600 text-vermilion-600" />
            <span>{progress.streak.currentStreak} Day Learning Streak</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900 dark:text-ink-50">
            {greeting.zh} <span className="text-lg font-normal text-ink-500 dark:text-ink-400">({greeting.en})</span>
          </h1>
          <p className="text-sm text-ink-600 dark:text-ink-300">
            {greeting.desc} Target level: <strong className="capitalize">{settings.level}</strong>.
          </p>
        </div>

        {/* Daily Goal Card */}
        <div className="w-full md:w-auto bg-white/80 dark:bg-ink-800/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-cream-300 dark:border-ink-700/60 shadow-soft flex items-center gap-4">
          <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-cream-300 dark:text-ink-700"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className={`${goalCompleted ? 'text-jade-500' : 'text-vermilion-600'} transition-all duration-500`}
                strokeDasharray={`${goalPercentage}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-xs font-bold text-ink-900 dark:text-ink-50">{goalPercentage}%</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
              <Clock size={13} />
              <span>Daily Goal</span>
            </div>
            <div className="text-lg font-bold text-ink-900 dark:text-ink-100">
              {minutesToday} / {goalMinutes} min
            </div>
            <p className="text-[11px] text-ink-500 dark:text-ink-400">
              {goalCompleted ? 'Goal achieved today! 🎉' : `${goalMinutes - minutesToday} min remaining today`}
            </p>
          </div>
        </div>
      </section>

      {/* Main Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recommended Next Lesson Card */}
        <div className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 border border-cream-300 dark:border-ink-800 shadow-soft flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-vermilion-700 dark:text-vermilion-400 bg-vermilion-100 dark:bg-vermilion-950/60 px-2.5 py-1 rounded-lg">
                Recommended Lesson
              </span>
              <span className="text-xs text-ink-500 dark:text-ink-400">{nextLesson.estimatedMinutes} mins</span>
            </div>
            <div>
              <div className="text-xs text-ink-500 dark:text-ink-400 mb-0.5">{nextLesson.unitTitle}</div>
              <h3 className="text-xl font-bold text-ink-900 dark:text-ink-50">
                Lesson {nextLesson.lessonNumber}: {nextLesson.title}
              </h3>
              <p className="text-xs text-ink-600 dark:text-ink-300 mt-1 line-clamp-2">
                {nextLesson.subtitle}
              </p>
            </div>
          </div>
          <Link
            to={`/learn/${nextLesson.id}`}
            className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-semibold text-sm shadow-vermilion transition-all active:scale-95"
          >
            <span>{completedLessonIds.includes(nextLesson.id) ? 'Review Lesson' : 'Start Lesson'}</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Quick Conversation Practice Card */}
        <div className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 border border-cream-300 dark:border-ink-800 shadow-soft flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-jade-700 dark:text-jade-400 bg-jade-100 dark:bg-jade-950/60 px-2.5 py-1 rounded-lg">
                Interactive Dialogue
              </span>
              <span className="text-xs text-ink-500 dark:text-ink-400">Branching Scenario</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-ink-900 dark:text-ink-50">
                Meeting a New Friend at a Café
              </h3>
              <p className="text-xs text-ink-600 dark:text-ink-300 mt-1">
                Practice casual icebreakers, discussing language learning, and exchanging WeChat contacts naturally.
              </p>
            </div>
          </div>
          <Link
            to="/conversation/convo-1"
            className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-jade-600 hover:bg-jade-700 text-white font-semibold text-sm shadow-soft transition-all active:scale-95"
          >
            <MessageSquare size={16} />
            <span>Practice Dialogue</span>
          </Link>
        </div>
      </div>

      {/* Spaced Review & Etiquette Quick Hub */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Vocab Queue */}
        <Link
          to="/vocabulary"
          className="p-5 rounded-2xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 shadow-sm hover:border-vermilion-400 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 flex items-center justify-center">
              <Bookmark size={20} />
            </div>
            <div>
              <div className="font-bold text-sm text-ink-900 dark:text-ink-50">Vocabulary Review</div>
              <div className="text-xs text-ink-500 dark:text-ink-400">
                {vocabDueCount > 0 ? `${vocabDueCount} due for review` : 'All caught up!'}
              </div>
            </div>
          </div>
          <ArrowRight size={16} className="text-ink-400 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Speech & Etiquette */}
        <Link
          to="/formality"
          className="p-5 rounded-2xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 shadow-sm hover:border-vermilion-400 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-vermilion-100 dark:bg-vermilion-950/60 text-vermilion-700 dark:text-vermilion-300 flex items-center justify-center">
              <Scale size={20} />
            </div>
            <div>
              <div className="font-bold text-sm text-ink-900 dark:text-ink-50">Speech & Etiquette</div>
              <div className="text-xs text-ink-500 dark:text-ink-400">Casual vs Polite Forms</div>
            </div>
          </div>
          <ArrowRight size={16} className="text-ink-400 group-hover:translate-x-1 transition-transform" />
        </Link>

        {/* Practical Reading */}
        <Link
          to="/reading"
          className="p-5 rounded-2xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 shadow-sm hover:border-vermilion-400 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-jade-100 dark:bg-jade-950/60 text-jade-700 dark:text-jade-300 flex items-center justify-center">
              <Compass size={20} />
            </div>
            <div>
              <div className="font-bold text-sm text-ink-900 dark:text-ink-50">Real-Life Reading</div>
              <div className="text-xs text-ink-500 dark:text-ink-400">Menus, chats, signs</div>
            </div>
          </div>
          <ArrowRight size={16} className="text-ink-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Daily Cultural / Idiomatic Phrase */}
      <section className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 sm:p-7 border border-cream-300 dark:border-ink-800 shadow-soft space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
            Daily Wisdom & Phrase
          </span>
          <AudioButton text={dailyPhrase.hanzi} size="sm" label="Listen" />
        </div>
        <div className="space-y-1">
          <div className="font-hanzi text-2xl font-bold text-ink-900 dark:text-ink-50 tracking-wider">
            {dailyPhrase.hanzi}
          </div>
          <div className="text-sm font-sans text-vermilion-700 dark:text-vermilion-400 font-medium">
            {dailyPhrase.pinyin}
          </div>
          <p className="text-sm text-ink-700 dark:text-ink-300 pt-1">
            "{dailyPhrase.english}"
          </p>
        </div>
        <div className="text-xs text-ink-500 dark:text-ink-400 border-t border-cream-300 dark:border-ink-800 pt-3">
          💡 {dailyPhrase.note}
        </div>
      </section>

      {/* Recent Genuine Progress Status */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-ink-900 dark:text-ink-50">Your Learning Snapshot</h2>
          <Link to="/progress" className="text-xs font-semibold text-vermilion-600 hover:underline">
            View Full Stats
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-4 rounded-2xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800">
            <div className="text-2xl font-extrabold text-vermilion-700 dark:text-vermilion-400">
              {completedLessonIds.length} / {allLessons.length}
            </div>
            <div className="text-xs text-ink-500 dark:text-ink-400 mt-1">Lessons Completed</div>
          </div>
          <div className="p-4 rounded-2xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800">
            <div className="text-2xl font-extrabold text-jade-600 dark:text-jade-400">
              {Object.keys(progress.completedScenarios).length}
            </div>
            <div className="text-xs text-ink-500 dark:text-ink-400 mt-1">Dialogues Mastered</div>
          </div>
          <div className="p-4 rounded-2xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800">
            <div className="text-2xl font-extrabold text-amberGold-500">
              {Object.keys(progress.practicedCharacters).length}
            </div>
            <div className="text-xs text-ink-500 dark:text-ink-400 mt-1">Characters Written</div>
          </div>
          <div className="p-4 rounded-2xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800">
            <div className="text-2xl font-extrabold text-ink-800 dark:text-ink-200">
              {Object.keys(progress.vocabProgress).length}
            </div>
            <div className="text-xs text-ink-500 dark:text-ink-400 mt-1">Words in Queue</div>
          </div>
        </div>
      </section>
    </div>
  );
};
