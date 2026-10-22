import React from 'react';
import { AudioButton } from './AudioButton';

interface PinyinTextProps {
  hanzi: string;
  pinyin?: string;
  english?: string;
  showPinyin?: boolean;
  showEnglish?: boolean;
  withAudio?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  align?: 'left' | 'center';
}

export const PinyinText: React.FC<PinyinTextProps> = ({
  hanzi,
  pinyin,
  english,
  showPinyin = true,
  showEnglish = true,
  withAudio = false,
  size = 'md',
  className = '',
  align = 'left',
}) => {
  const sizeConfig = {
    sm: { hanzi: 'text-base', pinyin: 'text-xs', english: 'text-xs' },
    md: { hanzi: 'text-xl', pinyin: 'text-xs', english: 'text-sm' },
    lg: { hanzi: 'text-3xl font-semibold', pinyin: 'text-sm', english: 'text-base' },
    xl: { hanzi: 'text-4xl sm:text-5xl font-bold', pinyin: 'text-base font-medium', english: 'text-lg' },
  };

  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`inline-flex flex-col ${alignClass} ${className}`}>
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          {showPinyin && pinyin && (
            <span className={`text-vermilion-700 dark:text-vermilion-400 font-sans tracking-wide leading-tight ${sizeConfig[size].pinyin}`}>
              {pinyin}
            </span>
          )}
          <span className={`font-hanzi text-ink-900 dark:text-ink-50 tracking-wider ${sizeConfig[size].hanzi}`}>
            {hanzi}
          </span>
        </div>
        {withAudio && <AudioButton text={hanzi} size={size === 'xl' ? 'lg' : size === 'lg' ? 'md' : 'sm'} />}
      </div>
      {showEnglish && english && (
        <span className={`text-ink-500 dark:text-ink-400 mt-0.5 leading-snug ${sizeConfig[size].english}`}>
          {english}
        </span>
      )}
    </div>
  );
};
