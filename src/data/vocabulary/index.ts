import { VocabWord } from '../../types';

export const vocabularyList: VocabWord[] = [
  // --- GREETINGS & BASICS (1 - 15) ---
  {
    id: 'v-1',
    hanzi: '你好',
    pinyin: 'nǐ hǎo',
    english: 'hello',
    partOfSpeech: 'Greeting',
    hskLevel: 1,
    topic: 'Greetings',
    example: { hanzi: '你好！很高兴认识你。', pinyin: 'Nǐ hǎo! Hěn gāoxìng rènshi nǐ.', english: 'Hello! Pleased to meet you.' },
    usageNote: 'Universal greeting suitable for any situation.'
  },
  {
    id: 'v-2',
    hanzi: '您好',
    pinyin: 'nín hǎo',
    english: 'hello (respectful)',
    partOfSpeech: 'Greeting',
    hskLevel: 1,
    topic: 'Greetings',
    example: { hanzi: '张教授，您好！', pinyin: 'Zhāng jiàoshòu, nín hǎo!', english: 'Hello, Professor Zhang!' },
    usageNote: 'Respectful form for elders, clients, and professors.'
  },
  {
    id: 'v-3',
    hanzi: '早',
    pinyin: 'zǎo',
    english: 'morning! (casual)',
    partOfSpeech: 'Greeting',
    hskLevel: 1,
    topic: 'Greetings',
    example: { hanzi: '小李，早啊！', pinyin: 'Xiǎo Lǐ, zǎo a!', english: 'Xiao Li, morning!' },
    usageNote: 'Everyday morning greeting in offices and schools.'
  },
  {
    id: 'v-4',
    hanzi: '再见',
    pinyin: 'zàijiàn',
    english: 'goodbye',
    partOfSpeech: 'Farewell',
    hskLevel: 1,
    topic: 'Greetings',
    example: { hanzi: '明天见，再见！', pinyin: 'Míngtiān jiàn, zàijiàn!', english: 'See you tomorrow, goodbye!' },
    usageNote: 'Standard polite farewell.'
  },
  {
    id: 'v-5',
    hanzi: '拜拜',
    pinyin: 'báibái',
    english: 'bye-bye',
    partOfSpeech: 'Farewell',
    hskLevel: 1,
    topic: 'Greetings',
    example: { hanzi: '我先走了，拜拜！', pinyin: 'Wǒ xiān zǒu le, báibái!', english: 'I’m leaving now, bye-bye!' },
    usageNote: 'Informal, friendly parting used by all ages.'
  },
  {
    id: 'v-6',
    hanzi: '谢谢',
    pinyin: 'xièxie',
    english: 'thank you / thanks',
    partOfSpeech: 'Expression',
    hskLevel: 1,
    topic: 'Social & Politeness',
    example: { hanzi: '太谢谢你的帮助了！', pinyin: 'Tài xièxie nǐ de bāngzhù le!', english: 'Thank you so much for your help!' }
  },
  {
    id: 'v-7',
    hanzi: '不客气',
    pinyin: 'bú kèqi',
    english: 'you’re welcome',
    partOfSpeech: 'Expression',
    hskLevel: 1,
    topic: 'Social & Politeness',
    example: { hanzi: '不用谢，不客气！', pinyin: 'Búyòng xiè, bú kèqi!', english: 'No need to thank, you’re welcome!' }
  },
  {
    id: 'v-8',
    hanzi: '不好意思',
    pinyin: 'bù hǎoyìsi',
    english: 'excuse me / sorry (mild)',
    partOfSpeech: 'Expression',
    hskLevel: 1,
    topic: 'Social & Politeness',
    example: { hanzi: '不好意思，借过一下。', pinyin: 'Bù hǎoyìsi, jièguò yíxià.', english: 'Excuse me, let me pass for a second.' },
    usageNote: 'The go-to phrase for everyday minor social frictions.'
  },
  {
    id: 'v-9',
    hanzi: '对不起',
    pinyin: 'duìbuqǐ',
    english: 'I’m sorry (apology for fault)',
    partOfSpeech: 'Expression',
    hskLevel: 1,
    topic: 'Social & Politeness',
    example: { hanzi: '对不起，我迟到了。', pinyin: 'Duìbuqǐ, wǒ chídào le.', english: 'I’m sorry, I am late.' }
  },
  {
    id: 'v-10',
    hanzi: '没关系',
    pinyin: 'méi guānxi',
    english: 'it’s okay / no problem',
    partOfSpeech: 'Expression',
    hskLevel: 1,
    topic: 'Social & Politeness',
    example: { hanzi: '没关系，我不介意。', pinyin: 'Méi guānxi, wǒ bú jièyì.', english: 'It’s okay, I don’t mind.' },
    usageNote: 'Standard polite reply to 对不起.'
  },
  {
    id: 'v-11',
    hanzi: '请问',
    pinyin: 'qǐngwèn',
    english: 'may I ask / excuse me',
    partOfSpeech: 'Phrase',
    hskLevel: 1,
    topic: 'Social & Politeness',
    example: { hanzi: '请问洗手间在哪里？', pinyin: 'Qǐngwèn xǐshǒujiān zài nǎlǐ?', english: 'Excuse me, where is the restroom?' },
    usageNote: 'Essential polite prefix when asking strangers for info.'
  },
  {
    id: 'v-12',
    hanzi: '麻烦你',
    pinyin: 'máfán nǐ',
    english: 'may I trouble you to...',
    partOfSpeech: 'Phrase',
    hskLevel: 2,
    topic: 'Social & Politeness',
    example: { hanzi: '麻烦你帮我拿一下外套。', pinyin: 'Máfan nǐ bāng wǒ ná yíxià wàitào.', english: 'Trouble you to grab my jacket for a sec.' }
  },
  {
    id: 'v-13',
    hanzi: '辛苦了',
    pinyin: 'xīnkǔ le',
    english: 'thank you for your hard work',
    partOfSpeech: 'Expression',
    hskLevel: 2,
    topic: 'Work & School',
    example: { hanzi: '大家今天辛苦了，早点休息！', pinyin: 'Dàjiā jīntiān xīnkǔ le, zǎodiǎn xiūxi!', english: 'Everyone worked hard today, rest early!' }
  },
  {
    id: 'v-14',
    hanzi: '好的',
    pinyin: 'hǎo de',
    english: 'okay / will do',
    partOfSpeech: 'Interjection',
    hskLevel: 1,
    topic: 'Social & Politeness',
    example: { hanzi: '好的，我马上处理。', pinyin: 'Hǎo de, wǒ mǎshàng chǔlǐ.', english: 'Okay, I will handle it immediately.' }
  },
  {
    id: 'v-15',
    hanzi: '收到',
    pinyin: 'shōudào',
    english: 'received / got it',
    partOfSpeech: 'Verb',
    hskLevel: 2,
    topic: 'Work & School',
    example: { hanzi: '收到通知，明天准时参加。', pinyin: 'Shōudào tōngzhī, míngtiān zhǔnshí cānjiā.', english: 'Received the notice, will attend on time tomorrow.' }
  },

  // --- PRONOUNS & PEOPLE (16 - 30) ---
  {
    id: 'v-16',
    hanzi: '我',
    pinyin: 'wǒ',
    english: 'I / me',
    partOfSpeech: 'Pronoun',
    hskLevel: 1,
    topic: 'People',
    example: { hanzi: '我是大学生。', pinyin: 'Wǒ shì dàxuésheng.', english: 'I am a university student.' }
  },
  {
    id: 'v-17',
    hanzi: '你',
    pinyin: 'nǐ',
    english: 'you (singular)',
    partOfSpeech: 'Pronoun',
    hskLevel: 1,
    topic: 'People',
    example: { hanzi: '你是哪国人？', pinyin: 'Nǐ shì nǎ guó rén?', english: 'Which country are you from?' }
  },
  {
    id: 'v-18',
    hanzi: '他',
    pinyin: 'tā',
    english: 'he / him',
    partOfSpeech: 'Pronoun',
    hskLevel: 1,
    topic: 'People',
    example: { hanzi: '他是我的中文老师。', pinyin: 'Tā shì wǒ de Zhōngwén lǎoshī.', english: 'He is my Chinese teacher.' }
  },
  {
    id: 'v-19',
    hanzi: '她',
    pinyin: 'tā',
    english: 'she / her',
    partOfSpeech: 'Pronoun',
    hskLevel: 1,
    topic: 'People',
    example: { hanzi: '她喜欢听音乐。', pinyin: 'Tā xǐhuan tīng yīnyuè.', english: 'She likes listening to music.' }
  },
  {
    id: 'v-20',
    hanzi: '我们',
    pinyin: 'wǒmen',
    english: 'we / us',
    partOfSpeech: 'Pronoun',
    hskLevel: 1,
    topic: 'People',
    example: { hanzi: '我们都是好朋友。', pinyin: 'Wǒmen dōu shì hǎo péngyou.', english: 'We are all good friends.' }
  },
  {
    id: 'v-21',
    hanzi: '他们',
    pinyin: 'tāmen',
    english: 'they / them',
    partOfSpeech: 'Pronoun',
    hskLevel: 1,
    topic: 'People',
    example: { hanzi: '他们去图书馆了。', pinyin: 'Tāmen qù túshūguǎn le.', english: 'They went to the library.' }
  },
  {
    id: 'v-22',
    hanzi: '朋友',
    pinyin: 'péngyou',
    english: 'friend',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'People',
    example: { hanzi: '我有很多中国朋友。', pinyin: 'Wǒ yǒu hěn duō Zhōngguó péngyou.', english: 'I have many Chinese friends.' }
  },
  {
    id: 'v-23',
    hanzi: '老师',
    pinyin: 'lǎoshī',
    english: 'teacher',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Work & School',
    example: { hanzi: '王老师教我们汉字。', pinyin: 'Wáng lǎoshī jiāo wǒmen Hànzì.', english: 'Teacher Wang teaches us Chinese characters.' }
  },
  {
    id: 'v-24',
    hanzi: '学生',
    pinyin: 'xuésheng',
    english: 'student',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Work & School',
    example: { hanzi: '这里有很多外国学生。', pinyin: 'Zhèlǐ yǒu hěn duō wàiguó xuésheng.', english: 'There are many foreign students here.' }
  },
  {
    id: 'v-25',
    hanzi: '同事',
    pinyin: 'tóngshì',
    english: 'colleague / coworker',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Work & School',
    example: { hanzi: '我和同事一起吃午饭。', pinyin: 'Wǒ hé tóngshì yìqǐ chī wǔfàn.', english: 'I eat lunch with my coworkers.' }
  },
  {
    id: 'v-26',
    hanzi: '爸爸',
    pinyin: 'bàba',
    english: 'father / dad',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'People',
    example: { hanzi: '我爸爸是一名医生。', pinyin: 'Wǒ bàba shì yì míng yīshēng.', english: 'My dad is a doctor.' }
  },
  {
    id: 'v-27',
    hanzi: '妈妈',
    pinyin: 'māma',
    english: 'mother / mom',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'People',
    example: { hanzi: '我妈妈做饭很好吃。', pinyin: 'Wǒ māma zuò fàn hěn hǎochī.', english: 'My mom cooks delicious food.' }
  },
  {
    id: 'v-28',
    hanzi: '哥哥',
    pinyin: 'gēge',
    english: 'older brother',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'People',
    example: { hanzi: '我哥哥在北京工作。', pinyin: 'Wǒ gēge zài Běijīng gōngzuò.', english: 'My older brother works in Beijing.' }
  },
  {
    id: 'v-29',
    hanzi: '妹妹',
    pinyin: 'mèimei',
    english: 'younger sister',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'People',
    example: { hanzi: '我妹妹今年十岁。', pinyin: 'Wǒ mèimei jīnnián shí suì.', english: 'My younger sister is ten years old this year.' }
  },
  {
    id: 'v-30',
    hanzi: '家人',
    pinyin: 'jiārén',
    english: 'family members',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'People',
    example: { hanzi: '我和家人一起过春节。', pinyin: 'Wǒ hé jiārén yìqǐ guò Chūnjié.', english: 'I celebrate Spring Festival with my family.' }
  },

  // --- NUMBERS & MEASURE WORDS (31 - 50) ---
  {
    id: 'v-31',
    hanzi: '一',
    pinyin: 'yī',
    english: 'one',
    partOfSpeech: 'Number',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '一个人。', pinyin: 'Yí gè rén.', english: 'One person.' }
  },
  {
    id: 'v-32',
    hanzi: '二',
    pinyin: 'èr',
    english: 'two (digits/counting)',
    partOfSpeech: 'Number',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '一加一等于二。', pinyin: 'Yī jiā yī děngyú èr.', english: 'One plus one equals two.' }
  },
  {
    id: 'v-33',
    hanzi: '两',
    pinyin: 'liǎng',
    english: 'two (quantity before measure words)',
    partOfSpeech: 'Number',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '我要两杯茶。', pinyin: 'Wǒ yào liǎng bēi chá.', english: 'I want two cups of tea.' },
    usageNote: 'Use 两 instead of 二 before measure words.'
  },
  {
    id: 'v-34',
    hanzi: '三',
    pinyin: 'sān',
    english: 'three',
    partOfSpeech: 'Number',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '三个苹果。', pinyin: 'Sān gè píngguǒ.', english: 'Three apples.' }
  },
  {
    id: 'v-35',
    hanzi: '四',
    pinyin: 'sì',
    english: 'four',
    partOfSpeech: 'Number',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '一年有四个季节。', pinyin: 'Yì nián yǒu sì gè jìjié.', english: 'A year has four seasons.' }
  },
  {
    id: 'v-36',
    hanzi: '五',
    pinyin: 'wǔ',
    english: 'five',
    partOfSpeech: 'Number',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '五星红旗。', pinyin: 'Wǔ xīng hóng qí.', english: 'Five-star red flag.' }
  },
  {
    id: 'v-37',
    hanzi: '十',
    pinyin: 'shí',
    english: 'ten',
    partOfSpeech: 'Number',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '十分钟。', pinyin: 'Shí fēnzhōng.', english: 'Ten minutes.' }
  },
  {
    id: 'v-38',
    hanzi: '百',
    pinyin: 'bǎi',
    english: 'hundred',
    partOfSpeech: 'Number',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '一百块钱。', pinyin: 'Yì bǎi kuài qián.', english: 'One hundred yuan.' }
  },
  {
    id: 'v-39',
    hanzi: '千',
    pinyin: 'qiān',
    english: 'thousand',
    partOfSpeech: 'Number',
    hskLevel: 2,
    topic: 'Numbers & Time',
    example: { hanzi: '两千米。', pinyin: 'Liǎng qiān mǐ.', english: 'Two thousand meters.' }
  },
  {
    id: 'v-40',
    hanzi: '个',
    pinyin: 'gè',
    english: 'general measure word',
    partOfSpeech: 'Measure Word',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '一个问题。', pinyin: 'Yí gè wèntí.', english: 'One question.' }
  },
  {
    id: 'v-41',
    hanzi: '杯',
    pinyin: 'bēi',
    english: 'cup / glass (measure word)',
    partOfSpeech: 'Measure Word',
    hskLevel: 1,
    topic: 'Food & Drink',
    example: { hanzi: '来一杯冰水。', pinyin: 'Lái yì bēi bīng shuǐ.', english: 'Bring a glass of ice water.' }
  },
  {
    id: 'v-42',
    hanzi: '本',
    pinyin: 'běn',
    english: 'measure word for books',
    partOfSpeech: 'Measure Word',
    hskLevel: 1,
    topic: 'Work & School',
    example: { hanzi: '两本书。', pinyin: 'Liǎng běn shū.', english: 'Two books.' }
  },
  {
    id: 'v-43',
    hanzi: '碗',
    pinyin: 'wǎn',
    english: 'bowl (measure word / noun)',
    partOfSpeech: 'Measure Word',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '一碗牛肉面。', pinyin: 'Yì wǎn niúròumiàn.', english: 'A bowl of beef noodles.' }
  },
  {
    id: 'v-44',
    hanzi: '件',
    pinyin: 'jiàn',
    english: 'measure word for clothes / matters',
    partOfSpeech: 'Measure Word',
    hskLevel: 2,
    topic: 'Shopping',
    example: { hanzi: '这件衣服很好看。', pinyin: 'Zhè jiàn yīfu hěn hǎokàn.', english: 'This piece of clothing looks great.' }
  },
  {
    id: 'v-45',
    hanzi: '块',
    pinyin: 'kuài',
    english: 'yuan (spoken currency) / piece',
    partOfSpeech: 'Measure Word',
    hskLevel: 1,
    topic: 'Shopping',
    example: { hanzi: '这个一共多少块？', pinyin: 'Zhè ge yígòng duōshao kuài?', english: 'How many bucks is this in total?' }
  },
  {
    id: 'v-46',
    hanzi: '元',
    pinyin: 'yuán',
    english: 'yuan (formal currency)',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Shopping',
    example: { hanzi: '售价：五十元。', pinyin: 'Shòujià: wǔshí yuán.', english: 'Price: 50 yuan.' },
    usageNote: 'Written on price tags, menus, and receipts.'
  },
  {
    id: 'v-47',
    hanzi: '点',
    pinyin: 'diǎn',
    english: 'o’clock / dot / point',
    partOfSpeech: 'Measure Word',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '现在上午九点。', pinyin: 'Xiànzài shàngwǔ jiǔ diǎn.', english: 'It is 9:00 AM now.' }
  },
  {
    id: 'v-48',
    hanzi: '分',
    pinyin: 'fēn',
    english: 'minute',
    partOfSpeech: 'Measure Word',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '八点十五分。', pinyin: 'Bā diǎn shíwǔ fēn.', english: '8:15.' }
  },
  {
    id: 'v-49',
    hanzi: '半',
    pinyin: 'bàn',
    english: 'half / half past',
    partOfSpeech: 'Number',
    hskLevel: 2,
    topic: 'Numbers & Time',
    example: { hanzi: '三点半。', pinyin: 'Sān diǎn bàn.', english: 'Half past three (3:30).' }
  },
  {
    id: 'v-50',
    hanzi: '多少',
    pinyin: 'duōshao',
    english: 'how much / how many',
    partOfSpeech: 'Question Word',
    hskLevel: 1,
    topic: 'Shopping',
    example: { hanzi: '这件外套多少钱？', pinyin: 'Zhè jiàn wàitào duōshao qián?', english: 'How much is this jacket?' }
  },

  // --- TIME EXPRESSIONS (51 - 65) ---
  {
    id: 'v-51',
    hanzi: '今天',
    pinyin: 'jīntiān',
    english: 'today',
    partOfSpeech: 'Time Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '今天星期五。', pinyin: 'Jīntiān xīngqīwǔ.', english: 'Today is Friday.' }
  },
  {
    id: 'v-52',
    hanzi: '明天',
    pinyin: 'míngtiān',
    english: 'tomorrow',
    partOfSpeech: 'Time Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '明天见！', pinyin: 'Míngtiān jiàn!', english: 'See you tomorrow!' }
  },
  {
    id: 'v-53',
    hanzi: '昨天',
    pinyin: 'zuótiān',
    english: 'yesterday',
    partOfSpeech: 'Time Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '昨天我去了故宫。', pinyin: 'Zuótiān wǒ qù le Gùgōng.', english: 'Yesterday I went to the Forbidden City.' }
  },
  {
    id: 'v-54',
    hanzi: '现在',
    pinyin: 'xiànzài',
    english: 'now / currently',
    partOfSpeech: 'Time Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '现在几点了？', pinyin: 'Xiànzài jǐ diǎn le?', english: 'What time is it now?' }
  },
  {
    id: 'v-55',
    hanzi: '星期',
    pinyin: 'xīngqī',
    english: 'week',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '下星期见。', pinyin: 'Xià xīngqī jiàn.', english: 'See you next week.' }
  },
  {
    id: 'v-56',
    hanzi: '周末',
    pinyin: 'zhōumò',
    english: 'weekend',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Numbers & Time',
    example: { hanzi: '祝你周末愉快！', pinyin: 'Zhù nǐ zhōumò yúkuài!', english: 'Have a great weekend!' }
  },
  {
    id: 'v-57',
    hanzi: '年',
    pinyin: 'nián',
    english: 'year',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '新年快乐！', pinyin: 'Xīnnián kuàilè!', english: 'Happy New Year!' }
  },
  {
    id: 'v-58',
    hanzi: '月',
    pinyin: 'yuè',
    english: 'month / moon',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '十月一号是国庆节。', pinyin: 'Shí yuè yī hào shì Guóqìngjié.', english: 'October 1st is National Day.' }
  },
  {
    id: 'v-59',
    hanzi: '号 / 日',
    pinyin: 'hào / rì',
    english: 'day of month / date',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '今天是五号。', pinyin: 'Jīntiān shì wǔ hào.', english: 'Today is the 5th.' },
    usageNote: '号 is spoken; 日 is written.'
  },
  {
    id: 'v-60',
    hanzi: '早上',
    pinyin: 'zǎoshang',
    english: 'early morning',
    partOfSpeech: 'Time Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '我早上七点跑步。', pinyin: 'Wǒ zǎoshang qī diǎn pǎobù.', english: 'I run at 7:00 in the morning.' }
  },
  {
    id: 'v-61',
    hanzi: '中午',
    pinyin: 'zhōngwǔ',
    english: 'noon / midday',
    partOfSpeech: 'Time Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '中午一起吃面吧。', pinyin: 'Zhōngwǔ yìqǐ chī miàn ba.', english: 'Let’s eat noodles together at noon.' }
  },
  {
    id: 'v-62',
    hanzi: '晚上',
    pinyin: 'wǎnshang',
    english: 'evening / night',
    partOfSpeech: 'Time Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '晚上我有空。', pinyin: 'Wǎnshang wǒ yǒu kòng.', english: 'I’m free tonight.' }
  },
  {
    id: 'v-63',
    hanzi: '时候',
    pinyin: 'shíhou',
    english: 'time / moment (when)',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Numbers & Time',
    example: { hanzi: '你什么时候来？', pinyin: 'Nǐ shénme shíhou lái?', english: 'When are you coming?' }
  },
  {
    id: 'v-64',
    hanzi: '平时',
    pinyin: 'píngshí',
    english: 'usually / ordinarily',
    partOfSpeech: 'Time Adverb',
    hskLevel: 2,
    topic: 'Numbers & Time',
    example: { hanzi: '我平时喜欢喝乌龙茶。', pinyin: 'Wǒ píngshí xǐhuan hē wūlóngchá.', english: 'I usually like drinking oolong tea.' }
  },
  {
    id: 'v-65',
    hanzi: '以后',
    pinyin: 'yǐhòu',
    english: 'after / in the future',
    partOfSpeech: 'Time Noun',
    hskLevel: 2,
    topic: 'Numbers & Time',
    example: { hanzi: '下课以后我们去打球。', pinyin: 'Xiàkè yǐhòu wǒmen qù dǎqiú.', english: 'After class we go play ball.' }
  },

  // --- FOOD & DRINK (66 - 85) ---
  {
    id: 'v-66',
    hanzi: '水',
    pinyin: 'shuǐ',
    english: 'water',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Food & Drink',
    example: { hanzi: '多喝温水对身体好。', pinyin: 'Duō hē wēn shuǐ duì shēntǐ hǎo.', english: 'Drinking more warm water is good for health.' }
  },
  {
    id: 'v-67',
    hanzi: '茶',
    pinyin: 'chá',
    english: 'tea',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Food & Drink',
    example: { hanzi: '中国人喜欢喝热茶。', pinyin: 'Zhōngguó rén xǐhuan hē rè chá.', english: 'Chinese people like drinking hot tea.' }
  },
  {
    id: 'v-68',
    hanzi: '咖啡',
    pinyin: 'kāfēi',
    english: 'coffee',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '我每天早上一杯黑咖啡。', pinyin: 'Wǒ měitiān zǎoshang yì bēi hēi kāfēi.', english: 'I have a black coffee every morning.' }
  },
  {
    id: 'v-69',
    hanzi: '米饭',
    pinyin: 'mǐfàn',
    english: 'cooked rice',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Food & Drink',
    example: { hanzi: '来两碗米饭。', pinyin: 'Lái liǎng wǎn mǐfàn.', english: 'Bring two bowls of rice.' }
  },
  {
    id: 'v-70',
    hanzi: '面条',
    pinyin: 'miàntiáo',
    english: 'noodles',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '过生日要吃长寿面。', pinyin: 'Guò shēngrì yào chī chángshòumiàn.', english: 'On birthdays one eats longevity noodles.' }
  },
  {
    id: 'v-71',
    hanzi: '饺子',
    pinyin: 'jiǎozi',
    english: 'dumplings',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '北方人过年喜欢包饺子。', pinyin: 'Běifāng rén guònián xǐhuan bāo jiǎozi.', english: 'Northerners love making dumplings during New Year.' }
  },
  {
    id: 'v-72',
    hanzi: '牛肉',
    pinyin: 'niúròu',
    english: 'beef',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '红烧牛肉很好吃。', pinyin: 'Hóngshāo niúròu hěn hǎochī.', english: 'Braised beef is delicious.' }
  },
  {
    id: 'v-73',
    hanzi: '鸡肉',
    pinyin: 'jīròu',
    english: 'chicken meat',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '宫保鸡丁是川菜。', pinyin: 'Gōngbǎo jīdīng shì Chuāncài.', english: 'Kung Pao Chicken is Sichuan cuisine.' }
  },
  {
    id: 'v-74',
    hanzi: '鱼',
    pinyin: 'yú',
    english: 'fish',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '清蒸鱼很鲜美。', pinyin: 'Qīngzhēng yú hěn xiānměi.', english: 'Steamed fish is very fresh and delicate.' }
  },
  {
    id: 'v-75',
    hanzi: '菜',
    pinyin: 'cài',
    english: 'dish / cuisine / vegetable',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Food & Drink',
    example: { hanzi: '这个菜味道真棒！', pinyin: 'Zhè ge cài wèidao zhēn bàng!', english: 'This dish tastes really great!' }
  },
  {
    id: 'v-76',
    hanzi: '吃',
    pinyin: 'chī',
    english: 'to eat',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Food & Drink',
    example: { hanzi: '你吃饱了吗？', pinyin: 'Nǐ chī bǎo le ma?', english: 'Are you full?' }
  },
  {
    id: 'v-77',
    hanzi: '喝',
    pinyin: 'hē',
    english: 'to drink',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Food & Drink',
    example: { hanzi: '你想喝点什么？', pinyin: 'Nǐ xiǎng hē diǎn shénme?', english: 'What would you like to drink?' }
  },
  {
    id: 'v-78',
    hanzi: '点菜',
    pinyin: 'diǎncài',
    english: 'to order food',
    partOfSpeech: 'Verb-Object',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '服务员，我们准备好点菜了。', pinyin: 'Fúwùyuán, wǒmen zhǔnbèi hǎo diǎncài le.', english: 'Waiter, we are ready to order.' }
  },
  {
    id: 'v-79',
    hanzi: '买单',
    pinyin: 'mǎidān',
    english: 'to ask for the bill',
    partOfSpeech: 'Verb-Object',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '服务员，买单！', pinyin: 'Fúwùyuán, mǎidān!', english: 'Waiter, the bill please!' }
  },
  {
    id: 'v-80',
    hanzi: '菜单',
    pinyin: 'càidān',
    english: 'menu',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '请给我看一下菜单。', pinyin: 'Qǐng gěi wǒ kàn yíxià càidān.', english: 'Please let me see the menu.' }
  },
  {
    id: 'v-81',
    hanzi: '辣',
    pinyin: 'là',
    english: 'spicy / hot',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '你能吃辣吗？', pinyin: 'Nǐ néng chī là ma?', english: 'Can you eat spicy food?' }
  },
  {
    id: 'v-82',
    hanzi: '微辣',
    pinyin: 'wēilà',
    english: 'mildly spicy',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '请做微辣，谢谢。', pinyin: 'Qǐng zuò wēilà, xièxie.', english: 'Please make it mild spicy, thank you.' }
  },
  {
    id: 'v-83',
    hanzi: '好吃',
    pinyin: 'hǎochī',
    english: 'delicious / tasty',
    partOfSpeech: 'Adjective',
    hskLevel: 1,
    topic: 'Food & Drink',
    example: { hanzi: '这里的烤鸭太好吃了！', pinyin: 'Zhèlǐ de kǎoyā tài hǎochī le!', english: 'The roast duck here is too delicious!' }
  },
  {
    id: 'v-84',
    hanzi: '服务员',
    pinyin: 'fúwùyuán',
    english: 'waiter / server / attendant',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Food & Drink',
    example: { hanzi: '服务员，加点热水。', pinyin: 'Fúwùyuán, jiā diǎn rè shuǐ.', english: 'Server, add some hot water please.' }
  },
  {
    id: 'v-85',
    hanzi: '招牌菜',
    pinyin: 'zhāopáicài',
    english: 'signature dish / specialty',
    partOfSpeech: 'Noun',
    hskLevel: 3,
    topic: 'Food & Drink',
    example: { hanzi: '这是我们店的招牌菜。', pinyin: 'Zhè shì wǒmen diàn de zhāopáicài.', english: 'This is our restaurant’s signature dish.' }
  },

  // --- PLACES, TRAVEL & DIRECTIONS (86 - 105) ---
  {
    id: 'v-86',
    hanzi: '地铁站',
    pinyin: 'dìtiě zhàn',
    english: 'subway / metro station',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '我家离地铁站很近。', pinyin: 'Wǒ jiā lí dìtiě zhàn hěn jìn.', english: 'My home is very close to the metro station.' }
  },
  {
    id: 'v-87',
    hanzi: '火车站',
    pinyin: 'huǒchē zhàn',
    english: 'train station',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Places & Transport',
    example: { hanzi: '去北京南火车站。', pinyin: 'Qù Běijīng Nán huǒchēzhàn.', english: 'Go to Beijing South Railway Station.' }
  },
  {
    id: 'v-88',
    hanzi: '机场',
    pinyin: 'jīchǎng',
    english: 'airport',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '坐机场快轨只要半小时。', pinyin: 'Zuò jīchǎng kuàiguǐ zhǐ yào bàn xiǎoshí.', english: 'Taking the airport express takes only half an hour.' }
  },
  {
    id: 'v-89',
    hanzi: '医院',
    pinyin: 'yīyuàn',
    english: 'hospital',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Places & Transport',
    example: { hanzi: '生病要去医院看医生。', pinyin: 'Shēngbìng yào qù yīyuàn kàn yīshēng.', english: 'When sick, one goes to the hospital to see a doctor.' }
  },
  {
    id: 'v-90',
    hanzi: '学校',
    pinyin: 'xuéxiào',
    english: 'school',
    partOfSpeech: 'Noun',
    hskLevel: 1,
    topic: 'Work & School',
    example: { hanzi: '我们学校环境很美。', pinyin: 'Wǒmen xuéxiào huánjìng hěn měi.', english: 'Our school environment is very beautiful.' }
  },
  {
    id: 'v-91',
    hanzi: '图书馆',
    pinyin: 'túshūguǎn',
    english: 'library',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Work & School',
    example: { hanzi: '图书馆里请保持安静。', pinyin: 'Túshūguǎn lǐ qǐng bǎochí ānjìng.', english: 'Please maintain silence in the library.' }
  },
  {
    id: 'v-92',
    hanzi: '洗手间',
    pinyin: 'xǐshǒujiān',
    english: 'restroom / washroom',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '请问洗手间在哪里？', pinyin: 'Qǐngwèn xǐshǒujiān zài nǎlǐ?', english: 'May I ask where the washroom is?' },
    usageNote: 'Polite term for toilet / bathroom.'
  },
  {
    id: 'v-93',
    hanzi: '超市',
    pinyin: 'chāoshì',
    english: 'supermarket',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '我去超市买点水果。', pinyin: 'Wǒ qù chāoshì mǎi diǎn shuǐguǒ.', english: 'I’m going to the supermarket to buy some fruit.' }
  },
  {
    id: 'v-94',
    hanzi: '银行',
    pinyin: 'yínháng',
    english: 'bank',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '银行下午五点关门。', pinyin: 'Yínháng xiàwǔ wǔ diǎn guānmén.', english: 'The bank closes at 5:00 PM.' }
  },
  {
    id: 'v-95',
    hanzi: '入口',
    pinyin: 'rùkǒu',
    english: 'entrance',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '商场入口在东边。', pinyin: 'Shāngchǎng rùkǒu zài dōngbian.', english: 'The mall entrance is on the east side.' }
  },
  {
    id: 'v-96',
    hanzi: '出口',
    pinyin: 'chūkǒu',
    english: 'exit',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '请从安全出口离开。', pinyin: 'Qǐng cóng ānquán chūkǒu líkāi.', english: 'Please leave via the emergency exit.' }
  },
  {
    id: 'v-97',
    hanzi: '往',
    pinyin: 'wǎng',
    english: 'toward / in the direction of',
    partOfSpeech: 'Preposition',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '往右拐。', pinyin: 'Wǎng yòu guǎi.', english: 'Turn right.' }
  },
  {
    id: 'v-98',
    hanzi: '左',
    pinyin: 'zuǒ',
    english: 'left',
    partOfSpeech: 'Noun/Direction',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '在左边。', pinyin: 'Zài zuǒbian.', english: 'On the left side.' }
  },
  {
    id: 'v-99',
    hanzi: '右',
    pinyin: 'yòu',
    english: 'right',
    partOfSpeech: 'Noun/Direction',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '在右边。', pinyin: 'Zài yòubian.', english: 'On the right side.' }
  },
  {
    id: 'v-100',
    hanzi: '打车',
    pinyin: 'dǎchē',
    english: 'to take a taxi / ride-hail',
    partOfSpeech: 'Verb-Object',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '下雨了，我们打车吧。', pinyin: 'Xiàyǔ le, wǒmen dǎchē ba.', english: 'It’s raining, let’s hail a cab.' }
  },
  {
    id: 'v-101',
    hanzi: '坐',
    pinyin: 'zuò',
    english: 'to sit / take (transport)',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Places & Transport',
    example: { hanzi: '请坐！坐地铁很快。', pinyin: 'Qǐng zuò! Zuò dìtiě hěn kuài.', english: 'Please sit! Taking the metro is very fast.' }
  },
  {
    id: 'v-102',
    hanzi: '路口',
    pinyin: 'lùkǒu',
    english: 'intersection / crossroad',
    partOfSpeech: 'Noun',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '在下一个路口往左拐。', pinyin: 'Zài xià yí gè lùkǒu wǎng zuǒ guǎi.', english: 'Turn left at the next intersection.' }
  },
  {
    id: 'v-103',
    hanzi: '哪里 / 哪儿',
    pinyin: 'nǎlǐ / nǎr',
    english: 'where',
    partOfSpeech: 'Question Word',
    hskLevel: 1,
    topic: 'Places & Transport',
    example: { hanzi: '你要去哪里？', pinyin: 'Nǐ yào qù nǎlǐ?', english: 'Where are you heading?' }
  },
  {
    id: 'v-104',
    hanzi: '远',
    pinyin: 'yuǎn',
    english: 'far / distant',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '这里离火车站不远。', pinyin: 'Zhèlǐ lí huǒchēzhàn bù yuǎn.', english: 'It is not far from here to the train station.' }
  },
  {
    id: 'v-105',
    hanzi: '近',
    pinyin: 'jìn',
    english: 'near / close',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Places & Transport',
    example: { hanzi: '走五分钟就很近。', pinyin: 'Zǒu wǔ fēnzhōng jiù hěn jìn.', english: 'Walking five minutes is very close.' }
  },

  // --- ACTIONS & VERBS (106 - 130) ---
  {
    id: 'v-106',
    hanzi: '看',
    pinyin: 'kàn',
    english: 'to see / look / read / watch',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '看电影，看书。', pinyin: 'Kàn diànyǐng, kàn shū.', english: 'Watch movies, read books.' }
  },
  {
    id: 'v-107',
    hanzi: '听',
    pinyin: 'tīng',
    english: 'to listen / hear',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '你在听什么歌？', pinyin: 'Nǐ zài tīng shénme gē?', english: 'What song are you listening to?' }
  },
  {
    id: 'v-108',
    hanzi: '说',
    pinyin: 'shuō',
    english: 'to speak / say',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '你会说汉语吗？', pinyin: 'Nǐ huì shuō Hànyǔ ma?', english: 'Can you speak Chinese?' }
  },
  {
    id: 'v-109',
    hanzi: '写',
    pinyin: 'xiě',
    english: 'to write',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '写汉字很有意思。', pinyin: 'Xiě Hànzì hěn yǒu yìsi.', english: 'Writing characters is very interesting.' }
  },
  {
    id: 'v-110',
    hanzi: '买',
    pinyin: 'mǎi',
    english: 'to buy',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Shopping',
    example: { hanzi: '我想买这件衬衫。', pinyin: 'Wǒ xiǎng mǎi zhè jiàn chènshān.', english: 'I want to buy this shirt.' }
  },
  {
    id: 'v-111',
    hanzi: '卖',
    pinyin: 'mài',
    english: 'to sell',
    partOfSpeech: 'Verb',
    hskLevel: 2,
    topic: 'Shopping',
    example: { hanzi: '这家店卖新鲜水果。', pinyin: 'Zhè jiā diàn mài xīnxiān shuǐguǒ.', english: 'This shop sells fresh fruit.' }
  },
  {
    id: 'v-112',
    hanzi: '去',
    pinyin: 'qù',
    english: 'to go',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '我们去吃火锅吧！', pinyin: 'Wǒmen qù chī huǒguō ba!', english: 'Let’s go eat hotpot!' }
  },
  {
    id: 'v-113',
    hanzi: '来',
    pinyin: 'lái',
    english: 'to come / bring (when ordering)',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '请进，快请来！', pinyin: 'Qǐng jìn, kuài qǐng lái!', english: 'Please come in, welcome!' }
  },
  {
    id: 'v-114',
    hanzi: '回',
    pinyin: 'huí',
    english: 'to return / go back',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '我晚上回宿舍。', pinyin: 'Wǒ wǎnshang huí sùshè.', english: 'I return to the dorm at night.' }
  },
  {
    id: 'v-115',
    hanzi: '想',
    pinyin: 'xiǎng',
    english: 'to want / think / miss',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '我想学中文。', pinyin: 'Wǒ xiǎng xué Zhōngwén.', english: 'I want to learn Chinese.' }
  },
  {
    id: 'v-116',
    hanzi: '要',
    pinyin: 'yào',
    english: 'to want / will / need',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '我要一杯美式咖啡。', pinyin: 'Wǒ yào yì bēi Měishì kāfēi.', english: 'I want an Americano.' }
  },
  {
    id: 'v-117',
    hanzi: '能 / 可以',
    pinyin: 'néng / kěyǐ',
    english: 'can / may / able to',
    partOfSpeech: 'Modal Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '这里可以扫码吗？', pinyin: 'Zhèlǐ kěyǐ sǎomǎ ma?', english: 'Can we scan QR codes here?' }
  },
  {
    id: 'v-118',
    hanzi: '会',
    pinyin: 'huì',
    english: 'can (acquired skill) / will',
    partOfSpeech: 'Modal Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '我会说一点点汉语。', pinyin: 'Wǒ huì shuō yìdiǎndiǎn Hànyǔ.', english: 'I can speak a little bit of Chinese.' }
  },
  {
    id: 'v-119',
    hanzi: '喜欢',
    pinyin: 'xǐhuan',
    english: 'to like',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Actions & Verbs',
    example: { hanzi: '我非常喜欢中国茶文化。', pinyin: 'Wǒ fēicháng xǐhuan Zhōngguó chá wénhuà.', english: 'I really like Chinese tea culture.' }
  },
  {
    id: 'v-120',
    hanzi: '认识',
    pinyin: 'rènshi',
    english: 'to know / recognize / meet',
    partOfSpeech: 'Verb',
    hskLevel: 1,
    topic: 'Social & Politeness',
    example: { hanzi: '很高兴认识你！', pinyin: 'Hěn gāoxìng rènshi nǐ!', english: 'Very pleased to meet you!' }
  },
  {
    id: 'v-121',
    hanzi: '知道',
    pinyin: 'zhīdào',
    english: 'to know (facts)',
    partOfSpeech: 'Verb',
    hskLevel: 2,
    topic: 'Actions & Verbs',
    example: { hanzi: '你知道地铁站在哪吗？', pinyin: 'Nǐ zhīdào dìtiě zhàn zài nǎ ma?', english: 'Do you know where the subway station is?' }
  },
  {
    id: 'v-122',
    hanzi: '起床',
    pinyin: 'qǐchuáng',
    english: 'to wake up / get out of bed',
    partOfSpeech: 'Verb-Object',
    hskLevel: 2,
    topic: 'Daily Routines',
    example: { hanzi: '我每天早上七点起床。', pinyin: 'Wǒ měitiān zǎoshang qī diǎn qǐchuáng.', english: 'I get up at 7:00 AM every day.' }
  },
  {
    id: 'v-123',
    hanzi: '睡觉',
    pinyin: 'shuìjiào',
    english: 'to sleep',
    partOfSpeech: 'Verb-Object',
    hskLevel: 1,
    topic: 'Daily Routines',
    example: { hanzi: '早点睡觉对身体好。', pinyin: 'Zǎodiǎn shuìjiào duì shēntǐ hǎo.', english: 'Sleeping early is good for your health.' }
  },
  {
    id: 'v-124',
    hanzi: '工作',
    pinyin: 'gōngzuò',
    english: 'to work / job',
    partOfSpeech: 'Verb/Noun',
    hskLevel: 1,
    topic: 'Work & School',
    example: { hanzi: '你在哪里工作？', pinyin: 'Nǐ zài nǎlǐ gōngzuò?', english: 'Where do you work?' }
  },
  {
    id: 'v-125',
    hanzi: '学习',
    pinyin: 'xuéxí',
    english: 'to study / learn',
    partOfSpeech: 'Verb/Noun',
    hskLevel: 1,
    topic: 'Work & School',
    example: { hanzi: '努力学习中文。', pinyin: 'Nǔlì xuéxí Zhōngwén.', english: 'Study Chinese diligently.' }
  },
  {
    id: 'v-126',
    hanzi: '帮',
    pinyin: 'bāng',
    english: 'to help / assist',
    partOfSpeech: 'Verb',
    hskLevel: 2,
    topic: 'Social & Politeness',
    example: { hanzi: '你可以帮我一下吗？', pinyin: 'Nǐ kěyǐ bāng wǒ yíxià ma?', english: 'Could you give me a hand?' }
  },
  {
    id: 'v-127',
    hanzi: '等',
    pinyin: 'děng',
    english: 'to wait',
    partOfSpeech: 'Verb',
    hskLevel: 2,
    topic: 'Actions & Verbs',
    example: { hanzi: '请稍等一下。', pinyin: 'Qǐng shāoděng yíxià.', english: 'Please wait for a moment.' }
  },
  {
    id: 'v-128',
    hanzi: '找',
    pinyin: 'zhǎo',
    english: 'to look for / give change',
    partOfSpeech: 'Verb',
    hskLevel: 2,
    topic: 'Shopping',
    example: { hanzi: '你在找什么？找您五块钱。', pinyin: 'Nǐ zài zhǎo shénme? Zhǎo nín wǔ kuài qián.', english: 'What are you looking for? Here is five yuan change.' }
  },
  {
    id: 'v-129',
    hanzi: '给',
    pinyin: 'gěi',
    english: 'to give / for / to',
    partOfSpeech: 'Verb/Preposition',
    hskLevel: 2,
    topic: 'Actions & Verbs',
    example: { hanzi: '给我看一下。', pinyin: 'Gěi wǒ kàn yíxià.', english: 'Let me take a look.' }
  },
  {
    id: 'v-130',
    hanzi: '扫码',
    pinyin: 'sǎomǎ',
    english: 'to scan QR code',
    partOfSpeech: 'Verb-Object',
    hskLevel: 2,
    topic: 'Shopping',
    example: { hanzi: '我扫您的付款码。', pinyin: 'Wǒ sǎo nín de fùkuǎnmǎ.', english: 'I will scan your payment code.' }
  },

  // --- ADJECTIVES & DESCRIPTORS (131 - 155) ---
  {
    id: 'v-131',
    hanzi: '好',
    pinyin: 'hǎo',
    english: 'good / well / fine',
    partOfSpeech: 'Adjective',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '味道非常好！', pinyin: 'Wèidao fēicháng hǎo!', english: 'The flavor is very good!' }
  },
  {
    id: 'v-132',
    hanzi: '大',
    pinyin: 'dà',
    english: 'big / large',
    partOfSpeech: 'Adjective',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '这个房间很大。', pinyin: 'Zhè ge fángjiān hěn dà.', english: 'This room is very big.' }
  },
  {
    id: 'v-133',
    hanzi: '小',
    pinyin: 'xiǎo',
    english: 'small / little',
    partOfSpeech: 'Adjective',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '声音小一点。', pinyin: 'Shēngyīn xiǎo yìdiǎn.', english: 'A little quieter please.' }
  },
  {
    id: 'v-134',
    hanzi: '多',
    pinyin: 'duō',
    english: 'many / much',
    partOfSpeech: 'Adjective',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '这里人很多。', pinyin: 'Zhèlǐ rén hěn duō.', english: 'There are many people here.' }
  },
  {
    id: 'v-135',
    hanzi: '少',
    pinyin: 'shǎo',
    english: 'few / little',
    partOfSpeech: 'Adjective',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '放少一点糖。', pinyin: 'Fàng shǎo yìdiǎn táng.', english: 'Put a little less sugar.' }
  },
  {
    id: 'v-136',
    hanzi: '热',
    pinyin: 'rè',
    english: 'hot (temperature)',
    partOfSpeech: 'Adjective',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '今天天气很热。', pinyin: 'Jīntiān tiānqì hěn rè.', english: 'The weather today is very hot.' }
  },
  {
    id: 'v-137',
    hanzi: '冷',
    pinyin: 'lěng',
    english: 'cold (temperature)',
    partOfSpeech: 'Adjective',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '北京的冬天比较冷。', pinyin: 'Běijīng de dōngtiān bǐjiào lěng.', english: 'Winter in Beijing is relatively cold.' }
  },
  {
    id: 'v-138',
    hanzi: '贵',
    pinyin: 'guì',
    english: 'expensive',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Shopping',
    example: { hanzi: '有点贵，能便宜点吗？', pinyin: 'Yǒudiǎn guì, néng piányi diǎn ma?', english: 'A bit pricey, can it be cheaper?' }
  },
  {
    id: 'v-139',
    hanzi: '便宜',
    pinyin: 'piányi',
    english: 'cheap / inexpensive',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Shopping',
    example: { hanzi: '这家超市的东西真便宜。', pinyin: 'Zhè jiā chāoshì de dōngxi zhēn piányi.', english: 'Items in this supermarket are really cheap.' }
  },
  {
    id: 'v-140',
    hanzi: '快',
    pinyin: 'kuài',
    english: 'fast / quick',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Descriptors',
    example: { hanzi: '高铁速度真快！', pinyin: 'Gāotiě sùdù zhēn kuài!', english: 'High-speed trains are so fast!' }
  },
  {
    id: 'v-141',
    hanzi: '慢',
    pinyin: 'màn',
    english: 'slow',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Descriptors',
    example: { hanzi: '请说慢一点。', pinyin: 'Qǐng shuō màn yìdiǎn.', english: 'Please speak a little slower.' }
  },
  {
    id: 'v-142',
    hanzi: '忙',
    pinyin: 'máng',
    english: 'busy',
    partOfSpeech: 'Adjective',
    hskLevel: 1,
    topic: 'Daily Routines',
    example: { hanzi: '你最近忙不忙？', pinyin: 'Nǐ zuìjìn máng bu máng?', english: 'Have you been busy lately?' }
  },
  {
    id: 'v-143',
    hanzi: '高兴',
    pinyin: 'gāoxìng',
    english: 'happy / pleased',
    partOfSpeech: 'Adjective',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '大家都很高兴。', pinyin: 'Dàjiā dōu hěn gāoxìng.', english: 'Everyone is very happy.' }
  },
  {
    id: 'v-144',
    hanzi: '累',
    pinyin: 'lèi',
    english: 'tired / fatigued',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Descriptors',
    example: { hanzi: '今天工作有点累。', pinyin: 'Jīntiān gōngzuò yǒudiǎn lèi.', english: 'Work today was a bit tiring.' }
  },
  {
    id: 'v-145',
    hanzi: '方便',
    pinyin: 'fāngbiàn',
    english: 'convenient / suitable',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Descriptors',
    example: { hanzi: '坐地铁非常方便。', pinyin: 'Zuò dìtiě fēicháng fāngbiàn.', english: 'Taking the metro is extremely convenient.' }
  },
  {
    id: 'v-146',
    hanzi: '漂亮',
    pinyin: 'piàoliang',
    english: 'pretty / beautiful',
    partOfSpeech: 'Adjective',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '这件衣服真漂亮！', pinyin: 'Zhè jiàn yīfu zhēn piàoliang!', english: 'This dress is truly beautiful!' }
  },
  {
    id: 'v-147',
    hanzi: '新',
    pinyin: 'xīn',
    english: 'new',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Descriptors',
    example: { hanzi: '我的新手机。', pinyin: 'Wǒ de xīn shǒujī.', english: 'My new phone.' }
  },
  {
    id: 'v-148',
    hanzi: '旧',
    pinyin: 'jiù',
    english: 'old / worn',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Descriptors',
    example: { hanzi: '这本旧书很有价值。', pinyin: 'Zhè běn jiù shū hěn yǒu jiàzhí.', english: 'This old book is very valuable.' }
  },
  {
    id: 'v-149',
    hanzi: '容易',
    pinyin: 'róngyì',
    english: 'easy / simple',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Work & School',
    example: { hanzi: '发音不难，挺容易的。', pinyin: 'Fāyīn bù nán, tǐng róngyì de.', english: 'Pronunciation is not hard, pretty easy.' }
  },
  {
    id: 'v-150',
    hanzi: '难',
    pinyin: 'nán',
    english: 'difficult / hard',
    partOfSpeech: 'Adjective',
    hskLevel: 2,
    topic: 'Work & School',
    example: { hanzi: '写汉字有点难，但是有趣。', pinyin: 'Xiě Hànzì yǒudiǎn nán, dànshì yǒuqù.', english: 'Writing characters is a bit difficult, but fun.' }
  },
  {
    id: 'v-151',
    hanzi: '很',
    pinyin: 'hěn',
    english: 'very / quite',
    partOfSpeech: 'Adverb',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '我很好。', pinyin: 'Wǒ hěn hǎo.', english: 'I am doing well.' }
  },
  {
    id: 'v-152',
    hanzi: '非常',
    pinyin: 'fēicháng',
    english: 'extremely / highly',
    partOfSpeech: 'Adverb',
    hskLevel: 2,
    topic: 'Descriptors',
    example: { hanzi: '非常感谢！', pinyin: 'Fēicháng gǎnxiè!', english: 'Thank you very much!' }
  },
  {
    id: 'v-153',
    hanzi: '太',
    pinyin: 'tài',
    english: 'too / extremely',
    partOfSpeech: 'Adverb',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '太好了！', pinyin: 'Tài hǎo le!', english: 'That’s awesome!' }
  },
  {
    id: 'v-154',
    hanzi: '也',
    pinyin: 'yě',
    english: 'also / too',
    partOfSpeech: 'Adverb',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '我也是学生。', pinyin: 'Wǒ yě shì xuésheng.', english: 'I am also a student.' }
  },
  {
    id: 'v-155',
    hanzi: '都',
    pinyin: 'dōu',
    english: 'all / both',
    partOfSpeech: 'Adverb',
    hskLevel: 1,
    topic: 'Descriptors',
    example: { hanzi: '我们都喜欢吃火锅。', pinyin: 'Wǒmen dōu xǐhuan chī huǒguō.', english: 'We all like eating hotpot.' }
  }
];

export const vocabTopics = [
  'All',
  'Greetings',
  'Social & Politeness',
  'People',
  'Numbers & Time',
  'Food & Drink',
  'Places & Transport',
  'Actions & Verbs',
  'Descriptors',
  'Work & School',
  'Daily Routines',
  'Shopping',
];
