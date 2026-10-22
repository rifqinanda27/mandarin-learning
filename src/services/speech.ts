export class SpeechService {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
  private static chineseVoice: SpeechSynthesisVoice | null = null;
  private static voicesLoaded = false;

  private static initVoices() {
    if (!this.synth || this.voicesLoaded) return;
    const voices = this.synth.getVoices();
    if (voices.length > 0) {
      this.findChineseVoice(voices);
      this.voicesLoaded = true;
    } else if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = () => {
        if (!this.synth) return;
        const v = this.synth.getVoices();
        this.findChineseVoice(v);
        this.voicesLoaded = true;
      };
    }
  }

  private static findChineseVoice(voices: SpeechSynthesisVoice[]) {
    // Prefer mainland Chinese (zh-CN) voices
    const zhCN = voices.find(v => v.lang === 'zh-CN' || v.lang === 'zh_CN');
    if (zhCN) {
      this.chineseVoice = zhCN;
      return;
    }
    // Fallback to any Chinese voice
    const anyZh = voices.find(v => v.lang.startsWith('zh'));
    if (anyZh) {
      this.chineseVoice = anyZh;
    }
  }

  static isSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  static hasChineseVoice(): boolean {
    this.initVoices();
    return this.chineseVoice !== null;
  }

  static speak(text: string, rate: number = 0.9): Promise<void> {
    return new Promise((resolve) => {
      if (!this.synth) {
        resolve();
        return;
      }

      this.initVoices();

      // Cancel any ongoing speech
      this.synth.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'zh-CN';
      utterance.rate = rate;

      if (this.chineseVoice) {
        utterance.voice = this.chineseVoice;
      }

      utterance.onend = () => {
        resolve();
      };

      utterance.onerror = () => {
        resolve();
      };

      this.synth.speak(utterance);
    });
  }

  static stop(): void {
    if (this.synth) {
      this.synth.cancel();
    }
  }
}
