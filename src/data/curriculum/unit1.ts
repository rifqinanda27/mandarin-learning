import { Lesson } from '../../types';

export const unit1Lessons: Lesson[] = [
  {
    id: 'lesson-1',
    unitId: 1,
    unitTitle: 'Unit 1 — Foundations',
    lessonNumber: 1,
    title: 'Pinyin & The Four Tones',
    subtitle: 'The acoustic building blocks of spoken Mandarin',
    estimatedMinutes: 8,
    level: 'Beginner (HSK 1)',
    objectives: [
      'Master the four standard Mandarin tones plus the neutral tone',
      'Understand how tone pitch changes word meaning (mā, má, mǎ, mà)',
      'Learn the tone change rule for 不 (bù) and 一 (yī)'
    ],
    grammarAndUsage: [
      {
        title: 'The Four Tones Overview',
        explanation: 'Mandarin is a tonal language. The same syllable pronounced with different pitches creates completely distinct words: 1st tone (high & flat, ā), 2nd tone (rising, á), 3rd tone (dipping low, ǎ), 4th tone (falling sharply, à), and neutral tone (light & quick, a).',
        tip: 'Think of 1st tone like singing a steady high note, 2nd tone like asking "What?", 3rd tone like nodding "Well...", and 4th tone like an emphatic command "Stop!".'
      },
      {
        title: 'The Tone Sandhi of 不 (bù)',
        explanation: '不 is naturally 4th tone (bù). However, when followed by another 4th tone, it changes to 2nd tone (bú). For example: 不是 (bú shì), not (bù shì).',
        tip: 'This happens naturally to make speech flow without two jarring falling tones in a row.'
      }
    ],
    vocabulary: [
      { hanzi: '妈', pinyin: 'mā', english: 'mother / mom', notes: '1st tone: high flat' },
      { hanzi: '麻', pinyin: 'má', english: 'hemp / numb', notes: '2nd tone: rising' },
      { hanzi: '马', pinyin: 'mǎ', english: 'horse', notes: '3rd tone: dipping' },
      { hanzi: '骂', pinyin: 'mà', english: 'to scold', notes: '4th tone: sharp fall' },
      { hanzi: '吗', pinyin: 'ma', english: 'question particle', notes: 'Neutral tone: light and short' },
      { hanzi: '不', pinyin: 'bù / bú', english: 'no / not', notes: 'Changes to bú before 4th tones' }
    ],
    dialogueOrSentences: [
      { speaker: 'Guide', hanzi: '妈妈骑马，马慢，妈妈骂马。', pinyin: 'Māma qí mǎ, mǎ màn, māma mà mǎ.', english: 'Mom rides a horse, the horse is slow, mom scolds the horse.', context: 'Classic Chinese tongue twister illustrating all 4 tones!' },
      { speaker: 'Learner', hanzi: '我不是学生。', pinyin: 'Wǒ bú shì xuésheng.', english: 'I am not a student.', context: 'Notice how 不 (bù) shifts to bú before the 4th-tone shì.' }
    ],
    culturalNote: 'Do not worry about exaggerating tones when starting out. Native speakers appreciate clarity over speed. With practice, natural tone contours become muscle memory.',
    exercises: [
      {
        id: 'u1l1-e1',
        type: 'multiple-choice',
        question: 'Which tone is pronounced with a high, steady pitch like holding a musical note?',
        options: ['1st Tone (ā)', '2nd Tone (á)', '3rd Tone (ǎ)', '4th Tone (à)'],
        correctAnswer: '1st Tone (ā)',
        explanation: 'The 1st tone is high and flat (pitch level 5-5), held steadily without rising or falling.'
      },
      {
        id: 'u1l1-e2',
        type: 'multiple-choice',
        question: 'How should "不是" (to not be) be pronounced according to Mandarin tone rules?',
        options: ['bù shì (two falling tones)', 'bú shì (2nd tone then 4th tone)', 'bǔ shì (3rd tone then 4th tone)', 'bu shì (neutral tone)'],
        correctAnswer: 'bú shì (2nd tone then 4th tone)',
        explanation: 'When 不 (bù) precedes another 4th tone (shì), it shifts to the 2nd tone (bú).'
      }
    ]
  },
  {
    id: 'lesson-2',
    unitId: 1,
    unitTitle: 'Unit 1 — Foundations',
    lessonNumber: 2,
    title: 'Hello & Everyday Greetings',
    subtitle: 'Choosing the right greeting for friends, elders, and colleagues',
    estimatedMinutes: 10,
    level: 'Beginner (HSK 1)',
    objectives: [
      'Greet peers and friends casually (你好, 嗨, 早)',
      'Use 您好 respectfully without sounding unnaturally stiff',
      'Learn parting expressions beyond just 再见'
    ],
    grammarAndUsage: [
      {
        title: '你 (nǐ) vs 您 (nín)',
        explanation: '你 is standard "you". 您 adds heart (心) underneath, making it a respectful address for elders, clients, teachers, or respected strangers. However, using 您 with classmates or close friends can create awkward social distance.',
        tip: 'In everyday life with peers, 你好 or simple 嗨 (hāi) is the warmest choice.'
      },
      {
        title: 'Morning Greetings',
        explanation: 'In real life, people rarely say the textbook 早上好 (zǎoshang hǎo) to familiar colleagues. Instead, they say a snappy 早！(zǎo!) or 早啊！(zǎo a!).',
        tip: 'Adding the particle 啊 (a) softens the tone and sounds genuinely friendly.'
      }
    ],
    vocabulary: [
      { hanzi: '你好', pinyin: 'nǐ hǎo', english: 'hello', notes: 'Standard greeting for anyone' },
      { hanzi: '您好', pinyin: 'nín hǎo', english: 'hello (respectful)', notes: 'Used for elders, superiors, guests' },
      { hanzi: '早', pinyin: 'zǎo', english: 'morning! (casual)', notes: 'Very common in offices and schools' },
      { hanzi: '早上好', pinyin: 'zǎoshang hǎo', english: 'good morning', notes: 'Polite / semi-formal' },
      { hanzi: '再见', pinyin: 'zàijiàn', english: 'goodbye', notes: 'Literally: see you again' },
      { hanzi: '拜拜', pinyin: 'báibái', english: 'bye-bye', notes: 'Extremely popular casual spoken farewell' }
    ],
    dialogueOrSentences: [
      { speaker: '小王 (Colleague)', hanzi: '早啊，小李！', pinyin: 'Zǎo a, Xiǎo Lǐ!', english: 'Morning, Xiao Li!', context: 'Casual morning greeting at the office door.' },
      { speaker: '小李 (Colleague)', hanzi: '早！今天天气真好。', pinyin: 'Zǎo! Jīntiān tiānqì zhēn hǎo.', english: 'Morning! The weather is really nice today.', context: 'Relaxed peer response.' },
      { speaker: '学生 (Student)', hanzi: '王老师，您好！', pinyin: 'Wáng lǎoshī, nín hǎo!', english: 'Hello, Teacher Wang!', context: 'Respectful greeting to a teacher.' }
    ],
    culturalNote: 'In Chinese culture, smiling warmly and saying "早！" when bumping into neighbors in the elevator creates instant rapport.',
    exercises: [
      {
        id: 'u1l2-e1',
        type: 'multiple-choice',
        question: 'You meet an elderly customer at your workplace. Which greeting is most respectful and appropriate?',
        options: ['嗨！(Hāi!)', '您好！(Nín hǎo!)', '拜拜！(Báibái!)', '喂！(Wèi!)'],
        correctAnswer: '您好！(Nín hǎo!)',
        explanation: '您好 conveys genuine politeness and respect toward elders, clients, and new acquaintances.'
      },
      {
        id: 'u1l2-e2',
        type: 'multiple-choice',
        question: 'What is the most common casual farewell used among friends and young people today?',
        options: ['拜拜 (báibái)', '您好 (nín hǎo)', '早上好 (zǎoshang hǎo)', '不客气 (bú kèqi)'],
        correctAnswer: '拜拜 (báibái)',
        explanation: '拜拜 (borrowed from English bye-bye) is ubiquitous in daily life, messaging, and friendly departures.'
      }
    ]
  },
  {
    id: 'lesson-3',
    unitId: 1,
    unitTitle: 'Unit 1 — Foundations',
    lessonNumber: 3,
    title: 'Introducing Yourself Naturally',
    subtitle: 'Names, pleasantries, and your first conversational exchange',
    estimatedMinutes: 10,
    level: 'Beginner (HSK 1)',
    objectives: [
      'State your full name and what you are called (我叫...)',
      'Ask someone their name politely using 请问',
      'Say "Pleased to meet you" naturally (很高兴认识你)'
    ],
    grammarAndUsage: [
      {
        title: '我叫 (wǒ jiào) vs 我是 (wǒ shì)',
        explanation: '我叫 literally means "I am called...". It is the most natural way to introduce your name: 我叫李明 (Wǒ jiào Lǐ Míng). 我是 (I am) is also used, especially on the phone or when identifying yourself from a group.',
        tip: 'To ask a peer: 你叫什么名字？(Nǐ jiào shénme míngzi?). To ask politely: 请问您贵姓？(Qǐngwèn nín guìxìng? - What is your honorable surname?).'
      }
    ],
    vocabulary: [
      { hanzi: '叫', pinyin: 'jiào', english: 'to be called / named', notes: 'Verb' },
      { hanzi: '名字', pinyin: 'míngzi', english: 'name', notes: 'Noun' },
      { hanzi: '什么', pinyin: 'shénme', english: 'what', notes: 'Question pronoun' },
      { hanzi: '高兴', pinyin: 'gāoxìng', english: 'happy / pleased', notes: 'Adjective' },
      { hanzi: '认识', pinyin: 'rènshi', english: 'to know / meet someone', notes: 'Verb' },
      { hanzi: '贵姓', pinyin: 'guìxìng', english: 'honorable surname', notes: 'Polite formula' }
    ],
    dialogueOrSentences: [
      { speaker: '张伟 (Zhang Wei)', hanzi: '你好！我叫张伟。你叫什么名字？', pinyin: 'Nǐ hǎo! Wǒ jiào Zhāng Wěi. Nǐ jiào shénme míngzi?', english: 'Hello! I am called Zhang Wei. What is your name?', context: 'Friendly intro at a meetup.' },
      { speaker: '大卫 (David)', hanzi: '你好，张伟！我叫大卫。很高兴认识你。', pinyin: 'Nǐ hǎo, Zhāng Wěi! Wǒ jiào Dàwèi. Hěn gāoxìng rènshi nǐ.', english: 'Hello, Zhang Wei! I am David. Very pleased to meet you.', context: 'Natural reciprocal response.' }
    ],
    culturalNote: 'In Chinese names, the family surname comes first, followed by the given name. For example, in 张伟 (Zhāng Wěi), 张 is the family name.',
    exercises: [
      {
        id: 'u1l3-e1',
        type: 'sentence-order',
        question: 'Arrange the words to say: "Pleased to meet you."',
        hanzi: '很高兴认识你',
        pinyin: 'Hěn gāoxìng rènshi nǐ',
        options: ['认识你', '很', '高兴'],
        correctAnswer: '很高兴认识你',
        explanation: 'Very (很) + pleased (高兴) + to meet/know you (认识你).'
      }
    ]
  },
  {
    id: 'lesson-4',
    unitId: 1,
    unitTitle: 'Unit 1 — Foundations',
    lessonNumber: 4,
    title: 'Countries & Nationalities',
    subtitle: 'Expressing where you come from and asking others',
    estimatedMinutes: 9,
    level: 'Beginner (HSK 1)',
    objectives: [
      'Learn the formula for nationalities: Country + 人 (rén)',
      'Ask someone where they are from: 你是哪国人？',
      'Name common countries in Chinese (中国, 美国, 英国, etc.)'
    ],
    grammarAndUsage: [
      {
        title: 'Country + 人 (rén) Pattern',
        explanation: 'Nationalities in Chinese are wonderfully simple: just take the country name and append 人 (person). 中国 (China) + 人 = 中国人 (Chinese person). 美国 (America) + 人 = 美国人 (American).',
        tip: '哪国人 (nǎ guó rén) literally means "which country person".'
      }
    ],
    vocabulary: [
      { hanzi: '国', pinyin: 'guó', english: 'country / nation', notes: 'Noun' },
      { hanzi: '人', pinyin: 'rén', english: 'person / people', notes: 'Noun' },
      { hanzi: '中国', pinyin: 'Zhōngguó', english: 'China', notes: 'Literally: Middle Kingdom' },
      { hanzi: '美国', pinyin: 'Měiguó', english: 'United States', notes: 'Literally: Beautiful Country' },
      { hanzi: '英国', pinyin: 'Yīngguó', english: 'United Kingdom', notes: 'Noun' },
      { hanzi: '哪', pinyin: 'nǎ', english: 'which', notes: 'Question word' }
    ],
    dialogueOrSentences: [
      { speaker: '王朋 (Wang Peng)', hanzi: '请问，你是哪国人？', pinyin: 'Qǐngwèn, nǐ shì nǎ guó rén?', english: 'May I ask, which country are you from?', context: 'Polite inquiry at language exchange.' },
      { speaker: '安娜 (Anna)', hanzi: '我是英国人。你呢？', pinyin: 'Wǒ shì Yīngguó rén. Nǐ ne?', english: 'I am British. And you?', context: 'Answering and bouncing question back with 呢.' }
    ],
    culturalNote: 'Foreign names of countries often phonetically resemble their original sound while choosing characters with positive meanings (e.g. 美 means beautiful, 英 means heroic).',
    exercises: [
      {
        id: 'u1l4-e1',
        type: 'multiple-choice',
        question: 'How do you say "I am American" in Chinese?',
        options: ['我是美国人 (Wǒ shì Měiguó rén)', '我是美国 (Wǒ shì Měiguó)', '我是人美国 (Wǒ shì rén Měiguó)', '我叫美国 (Wǒ jiào Měiguó)'],
        correctAnswer: '我是美国人 (Wǒ shì Měiguó rén)',
        explanation: 'You state "I am (我是) + Country (美国) + person (人)".'
      }
    ]
  },
  {
    id: 'lesson-5',
    unitId: 1,
    unitTitle: 'Unit 1 — Foundations',
    lessonNumber: 5,
    title: 'Pronouns & Plurals (们)',
    subtitle: 'Building sentences with I, you, he, she, and plural forms',
    estimatedMinutes: 8,
    level: 'Beginner (HSK 1)',
    objectives: [
      'Master singular pronouns: 我 (wǒ), 你 (nǐ), 他 (tā), 她 (tā)',
      'Form plurals effortlessly by appending 们 (men)',
      'Understand that 他 and 她 sound identical in speech'
    ],
    grammarAndUsage: [
      {
        title: 'The Plural Suffix 们 (men)',
        explanation: 'Simply add 们 (men, neutral tone) to any personal pronoun to make it plural: 我们 (we/us), 你们 (you plural), 他们 (they/them).',
        tip: 'In speech, 他 (he) and 她 (she) are both pronounced "tā". Only the written radical differs: 亻(person radical) vs 女 (female radical).'
      }
    ],
    vocabulary: [
      { hanzi: '我', pinyin: 'wǒ', english: 'I / me', notes: 'Pronoun' },
      { hanzi: '你', pinyin: 'nǐ', english: 'you (singular)', notes: 'Pronoun' },
      { hanzi: '他', pinyin: 'tā', english: 'he / him', notes: 'Person radical' },
      { hanzi: '她', pinyin: 'tā', english: 'she / her', notes: 'Female radical' },
      { hanzi: '我们', pinyin: 'wǒmen', english: 'we / us', notes: 'Plural' },
      { hanzi: '他们', pinyin: 'tāmen', english: 'they / them', notes: 'Plural' }
    ],
    dialogueOrSentences: [
      { speaker: '李明', hanzi: '我们都是汉语学生。', pinyin: 'Wǒmen dōu shì Hànyǔ xuésheng.', english: 'We are all Chinese language students.', context: 'Both/all: 都 (dōu).' },
      { speaker: '小芳', hanzi: '他们也是吗？', pinyin: 'Tāmen yě shì ma?', english: 'Are they also?', context: 'Also: 也 (yě).' }
    ],
    culturalNote: 'Chinese grammar does not conjugate verbs for different pronouns. Whether it is "I", "she", or "they", the verb (like 是, 去, 喝) never changes form!',
    exercises: [
      {
        id: 'u1l5-e1',
        type: 'multiple-choice',
        question: 'Which suffix makes pronouns plural in Mandarin?',
        options: ['们 (men)', '吗 (ma)', '呢 (ne)', '个 (ge)'],
        correctAnswer: '们 (men)',
        explanation: '们 (men) turns 我 into 我们 (we), 你 into 你们 (you all), 他 into 他们 (they).'
      }
    ]
  },
  {
    id: 'lesson-6',
    unitId: 1,
    unitTitle: 'Unit 1 — Foundations',
    lessonNumber: 6,
    title: 'Basic Questions with 吗 (ma) & 呢 (ne)',
    subtitle: 'Turning any statement into a yes/no question without word inversion',
    estimatedMinutes: 9,
    level: 'Beginner (HSK 1)',
    objectives: [
      'Turn statements into yes/no questions with 吗 (ma)',
      'Bounce questions back effortlessly with 呢 (ne) ("And you?")',
      'Ask and answer comfortably'
    ],
    grammarAndUsage: [
      {
        title: 'The Magic of 吗 (ma)',
        explanation: 'In English, making a question changes word order: "You are happy" -> "Are you happy?". In Mandarin, the word order stays 100% identical! Just add 吗 at the very end.',
        tip: 'Statement: 你好 (You are good). Question: 你好吗？(Are you good / How are you?).'
      },
      {
        title: 'Bouncing Back with 呢 (ne)',
        explanation: '呢 is a particle used for follow-up questions. "我很好，你呢？" (I am doing well, and you?). It saves you from repeating the entire question sentence.',
        tip: 'It is pronounced with a light neutral tone.'
      }
    ],
    vocabulary: [
      { hanzi: '吗', pinyin: 'ma', english: 'yes/no question marker', notes: 'Neutral tone' },
      { hanzi: '呢', pinyin: 'ne', english: 'and... / what about...', notes: 'Neutral tone' },
      { hanzi: '很', pinyin: 'hěn', english: 'very / quite', notes: 'Often links subject to adjective' },
      { hanzi: '好', pinyin: 'hǎo', english: 'good / well', notes: 'Adjective' },
      { hanzi: '也', pinyin: 'yě', english: 'also / too', notes: 'Adverb placed before verb' }
    ],
    dialogueOrSentences: [
      { speaker: '小林', hanzi: '你最近忙吗？', pinyin: 'Nǐ zuìjìn máng ma?', english: 'Have you been busy lately?', context: 'Friendly check-in.' },
      { speaker: '大山', hanzi: '我不忙，你呢？', pinyin: 'Wǒ bù máng, nǐ ne?', english: 'I am not busy, what about you?', context: 'Using 不 and bouncing with 呢.' }
    ],
    culturalNote: 'In casual daily Mandarin, friends often greet with specific questions like "吃了吗？" (Have you eaten?) or "去哪儿啊？" (Where are you heading?) rather than a formal "你好吗？".',
    exercises: [
      {
        id: 'u1l6-e1',
        type: 'multiple-choice',
        question: 'How do you turn "你是老师" (You are a teacher) into the question "Are you a teacher?"',
        options: ['你是老师吗？', '是你是老师？', '你是不是老师吗？', '老师你是吗？'],
        correctAnswer: '你是老师吗？',
        explanation: 'Simply tag 吗 at the end of the statement; word order does not change.'
      }
    ]
  }
];
