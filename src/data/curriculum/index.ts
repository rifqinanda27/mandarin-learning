import { Lesson } from '../../types';
import { unit1Lessons } from './unit1';
import { unit2Lessons } from './unit2';
import { unit3Lessons } from './unit3';
import { unit4Lessons } from './unit4';
import { unit5Lessons } from './unit5';
import { unit6Lessons } from './unit6';

export const allLessons: Lesson[] = [
  ...unit1Lessons,
  ...unit2Lessons,
  ...unit3Lessons,
  ...unit4Lessons,
  ...unit5Lessons,
  ...unit6Lessons,
];

export const curriculumUnits = [
  {
    id: 1,
    title: 'Unit 1 — Foundations',
    description: 'Pinyin, the four tones, greetings, self-introductions, nationalities, and core question particles.',
    color: 'vermilion',
    lessons: unit1Lessons,
  },
  {
    id: 2,
    title: 'Unit 2 — Everyday Life',
    description: 'Numbers, measure words, telling time, family relationships, ordering food, shopping, and asking directions.',
    color: 'amberGold',
    lessons: unit2Lessons,
  },
  {
    id: 3,
    title: 'Unit 3 — Natural Conversation',
    description: 'Daily routines, hobbies, proposing plans, accepting & declining invitations, asking help, and completed actions with 了.',
    color: 'jade',
    lessons: unit3Lessons,
  },
  {
    id: 4,
    title: 'Unit 4 — Social Context & Politeness',
    description: 'Conversational nuance: speaking to friends vs strangers, elders, teachers, coworkers, polite requests, and WeChat etiquette.',
    color: 'vermilion',
    lessons: unit4Lessons,
  },
  {
    id: 5,
    title: 'Unit 5 — Reading for Real Life',
    description: 'Menus, spice levels, metro and street signs, QR payment prompts, invoices, invitations, and everyday notices.',
    color: 'amberGold',
    lessons: unit5Lessons,
  },
  {
    id: 6,
    title: 'Unit 6 — Writing & Communication',
    description: 'Anatomy of Chinese strokes, radicals, universal stroke order, writing common characters, and composing real messages.',
    color: 'jade',
    lessons: unit6Lessons,
  },
];

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

export function getNextLesson(currentId: string): Lesson | undefined {
  const index = allLessons.findIndex((l) => l.id === currentId);
  if (index >= 0 && index < allLessons.length - 1) {
    return allLessons[index + 1];
  }
  return undefined;
}

export function getPreviousLesson(currentId: string): Lesson | undefined {
  const index = allLessons.findIndex((l) => l.id === currentId);
  if (index > 0) {
    return allLessons[index - 1];
  }
  return undefined;
}
