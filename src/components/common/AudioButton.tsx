import React, { useState } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { SpeechService } from '../../services/speech';
import { StorageService } from '../../services/storage';

interface AudioButtonProps {
  text: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}

export const AudioButton: React.FC<AudioButtonProps> = ({
  text,
  size = 'md',
  className = '',
  label,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isSupported = SpeechService.isSupported();

  const handlePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isSupported || isPlaying) return;

    const settings = StorageService.getSettings();
    setIsPlaying(true);
    try {
      await SpeechService.speak(text, settings.audioSpeed || 0.9);
    } finally {
      setIsPlaying(false);
    }
  };

  const sizeClasses = {
    sm: 'p-1.5 text-xs gap-1',
    md: 'p-2 text-sm gap-1.5',
    lg: 'p-2.5 text-base gap-2',
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 22,
  };

  if (!isSupported) {
    return (
      <span
        title="Speech synthesis not supported in this browser"
        className="inline-flex items-center text-ink-300 dark:text-ink-600 cursor-not-allowed"
      >
        <VolumeX size={iconSizes[size]} />
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={handlePlay}
      disabled={isPlaying}
      title={label || `Listen to: ${text}`}
      aria-label={label || `Play audio for ${text}`}
      className={`inline-flex items-center justify-center rounded-full transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-vermilion-500/40 text-vermilion-700 dark:text-vermilion-400 hover:bg-vermilion-50 dark:hover:bg-vermilion-950/40 ${sizeClasses[size]} ${className}`}
    >
      {isPlaying ? (
        <Loader2 size={iconSizes[size]} className="animate-spin text-vermilion-600" />
      ) : (
        <Volume2 size={iconSizes[size]} />
      )}
      {label && <span className="font-medium text-xs text-ink-600 dark:text-ink-300">{label}</span>}
    </button>
  );
};
