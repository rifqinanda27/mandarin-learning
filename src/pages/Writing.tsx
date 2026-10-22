import React, { useRef, useState, useEffect } from 'react';
import {
  PenTool,
  RotateCcw,
  Eye,
  EyeOff,
  CheckCircle2,
  Trash2,
  Undo2,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { writingCharacters, practicalWritingTasks } from '../data/writing';
import { StorageService } from '../services/storage';
import { AudioButton } from '../components/common/AudioButton';
import { PinyinText } from '../components/common/PinyinText';

export const Writing: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<string>(writingCharacters[0].character);
  const [activeTab, setActiveTab] = useState<'strokes' | 'tasks'>('strokes');
  const [showReference, setShowReference] = useState<boolean>(true);
  const [strokeColor, setStrokeColor] = useState<string>('#1c222b');

  // Canvas drawing state
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [history, setHistory] = useState<ImageData[]>([]);

  const charData = writingCharacters.find((c) => c.character === selectedChar) || writingCharacters[0];
  const progress = StorageService.getProgress();

  // Setup canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear and set default line style
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 14;
    ctx.strokeStyle = strokeColor;
  }, [selectedChar, strokeColor]);

  const saveCanvasState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistory((prev) => [...prev, data]);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    saveCanvasState();
    setIsDrawing(true);

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const y = 'touches' in e ? e.touches[0].clientY - rect.top : e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHistory([]);
  };

  const handleUndo = () => {
    const canvas = canvasRef.current;
    if (!canvas || history.length === 0) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prevHistory = [...history];
    const previousState = prevHistory.pop();
    setHistory(prevHistory);

    if (previousState) {
      ctx.putImageData(previousState, 0, 0);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const handleCompletePractice = () => {
    StorageService.recordCharacterPractice(charData.character);
    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#b93b3b', '#15803d', '#d97706'],
      });
    } catch (e) {}
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Page Header */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 dark:text-ink-50">
          Writing & Character Mastery
        </h1>
        <p className="text-sm text-ink-600 dark:text-ink-300">
          Learn the building blocks of Chinese characters: stroke order, component radicals, interactive canvas practice, and real messaging tasks.
        </p>
      </div>

      {/* Mode Toggle Tabs */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('strokes')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'strokes'
              ? 'bg-vermilion-600 text-white shadow-vermilion'
              : 'bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 text-ink-700 dark:text-ink-300'
          }`}
        >
          Character Canvas ({writingCharacters.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('tasks')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'tasks'
              ? 'bg-vermilion-600 text-white shadow-vermilion'
              : 'bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 text-ink-700 dark:text-ink-300'
          }`}
        >
          Practical Writing Tasks ({practicalWritingTasks.length})
        </button>
      </div>

      {activeTab === 'strokes' ? (
        <div className="space-y-6">
          {/* Character Selector Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {writingCharacters.map((c) => {
              const isSelected = c.character === selectedChar;
              const count = progress.practicedCharacters[c.character]?.count || 0;

              return (
                <button
                  key={c.character}
                  type="button"
                  onClick={() => {
                    setSelectedChar(c.character);
                    handleClear();
                  }}
                  className={`shrink-0 w-12 h-14 rounded-2xl border text-center transition-all flex flex-col items-center justify-center ${
                    isSelected
                      ? 'border-vermilion-600 bg-vermilion-600 text-white shadow-vermilion'
                      : 'border-cream-300 dark:border-ink-800 bg-cream-50 dark:bg-ink-900 text-ink-800 dark:text-ink-200 hover:bg-cream-200/50'
                  }`}
                >
                  <span className="font-hanzi font-bold text-xl leading-none">{c.character}</span>
                  <span className={`text-[10px] mt-0.5 ${isSelected ? 'text-vermilion-100' : 'text-ink-400'}`}>
                    {c.pinyin}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Writing Canvas & Details Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Canvas Column */}
            <div className="lg:col-span-6 bg-cream-50 dark:bg-ink-900 p-6 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-soft flex flex-col items-center justify-between space-y-4">
              <div className="w-full flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-500">
                  Stroke Practice (米字格)
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setShowReference(!showReference)}
                    title={showReference ? 'Hide Ghost Guide' : 'Show Ghost Guide'}
                    className={`p-1.5 rounded-lg border text-xs font-semibold flex items-center gap-1 ${
                      showReference
                        ? 'bg-vermilion-50 dark:bg-vermilion-950/60 border-vermilion-300 text-vermilion-700 dark:text-vermilion-300'
                        : 'border-cream-300 dark:border-ink-700 text-ink-500'
                    }`}
                  >
                    {showReference ? <Eye size={14} /> : <EyeOff size={14} />}
                    <span>{showReference ? 'Guide On' : 'Guide Off'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleUndo}
                    disabled={history.length === 0}
                    title="Undo stroke"
                    className="p-1.5 rounded-lg border border-cream-300 dark:border-ink-700 text-ink-600 disabled:opacity-40"
                  >
                    <Undo2 size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    title="Clear canvas"
                    className="p-1.5 rounded-lg border border-cream-300 dark:border-ink-700 text-ink-600 hover:text-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Canvas with Rice Grid (米字格) */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl border-2 border-vermilion-700/30 overflow-hidden shadow-inner mizige-bg flex items-center justify-center select-none">
                {/* Ghost Reference Character */}
                {showReference && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-25 select-none font-hanzi font-normal text-[210px] text-vermilion-700 dark:text-vermilion-300 leading-none">
                    {charData.character}
                  </div>
                )}

                {/* Drawing Surface */}
                <canvas
                  ref={canvasRef}
                  width={320}
                  height={320}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full h-full cursor-crosshair touch-none"
                />
              </div>

              {/* Action Finish Bar */}
              <div className="w-full flex items-center justify-between pt-2 border-t border-cream-200 dark:border-ink-800">
                <span className="text-xs text-ink-500">
                  Practiced: <strong>{progress.practicedCharacters[charData.character]?.count || 0} times</strong>
                </span>
                <button
                  type="button"
                  onClick={handleCompletePractice}
                  className="px-4 py-2 rounded-xl bg-jade-600 hover:bg-jade-700 text-white font-semibold text-xs shadow-sm transition-all active:scale-95 flex items-center gap-1.5"
                >
                  <CheckCircle2 size={14} />
                  <span>Mark Practiced</span>
                </button>
              </div>
            </div>

            {/* Right: Character Info Column */}
            <div className="lg:col-span-6 space-y-4">
              {/* Character Details Card */}
              <div className="bg-cream-50 dark:bg-ink-900 p-6 rounded-3xl border border-cream-300 dark:border-ink-800 shadow-soft space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-hanzi text-5xl font-bold text-ink-900 dark:text-ink-50">
                        {charData.character}
                      </span>
                      <div>
                        <div className="text-xl font-bold text-vermilion-600 dark:text-vermilion-400">
                          {charData.pinyin}
                        </div>
                        <div className="text-sm text-ink-600 dark:text-ink-300 font-medium">
                          {charData.meaning}
                        </div>
                      </div>
                    </div>
                  </div>
                  <AudioButton text={charData.character} size="md" />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-cream-100 dark:bg-ink-800">
                    <span className="text-ink-400 text-[10px] uppercase">Radical</span>
                    <div className="font-bold text-ink-800 dark:text-ink-200 mt-0.5">{charData.radical}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-cream-100 dark:bg-ink-800">
                    <span className="text-ink-400 text-[10px] uppercase">Strokes</span>
                    <div className="font-bold text-ink-800 dark:text-ink-200 mt-0.5">{charData.strokeCount}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-cream-100 dark:bg-ink-800">
                    <span className="text-ink-400 text-[10px] uppercase">Level</span>
                    <div className="font-bold text-vermilion-600 mt-0.5">HSK {charData.hskLevel}</div>
                  </div>
                </div>

                {/* Step-by-Step Stroke Order Guidance */}
                <div className="space-y-2 pt-2 border-t border-cream-200 dark:border-ink-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-500">
                    Stroke Order Sequence
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {charData.strokeSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="text-xs p-2 rounded-xl bg-white dark:bg-ink-800 border border-cream-200 dark:border-ink-700/60 flex items-center gap-2"
                      >
                        <span className="w-4 h-4 rounded-full bg-vermilion-100 text-vermilion-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-ink-700 dark:text-ink-300 font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Word Combinations */}
                <div className="space-y-2 pt-2 border-t border-cream-200 dark:border-ink-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-500">
                    Common Words with this character
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {charData.commonWords.map((cw, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white dark:bg-ink-800 border border-cream-200 dark:border-ink-700/60 space-y-0.5 text-xs">
                        <div className="font-hanzi font-bold text-sm text-ink-900 dark:text-ink-50 flex items-center justify-between">
                          <span>{cw.hanzi}</span>
                          <AudioButton text={cw.hanzi} size="sm" />
                        </div>
                        <div className="text-vermilion-600 text-[11px]">{cw.pinyin}</div>
                        <div className="text-ink-500 text-[11px]">{cw.english}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Example Sentence */}
                <div className="p-3.5 rounded-2xl bg-cream-100/70 dark:bg-ink-800/60 border border-cream-200 dark:border-ink-700 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-ink-400">In context</span>
                  <PinyinText
                    hanzi={charData.practicalSentence.hanzi}
                    pinyin={charData.practicalSentence.pinyin}
                    english={charData.practicalSentence.english}
                    size="sm"
                    withAudio
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Practical Writing Tasks Tab */
        <div className="space-y-6">
          {practicalWritingTasks.map((task) => (
            <div
              key={task.id}
              className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 sm:p-8 border border-cream-300 dark:border-ink-800 shadow-soft space-y-4"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-vermilion-600">
                  Real Practical Composition
                </span>
                <h3 className="text-xl font-bold text-ink-900 dark:text-ink-50 mt-0.5">
                  {task.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 mt-1">
                  {task.instruction}
                </p>
                <div className="text-xs text-ink-400 italic mt-0.5">Context: {task.targetContext}</div>
              </div>

              {/* Recommended key vocabulary to use */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">
                  Recommended Expressions:
                </span>
                <div className="flex flex-wrap gap-2">
                  {task.keyPhrasesToUse.map((kp, i) => (
                    <div
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-cream-200/80 dark:bg-ink-800 text-xs font-medium text-ink-800 dark:text-ink-200 flex items-center gap-1.5"
                    >
                      <span className="font-hanzi font-bold">{kp.hanzi}</span>
                      <span className="text-vermilion-600 text-[11px]">({kp.pinyin})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Model Answers */}
              <div className="space-y-2 pt-2 border-t border-cream-200 dark:border-ink-800">
                <span className="text-xs font-bold uppercase tracking-wider text-jade-700 dark:text-jade-400">
                  Sample Natural Composition:
                </span>
                {task.suggestedAnswers.map((sa, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white dark:bg-ink-800 border border-cream-200 dark:border-ink-700/80 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-jade-100 text-jade-800">
                        {sa.style}
                      </span>
                      <AudioButton text={sa.hanzi} size="sm" />
                    </div>
                    <PinyinText
                      hanzi={sa.hanzi}
                      pinyin={sa.pinyin}
                      english={sa.english}
                      size="md"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
