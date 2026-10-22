import { Lesson } from '../../types';

export const unit3Lessons: Lesson[] = [
  {
    id: 'lesson-13',
    unitId: 3,
    unitTitle: 'Unit 3 — Natural Conversation',
    lessonNumber: 13,
    title: 'Daily Routines & Hobbies',
    subtitle: 'Talking about what you do every day and what you enjoy',
    estimatedMinutes: 10,
    level: 'Elementary (HSK 2)',
    objectives: [
      'Describe daily schedule: 起床 (wake up), 上班 (go to work), 睡觉 (sleep)',
      'Discuss sports and hobbies: 喜欢 (to like), 看书 (read books), 听音乐 (listen to music)',
      'Ask others: 你平时喜欢做什么？(What do you usually like to do?)'
    ],
    grammarAndUsage: [
      {
        title: '平时 (píngshí) & 喜欢 (xǐhuan)',
        explanation: '平时 means "in normal times / usually". It is placed before the verb: 我平时喜欢游泳 (I usually like swimming).',
        tip: 'In Chinese, time expressions like 平时, 每天 (every day), or 早上 (in the morning) can go before or after the subject, but ALWAYS before the verb!'
      }
    ],
    vocabulary: [
      { hanzi: '起床', pinyin: 'qǐchuáng', english: 'to wake up / get out of bed', notes: 'Verb' },
      { hanzi: '上班', pinyin: 'shàngbān', english: 'to go to work', notes: 'Verb' },
      { hanzi: '睡觉', pinyin: 'shuìjiào', english: 'to sleep', notes: 'Verb' },
      { hanzi: '喜欢', pinyin: 'xǐhuan', english: 'to like', notes: 'Verb' },
      { hanzi: '平时', pinyin: 'píngshí', english: 'usually / in ordinary times', notes: 'Time adverb' },
      { hanzi: '听音乐', pinyin: 'tīng yīnyuè', english: 'to listen to music', notes: 'Phrase' }
    ],
    dialogueOrSentences: [
      { speaker: '小张', hanzi: '你周末平时喜欢做什么？', pinyin: 'Nǐ zhōumò píngshí xǐhuan zuò shénme?', english: 'What do you usually like to do on weekends?', context: 'Getting to know someone.' },
      { speaker: '小李', hanzi: '我喜欢看电影和听音乐，有时也去运动。', pinyin: 'Wǒ xǐhuan kàn diànyǐng hé tīng yīnyuè, yǒushí yě qù yùndòng.', english: 'I like watching movies and listening to music, and sometimes go exercise too.', context: 'Sharing hobbies.' }
    ],
    culturalNote: 'Asking about hobbies (爱好) is an effortless icebreaker in China. Common pastimes include 羽毛球 (badminton), 喝茶 (drinking tea), and 爬山 (hiking).',
    exercises: [
      {
        id: 'u3l13-e1',
        type: 'multiple-choice',
        question: 'Where should "每天" (every day) go in the sentence "I drink tea"?',
        options: ['我每天喝茶 (Wǒ měitiān hē chá)', '我喝茶每天 (Wǒ hē chá měitiān)', '每天喝茶我 (Měitiān hē chá wǒ)', '喝茶我每天 (Hē chá wǒ měitiān)'],
        correctAnswer: '我每天喝茶 (Wǒ měitiān hē chá)',
        explanation: 'Time adverbs like 每天 must come before the main verb (喝).'
      }
    ]
  },
  {
    id: 'lesson-14',
    unitId: 3,
    unitTitle: 'Unit 3 — Natural Conversation',
    lessonNumber: 14,
    title: 'Making Plans & Inviting Someone',
    subtitle: 'Checking availability and suggesting meetups naturally',
    estimatedMinutes: 10,
    level: 'Elementary (HSK 2)',
    objectives: [
      'Check availability: 你周末有空吗？(Are you free this weekend?)',
      'Propose an activity: 我们一起去...好不好？(Shall we go ... together?)',
      'Use the suggestion particle 吧 (ba) to sound warm and invitational'
    ],
    grammarAndUsage: [
      {
        title: 'The Suggestion Particle 吧 (ba)',
        explanation: 'Ending a sentence with 吧 softens a statement into a collaborative suggestion: "我们走吧！" (Let’s go!), "一起喝咖啡吧！" (Let’s have coffee together!).',
        tip: '有空 (yǒu kòng) means "to have free time".'
      }
    ],
    vocabulary: [
      { hanzi: '有空', pinyin: 'yǒu kòng', english: 'to have free time / be available', notes: 'Phrase' },
      { hanzi: '一起', pinyin: 'yìqǐ', english: 'together', notes: 'Adverb' },
      { hanzi: '怎么样', pinyin: 'zěnmeyàng', english: 'how about / how is it', notes: 'Question phrase' },
      { hanzi: '吧', pinyin: 'ba', english: 'suggestion particle', notes: 'Neutral tone' },
      { hanzi: '吃饭', pinyin: 'chīfàn', english: 'to eat a meal', notes: 'Verb-object' }
    ],
    dialogueOrSentences: [
      { speaker: '小陈', hanzi: '星期六晚上你有空吗？我们一起去吃饭吧！', pinyin: 'Xīngqīliù wǎnshang nǐ yǒu kòng ma? Wǒmen yìqǐ qù chīfàn ba!', english: 'Are you free Saturday evening? Let’s go grab dinner together!', context: 'Casual invitation between friends.' },
      { speaker: '小林', hanzi: '好啊！去吃火锅怎么样？', pinyin: 'Hǎo a! Qù chī huǒguō zěnmeyàng?', english: 'Sounds great! How about we go eat hotpot?', context: 'Enthusiastic agreement with suggestion.' }
    ],
    culturalNote: 'In China, inviting someone to eat (请客 / 吃饭) is the quintessential way to celebrate friendships and build connections.',
    exercises: [
      {
        id: 'u3l14-e1',
        type: 'multiple-choice',
        question: 'Which sentence naturally suggests "Let’s go eat together!"?',
        options: ['我们一起去吃饭吧！(Wǒmen yìqǐ qù chīfàn ba!)', '我们去吃饭必须！(Wǒmen qù chīfàn bìxū!)', '你吃饭我。(Nǐ chīfàn wǒ.)', '去吃我们！(Qù chī wǒmen!)'],
        correctAnswer: '我们一起去吃饭吧！(Wǒmen yìqǐ qù chīfàn ba!)',
        explanation: 'Using 一起 (together) and the suggestion particle 吧 creates a warm, natural invitation.'
      }
    ]
  },
  {
    id: 'lesson-15',
    unitId: 3,
    unitTitle: 'Unit 3 — Natural Conversation',
    lessonNumber: 15,
    title: 'Accepting & Declining Invitations Politely',
    subtitle: 'Preserving harmony and face when saying yes or saying no',
    estimatedMinutes: 11,
    level: 'Elementary (HSK 2-3)',
    objectives: [
      'Accept enthusiastically: 太好了，我很想去！',
      'Decline with tact: 不好意思，我那天有点事 (Sorry, I have something going on that day)',
      'Offer a warm rain-check: 我们下次再去吧 (Let’s go next time instead)'
    ],
    grammarAndUsage: [
      {
        title: 'Preserving Face (给面子) When Declining',
        explanation: 'In Chinese culture, a blunt "我不想去" (I don’t want to go) or "不行" (No) can feel harsh. Always soften a rejection with: 1) Apology (不好意思), 2) Vague reason (我那天有事 / 有点忙), and 3) Rain-check (下次吧).',
        tip: 'This three-step formula preserves warmth and keeps the friendship strong.'
      }
    ],
    vocabulary: [
      { hanzi: '不好意思', pinyin: 'bù hǎoyìsi', english: 'embarrassed / excuse me / sorry', notes: 'Soft apology' },
      { hanzi: '有事', pinyin: 'yǒu shì', english: 'to have things to do / be occupied', notes: 'Polite excuse' },
      { hanzi: '下次', pinyin: 'xià cì', english: 'next time', notes: 'Noun' },
      { hanzi: '真可惜', pinyin: 'zhēn kěxī', english: 'what a pity / that’s too bad', notes: 'Empathetic response' }
    ],
    dialogueOrSentences: [
      { speaker: '小刘', hanzi: '明天一起去打篮球吗？', pinyin: 'Míngtiān yìqǐ qù dǎ lánqiú ma?', english: 'Want to play basketball together tomorrow?', context: 'Casual invite.' },
      { speaker: '小何', hanzi: '真不好意思，我明天正好有点事，下次我们再去吧！', pinyin: 'Zhēn bù hǎoyìsi, wǒ míngtiān zhènghǎo yǒudiǎn shì, xià cì wǒmen zài qù ba!', english: 'Really sorry, I happen to have something to take care of tomorrow, let’s definitely go next time!', context: 'Polite and graceful decline.' }
    ],
    culturalNote: 'The response "下次吧" (next time) is a standard face-saving gesture. If someone really wants to make plans later, they will usually follow up with a specific alternative date.',
    exercises: [
      {
        id: 'u3l15-e1',
        type: 'multiple-choice',
        question: 'Which of the following is the most natural and polite way to decline a friend’s invitation?',
        options: [
          '不好意思，我那天有事，下次再去吧！',
          '我不想去，太无聊了。',
          '不可以！你别问了。',
          '不行，走开。'
        ],
        correctAnswer: '不好意思，我那天有事，下次再去吧！',
        explanation: 'Starting with 不好意思, giving the polite reason 有事, and offering 下次再去吧 is the most respectful, socially smooth way to decline.'
      }
    ]
  },
  {
    id: 'lesson-16',
    unitId: 3,
    unitTitle: 'Unit 3 — Natural Conversation',
    lessonNumber: 16,
    title: 'Expressing Likes, Dislikes & Preferences',
    subtitle: 'From "I love it" to "I’m not so keen" with nuanced degrees',
    estimatedMinutes: 9,
    level: 'Elementary (HSK 2)',
    objectives: [
      'Express degrees of fondness: 非常喜欢 (really like), 比较喜欢 (prefer), 不太喜欢 (don’t particularly like)',
      'Express strong aversion tactfully: 我不太习惯 (I’m not quite used to it)',
      'Compare preferences with 比较 (bǐjiào)'
    ],
    grammarAndUsage: [
      {
        title: 'Degrees of Preference',
        explanation: 'Mandarin uses distinct modifiers before 喜欢: \n- 非常喜欢 (fēicháng xǐhuan): Love / strongly like\n- 比较喜欢 (bǐjiào xǐhuan): Prefer / relatively like\n- 不太喜欢 (bú tài xǐhuan): Don’t really like (tactful)\n- 不喜欢 (bù xǐhuan): Don’t like (direct).',
        tip: 'To avoid sounding overly negative about local food or customs, saying "我不太习惯" (I’m not very used to it yet) is universally appreciated.'
      }
    ],
    vocabulary: [
      { hanzi: '非常', pinyin: 'fēicháng', english: 'extremely / very', notes: 'Adverb' },
      { hanzi: '比较', pinyin: 'bǐjiào', english: 'comparatively / rather / to compare', notes: 'Adverb' },
      { hanzi: '不太', pinyin: 'bú tài', english: 'not very / not particularly', notes: 'Soft negative' },
      { hanzi: '习惯', pinyin: 'xíguàn', english: 'to be accustomed to / habit', notes: 'Noun/Verb' }
    ],
    dialogueOrSentences: [
      { speaker: '小王', hanzi: '你喜欢吃辣的吗？', pinyin: 'Nǐ xǐhuan chī là de ma?', english: 'Do you like eating spicy food?', context: 'Talking about Sichuan food.' },
      { speaker: '小李', hanzi: '我平时不太能吃辣，比较喜欢清淡一点的菜。', pinyin: 'Wǒ píngshí bú tài néng chī là, bǐjiào xǐhuan qīngdàn yìdiǎn de cài.', english: 'I can’t really handle spice usually; I prefer lighter dishes.', context: 'Nuanced culinary preference.' }
    ],
    culturalNote: 'Food preferences are respected in Chinese dining. It is completely normal and helpful to inform your host if you don’t eat spicy (不吃辣) or are vegetarian (吃素).',
    exercises: [
      {
        id: 'u3l16-e1',
        type: 'multiple-choice',
        question: 'How do you say "I prefer drinking green tea" in Chinese?',
        options: [
          '我比较喜欢喝绿茶 (Wǒ bǐjiào xǐhuan hē lǜchá)',
          '我不喜欢喝绿茶 (Wǒ bù xǐhuan hē lǜchá)',
          '我是绿茶喝 (Wǒ shì lǜchá hē)',
          '绿茶很喜欢我 (Lǜchá hěn xǐhuan wǒ)'
        ],
        correctAnswer: '我比较喜欢喝绿茶 (Wǒ bǐjiào xǐhuan hē lǜchá)',
        explanation: '比较喜欢 indicates a comparative preference ("rather like / prefer").'
      }
    ]
  },
  {
    id: 'lesson-17',
    unitId: 3,
    unitTitle: 'Unit 3 — Natural Conversation',
    lessonNumber: 17,
    title: 'Asking for Help & Apologizing Naturally',
    subtitle: 'Navigating 不好意思 vs 对不起 and 麻烦你 (troubling someone)',
    estimatedMinutes: 11,
    level: 'Elementary (HSK 2)',
    objectives: [
      'Distinguish 不好意思 (mild embarrassment / excuse me) from 对不起 (serious apology)',
      'Politely ask for assistance using 麻烦你 (may I trouble you to...)',
      'Respond smoothly to apologies: 没关系 (no worries) and 不客气 (you’re welcome)'
    ],
    grammarAndUsage: [
      {
        title: '不好意思 (bù hǎoyìsi) vs 对不起 (duìbuqǐ)',
        explanation: '不好意思 is your multi-tool for everyday minor social frictions: squeezing past someone, asking a quick question, interrupting, or being slightly late. 对不起 is a heavier, direct apology for an actual mistake or when you caused real inconvenience.',
        tip: 'Use 麻烦你 (máfán nǐ - literally "bother you") to introduce favors: "麻烦你帮我看一下行李" (Trouble you to keep an eye on my luggage for a sec).'
      }
    ],
    vocabulary: [
      { hanzi: '麻烦你', pinyin: 'máfán nǐ', english: 'may I trouble you to... / sorry to bother', notes: 'Polite request opener' },
      { hanzi: '对不起', pinyin: 'duìbuqǐ', english: 'sorry (apology for fault)', notes: 'Direct apology' },
      { hanzi: '没关系', pinyin: 'méi guānxi', english: 'it’s okay / no problem', notes: 'Reply to apology' },
      { hanzi: '不客气', pinyin: 'bú kèqi', english: 'you’re welcome / don’t mention it', notes: 'Reply to thanks' },
      { hanzi: '帮', pinyin: 'bāng', english: 'to help', notes: 'Verb' }
    ],
    dialogueOrSentences: [
      { speaker: '顾客', hanzi: '不好意思，请问洗手间在哪里？', pinyin: 'Bù hǎoyìsi, qǐngwèn xǐshǒujiān zài nǎlǐ?', english: 'Excuse me, may I ask where the restroom is?', context: 'Polite inquiry in a mall.' },
      { speaker: '路人', hanzi: '在那边直走就是了。', pinyin: 'Zài nàbiān zhí zǒu jiù shì le.', english: 'Go straight over there and that’s it.', context: 'Helpful answer.' },
      { speaker: '顾客', hanzi: '太感谢了，麻烦你了！', pinyin: 'Tài gǎnxiè le, máfán nǐ le!', english: 'Thank you so much, sorry to have troubled you!', context: 'Warm gratitude.' }
    ],
    culturalNote: 'Saying 麻烦你了 when someone helps you acknowledges their effort and shows high conversational emotional intelligence (情商高).',
    exercises: [
      {
        id: 'u3l17-e1',
        type: 'multiple-choice',
        question: 'You want to squeeze past someone on a crowded bus. What is the most natural thing to say?',
        options: ['不好意思，借过一下。(Bù hǎoyìsi, jièguò yíxià.)', '对不起，我是人。(Duìbuqǐ, wǒ shì rén.)', '走开！(Zǒukāi!)', '没关系！(Méi guānxi!)'],
        correctAnswer: '不好意思，借过一下。(Bù hǎoyìsi, jièguò yíxià.)',
        explanation: '不好意思 combined with 借过一下 (excuse me, let me pass) is the everyday courteous phrase.'
      }
    ]
  },
  {
    id: 'lesson-18',
    unitId: 3,
    unitTitle: 'Unit 3 — Natural Conversation',
    lessonNumber: 18,
    title: 'Completed Actions (了) & Future Intentions (打算/想)',
    subtitle: 'Talking about what already happened and what you plan to do next',
    estimatedMinutes: 12,
    level: 'Elementary (HSK 2-3)',
    objectives: [
      'Understand that 了 indicates completed action or change of state, not just past tense',
      'Express future plans with 打算 (dǎsuan) and 想 (xiǎng)',
      'Tell a mini-story about your weekend'
    ],
    grammarAndUsage: [
      {
        title: 'Action Completion with 了 (le)',
        explanation: 'Chinese has no past tense verb conjugations. Instead, place 了 after the verb to indicate the action has been realized or completed: "我吃了早饭" (I ate breakfast / I have eaten breakfast).',
        tip: 'To talk about the future, use 打算 (dǎsuan - plan to) or 想 (xiǎng - want/intend to): "我打算明天去图书馆" (I plan to go to the library tomorrow).'
      }
    ],
    vocabulary: [
      { hanzi: '了', pinyin: 'le', english: 'completion / change of state particle', notes: 'Aspect marker' },
      { hanzi: '打算', pinyin: 'dǎsuan', english: 'to plan / plan', notes: 'Verb/Noun' },
      { hanzi: '想', pinyin: 'xiǎng', english: 'to want / think / miss', notes: 'Auxiliary verb' },
      { hanzi: '买', pinyin: 'mǎi', english: 'to buy', notes: 'Verb' },
      { hanzi: '电影', pinyin: 'diànyǐng', english: 'movie', notes: 'Noun' }
    ],
    dialogueOrSentences: [
      { speaker: '小赵', hanzi: '你昨天去哪里了？', pinyin: 'Nǐ zuótiān qù nǎlǐ le?', english: 'Where did you go yesterday?', context: 'Asking about the past.' },
      { speaker: '小孙', hanzi: '我去看了一部新电影。你明天有什么打算？', pinyin: 'Wǒ qù kàn le yí bù xīn diànyǐng. Nǐ míngtiān yǒu shénme dǎsuan?', english: 'I went to see a new movie. What plans do you have for tomorrow?', context: 'Notice 了 for past and 打算 for future.' }
    ],
    culturalNote: 'Chinese story-telling relies heavily on temporal words (昨天, 刚刚, 明天) rather than verb morphology. This makes sentence structure straightforward once you master time markers.',
    exercises: [
      {
        id: 'u3l18-e1',
        type: 'multiple-choice',
        question: 'Which sentence correctly expresses "I bought a cup of coffee"?',
        options: [
          '我买了一杯咖啡 (Wǒ mǎi le yì bēi kāfēi)',
          '我买咖啡了打算 (Wǒ mǎi kāfēi le dǎsuan)',
          '我想买咖啡昨天 (Wǒ xiǎng mǎi kāfēi zuótiān)',
          '我是买了咖啡 (Wǒ shì mǎi le kāfēi)'
        ],
        correctAnswer: '我买了一杯咖啡 (Wǒ mǎi le yì bēi kāfēi)',
        explanation: 'The completion particle 了 goes directly after the verb 买: 买了一杯咖啡.'
      }
    ]
  }
];
