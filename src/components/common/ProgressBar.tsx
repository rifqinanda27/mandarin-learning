import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
  className?: string;
  color?: 'vermilion' | 'jade' | 'amber';
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  label,
  className = '',
  color = 'vermilion',
}) => {
  const percentage = Math.min(100, Math.max(0, total > 0 ? Math.round((current / total) * 100) : 0));

  const colorStyles = {
    vermilion: 'bg-vermilion-600 dark:bg-vermilion-500',
    jade: 'bg-jade-600 dark:bg-jade-500',
    amber: 'bg-amber-500 dark:bg-amber-400',
  };

  return (
    <div className={`w-full ${className}`}>
      {(label || total > 0) && (
        <div className="flex justify-between items-center text-xs font-medium text-ink-600 dark:text-ink-400 mb-1.5">
          <span>{label}</span>
          <span>{percentage}% ({current}/{total})</span>
        </div>
      )}
      <div className="w-full bg-cream-300 dark:bg-ink-800 rounded-full h-2.5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${colorStyles[color]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
