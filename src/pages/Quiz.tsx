import React, { useState } from 'react';
import {
  Sparkles,
  HelpCircle,
  Check,
  X,
  RotateCcw,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizBank, QuizTopic } from '../data/quizzes';
import { StorageService } from '../services/storage';

export const Quiz: React.FC = () => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(quizBank[0].id);
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const activeTopic = quizBank.find((q) => q.id === selectedTopicId) || quizBank[0];
  const question = activeTopic.questions[currentQIndex];

  const handleSelectTopic = (id: string) => {
    setSelectedTopicId(id);
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  const handleCheckAnswer = () => {
    if (!selectedAnswer || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    const isCorrect = selectedAnswer === question.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQIndex < activeTopic.questions.length - 1) {
      setCurrentQIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      // Completed
      setIsQuizCompleted(true);
      const finalScore = score + (selectedAnswer === question.correctAnswer ? 1 : 0);
      StorageService.addQuizResult(activeTopic.title, activeTopic.category, finalScore, activeTopic.questions.length);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#b93b3b', '#15803d', '#d97706'],
        });
      } catch (e) {}
    }
  };

  const handleRestart = () => {
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in duration-200">
      {/* Page Title */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 dark:text-ink-50">
          Practice Quiz Arena
        </h1>
        <p className="text-sm text-ink-600 dark:text-ink-300">
          Reinforce your Mandarin with instant feedback, explanations, and recorded performance metrics.
        </p>
      </div>

      {/* Quiz Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {quizBank.map((q) => {
          const isSelected = q.id === activeTopic.id;
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => handleSelectTopic(q.id)}
              className={`shrink-0 px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all ${
                isSelected
                  ? 'border-vermilion-600 bg-vermilion-600 text-white shadow-vermilion'
                  : 'border-cream-300 dark:border-ink-800 bg-cream-50 dark:bg-ink-900 text-ink-700 dark:text-ink-300 hover:bg-cream-200/50'
              }`}
            >
              {q.title.split('Quiz')[0]}
            </button>
          );
        })}
      </div>

      {/* Quiz Arena Card */}
      {!isQuizCompleted ? (
        <div className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 sm:p-8 border border-cream-300 dark:border-ink-800 shadow-soft space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-cream-300 dark:border-ink-800 text-xs">
            <span className="font-bold text-ink-500 uppercase tracking-wider">
              Question {currentQIndex + 1} of {activeTopic.questions.length}
            </span>
            <span className="font-bold text-vermilion-600">
              Current Score: {score}
            </span>
          </div>

          {/* Question Text */}
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-ink-900 dark:text-ink-50 leading-snug">
              {question.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {question.options?.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              let style = 'border-cream-300 dark:border-ink-700 hover:bg-cream-200/50 dark:hover:bg-ink-800';

              if (isAnswerSubmitted) {
                if (option === question.correctAnswer) {
                  style = 'border-jade-500 bg-jade-50 dark:bg-jade-950/40 text-jade-900 dark:text-jade-100 font-semibold';
                } else if (isSelected) {
                  style = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-100';
                }
              } else if (isSelected) {
                style = 'border-vermilion-600 bg-vermilion-50 dark:bg-vermilion-950/40 text-vermilion-900 dark:text-vermilion-100 font-medium';
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isAnswerSubmitted}
                  onClick={() => setSelectedAnswer(option)}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between ${style}`}
                >
                  <span>{option}</span>
                  {isAnswerSubmitted && option === question.correctAnswer && (
                    <Check size={18} className="text-jade-600 shrink-0" />
                  )}
                  {isAnswerSubmitted && isSelected && option !== question.correctAnswer && (
                    <X size={18} className="text-red-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Navigation Actions */}
          <div className="pt-2 border-t border-cream-200 dark:border-ink-800 flex items-center justify-between">
            {!isAnswerSubmitted ? (
              <button
                type="button"
                disabled={!selectedAnswer}
                onClick={handleCheckAnswer}
                className="px-6 py-2.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 disabled:opacity-40 text-white font-semibold text-xs shadow-vermilion transition-all active:scale-95"
              >
                Submit Answer
              </button>
            ) : (
              <div className="w-full space-y-4">
                <div
                  className={`p-3.5 rounded-2xl text-xs space-y-1 ${
                    selectedAnswer === question.correctAnswer
                      ? 'bg-jade-50 dark:bg-jade-950/40 text-jade-900 dark:text-jade-200 border border-jade-200 dark:border-jade-900'
                      : 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-900'
                  }`}
                >
                  <div className="font-bold flex items-center gap-1.5">
                    {selectedAnswer === question.correctAnswer ? '✓ Correct!' : '✗ Explanation:'}
                  </div>
                  <p>{question.explanation}</p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-semibold text-xs shadow-vermilion transition-all active:scale-95"
                  >
                    <span>
                      {currentQIndex < activeTopic.questions.length - 1 ? 'Next Question' : 'View Results'}
                    </span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Quiz Completion Summary Card */
        <div className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-8 border border-cream-300 dark:border-ink-800 shadow-soft text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-jade-100 dark:bg-jade-950 text-jade-600 flex items-center justify-center">
            <CheckCircle2 size={36} />
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-ink-900 dark:text-ink-50">
              Quiz Completed!
            </h2>
            <p className="text-xs text-ink-500 dark:text-ink-400">
              {activeTopic.title} • {activeTopic.category}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-cream-100 dark:bg-ink-800 max-w-xs mx-auto">
            <div className="text-4xl font-extrabold text-vermilion-700 dark:text-vermilion-400">
              {score} / {activeTopic.questions.length}
            </div>
            <div className="text-xs text-ink-500 mt-1">
              {Math.round((score / activeTopic.questions.length) * 100)}% Accuracy
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl border border-cream-300 dark:border-ink-700 font-semibold text-xs text-ink-700 dark:text-ink-300 hover:bg-cream-200/50 flex items-center gap-1.5"
            >
              <RotateCcw size={14} />
              <span>Retry Quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
