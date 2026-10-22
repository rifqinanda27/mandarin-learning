import { Lesson } from '../../types';

export const unit4Lessons: Lesson[] = [
  {
    id: 'lesson-19',
    unitId: 4,
    unitTitle: 'Unit 4 — Social Context & Politeness',
    lessonNumber: 19,
    title: 'Speaking to Friends vs Strangers',
    subtitle: 'Navigating conversational distance, warmth, and boundary awareness',
    estimatedMinutes: 11,
    level: 'Elementary to Intermediate (HSK 2-3)',
    objectives: [
      'Learn how tone shifts between intimacy (熟人) and unfamiliarity (陌生人)',
      'Use 请问 (excuse me) and 打扰一下 (sorry to interrupt) with strangers',
      'Understand why using overly formal language with close friends feels cold'
    ],
    grammarAndUsage: [
      {
        title: 'The Danger of "Over-Politeness" with Friends (见外)',
        explanation: 'In Chinese culture, being excessively formal with friends is called 见外 (jiànwài - treating an insider like an outsider). If a close friend hands you a drink and you say "非常感谢您的帮助" (Thank you very much for your help), it creates awkward emotional distance! Simple "谢啦！" (Xiè la!) is much warmer.',
        tip: 'Reserve formal expressions and 您 for strangers, clients, elders, and service staff.'
      }
    ],
    vocabulary: [
      { hanzi: '请问', pinyin: 'qǐngwèn', english: 'may I ask / excuse me', notes: 'Polite opener for strangers' },
      { hanzi: '打扰一下', pinyin: 'dǎrǎo yíxià', english: 'sorry to disturb / interrupt', notes: 'Courteous interjection' },
      { hanzi: '谢啦', pinyin: 'xiè la', english: 'thanks! (casual)', notes: 'Used with close peers' },
      { hanzi: '见外', pinyin: 'jiànwài', english: 'to act like a stranger / over-polite', notes: 'Cultural concept' }
    ],
    dialogueOrSentences: [
      { speaker: '陌生人 (Stranger)', hanzi: '不好意思，打扰一下，请问附近有药店吗？', pinyin: 'Bù hǎoyìsi, dǎrǎo yíxià, qǐngwèn fùjìn yǒu yàodiàn ma?', english: 'Excuse me, sorry to interrupt, may I ask if there is a pharmacy nearby?', context: 'Polite stranger approach.' },
      { speaker: '好友 (Close Friend)', hanzi: '谢啦哥们儿，下次我请你！', pinyin: 'Xiè la gēmer, xià cì wǒ qǐng nǐ!', english: 'Thanks buddy, next time is on me!', context: 'Casual peer warmth.' }
    ],
    culturalNote: 'True friendship in China is characterized by ease and relaxed banter, not rigid ceremonial greetings.',
    exercises: [
      {
        id: 'u4l19-e1',
        type: 'multiple-choice',
        question: 'Your close classmate hands you a pen you dropped. What is the most natural reply?',
        options: ['谢啦！(Xiè la!)', '非常感谢您的伟大帮助！(Fēicháng gǎnxiè nín de wěidà bāngzhù!)', '你好。(Nǐ hǎo.)', '请问您贵姓？(Qǐngwèn nín guìxìng?)'],
        correctAnswer: '谢啦！(Xiè la!)',
        explanation: 'With close friends and classmates, casual warmth like 谢啦 is authentic and avoids being awkwardly distant (见外).'
      }
    ]
  },
  {
    id: 'lesson-20',
    unitId: 4,
    unitTitle: 'Unit 4 — Social Context & Politeness',
    lessonNumber: 20,
    title: 'Speaking to Older People & Teachers',
    subtitle: 'Using respectful forms (您), proper titles, and modest phrasing',
    estimatedMinutes: 11,
    level: 'Elementary to Intermediate (HSK 2-3)',
    objectives: [
      'Address teachers with Title: Surname + 老师 (e.g., 王老师)',
      'Use 您 and 辛苦了 with educators and elders',
      'Learn how to ask questions in office hours respectfully'
    ],
    grammarAndUsage: [
      {
        title: 'Surname + Title Order',
        explanation: 'In Chinese, the professional title ALWAYS follows the family surname: 张老师 (Teacher Zhang), 李教授 (Professor Li), 王医生 (Doctor Wang). Never say "Teacher Zhang" as "老师张"!',
        tip: 'When greeting a teacher in the hallway, say "王老师好！" or "王老师，您好！".'
      }
    ],
    vocabulary: [
      { hanzi: '老师', pinyin: 'lǎoshī', english: 'teacher', notes: 'Honorific title' },
      { hanzi: '请教', pinyin: 'qǐngjiào', english: 'to seek advice / consult respectfully', notes: 'Polite verb' },
      { hanzi: '辛苦了', pinyin: 'xīnkǔ le', english: 'you have worked hard / thank you for your effort', notes: 'Appreciation' },
      { hanzi: '问题', pinyin: 'wèntí', english: 'question / problem', notes: 'Noun' }
    ],
    dialogueOrSentences: [
      { speaker: '学生', hanzi: '张老师，您好！我可以向您请教一个问题吗？', pinyin: 'Zhāng lǎoshī, nín hǎo! Wǒ kěyǐ xiàng nín qǐngjiào yí gè wèntí ma?', english: 'Teacher Zhang, hello! May I consult you on a question?', context: 'Polite academic inquiry.' },
      { speaker: '张老师', hanzi: '当然可以，你坐下慢慢说。', pinyin: 'Dāngrán kěyǐ, nǐ zuò xià mànman shuō.', english: 'Of course, sit down and take your time.', context: 'Welcoming teacher.' }
    ],
    culturalNote: 'Saying "老师辛苦了！" (Teacher, thank you for your hard work!) at the end of class is a widely practiced and appreciated tradition in Chinese educational institutions.',
    exercises: [
      {
        id: 'u4l20-e1',
        type: 'multiple-choice',
        question: 'How should you address your Chinese teacher whose surname is Wang?',
        options: ['王老师 (Wáng lǎoshī)', '老师王 (Lǎoshī Wáng)', '王先生 (Wáng xiānsheng)', '你王 (Nǐ Wáng)'],
        correctAnswer: '王老师 (Wáng lǎoshī)',
        explanation: 'In Chinese titles, the surname comes first followed by the profession title: 王老师.'
      }
    ]
  },
  {
    id: 'lesson-21',
    unitId: 4,
    unitTitle: 'Unit 4 — Social Context & Politeness',
    lessonNumber: 21,
    title: 'Workplace Communication & Coworkers',
    subtitle: 'Professional emails, asking for reviews, and daily office etiquette',
    estimatedMinutes: 12,
    level: 'Intermediate (HSK 3)',
    objectives: [
      'Address supervisors: Surname + Manager/Director (李经理, 张总)',
      'Deliver materials respectfully: 请您查阅 (Please review) / 请过目',
      'Use 辛苦了 (xīnkǔ le) to acknowledge team members after projects'
    ],
    grammarAndUsage: [
      {
        title: 'Office Politeness Formula: 麻烦 + Action + 一下',
        explanation: 'When asking a colleague for a favor or report, soften the request using: 麻烦你 + Action + 一下. For example: "麻烦你发我一下这份文件" (Could you trouble yourself to send me this document?).',
        tip: 'In office emails, opening with "领导您好" or "[Name], 您好" and closing with "祝工作顺利" is standard practice.'
      }
    ],
    vocabulary: [
      { hanzi: '经理', pinyin: 'jīnglǐ', english: 'manager', notes: 'Title' },
      { hanzi: '文件', pinyin: 'wénjiàn', english: 'document / file', notes: 'Noun' },
      { hanzi: '发', pinyin: 'fā', english: 'to send / email', notes: 'Verb' },
      { hanzi: '顺利', pinyin: 'shùnlì', english: 'smooth / successful', notes: 'Adjective' }
    ],
    dialogueOrSentences: [
      { speaker: '小李', hanzi: '李经理，这是本周的项目报告，请您过目。', pinyin: 'Lǐ jīnglǐ, zhè shì běn zhōu de xiàngmù bàogào, qǐng nín guòmù.', english: 'Manager Li, here is this week’s project report, please look it over.', context: 'Professional delivery.' },
      { speaker: '李经理', hanzi: '好的，辛苦了！我今天下午看。', pinyin: 'Hǎo de, xīnkǔ le! Wǒ jīntiān xiàwǔ kàn.', english: 'Great, thanks for your hard work! I’ll review it this afternoon.', context: 'Manager acknowledgement.' }
    ],
    culturalNote: 'In modern tech companies in China, people often call each other by English names or nickname + 哥/姐 (e.g. 敏姐) to encourage a flat, collaborative atmosphere.',
    exercises: [
      {
        id: 'u4l21-e1',
        type: 'multiple-choice',
        question: 'Which phrase is widely used to express appreciation for someone’s hard work on a task?',
        options: ['辛苦了！(Xīnkǔ le!)', '不好意思！(Bù hǎoyìsi!)', '没用！(Méi yòng!)', '随便！(Suíbiàn!)'],
        correctAnswer: '辛苦了！(Xīnkǔ le!)',
        explanation: '辛苦了 acknowledges effort and diligence, and is spoken between colleagues, bosses, and clients daily.'
      }
    ]
  },
  {
    id: 'lesson-22',
    unitId: 4,
    unitTitle: 'Unit 4 — Social Context & Politeness',
    lessonNumber: 22,
    title: 'Polite Requests & Softening Tone (一下 / 吧)',
    subtitle: 'Transforming blunt commands into courteous, natural requests',
    estimatedMinutes: 10,
    level: 'Elementary to Intermediate (HSK 2-3)',
    objectives: [
      'Learn how 一下 (yíxià) softens actions into quick, gentle requests',
      'Use verb reduplication (看看, 听听) to reduce pressure',
      'Compare: 给我 (abrupt) vs 可以给我看一下吗 (polite and gentle)'
    ],
    grammarAndUsage: [
      {
        title: 'The Softening Power of 一下 (yíxià)',
        explanation: 'Adding 一下 after a verb indicates the action is brief and informal, dramatically lowering the burden on the listener:\n- 等 (wait) -> 等一下 (wait a brief moment)\n- 帮我 (help me) -> 帮我一下 (give me a quick hand)\n- 看 (look) -> 看一下 (take a quick look).',
        tip: 'Combine with 可以...吗: "可以帮我看一下吗？" (Could you take a quick look for me?) is 10/10 polite.'
      }
    ],
    vocabulary: [
      { hanzi: '一下', pinyin: 'yíxià', english: 'a bit / briefly (softener)', notes: 'Grammar word' },
      { hanzi: '等', pinyin: 'děng', english: 'to wait', notes: 'Verb' },
      { hanzi: '可以', pinyin: 'kěyǐ', english: 'can / may', notes: 'Modal verb' },
      { hanzi: '稍等', pinyin: 'shāoděng', english: 'please wait a moment (polite)', notes: 'Service phrase' }
    ],
    dialogueOrSentences: [
      { speaker: '顾客', hanzi: '你好，我可以看一下这个菜单吗？', pinyin: 'Nǐ hǎo, wǒ kěyǐ kàn yíxià zhè ge càidān ma?', english: 'Hello, could I take a quick look at this menu?', context: 'Polite request at café.' },
      { speaker: '店员', hanzi: '没问题，请稍等一下，马上给您拿！', pinyin: 'Méi wèntí, qǐng shāoděng yíxià, mǎshàng gěi nín ná!', english: 'No problem, please wait a moment, I will bring it right over!', context: 'Polite service reply.' }
    ],
    culturalNote: 'Blunt imperatives (e.g. "给我看！") can sound rude or bossy. Adding 一下 and 可以 immediately marks you as a thoughtful, considerate speaker.',
    exercises: [
      {
        id: 'u4l22-e1',
        type: 'multiple-choice',
        question: 'Which sentence sounds the most courteous when asking to look at something?',
        options: [
          '可以给我看一下吗？(Kěyǐ gěi wǒ kàn yíxià ma?)',
          '给我！(Gěi wǒ!)',
          '快看！(Kuài kàn!)',
          '看这个！(Kàn zhè ge!)'
        ],
        correctAnswer: '可以给我看一下吗？(Kěyǐ gěi wǒ kàn yíxià ma?)',
        explanation: 'Combining 可以 with 一下 makes the request courteous, gentle, and respectful.'
      }
    ]
  },
  {
    id: 'lesson-23',
    unitId: 4,
    unitTitle: 'Unit 4 — Social Context & Politeness',
    lessonNumber: 23,
    title: 'Disagreeing Politely & Avoiding Confrontation',
    subtitle: 'How to express a differing opinion without causing loss of face',
    estimatedMinutes: 11,
    level: 'Intermediate (HSK 3)',
    objectives: [
      'Avoid blunt words like 你错了 (you are wrong)',
      'Use the indirect cushion pattern: 我觉得...不过... (I feel... however...)',
      'Suggest alternative perspectives: 也许我们可以... (Perhaps we could...)'
    ],
    grammarAndUsage: [
      {
        title: 'The Harmony Cushion Pattern',
        explanation: 'Never say "你错了" (nǐ cuò le - you are wrong) in polite conversation or meetings. Instead, validate first, then gently introduce another view: "你说得有道理，不过从另一个角度来看..." (What you say makes sense, however looking from another angle...).',
        tip: 'Use 也许 (yěxǔ - perhaps) and 可能 (kěnéng - maybe) to soften statements.'
      }
    ],
    vocabulary: [
      { hanzi: '有道理', pinyin: 'yǒu dàolǐ', english: 'makes sense / reasonable', notes: 'Agreement phrase' },
      { hanzi: '不过', pinyin: 'búguò', english: 'however / but', notes: 'Gentle transition' },
      { hanzi: '也许', pinyin: 'yěxǔ', english: 'perhaps / maybe', notes: 'Adverb' },
      { hanzi: '想法', pinyin: 'xiǎngfǎ', english: 'idea / point of view', notes: 'Noun' }
    ],
    dialogueOrSentences: [
      { speaker: '同事A', hanzi: '我觉得我们下周就上线这个新功能。', pinyin: 'Wǒ juéde wǒmen xià zhōu jiù shàngxiàn zhè ge xīn gōngnéng.', english: 'I think we should launch this new feature next week.', context: 'Project meeting.' },
      { speaker: '同事B', hanzi: '你的想法很好，不过测试时间有点紧，也许推迟一周更稳妥？', pinyin: 'Nǐ de xiǎngfǎ hěn hǎo, búguò cèshì shíjiān yǒudiǎn jǐn, yěxǔ tuīchí yì zhōu gèng wěntuǒ?', english: 'Your idea is great, however testing time is quite tight; perhaps delaying by a week would be safer?', context: 'Polite and constructive disagreement.' }
    ],
    culturalNote: 'In Chinese communication, saving face (面子) allows both parties to maintain mutual respect. Indirect phrasing is viewed as wisdom, not weakness.',
    exercises: [
      {
        id: 'u4l23-e1',
        type: 'multiple-choice',
        question: 'Which response is the most constructive and polite when disagreeing in a group discussion?',
        options: [
          '你说得有道理，不过也许我们可以考虑另一个方案？',
          '你错了，完全不对！',
          '别说了，听我的。',
          '不行不行！'
        ],
        correctAnswer: '你说得有道理，不过也许我们可以考虑另一个方案？',
        explanation: 'Affirming that their point has merit (有道理) followed by a gentle alternative (也许我们可以...) preserves harmony and professional respect.'
      }
    ]
  },
  {
    id: 'lesson-24',
    unitId: 4,
    unitTitle: 'Unit 4 — Social Context & Politeness',
    lessonNumber: 24,
    title: 'Texting Etiquette & Online Casual Mandarin',
    subtitle: 'WeChat norms, 哈哈, 好的, 收到, and modern digital slang',
    estimatedMinutes: 10,
    level: 'Elementary to Intermediate (HSK 2-3)',
    objectives: [
      'Master essential WeChat response words: 好的 (okay), 收到 (received/got it), 哈哈 (haha)',
      'Understand repetition in texting: 好的好的 (shows genuine enthusiasm)',
      'Know why typing a single "哦" or "嗯" can seem cold or passive-aggressive'
    ],
    grammarAndUsage: [
      {
        title: 'Doubling for Warmth: 好的好的 vs 好的',
        explanation: 'In Chinese texting (WeChat), doubling words softens the tone: "好的好的" or "好好好" sounds helpful and cheerful, while a solitary "哦" (ò) or "嗯" (ēn) can feel indifferent or curt.',
        tip: 'In work chats, replying "收到" (shōudào - received / acknowledged) confirms you have read the notice.'
      }
    ],
    vocabulary: [
      { hanzi: '收到', pinyin: 'shōudào', english: 'received / got it', notes: 'Work chat staple' },
      { hanzi: '好的好的', pinyin: 'hǎo de hǎo de', english: 'sure thing / will do!', notes: 'Warm acceptance' },
      { hanzi: '哈哈', pinyin: 'hāhā', english: 'haha (laughter)', notes: 'Online chat' },
      { hanzi: '没问题', pinyin: 'méi wèntí', english: 'no problem!', notes: 'Assurance' }
    ],
    dialogueOrSentences: [
      { speaker: '微信群通知', hanzi: '明天上午十点准时开会，请大家带好笔记本。', pinyin: 'Míngtiān shàngwǔ shí diǎn zhǔnshí kāihuì, qǐng dàjiā dài hǎo bǐjìběn.', english: 'Meeting tomorrow at 10 AM sharp, please bring your laptops.', context: 'WeChat announcement.' },
      { speaker: '群成员', hanzi: '收到！好的没问题。', pinyin: 'Shōudào! Hǎo de méi wèntí.', english: 'Received! Got it, no problem.', context: 'Professional quick acknowledgment.' }
    ],
    culturalNote: 'Sending voice messages (语音) on WeChat to strangers or superiors without asking first is considered slightly impolite because it requires the recipient to listen instead of scan text.',
    exercises: [
      {
        id: 'u4l24-e1',
        type: 'multiple-choice',
        question: 'What is the standard professional acknowledgment in a work chat group after receiving instructions?',
        options: ['收到！(Shōudào!)', '拜拜！(Báibái!)', '喂！(Wèi!)', '你是谁？(Nǐ shì shéi?)'],
        correctAnswer: '收到！(Shōudào!)',
        explanation: '收到 confirms that the message has been read and acknowledged.'
      }
    ]
  }
];
