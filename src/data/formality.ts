import { FormalityComparison } from '../types';

export const formalityComparisons: FormalityComparison[] = [
  {
    id: 'formality-1',
    title: 'Greeting Someone: Casual vs Polite Forms',
    category: 'greetings',
    context: 'Arriving at an office, school campus, or meeting an acquaintance',
    interlocutors: 'Peers / Classmates vs Clients / Elders / Respected Strangers',
    socialDistance: 'Close / Familiar vs Distant / Formal',
    informal: {
      hanzi: '嗨！你最近怎么样？',
      pinyin: 'Hāi! Nǐ zuìjìn zěnmeyàng?',
      english: 'Hi! How have you been lately?',
      whenToUse: 'With friends, classmates, and peers of similar age and rank.',
      riskOfMisuse: 'Using this with an elderly client or formal guest may feel overly casual and lack professional dignity.'
    },
    polite: {
      hanzi: '您好，您最近怎么样？',
      pinyin: 'Nín hǎo, nín zuìjìn zěnmeyàng?',
      english: 'Hello, how have you been? (Polite form)',
      whenToUse: 'With clients, guests, elders, teachers, or someone you meet for the first time in a professional context.',
      note: 'Using 您 (nín) indicates respect and deference.'
    },
    formalOrHonorific: {
      hanzi: '久仰大名，近来一切都好吗？',
      pinyin: 'Jiǔyǎng dàmíng, jìnlái yíqiè dōu hǎo ma?',
      english: 'I have long looked forward to meeting you, has everything been going well recently?',
      whenToUse: 'High-level business introductions, VIP summits, or diplomatic networking.'
    },
    whyItMatters: 'Mandarin politeness is contextual. While 您 is respectful, using it with your close friends creates awkward emotional distance (见外), making them feel pushed away. With friends, 嗨 or simple 早 is warmest.',
    commonPitfall: 'Assuming that EVERY conversation with someone older must use 您. With neighbors or close older mentors, warm familial titles like 王阿姨 or 李叔叔 combined with standard 你 are often much warmer than stiff formal language.',
    exercise: {
      id: 'f-ex-1',
      type: 'formality-pick',
      question: 'You bump into your college roommate at the campus cafeteria. Which greeting is most natural and warm?',
      options: [
        '嗨！最近怎么样？(Hāi! Zuìjìn zěnmeyàng?)',
        '您好，久仰大名！(Nín hǎo, jiǔyǎng dàmíng!)',
        '非常感谢您的光临！(Fēicháng gǎnxiè nín de guānglín!)',
        '请问您贵姓？(Qǐngwèn nín guìxìng?)'
      ],
      correctAnswer: '嗨！最近怎么样？(Hāi! Zuìjìn zěnmeyàng?)',
      explanation: 'With a close college roommate, casual warmth like "嗨！最近怎么样？" is authentic. Using 您 or formal honorifics with friends sounds like a joke or creates cold distance.'
    }
  },
  {
    id: 'formality-2',
    title: 'Asking for Help: Casual Favor vs Courteous Request',
    category: 'requests',
    context: 'Needing someone to look over a document or help carry something heavy',
    interlocutors: 'Friends / Sibling vs Senior Colleague / Stranger',
    socialDistance: 'Close vs Formal / Unknown',
    informal: {
      hanzi: '可以帮我一下吗？',
      pinyin: 'Kěyǐ bāng wǒ yíxià ma?',
      english: 'Can you give me a hand for a moment?',
      whenToUse: 'With teammates you work closely with daily, family members, or classmates.',
      riskOfMisuse: 'If spoken abruptly to a supervisor or stranger without an opener, it can sound slightly presumptive.'
    },
    polite: {
      hanzi: '请问，您可以帮我一下吗？',
      pinyin: 'Qǐngwèn, nín kěyǐ bāng wǒ yíxià ma?',
      english: 'Excuse me, could you please give me a quick hand?',
      whenToUse: 'When asking assistance from a stranger on the train, a senior manager, or service personnel.',
      note: 'The prefix 请问 (excuse me / may I ask) immediately frames the request with courteous modesty.'
    },
    formalOrHonorific: {
      hanzi: '劳驾，能否麻烦您抽空协助我一下？',
      pinyin: 'Láojià, néngfǒu máfan nín chōukòng xiézhù wǒ yíxià?',
      english: 'Pardon me, would it be possible to trouble you to spare a moment to assist me?',
      whenToUse: 'Formal written correspondence or requesting assistance from a high-ranking executive.'
    },
    whyItMatters: 'In Chinese, requests are softened by diminishing the scale of the favor. Adding 一下 (a brief moment) signals that you respect their time and are not placing a heavy burden upon them.',
    commonPitfall: 'Translating English commands directly: "帮我！" (Help me!) without 可以 or 一下 sounds commanding and borderline rude in Mandarin.',
    exercise: {
      id: 'f-ex-2',
      type: 'formality-pick',
      question: 'You are on the high-speed train and need a fellow passenger’s help lifting your luggage into the overhead rack. What is the most polite phrasing?',
      options: [
        '请问，您可以帮我一下吗？(Qǐngwèn, nín kěyǐ bāng wǒ yíxià ma?)',
        '给我拿上去！(Gěi wǒ ná shàngqu!)',
        '你帮我！(Nǐ bāng wǒ!)',
        '喂，行李给我搬。(Wèi, xíngli gěi wǒ bān.)'
      ],
      correctAnswer: '请问，您可以帮我一下吗？(Qǐngwèn, nín kěyǐ bāng wǒ yíxià ma?)',
      explanation: 'Opening with 请问 and using 您 can make strangers eager to lend a hand.'
    }
  },
  {
    id: 'formality-3',
    title: 'Thanking Someone: Everyday Thanks vs Emphatic Gratitude',
    category: 'thanking',
    context: 'Receiving a cup of water vs receiving significant mentorship or business support',
    interlocutors: 'Friends / Cashier vs Mentor / Senior Client / Key Partner',
    socialDistance: 'Everyday vs High Value / Professional',
    informal: {
      hanzi: '谢谢！/ 谢啦！',
      pinyin: 'Xièxie! / Xiè la!',
      english: 'Thanks! / Cheers!',
      whenToUse: 'Everyday interactions: getting change at a convenience store, holding a door, or receiving a file from a peer.',
      riskOfMisuse: 'If someone spends 3 hours tutoring you or gives you an interview referral, a curt "谢啦" feels underwhelming and unappreciative.'
    },
    polite: {
      hanzi: '非常感谢您的帮助！',
      pinyin: 'Fēicháng gǎnxiè nín de bāngzhù!',
      english: 'Thank you very much indeed for your assistance.',
      whenToUse: 'When someone has gone out of their way to support your career, solve a difficult issue, or host you.',
      note: 'Pairs wonderfully with 辛苦了 (Thank you for your hard work).'
    },
    formalOrHonorific: {
      hanzi: '承蒙关照，不胜感激！',
      pinyin: 'Chéngméng guānzhào, búshèng gǎnjī!',
      english: 'I am immensely grateful for your esteemed care and support.',
      whenToUse: 'Formal written thank-you letters, corporate announcements, and ceremonial cards.'
    },
    whyItMatters: 'Matching the scale of your gratitude to the significance of the deed is central to Chinese reciprocal ethics (人情).',
    commonPitfall: 'Using "非常感谢您的帮助" when a buddy passes the salt. It sounds robotic or sarcastic.',
    exercise: {
      id: 'f-ex-3',
      type: 'formality-pick',
      question: 'Your senior mentor spent their Saturday helping you prepare for a crucial job interview. How should you express your gratitude?',
      options: [
        '非常感谢您的耐心帮助，今天辛苦您了！',
        '谢啦。',
        '拜拜！',
        '没关系！'
      ],
      correctAnswer: '非常感谢您的耐心帮助，今天辛苦您了！',
      explanation: 'For significant mentorship, acknowledging their time and using 辛苦您了 shows genuine maturity and gratitude.'
    }
  },
  {
    id: 'formality-4',
    title: 'Apologizing: Social Cushion (不好意思) vs Sincere Apology (对不起)',
    category: 'apologizing',
    context: 'Slightly brushing someone’s arm vs spilling tea on someone’s laptop',
    interlocutors: 'Strangers / Friends vs Aggrieved Party',
    socialDistance: 'Any',
    informal: {
      hanzi: '不好意思！',
      pinyin: 'Bù hǎoyìsi!',
      english: 'Sorry / Excuse me (mild embarrassment)',
      whenToUse: 'Everyday minor friction: squeezing through a crowd, reaching for an item, running 2 minutes late, or interrupting a conversation.',
      riskOfMisuse: 'Using only 不好意思 after causing severe financial loss or breaking someone’s valuable possession may sound evasive.'
    },
    polite: {
      hanzi: '实在对不起，是我的疏忽。',
      pinyin: 'Shízài duìbuqǐ, shì wǒ de shūhū.',
      english: 'I am truly sorry, it was entirely my oversight.',
      whenToUse: 'When you made a real mistake, missed an important deadline, or caused genuine inconvenience.',
      note: '对不起 explicitly accepts fault and ownership of the consequence.'
    },
    formalOrHonorific: {
      hanzi: '深表歉意，给您带来不便，敬请谅解。',
      pinyin: 'Shēnbiǎo qiànyì, gěi nín dài lái búbiàn, jìngqǐng liàngjiě.',
      english: 'We express our deepest apologies for the inconvenience caused, and respectfully request your understanding.',
      whenToUse: 'Official company service outages, public statements, or business contract delays.'
    },
    whyItMatters: 'Learners often overuse 对不起 for small things like passing by in a hallway. Native speakers use 不好意思 90% of the time in daily life.',
    commonPitfall: 'Saying 对不起 when someone else sneezes or has bad luck. In Chinese, 对不起 means "I am at fault", not "I empathize with your bad day".',
    exercise: {
      id: 'f-ex-4',
      type: 'formality-pick',
      question: 'You need to ask a stranger on the metro to make a little room so you can reach the door. What is the most natural phrase?',
      options: [
        '不好意思，借过一下。(Bù hǎoyìsi, jièguò yíxià.)',
        '对不起，我错了！(Duìbuqǐ, wǒ cuò le!)',
        '走开！(Zǒukāi!)',
        '你给我让路！(Nǐ gěi wǒ ràng lù!)'
      ],
      correctAnswer: '不好意思，借过一下。(Bù hǎoyìsi, jièguò yíxià.)',
      explanation: '不好意思 is the natural social lubricant for passing by. 对不起 implies you committed an actual offense.'
    }
  },
  {
    id: 'formality-5',
    title: 'Making Requests: Abrupt Demands vs Gentle Inquiries',
    category: 'requests',
    context: 'Wanting to look at a colleague’s tablet or borrow a pen',
    interlocutors: 'Close Brother vs Colleague / Acquaintance',
    socialDistance: 'Zero distance vs Polite professional distance',
    informal: {
      hanzi: '给我一下。',
      pinyin: 'Gěi wǒ yíxià.',
      english: 'Give it to me for a moment.',
      whenToUse: 'Only between siblings or best friends in the middle of a shared task.',
      riskOfMisuse: 'To a colleague or customer, this sounds like a curt demand or command.'
    },
    polite: {
      hanzi: '可以给我看一下吗？/ 方便借我用一下吗？',
      pinyin: 'Kěyǐ gěi wǒ kàn yíxià ma? / Fāngbiàn jiè wǒ yòng yíxià ma?',
      english: 'Could you let me take a quick look? / Is it convenient to borrow this for a moment?',
      whenToUse: 'Standard respectful workplace and social communication.',
      note: '方便 (convenient) checks if it is comfortable for the other person, showing great thoughtfulness.'
    },
    formalOrHonorific: {
      hanzi: '如蒙方便，不知可否容我参阅？',
      pinyin: 'Rú méng fāngbiàn, bùzhī kěfǒu róng wǒ cānyuè?',
      english: 'If convenient, may I respectfully request permission to consult the reference?',
      whenToUse: 'Academic archives, rare book collections, or high diplomatic protocol.'
    },
    whyItMatters: 'Using 方便 (fāngbiàn) signals that you are giving the other person an easy out without pressure.',
    commonPitfall: 'Forgetting that tone and softness matter as much as vocabulary. Always add a smile and slight nod.',
    exercise: {
      id: 'f-ex-5',
      type: 'formality-pick',
      question: 'You want to check the blueprint on your coworker’s desk. How should you ask?',
      options: [
        '方便让我看一下这份图纸吗？',
        '拿给我！',
        '图纸必须给我。',
        '喂，拿来！'
      ],
      correctAnswer: '方便让我看一下这份图纸吗？',
      explanation: 'Using 方便 (if convenient) and 看一下 (take a quick look) makes the request polite and pleasant.'
    }
  },
  {
    id: 'formality-6',
    title: 'Inviting Someone: Friendly Call vs Respectful Invitation',
    category: 'inviting',
    context: 'Asking someone to join lunch or coffee',
    interlocutors: 'Classmate vs Department Head / Valued Guest',
    socialDistance: 'Peer vs Senior / Respected Host',
    informal: {
      hanzi: '一起去吃饭吧！',
      pinyin: 'Yìqǐ qù chīfàn ba!',
      english: 'Let’s go eat together!',
      whenToUse: 'Teammates at lunchtime, college buddies, or casual weekend hangouts.',
      riskOfMisuse: 'Saying this to your university president or an elderly client may sound slightly over-familiar without an honorific.'
    },
    polite: {
      hanzi: '您这周末有时间一起吃个便饭吗？',
      pinyin: 'Nín zhè zhōumò yǒu shíjiān yìqǐ chī gè biànfàn ma?',
      english: 'Would you happen to have time this weekend to share a simple meal together?',
      whenToUse: 'Inviting a professor, senior advisor, or business partner.',
      note: '便饭 (biànfàn - literally "simple meal") is a classic Chinese cultural modesty word that avoids putting pressure on the guest.'
    },
    formalOrHonorific: {
      hanzi: '特备薄酒，诚挚邀请阁下赏光出席。',
      pinyin: 'Tè bèi bójiǔ, chéngzhì yāoqǐng géxià shǎngguāng chūxí.',
      english: 'We have prepared humble refreshments and cordially invite you to honor us with your presence.',
      whenToUse: 'Formal printed banquet invitations and anniversary galas.'
    },
    whyItMatters: 'Chinese hospitality traditionally employs modest self-deprecating terms (e.g. 便饭 simple meal, 薄酒 humble drink) even when hosting a luxurious banquet.',
    commonPitfall: 'Demanding an immediate RSVP. Chinese politeness gives people room to consult their schedules without feeling cornered.',
    exercise: {
      id: 'f-ex-6',
      type: 'formality-pick',
      question: 'How would you invite a visiting professor to have lunch with your student team?',
      options: [
        '李教授，您中午有时间一起吃个便饭吗？',
        '李教授，来吃饭吧，走！',
        '你给我去吃饭。',
        '吃饭必须去。'
      ],
      correctAnswer: '李教授，您中午有时间一起吃个便饭吗？',
      explanation: 'Addressing with title (李教授), respectful pronoun 您, and the modest phrase 吃个便饭 is cultured and courteous.'
    }
  }
];

export function getFormalityById(id: string): FormalityComparison | undefined {
  return formalityComparisons.find(f => f.id === id);
}
