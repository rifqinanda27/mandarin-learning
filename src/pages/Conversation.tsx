import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MessageSquare,
  Users,
  MapPin,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  Eye,
  EyeOff,
  Volume2,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { conversationScenarios, getScenarioById } from '../data/dialogues';
import { StorageService } from '../services/storage';
import { AudioButton } from '../components/common/AudioButton';
import { PinyinText } from '../components/common/PinyinText';
import { ScenarioOption } from '../types';

export const Conversation: React.FC = () => {
  const { scenarioId } = useParams<{ scenarioId?: string }>();
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(scenarioId || conversationScenarios[0].id);

  // Active scenario
  const scenario = getScenarioById(selectedScenarioId) || conversationScenarios[0];

  // Conversation state
  const [currentNodeId, setCurrentNodeId] = useState<string>(scenario.initialNodeId);
  const [history, setHistory] = useState<Array<{ speaker: string; text: string; pinyin: string; english: string; feedback?: string }>>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [hideEnglish, setHideEnglish] = useState<boolean>(false);

  // Completed tracking
  const progress = StorageService.getProgress();
  const completedScenarios = progress.completedScenarios;

  const handleSelectScenario = (id: string) => {
    setSelectedScenarioId(id);
    const newSc = getScenarioById(id) || conversationScenarios[0];
    setCurrentNodeId(newSc.initialNodeId);
    setHistory([]);
    setIsFinished(false);
  };

  const handleRestart = () => {
    setCurrentNodeId(scenario.initialNodeId);
    setHistory([]);
    setIsFinished(false);
  };

  const currentNode = scenario.nodes[currentNodeId];

  const handleChooseOption = (option: ScenarioOption) => {
    // Append user response to history
    const newHistory = [
      ...history,
      {
        speaker: currentNode.speaker,
        text: currentNode.hanzi,
        pinyin: currentNode.pinyin,
        english: currentNode.english,
      },
      {
        speaker: 'You',
        text: option.text,
        pinyin: option.pinyin,
        english: option.english,
        feedback: option.feedback,
      },
    ];
    setHistory(newHistory);

    const nextNode = scenario.nodes[option.nextNodeId];
    if (nextNode?.isEnding) {
      setIsFinished(true);
      StorageService.markScenarioComplete(scenario.id, newHistory.length);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#b93b3b', '#15803d', '#d97706'],
        });
      } catch (e) {}
    } else {
      setCurrentNodeId(option.nextNodeId);
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Page Title */}
      <div className="space-y-1">
        <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 dark:text-ink-50">
          Interactive Branching Dialogues
        </h1>
        <p className="text-sm text-ink-600 dark:text-ink-300">
          Step into authentic Chinese scenarios. Make choices in real time and see how your tone and formality affect the conversation.
        </p>
      </div>

      {/* Scenario Horizontal Selector */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {conversationScenarios.map((sc) => {
          const isSelected = sc.id === scenario.id;
          const isDone = !!completedScenarios[sc.id];

          return (
            <button
              key={sc.id}
              type="button"
              onClick={() => handleSelectScenario(sc.id)}
              className={`shrink-0 px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all flex items-center gap-2 ${
                isSelected
                  ? 'border-vermilion-600 bg-vermilion-600 text-white shadow-vermilion'
                  : 'border-cream-300 dark:border-ink-800 bg-cream-50 dark:bg-ink-900 text-ink-700 dark:text-ink-300 hover:bg-cream-200/50'
              }`}
            >
              <span>{sc.title}</span>
              {isDone && <CheckCircle2 size={14} className={isSelected ? 'text-white' : 'text-jade-600'} />}
            </button>
          );
        })}
      </div>

      {/* Scenario Briefing Header */}
      <div className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 border border-cream-300 dark:border-ink-800 shadow-soft space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-vermilion-100 dark:bg-vermilion-950/60 text-vermilion-700 dark:text-vermilion-300 text-xs font-bold uppercase">
              {scenario.formalityLevel} Formality
            </span>
            <span className="text-xs text-ink-500">• {scenario.category}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Toggle English */}
            <button
              type="button"
              onClick={() => setHideEnglish(!hideEnglish)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-cream-300 dark:border-ink-800 text-xs font-semibold text-ink-600 dark:text-ink-300 hover:bg-cream-200/50"
            >
              {hideEnglish ? <EyeOff size={14} /> : <Eye size={14} />}
              <span>{hideEnglish ? 'English Hidden' : 'English Visible'}</span>
            </button>

            <button
              type="button"
              onClick={handleRestart}
              title="Restart Conversation"
              className="p-1.5 rounded-xl border border-cream-300 dark:border-ink-800 text-ink-600 dark:text-ink-300 hover:bg-cream-200/50"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-ink-900 dark:text-ink-50">{scenario.title}</h2>
          <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 mt-1">{scenario.description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-ink-500 dark:text-ink-400 pt-1">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-vermilion-600" />
            <span>{scenario.location}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Users size={13} className="text-jade-600" />
            <span>{scenario.relationship}</span>
          </span>
        </div>
      </div>

      {/* Chat Exchange Stream */}
      <div className="space-y-4">
        {history.map((msg, i) => {
          const isUser = msg.speaker === 'You';

          return (
            <div key={i} className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1`}>
              <span className="text-[11px] font-semibold text-ink-400 px-1">{msg.speaker}</span>
              <div
                className={`max-w-xl p-4 rounded-3xl shadow-sm space-y-1.5 ${
                  isUser
                    ? 'bg-vermilion-600 text-white rounded-tr-sm'
                    : 'bg-white dark:bg-ink-800/90 text-ink-900 dark:text-ink-100 border border-cream-300 dark:border-ink-700 rounded-tl-sm'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="font-hanzi text-lg font-medium tracking-wide">{msg.text}</div>
                  <AudioButton text={msg.text} size="sm" className={isUser ? 'text-white/90 hover:bg-white/20' : ''} />
                </div>
                <div className={`text-xs ${isUser ? 'text-vermilion-100' : 'text-vermilion-600 dark:text-vermilion-400'}`}>
                  {msg.pinyin}
                </div>
                {!hideEnglish && (
                  <div className={`text-xs ${isUser ? 'text-white/80' : 'text-ink-500 dark:text-ink-400'}`}>
                    {msg.english}
                  </div>
                )}
              </div>

              {msg.feedback && (
                <div className="text-[11px] text-ink-500 dark:text-ink-400 italic px-2">
                  💡 {msg.feedback}
                </div>
              )}
            </div>
          );
        })}

        {/* Current Interlocutor Node */}
        {!isFinished && currentNode && (
          <div className="flex flex-col items-start space-y-1 animate-in fade-in duration-200">
            <span className="text-[11px] font-semibold text-ink-400 px-1">{currentNode.speaker}</span>
            <div className="max-w-xl p-4 rounded-3xl bg-white dark:bg-ink-800/90 text-ink-900 dark:text-ink-100 border border-cream-300 dark:border-ink-700 shadow-sm space-y-1.5 rounded-tl-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="font-hanzi text-lg font-medium tracking-wide">{currentNode.hanzi}</div>
                <AudioButton text={currentNode.hanzi} size="sm" />
              </div>
              <div className="text-xs text-vermilion-600 dark:text-vermilion-400">
                {currentNode.pinyin}
              </div>
              {!hideEnglish && (
                <div className="text-xs text-ink-500 dark:text-ink-400">
                  {currentNode.english}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Selectable User Choices */}
      {!isFinished && currentNode && currentNode.options.length > 0 && (
        <div className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 border border-cream-300 dark:border-ink-800 shadow-soft space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-ink-400">
            Choose your response:
          </div>
          <div className="space-y-2.5">
            {currentNode.options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleChooseOption(opt)}
                className="w-full p-4 rounded-2xl bg-white dark:bg-ink-800 border border-cream-300 dark:border-ink-700/80 hover:border-vermilion-500 dark:hover:border-vermilion-600 text-left transition-all shadow-sm hover:shadow-md group flex items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="font-hanzi font-bold text-base text-ink-900 dark:text-ink-50 group-hover:text-vermilion-600 transition-colors">
                    {opt.text}
                  </div>
                  <div className="text-xs text-vermilion-600 dark:text-vermilion-400">
                    {opt.pinyin}
                  </div>
                  {!hideEnglish && (
                    <div className="text-xs text-ink-500 dark:text-ink-400">
                      {opt.english}
                    </div>
                  )}
                </div>
                <ChevronRight size={18} className="text-ink-400 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Post-Dialogue Summary */}
      {isFinished && (
        <div className="bg-cream-50 dark:bg-ink-900 rounded-3xl p-6 sm:p-8 border border-cream-300 dark:border-ink-800 shadow-soft space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-jade-100 dark:bg-jade-950 text-jade-700 dark:text-jade-300 flex items-center justify-center">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-ink-900 dark:text-ink-50">Scenario Completed!</h3>
              <p className="text-xs text-ink-500 dark:text-ink-400">
                You successfully navigated this exchange. Here are the key expressions to remember:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {scenario.summaryPhrases.map((phrase, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-white dark:bg-ink-800 border border-cream-300 dark:border-ink-700 space-y-1">
                <div className="font-hanzi font-bold text-sm text-ink-900 dark:text-ink-50">{phrase.hanzi}</div>
                <div className="text-xs text-vermilion-600 dark:text-vermilion-400">{phrase.pinyin}</div>
                <div className="text-xs text-ink-500 dark:text-ink-400">"{phrase.english}"</div>
                <div className="text-[11px] text-ink-400 pt-1 border-t border-cream-200 dark:border-ink-700/60">
                  {phrase.note}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl border border-cream-300 dark:border-ink-800 font-semibold text-xs hover:bg-cream-200/50"
            >
              Try Different Branch
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
