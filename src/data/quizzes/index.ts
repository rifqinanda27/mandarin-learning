import { Exercise } from '../../types';

export interface QuizTopic {
  id: string;
  title: string;
  category: string;
  description: string;
  questions: Exercise[];
}

export const quizBank: QuizTopic[] = [
  {
    id: 'quiz-tones-pinyin',
    title: 'Pinyin & Tone Mastery Quiz',
    category: 'Foundations',
    description: 'Test your ear and understanding of tone marks, tone sandhi (不 and 一), and initials.',
    questions: [
      {
        id: 'q-t1',
        type: 'multiple-choice',
        question: 'Which tone in Mandarin is high, flat, and sustained like a held musical pitch?',
        options: ['1st Tone (ā)', '2nd Tone (á)', '3rd Tone (ǎ)', '4th Tone (à)'],
        correctAnswer: '1st Tone (ā)',
        explanation: 'The 1st tone (阴平) sits at pitch level 5-5 high and flat.'
      },
      {
        id: 'q-t2',
        type: 'multiple-choice',
        question: 'When 不 (bù) is followed by another 4th tone word like 是 (shì), how is 不 pronounced?',
        options: ['bú (2nd tone)', 'bù (4th tone)', 'bǔ (3rd tone)', 'bu (neutral tone)'],
        correctAnswer: 'bú (2nd tone)',
        explanation: '不 changes from 4th tone to 2nd tone before another 4th tone to preserve speech rhythm.'
      },
      {
        id: 'q-t3',
        type: 'multiple-choice',
        question: 'What is the correct pinyin for "Thank you"?',
        options: ['xièxie', 'xǐexie', 'xiéxie', 'xiēxie'],
        correctAnswer: 'xièxie',
        explanation: '谢谢 is pronounced xièxie (4th tone followed by neutral tone).'
      }
    ]
  },
  {
    id: 'quiz-formality-etiquette',
    title: 'Social Etiquette & Formality Quiz',
    category: 'Speech & Etiquette',
    description: 'Challenge your situational intuition: casual vs polite vs formal phrasing in real social settings.',
    questions: [
      {
        id: 'q-f1',
        type: 'formality-pick',
        question: 'You want to ask your boss to review a quarterly report. Which phrase is most professional?',
        options: [
          '李经理，这是季度报告，请您过目。(Lǐ jīnglǐ, zhè shì jìdù bàogào, qǐng nín guòmù.)',
          '李经理，看这个报告！(Lǐ jīnglǐ, kàn zhè ge bàogào!)',
          '喂，报告给你了。(Wèi, bàogào gěi nǐ le.)',
          '随便看看。(Suíbiàn kànkan.)'
        ],
        correctAnswer: '李经理，这是季度报告，请您过目。(Lǐ jīnglǐ, zhè shì jìdù bàogào, qǐng nín guòmù.)',
        explanation: 'Addressing by title + surname and using the polite term 请您过目 (please look over) is the standard respectful workplace expression.'
      },
      {
        id: 'q-f2',
        type: 'formality-pick',
        question: 'Your close best friend offers you some snacks. What is the most authentic, warm reply?',
        options: [
          '谢啦！(Xiè la!)',
          '非常感谢您的慷慨恩德！(Fēicháng gǎnxiè nín de kāngkǎi ēndé!)',
          '久仰久仰！(Jiǔyǎng jiǔyǎng!)',
          '您好！(Nín hǎo!)'
        ],
        correctAnswer: '谢啦！(Xiè la!)',
        explanation: 'Excessive ceremony with close friends feels awkwardly distant (见外). Casual warmth like 谢啦 is ideal.'
      },
      {
        id: 'q-f3',
        type: 'formality-pick',
        question: 'A friend invites you to dinner, but you have a conflicting appointment. How do you decline gracefully?',
        options: [
          '真不好意思，我那天正好有事，下次我们再去吧！',
          '我不去，太麻烦了。',
          '不行，走开。',
          '不要问我。'
        ],
        correctAnswer: '真不好意思，我那天正好有事，下次我们再去吧！',
        explanation: 'The 3-part formula: Apology (不好意思) + Gentle reason (有事) + Raincheck (下次再去) preserves face and friendship.'
      }
    ]
  },
  {
    id: 'quiz-dining-shopping',
    title: 'Dining & Shopping Practical Quiz',
    category: 'Everyday Life',
    description: 'Test your ability to order food, ask for prices, bargain politely, and request bills.',
    questions: [
      {
        id: 'q-ds1',
        type: 'multiple-choice',
        question: 'Which sentence is the authentic way to order a bowl of noodles in a restaurant?',
        options: [
          '服务员，来一碗牛肉面！(Fúwùyuán, lái yì wǎn niúròumiàn!)',
          '给我牛肉面快点！(Gěi wǒ niúròumiàn kuài diǎn!)',
          '我要买牛肉面。(Wǒ yào mǎi niúròumiàn.)',
          '牛肉面来我。(Niúròumiàn lái wǒ.)'
        ],
        correctAnswer: '服务员，来一碗牛肉面！(Fúwùyuán, lái yì wǎn niúròumiàn!)',
        explanation: 'Native diners use 来 (bring) and the measure word 碗 (bowl) to order dishes.'
      },
      {
        id: 'q-ds2',
        type: 'multiple-choice',
        question: 'In a street market, how do you politely ask for a slight discount?',
        options: [
          '老板，可以便宜一点吗？(Lǎobǎn, kěyǐ piányi yìdiǎn ma?)',
          '太便宜了，我不买！(Tài piányi le, wǒ bù mǎi!)',
          '这个太贵，不要了！(Tài guì, bú yào le!)',
          '给我钱！(Gěi wǒ qián!)'
        ],
        correctAnswer: '老板，可以便宜一点吗？(Lǎobǎn, kěyǐ piányi yìdiǎn ma?)',
        explanation: '"可以便宜一点吗？" (Can it be a little cheaper?) is the standard polite bargaining inquiry.'
      },
      {
        id: 'q-ds3',
        type: 'multiple-choice',
        question: 'How do you ask to settle the bill at a dining table?',
        options: [
          '服务员，买单！(Fúwùyuán, mǎidān!)',
          '我走了！(Wǒ zǒu le!)',
          '多少钱全部？(Duōshao qián quánbù?)',
          '收据给我！(Shōujù gěi wǒ!)'
        ],
        correctAnswer: '服务员，买单！(Fúwùyuán, mǎidān!)',
        explanation: '买单 (mǎidān) or 结账 (jiézhàng) is universally recognized for requesting the bill.'
      }
    ]
  },
  {
    id: 'quiz-character-recognition',
    title: 'Character & Component Recognition',
    category: 'Writing & Literacy',
    description: 'Recognize core high-frequency characters and identify their semantic radicals.',
    questions: [
      {
        id: 'q-cr1',
        type: 'multiple-choice',
        question: 'Which character means "country / nation"?',
        options: ['国 (guó)', '家 (jiā)', '中 (zhōng)', '学 (xué)'],
        correctAnswer: '国 (guó)',
        explanation: '国 means country (as in 中国 China, 美国 USA).'
      },
      {
        id: 'q-cr2',
        type: 'multiple-choice',
        question: 'What is the radical in the character "你" (you)?',
        options: ['亻(单人旁 - person radical)', '女 (woman radical)', '氵(water radical)', '口 (mouth radical)'],
        correctAnswer: '亻(单人旁 - person radical)',
        explanation: 'The left side of 你 is 亻(单人旁), the standing person radical.'
      },
      {
        id: 'q-cr3',
        type: 'multiple-choice',
        question: 'Which stroke rule applies to writing enclosed characters like "国" and "日"?',
        options: [
          'Inside strokes before closing the bottom seal',
          'Close the seal before writing the inside',
          'Bottom seal first',
          'Stroke order has no rule'
        ],
        correctAnswer: 'Inside strokes before closing the bottom seal',
        explanation: 'The classic rule is 先外后内再封口 (enter the room before closing the door).'
      }
    ]
  }
];

export function getQuizTopicById(id: string): QuizTopic | undefined {
  return quizBank.find(q => q.id === id);
}
