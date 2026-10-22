import { ReadingPassage } from '../../types';

export const readingPassages: ReadingPassage[] = [
  {
    id: 'reading-1',
    title: 'WeChat Group: Planning a Friday Dinner',
    category: 'chat',
    difficulty: 'HSK 1',
    summary: 'Xiao Wang and friends decide where to eat dinner after work this Friday.',
    chineseText: '小王：大家周五晚上有空吗？我们好久没有一起聚聚了！\n小李：我有空！去吃火锅怎么样？这几天天气挺冷的。\n小张：好主意！我知道市中心有一家新开的四川火锅店，味道很正宗，而且周五打八折。\n小王：太棒了！那我们周五晚上六点半在地铁站三号出口见，不见不散！\n小李：收到！周五见！',
    pinyinText: 'Xiǎo Wáng: Dàjiā zhōuwǔ wǎnshang yǒu kòng ma? Wǒmen hǎojiǔ méiyǒu yìqǐ jùju le!\nXiǎo Lǐ: Wǒ yǒu kòng! Qù chī huǒguō zěnmeyàng? Zhè jǐ tiān tiānqì tǐng lěng de.\nXiǎo Zhāng: Hǎo zhǔyì! Wǒ zhīdào shì zhōngxīn yǒu yì jiā xīn kāi de Sìchuān huǒguōdiàn, wèidao hěn zhèngzōng, érqiě zhōuwǔ dǎ bā zhé.\nXiǎo Wáng: Tài bàng le! Nà wǒmen zhōuwǔ wǎnshang liù diǎn bàn zài dìtiě zhàn sān hào chūkǒu jiàn, bú jiàn bú sàn!\nXiǎo Lǐ: Shōudào! Zhōuwǔ jiàn!',
    englishText: 'Xiao Wang: Is everyone free Friday night? We haven’t hung out together for so long!\nXiao Li: I’m free! How about eating hotpot? The weather has been quite cold these days.\nXiao Zhang: Great idea! I know a newly opened Sichuan hotpot place in the city center; the flavor is very authentic, and there is a 20% discount on Fridays.\nXiao Wang: Awesome! Then let’s meet this Friday at 6:30 PM at Metro Exit 3, be there or be square!\nXiao Li: Got it! See you Friday!',
    glossary: [
      { hanzi: '聚聚', pinyin: 'jùju', english: 'to get together / hang out' },
      { hanzi: '火锅', pinyin: 'huǒguō', english: 'hotpot' },
      { hanzi: '正宗', pinyin: 'zhèngzōng', english: 'authentic / genuine' },
      { hanzi: '打八折', pinyin: 'dǎ bā zhé', english: '20% off (pay 80%)' },
      { hanzi: '不见不散', pinyin: 'bú jiàn bú sàn', english: 'be there or be square' }
    ],
    questions: [
      {
        question: 'What kind of food did the friends choose to eat?',
        options: ['Sichuan hotpot', 'Dumplings', 'Italian pasta', 'Barbecue'],
        correctIndex: 0,
        explanation: 'Xiao Li suggested hotpot and Xiao Zhang recommended an authentic Sichuan hotpot restaurant in the city center.'
      },
      {
        question: 'Where and when are they meeting?',
        options: [
          'Friday 6:30 PM at Metro Exit 3',
          'Saturday 7:00 PM at the restaurant',
          'Friday 12:00 PM at school',
          'Sunday 6:30 PM at Exit 1'
        ],
        correctIndex: 0,
        explanation: 'Xiao Wang states: "周五晚上六点半在地铁站三号出口见" (Friday 6:30 PM at Metro Exit 3).'
      }
    ]
  },
  {
    id: 'reading-2',
    title: 'Authentic Café Menu: Spring Specials',
    category: 'menu',
    difficulty: 'HSK 1',
    summary: 'Daily menu featuring coffee, tea, and homemade pastries.',
    chineseText: '【花舍咖啡馆·今日推荐】\n1. 美式咖啡（冷/热）：￥22\n2. 拿铁咖啡（燕麦奶可选）：￥28\n3. 龙井绿茶（热壶，可续水）：￥35\n4. 手工提拉米苏蛋糕：￥32\n*优惠活动：下午两点至五点，点任意饮品加配蛋糕立减10元。\n*温馨提示：本店支持微信、支付宝扫码支付，全场提供免费无线网络（Wi-Fi）。',
    pinyinText: '【Huāshè Kāfēiguǎn · Jīnrì Tuījiàn】\n1. Měishì kāfēi (lěng / rè): 22 yuán\n2. Nátiě kāfēi (yànmàinǎi kěxuǎn): 28 yuán\n3. Lóngjǐng lǜchá (rè hú, kě xùshuǐ): 35 yuán\n4. Shǒugōng tílāmǐsū dàngāo: 32 yuán\n* Yōuhuì huódòng: Xiàwǔ liǎng diǎn zhì wǔ diǎn, diǎn rènyì yǐnpǐn jiā pèi dàngāo lì jiǎn 10 yuán.\n* Wēnxīn tíshì: Běndiàn zhīchí Wēixìn, Zhīfùbǎo sǎomǎ zhīfù, quánchǎng tígōng miǎnfèi wúxiàn wǎngluò (Wi-Fi).',
    englishText: '【Flora Cottage Café · Today’s Recommendations】\n1. Americano (Iced/Hot): 22 RMB\n2. Café Latte (Oat milk available): 28 RMB\n3. Longjing Green Tea (Hot pot, free refills of hot water): 35 RMB\n4. Handmade Tiramisu Cake: 32 RMB\n* Special Offer: From 2:00 PM to 5:00 PM, order any drink with cake to get an instant 10 RMB discount.\n* Kind Reminder: Our shop supports WeChat and Alipay mobile payments, and offers free Wi-Fi throughout.',
    glossary: [
      { hanzi: '拿铁', pinyin: 'nátiě', english: 'latte' },
      { hanzi: '续水', pinyin: 'xùshuǐ', english: 'refill water' },
      { hanzi: '立减', pinyin: 'lì jiǎn', english: 'instant discount' },
      { hanzi: '免费', pinyin: 'miǎnfèi', english: 'free of charge' }
    ],
    questions: [
      {
        question: 'Which drink offers free hot water refills?',
        options: ['Longjing Green Tea', 'Americano', 'Café Latte', 'Iced Water'],
        correctIndex: 0,
        explanation: 'The menu specifies "龙井绿茶（热壶，可续水）" — hot pot green tea can be refilled.'
      },
      {
        question: 'If you order a Latte (28 RMB) and Tiramisu (32 RMB) at 3:00 PM, how much is the total after discount?',
        options: ['50 RMB', '60 RMB', '45 RMB', '40 RMB'],
        correctIndex: 0,
        explanation: '28 + 32 = 60 RMB, minus the 10 RMB afternoon special offer = 50 RMB.'
      }
    ]
  },
  {
    id: 'reading-3',
    title: 'Metro Navigation & Platform Notice',
    category: 'transport',
    difficulty: 'HSK 2',
    summary: 'Announcement board at a major subway transfer hub.',
    chineseText: '【地铁2号线运营提示】\n各位乘客，您好！欢迎乘坐上海轨道交通2号线。\n本站为南京东路换乘站，可换乘10号线。\n去往虹桥火车站及浦东国际机场方向的乘客，请在站台两侧按地面导向标识有序排队候车。\n请大家先下后上，注意脚下安全，小心列车与站台之间的空隙。\n车厢内请勿饮食和大声喧哗，如需帮助，请联系车站工作人员。',
    pinyinText: '【Dìtiě èr hào xiàn yùnyíng tíshì】\nGèwèi chéngkè, nín hǎo! Huānyíng chéngzuò Shànghǎi guǐdào jiāotōng èr hào xiàn.\nBěnzhàn wèi Nánjīng Dōng Lù huànchéngzhàn, kě huànchéng shí hào xiàn.\nQùwǎng Hóngqiáo Huǒchēzhàn jí Pǔdōng Guójì Jīchǎng fāngxiàng de chéngkè, qǐng zài zhàntái liǎng cè àn dìmiàn dǎoxiàng biāoshì yǒuxù páiduì hòuchē.\nQǐng dàjiā xiān xià hòu shàng, zhùyì jiǎoxià ānquán, xiǎoxīn lièchē yǔ zhàntái zhījiān de kòngxì.\nChēxiāng nèi qǐng wù yǐnshí hé dàshēng xuānhuá, rú xū bāngzhù, qǐng liánxì chēzhàn gōngzuò rényuán.',
    englishText: '【Metro Line 2 Operations Notice】\nDear passengers, hello! Welcome aboard Shanghai Metro Line 2.\nThis station is East Nanjing Road transfer station, where you can transfer to Line 10.\nPassengers heading towards Hongqiao Railway Station and Pudong International Airport, please line up orderly on both sides of the platform following the floor markings.\nPlease let passengers off before boarding, watch your step, and mind the gap between the train and platform.\nPlease do not eat, drink, or make loud noises inside the carriages. If you need assistance, please contact station staff.',
    glossary: [
      { hanzi: '换乘', pinyin: 'huànchéng', english: 'to transfer (lines)' },
      { hanzi: '排队', pinyin: 'páiduì', english: 'to queue / line up' },
      { hanzi: '空隙', pinyin: 'kòngxì', english: 'gap / space' },
      { hanzi: '请勿', pinyin: 'qǐng wù', english: 'please do not' }
    ],
    questions: [
      {
        question: 'Which line can passengers transfer to at this station?',
        options: ['Line 10', 'Line 1', 'Line 4', 'Line 8'],
        correctIndex: 0,
        explanation: 'The notice states: "可换乘10号线" (can transfer to Line 10).'
      },
      {
        question: 'What is prohibited inside the carriages according to the notice?',
        options: [
          'Eating, drinking, and loud noises',
          'Reading books',
          'Carrying bags',
          'Listening with headphones'
        ],
        correctIndex: 0,
        explanation: '"车厢内请勿饮食和大声喧哗" prohibits eating/drinking and making loud noise.'
      }
    ]
  },
  {
    id: 'reading-4',
    title: 'Short Email: Requesting Leave (请假条)',
    category: 'email',
    difficulty: 'HSK 2',
    summary: 'A polite workplace email asking for one day of medical leave.',
    chineseText: '尊敬的陈经理：\n您好！\n我因昨晚突发感冒发烧，今天早上去医院看病，医生建议我居家休息一天。因此，我特向您请假一天（10月24日）。\n在休假期间，我负责的客户咨询工作已拜托同事小李代为跟进。如果遇到紧急情况，您可以随时拨打我的手机。\n给团队工作带来的不便，我深表歉意。明天身体好转后我会准时返岗上班。\n感谢您的理解！\n\n祝工作顺利！\n销售部：王敏\n2026年10月24日',
    pinyinText: 'Zūnjìng de Chén jīnglǐ:\nNín hǎo!\nWǒ yīn zuówǎn tūfā gǎnmào fāshāo, jīntiān zǎoshang qù yīyuàn kànbìng, yīshēng jiànyì wǒ jūjiā xiūxi yì tiān. Yīncǐ, wǒ tè xiàng nín qǐngjià yì tiān (Shí yuè èrshísì rì).\nZài xiūjià qījiān, wǒ fùzé de kèhù zīxún gōngzuò yǐ bàituō tóngshì Xiǎo Lǐ dài wèi gēnjìn. Rúguǒ yùdào jǐnjí qíngkuàng, nín kěyǐ suíshí bōdǎ wǒ de shǒujī.\nGěi tuánduì gōngzuò dài lái de búbiàn, wǒ shēnbiǎo qiànyì. Míngtiān shēntǐ hǎozhuǎn hòu wǒ huì zhǔnshí fǎngǎng shàngbān.\nGǎnxiè nín de lǐjiě!\n\nZhù gōngzuò shùnlì!\nXiāoshòubù: Wáng Mǐn\n2026 nián 10 yuè 24 rì',
    englishText: 'Respected Manager Chen:\nHello!\nBecause I came down with a sudden fever and cold last night, I went to the hospital this morning. The doctor advised me to rest at home for one day. Therefore, I respectfully request one day of leave today (October 24).\nDuring my absence, my customer consultation duties have been entrusted to my colleague Xiao Li to follow up. In case of urgent matters, you may call my mobile phone at any time.\nI deeply apologize for any inconvenience caused to the team. Once my health improves tomorrow, I will return to work on time.\nThank you for your understanding!\n\nWishing you smooth work!\nSales Department: Wang Min\nOctober 24, 2026',
    glossary: [
      { hanzi: '感冒发烧', pinyin: 'gǎnmào fāshāo', english: 'cold and fever' },
      { hanzi: '拜托', pinyin: 'bàituō', english: 'to entrust / ask favor' },
      { hanzi: '紧急', pinyin: 'jǐnjí', english: 'urgent' },
      { hanzi: '准时', pinyin: 'zhǔnshí', english: 'on time / punctually' }
    ],
    questions: [
      {
        question: 'Why is Wang Min taking leave?',
        options: ['She caught a cold and has a fever', 'She is traveling abroad', 'She had a job interview', 'Her train was cancelled'],
        correctIndex: 0,
        explanation: 'She explains that she caught a cold and fever last night ("突发感冒发烧").'
      },
      {
        question: 'Who will handle customer consultations while Wang Min is away?',
        options: ['Her colleague Xiao Li', 'Manager Chen herself', 'A new intern', 'No one'],
        correctIndex: 0,
        explanation: 'She writes: "已拜托同事小李代为跟进" (has entrusted colleague Xiao Li to follow up).'
      }
    ]
  },
  {
    id: 'reading-5',
    title: 'Community Notice: Elevator Maintenance',
    category: 'notice',
    difficulty: 'HSK 2',
    summary: 'A residential apartment building notice informing tenants about elevator inspection.',
    chineseText: '【阳光小区物业服务中心通知】\n亲爱的各位业主和住户：\n为了保障电梯运行安全，物业中心将联合电梯维保公司对3号楼两部电梯进行年度安全检修。\n检修时间：本周三（10月28日）上午 09:00 至 下午 16:00。\n检修期间电梯将暂停运行。请住在高层的邻居提前做好出行和采购安排。\n给您的日常生活带来不便，敬请谅解！\n如有行动不便的老人需要帮助，请随时联系物业24小时值班热线：010-88886666。\n阳光小区物业中心\n2026年10月26日',
    pinyinText: '【Yángguāng Xiǎoqū Wùyè Fúwù Zhōngxīn Tōngzhī】\nQīn’ài de gèwèi yèzhǔ hé zhùhù:\nWèile bǎozhàng diàntī yùnxíng ānquán, wùyè zhōngxīn jiāng liánhé diàntī wéibǎo gōngsī duì sān hào lóu liǎng bù diàntī jìnxíng niándù ānquán jiǎnxiū.\nJiǎnxiū shíjiān: Běn zhōusān (10 yuè 28 rì) shàngwǔ 09:00 zhì xiàwǔ 16:00.\nJiǎnxiū qījiān diàntī jiāng zàntíng yùnxíng. Qǐng zhù zài gāocéng de línjū tíqián zuò hǎo chūxíng hé cǎigòu ānpái.\nGěi nín de rìcháng shēnghuó dài lái búbiàn, jìngqǐng liàngjiě!\nRú yǒu xíngdòng búbiàn de lǎorén xūyào bāngzhù, qǐng suíshí liánxì wùyè èrshísì xiǎoshí zhíbān rèxiàn: 010-88886666.\nYángguāng Xiǎoqū Wùyè Zhōngxīn\n2026 nián 10 yuè 26 rì',
    englishText: '【Sunshine Residential Property Service Center Notice】\nDear owners and residents:\nTo ensure safe elevator operation, the property management center, in conjunction with the maintenance company, will conduct annual safety inspections on the two elevators in Building 3.\nInspection Time: This Wednesday (October 28) from 09:00 AM to 16:00 PM.\nDuring maintenance, the elevators will temporarily stop running. Residents on higher floors are requested to plan their outings and groceries in advance.\nWe sincerely ask for your understanding regarding any inconvenience caused to your daily routine!\nIf any elderly residents with mobility issues need assistance, please contact the 24-hour property hotline at any time: 010-88886666.\nSunshine Residential Property Center\nOctober 26, 2026',
    glossary: [
      { hanzi: '电梯', pinyin: 'diàntī', english: 'elevator' },
      { hanzi: '检修', pinyin: 'jiǎnxiū', english: 'inspection and maintenance' },
      { hanzi: '暂停', pinyin: 'zàntíng', english: 'to suspend / pause temporarily' },
      { hanzi: '谅解', pinyin: 'liàngjiě', english: 'understanding / forgiveness' }
    ],
    questions: [
      {
        question: 'What is happening in Building 3 this Wednesday?',
        options: ['Elevator annual safety inspection', 'Water pipe replacement', 'Painting the walls', 'Fire drill'],
        correctIndex: 0,
        explanation: 'The notice announces annual safety inspection of the two elevators ("年度安全检修").'
      },
      {
        question: 'Until what time will the elevator be suspended on Wednesday?',
        options: ['16:00 (4:00 PM)', '12:00 PM', '18:00 (6:00 PM)', '22:00 (10:00 PM)'],
        correctIndex: 0,
        explanation: 'Inspection duration is 09:00 to 16:00.'
      }
    ]
  },
  {
    id: 'reading-6',
    title: 'Daily Life: A Day in Beijing for David',
    category: 'story',
    difficulty: 'HSK 2',
    summary: 'A short passage describing an international student’s typical weekday.',
    chineseText: '大卫是一名来自英国的留学生，在北京语言大学学习中文。他每天早上七点起床，然后在学校食堂吃一碗热热的豆浆和两根油条。上午八点到十二点是他上中文课的时间。老师教他们生词和语法，同学们用中文互相聊天。下午没有课的时候，大卫喜欢去学校附近的图书馆看书，或者去操场和中国朋友踢足球。大卫说，虽然中文很难学，但是每天认识新朋友、学会新汉字让他觉得非常快乐。',
    pinyinText: 'Dàwèi shì yì míng láizì Yīngguó de liúxuéshēng, zài Běijīng Yǔyán Dàxué xuéxí Zhōngwén. Tā měitiān zǎoshang qī diǎn qǐchuáng, ránhòu zài xuéxiào shítáng chī yì wǎn rèrè de dòujiāng hé liǎng gēn yóutiáo. Shàngwǔ bā diǎn dào shí’èr diǎn shì tā shàng Zhōngwén kè de shíjiān. Lǎoshī jiāo tāmen shēngcí hé yǔfǎ, tóngxuémen yòng Zhōngwén hùxiāng liáotiān. Xiàwǔ méiyǒu kè de shíhou, Dàwèi xǐhuan qù xuéxiào fùjìn de túshūguǎn kànshū, huòzhě qù cāochǎng hé Zhōngguó péngyou tī zúqiú. Dàwèi shuō, suīrán Zhōngwén hěn nán xué, dànshì měitiān rènshi xīn péngyou, xuéhuì xīn Hànzì ràng tā juéde fēicháng kuàilè.',
    englishText: 'David is an international student from the UK studying Chinese at Beijing Language and Culture University. Every morning he wakes up at 7:00 AM, then eats a bowl of hot soy milk and two fried dough sticks in the campus dining hall. From 8:00 AM to 12:00 PM is his Chinese class time. The teacher teaches new vocabulary and grammar, and classmates chat in Chinese with one another. In the afternoon when there are no classes, David likes going to the nearby library to read books, or going to the sports field to play soccer with Chinese friends. David says that although Chinese is hard to learn, meeting new friends and learning new characters every day makes him very happy.',
    glossary: [
      { hanzi: '留学生', pinyin: 'liúxuéshēng', english: 'international student' },
      { hanzi: '豆浆油条', pinyin: 'dòujiāng yóutiáo', english: 'soy milk and fried dough sticks (classic breakfast)' },
      { hanzi: '语法', pinyin: 'yǔfǎ', english: 'grammar' },
      { hanzi: '踢足球', pinyin: 'tī zúqiú', english: 'play football / soccer' }
    ],
    questions: [
      {
        question: 'What does David typically eat for breakfast?',
        options: ['Soy milk and fried dough sticks', 'Coffee and croissant', 'Noodles and tea', 'Rice porridge'],
        correctIndex: 0,
        explanation: 'He eats "一碗热热的豆浆和两根油条" (soy milk and dough sticks).'
      },
      {
        question: 'What sport does David play with Chinese friends in the afternoon?',
        options: ['Soccer (football)', 'Basketball', 'Badminton', 'Tennis'],
        correctIndex: 0,
        explanation: 'He goes to the sports field to play soccer ("踢足球").'
      }
    ]
  },
  {
    id: 'reading-7',
    title: 'Short Invitation: Housewarming Party',
    category: 'invitation',
    difficulty: 'HSK 2',
    summary: 'Xiao Chen invites friends over to his newly rented apartment.',
    chineseText: '亲爱的朋友们：\n我终于搬进新家啦！为了庆祝乔迁新居，我打算在本周日（11月2日）中午办一个温馨的家庭聚会。\n地点：朝阳区望京西园三区6号楼1201室。\n时间：周日中午 11:30 开始。\n我会亲自为大家准备拿手的麻婆豆腐和清蒸鲈鱼，还有新鲜果汁和甜点！大家人来就行，千万不要买贵重礼物。\n期待大家的到来，收到请回复确认一下人数哦！\n陈伟\n10月29日',
    pinyinText: 'Qīn’ài de péngyoumen:\nWǒ zhōngyú bānjìn xīnjiā la! Wèile qìngzhù qiáoqiān xīnjū, wǒ dǎsuan zài běn zhōurì (11 yuè 2 rì) zhōngwǔ bàn yí gè wēnxīn de jiātíng jùhuì.\nDìdiǎn: Cháoyáng qū Wàngjīng Xīyuán Sānqū 6 hào lóu 1201 shì.\nShíjiān: Zhōurì zhōngwǔ 11:30 kāishǐ.\nWǒ huì qīnzì wèi dàjiā zhǔnbèi náshǒu de Mápó dòufu hé qīngzhēng lúyú, hái yǒu xīnxiān guǒzhī hé tiándiǎn! Dàjiā rén lái jiù xíng, qiānwàn búyào mǎi guìzhòng lǐwù.\nQīdài dàjiā de dàolái, shōudào qǐng huífù quèrèn yíxià rénshù o!\nChén Wěi\n10 yuè 29 rì',
    englishText: 'Dear friends:\nI have finally moved into my new home! To celebrate my housewarming, I plan to hold a cozy home gathering this Sunday (November 2) at noon.\nLocation: Chaoyang District, Wangjing West Garden Area 3, Building 6, Apt 1201.\nTime: Sunday noon starting at 11:30 AM.\nI will personally prepare my specialty Mapo Tofu and steamed sea bass, as well as fresh fruit juice and dessert! Just bringing yourselves is plenty; please absolutely do not buy expensive gifts.\nLooking forward to having you over; upon receiving, please reply to confirm your attendance!\nChen Wei\nOctober 29',
    glossary: [
      { hanzi: '乔迁新居', pinyin: 'qiáoqiān xīnjū', english: 'housewarming (moving to new home)' },
      { hanzi: '拿手', pinyin: 'náshǒu', english: 'specialty / good at' },
      { hanzi: '千万不要', pinyin: 'qiānwàn búyào', english: 'by all means do not / please definitely don’t' },
      { hanzi: '确认', pinyin: 'quèrèn', english: 'to confirm' }
    ],
    questions: [
      {
        question: 'What is the host cooking for his guests?',
        options: ['Mapo Tofu and steamed sea bass', 'Pizza and pasta', 'Hotpot', 'Fried rice'],
        correctIndex: 0,
        explanation: 'He will prepare his signature dishes: "麻婆豆腐和清蒸鲈鱼".'
      },
      {
        question: 'What request does Chen Wei make regarding gifts?',
        options: [
          'Do not buy expensive gifts, just bring yourselves',
          'Everyone must bring a bottle of wine',
          'Bring cooked food',
          'Send red packets'
        ],
        correctIndex: 0,
        explanation: '"大家人来就行，千万不要买贵重礼物" (Just bringing yourselves is plenty; please do not buy expensive gifts).'
      }
    ]
  },
  {
    id: 'reading-8',
    title: 'Store Window Sign: Seasonal Clearance Sale',
    category: 'sign',
    difficulty: 'HSK 1',
    summary: 'A seasonal discount banner outside a clothing shop.',
    chineseText: '【秋季换季清仓大酬宾】\n全场男女服装一律五折起！\n买两件立享折上八折，买三件赠送精美帆布包一个。\n试衣间在店内左侧。\n营业时间：早 10:00 - 晚 22:00。\n*特别提醒：特价清仓商品非质量问题概不退换，支持信用卡与移动支付。',
    pinyinText: '【Qiūjì huànjì qīngcāng dà chóubīn】\nQuánchǎng nánnǚ fúzhuāng yílǜ wǔ zhé qǐ!\nMǎi liǎng jiàn lì xiǎng zhé shàng bā zhé, mǎi sān jiàn zèngsòng jīngměi fānbùbāo yí gè.\nShìyījiān zài diàn nèi zuǒcè.\nYíngyè shíjiān: Zǎo 10:00 - Wǎn 22:00.\n* Tèbié tíxǐng: Tèjià qīngcāng shāngpǐn fēi zhìliàng wèntí gài bú tuì huàn, zhīchí xìnyòngkǎ yǔ yídòng zhīfù.',
    englishText: '【Autumn Seasonal Clearance Sale】\nAll men’s and women’s clothing starts from 50% off!\nBuy 2 items to get an additional 20% off; buy 3 items to receive a complimentary canvas tote bag.\nFitting rooms are located on the left inside the store.\nBusiness Hours: 10:00 AM - 10:00 PM.\n* Special Reminder: Clearance promotional items are non-refundable and non-exchangeable unless there is a quality defect. Credit cards and mobile payments are welcome.',
    glossary: [
      { hanzi: '清仓', pinyin: 'qīngcāng', english: 'clearance sale' },
      { hanzi: '五折', pinyin: 'wǔ zhé', english: '50% off' },
      { hanzi: '试衣间', pinyin: 'shìyījiān', english: 'fitting room' },
      { hanzi: '退换', pinyin: 'tuì huàn', english: 'return or exchange' }
    ],
    questions: [
      {
        question: 'Where are the fitting rooms located in the store?',
        options: ['On the left side inside the store', 'On the 2nd floor', 'Outside the store', 'Near the cashier on the right'],
        correctIndex: 0,
        explanation: '"试衣间在店内左侧" states they are on the left side inside.'
      },
      {
        question: 'What do you receive for free if you buy three items?',
        options: ['A canvas tote bag', 'A hat', 'A scarf', 'A water bottle'],
        correctIndex: 0,
        explanation: '"买三件赠送精美帆布包一个" (buy 3 items to get a canvas tote bag).'
      }
    ]
  },
  {
    id: 'reading-9',
    title: 'Train Ticket Confirmation & Boarding Guide',
    category: 'transport',
    difficulty: 'HSK 3',
    summary: 'Electronic high-speed rail ticket info and boarding rules.',
    chineseText: '【铁路12306 电子客票信息】\n车次：G103次 高速动车组\n出发站：北京南站（08:00开）\n到达站：上海虹桥站（12:38到）\n席位：05车厢 12F座（二等座/靠窗）\n乘车人：李华（身份证号：110101********1234）\n检票口：2楼候车区 12B检票口\n*重要提示：中国高铁现已全面实行电子客票，乘客无需换取纸质车票，直接刷居民身份证或护照原件即可进站乘车。请至少在开车前20分钟到达检票口。',
    pinyinText: '【Tiělù 12306 Diànzǐ Kèpiào Xìnxī】\nChēcì: G103 cì Gāosù Dòngchēzǔ\nChūfāzhàn: Běijīng Nán Zhàn (08:00 kāi)\nDàodázhàn: Shànghǎi Hóngqiáo Zhàn (12:38 dào)\nXíwèi: 05 chēxiāng 12F zuò (èr děng zuò / kào chuāng)\nChéngchērén: Lǐ Huá\nJiǎnpiàokǒu: Èr lóu hòuchē qū 12B jiǎnpiàokǒu\n* Zhòngyào tíshì: Zhōngguó gāotiě xiàn yǐ quánmiàn shíxíng diànzǐ kèpiào, chéngkè wúxū huànqǔ zhǐzhì chēpiào, zhíjiē shuā jūmín shēnfènzhèng huò hùzhào yuánjiàn jí kě jìnzhàn chéngchē. Qǐng zhìshǎo zài kāichē qián èrshí fēnzhōng dàodá jiǎnpiàokǒu.',
    englishText: '【China Railway 12306 E-Ticket Information】\nTrain No: G103 High-Speed Electric Multiple Unit\nDeparture: Beijing South Station (Departs 08:00)\nArrival: Shanghai Hongqiao Station (Arrives 12:38)\nSeat: Carriage 05, Seat 12F (Second Class / Window)\nPassenger: Li Hua\nTicket Gate: 2nd Floor Waiting Hall, Gate 12B\n* Important Notice: China High-Speed Rail has fully implemented electronic ticketing. Passengers do not need to print paper tickets; simply scan your original ID card or passport to enter. Please arrive at the boarding gate at least 20 minutes before departure.',
    glossary: [
      { hanzi: '高铁', pinyin: 'gāotiě', english: 'high-speed rail' },
      { hanzi: '靠窗', pinyin: 'kào chuāng', english: 'window seat' },
      { hanzi: '检票口', pinyin: 'jiǎnpiàokǒu', english: 'ticket inspection gate / boarding gate' },
      { hanzi: '护照', pinyin: 'hùzhào', english: 'passport' }
    ],
    questions: [
      {
        question: 'Do passengers need to print out paper tickets to board the train?',
        options: [
          'No, they simply scan their ID card or passport',
          'Yes, paper ticket is mandatory',
          'Only children need paper tickets',
          'Tickets must be bought at the platform'
        ],
        correctIndex: 0,
        explanation: 'The notice states "无需换取纸质车票，直接刷居民身份证或护照原件即可" (No need for paper tickets; swipe ID/passport directly).'
      },
      {
        question: 'Which seat type did Li Hua receive?',
        options: ['Second class window seat', 'First class aisle seat', 'Business sleeper', 'Dining carriage seat'],
        correctIndex: 0,
        explanation: '05车厢 12F座（二等座/靠窗）is a 2nd class window seat.'
      }
    ]
  },
  {
    id: 'reading-10',
    title: 'Cultural Passage: The Chinese New Year Reunion Dinner',
    category: 'story',
    difficulty: 'HSK 3',
    summary: 'The heartwarming tradition of Nianyefan and family reunion.',
    chineseText: '除夕夜是中国农历新年最重要的时刻。无论在外工作或上学离家多远，人们都会在这一天赶回家乡，与家人团聚，吃一顿丰盛的“年夜饭”。\n年夜饭的每一道菜都有美好的吉祥寓意。比如一定要吃鱼，因为“鱼”和“余”发音相同，象征着“年年有余”（每年都有财富剩余）。在北方，除夕夜全家人会坐在一起一边看春晚，一边包饺子。饺子的形状像古代的金元宝，寓意招财进宝。吃完年夜饭后，长辈会给晚辈发压岁钱红包，祝愿孩子们在新的一年健康快乐、学习进步。',
    pinyinText: 'Chúxī yè shì Zhōngguó nónglì xīnnián zuì zhòngyào de shíkè. Wúlùn zài wài gōngzuò huò shàngxué lí jiā duō yuǎn, rénmen dōuhuì zài zhè yì tiān gǎn huí jiāxiāng, yǔ jiārén tuánjù, chī yí dùn fēngshèng de “niányèfàn”.\nNiányèfàn de měi yí dào cài dōu yǒu měihǎo de jíxiáng yùyì. Bǐrú yídìng yào chī yú, yīnwèi “yú” hé “yú” fāyīn xiāngtóng, xiàngzhēngzhe “nián nián yǒu yú” (měi nián dōu yǒu cáifù shèngyú). Zài běifāng, chúxī yè quán jiā rén huì zuò zài yìqǐ yìbiān kàn chūnwǎn, yìbiān bāo jiǎozi. Jiǎozi de xíngzhuàng xiàng gǔdài de jīn yuánbǎo, yùyì zhāocái jǐnbǎo. Chī wán niányèfàn hòu, zhǎngbèi huì gěi wǎnbèi fā yāsuìqián hóngbāo, zhùyuàn háizimen zài xīn de yì nián jiànkāng kuàilè, xuéxí jìnbù.',
    englishText: 'New Year’s Eve (Chuxi) is the most important moment of the Chinese Lunar New Year. No matter how far away people work or study, they all rush back to their hometowns on this day to reunite with family and enjoy a lavish "Reunion Dinner" (Nianyefan).\nEvery dish at the reunion dinner carries wonderful auspicious symbolism. For example, eating fish is essential because "fish" (鱼) and "abundance/surplus" (余) share the identical pronunciation "yú", symbolizing "annual abundance" (having wealth left over every year). In Northern China, the whole family sits together watching the Spring Festival Gala while making dumplings. The shape of dumplings resembles ancient golden ingots, signifying bringing in wealth and treasures. After the meal, elders give red packets with lucky money to the younger generation, wishing the children health, happiness, and academic progress in the new year.',
    glossary: [
      { hanzi: '除夕', pinyin: 'chúxī', english: 'Lunar New Year’s Eve' },
      { hanzi: '团聚', pinyin: 'tuánjù', english: 'to reunite' },
      { hanzi: '年年有余', pinyin: 'nián nián yǒu yú', english: 'may you have abundance every year' },
      { hanzi: '压岁钱', pinyin: 'yāsuìqián', english: 'lucky money given to children in red envelopes' }
    ],
    questions: [
      {
        question: 'Why is eating fish (鱼) considered auspicious at the New Year dinner?',
        options: [
          'Because fish (鱼) sounds identical to surplus/abundance (余)',
          'Because fish is the most expensive food in China',
          'Because ancient kings only ate fish',
          'Because it is good for eye health'
        ],
        correctIndex: 0,
        explanation: '鱼 (fish) and 余 (surplus) are homophones pronounced "yú", giving rise to the wish 年年有余 (abundance year after year).'
      },
      {
        question: 'What do dumplings (饺子) resemble in traditional symbolism?',
        options: ['Ancient golden ingots (wealth)', 'The full moon', 'A shield for defense', 'A lucky clover'],
        correctIndex: 0,
        explanation: 'Dumplings resemble ancient gold ingots (金元宝), symbolizing bringing in wealth and prosperity (招财进宝).'
      }
    ]
  }
];

export function getPassageById(id: string): ReadingPassage | undefined {
  return readingPassages.find(p => p.id === id);
}
