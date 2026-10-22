import { PracticalWritingTask, WritingCharacter } from '../../types';

export const writingCharacters: WritingCharacter[] = [
  {
    character: '我',
    pinyin: 'wǒ',
    meaning: 'I / me / myself',
    strokeCount: 7,
    strokeSteps: ['撇 (left slash)', '横 (horizontal)', '竖钩 (vertical with hook)', '提 (upward flick)', '斜钩 (slanted hook)', '撇 (left slash)', '点 (dot)'],
    radical: '戈 (spear/dagger)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '我们', pinyin: 'wǒmen', english: 'we / us' },
      { hanzi: '我的', pinyin: 'wǒ de', english: 'my / mine' }
    ],
    practicalSentence: {
      hanzi: '我是汉语学习者。',
      pinyin: 'Wǒ shì Hànyǔ xuéxízhě.',
      english: 'I am a Chinese language learner.'
    }
  },
  {
    character: '你',
    pinyin: 'nǐ',
    meaning: 'you (singular)',
    strokeCount: 7,
    strokeSteps: ['撇 (left slash)', '竖 (vertical)', '撇 (left slash)', '横撇 (horizontal curve)', '竖 (vertical)', '撇 (left slash)', '点 (dot)'],
    radical: '亻(person)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '你好', pinyin: 'nǐ hǎo', english: 'hello' },
      { hanzi: '你们', pinyin: 'nǐmen', english: 'you (plural)' }
    ],
    practicalSentence: {
      hanzi: '你最近好吗？',
      pinyin: 'Nǐ zuìjìn hǎo ma?',
      english: 'How have you been lately?'
    }
  },
  {
    character: '好',
    pinyin: 'hǎo',
    meaning: 'good / well / fine',
    strokeCount: 6,
    strokeSteps: ['撇点 (slash dot)', '撇 (left slash)', '提 (upward flick)', '横撇 (horizontal curve)', '竖钩 (vertical hook)', '横 (horizontal)'],
    radical: '女 (woman/female)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '好的', pinyin: 'hǎo de', english: 'okay / alright' },
      { hanzi: '好吃', pinyin: 'hǎochī', english: 'delicious' }
    ],
    practicalSentence: {
      hanzi: '今天天气非常好！',
      pinyin: 'Jīntiān tiānqì fēicháng hǎo!',
      english: 'The weather today is exceptionally good!'
    }
  },
  {
    character: '人',
    pinyin: 'rén',
    meaning: 'person / human / people',
    strokeCount: 2,
    strokeSteps: ['撇 (left slash)', '捺 (right slash)'],
    radical: '人 (person)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '中国人', pinyin: 'Zhōngguó rén', english: 'Chinese person' },
      { hanzi: '大人', pinyin: 'dàrén', english: 'adult' }
    ],
    practicalSentence: {
      hanzi: '他是我们大家的朋友。',
      pinyin: 'Tā shì wǒmen dàjiā de péngyou.',
      english: 'He is a friend to all of us.'
    }
  },
  {
    character: '大',
    pinyin: 'dà',
    meaning: 'big / large / great',
    strokeCount: 3,
    strokeSteps: ['横 (horizontal)', '撇 (left slash)', '捺 (right slash)'],
    radical: '大 (big)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '大家', pinyin: 'dàjiā', english: 'everyone' },
      { hanzi: '大学', pinyin: 'dàxué', english: 'university' }
    ],
    practicalSentence: {
      hanzi: '北京是一个很大的城市。',
      pinyin: 'Běijīng shì yí gè hěn dà de chéngshì.',
      english: 'Beijing is a very large city.'
    }
  },
  {
    character: '小',
    pinyin: 'xiǎo',
    meaning: 'small / little',
    strokeCount: 3,
    strokeSteps: ['竖钩 (center vertical hook)', '撇 (left slash)', '点 (right dot)'],
    radical: '小 (small)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '小孩', pinyin: 'xiǎohái', english: 'child' },
      { hanzi: '小心', pinyin: 'xiǎoxīn', english: 'careful / watch out' }
    ],
    practicalSentence: {
      hanzi: '过马路请小心！',
      pinyin: 'Guò mǎlù qǐng xiǎoxīn!',
      english: 'Please be careful when crossing the road!'
    }
  },
  {
    character: '中',
    pinyin: 'zhōng',
    meaning: 'middle / center / in',
    strokeCount: 4,
    strokeSteps: ['竖 (vertical left)', '横折 (horizontal fold)', '横 (horizontal seal)', '竖 (center vertical)'],
    radical: '丨(line/vertical)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '中国', pinyin: 'Zhōngguó', english: 'China' },
      { hanzi: '中文', pinyin: 'Zhōngwén', english: 'Chinese language' }
    ],
    practicalSentence: {
      hanzi: '我在中国学习中文。',
      pinyin: 'Wǒ zài Zhōngguó xuéxí Zhōngwén.',
      english: 'I study Chinese in China.'
    }
  },
  {
    character: '国',
    pinyin: 'guó',
    meaning: 'country / nation / state',
    strokeCount: 8,
    strokeSteps: ['竖 (outer left)', '横折 (outer fold)', '横 (inner jade top)', '横 (inner jade mid)', '竖 (inner jade vertical)', '提 (inner jade flick)', '点 (inner dot)', '横 (bottom seal)'],
    radical: '囗 (enclosure)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '国家', pinyin: 'guójiā', english: 'country / nation' },
      { hanzi: '外国', pinyin: 'wàiguó', english: 'foreign country' }
    ],
    practicalSentence: {
      hanzi: '你来自哪个国家？',
      pinyin: 'Nǐ láizì nǎ ge guójiā?',
      english: 'Which country do you come from?'
    }
  },
  {
    character: '日',
    pinyin: 'rì',
    meaning: 'sun / day / date',
    strokeCount: 4,
    strokeSteps: ['竖 (left vertical)', '横折 (horizontal fold)', '横 (middle horizontal)', '横 (bottom seal)'],
    radical: '日 (sun)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '生日', pinyin: 'shēngrì', english: 'birthday' },
      { hanzi: '日子', pinyin: 'rìzi', english: 'days / life' }
    ],
    practicalSentence: {
      hanzi: '祝你生日快乐！',
      pinyin: 'Zhù nǐ shēngrì kuàilè!',
      english: 'Wish you a happy birthday!'
    }
  },
  {
    character: '月',
    pinyin: 'yuè',
    meaning: 'moon / month',
    strokeCount: 4,
    strokeSteps: ['撇 (left curve)', '横折钩 (horizontal hook)', '横 (inner horizontal)', '横 (inner horizontal)'],
    radical: '月 (moon)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '一个月', pinyin: 'yí gè yuè', english: 'one month' },
      { hanzi: '月亮', pinyin: 'yuèliang', english: 'moon' }
    ],
    practicalSentence: {
      hanzi: '现在是十月。',
      pinyin: 'Xiànzài shì Shíyuè.',
      english: 'It is October right now.'
    }
  },
  {
    character: '学',
    pinyin: 'xué',
    meaning: 'to study / learn / knowledge',
    strokeCount: 8,
    strokeSteps: ['点 (top dot)', '点 (top dot)', '撇 (top slash)', '点 (left dot)', '横撇 (roof)', '横撇弯钩 (child hook)', '竖 (vertical)', '横 (cross)'],
    radical: '子 (child)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '学生', pinyin: 'xuésheng', english: 'student' },
      { hanzi: '学习', pinyin: 'xuéxí', english: 'to study / learn' }
    ],
    practicalSentence: {
      hanzi: '学中文需要多听多说。',
      pinyin: 'Xué Zhōngwén xūyào duō tīng duō shuō.',
      english: 'Learning Chinese requires listening and speaking frequently.'
    }
  },
  {
    character: '生',
    pinyin: 'shēng',
    meaning: 'to give birth / life / student / raw',
    strokeCount: 5,
    strokeSteps: ['撇 (left slash)', '横 (top horizontal)', '横 (middle horizontal)', '竖 (vertical)', '横 (bottom long horizontal)'],
    radical: '生 (life)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '生活', pinyin: 'shēnghuó', english: 'life / living' },
      { hanzi: '先生', pinyin: 'xiānsheng', english: 'Mr. / gentleman' }
    ],
    practicalSentence: {
      hanzi: '祝你在中国的生活一切顺利！',
      pinyin: 'Zhù nǐ zài Zhōngguó de shēnghuó yíqiè shùnlì!',
      english: 'Wishing you smooth sailing in all aspects of your life in China!'
    }
  },
  {
    character: '水',
    pinyin: 'shuǐ',
    meaning: 'water / liquid',
    strokeCount: 4,
    strokeSteps: ['竖钩 (center vertical hook)', '横撇 (left upper stroke)', '撇 (right slash)', '捺 (right long slash)'],
    radical: '水 (water)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '喝水', pinyin: 'hē shuǐ', english: 'drink water' },
      { hanzi: '开水', pinyin: 'kāishuǐ', english: 'boiled hot water' }
    ],
    practicalSentence: {
      hanzi: '请给我一杯温开水。',
      pinyin: 'Qǐng gěi wǒ yì bēi wēn kāishuǐ.',
      english: 'Please give me a glass of warm boiled water.'
    }
  },
  {
    character: '山',
    pinyin: 'shān',
    meaning: 'mountain / hill',
    strokeCount: 3,
    strokeSteps: ['竖 (center vertical)', '竖折 (left vertical turn)', '竖 (right vertical)'],
    radical: '山 (mountain)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '爬山', pinyin: 'pá shān', english: 'hike / climb mountains' },
      { hanzi: '高山', pinyin: 'gāoshān', english: 'high mountain' }
    ],
    practicalSentence: {
      hanzi: '周末我们一起去爬山吧！',
      pinyin: 'Zhōumò wǒmen yìqǐ qù pá shān ba!',
      english: 'Let’s go hiking together this weekend!'
    }
  },
  {
    character: '家',
    pinyin: 'jiā',
    meaning: 'family / home / household',
    strokeCount: 10,
    strokeSteps: ['点 (top dot)', '点 (roof left)', '横撇 (roof right fold)', '横 (pig horizontal)', '撇 (slash)', '弯钩 (curved hook)', '撇 (slash)', '撇 (slash)', '撇 (slash)', '捺 (right slash)'],
    radical: '宀 (roof radical - representing a pig 豕 under a roof)',
    hskLevel: 1,
    commonWords: [
      { hanzi: '回家', pinyin: 'huí jiā', english: 'go home' },
      { hanzi: '家人', pinyin: 'jiārén', english: 'family members' }
    ],
    practicalSentence: {
      hanzi: '欢迎随时来我家做客！',
      pinyin: 'Huānyíng suíshí lái wǒ jiā zuòkè!',
      english: 'Welcome to visit my home as a guest anytime!'
    }
  }
];

