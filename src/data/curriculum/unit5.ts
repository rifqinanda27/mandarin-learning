import { Lesson } from '../../types';

export const unit5Lessons: Lesson[] = [
  {
    id: 'lesson-25',
    unitId: 5,
    unitTitle: 'Unit 5 — Reading for Real Life',
    lessonNumber: 25,
    title: 'Deciphering Restaurant Menus',
    subtitle: 'Categorizing dishes, understanding spice levels, and finding specialties',
    estimatedMinutes: 12,
    level: 'Elementary to Intermediate (HSK 2-3)',
    objectives: [
      'Navigate Chinese menu categories: 热菜 (hot dishes), 凉菜 (cold dishes), 主食 (staples)',
      'Identify spice levels: 微辣 (mild), 中辣 (medium), 重辣 (very spicy), 不辣 (non-spicy)',
      'Spot house specialties: 招牌菜 (signature dish)'
    ],
    grammarAndUsage: [
      {
        title: 'Decoding Chinese Dish Names',
        explanation: 'Chinese dish names usually follow a clear formula: Cooking Method (炒 fried, 烤 roasted, 煮 boiled) + Ingredient (牛肉 beef, 鸡 chicken, 豆腐 tofu). For example: 宫保鸡丁 (Kung Pao Chicken), 麻婆豆腐 (Mapo Tofu).',
        tip: 'Look for 招牌 (zhāopái) on menus; it signifies the restaurant’s chef recommendation.'
      }
    ],
    vocabulary: [
      { hanzi: '招牌菜', pinyin: 'zhāopáicài', english: 'signature dish / specialty', notes: 'Menu term' },
      { hanzi: '热菜 / 凉菜', pinyin: 'rècài / liángcài', english: 'hot dishes / cold dishes', notes: 'Categories' },
      { hanzi: '主食', pinyin: 'zhǔshí', english: 'staple food (rice, noodles, buns)', notes: 'Category' },
      { hanzi: '微辣', pinyin: 'wēilà', english: 'mildly spicy', notes: 'Spice level' },
      { hanzi: '不辣', pinyin: 'bù là', english: 'not spicy', notes: 'Spice level' },
      { hanzi: '牛肉', pinyin: 'niúròu', english: 'beef', notes: 'Ingredient' }
    ],
    dialogueOrSentences: [
      { speaker: '菜单阅读', hanzi: '【招牌热菜】红烧牛肉 ￥48；宫保鸡丁（微辣） ￥36。', pinyin: '【Zhāopái Rècài】Hóngshāo niúròu 48 yuán; Gōngbǎo jīdīng (wēilà) 36 yuán.', english: '【Signature Hot Dishes】Braised beef 48 RMB; Kung Pao chicken (mild) 36 RMB.', context: 'Reading a real menu header.' }
    ],
    culturalNote: 'In China, dishes are typically placed in the center on a lazy Susan and shared family-style rather than eaten as individual entrées.',
    exercises: [
      {
        id: 'u5l25-e1',
        type: 'multiple-choice',
        question: 'If you want only a tiny hint of chili in your food, which spice level should you choose?',
        options: ['微辣 (wēilà)', '特辣 (tèlà)', '重辣 (zhònglà)', '麻辣 (málà)'],
        correctAnswer: '微辣 (wēilà)',
        explanation: '微辣 means mild / slight spice.'
      }
    ]
  },
  {
    id: 'lesson-26',
    unitId: 5,
    unitTitle: 'Unit 5 — Reading for Real Life',
    lessonNumber: 26,
    title: 'Street Signs, Transport & Metro Notices',
    subtitle: 'Navigating exits, entrances, metro line transfers, and safety warnings',
    estimatedMinutes: 11,
    level: 'Elementary (HSK 2)',
    objectives: [
      'Recognize directional signage: 入口 (Entrance), 出口 (Exit), 换乘 (Transfer)',
      'Read public warnings: 请勿吸烟 (No smoking), 小心地滑 (Caution: Wet floor)',
      'Navigate train platforms and bus stops independently'
    ],
    grammarAndUsage: [
      {
        title: 'The Written Prohibition Word: 请勿 (qǐng wù)',
        explanation: 'In spoken Chinese, people say 别 (bié - don’t). On official signs and posters, you will always see 请勿 (qǐng wù - please do not): 请勿吸烟 (No smoking), 请勿靠门 (Please do not lean on doors).',
        tip: '出口 A / B / C / D are crucial in Chinese mega-stations to exit near your destination.'
      }
    ],
    vocabulary: [
      { hanzi: '入口', pinyin: 'rùkǒu', english: 'entrance', notes: 'Sign' },
      { hanzi: '出口', pinyin: 'chūkǒu', english: 'exit', notes: 'Sign' },
      { hanzi: '换乘', pinyin: 'huànchéng', english: 'to transfer (lines / trains)', notes: 'Transit sign' },
      { hanzi: '请勿', pinyin: 'qǐng wù', english: 'please do not (formal sign)', notes: 'Prohibition' },
      { hanzi: '小心', pinyin: 'xiǎoxīn', english: 'careful / caution', notes: 'Warning' }
    ],
    dialogueOrSentences: [
      { speaker: '地铁广播', hanzi: '前方到站人民广场站，请换乘一号线的乘客做好准备。', pinyin: 'Qiánfāng dào zhàn Rénmín Guǎngchǎng zhàn, qǐng huànchéng Yī hào xiàn de chéngkè zuò hǎo zhǔnbèi.', english: 'Next stop is People’s Square Station, passengers transferring to Line 1 please get ready.', context: 'Subway announcement.' }
    ],
    culturalNote: 'Metro stations in cities like Beijing and Shanghai have numerous lettered exits (A, B, C...). Checking the exit map saves you from crossing vast highways on foot.',
    exercises: [
      {
        id: 'u5l26-e1',
        type: 'multiple-choice',
        question: 'What does the sign "出口" indicate?',
        options: ['Exit', 'Entrance', 'Restroom', 'Ticket Office'],
        correctAnswer: 'Exit',
        explanation: '出 (out) + 口 (opening/gate) means Exit.'
      }
    ]
  },
  {
    id: 'lesson-27',
    unitId: 5,
    unitTitle: 'Unit 5 — Reading for Real Life',
    lessonNumber: 27,
    title: 'Prices, Receipts & Mobile Pay Notices',
    subtitle: 'Decoding 扫码支付, WeChat Pay, Alipay, and official tax receipts',
    estimatedMinutes: 10,
    level: 'Elementary to Intermediate (HSK 2-3)',
    objectives: [
      'Recognize payment signs: 扫码支付 (Scan to pay), 微信支付, 支付宝',
      'Understand receipt vocabulary: 合计 (Total), 实付 (Amount paid), 发票 (Invoice)',
      'Ask: 可以微信支付吗？(Can I pay with WeChat?)'
    ],
    grammarAndUsage: [
      {
        title: 'Mobile Payment in China',
        explanation: 'Cash is rarely used in daily Chinese life. The two major methods are 微信支付 (WeChat Pay) and 支付宝 (Alipay). The verb is 扫 (sǎo - to scan): "我扫你" (I scan your code) or "你扫我" (You scan my code).',
        tip: '扫码 (sǎomǎ) means "scan QR code".'
      }
    ],
    vocabulary: [
      { hanzi: '扫码', pinyin: 'sǎomǎ', english: 'to scan QR code', notes: 'Everyday tech verb' },
      { hanzi: '微信支付', pinyin: 'Wēixìn zhīfù', english: 'WeChat Pay', notes: 'Proper noun' },
      { hanzi: '支付宝', pinyin: 'Zhīfùbǎo', english: 'Alipay', notes: 'Proper noun' },
      { hanzi: '发票', pinyin: 'fāpiào', english: 'tax invoice / official receipt', notes: 'Noun' },
      { hanzi: '合计', pinyin: 'héjì', english: 'total amount', notes: 'Receipt term' }
    ],
    dialogueOrSentences: [
      { speaker: '顾客', hanzi: '老板，可以微信扫码吗？', pinyin: 'Lǎobǎn, kěyǐ Wēixìn sǎomǎ ma?', english: 'Boss, can I scan WeChat QR code?', context: 'Paying at a fruit stall.' },
      { speaker: '店主', hanzi: '可以，桌子上有二维码，扫那个就行！', pinyin: 'Kěyǐ, zhuōzi shang yǒu èrwéimǎ, sǎo nà ge jiù xíng!', english: 'Sure, there is a QR code on the table, just scan that one!', context: 'Common payment flow.' }
    ],
    culturalNote: 'Both Alipay and WeChat Pay now allow international bank cards (Visa/Mastercard) to be linked, making digital payment accessible for international visitors.',
    exercises: [
      {
        id: 'u5l27-e1',
        type: 'multiple-choice',
        question: 'What does "扫码" literally mean?',
        options: ['Scan code', 'Pay cash', 'Take credit card', 'Write receipt'],
        correctAnswer: 'Scan code',
        explanation: '扫 (scan) + 码 (code) is the ubiquitous term for scanning QR codes.'
      }
    ]
  },
  {
    id: 'lesson-28',
    unitId: 5,
    unitTitle: 'Unit 5 — Reading for Real Life',
    lessonNumber: 28,
    title: 'Notices, Invitations & Everyday Bulletins',
    subtitle: 'Extracting key dates, locations, opening hours, and requirements',
    estimatedMinutes: 11,
    level: 'Intermediate (HSK 3)',
    objectives: [
      'Read business hours: 营业时间 (Opening hours: 09:00 - 21:00)',
      'Identify key invitation details: 时间 (time), 地点 (location), 参加人员 (attendees)',
      'Understand community notices: 停水/停电通知 (water/power maintenance)'
    ],
    grammarAndUsage: [
      {
        title: 'Extracting Information Efficiently',
        explanation: 'Chinese public notices use clear bulleted labels:\n- 时间 (Shíjiān): Time\n- 地点 (Dìdiǎn): Location\n- 内容 (Nèiróng): Content\n- 电话 (Diànhuà): Telephone.\nLook for these anchors to find what you need quickly.',
        tip: '营业 (yíngyè) means doing business. "暂停营业" means temporarily closed.'
      }
    ],
    vocabulary: [
      { hanzi: '营业时间', pinyin: 'yíngyè shíjiān', english: 'business hours', notes: 'Store sign' },
      { hanzi: '地点', pinyin: 'dìdiǎn', english: 'location / venue', notes: 'Noun' },
      { hanzi: '通知', pinyin: 'tōngzhī', english: 'notice / announcement / to notify', notes: 'Noun/Verb' },
      { hanzi: '欢迎', pinyin: 'huānyíng', english: 'welcome', notes: 'Greeting' }
    ],
    dialogueOrSentences: [
      { speaker: '咖啡馆海报', hanzi: '【周末读书会通知】时间：周日下午三点；地点：二楼阅览区；欢迎大家参加！', pinyin: '【Zhōumò Dúshūhuì Tōngzhī】Shíjiān: Zhōurì xiàwǔ sān diǎn; Dìdiǎn: Èr lóu yuèlǎn qū; Huānyíng dàjiā cānjiā!', english: '【Weekend Book Club Notice】Time: Sunday 3 PM; Location: 2nd floor reading area; Everyone is welcome to attend!', context: 'Real café notice board.' }
    ],
    culturalNote: 'Reading short real-world notices builds confidence rapidly because the grammatical structure is concise and information-rich.',
    exercises: [
      {
        id: 'u5l28-e1',
        type: 'multiple-choice',
        question: 'Under which heading in a notice would you look to find the address of an event?',
        options: ['地点 (dìdiǎn)', '时间 (shíjiān)', '通知 (tōngzhī)', '人员 (rényuán)'],
        correctAnswer: '地点 (dìdiǎn)',
        explanation: '地点 means location / place.'
      }
    ]
  }
];
