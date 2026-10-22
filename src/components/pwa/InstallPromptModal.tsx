import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Monitor, Compass, ShieldCheck } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface InstallPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt: BeforeInstallPromptEvent | null;
  onPromptAccepted?: () => void;
}

export const InstallPromptModal: React.FC<InstallPromptModalProps> = ({
  isOpen,
  onClose,
  deferredPrompt,
  onPromptAccepted,
}) => {
  const [activeTab, setActiveTab] = useState<'prompt' | 'ios' | 'android' | 'desktop'>('prompt');
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    // Detect OS for best initial tab
    const ua = navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(ua)) {
      setActiveTab('ios');
    } else if (/Android/.test(ua)) {
      setActiveTab(deferredPrompt ? 'prompt' : 'android');
    } else {
      setActiveTab(deferredPrompt ? 'prompt' : 'desktop');
    }
  }, [deferredPrompt]);

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    setIsInstalling(true);
    try {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        if (onPromptAccepted) onPromptAccepted();
        onClose();
      }
    } catch (e) {
      console.error('PWA install error', e);
    } finally {
      setIsInstalling(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-ink-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-cream-50 dark:bg-ink-900 border border-cream-300 dark:border-ink-800 rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-vermilion-600 flex items-center justify-center text-white font-hanzi font-bold text-lg shadow-sm">
              汉
            </div>
            <div>
              <h3 className="font-bold text-base text-ink-900 dark:text-ink-50">Install Everyday Mandarin</h3>
              <p className="text-xs text-ink-500 dark:text-ink-400">Standalone offline app experience</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-cream-200 dark:hover:bg-ink-800 text-ink-500"
          >
            <X size={18} />
          </button>
        </div>

        {/* Browser native prompt available button */}
        {deferredPrompt && (
          <div className="p-4 rounded-2xl bg-vermilion-50 dark:bg-vermilion-950/40 border border-vermilion-200 dark:border-vermilion-900 text-center space-y-3">
            <p className="text-xs text-vermilion-900 dark:text-vermilion-200 font-medium">
              Your browser supports direct one-click installation!
            </p>
            <button
              type="button"
              disabled={isInstalling}
              onClick={handleInstallClick}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white font-semibold text-sm shadow-vermilion transition-all active:scale-95 disabled:opacity-50"
            >
              <Download size={16} />
              <span>{isInstalling ? 'Installing...' : 'Install App to Device'}</span>
            </button>
          </div>
        )}

        {/* Tabs for platform guides */}
        <div className="flex border-b border-cream-300 dark:border-ink-800 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab('ios')}
            className={`pb-2 px-3 border-b-2 transition-colors ${
              activeTab === 'ios'
                ? 'border-vermilion-600 text-vermilion-600'
                : 'border-transparent text-ink-500 hover:text-ink-800 dark:hover:text-ink-300'
            }`}
          >
            iOS (iPhone/iPad)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('android')}
            className={`pb-2 px-3 border-b-2 transition-colors ${
              activeTab === 'android'
                ? 'border-vermilion-600 text-vermilion-600'
                : 'border-transparent text-ink-500 hover:text-ink-800 dark:hover:text-ink-300'
            }`}
          >
            Android
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('desktop')}
            className={`pb-2 px-3 border-b-2 transition-colors ${
              activeTab === 'desktop'
                ? 'border-vermilion-600 text-vermilion-600'
                : 'border-transparent text-ink-500 hover:text-ink-800 dark:hover:text-ink-300'
            }`}
          >
            Desktop (PC/Mac)
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-xs text-ink-600 dark:text-ink-300 space-y-3">
          {activeTab === 'ios' && (
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-vermilion-100 text-vermilion-700 font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <span>Open this site in <strong>Safari</strong> on your iPhone or iPad.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-vermilion-100 text-vermilion-700 font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <span>Tap the <strong>Share</strong> button (the square with an arrow pointing up) in Safari’s bottom toolbar.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-vermilion-100 text-vermilion-700 font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <span>Scroll down and tap <strong>Add to Home Screen</strong>, then confirm by tapping <strong>Add</strong>.</span>
              </div>
            </div>
          )}

          {activeTab === 'android' && (
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-vermilion-100 text-vermilion-700 font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <span>Open in <strong>Google Chrome</strong> or Samsung Internet.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-vermilion-100 text-vermilion-700 font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <span>Tap the three dots (<strong>⋮</strong>) in the top-right corner.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-vermilion-100 text-vermilion-700 font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <span>Select <strong>Install app</strong> or <strong>Add to Home screen</strong>.</span>
              </div>
            </div>
          )}

          {activeTab === 'desktop' && (
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-vermilion-100 text-vermilion-700 font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <span>Use a modern Chromium browser like <strong>Google Chrome</strong> or <strong>Microsoft Edge</strong>.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-vermilion-100 text-vermilion-700 font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <span>Click the <strong>Install icon</strong> in the browser URL address bar (on the far right).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-vermilion-100 text-vermilion-700 font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <span>Click <strong>Install</strong> to launch as a standalone desktop application.</span>
              </div>
            </div>
          )}
        </div>

        {/* Security & Offline note */}
        <div className="p-3 rounded-xl bg-cream-200/60 dark:bg-ink-800/60 flex items-center gap-2.5 text-[11px] text-ink-500 dark:text-ink-400">
          <ShieldCheck size={16} className="text-jade-600 shrink-0" />
          <span>
            PWA installation works locally on <code>localhost</code> in development, and requires <code>HTTPS</code> when deployed in production.
          </span>
        </div>
      </div>
    </div>
  );
};
