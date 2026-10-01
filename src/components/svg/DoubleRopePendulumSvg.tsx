import React from 'react';

interface SvgProps {
  className?: string;
}

export const DoubleRopePendulumSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      role="img"
      aria-label="雙繩鐘擺進階控制系統架構圖"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="800" height="450" fill="#090E13" rx="12" />

      {/* River Flow */}
      <rect x="180" y="0" width="440" height="450" fill="#0369A1" fillOpacity="0.25" />

      {/* Upstream / Downstream flow arrows */}
      <text x="400" y="22" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
        ▲ 上游水流方向 (UPSTREAM)
      </text>

      {/* Origin Bank (Left) */}
      <rect x="0" y="0" width="180" height="450" fill="#1B261D" />
      <text x="90" y="30" fill="#10B981" fontSize="13" fontWeight="bold" textAnchor="middle">出發岸</text>

      {/* Anchor 1: Upstream Anchor */}
      <circle cx="80" cy="75" r="20" fill="#15803D" stroke="#4ADE80" strokeWidth="2" />
      <text x="80" y="80" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">上游錨點 1</text>
      <text x="80" y="110" fill="#86EFAC" fontSize="9" textAnchor="middle">(主抗水流確保繩)</text>

      {/* Belayer 1: Upstream Belayer */}
      <circle cx="120" cy="140" r="13" fill="#FBBF24" />
      <text x="120" y="165" fill="#FDE68A" fontSize="10" fontWeight="bold" textAnchor="middle">確保員 A</text>

      {/* Anchor 2: Downstream Control Belayer */}
      <circle cx="80" cy="340" r="18" fill="#15803D" stroke="#4ADE80" strokeWidth="1.5" />
      <text x="80" y="345" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">出發錨點 2</text>
      <circle cx="120" cy="290" r="13" fill="#FBBF24" />
      <text x="120" y="315" fill="#FDE68A" fontSize="10" fontWeight="bold" textAnchor="middle">控制員 B</text>

      {/* Far Bank (Right) */}
      <rect x="620" y="0" width="180" height="450" fill="#1B261D" />
      <text x="710" y="30" fill="#10B981" fontSize="13" fontWeight="bold" textAnchor="middle">目標對岸</text>
      <circle cx="710" cy="225" r="18" fill="#047857" stroke="#10B981" strokeWidth="2" />
      <text x="710" y="230" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">接應站</text>

      {/* Rope 1: Main Upstream Belay Line (Yellow) */}
      <path d="M120 140 Q 280 160 440 220" stroke="#F59E0B" strokeWidth="4.5" fill="none" />
      <text x="260" y="160" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">
        繩索 1：上游張力主繩
      </text>

      {/* Rope 2: Control & Retrieval Line (Cyan) */}
      <path d="M120 290 Q 280 270 440 220" stroke="#06B6D4" strokeWidth="4.5" strokeDasharray="6 4" fill="none" />
      <text x="260" y="300" fill="#67E8F9" fontSize="11" fontWeight="bold" textAnchor="middle">
        繩索 2：出發岸回拉控制繩
      </text>

      {/* Crosser with Dual Rope Carabiner Attachment */}
      <circle cx="440" cy="220" r="17" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="440" cy="220" r="6" fill="#F43F5E" />
      <text x="440" y="195" fill="#BAE6FD" fontSize="12" fontWeight="bold" textAnchor="middle">
        先鋒／渡溪者
      </text>

      {/* Movement Vector */}
      <line x1="440" y1="220" x2="620" y2="225" stroke="#10B981" strokeWidth="3" strokeDasharray="6 4" />
      <polygon points="615,220 630,225 615,230" fill="#10B981" />

      {/* Feature Box */}
      <rect x="220" y="345" width="360" height="85" rx="8" fill="#111827" stroke="#06B6D4" strokeWidth="1.5" />
      <text x="400" y="368" fill="#67E8F9" fontSize="12" fontWeight="bold" textAnchor="middle">
        雙繩系統優勢（進階控制系統）
      </text>
      <text x="400" y="388" fill="#E5E7EB" fontSize="10" textAnchor="middle">
        • 繩1負責頂住水流推力，繩2精準控制前進速度與距離
      </text>
      <text x="400" y="405" fill="#E5E7EB" fontSize="10" textAnchor="middle">
        • 遇到障礙時，出發岸可隨時透過繩2直接主動將人拉回原岸
      </text>
      <text x="400" y="420" fill="#F87171" fontSize="10" fontWeight="bold" textAnchor="middle">
        ⚠️ 需兩人默契放繩，嚴防兩繩水中互相纏繞
      </text>
    </svg>
  );
};
