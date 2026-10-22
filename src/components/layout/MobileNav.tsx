import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  BookOpen,
  MessageSquare,
  FileText,
  PenTool,
  Bookmark,
} from 'lucide-react';

export const MobileNav: React.FC = () => {
  const items = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/learn', label: 'Learn', icon: BookOpen },
    { to: '/conversation', label: 'Dialogue', icon: MessageSquare },
    { to: '/reading', label: 'Reading', icon: FileText },
    { to: '/writing', label: 'Writing', icon: PenTool },
    { to: '/vocabulary', label: 'Vocab', icon: Bookmark },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-cream-50/95 dark:bg-ink-900/95 backdrop-blur-md border-t border-cream-300 dark:border-ink-800 z-40 pb-safe shadow-lg">
      <div className="flex items-center justify-around h-14 px-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center flex-1 h-full py-1 transition-colors ${
                  isActive
                    ? 'text-vermilion-700 dark:text-vermilion-400 font-semibold'
                    : 'text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-200'
                }`
              }
            >
              <Icon size={20} className="mb-0.5" />
              <span className="text-[10px] leading-none tracking-tight">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
