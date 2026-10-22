import React, { useState, useMemo } from 'react';
import {
  Bookmark,
  Search,
  Filter,
  Layers,
  Sparkles,
  Volume2,
  Check,
  X,
  Shuffle,
  RotateCw,
  Clock,
  ArrowRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { vocabularyList, vocabTopics } from '../data/vocabulary';
import { StorageService } from '../services/storage';
import { AudioButton } from '../components/common/AudioButton';
import { PinyinText } from '../components/common/PinyinText';
import { VocabWord } from '../types';

export const Vocabulary: React.FC = () => {
  const [viewMode, setViewMode] = useState<'list' | 'flashcards'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState<number | 'all'>('all');

  // Flashcard state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const progress = StorageService.getProgress();

  // Filtered vocabulary
  const filteredVocab = useMemo(() => {
    return vocabularyList.filter((item) => {
      const matchesSearch =
        item.hanzi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.pinyin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.english.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTopic = selectedTopic === 'All' || item.topic === selectedTopic;
      const matchesLevel = selectedLevel === 'all' || item.hskLevel === selectedLevel;

      return matchesSearch && matchesTopic && matchesLevel;
    });
  }, [searchQuery, selectedTopic, selectedLevel]);

  // Flashcard items list
  const [deck, setDeck] = useState<VocabWord[]>(vocabularyList);

  const handleShuffle = () => {
    const shuffled = [...filteredVocab].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const currentCard = deck[currentCardIndex] || deck[0];

  const handleSpacedRepetitionAnswer = (isKnown: boolean) => {
    if (!currentCard) return;
    StorageService.updateVocabSpacedRepetition(currentCard.id, isKnown);

    if (isKnown) {
      try {
        confetti({
          particleCount: 25,
          spread: 40,
          origin: { y: 0.8 },
          colors: ['#15803d', '#22c55e'],
        });
      } catch (e) {}
    }

    setIsFlipped(false);
    if (currentCardIndex < deck.length - 1) {
      setCurrentCardIndex((prev) => prev + 1);
    } else {
      // Loop or restart
      setCurrentCardIndex(0);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Title & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 dark:text-ink-50">
            Vocabulary & Spaced Review
          </h1>
          <p className="text-sm text-ink-600 dark:text-ink-300">
            Search 155+ high-frequency words or master them through spaced repetition flashcards.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'list'
                ? 'bg-vermilion-600 text-white shadow-vermilion'
                : 'bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 text-ink-700 dark:text-ink-300'
            }`}
          >
            Library List ({vocabularyList.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setViewMode('flashcards');
              setDeck(filteredVocab.length > 0 ? filteredVocab : vocabularyList);
              setCurrentCardIndex(0);
              setIsFlipped(false);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              viewMode === 'flashcards'
                ? 'bg-vermilion-600 text-white shadow-vermilion'
                : 'bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 text-ink-700 dark:text-ink-300'
            }`}
          >
            <Layers size={14} />
            <span>Flashcards</span>
          </button>
        </div>
      </div>

      {viewMode === 'list' ? (
        <div className="space-y-6">
          {/* Search & Filter Bar */}
          <div className="bg-cream-50 dark:bg-ink-900 p-5 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-soft space-y-4">
            <div className="relative">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
              <input
                type="text"
                placeholder="Search by Chinese, pinyin, or English (e.g. 咖啡, kāfēi, coffee)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-cream-300 dark:border-ink-700 bg-white dark:bg-ink-800 text-sm text-ink-900 dark:text-ink-100 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-vermilion-500/40"
              />
            </div>

            {/* Topic Filter Pills */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
              {vocabTopics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`shrink-0 px-3 py-1.5 rounded-xl border transition-all ${
                    selectedTopic === topic
                      ? 'border-vermilion-600 bg-vermilion-50 dark:bg-vermilion-950/60 text-vermilion-700 dark:text-vermilion-300 font-bold'
                      : 'border-cream-300 dark:border-ink-800 text-ink-600 dark:text-ink-400 hover:bg-cream-200/50'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Level Selector */}
            <div className="flex items-center gap-2 text-xs font-semibold text-ink-500">
              <span>HSK Level:</span>
              <button
                type="button"
                onClick={() => setSelectedLevel('all')}
                className={`px-2.5 py-1 rounded-lg border ${selectedLevel === 'all' ? 'bg-vermilion-600 text-white border-vermilion-600' : 'border-cream-300 dark:border-ink-800'}`}
              >
                All
              </button>
              {[1, 2, 3].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-2.5 py-1 rounded-lg border ${selectedLevel === lvl ? 'bg-vermilion-600 text-white border-vermilion-600' : 'border-cream-300 dark:border-ink-800'}`}
                >
                  HSK {lvl}
                </button>
              ))}
              <span className="ml-auto text-[11px] text-ink-400">
                Showing {filteredVocab.length} words
              </span>
            </div>
          </div>

          {/* Vocabulary Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredVocab.map((item) => {
              const status = progress.vocabProgress[item.id]?.status;

              return (
                <div
                  key={item.id}
                  className="bg-cream-50 dark:bg-ink-900 p-4 rounded-2xl border border-cream-300 dark:border-ink-800 shadow-sm hover:border-vermilion-300 dark:hover:border-vermilion-700 transition-all space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-start justify-between">
                      <div className="font-hanzi text-2xl font-bold text-ink-900 dark:text-ink-50">
                        {item.hanzi}
                      </div>
                      <div className="flex items-center gap-1">
                        {status && (
                          <span
                            className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              status === 'mastered'
                                ? 'bg-jade-100 text-jade-800'
                                : status === 'review'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-cream-200 text-ink-600'
                            }`}
                          >
                            {status}
                          </span>
                        )}
                        <AudioButton text={item.hanzi} size="sm" />
                      </div>
                    </div>
                    <div className="text-xs font-sans text-vermilion-700 dark:text-vermilion-400 font-semibold">
                      {item.pinyin}
                    </div>
                    <div className="text-xs text-ink-700 dark:text-ink-300 font-medium">
                      {item.english}
                    </div>
                  </div>

                  {/* Example & Notes */}
                  <div className="pt-2 border-t border-cream-200 dark:border-ink-800 space-y-1 text-[11px]">
                    <div className="text-ink-600 dark:text-ink-400 font-hanzi">
                      {item.example.hanzi}
                    </div>
                    <div className="text-ink-400 italic">
                      "{item.example.english}"
                    </div>
                    {item.usageNote && (
                      <div className="text-vermilion-700 dark:text-vermilion-400 text-[10px] pt-0.5">
                        💡 {item.usageNote}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Flashcards Mode */
        <div className="max-w-md mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs text-ink-500 font-semibold">
            <span>
              Card {currentCardIndex + 1} of {deck.length}
            </span>
            <button
              type="button"
              onClick={handleShuffle}
              className="inline-flex items-center gap-1.5 text-ink-600 hover:text-vermilion-600"
            >
              <Shuffle size={14} />
              <span>Shuffle Deck</span>
            </button>
          </div>

          {currentCard && (
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="cursor-pointer min-h-[320px] bg-cream-50 dark:bg-ink-900 border-2 border-cream-300 dark:border-ink-800 rounded-3xl p-8 shadow-card flex flex-col items-center justify-center text-center space-y-4 hover:border-vermilion-500 transition-all select-none"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-ink-400 bg-cream-200 dark:bg-ink-800 px-2.5 py-0.5 rounded-full">
                {currentCard.topic} • HSK {currentCard.hskLevel}
              </span>

              <div className="font-hanzi text-6xl font-bold text-ink-900 dark:text-ink-50 my-2">
                {currentCard.hanzi}
              </div>

              {isFlipped ? (
                <div className="space-y-2 animate-in fade-in duration-150">
                  <div className="text-lg font-bold text-vermilion-600 dark:text-vermilion-400 font-sans">
                    {currentCard.pinyin}
                  </div>
                  <div className="text-base font-semibold text-ink-800 dark:text-ink-200">
                    {currentCard.english}
                  </div>
                  <div className="text-xs text-ink-500 dark:text-ink-400 pt-2 border-t border-cream-200 dark:border-ink-800">
                    {currentCard.example.hanzi} ({currentCard.example.english})
                  </div>
                </div>
              ) : (
                <p className="text-xs text-ink-400 flex items-center gap-1">
                  <RotateCw size={13} /> Tap card to reveal pinyin & meaning
                </p>
              )}
            </div>
          )}

          {/* Flashcard Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleSpacedRepetitionAnswer(false)}
              className="flex-1 py-3 px-4 rounded-2xl bg-amber-100 hover:bg-amber-200 dark:bg-amber-950 dark:hover:bg-amber-900 text-amber-900 dark:text-amber-200 font-bold text-xs transition-all active:scale-95 flex items-center justify-center gap-1.5"
            >
              <X size={16} />
              <span>Still Learning</span>
            </button>
            <button
              type="button"
              onClick={() => handleSpacedRepetitionAnswer(true)}
              className="flex-1 py-3 px-4 rounded-2xl bg-jade-600 hover:bg-jade-700 text-white font-bold text-xs shadow-soft transition-all active:scale-95 flex items-center justify-center gap-1.5"
            >
              <Check size={16} />
              <span>Know It!</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
