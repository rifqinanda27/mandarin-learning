import React, { useState } from 'react';
import {
  FileText,
  Eye,
  EyeOff,
  CheckCircle2,
  Check,
  X,
  BookOpen,
  Volume2,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { readingPassages } from '../data/readings';
import { StorageService } from '../services/storage';
import { AudioButton } from '../components/common/AudioButton';

export const Reading: React.FC = () => {
  const [selectedPassageId, setSelectedPassageId] = useState<string>(readingPassages[0].id);
  const [showPinyin, setShowPinyin] = useState<boolean>(false);
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});

  const progress = StorageService.getProgress();
  const completedReadings = progress.completedReadings;

  const passage = readingPassages.find((p) => p.id === selectedPassageId) || readingPassages[0];

  const handleSelectOption = (qIdx: number, optIdx: number) => {
    const key = `${passage.id}-${qIdx}`;
    if (submittedQuestions[key]) return;
    setUserAnswers((prev) => ({ ...prev, [key]: optIdx }));
  };

  const handleCheckQuestion = (qIdx: number) => {
    const key = `${passage.id}-${qIdx}`;
    setSubmittedQuestions((prev) => ({ ...prev, [key]: true }));

    // Check if all questions for this passage are submitted
    const allAnswered = passage.questions.every((_, idx) => {
      const k = `${passage.id}-${idx}`;
      return idx === qIdx || submittedQuestions[k];
    });

    if (allAnswered) {
      // Calculate score
      let correct = 0;
      passage.questions.forEach((q, idx) => {
        const k = `${passage.id}-${idx}`;
        const selected = idx === qIdx ? userAnswers[key] : userAnswers[k];
        if (selected === q.correctIndex) correct += 1;
      });
      const score = Math.round((correct / passage.questions.length) * 100);
      StorageService.markReadingComplete(passage.id, score);

      try {
        confetti({
          particleCount: 60,
          spread: 50,
          origin: { y: 0.7 },
          colors: ['#b93b3b', '#15803d', '#d97706'],
        });
      } catch (e) {}
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Title */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 dark:text-ink-50">
          Real-Life Reading Practice
        </h1>
        <p className="text-sm text-ink-600 dark:text-ink-300">
          Menus, public transit advisories, WeChat messages, and everyday bulletins. Attempt the Chinese characters first, then toggle pinyin or English when needed.
        </p>
      </div>

      {/* Horizontal Passage Selector */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {readingPassages.map((p) => {
          const isSelected = p.id === passage.id;
          const isDone = !!completedReadings[p.id];

          return (
            <button
              key={p.id}
              type="button"
              onClick={() => {
                setSelectedPassageId(p.id);
                setUserAnswers({});
                setSubmittedQuestions({});
              }}
              className={`shrink-0 px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all flex items-center gap-2 ${
                isSelected
                  ? 'border-vermilion-600 bg-vermilion-600 text-white shadow-vermilion'
                  : 'border-cream-300 dark:border-ink-800 bg-cream-50 dark:bg-ink-900 text-ink-700 dark:text-ink-300 hover:bg-cream-200/50'
              }`}
            >
              <span>{p.title.split(':')[0]}</span>
              {isDone && <CheckCircle2 size={14} className={isSelected ? 'text-white' : 'text-jade-600'} />}
            </button>
          );
        })}
      </div>

      {/* Passage Card */}
      <div className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 sm:p-8 border border-cream-300 dark:border-ink-800 shadow-soft space-y-6">
        {/* Header with Toggles */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-cream-300 dark:border-ink-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-vermilion-100 dark:bg-vermilion-950/60 text-vermilion-700 dark:text-vermilion-300 text-xs font-bold uppercase">
                {passage.difficulty}
              </span>
              <span className="text-xs text-ink-500 capitalize">• {passage.category}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-ink-900 dark:text-ink-50 mt-1">
              {passage.title}
            </h2>
            <p className="text-xs text-ink-500 mt-0.5">{passage.summary}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <AudioButton text={passage.chineseText} label="Listen All" size="sm" />
            <button
              type="button"
              onClick={() => setShowPinyin(!showPinyin)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                showPinyin
                  ? 'bg-vermilion-50 dark:bg-vermilion-950/60 border-vermilion-500 text-vermilion-700 dark:text-vermilion-300'
                  : 'border-cream-300 dark:border-ink-800 text-ink-600 dark:text-ink-400 hover:bg-cream-200/50'
              }`}
            >
              {showPinyin ? 'Hide Pinyin' : 'Show Pinyin'}
            </button>
            <button
              type="button"
              onClick={() => setShowTranslation(!showTranslation)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                showTranslation
                  ? 'bg-vermilion-50 dark:bg-vermilion-950/60 border-vermilion-500 text-vermilion-700 dark:text-vermilion-300'
                  : 'border-cream-300 dark:border-ink-800 text-ink-600 dark:text-ink-400 hover:bg-cream-200/50'
              }`}
            >
              {showTranslation ? 'Hide English' : 'Show English'}
            </button>
          </div>
        </div>

        {/* Chinese Text Body */}
        <div className="p-6 rounded-2xl bg-white dark:bg-ink-800/90 border border-cream-300 dark:border-ink-700/80 shadow-sm space-y-4">
          <div className="font-hanzi text-lg sm:text-xl font-normal text-ink-900 dark:text-ink-50 tracking-wider leading-relaxed whitespace-pre-line">
            {passage.chineseText}
          </div>

          {showPinyin && (
            <div className="pt-3 border-t border-cream-200 dark:border-ink-700 text-xs sm:text-sm text-vermilion-700 dark:text-vermilion-400 font-sans tracking-wide leading-relaxed whitespace-pre-line">
              {passage.pinyinText}
            </div>
          )}

          {showTranslation && (
            <div className="pt-3 border-t border-cream-200 dark:border-ink-700 text-xs sm:text-sm text-ink-600 dark:text-ink-300 leading-relaxed whitespace-pre-line">
              {passage.englishText}
            </div>
          )}
        </div>

        {/* Vocabulary Glossary */}
        <div className="space-y-2.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
            Key Vocabulary in this passage
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {passage.glossary.map((g, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-cream-100/80 dark:bg-ink-800/60 border border-cream-300 dark:border-ink-700 text-xs space-y-0.5"
              >
                <div className="font-hanzi font-bold text-sm text-ink-900 dark:text-ink-50 flex items-center justify-between">
                  <span>{g.hanzi}</span>
                  <AudioButton text={g.hanzi} size="sm" />
                </div>
                <div className="text-vermilion-600 dark:text-vermilion-400 text-[11px] font-sans">{g.pinyin}</div>
                <div className="text-ink-500 dark:text-ink-400 text-[11px]">{g.english}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Comprehension Questions */}
        <div className="space-y-4 pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
            Comprehension Questions ({passage.questions.length})
          </h3>

          <div className="space-y-4">
            {passage.questions.map((q, qIdx) => {
              const key = `${passage.id}-${qIdx}`;
              const selectedOpt = userAnswers[key];
              const isSubmitted = submittedQuestions[key];
              const isCorrect = selectedOpt === q.correctIndex;

              return (
                <div
                  key={qIdx}
                  className="p-5 rounded-2xl bg-cream-100/60 dark:bg-ink-800/50 border border-cream-300 dark:border-ink-700 space-y-3"
                >
                  <div className="font-bold text-sm text-ink-900 dark:text-ink-50">
                    {qIdx + 1}. {q.question}
                  </div>

                  <div className="space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      let style = 'border-cream-300 dark:border-ink-700 hover:bg-cream-200/50 dark:hover:bg-ink-800';
                      if (isSubmitted) {
                        if (optIdx === q.correctIndex) {
                          style = 'border-jade-500 bg-jade-50 dark:bg-jade-950/40 text-jade-900 dark:text-jade-100 font-semibold';
                        } else if (isSelected) {
                          style = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-100';
                        }
                      } else if (isSelected) {
                        style = 'border-vermilion-600 bg-vermilion-50 dark:bg-vermilion-950/40 text-vermilion-900 dark:text-vermilion-100 font-medium';
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          disabled={isSubmitted}
                          onClick={() => handleSelectOption(qIdx, optIdx)}
                          className={`w-full p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${style}`}
                        >
                          <span>{opt}</span>
                          {isSubmitted && optIdx === q.correctIndex && (
                            <Check size={16} className="text-jade-600 shrink-0" />
                          )}
                          {isSubmitted && isSelected && optIdx !== q.correctIndex && (
                            <X size={16} className="text-red-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {!isSubmitted ? (
                    <button
                      type="button"
                      disabled={selectedOpt === undefined}
                      onClick={() => handleCheckQuestion(qIdx)}
                      className="px-4 py-2 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 disabled:opacity-40 text-white font-semibold text-xs shadow-sm transition-all"
                    >
                      Check Answer
                    </button>
                  ) : (
                    <div className="text-xs p-3 rounded-xl bg-jade-50 dark:bg-jade-950/40 border border-jade-200 dark:border-jade-900 text-jade-900 dark:text-jade-200">
                      <span className="font-bold">{isCorrect ? '✓ Correct!' : '✗ Not quite.'}</span> {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
