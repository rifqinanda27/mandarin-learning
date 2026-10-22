import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, Clock, ChevronRight, Lock } from 'lucide-react';
import { curriculumUnits } from '../data/curriculum';
import { StorageService } from '../services/storage';

export const Learn: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<number>(1);
  const progress = StorageService.getProgress();
  const completedLessonIds = Object.keys(progress.completedLessons);

  const activeUnit = curriculumUnits.find((u) => u.id === selectedUnit) || curriculumUnits[0];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Page Title */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 dark:text-ink-50">
          Curriculum & Units
        </h1>
        <p className="text-sm text-ink-600 dark:text-ink-300">
          Structured, natural progression from complete beginner fundamentals through practical intermediate communication.
        </p>
      </div>

      {/* Unit Selector Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {curriculumUnits.map((unit) => {
          const completedCount = unit.lessons.filter((l) => completedLessonIds.includes(l.id)).length;
          const isSelected = unit.id === selectedUnit;

          return (
            <button
              key={unit.id}
              type="button"
              onClick={() => setSelectedUnit(unit.id)}
              className={`shrink-0 px-4 py-3 rounded-2xl border text-left transition-all ${
                isSelected
                  ? 'border-vermilion-600 bg-vermilion-50 dark:bg-vermilion-950/50 text-vermilion-900 dark:text-vermilion-100 shadow-sm'
                  : 'border-cream-300 dark:border-ink-800 bg-cream-50 dark:bg-ink-900 text-ink-700 dark:text-ink-300 hover:bg-cream-200/50'
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-vermilion-600 dark:text-vermilion-400">
                Unit {unit.id}
              </div>
              <div className="font-bold text-sm tracking-tight whitespace-nowrap mt-0.5">
                {unit.title.split('—')[1]?.trim() || unit.title}
              </div>
              <div className="text-[11px] text-ink-500 dark:text-ink-400 mt-1">
                {completedCount} / {unit.lessons.length} done
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Unit Details Header */}
      <div className="bg-cream-50 dark:bg-ink-900 p-6 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-soft space-y-2">
        <div className="inline-block px-3 py-1 rounded-full bg-vermilion-100 dark:bg-vermilion-950/60 text-vermilion-700 dark:text-vermilion-300 text-xs font-bold uppercase tracking-wider">
          Unit {activeUnit.id}
        </div>
        <h2 className="text-2xl font-bold text-ink-900 dark:text-ink-50">{activeUnit.title}</h2>
        <p className="text-sm text-ink-600 dark:text-ink-300 max-w-2xl">{activeUnit.description}</p>
      </div>

      {/* Lesson List */}
      <div className="space-y-3">
        {activeUnit.lessons.map((lesson) => {
          const isCompleted = completedLessonIds.includes(lesson.id);

          return (
            <Link
              key={lesson.id}
              to={`/learn/${lesson.id}`}
              className="group block p-5 rounded-2xl bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 hover:border-vermilion-400 dark:hover:border-vermilion-600 transition-all shadow-sm hover:shadow-card"
            >
              <div className="flex items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 sm:mt-0 transition-colors ${
                      isCompleted
                        ? 'bg-jade-100 dark:bg-jade-950/60 text-jade-700 dark:text-jade-300'
                        : 'bg-cream-200 dark:bg-ink-800 text-ink-700 dark:text-ink-300 group-hover:bg-vermilion-100 group-hover:text-vermilion-700'
                    }`}
                  >
                    {isCompleted ? <CheckCircle size={20} className="text-jade-600" /> : lesson.lessonNumber}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-base text-ink-900 dark:text-ink-50 group-hover:text-vermilion-600 transition-colors">
                        {lesson.title}
                      </h3>
                      {isCompleted && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-jade-100 dark:bg-jade-950 text-jade-800 dark:text-jade-300">
                          Completed
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-ink-600 dark:text-ink-400 mt-1 line-clamp-1">
                      {lesson.subtitle}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-ink-500 dark:text-ink-400 mt-2">
                      <span className="flex items-center gap-1">
                        <Clock size={12} /> {lesson.estimatedMinutes} mins
                      </span>
                      <span>•</span>
                      <span>{lesson.level}</span>
                      <span>•</span>
                      <span>{lesson.vocabulary.length} words</span>
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-xs font-semibold text-vermilion-600 group-hover:translate-x-1 transition-transform shrink-0">
                  <span>{isCompleted ? 'Review' : 'Start'}</span>
                  <ChevronRight size={16} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
