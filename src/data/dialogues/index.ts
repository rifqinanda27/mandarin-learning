import { ConversationScenario } from '../../types';

export const conversationScenarios: ConversationScenario[] = [
  {
    id: 'convo-1',
    title: 'Meeting a New Friend at a Café',
    category: 'Daily Social',
    description: 'You are studying at a quiet café and strike up a friendly chat with someone reading a book at the next table.',
    location: 'Café in Sanlitun, Beijing',
    relationship: 'Strangers of similar age becoming friends',
    formalityLevel: 'Casual',
    objective: 'Break the ice warmly, ask what they are reading, share your background, and exchange WeChat smoothly.',
    initialNodeId: 'node-1',
    nodes: {
      'node-1': {
        id: 'node-1',
        speaker: '林浩 (Lin Hao)',
        hanzi: '这家咖啡馆挺安静的，你经常来这里吗？',
        pinyin: 'Zhè jiā kāfēiguǎn tǐng ānjìng de, nǐ jīngcháng lái zhèlǐ ma?',
        english: 'This café is quite quiet, do you come here often?',
        options: [
          {
            text: '我是第一次来，这里的咖啡很香。你也是吗？',
            pinyin: 'Wǒ shì dì-yī cì lái, zhèlǐ de kāfēi hěn xiāng. Nǐ yě shì ma?',
            english: 'It’s my first time here, the coffee smells wonderful. How about you?',
            nextNodeId: 'node-2a',
            feedback: 'Excellent! Answering honestly and immediately returning the question keeps the conversation balanced.',
            tone: 'natural',
            culturalTip: 'Complimenting the shared atmosphere (the coffee or the quiet) is a classic universal icebreaker.'
          },
          {
            text: '您好，久仰大名，很高兴见到您。',
            pinyin: 'Nín hǎo, jiǔyǎng dàmíng, hěn gāoxìng jiàndào nín.',
            english: 'Hello, I have long looked forward to meeting you, pleased to see you.',
            nextNodeId: 'node-2b',
            feedback: 'Too stiff and dramatic for a casual café setting. Lin Hao might look puzzled by "久仰大名" (long revered your fame)!',
            tone: 'too-formal',
            culturalTip: 'Save high honorifics for formal VIP receptions.'
          }
        ]
      },
      'node-2a': {
        id: 'node-2a',
        speaker: '林浩 (Lin Hao)',
        hanzi: '我也经常来，我就住在附近。看你在看中文书，你在学中文吗？',
        pinyin: 'Wǒ yě jīngcháng lái, wǒ jiù zhù zài fùjìn. Kàn nǐ zài kàn Zhōngwén shū, nǐ zài xué Zhōngwén ma?',
        english: 'I come here often too, I live just nearby. I see you reading a Chinese book, are you learning Chinese?',
        options: [
          {
            text: '对啊，我刚学了几个月，觉得汉字很有意思！',
            pinyin: 'Duì a, wǒ gāng xué le jǐ gè yuè, juéde Hànzì hěn yǒu yìsi!',
            english: 'Yes, I’ve been studying for a few months, I find Chinese characters fascinating!',
            nextNodeId: 'node-3',
            feedback: 'Very natural! Using the particle "啊" (a) conveys genuine enthusiasm.',
            tone: 'natural'
          },
          {
            text: '对，很难。我不喜欢。',
            pinyin: 'Duì, hěn nán. Wǒ bù xǐhuan.',
            english: 'Yes, very difficult. I don’t like it.',
            nextNodeId: 'node-3-flat',
            feedback: 'A bit curt and negative; it can cause the chat momentum to stall.',
            tone: 'too-casual'
          }
        ]
      },
      'node-2b': {
        id: 'node-2b',
        speaker: '林浩 (Lin Hao)',
        hanzi: '哈哈，不用这么客气！叫我林浩就行。你在学中文吗？',
        pinyin: 'Hāha, búyòng zhème kèqi! Jiào wǒ Lín Hào jiù xíng. Nǐ zài xué Zhōngwén ma?',
        english: 'Haha, no need to be so formal! Just call me Lin Hao. Are you studying Chinese?',
        options: [
          {
            text: '哈哈不好意思！对，我正在努力学中文。',
            pinyin: 'Hāha bù hǎoyìsi! Duì, wǒ zhèngzài nǔlì xué Zhōngwén.',
            english: 'Haha sorry about that! Yes, I am working hard on learning Chinese.',
            nextNodeId: 'node-3',
            feedback: 'Good recovery! Laughing off awkward formality relaxes both people immediately.',
            tone: 'natural'
          }
        ]
      },
      'node-3': {
        id: 'node-3',
        speaker: '林浩 (Lin Hao)',
        hanzi: '你的发音很标准啊！一会儿我得去办点事。加个微信吧，以后可以一起喝咖啡练习！',
        pinyin: 'Nǐ de fāyīn hěn biāozhǔn a! Yíhuìr wǒ děi qù bàn diǎn shì. Jiā gè Wēixìn ba, yǐhòu kěyǐ yìqǐ hē kāfēi liànxí!',
        english: 'Your pronunciation is really standard! I have to run an errand shortly. Let’s add each other on WeChat, we can practice and grab coffee in the future!',
        options: [
          {
            text: '好啊！我扫你还是你扫我？',
            pinyin: 'Hǎo a! Wǒ sǎo nǐ háishì nǐ sǎo wǒ?',
            english: 'Awesome! Shall I scan you or you scan me?',
            nextNodeId: 'node-end',
            feedback: 'Spot on! "我扫你还是你扫我" is the quintessential modern Chinese line for exchanging contacts.',
            tone: 'natural',
            culturalTip: 'In China, exchanging WeChat QR codes is the standard way to stay connected.'
          }
        ]
      },
      'node-3-flat': {
        id: 'node-3-flat',
        speaker: '林浩 (Lin Hao)',
        hanzi: '哈哈，语言确实需要耐心。那我先去忙了，你慢慢学！',
        pinyin: 'Hāha, yǔyán quèshí xūyào nàixīn. Nà wǒ xiān qù máng le, nǐ mànman xué!',
        english: 'Haha, languages do require patience. I’ll go take care of things now, take your time studying!',
        options: [
          {
            text: '好的，拜拜！下次见。',
            pinyin: 'Hǎo de, báibái! Xià cì jiàn.',
            english: 'Okay, bye-bye! See you next time.',
            nextNodeId: 'node-end',
            feedback: 'Polite farewell to wrap up the conversation.',
            tone: 'natural'
          }
        ]
      },
      'node-end': {
        id: 'node-end',
        speaker: '林浩 (Lin Hao)',
        hanzi: '扫好啦，常联系啊！拜拜！',
        pinyin: 'Sǎo hǎo le, cháng liánxì a! Báibái!',
        english: 'Scanned! Keep in touch! Bye-bye!',
        options: [],
        isEnding: true
      }
    },
    summaryPhrases: [
      { hanzi: '你经常来这里吗？', pinyin: 'Nǐ jīngcháng lái zhèlǐ ma?', english: 'Do you come here often?', note: 'Classic casual venue icebreaker' },
      { hanzi: '加个微信吧', pinyin: 'Jiā gè Wēixìn ba', english: 'Let’s add each other on WeChat', note: 'Universal contact exchange' },
      { hanzi: '我扫你还是你扫我？', pinyin: 'Wǒ sǎo nǐ háishì nǐ sǎo wǒ?', english: 'Should I scan you or you scan me?', note: 'Everyday digital exchange' }
    ]
  },
  {
    id: 'convo-2',
    title: 'Ordering Food at a Busy Restaurant',
    category: 'Dining',
    description: 'You are at a lively local noodle and dumpling house in Shanghai during the busy lunch hour.',
    location: 'Local eatery in Jing’an, Shanghai',
    relationship: 'Customer and busy service staff',
    formalityLevel: 'Polite',
    objective: 'Get a table for two, ask for recommendations, specify spice level, and settle the bill smoothly.',
    initialNodeId: 'node-1',
    nodes: {
      'node-1': {
        id: 'node-1',
        speaker: '服务员 (Server)',
        hanzi: '欢迎光临！请问几位？里面还有座。',
        pinyin: 'Huānyíng guānglín! Qǐngwèn jǐ wèi?',
        english: 'Welcome! How many people? There are still seats inside.',
        options: [
          {
            text: '两位，请问有靠窗的位子吗？',
            pinyin: 'Liǎng wèi, qǐngwèn yǒu kào chuāng de wèizi ma?',
            english: 'Two people, may I ask if there is a window seat?',
            nextNodeId: 'node-2',
            feedback: 'Polite, clear, and uses the polite measure word 位 (wèi) for people.',
            tone: 'polite'
          },
          {
            text: '两个人！快点！',
            pinyin: 'Liǎng gè rén! Kuài diǎn!',
            english: 'Two people! Hurry up!',
            nextNodeId: 'node-2-impatient',
            feedback: 'Demanding and unnecessarily harsh.',
            tone: 'too-casual'
          }
        ]
      },
      'node-2': {
        id: 'node-2',
        speaker: '服务员 (Server)',
        hanzi: '有的，这边请！桌上有二维码可以扫码点单，也可以看纸质菜单。',
        pinyin: 'Yǒu de, zhèbiān qǐng! Zhuō shang yǒu èrwéimǎ kěyǐ sǎomǎ diǎndān, yě kěyǐ kàn zhǐzhì càidān.',
        english: 'Yes we do, this way please! There is a QR code on the table to order on your phone, or you can look at the paper menu.',
        options: [
          {
            text: '请问你们店里有什么招牌菜推荐吗？',
            pinyin: 'Qǐngwèn nǐmen diàn lǐ yǒu shénme zhāopáicài tuījiàn ma?',
            english: 'May I ask what signature dishes your restaurant recommends?',
            nextNodeId: 'node-3',
            feedback: 'Fantastic! Asking for 招牌菜 (signature dishes) shows culinary savoir-faire.',
            tone: 'polite'
          }
        ]
      },
      'node-2-impatient': {
        id: 'node-2-impatient',
        speaker: '服务员 (Server)',
        hanzi: '那坐中间那张桌子吧。看菜单点菜。',
        pinyin: 'Nà zuò zhōngjiān nà zhāng zhuōzi ba. Kàn càidān diǎncài.',
        english: 'Then take that table in the middle. Check the menu to order.',
        options: [
          {
            text: '不好意思，请问有推荐的菜吗？',
            pinyin: 'Bù hǎoyìsi, qǐngwèn yǒu tuījiàn de cài ma?',
            english: 'Sorry, may I ask if there are recommended dishes?',
            nextNodeId: 'node-3',
            feedback: 'Great job softening the interaction with 不好意思.',
            tone: 'polite'
          }
        ]
      },
      'node-3': {
        id: 'node-3',
        speaker: '服务员 (Server)',
        hanzi: '我们的小笼包和红烧牛肉面是招牌，很多人点！牛肉面可以做微辣或者不辣。',
        pinyin: 'Wǒmen de xiǎolóngbāo hé hóngshāo niúròumiàn shì zhāopái, hěn duō rén diǎn! Niúròumiàn kěyǐ zuò wēilà huòzhě bù là.',
        english: 'Our soup dumplings and braised beef noodles are signatures, very popular! The beef noodles can be made mild spicy or non-spicy.',
        options: [
          {
            text: '太好了！来一笼小笼包和两碗牛肉面，微辣的，谢谢！',
            pinyin: 'Tài hǎo le! Lái yì lóng xiǎolóngbāo hé liǎng wǎn niúròumiàn, wēilà de, xièxie!',
            english: 'Great! Bring one steamer of soup dumplings and two bowls of beef noodles, mild spicy, thank you!',
            nextNodeId: 'node-bill',
            feedback: 'Spot on! Using 来 (bring) and correct measure words 一笼 and 两碗 sounds like a native diner.',
            tone: 'natural'
          }
        ]
      },
      'node-bill': {
        id: 'node-bill',
        speaker: '服务员 (Server)',
        hanzi: '好嘞，菜马上就来！请慢用。',
        pinyin: 'Hǎo lei, cài mǎshàng jiù lái! Qǐng mànyòng.',
        english: 'Alrighty, food will be right out! Enjoy your meal.',
        options: [
          {
            text: '服务员，买单！可以微信支付吗？',
            pinyin: 'Fúwùyuán, mǎidān! Kěyǐ Wēixìn zhīfù ma?',
            english: 'Waiter, the bill please! Can I pay via WeChat?',
            nextNodeId: 'node-end',
            feedback: 'Clear, polite, and practical.',
            tone: 'natural'
          }
        ]
      },
      'node-end': {
        id: 'node-end',
        speaker: '服务员 (Server)',
        hanzi: '一共八十六块，扫桌上的付款码就可以啦，欢迎下次再来！',
        pinyin: 'Yígòng bāshíliù kuài, sǎo zhuō shang de fùkuǎnmǎ jiù kěyǐ la, huānyíng xià cì zài lái!',
        english: 'Total is 86 yuan, just scan the payment QR code on the table, hope to see you again!',
        options: [],
        isEnding: true
      }
    },
    summaryPhrases: [
      { hanzi: '两位，请问有靠窗的位子吗？', pinyin: 'Liǎng wèi, qǐngwèn yǒu kào chuāng de wèizi ma?', english: 'Table for two, is there a window seat?', note: 'Asking for seating preferences' },
      { hanzi: '有什么招牌菜推荐吗？', pinyin: 'Yǒu shénme zhāopáicài tuījiàn ma?', english: 'What signature dishes do you recommend?', note: 'Finding the restaurant’s best food' },
      { hanzi: '来一笼... 微辣的', pinyin: 'Lái yì lóng... wēilà de', english: 'Bring one steamer of... mild spicy', note: 'Authentic food ordering formula' }
    ]
  },
  {
    id: 'convo-3',
    title: 'Asking a Stranger for Directions',
    category: 'Travel & Navigation',
    description: 'You just stepped out of an unfamiliar train exit and need to find the nearest metro entrance.',
    location: 'Beijing Railway Station South Plaza',
    relationship: 'Polite interaction with a passerby',
    formalityLevel: 'Polite',
    objective: 'Approach courteously, ask for the subway line entrance, clarify walking time, and express gratitude.',
    initialNodeId: 'node-1',
    nodes: {
      'node-1': {
        id: 'node-1',
        speaker: '路人 (Passerby)',
        hanzi: '（提着包正要走）',
        pinyin: '(Tízhe bāo zhèng yào zǒu)',
        english: '(Holding a bag, about to walk)',
        options: [
          {
            text: '不好意思，打扰一下，请问附近的地铁站在哪里？',
            pinyin: 'Bù hǎoyìsi, dǎrǎo yíxià, qǐngwèn fùjìn de dìtiě zhàn zài nǎlǐ?',
            english: 'Excuse me, sorry to interrupt, may I ask where the nearest metro station is?',
            nextNodeId: 'node-2',
            feedback: 'Polite, considerate, and non-intrusive approach.',
            tone: 'polite'
          },
          {
            text: '喂！地铁在哪？',
            pinyin: 'Wèi! Dìtiě zài nǎ?',
            english: 'Hey! Where is the subway?',
            nextNodeId: 'node-2-rude',
            feedback: 'Calling a stranger "喂" is abrupt and can startle people.',
            tone: 'too-casual'
          }
        ]
      },
      'node-2': {
        id: 'node-2',
        speaker: '路人 (Passerby)',
        hanzi: '哦，地铁站在前面的路口。你一直往前走大约两百米，过天桥就能看到入口了。',
        pinyin: 'Ò, dìtiě zhàn zài qiánmiàn de lùkǒu. Nǐ yìzhí wǎng qián zǒu dàyuē liǎng bǎi mǐ, guò tiānqiáo jiù néng kàndào rùkǒu le.',
        english: 'Oh, the metro station is at the intersection ahead. Walk straight for about 200 meters, cross the footbridge and you’ll see the entrance.',
        options: [
          {
            text: '走路大概需要几分钟呢？',
            pinyin: 'Zǒulù dàgài xūyào jǐ fēnzhōng ne?',
            english: 'Approximately how many minutes of walking does it take?',
            nextNodeId: 'node-3',
            feedback: 'Great follow-up to confirm timing.',
            tone: 'natural'
          }
        ]
      },
      'node-2-rude': {
        id: 'node-2-rude',
        speaker: '路人 (Passerby)',
        hanzi: '往前走过天桥就是。',
        pinyin: 'Wǎng qián zǒu guò tiānqiáo jiù shì.',
        english: 'Walk forward across the bridge, that’s it.',
        options: [
          {
            text: '好的，非常感谢您！',
            pinyin: 'Hǎo de, fēicháng gǎnxiè nín!',
            english: 'Got it, thank you very much!',
            nextNodeId: 'node-end',
            feedback: 'Good manners always leave a positive impression.',
            tone: 'polite'
          }
        ]
      },
      'node-3': {
        id: 'node-3',
        speaker: '路人 (Passerby)',
        hanzi: '很近，走三五分钟就到了，入口很明显。',
        pinyin: 'Hěn jìn, zǒu sān wǔ fēnzhōng jiù dào le, rùkǒu hěn míngxiǎn.',
        english: 'Very close, 3 to 5 minutes walk, the entrance is very conspicuous.',
        options: [
          {
            text: '太清楚了，麻烦您了，非常感谢！',
            pinyin: 'Tài qīngchu le, máfan nín le, fēicháng gǎnxiè!',
            english: 'That’s so clear, sorry to have troubled you, thank you very much!',
            nextNodeId: 'node-end',
            feedback: 'Exemplary courtesy! "麻烦您了" acknowledges their helpfulness.',
            tone: 'polite'
          }
        ]
      },
      'node-end': {
        id: 'node-end',
        speaker: '路人 (Passerby)',
        hanzi: '不客气，慢走啊！',
        pinyin: 'Bú kèqi, màn zǒu a!',
        english: 'You’re welcome, take care on your way!',
        options: [],
        isEnding: true
      }
    },
    summaryPhrases: [
      { hanzi: '不好意思，打扰一下', pinyin: 'Bù hǎoyìsi, dǎrǎo yíxià', english: 'Excuse me, sorry to bother', note: 'Standard courteous opener for strangers' },
      { hanzi: '一直往前走', pinyin: 'Yìzhí wǎng qián zǒu', english: 'Walk straight ahead', note: 'Direction phrase' },
      { hanzi: '麻烦您了', pinyin: 'Máfan nín le', english: 'Sorry to have troubled you', note: 'Thoughtful appreciation' }
    ]
  },
  {
    id: 'convo-4',
    title: 'Politely Declining an Invitation',
    category: 'Etiquette & Face',
    description: 'A colleague invites you to a weekend karaoke gathering, but you already have other commitments.',
    location: 'Office pantry / WeChat message',
    relationship: 'Colleagues on friendly terms',
    formalityLevel: 'Casual',
    objective: 'Decline without causing loss of face, explain tactfully, and propose a rain-check.',
    initialNodeId: 'node-1',
    nodes: {
      'node-1': {
        id: 'node-1',
        speaker: '小张 (Xiao Zhang)',
        hanzi: '这周六晚上我们部门几个朋友打算一起去唱K，你一起来吧！',
        pinyin: 'Zhè zhōuliù wǎnshang wǒmen bùmén jǐ gè péngyou dǎsuan yìqǐ qù chàng K, nǐ yìqǐ lái ba!',
        english: 'This Saturday evening a few friends from our department are planning to go to karaoke, come join us!',
        options: [
          {
            text: '真不好意思，我周六正好家里有点事，这次去不了，下次我一定去！',
            pinyin: 'Zhēn bù hǎoyìsi, wǒ zhōuliù zhènghǎo jiā lǐ yǒudiǎn shì, zhè cì qù bù liǎo, xià cì wǒ yídìng qù!',
            english: 'Really sorry, I happen to have family matters this Saturday so I can’t make it this time, I will definitely join next time!',
            nextNodeId: 'node-2',
            feedback: 'Masterful social tact! Uses the classic 3-step decline: Apology + Gentle Reason + Warm Raincheck.',
            tone: 'natural'
          },
          {
            text: '我不去，唱歌太吵了。',
            pinyin: 'Wǒ bú qù, chànggē tài chǎo le.',
            english: 'I’m not going, singing is too noisy.',
            nextNodeId: 'node-2-blunt',
            feedback: 'Too blunt; criticizing the activity makes the inviter lose face.',
            tone: 'too-casual'
          }
        ]
      },
      'node-2': {
        id: 'node-2',
        speaker: '小张 (Xiao Zhang)',
        hanzi: '哎呀真可惜，没关系，家里事要紧！那我们下次再约。',
        pinyin: 'Àiyā zhēn kěxī, méi guānxi, jiā lǐ shì yàojǐn! Nà wǒmen xià cì zài yuē.',
        english: 'Oh that’s a pity, no worries, family matters come first! We’ll arrange next time then.',
        options: [
          {
            text: '好的，你们玩得开心点啊！',
            pinyin: 'Hǎo de, nǐmen wán de kāixīn diǎn a!',
            english: 'Sure thing, you guys have a great time!',
            nextNodeId: 'node-end',
            feedback: 'Wishing them a good time demonstrates genuine warmth.',
            tone: 'natural'
          }
        ]
      },
      'node-2-blunt': {
        id: 'node-2-blunt',
        speaker: '小张 (Xiao Zhang)',
        hanzi: '额……好吧，那你忙你的。',
        pinyin: 'E... hǎo ba, nà nǐ máng nǐ de.',
        english: 'Uh... alright then, go ahead with your things.',
        options: [
          {
            text: '好的。',
            pinyin: 'Hǎo de.',
            english: 'Okay.',
            nextNodeId: 'node-end',
            feedback: 'Conversation ended somewhat awkwardly due to the blunt start.',
            tone: 'natural'
          }
        ]
      },
      'node-end': {
        id: 'node-end',
        speaker: '小张 (Xiao Zhang)',
        hanzi: '好嘞，周一见！',
        pinyin: 'Hǎo lei, zhōuyī jiàn!',
        english: 'Alright, see you Monday!',
        options: [],
        isEnding: true
      }
    },
    summaryPhrases: [
      { hanzi: '真不好意思，我正好有点事', pinyin: 'Zhēn bù hǎoyìsi, wǒ zhènghǎo yǒudiǎn shì', english: 'Really sorry, I happen to have something to attend to', note: 'Graceful decline formula' },
      { hanzi: '下次我一定去！', pinyin: 'Xià cì wǒ yídìng qù!', english: 'I’ll definitely go next time!', note: 'Preserves relationship warmth' },
      { hanzi: '玩得开心点！', pinyin: 'Wán de kāixīn diǎn!', english: 'Have a great time!', note: 'Thoughtful closing cheer' }
    ]
  }
];

export function getScenarioById(id: string): ConversationScenario | undefined {
  return conversationScenarios.find(s => s.id === id);
}
