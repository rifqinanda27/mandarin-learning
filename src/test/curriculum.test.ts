import { describe, it, expect } from 'vitest';
import { allLessons, curriculumUnits, getLessonById } from '../data/curriculum';
import { vocabularyList } from '../data/vocabulary';
import { readingPassages } from '../data/readings';
import { formalityComparisons } from '../data/formality';
import { conversationScenarios } from '../data/dialogues';
import { writingCharacters } from '../data/writing';

describe('Curriculum Content & Integrity', () => {
  it('should contain at least 30 structured lessons across 6 units', () => {
    expect(allLessons.length).toBeGreaterThanOrEqual(30);
    expect(curriculumUnits.length).toBe(6);

    // Each lesson must have rich non-placeholder instructional content
    allLessons.forEach((lesson) => {
      expect(lesson.title).toBeTruthy();
      expect(lesson.objectives.length).toBeGreaterThan(0);
      expect(lesson.vocabulary.length).toBeGreaterThan(0);
      expect(lesson.grammarAndUsage.length).toBeGreaterThan(0);
      expect(lesson.exercises.length).toBeGreaterThan(0);
      lesson.exercises.forEach((ex) => {
        expect(ex.question).toBeTruthy();
        expect(ex.correctAnswer).toBeDefined();
        expect(ex.explanation).toBeTruthy();
      });
    });
  });

  it('should find lessons by id', () => {
    const l1 = getLessonById('lesson-1');
    expect(l1).toBeDefined();
    expect(l1?.title).toContain('Pinyin');
  });

  it('should provide over 150 vocabulary entries with audio-compatible text', () => {
    expect(vocabularyList.length).toBeGreaterThanOrEqual(150);
    vocabularyList.forEach((word) => {
      expect(word.hanzi).toBeTruthy();
      expect(word.pinyin).toBeTruthy();
      expect(word.english).toBeTruthy();
      expect(word.example.hanzi).toBeTruthy();
    });
  });

  it('should contain 10 real-world reading passages with questions', () => {
    expect(readingPassages.length).toBeGreaterThanOrEqual(10);
    readingPassages.forEach((p) => {
      expect(p.chineseText).toBeTruthy();
      expect(p.pinyinText).toBeTruthy();
      expect(p.englishText).toBeTruthy();
      expect(p.questions.length).toBeGreaterThan(0);
      p.questions.forEach((q) => {
        expect(q.correctIndex).toBeGreaterThanOrEqual(0);
        expect(q.correctIndex).toBeLessThan(q.options.length);
      });
    });
  });

  it('should contain formal vs informal comparisons with contextual notes', () => {
    expect(formalityComparisons.length).toBeGreaterThan(0);
    formalityComparisons.forEach((fc) => {
      expect(fc.informal.hanzi).toBeTruthy();
      expect(fc.polite.hanzi).toBeTruthy();
      expect(fc.whyItMatters).toBeTruthy();
      expect(fc.commonPitfall).toBeTruthy();
    });
  });

  it('should contain interactive conversation scenarios with branching nodes', () => {
    expect(conversationScenarios.length).toBeGreaterThan(0);
    conversationScenarios.forEach((sc) => {
      expect(sc.initialNodeId).toBeTruthy();
      expect(sc.nodes[sc.initialNodeId]).toBeDefined();
    });
  });

  it('should provide stroke breakdown for common writing characters', () => {
    expect(writingCharacters.length).toBeGreaterThanOrEqual(15);
    writingCharacters.forEach((c) => {
      expect(c.character).toBeTruthy();
      expect(c.strokeSteps.length).toBe(c.strokeCount);
    });
  });
});
