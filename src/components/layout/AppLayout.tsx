import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { TopHeader } from './TopHeader';
import { OnboardingModal } from '../onboarding/OnboardingModal';
import { InstallPromptModal } from '../pwa/InstallPromptModal';
import { StorageService } from '../../services/storage';

export const AppLayout: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallModal, setShowInstallModal] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // Check if user has finished onboarding
    const settings = StorageService.getSettings();
    if (!settings.onboarded) {
      setShowOnboarding(true);
    }

    // Apply saved theme
    if (settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Listen for beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <div className="min-h-screen flex bg-cream-100 dark:bg-ink-950 text-ink-900 dark:text-ink-100 font-sans transition-colors duration-200">
      {/* Desktop Sidebar */}
      <Sidebar
        canInstall={deferredPrompt !== null}
        onOpenInstall={() => setShowInstallModal(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 pb-16 md:pb-0">
        <TopHeader
          canInstall={deferredPrompt !== null}
          onOpenInstall={() => setShowInstallModal(true)}
        />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Outlet />
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileNav />

      {/* Modals */}
      <OnboardingModal
        isOpen={showOnboarding}
        onClose={() => setShowOnboarding(false)}
      />
      <InstallPromptModal
        isOpen={showInstallModal}
        onClose={() => setShowInstallModal(false)}
        deferredPrompt={deferredPrompt}
        onPromptAccepted={() => setDeferredPrompt(null)}
      />
    </div>
  );
};
