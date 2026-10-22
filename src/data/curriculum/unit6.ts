import { Lesson } from '../../types';

export const unit6Lessons: Lesson[] = [
  {
    id: 'lesson-29',
    unitId: 6,
    unitTitle: 'Unit 6 — Writing & Communication',
    lessonNumber: 29,
    title: 'Character Anatomy: The 6 Basic Strokes & Radicals',
    subtitle: 'Demystifying Chinese characters into predictable, elegant components',
    estimatedMinutes: 11,
    level: 'Beginner to Elementary (HSK 1-2)',
    objectives: [
      'Master the fundamental strokes: 横 (héng, horizontal), 竖 (shù, vertical), 撇 (piě, left slash), 捺 (nà, right slash), 点 (diǎn, dot), 折 (zhé, turning)',
      'Recognize meaning-bearing radicals: 亻(person), 氵(water), 口 (mouth), 木 (tree/wood)',
      'Understand how radicals unlock character meaning'
    ],
    grammarAndUsage: [
      {
        title: 'Characters Are Lego Blocks, Not Random Drawings',
        explanation: 'Over 80% of Chinese characters are phono-semantic compounds (形声字): one part gives a clue about meaning (radical), while another part gives a clue about pronunciation. For example, 渴 (thirsty) and 喝 (drink) both have oral/liquid radicals: 氵and 口.',
        tip: 'Learning radicals makes remembering characters 5x faster and intuitive!'
      }
    ],
    vocabulary: [
      { hanzi: '横', pinyin: 'héng', english: 'horizontal stroke (一)', notes: 'Basic stroke' },
      { hanzi: '竖', pinyin: 'shù', english: 'vertical stroke (丨)', notes: 'Basic stroke' },
      { hanzi: '撇', pinyin: 'piě', english: 'left-falling stroke (丿)', notes: 'Basic stroke' },
      { hanzi: '捺', pinyin: 'nà', english: 'right-falling stroke (乀)', notes: 'Basic stroke' },
      { hanzi: '点', pinyin: 'diǎn', english: 'dot stroke (丶)', notes: 'Basic stroke' },
      { hanzi: '部首', pinyin: 'bùshǒu', english: 'radical (character component)', notes: 'Linguistic term' }
    ],
    dialogueOrSentences: [
      { speaker: '书写指导', hanzi: '汉字有六个基本笔画：横、竖、撇、捺、点、折。', pinyin: 'Hànzì yǒu liù gè jīběn bǐhuà: héng, shù, piě, nà, diǎn, zhé.', english: 'Chinese characters have six basic strokes: horizontal, vertical, left slash, right slash, dot, and fold.', context: 'Core rule of Chinese calligraphy.' }
    ],
    culturalNote: 'Traditional Chinese calligraphy values balance (平衡) and center of gravity. Each character is imagined inside an invisible square (米字格).',
    exercises: [
      {
        id: 'u6l29-e1',
        type: 'multiple-choice',
        question: 'Which radical indicates that a character is related to water or liquids (as in 海 sea, 河 river, 洗 wash)?',
        options: ['氵(三点水)', '亻(单人旁)', '口 (口字旁)', '木 (木字旁)'],
        correctAnswer: '氵(三点水)',
        explanation: '氵 (the three-dot water radical) denotes water, liquids, or fluid actions.'
      }
    ]
  },
  {
    id: 'lesson-30',
    unitId: 6,
    unitTitle: 'Unit 6 — Writing & Communication',
    lessonNumber: 30,
    title: 'Universal Stroke Order Rules',
    subtitle: 'Top to bottom, left to right, and closing the gate last',
    estimatedMinutes: 12,
    level: 'Elementary (HSK 1-2)',
    objectives: [
      'Master the universal stroke order rules (先横后竖, 先撇后捺, 从上到下, 从左到右)',
      'Learn the "enter the room before closing the door" rule (先进入后关门, e.g. 国, 日, 回)',
      'Practice writing high-frequency characters cleanly'
    ],
    grammarAndUsage: [
      {
        title: 'The Golden Stroke Order Principles',
        explanation: '1. Top before bottom (从上到下): 三, 言\n2. Left before right (从左到右): 你, 好\n3. Horizontal before vertical (先横后竖): 十\n4. Center before sides (先中间后两边): 小, 水\n5. Outside before inside, close last (先外后内再封口): 国, 四.',
        tip: 'Following stroke order produces balanced proportions and prevents hand cramping.'
      }
    ],
    vocabulary: [
      { hanzi: '笔画', pinyin: 'bǐhuà', english: 'stroke (of a character)', notes: 'Noun' },
      { hanzi: '笔顺', pinyin: 'bǐshùn', english: 'stroke order', notes: 'Noun' },
      { hanzi: '写', pinyin: 'xiě', english: 'to write', notes: 'Verb' },
      { hanzi: '国', pinyin: 'guó', english: 'country (example of enclosing)', notes: 'Writing demo' }
    ],
    dialogueOrSentences: [
      { speaker: '书写诀窍', hanzi: '写“国”字：先写外框，再写里面的“玉”，最后封口。', pinyin: 'Xiě “guó” zì: xiān xiě wàikuāng, zài xiě lǐmiàn de “yù”, zuìhòu fēngkǒu.', english: 'Writing the character “国”: write the outer frame first, then write the “玉” inside, and seal the box last.', context: 'Demonstrating the enclosing rule.' }
    ],
    culturalNote: 'Stroke order has evolved over three thousand years to allow the writing brush to flow without awkward pauses or ink smudges.',
    exercises: [
      {
        id: 'u6l30-e1',
        type: 'multiple-choice',
        question: 'When writing an enclosed character like "日" (sun) or "国" (country), when do you write the bottom closing horizontal stroke?',
        options: [
          'At the very end (seal the box last)',
          'At the very beginning',
          'Before writing the inside contents',
          'Any order is identical'
        ],
        correctAnswer: 'At the very end (seal the box last)',
        explanation: 'The classic rule is "enter the room before closing the door" (先进入后关门): finish the internal strokes, then seal the bottom.'
      }
    ]
  },
  {
    id: 'lesson-31',
    unitId: 6,
    unitTitle: 'Unit 6 — Writing & Communication',
    lessonNumber: 31,
    title: 'Composing Practical Messages & Self-Introductions',
    subtitle: 'Drafting real-world self-introductions, polite inquiries, and short notes',
    estimatedMinutes: 13,
    level: 'Intermediate (HSK 2-3)',
    objectives: [
      'Write a 4-sentence practical self-introduction (name, nationality, hobbies, pleasantry)',
      'Compose a polite WeChat request to a coworker or friend',
      'Format a simple note with greeting, body, and polite closing'
    ],
    grammarAndUsage: [
      {
        title: 'Structure of a Short Message',
        explanation: 'A courteous short written message follows three parts:\n1. Salutation: [Name] 您好 / [Name] 早啊\n2. Body: Reason + Request with 麻烦 / 请问\n3. Closing: 谢谢！/ 祝好 (Best wishes).',
        tip: 'Keep digital notes concise, friendly, and clear.'
      }
    ],
    vocabulary: [
      { hanzi: '自我介绍', pinyin: 'zìwǒ jièshào', english: 'self-introduction', notes: 'Noun/Phrase' },
      { hanzi: '祝好', pinyin: 'zhù hǎo', english: 'best wishes / regards', notes: 'Written closing' },
      { hanzi: '请假', pinyin: 'qǐngjià', english: 'to ask for leave / time off', notes: 'Work phrase' },
      { hanzi: '联系', pinyin: 'liánxì', english: 'to contact', notes: 'Verb' }
    ],
    dialogueOrSentences: [
      { speaker: '微信留言范例', hanzi: '王经理您好，我今天身体有点不舒服，想请假一天，工作已经交给小李协助，给您添麻烦了！祝好。', pinyin: 'Wáng jīnglǐ nín hǎo, wǒ jīntiān shēntǐ yǒudiǎn bù shūfu, xiǎng qǐngjià yì tiān, gōngzuò yǐjīng jiāogěi Xiǎo Lǐ xiézhù, gěi nín tiān máfan le! Zhù hǎo.', english: 'Hello Manager Wang, I am feeling a bit unwell today and would like to request one day of leave. My tasks have been handed over to Xiao Li. Sorry for the trouble caused! Best regards.', context: 'Model practical leave message.' }
    ],
    culturalNote: 'When messaging a colleague or boss in writing, mentioning that your duties are covered (已交接) shows high responsibility and professionalism.',
    exercises: [
      {
        id: 'u6l31-e1',
        type: 'multiple-choice',
        question: 'Which closing is standard and polite for a written message or email to a professional contact?',
        options: ['祝好 / 祝工作顺利', '走啦！', '再也不见', '没门儿'],
        correctAnswer: '祝好 / 祝工作顺利',
        explanation: '祝好 (Best wishes) and 祝工作顺利 (Wishing you smooth work) are standard courteous written closings.'
      }
    ]
  }
];
