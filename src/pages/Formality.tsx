import React, { useState } from 'react';
import { Scale, Users, MapPin, AlertCircle, CheckCircle2, HelpCircle, Check, X } from 'lucide-react';
import { formalityComparisons } from '../data/formality';
import { AudioButton } from '../components/common/AudioButton';
import { PinyinText } from '../components/common/PinyinText';
import { StorageService } from '../services/storage';

export const Formality: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(formalityComparisons[0].id);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedExercises, setSubmittedExercises] = useState<Record<string, boolean>>({});

  const activeTopic = formalityComparisons.find(f => f.id === selectedTopicId) || formalityComparisons[0];

  const handleSelectOption = (exerciseId: string, option: string) => {
    if (submittedExercises[exerciseId]) return;
    setUserAnswers(prev => ({ ...prev, [exerciseId]: option }));
  };

  const handleCheckAnswer = (exerciseId: string) => {
    setSubmittedExercises(prev => ({ ...prev, [exerciseId]: true }));
    StorageService.recordActivity(1);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vermilion-100 dark:bg-vermilion-950/60 text-vermilion-700 dark:text-vermilion-300 text-xs font-bold uppercase tracking-wider">
          <Scale size={14} />
          <span>Speech & Etiquette Hub</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 dark:text-ink-50">
          Formal vs Casual Mandarin
        </h1>
        <p className="text-sm text-ink-600 dark:text-ink-300 max-w-3xl leading-relaxed">
          Master the unspoken social dimensions of Chinese communication: what to say, how to say it naturally, when to use it, and why grammatically correct sentences can sometimes feel socially awkward.
        </p>
      </div>

      {/* Topic Horizontal Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {formalityComparisons.map((topic) => {
          const isSelected = topic.id === selectedTopicId;
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => setSelectedTopicId(topic.id)}
              className={`shrink-0 px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all ${
                isSelected
                  ? 'border-vermilion-600 bg-vermilion-600 text-white shadow-vermilion'
                  : 'border-cream-300 dark:border-ink-800 bg-cream-50 dark:bg-ink-900 text-ink-700 dark:text-ink-300 hover:bg-cream-200/50'
              }`}
            >
              {topic.title.split(':')[0]}
            </button>
          );
        })}
      </div>

      {/* Main Comparison Workspace */}
      <div className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 sm:p-8 border border-cream-300 dark:border-ink-800 shadow-soft space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-vermilion-600 dark:text-vermilion-400">
            Scenario Study
          </span>
          <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-50 mt-0.5">
            {activeTopic.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-xs text-ink-500 dark:text-ink-400 mt-2">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-vermilion-600" />
              <span>{activeTopic.context}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Users size={13} className="text-jade-600" />
              <span>{activeTopic.interlocutors}</span>
            </span>
          </div>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Informal / Casual Card */}
          <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-ink-800/80 border border-amber-200 dark:border-amber-900/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-950 text-amber-900 dark:text-amber-200 font-bold text-[11px] uppercase tracking-wider">
                Casual / Everyday (熟人)
              </span>
              <AudioButton text={activeTopic.informal.hanzi} size="sm" />
            </div>

            <PinyinText
              hanzi={activeTopic.informal.hanzi}
              pinyin={activeTopic.informal.pinyin}
              english={activeTopic.informal.english}
              size="lg"
            />

            <div className="space-y-1.5 pt-2 border-t border-amber-200/60 dark:border-amber-900/40 text-xs">
              <div className="text-ink-700 dark:text-ink-300">
                <strong>When to use:</strong> {activeTopic.informal.whenToUse}
              </div>
              {activeTopic.informal.riskOfMisuse && (
                <div className="text-amber-800 dark:text-amber-300 text-[11px]">
                  ⚠️ <strong>Caution:</strong> {activeTopic.informal.riskOfMisuse}
                </div>
              )}
            </div>
          </div>

          {/* Polite / Courteous Card */}
          <div className="p-5 rounded-2xl bg-jade-50/60 dark:bg-ink-800/80 border border-jade-200 dark:border-jade-900/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-jade-200/80 dark:bg-jade-950 text-jade-900 dark:text-jade-200 font-bold text-[11px] uppercase tracking-wider">
                Polite / Courteous (礼貌)
              </span>
              <AudioButton text={activeTopic.polite.hanzi} size="sm" />
            </div>

            <PinyinText
              hanzi={activeTopic.polite.hanzi}
              pinyin={activeTopic.polite.pinyin}
              english={activeTopic.polite.english}
              size="lg"
            />

            <div className="space-y-1.5 pt-2 border-t border-jade-200/60 dark:border-jade-900/40 text-xs">
              <div className="text-ink-700 dark:text-ink-300">
                <strong>When to use:</strong> {activeTopic.polite.whenToUse}
              </div>
              {activeTopic.polite.note && (
                <div className="text-jade-800 dark:text-jade-300 text-[11px]">
                  ✨ <strong>Key Nuance:</strong> {activeTopic.polite.note}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Optional High Formal / Honorific */}
        {activeTopic.formalOrHonorific && (
          <div className="p-4 rounded-2xl bg-cream-100 dark:bg-ink-800 border border-cream-300 dark:border-ink-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-ink-500 uppercase tracking-wider text-[10px]">
                High Formal / Written (书面敬语)
              </span>
              <div className="font-hanzi font-bold text-base text-ink-900 dark:text-ink-100 mt-0.5">
                {activeTopic.formalOrHonorific.hanzi}
              </div>
              <div className="text-ink-500">{activeTopic.formalOrHonorific.pinyin} — "{activeTopic.formalOrHonorific.english}"</div>
            </div>
            <span className="text-[11px] text-ink-500 italic shrink-0">
              Reserved for: {activeTopic.formalOrHonorific.whenToUse}
            </span>
          </div>
        )}

        {/* Cultural & Linguistic Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-vermilion-50/60 dark:bg-vermilion-950/30 border border-vermilion-200 dark:border-vermilion-900 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-vermilion-800 dark:text-vermilion-300">
              <CheckCircle2 size={14} />
              <span>Why Context Matters</span>
            </div>
            <p className="text-xs text-ink-700 dark:text-ink-300 leading-relaxed">
              {activeTopic.whyItMatters}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-300">
              <AlertCircle size={14} />
              <span>Common Learner Pitfall</span>
            </div>
            <p className="text-xs text-ink-700 dark:text-ink-300 leading-relaxed">
              {activeTopic.commonPitfall}
            </p>
          </div>
        </div>

        {/* Interactive Scenario Quiz */}
        <div className="p-5 sm:p-6 rounded-2xl bg-cream-100/80 dark:bg-ink-800/60 border border-cream-300 dark:border-ink-700 space-y-4">
          <div className="flex items-center gap-2">
            <HelpCircle size={16} className="text-vermilion-600" />
            <h3 className="font-bold text-sm text-ink-900 dark:text-ink-50">
              Scenario Challenge: Apply Your Knowledge
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 font-medium">
            {activeTopic.exercise.question}
          </p>

          <div className="space-y-2">
            {activeTopic.exercise.options?.map((option, idx) => {
              const selectedAnswer = userAnswers[activeTopic.exercise.id];
              const isSubmitted = submittedExercises[activeTopic.exercise.id];
              const isOptionSelected = selectedAnswer === option;

              let style = 'border-cream-300 dark:border-ink-700 hover:bg-cream-200/50 dark:hover:bg-ink-800';
              if (isSubmitted) {
                if (option === activeTopic.exercise.correctAnswer) {
                  style = 'border-jade-500 bg-jade-50 dark:bg-jade-950/40 text-jade-900 dark:text-jade-100 font-semibold';
                } else if (isOptionSelected) {
                  style = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-100';
                }
              } else if (isOptionSelected) {
                style = 'border-vermilion-600 bg-vermilion-50 dark:bg-vermilion-950/40 text-vermilion-900 dark:text-vermilion-100 font-medium';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isSubmitted}
                  onClick={() => handleSelectOption(activeTopic.exercise.id, option)}
                  className={`w-full p-3.5 rounded-2xl text-left border text-xs sm:text-sm transition-all flex items-center justify-between ${style}`}
                >
                  <span>{option}</span>
                  {isSubmitted && option === activeTopic.exercise.correctAnswer && (
                    <Check size={16} className="text-jade-600 shrink-0" />
                  )}
                  {isSubmitted && isOptionSelected && option !== activeTopic.exercise.correctAnswer && (
                    <X size={16} className="text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {!submittedExercises[activeTopic.exercise.id] ? (
            <button
              type="button"
              disabled={!userAnswers[activeTopic.exercise.id]}
              onClick={() => handleCheckAnswer(activeTopic.exercise.id)}
              className="px-4 py-2 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 disabled:opacity-40 text-white font-semibold text-xs transition-all shadow-sm active:scale-95"
            >
              Check Answer
            </button>
          ) : (
            <div className="p-3.5 rounded-2xl bg-jade-50 dark:bg-jade-950/40 border border-jade-200 dark:border-jade-900 text-xs text-jade-900 dark:text-jade-200 space-y-1">
              <span className="font-bold">✓ Explanation:</span>
              <p>{activeTopic.exercise.explanation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
