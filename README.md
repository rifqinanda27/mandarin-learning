# Everyday Mandarin (天天中文) — Real-World Mandarin Chinese Learning PWA

A complete, responsive, installable Progressive Web App (PWA) designed to teach practical Mandarin Chinese for everyday real-world situations — from ordering food and meeting friends to navigating social etiquette and reading street signs.

---

## 🌟 Core Highlights

- **Installable Progressive Web App (PWA)**: Valid Web App Manifest, Service Worker caching (`workbox-window`), standalone display mode, custom app icons (192x192, 512x512, SVG), and native browser installation prompt handler with dedicated iOS Safari & Android fallback guides.
- **100% Offline-Capable**: Bundled curriculum, vocabulary library, dialogues, readings, quizzes, and writing canvas work without any remote backend or internet connection.
- **Genuine Local Persistence Layer**: Versioned `localStorage` service tracking completed lessons, conversation choices, quiz history, spaced repetition intervals, character practice counts, and authentic daily streaks (never fabricated).
- **Audio Fallback**: Web Speech API (`SpeechSynthesis`) with `zh-CN` localization, speed adjustment (0.75x, 0.9x, 1.1x), and full transparency disclosures (never represented as native studio recordings).
- **Authentic Design Direction**: Warm cream palette (`#faf7f2`), dark ink typography (`#1c222b`), Chinese vermilion-red accents (`#b93b3b`), jade success tones, responsive desktop sidebar + mobile bottom navigation, and full Dark Mode support.

---

## 📚 Curriculum Structure (31 Lessons across 6 Units)

1. **Unit 1 — Foundations (Lessons 1–6)**:
   - Pinyin & The Four Tones
   - Hello & Everyday Greetings
   - Introducing Yourself Naturally
   - Countries & Nationalities
   - Pronouns & Plurals (们)
   - Basic Questions with 吗 & 呢

2. **Unit 2 — Everyday Life (Lessons 7–12)**:
   - Numbers & Measure Words (个, 杯, 本, 只)
   - Dates, Days of the Week & Time
   - Family Members & Household
   - Ordering Food & Drinks at a Restaurant
   - Shopping, Prices & Polite Bargaining
   - Directions & Public Transportation

3. **Unit 3 — Natural Conversation (Lessons 13–18)**:
   - Daily Routines & Hobbies
   - Making Plans & Inviting Someone
   - Accepting & Declining Invitations Politely
   - Expressing Likes, Dislikes & Preferences
   - Asking for Help & Apologizing Naturally
   - Completed Actions (了) & Future Intentions (打算/想)

4. **Unit 4 — Social Context & Politeness (Lessons 19–24)**:
   - Speaking to Friends vs Strangers
   - Speaking to Older People & Teachers
   - Workplace Communication & Coworkers
   - Polite Requests & Softening Tone (一下 / 吧)
   - Disagreeing Politely & Avoiding Confrontation
   - Texting Etiquette & Online Casual Mandarin (微信交流)

5. **Unit 5 — Reading for Real Life (Lessons 25–28)**:
   - Deciphering Restaurant Menus
   - Street Signs, Transport & Metro Notices
   - Prices, Receipts & Mobile Pay Notices (扫码支付)
   - Notices, Invitations & Everyday Bulletins

6. **Unit 6 — Writing & Communication (Lessons 29–31)**:
   - Character Anatomy: The 6 Basic Strokes & Radicals
   - Universal Stroke Order Rules
   - Composing Practical Messages & Self-Introductions

---

## ⚖️ Speech & Etiquette (Casual vs Polite vs Formal)

A dedicated comparative learning hub breaking down nuances:
- **Greeting someone**: 嗨！(casual friend) vs 您好 (elder/client) vs 久仰大名 (VIP formal).
- **Asking for help**: 可以帮我一下吗？(peer) vs 请问，您可以帮我一下吗？(stranger).
- **Thanking**: 谢谢 / 谢啦 (casual) vs 非常感谢您的帮助 (heartfelt support).
- **Apologizing**: 不好意思 (mild social lubricant for 90% of situations) vs 对不起 (direct admission of fault).
- **Making requests**: 给我一下 (abrupt demand) vs 方便借我看一下吗？(courteous request).
- **Inviting**: 一起去吃饭吧！(casual) vs 您这周末有时间一起吃个便饭吗？(polite modesty).

---

## 🎨 Interactive Practice Modules

- **Conversation Simulator**: Branching dialogues with immediate feedback on conversational tone (`natural`, `too-casual`, `too-formal`, `polite`).
- **Reading Room**: 10 real-world practical materials (Café menus, WeChat messages, Metro boarding boards, Housewarming invitations, Apartment elevator notices) with pinyin/English toggles, glossaries, and comprehension questions.
- **Character Writing Canvas**: Interactive HTML5 touch & mouse canvas with rice grid (米字格), stroke-by-stroke guidance, reference character ghosting, and practical composition tasks.
- **Vocabulary & Spaced Repetition**: 155+ categorized words with pinyin, English, part of speech, audio, and interactive flashcard mode with spaced review intervals.
- **Practice Arena**: Reusable quiz engines for tones, characters, etiquette, and vocabulary.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24.12.0)
- npm 9+

### Installation & Development
```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev
```

### Production Build & PWA Testing
```bash
# Run TypeScript type-check and Vite production bundle
npm run build

# Preview production build locally
npm run preview
```

### Running Automated Tests
```bash
npm test
```

---

## 📱 PWA Installation Instructions

### Desktop (Google Chrome, Microsoft Edge, Brave)
1. Navigate to the application (development: `http://localhost:5173`; production requires `HTTPS`).
2. Click the **Install** icon on the right side of the URL address bar or click the **Install Web App** button in the sidebar.
3. The app will launch in an independent standalone window with its own taskbar/dock icon.

### Mobile iOS (Safari)
1. Open the application in Safari.
2. Tap the **Share** button in the bottom toolbar (square with upward arrow).
3. Scroll down and tap **Add to Home Screen**, then tap **Add**.
4. Launch directly from your home screen as a full-screen app.

### Mobile Android (Chrome / Samsung Internet)
1. Open the application in Chrome.
2. Tap the three dots menu (**⋮**) in the top right.
3. Tap **Install app** or **Add to Home screen**.

> **Note on HTTPS:** PWA installation requires HTTPS in production environments, while `localhost` is natively supported for local testing and development.
