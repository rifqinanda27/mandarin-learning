import { Lesson } from '../../types';

export const unit2Lessons: Lesson[] = [
  {
    id: 'lesson-7',
    unitId: 2,
    unitTitle: 'Unit 2 — Everyday Life',
    lessonNumber: 7,
    title: 'Numbers & Essential Measure Words',
    subtitle: 'Counting from 1 to 100 and mastering 个 (ge), 杯 (bēi), 本 (běn)',
    estimatedMinutes: 10,
    level: 'Beginner (HSK 1)',
    objectives: [
      'Count 1–10 and form larger numbers up to 99 systematically',
      'Understand why Chinese requires measure words between numbers and nouns',
      'Master the universal measure word 个 and specific ones like 杯 (cup) and 本 (book)'
    ],
    grammarAndUsage: [
      {
        title: 'Number + Measure Word + Noun Formula',
        explanation: 'In English we say "two cups of tea" or "three sheets of paper". In Chinese, EVERY countable noun needs a measure word: "Number + Measure Word + Noun". For example: 一个人 (yí gè rén - one person), 两本书 (liǎng běn shū - two books).',
        tip: 'When counting quantities of 2, use 两 (liǎng), not 二 (èr). 二 is used for math, phone numbers, and digits (e.g. 12 = 十二).'
      }
    ],
    vocabulary: [
      { hanzi: '一', pinyin: 'yī', english: 'one', notes: 'Number' },
      { hanzi: '二 / 两', pinyin: 'èr / liǎng', english: 'two', notes: '两 for quantities with measure words' },
      { hanzi: '三', pinyin: 'sān', english: 'three', notes: 'Number' },
      { hanzi: '十', pinyin: 'shí', english: 'ten', notes: 'Number' },
      { hanzi: '个', pinyin: 'gè', english: 'general measure word', notes: 'Used for people, apples, objects' },
      { hanzi: '杯', pinyin: 'bēi', english: 'cup / glass (measure word)', notes: 'Used for drinks' }
    ],
    dialogueOrSentences: [
      { speaker: '顾客 (Customer)', hanzi: '你好，我要两杯水和一个苹果。', pinyin: 'Nǐ hǎo, wǒ yào liǎng bēi shuǐ hé yí gè píngguǒ.', english: 'Hello, I would like two glasses of water and one apple.', context: 'Notice 两杯 and 一个.' }
    ],
    culturalNote: 'Chinese hand gestures for numbers 1 to 10 can be done with a single hand! For example, 6 is pinky and thumb extended (like a "hang loose" sign), and 8 is thumb and index finger extended (like a gun shape).',
    exercises: [
      {
        id: 'u2l7-e1',
        type: 'multiple-choice',
        question: 'How do you say "two cups of water" in Mandarin?',
        options: ['两杯水 (liǎng bēi shuǐ)', '二杯水 (èr bēi shuǐ)', '两个水 (liǎng gè shuǐ)', '二水 (èr shuǐ)'],
        correctAnswer: '两杯水 (liǎng bēi shuǐ)',
        explanation: 'For counting two items, use 两 (liǎng), and for drinks in cups, use the measure word 杯 (bēi).'
      }
    ]
  },
  {
    id: 'lesson-8',
    unitId: 2,
    unitTitle: 'Unit 2 — Everyday Life',
    lessonNumber: 8,
    title: 'Dates, Days of the Week & Telling Time',
    subtitle: 'Structuring time from largest to smallest units',
    estimatedMinutes: 11,
    level: 'Beginner (HSK 1)',
    objectives: [
      'Understand the Chinese time hierarchy: Year -> Month -> Day -> Time',
      'Name days of the week effortlessly with 星期 (xīngqī) + Number',
      'Ask and answer "What time is it?" (现在几点？)'
    ],
    grammarAndUsage: [
      {
        title: 'From Big to Small Concept',
        explanation: 'Chinese always structures time, addresses, and dates from largest category to smallest: Year (年) -> Month (月) -> Day (日/号) -> Part of day (上午/下午) -> Hour (点) -> Minute (分).',
        tip: 'Days of the week are simply 星期 + 1 to 6 (Monday = 星期一, Saturday = 星期六). Sunday is 星期天 (xīngqītiān) or 星期日.'
      }
    ],
    vocabulary: [
      { hanzi: '今天', pinyin: 'jīntiān', english: 'today', notes: 'Time noun' },
      { hanzi: '明天', pinyin: 'míngtiān', english: 'tomorrow', notes: 'Time noun' },
      { hanzi: '昨天', pinyin: 'zuótiān', english: 'yesterday', notes: 'Time noun' },
      { hanzi: '星期', pinyin: 'xīngqī', english: 'week', notes: 'Noun' },
      { hanzi: '点', pinyin: 'diǎn', english: 'o’clock / dot', notes: 'Measure word for hour' },
      { hanzi: '分', pinyin: 'fēn', english: 'minute', notes: 'Measure word' }
    ],
    dialogueOrSentences: [
      { speaker: '小明', hanzi: '请问，现在几点了？', pinyin: 'Qǐngwèn, xiànzài jǐ diǎn le?', english: 'Excuse me, what time is it now?', context: 'Asking the time on the street.' },
      { speaker: '路人', hanzi: '现在下午三点半。', pinyin: 'Xiànzài xiàwǔ sān diǎn bàn.', english: 'It is 3:30 in the afternoon right now.', context: '半 (bàn) means half past.' }
    ],
    culturalNote: 'When arranging meetups, Chinese people often say "明天下午两点见" (Tomorrow afternoon 2 o’clock see you). The time always comes before the verb!',
    exercises: [
      {
        id: 'u2l8-e1',
        type: 'multiple-choice',
        question: 'How do you say "Friday" in Mandarin?',
        options: ['星期五 (xīngqī wǔ)', '星期四 (xīngqī sì)', '五星期 (wǔ xīngqī)', '星期天 (xīngqī tiān)'],
        correctAnswer: '星期五 (xīngqī wǔ)',
        explanation: 'Days of the week are formed by 星期 + number. Monday is 1, so Friday is 5: 星期五.'
      }
    ]
  },
  {
    id: 'lesson-9',
    unitId: 2,
    unitTitle: 'Unit 2 — Everyday Life',
    lessonNumber: 9,
    title: 'Family Members & Household',
    subtitle: 'Talking about parents, siblings, and family size',
    estimatedMinutes: 9,
    level: 'Beginner (HSK 1-2)',
    objectives: [
      'Identify immediate family members (爸爸, 妈妈, 哥哥, 妹妹)',
      'Ask how many people are in someone’s family (你家有几口人？)',
      'Use 有 (to have) and 没有 (to not have)'
    ],
    grammarAndUsage: [
      {
        title: 'Negating 有: Always Use 没有 (méiyǒu)',
        explanation: 'Never say 不有! The verb 有 (to have / exist) is uniquely negated with 没 (méi) -> 没有 (méiyǒu).',
        tip: 'Measure word for family members is 口 (kǒu, literally "mouth"). "我家有四口人" = My family has four members.'
      }
    ],
    vocabulary: [
      { hanzi: '家', pinyin: 'jiā', english: 'family / home', notes: 'Noun' },
      { hanzi: '爸爸', pinyin: 'bàba', english: 'father / dad', notes: 'Noun' },
      { hanzi: '妈妈', pinyin: 'māma', english: 'mother / mom', notes: 'Noun' },
      { hanzi: '哥哥', pinyin: 'gēge', english: 'older brother', notes: 'Noun' },
      { hanzi: '妹妹', pinyin: 'mèimei', english: 'younger sister', notes: 'Noun' },
      { hanzi: '有 / 没有', pinyin: 'yǒu / méiyǒu', english: 'to have / not have', notes: 'Verb' }
    ],
    dialogueOrSentences: [
      { speaker: '同事', hanzi: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', english: 'How many people are in your family?', context: 'Casual dinner chat.' },
      { speaker: '小李', hanzi: '我家有三口人：爸爸、妈妈和我。', pinyin: 'Wǒ jiā yǒu sān kǒu rén: bàba, māma hé wǒ.', english: 'My family has three people: dad, mom, and me.', context: 'Describing family.' }
    ],
    culturalNote: 'Chinese has distinct specific titles for older brother (哥哥), younger brother (弟弟), older sister (姐姐), and younger sister (妹妹). Birth order and generational ties are deeply respected.',
    exercises: [
      {
        id: 'u2l9-e1',
        type: 'multiple-choice',
        question: 'Which of the following is the correct way to say "I do not have an older brother"?',
        options: ['我没有哥哥 (Wǒ méiyǒu gēge)', '我不有哥哥 (Wǒ bù yǒu gēge)', '我不是哥哥 (Wǒ bú shì gēge)', '我没有姐姐 (Wǒ méiyǒu jiějie)'],
        correctAnswer: '我没有哥哥 (Wǒ méiyǒu gēge)',
        explanation: '有 is always negated with 没 (méi), giving 没有.'
      }
    ]
  },
  {
    id: 'lesson-10',
    unitId: 2,
    unitTitle: 'Unit 2 — Everyday Life',
    lessonNumber: 10,
    title: 'Ordering Food & Drinks at a Restaurant',
    subtitle: 'How to get a table, order delicious dishes, and ask for the bill',
    estimatedMinutes: 12,
    level: 'Beginner (HSK 1-2)',
    objectives: [
      'Call the server politely (服务员, fúwùyuán)',
      'Order dishes using 我要 (I want) or 来一个 (bring me one)',
      'Request the bill naturally (买单, mǎidān or 结账, jiézhàng)'
    ],
    grammarAndUsage: [
      {
        title: 'The Natural Way to Order: 来 (lái)',
        explanation: 'While 我要 (I want) is fine, native speakers frequently use 来 (lái, literally "to come") when ordering food: "来一份炒饭" (Bring a portion of fried rice) or "来一瓶可乐" (Bring a bottle of cola). It sounds friendly and authentic.',
        tip: 'In southern China and casual spots, 买单 (mǎidān) is the most common phrase for getting the bill. In northern formal settings, 结账 (jiézhàng) is also very popular.'
      }
    ],
    vocabulary: [
      { hanzi: '服务员', pinyin: 'fúwùyuán', english: 'waiter / server', notes: 'Polite address' },
      { hanzi: '点菜', pinyin: 'diǎncài', english: 'to order food', notes: 'Verb-object' },
      { hanzi: '菜单', pinyin: 'càidān', english: 'menu', notes: 'Noun' },
      { hanzi: '水', pinyin: 'shuǐ', english: 'water', notes: 'Noun' },
      { hanzi: '米饭', pinyin: 'mǐfàn', english: 'cooked rice', notes: 'Noun' },
      { hanzi: '买单', pinyin: 'mǎidān', english: 'to pay the bill', notes: 'Everyday expression' }
    ],
    dialogueOrSentences: [
      { speaker: '顾客', hanzi: '服务员，你好！我们要点菜。', pinyin: 'Fúwùyuán, nǐ hǎo! Wǒmen yào diǎncài.', english: 'Waiter, hello! We are ready to order.', context: 'Calling server politely.' },
      { speaker: '服务员', hanzi: '好的，请问喝点什么？', pinyin: 'Hǎo de, qǐngwèn hē diǎn shénme?', english: 'Sure, may I ask what you would like to drink?', context: 'Server taking orders.' },
      { speaker: '顾客', hanzi: '来一壶热茶，谢谢。', pinyin: 'Lái yì hú rè chá, xièxie.', english: 'Bring a pot of hot tea, thank you.', context: 'Natural ordering with 来.' }
    ],
    culturalNote: 'In China, hot tea or warm water is served standard with meals. If you want cold water, be sure to ask for 冰水 (bīng shuǐ).',
    exercises: [
      {
        id: 'u2l10-e1',
        type: 'multiple-choice',
        question: 'What is the natural and common way to ask for the bill at a restaurant?',
        options: ['服务员，买单！(Fúwùyuán, mǎidān!)', '给我钱！(Gěi wǒ qián!)', '多少钱？(Duōshao qián?)', '再见！(Zàijiàn!)'],
        correctAnswer: '服务员，买单！(Fúwùyuán, mǎidān!)',
        explanation: 'Calling "服务员，买单！" is the standard polite way to request the bill in everyday restaurants.'
      }
    ]
  },
  {
    id: 'lesson-11',
    unitId: 2,
    unitTitle: 'Unit 2 — Everyday Life',
    lessonNumber: 11,
    title: 'Shopping, Prices & Polite Bargaining',
    subtitle: 'Inquiring costs, currency units (块/元), and negotiating politely',
    estimatedMinutes: 11,
    level: 'Beginner (HSK 2)',
    objectives: [
      'Ask prices: 这个多少钱？(How much is this?)',
      'Understand spoken currency units: 块 (kuài) vs written 元 (yuán)',
      'Politely request discounts: 可以便宜一点吗？(Can it be a little cheaper?)'
    ],
    grammarAndUsage: [
      {
        title: '块 (kuài) vs 元 (yuán)',
        explanation: '元 (yuán) is the formal written currency name on price tags and receipts. In spoken Mandarin, nearly everyone says 块 (kuài): 10 块钱 = 10 yuan.',
        tip: 'To ask for a discount politely, say "可以便宜一点吗？" (Kěyǐ piányi yìdiǎn ma?). Adding 一点 (a little) softens the request noticeably.'
      }
    ],
    vocabulary: [
      { hanzi: '多少钱', pinyin: 'duōshao qián', english: 'how much money', notes: 'Question phrase' },
      { hanzi: '块 / 元', pinyin: 'kuài / yuán', english: 'yuan (currency)', notes: '块 spoken, 元 written' },
      { hanzi: '太...了', pinyin: 'tài... le', english: 'too... / extremely', notes: 'Grammar pattern' },
      { hanzi: '贵', pinyin: 'guì', english: 'expensive', notes: 'Adjective' },
      { hanzi: '便宜', pinyin: 'piányi', english: 'cheap / inexpensive', notes: 'Adjective' },
      { hanzi: '一点', pinyin: 'yìdiǎn', english: 'a little bit', notes: 'Softener' }
    ],
    dialogueOrSentences: [
      { speaker: '顾客', hanzi: '老板，这件衣服多少钱？', pinyin: 'Lǎobǎn, zhè jiàn yīfu duōshao qián?', english: 'Boss (shopkeeper), how much is this clothing item?', context: 'Boutique or market.' },
      { speaker: '老板', hanzi: '一百块。', pinyin: 'Yì bǎi kuài.', english: 'One hundred yuan.', context: 'Seller price.' },
      { speaker: '顾客', hanzi: '有点贵，可以便宜一点吗？八十块行不行？', pinyin: 'Yǒudiǎn guì, kěyǐ piányi yìdiǎn ma? Bāshí kuài xíng bu xíng?', english: 'A bit pricey, can you make it a little cheaper? Does 80 work?', context: 'Polite bargaining.' }
    ],
    culturalNote: 'Bargaining is common in street markets and tourist stalls, but prices in modern shopping malls, supermarkets, and chain convenience stores are strictly fixed (明码标价).',
    exercises: [
      {
        id: 'u2l11-e1',
        type: 'multiple-choice',
        question: 'Which word is the everyday spoken term for the Chinese currency unit (equivalent to dollars/bucks)?',
        options: ['块 (kuài)', '分 (fēn)', '天 (tiān)', '口 (kǒu)'],
        correctAnswer: '块 (kuài)',
        explanation: 'In everyday spoken Chinese, 块 (kuài) is universally used for currency amounts.'
      }
    ]
  },
  {
    id: 'lesson-12',
    unitId: 2,
    unitTitle: 'Unit 2 — Everyday Life',
    lessonNumber: 12,
    title: 'Directions & Public Transportation',
    subtitle: 'Navigating streets, the metro, and taxis with confidence',
    estimatedMinutes: 12,
    level: 'Beginner (HSK 2)',
    objectives: [
      'Ask where a location is using 在哪里 (zài nǎlǐ)',
      'Understand directions: 往前走 (go straight), 往左拐 (turn left), 往右拐 (turn right)',
      'Talk about taking the subway (坐地铁) and taking a taxi (打车)'
    ],
    grammarAndUsage: [
      {
        title: '往 (wǎng) + Direction + Verb Pattern',
        explanation: '往 means "toward". To give directions, combine: 往 + Direction + 走 (walk) or 拐 (turn). 往前走 (Walk forward / straight ahead), 往左拐 (Turn left), 往右拐 (Turn right).',
        tip: 'Always start with "请问" (Qǐngwèn, May I ask / Excuse me) when approaching a stranger for directions.'
      }
    ],
    vocabulary: [
      { hanzi: '在哪里', pinyin: 'zài nǎlǐ', english: 'where is...', notes: 'Location question' },
      { hanzi: '地铁站', pinyin: 'dìtiě zhàn', english: 'subway station', notes: 'Noun' },
      { hanzi: '往前走', pinyin: 'wǎng qián zǒu', english: 'walk straight ahead', notes: 'Direction phrase' },
      { hanzi: '左 / 右', pinyin: 'zuǒ / yòu', english: 'left / right', notes: 'Directions' },
      { hanzi: '坐', pinyin: 'zuò', english: 'to sit / take (transport)', notes: 'Verb' },
      { hanzi: '打车', pinyin: 'dǎchē', english: 'to take a taxi / ride-hail', notes: 'Everyday verb-object' }
    ],
    dialogueOrSentences: [
      { speaker: '游客 (Tourist)', hanzi: '请问，地铁站怎么走？', pinyin: 'Qǐngwèn, dìtiě zhàn zěnme zǒu?', english: 'Excuse me, how do I get to the subway station?', context: 'Asking a pedestrian.' },
      { speaker: '路人 (Pedestrian)', hanzi: '一直往前走，在路口往右拐就到了。', pinyin: 'Yìzhí wǎng qián zǒu, zài lùkǒu wǎng yòu guǎi jiù dào le.', english: 'Go straight ahead, turn right at the intersection and you’re there.', context: 'Clear concise direction.' }
    ],
    culturalNote: 'In major Chinese cities, the subway (地铁) is fast, clean, and has English signage everywhere. You can usually swipe in directly using your phone wallet or transit app.',
    exercises: [
      {
        id: 'u2l12-e1',
        type: 'multiple-choice',
        question: 'What does "往左拐" (wǎng zuǒ guǎi) mean?',
        options: ['Turn left', 'Turn right', 'Go straight', 'Stop here'],
        correctAnswer: 'Turn left',
        explanation: '往 (toward) + 左 (left) + 拐 (turn) means "turn left".'
      }
    ]
  }
];
