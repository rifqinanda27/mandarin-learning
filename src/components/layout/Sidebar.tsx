import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  BookOpen,
  MessageSquare,
  Scale,
  FileText,
  PenTool,
  Bookmark,
  Sparkles,
  BarChart2,
  Settings,
  Download,
} from 'lucide-react';

interface SidebarProps {
  onOpenInstall?: () => void;
  canInstall?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ onOpenInstall, canInstall }) => {
  const navItems = [
    { to: '/', label: 'Home', icon: Home, badge: '' },
    { to: '/learn', label: 'Learn', icon: BookOpen, badge: '31' },
    { to: '/conversation', label: 'Conversation', icon: MessageSquare, badge: '4' },
    { to: '/formality', label: 'Speech & Etiquette', icon: Scale, badge: 'Key' },
    { to: '/reading', label: 'Reading', icon: FileText, badge: '10' },
    { to: '/writing', label: 'Writing', icon: PenTool, badge: '15' },
    { to: '/vocabulary', label: 'Vocabulary', icon: Bookmark, badge: '155' },
    { to: '/quiz', label: 'Practice Quiz', icon: Sparkles, badge: '' },
    { to: '/progress', label: 'Progress', icon: BarChart2, badge: '' },
    { to: '/settings', label: 'Settings', icon: Settings, badge: '' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-cream-50 dark:bg-ink-900 border-r border-cream-300 dark:border-ink-800 z-30 select-none">
      {/* Brand Header */}
      <div className="p-5 border-b border-cream-300 dark:border-ink-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-vermilion-600 to-vermilion-700 flex items-center justify-center text-white shadow-vermilion">
          <span className="font-hanzi font-bold text-2xl">汉</span>
        </div>
        <div>
          <h1 className="font-bold text-base tracking-tight text-ink-900 dark:text-ink-50">Everyday Mandarin</h1>
          <p className="text-xs text-ink-500 dark:text-ink-400 font-medium">Real-World Chinese</p>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                  isActive
                    ? 'bg-vermilion-50 dark:bg-vermilion-950/40 text-vermilion-700 dark:text-vermilion-400 font-semibold shadow-sm'
                    : 'text-ink-600 dark:text-ink-300 hover:bg-cream-200/70 dark:hover:bg-ink-800/60'
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-cream-200 dark:bg-ink-800 text-ink-600 dark:text-ink-300">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Install Button / Footer Banner */}
      <div className="p-4 border-t border-cream-300 dark:border-ink-800 space-y-2">
        <button
          type="button"
          onClick={onOpenInstall}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-vermilion-600 hover:bg-vermilion-700 text-white text-xs font-semibold shadow-soft transition-all active:scale-95"
        >
          <Download size={14} />
          <span>{canInstall ? 'Install Web App' : 'PWA Install Guide'}</span>
        </button>
        <div className="text-center text-[11px] text-ink-400 dark:text-ink-500">
          HSK 1–3 • Offline Ready • v1.0
        </div>
      </div>
    </aside>
  );
};
