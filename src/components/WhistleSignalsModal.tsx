import React, { useState } from 'react';
import { X, Volume2, Play, AlertCircle, ShieldAlert, Award, Radio } from 'lucide-react';

interface WhistleSignalsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SignalItem {
  id: string;
  name: string;
  blasts: number;
  patternText: string;
  meaning: string;
  handGesture: string;
  emergencyLevel: 'normal' | 'caution' | 'critical';
  soundPattern: number[]; // durations in ms: [blast, pause, blast, pause, ...]
}

const SIGNALS_DATA: SignalItem[] = [
  {
    id: 'stop',
    name: '一聲短哨 (1 Blast)',
    blasts: 1,
    patternText: '● 嗶——！ (一聲長短適中清脆哨音)',
    meaning: '「停止所有動作 / 注意看我 / Freeze & Attention」',
    handGesture: '單手高舉過頭頂，五指併攏掌心朝前（國際停止手勢）。',
    emergencyLevel: 'normal',
    soundPattern: [600],
  },
  {
    id: 'upstream',
    name: '兩聲短哨 (2 Blasts)',
    blasts: 2,
    patternText: '● ● 嗶！嗶！ (兩聲連續短哨)',
    meaning: '「往上游 / 放繩 / 向上拉緊 / Upstream & Slack」',
    handGesture: '單手高舉過頭頂，並持續向上游方向揮舞指引。',
    emergencyLevel: 'caution',
    soundPattern: [400, 200, 400],
  },
  {
    id: 'downstream',
    name: '三聲短哨 (3 Blasts)',
    blasts: 3,
    patternText: '● ● ● 嗶！嗶！嗶！ (三聲急促短哨)',
    meaning: '「向下游 / 急速順流撤退 / 緊急狀況 / Downstream & Emergency」',
    handGesture: '雙臂在胸前迅速交叉成 X 形，或持續向下游方向急促切劃。',
    emergencyLevel: 'critical',
    soundPattern: [350, 150, 350, 150, 350],
  },
  {
    id: 'continuous',
    name: '連續急促連吹 (Continuous Blasts)',
    blasts: 5,
    patternText: '●●●●● 嗶嗶嗶嗶嗶！ (無間斷急迫哨音)',
    meaning: '「全面緊急撤退 / 致命危險 / 立即啟動最高救援 SOP」',
    handGesture: '雙手在頭頂大幅度反覆揮動交叉，所有人立即放棄橫渡退回出發岸！',
    emergencyLevel: 'critical',
    soundPattern: [200, 100, 200, 100, 200, 100, 200, 100, 400],
  },
];

export const WhistleSignalsModal: React.FC<WhistleSignalsModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  if (!isOpen) return null;

  // Web Audio API Whistle Sound Synthesizer (Realistic high-frequency pea-less whistle)
  const playWhistle = (pattern: number[], id: string) => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      setIsPlaying(id);

      let currentTime = ctx.currentTime + 0.05;

      pattern.forEach((durationMs, idx) => {
        if (idx % 2 === 0) {
          // Play Tone (whistle tone around 2800 Hz + 2950 Hz dual harmonics)
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const gain = ctx.createGain();

          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(2750, currentTime);
          osc1.frequency.exponentialRampToValueAtTime(2850, currentTime + durationMs / 1000);

          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(2900, currentTime);

          // Gain envelope for clean blast
          gain.gain.setValueAtTime(0, currentTime);
          gain.gain.linearRampToValueAtTime(0.35, currentTime + 0.04);
          gain.gain.setValueAtTime(0.35, currentTime + durationMs / 1000 - 0.04);
          gain.gain.linearRampToValueAtTime(0.001, currentTime + durationMs / 1000);

          osc1.connect(gain);
          osc2.connect(gain);
          gain.connect(ctx.destination);

          osc1.start(currentTime);
          osc2.start(currentTime);

          osc1.stop(currentTime + durationMs / 1000);
          osc2.stop(currentTime + durationMs / 1000);

          currentTime += durationMs / 1000;
        } else {
          // Silence gap
          currentTime += durationMs / 1000;
        }
      });

      setTimeout(() => {
        setIsPlaying(null);
      }, (currentTime - ctx.currentTime) * 1000 + 100);
    } catch {
      setIsPlaying(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-950/80 border border-amber-500/30 text-amber-400">
              <Radio className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-100">
                急流噪音環境・國際哨音與手勢信號訓練器
              </h2>
              <p className="text-xs text-slate-400">
                溪水轟鳴中人聲無法傳遞，全隊必須 100% 熟練國際急流通用 1/2/3 哨音與肢體暗號
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="關閉哨音手勢訓練器"
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
          {/* Audio whistle hint */}
          <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <Volume2 className="w-4 h-4 text-amber-400" />
              點擊下方各信號之「試聽哨音」按鈕，體驗真實戶外無滾珠高分貝哨音頻率。
            </span>
          </div>

          {/* Whistle Card List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SIGNALS_DATA.map((sig) => (
              <div
                key={sig.id}
                className={`p-5 rounded-2xl border space-y-3.5 transition-all ${
                  sig.emergencyLevel === 'critical'
                    ? 'bg-red-950/30 border-red-500/40 hover:border-red-500/70'
                    : sig.emergencyLevel === 'caution'
                    ? 'bg-amber-950/30 border-amber-500/40 hover:border-amber-500/70'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Title & Play Button */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-2.5">
                  <div className="font-bold text-sm sm:text-base text-slate-100 flex items-center gap-2">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        sig.emergencyLevel === 'critical'
                          ? 'bg-red-500 animate-pulse'
                          : sig.emergencyLevel === 'caution'
                          ? 'bg-amber-400'
                          : 'bg-emerald-400'
                      }`}
                    />
                    {sig.name}
                  </div>

                  <button
                    type="button"
                    onClick={() => playWhistle(sig.soundPattern, sig.id)}
                    disabled={isPlaying !== null}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-bold transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Play className={`w-3.5 h-3.5 ${isPlaying === sig.id ? 'animate-spin' : ''}`} />
                    <span>{isPlaying === sig.id ? '發聲中...' : '試聽哨音'}</span>
                  </button>
                </div>

                {/* Pattern text */}
                <div className="font-mono text-xs text-amber-300/90 font-bold bg-slate-950 p-2 rounded-lg border border-slate-800/80">
                  {sig.patternText}
                </div>

                {/* Meaning */}
                <div className="space-y-1 text-xs">
                  <div className="font-bold text-slate-300">【標準指令意義】</div>
                  <p className="text-slate-200 leading-relaxed font-semibold">{sig.meaning}</p>
                </div>

                {/* Hand Gesture */}
                <div className="space-y-1 text-xs">
                  <div className="font-bold text-slate-400">【對應視覺手勢】</div>
                  <p className="text-slate-300 leading-relaxed">{sig.handGesture}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Golden Communication Rules */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4" />
              溪水橫渡通訊三大鐵律
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">1.</span>
                <span><strong>必須使用無滾珠哨（Pea-less Whistle）：</strong>傳統軟木滾珠哨進水後無法吹響，必須配備如 Fox 40 等急流專用塑料哨。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">2.</span>
                <span><strong>哨音必須覆誦確認（Echo Back）：</strong>接收方收到指令後，必須吹出相同哨音與手勢回傳，確保兩岸確實理解。</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">3.</span>
                <span><strong>視線永不中斷（Line of Sight）：</strong>渡溪者與確保者之間視線若被巨石阻擋，必須安排中繼通訊員站在高處轉達。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
