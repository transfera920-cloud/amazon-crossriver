import React, { useState } from 'react';
import { X, MapPin, Eye, AlertTriangle, CheckCircle2, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

interface RiverScoutingSandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FeatureSpot {
  id: string;
  name: string;
  type: 'optimal' | 'hazardous' | 'conditional';
  x: number; // percentage
  y: number; // percentage
  description: string;
  hydrodynamics: string;
  verdict: string;
  actionProtocol: string;
}

const RIVER_FEATURES: FeatureSpot[] = [
  {
    id: 'inner_bar',
    name: '① 凸岸沙洲漫流區 (Point Bar Riffle)',
    type: 'optimal',
    x: 48,
    y: 52,
    description: '河流轉彎內側（凸岸）沉積了大量平緩碎石沙礫，河床展開變寬，水深極淺（踝膝之間）。',
    hydrodynamics: '截面積 $A$ 最大，流速 $v$ 顯著降低，水流呈平緩漫流，無下切深潭。',
    verdict: '✓ 最佳首選渡溪點 (Optimal Choice)',
    actionProtocol: '沿凸岸淺水帶斜向下游渡河，雙杖三角支撐，解開胸腰扣。',
  },
  {
    id: 'outer_bank',
    name: '② 凹岸沖蝕深槽 (Cut Bank Pool)',
    type: 'hazardous',
    x: 82,
    y: 35,
    description: '河流彎道外側，水流慣性直接沖刷河岸，形成深不見底的掏空岩壁與湍急暗流。',
    hydrodynamics: '流速最高、深度最大、回捲渦流強烈，伴隨崩塌滾石與掏空腳下風險。',
    verdict: '🛑 嚴禁渡溪點 (Lethal Outer Bend)',
    actionProtocol: '切勿在此渡溪！應沿岸往上游或下游尋找寬闊漫流沙洲。',
  },
  {
    id: 'strainer',
    name: '③ 下游倒木與石縫濾器 (Downstream Strainer)',
    type: 'hazardous',
    x: 75,
    y: 85,
    description: '橫跨於水流中的倒木、枯枝堆或岩石裂隙，水能通過但人體會被強大水壓死死吸附。',
    hydrodynamics: '水壓每平方公尺可達數百公斤，一旦人員被卡住，在水中完全無法掙脫，數十秒內溺斃。',
    verdict: '☠️ 致命水文陷阱 (Deadly Strainer)',
    actionProtocol: '渡溪點下游若有倒木濾器，絕對禁止入水！失足將直接順流衝入死局。',
  },
  {
    id: 'constriction',
    name: '④ 峽谷束縮瓶頸 (Narrow Chute)',
    type: 'hazardous',
    x: 22,
    y: 22,
    description: '河道兩側巨石夾峙，看似步幅很窄想一步躍過，但水深且流速極快。',
    hydrodynamics: '文丘里效應 (Venturi Effect) 使流速倍增，落水瞬間即被噴射衝走。',
    verdict: '⚠️ 視覺欺騙陷阱 (Deceptive Chute)',
    actionProtocol: '不可冒險跳躍！一旦踩空滑落巨石，將直接陷入暴流中。',
  },
  {
    id: 'braided',
    name: '⑤ 辮狀分流淺灘 (Braided Channels)',
    type: 'optimal',
    x: 35,
    y: 75,
    description: '河道被中間的砂石小島分成 2~3 條各自獨立的小支流，總流量被均分。',
    hydrodynamics: '每一股水流的深度與推力均大幅降低，可採「分段過溪、中途島休整」策略。',
    verdict: '✓ 優質分段橫渡點 (Excellent Island Hop)',
    actionProtocol: '分批過第一股水流至中央小島，清點全員裝備後再過第二股水流。',
  },
];

export const RiverScoutingSandboxModal: React.FC<RiverScoutingSandboxModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(RIVER_FEATURES[0].id);

  if (!isOpen) return null;

  const currentFeature = RIVER_FEATURES.find((f) => f.id === selectedFeatureId) || RIVER_FEATURES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-100">
                溪流地形判讀與過溪點選擇實境模擬沙盒
              </h2>
              <p className="text-xs text-slate-400">
                點擊地圖上的水文地貌節點，學習辨識「看似平緩實則致命」與「寬闊漫流安全」之微地形
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="關閉地貌沙盒"
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
          {/* Top Instruction banner */}
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between text-xs text-slate-300">
            <span>
              💡 <strong>現場觀水準則：</strong>
              過溪點的選擇決定 80% 的安全。寧可花 20 分鐘上下游踏勘 200 公尺，也不在致命彎道賭命。
            </span>
          </div>

          {/* Interactive River Map (SVG) */}
          <div className="relative w-full bg-slate-950 rounded-2xl border border-slate-800 p-2 sm:p-4 overflow-hidden shadow-2xl">
            <svg
              viewBox="0 0 800 450"
              role="img"
              aria-label="溪流地形判讀與過溪點選擇實境模擬沙盒"
              className="w-full h-auto select-none rounded-xl"
            >
              <defs>
                <linearGradient id="riverFlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#0369a1" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="gravelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
              </defs>

              {/* River Bank Base Background */}
              <rect x="0" y="0" width="800" height="450" fill="#090d12" />

              {/* Mountain Bank Terraces */}
              <path d="M 0 0 L 250 0 C 230 80 180 120 120 180 C 70 230 40 320 0 450 Z" fill="#131b24" stroke="#1e293b" strokeWidth="2" />
              <path d="M 500 0 C 580 60 680 100 800 120 L 800 0 Z" fill="#131b24" stroke="#1e293b" strokeWidth="2" />
              <path d="M 800 280 C 720 300 650 360 600 450 L 800 450 Z" fill="#131b24" stroke="#1e293b" strokeWidth="2" />

              {/* Main Meandering River Channel */}
              <path
                d="M 280 0 C 260 80 200 130 180 180 C 150 250 240 320 380 340 C 520 360 620 280 680 240 C 750 200 780 160 800 150 L 800 260 C 740 280 680 340 560 390 C 440 440 280 430 180 380 C 80 330 40 240 70 160 C 100 80 160 30 180 0 Z"
                fill="url(#riverFlowGrad)"
                stroke="#38bdf8"
                strokeWidth="2"
                strokeDasharray="4 2"
              />

              {/* Point Bar Gravel Bed (Optimal) */}
              <path
                d="M 320 260 C 400 270 480 250 520 220 C 480 290 380 310 320 290 Z"
                fill="url(#gravelGrad)"
                stroke="#64748b"
                strokeWidth="1.5"
              />
              <text x="400" y="275" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle">
                砂石漫流淺灘 (凸岸)
              </text>

              {/* Braided Island */}
              <ellipse cx="280" cy="340" rx="35" ry="14" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
              <text x="280" y="344" fill="#cbd5e1" fontSize="10" textAnchor="middle" fontWeight="bold">
                中央沙洲島
              </text>

              {/* Downstream Strainer Graphic */}
              <g transform="translate(600, 370)">
                <line x1="-30" y1="-10" x2="30" y2="10" stroke="#78350f" strokeWidth="6" strokeLinecap="round" />
                <line x1="-15" y1="15" x2="20" y2="-12" stroke="#92400e" strokeWidth="4" strokeLinecap="round" />
                <circle cx="0" cy="0" r="18" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
                <text x="0" y="30" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">
                  倒木卡死區
                </text>
              </g>

              {/* Water Flow Direction Arrows */}
              <g stroke="#38bdf8" strokeWidth="2" fill="none" opacity="0.7">
                <path d="M 230 60 L 210 100 L 205 90 M 210 100 L 218 92" />
                <path d="M 170 190 L 190 240 L 180 235 M 190 240 L 195 230" />
                <path d="M 350 310 L 440 330 L 430 322 M 440 330 L 433 338" />
                <path d="M 570 310 L 640 270 L 630 268 M 640 270 L 634 278" />
              </g>

              {/* Upstream & Downstream Labels */}
              <text x="250" y="30" fill="#0284c7" fontSize="12" fontWeight="900">
                ▲ 上游 (UPSTREAM)
              </text>
              <text x="700" y="430" fill="#0284c7" fontSize="12" fontWeight="900">
                ▼ 下游 (DOWNSTREAM)
              </text>

              {/* Interactive Spot Click Targets */}
              {RIVER_FEATURES.map((feat) => {
                const isSelected = selectedFeatureId === feat.id;
                const spotX = (feat.x / 100) * 800;
                const spotY = (feat.y / 100) * 450;

                return (
                  <g
                    key={feat.id}
                    className="cursor-pointer transition-transform duration-200 hover:scale-110"
                    onClick={() => setSelectedFeatureId(feat.id)}
                  >
                    {/* Pulsing ring for selected */}
                    {isSelected && (
                      <circle
                        cx={spotX}
                        cy={spotY}
                        r="24"
                        fill="none"
                        stroke={feat.type === 'optimal' ? '#10b981' : '#ef4444'}
                        strokeWidth="2"
                        className="animate-ping opacity-75"
                      />
                    )}
                    <circle
                      cx={spotX}
                      cy={spotY}
                      r="16"
                      fill={feat.type === 'optimal' ? '#065f46' : feat.type === 'hazardous' ? '#7f1d1d' : '#78350f'}
                      stroke={feat.type === 'optimal' ? '#34d399' : feat.type === 'hazardous' ? '#f87171' : '#fbbf24'}
                      strokeWidth="2.5"
                    />
                    <text
                      x={spotX}
                      y={spotY + 4}
                      fill="#ffffff"
                      fontSize="11"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {feat.name.slice(0, 2)}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Detailed Selected Spot Evaluation Card */}
          <div
            className={`p-5 rounded-2xl border space-y-4 ${
              currentFeature.type === 'optimal'
                ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-100'
                : 'bg-red-950/40 border-red-500/40 text-red-100'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className={`w-5 h-5 ${currentFeature.type === 'optimal' ? 'text-emerald-400' : 'text-red-400'}`} />
                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  {currentFeature.name}
                </h3>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full font-bold ${
                  currentFeature.type === 'optimal'
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-600'
                    : 'bg-red-950 text-red-300 border border-red-600'
                }`}
              >
                {currentFeature.verdict}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800/80 space-y-1">
                <div className="font-bold text-slate-300">【地形地貌特徵】</div>
                <p className="text-slate-300 leading-relaxed">{currentFeature.description}</p>
              </div>

              <div className="p-3.5 bg-slate-950/70 rounded-xl border border-slate-800/80 space-y-1">
                <div className="font-bold text-cyan-300">【流體力學與危害剖析】</div>
                <p className="text-slate-300 leading-relaxed">{currentFeature.hydrodynamics}</p>
              </div>
            </div>

            <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-start gap-2.5 text-xs sm:text-sm">
              <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">戰術操作守則：</strong>
                <span className="text-slate-200 ml-1">{currentFeature.actionProtocol}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