export const practicalWritingTasks: PracticalWritingTask[] = [
  {
    id: 'task-1',
    title: 'Self-Introduction (自我介绍)',
    instruction: 'Write a clean 3-to-4 sentence self-introduction stating your name, nationality, your study of Chinese, and a warm pleasantry.',
    targetContext: 'Meeting new classmates at language school or introducing yourself in a WeChat interest group.',
    suggestedAnswers: [
      {
        hanzi: '大家好！我叫大卫，来自英国。我正在学习中文，平时喜欢看电影和跑步。很高兴认识大家！',
        pinyin: 'Dàjiā hǎo! Wǒ jiào Dàwèi, láizì Yīngguó. Wǒ zhèngzài xuéxí Zhōngwén, píngshí xǐhuan kàn diànyǐng hé pǎobù. Hěn gāoxìng rènshi dàjiā!',
        english: 'Hello everyone! My name is David, and I come from the UK. I am studying Chinese, and I usually like watching movies and running. Very pleased to meet you all!',
        style: 'polite'
      }
    ],
    keyPhrasesToUse: [
      { hanzi: '大家好', pinyin: 'Dàjiā hǎo', english: 'Hello everyone' },
      { hanzi: '我叫...', pinyin: 'Wǒ jiào...', english: 'My name is...' },
      { hanzi: '来自...', pinyin: 'Láizì...', english: 'Come from...' },
      { hanzi: '很高兴认识大家', pinyin: 'Hěn gāoxìng rènshi dàjiā', english: 'Pleased to meet you all' }
    ]
  },
  {
    id: 'task-2',
    title: 'Polite WeChat Request to a Coworker (工作请托)',
    instruction: 'Ask a colleague Xiao Li if they can take a quick look at your draft report before the 3:00 PM meeting.',
    targetContext: 'Workplace messaging on WeChat or DingTalk.',
    suggestedAnswers: [
      {
        hanzi: '小李早啊！方便帮我看一下这份报告吗？下午三点开会前给我提点建议就行，辛苦啦！',
        pinyin: 'Xiǎo Lǐ zǎo a! Fāngbiàn bāng wǒ kàn yíxià zhè fèn bàogào ma? Xiàwǔ sān diǎn kāihuì qián gěi wǒ tí diǎn jiànyì jiù xíng, xīnkǔ la!',
        english: 'Morning Xiao Li! Would it be convenient to take a quick look at this report for me? Just give me some feedback before the 3 PM meeting, thank you for your help!',
        style: 'polite'
      }
    ],
    keyPhrasesToUse: [
      { hanzi: '方便...吗？', pinyin: 'Fāngbiàn... ma?', english: 'Is it convenient to...?' },
      { hanzi: '看一下', pinyin: 'Kàn yíxià', english: 'Take a quick look' },
      { hanzi: '辛苦啦', pinyin: 'Xīnkǔ la', english: 'Thanks for your trouble / hard work' }
    ]
  },
  {
    id: 'task-3',
    title: 'Writing Dates & Making an Appointment (约定时间)',
    instruction: 'Propose meeting Teacher Wang next Tuesday, October 28th at 2:30 PM in his office.',
    targetContext: 'Academic consultation or appointment setting.',
    suggestedAnswers: [
      {
        hanzi: '王老师您好！请问下周二（10月28日）下午两点半您在办公室吗？我想向您请教几个关于语法的问题。',
        pinyin: 'Wáng lǎoshī nín hǎo! Qǐngwèn xià zhōu’èr (10 yuè 28 rì) xiàwǔ liǎng diǎn bàn nín zài bàngōngshì ma? Wǒ xiǎng xiàng nín qǐngjiào jǐ gè guānyú yǔfǎ de wèntí.',
        english: 'Hello Teacher Wang! May I ask if you will be in the office next Tuesday (October 28) at 2:30 PM? I would like to consult you on a few grammar questions.',
        style: 'polite'
      }
    ],
    keyPhrasesToUse: [
      { hanzi: '请教', pinyin: 'Qǐngjiào', english: 'To consult respectfully' },
      { hanzi: '下周二', pinyin: 'Xià zhōusān', english: 'Next Tuesday' },
      { hanzi: '两点半', pinyin: 'Liǎng diǎn bàn', english: '2:30' }
    ]
  }
];
