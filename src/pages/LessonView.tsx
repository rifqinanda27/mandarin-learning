import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle,
  HelpCircle,
  Volume2,
  BookOpen,
  Check,
  X,
  Sparkles,
  ArrowRight,
  Clock,
  Compass,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { getLessonById, getNextLesson, getPreviousLesson } from '../data/curriculum';
import { StorageService } from '../services/storage';
import { AudioButton } from '../components/common/AudioButton';
import { PinyinText } from '../components/common/PinyinText';

export const LessonView: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();

  const lesson = getLessonById(lessonId || '');
  const prevLesson = lessonId ? getPreviousLesson(lessonId) : undefined;
  const nextLesson = lessonId ? getNextLesson(lessonId) : undefined;

  const [activeTab, setActiveTab] = useState<'content' | 'practice'>('content');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [submittedExercises, setSubmittedExercises] = useState<Record<string, boolean>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(() => {
    if (!lessonId) return false;
    const progress = StorageService.getProgress();
    return !!progress.completedLessons[lessonId];
  });

  if (!lesson) {
    return (
      <div className="text-center py-12 space-y-4">
        <h2 className="text-2xl font-bold">Lesson Not Found</h2>
        <Link to="/learn" className="text-vermilion-600 font-semibold hover:underline">
          Return to Curriculum
        </Link>
      </div>
    );
  }

  const handleSelectOption = (exerciseId: string, option: string) => {
    if (submittedExercises[exerciseId]) return;
    setUserAnswers((prev) => ({ ...prev, [exerciseId]: option }));
  };

  const handleCheckAnswer = (exerciseId: string) => {
    setSubmittedExercises((prev) => ({ ...prev, [exerciseId]: true }));
  };

  const handleCompleteLesson = () => {
    // Calculate score from exercises
    let correctCount = 0;
    lesson.exercises.forEach((ex) => {
      if (userAnswers[ex.id] === ex.correctAnswer) {
        correctCount += 1;
      }
    });

    const score = Math.round((correctCount / Math.max(1, lesson.exercises.length)) * 100);
    StorageService.markLessonComplete(lesson.id, score, lesson.estimatedMinutes * 60);
    setIsCompleted(true);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#b93b3b', '#d95349', '#15803d', '#d97706'],
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-in fade-in duration-200">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => navigate('/learn')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100"
        >
          <ArrowLeft size={16} />
          <span>Back to Curriculum</span>
        </button>

        <div className="flex items-center gap-2">
          {prevLesson && (
            <Link
              to={`/learn/${prevLesson.id}`}
              className="text-xs font-medium px-2.5 py-1 rounded-lg border border-cream-300 dark:border-ink-800 text-ink-600 dark:text-ink-300 hover:bg-cream-200/50"
            >
              Prev
            </Link>
          )}
          {nextLesson && (
            <Link
              to={`/learn/${nextLesson.id}`}
              className="text-xs font-medium px-2.5 py-1 rounded-lg border border-cream-300 dark:border-ink-800 text-ink-600 dark:text-ink-300 hover:bg-cream-200/50"
            >
              Next
            </Link>
          )}
        </div>
      </div>

      {/* Lesson Header Banner */}
      <div className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 sm:p-8 border border-cream-300 dark:border-ink-800 shadow-soft space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-vermilion-700 dark:text-vermilion-400 bg-vermilion-100 dark:bg-vermilion-950/60 px-2.5 py-0.5 rounded-lg">
              {lesson.unitTitle}
            </span>
            <span className="text-xs text-ink-500 dark:text-ink-400">• {lesson.level}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-ink-500 dark:text-ink-400">
            <Clock size={13} />
            <span>{lesson.estimatedMinutes} mins</span>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-ink-900 dark:text-ink-50">
            Lesson {lesson.lessonNumber}: {lesson.title}
          </h1>
          <p className="text-sm text-ink-600 dark:text-ink-300 mt-1">
            {lesson.subtitle}
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex gap-2 pt-2 border-t border-cream-300 dark:border-ink-800">
          <button
            type="button"
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'content'
                ? 'bg-vermilion-600 text-white shadow-vermilion'
                : 'text-ink-600 dark:text-ink-400 hover:bg-cream-200/50 dark:hover:bg-ink-800'
            }`}
          >
            Instruction & Dialogue
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('practice')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'practice'
                ? 'bg-vermilion-600 text-white shadow-vermilion'
                : 'text-ink-600 dark:text-ink-400 hover:bg-cream-200/50 dark:hover:bg-ink-800'
            }`}
          >
            <span>Practice Exercises</span>
            <span className="w-4 h-4 rounded-full bg-vermilion-200 dark:bg-vermilion-950 text-vermilion-800 dark:text-vermilion-300 text-[10px] flex items-center justify-center font-bold">
              {lesson.exercises.length}
            </span>
          </button>
        </div>
      </div>

      {activeTab === 'content' ? (
        <div className="space-y-6">
          {/* Objectives */}
          <section className="bg-cream-50 dark:bg-ink-900 p-6 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-sm space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
              Learning Objectives
            </h2>
            <ul className="space-y-2">
              {lesson.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink-700 dark:text-ink-300">
                  <CheckCircle size={16} className="text-jade-600 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Vocabulary Section */}
          <section className="bg-cream-50 dark:bg-ink-900 p-6 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                Core Vocabulary ({lesson.vocabulary.length})
              </h2>
              <span className="text-xs text-ink-400">Click audio to listen</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lesson.vocabulary.map((v, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-2xl bg-white dark:bg-ink-800/90 border border-cream-300 dark:border-ink-700/60 shadow-sm flex items-center justify-between gap-3"
                >
                  <PinyinText
                    hanzi={v.hanzi}
                    pinyin={v.pinyin}
                    english={v.english}
                    size="md"
                    withAudio
                  />
                  {v.notes && (
                    <span className="text-[11px] text-ink-500 dark:text-ink-400 bg-cream-200/60 dark:bg-ink-900/60 px-2 py-0.5 rounded-md shrink-0">
                      {v.notes}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Grammar & Usage Explanations */}
          <section className="bg-cream-50 dark:bg-ink-900 p-6 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-sm space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
              Grammar & Natural Usage
            </h2>
            <div className="space-y-4">
              {lesson.grammarAndUsage.map((g, i) => (
                <div key={i} className="p-4 rounded-2xl bg-cream-100/70 dark:bg-ink-800/50 border border-cream-300 dark:border-ink-700/60 space-y-2">
                  <h3 className="font-bold text-sm text-ink-900 dark:text-ink-50">{g.title}</h3>
                  <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 whitespace-pre-line leading-relaxed">
                    {g.explanation}
                  </p>
                  {g.tip && (
                    <div className="text-xs text-vermilion-800 dark:text-vermilion-300 bg-vermilion-50 dark:bg-vermilion-950/40 p-2.5 rounded-xl border border-vermilion-200 dark:border-vermilion-900 font-medium">
                      💡 Pro Tip: {g.tip}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Sentences & Dialogue Examples */}
          <section className="bg-cream-50 dark:bg-ink-900 p-6 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-sm space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
              Dialogue & Sentence Demonstration
            </h2>
            <div className="space-y-3">
              {lesson.dialogueOrSentences.map((sent, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white dark:bg-ink-800/90 border border-cream-300 dark:border-ink-700/60 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-vermilion-700 dark:text-vermilion-400">
                      {sent.speaker || 'Example'}
                    </span>
                    <AudioButton text={sent.hanzi} size="sm" />
                  </div>
                  <PinyinText
                    hanzi={sent.hanzi}
                    pinyin={sent.pinyin}
                    english={sent.english}
                    size="md"
                  />
                  {sent.context && (
                    <p className="text-[11px] text-ink-500 dark:text-ink-400 italic pt-1 border-t border-cream-200 dark:border-ink-800">
                      Context: {sent.context}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Cultural Note */}
          {lesson.culturalNote && (
            <section className="bg-gradient-to-br from-amber-50 to-cream-100 dark:from-ink-900 dark:to-ink-950 p-6 rounded-3xl border border-amber-200/60 dark:border-ink-800 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                <Compass size={14} />
                <span>Cultural Insight</span>
              </div>
              <p className="text-xs sm:text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                {lesson.culturalNote}
              </p>
            </section>
          )}

          {/* Quick jump to practice */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setActiveTab('practice')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-semibold text-sm shadow-vermilion transition-all active:scale-95"
            >
              <span>Proceed to Practice Exercises ({lesson.exercises.length})</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ) : (
        /* Practice Exercises Tab */
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 text-xs text-ink-600 dark:text-ink-300 flex items-center justify-between">
            <span>Answer the questions below to test your recall and understanding.</span>
            <span className="font-bold text-vermilion-600">
              {Object.keys(submittedExercises).length} / {lesson.exercises.length} answered
            </span>
          </div>

          <div className="space-y-5">
            {lesson.exercises.map((ex, index) => {
              const selectedAnswer = userAnswers[ex.id];
              const isSubmitted = submittedExercises[ex.id];
              const isCorrect = selectedAnswer === ex.correctAnswer;

              return (
                <div
                  key={ex.id}
                  className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 border border-cream-300 dark:border-ink-800 shadow-soft space-y-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="w-6 h-6 rounded-full bg-vermilion-100 dark:bg-vermilion-950 text-vermilion-700 dark:text-vermilion-400 font-bold text-xs flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-bold text-sm sm:text-base text-ink-900 dark:text-ink-50">
                        {ex.question}
                      </h3>
                      {ex.hanzi && (
                        <div className="mt-2">
                          <PinyinText hanzi={ex.hanzi} pinyin={ex.pinyin} size="md" withAudio />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Options */}
                  {ex.options && (
                    <div className="space-y-2 pt-1">
                      {ex.options.map((option, optIdx) => {
                        const isOptionSelected = selectedAnswer === option;
                        let optionStyle = 'border-cream-300 dark:border-ink-800 hover:bg-cream-200/50 dark:hover:bg-ink-800/50';

                        if (isSubmitted) {
                          if (option === ex.correctAnswer) {
                            optionStyle = 'border-jade-500 bg-jade-50 dark:bg-jade-950/40 text-jade-900 dark:text-jade-100 font-semibold';
                          } else if (isOptionSelected) {
                            optionStyle = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-100';
                          }
                        } else if (isOptionSelected) {
                          optionStyle = 'border-vermilion-600 bg-vermilion-50 dark:bg-vermilion-950/40 text-vermilion-900 dark:text-vermilion-100 font-medium';
                        }

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            disabled={isSubmitted}
                            onClick={() => handleSelectOption(ex.id, option)}
                            className={`w-full p-3.5 rounded-2xl text-left border text-xs sm:text-sm transition-all flex items-center justify-between ${optionStyle}`}
                          >
                            <span>{option}</span>
                            {isSubmitted && option === ex.correctAnswer && (
                              <Check size={16} className="text-jade-600 shrink-0" />
                            )}
                            {isSubmitted && isOptionSelected && option !== ex.correctAnswer && (
                              <X size={16} className="text-red-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Action / Check Answer */}
                  {!isSubmitted ? (
                    <button
                      type="button"
                      disabled={!selectedAnswer}
                      onClick={() => handleCheckAnswer(ex.id)}
                      className="px-4 py-2 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 disabled:opacity-40 text-white font-semibold text-xs transition-all shadow-sm active:scale-95"
                    >
                      Check Answer
                    </button>
                  ) : (
                    <div className={`p-3 rounded-2xl text-xs space-y-1 ${isCorrect ? 'bg-jade-50 dark:bg-jade-950/40 text-jade-900 dark:text-jade-200 border border-jade-200 dark:border-jade-900' : 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-900'}`}>
                      <div className="font-bold flex items-center gap-1.5">
                        {isCorrect ? '✓ Correct!' : '✗ Not quite.'}
                      </div>
                      <p>{ex.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Completion Button */}
          <div className="bg-cream-50 dark:bg-ink-900 p-6 rounded-3xl border border-cream-300 dark:border-ink-800 text-center space-y-3">
            <h3 className="font-bold text-base text-ink-900 dark:text-ink-50">
              {isCompleted ? 'Lesson Completed! 🎉' : 'Ready to wrap up?'}
            </h3>
            <p className="text-xs text-ink-600 dark:text-ink-400 max-w-md mx-auto">
              Marking this lesson complete updates your streak, saves learning minutes, and unlocks your next milestone.
            </p>

            <button
              type="button"
              onClick={handleCompleteLesson}
              className={`inline-flex items-center gap-2 py-3 px-6 rounded-2xl text-white font-semibold text-sm transition-all shadow-vermilion active:scale-95 ${
                isCompleted ? 'bg-jade-600 hover:bg-jade-700' : 'bg-vermilion-600 hover:bg-vermilion-700'
              }`}
            >
              <CheckCircle size={18} />
              <span>{isCompleted ? 'Update Completion Score' : 'Complete Lesson'}</span>
            </button>

            {nextLesson && (
              <div className="pt-2">
                <Link
                  to={`/learn/${nextLesson.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-vermilion-600 hover:underline"
                >
                  <span>Continue to Lesson {nextLesson.lessonNumber}: {nextLesson.title}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
