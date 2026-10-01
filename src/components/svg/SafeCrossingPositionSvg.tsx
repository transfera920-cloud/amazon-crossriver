import React from 'react';

interface SvgProps {
  className?: string;
}

export const SafeCrossingPositionSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      role="img"
      aria-label="理想過溪點地形示意圖"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="800" height="450" fill="#0C1217" rx="12" />

      {/* Upstream / Downstream indicators */}
      <text x="400" y="30" fill="#38BDF8" fontSize="14" fontWeight="bold" textAnchor="middle">▲ 上游 (UPSTREAM)</text>
      <text x="400" y="435" fill="#94A3B8" fontSize="14" fontWeight="bold" textAnchor="middle">▼ 下游 (DOWNSTREAM)</text>

      {/* Top Narrow Canyon / Gorge (Dangerous Zone) */}
      <path d="M50 50 L280 50 L320 180 L80 180 Z" fill="#261C1C" stroke="#7F1D1D" strokeWidth="2" />
      <path d="M750 50 L520 50 L480 180 L720 180 Z" fill="#261C1C" stroke="#7F1D1D" strokeWidth="2" />
      {/* Narrow Gorge Water */}
      <path d="M280 50 L520 50 L480 180 L320 180 Z" fill="#0C4A6E" />
      {/* Rapids & White Water */}
      <path d="M340 90 Q 400 110 460 90" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
      <path d="M350 130 Q 400 150 450 130" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />

      {/* Danger Overlay Box on Gorge */}
      <rect x="290" y="70" width="220" height="50" rx="6" fill="#450A0A" stroke="#EF4444" strokeWidth="1.5" />
      <text x="400" y="92" fill="#FCA5A5" fontSize="13" fontWeight="bold" textAnchor="middle">✕ 窄、急、深 (高危險峽口)</text>
      <text x="400" y="110" fill="#FECDD3" fontSize="10" textAnchor="middle">距離最短，但水流集中水壓暴增！</text>

      {/* Transition River Flow */}
      <path d="M320 180 L480 180 L620 380 L180 380 Z" fill="#0369A1" fillOpacity="0.4" />

      {/* Bottom Braided Wide Shallow Zone (Safe Zone) */}
      <path d="M80 180 L180 380 L50 410 L50 180 Z" fill="#182618" stroke="#166534" strokeWidth="2" />
      <path d="M720 180 L620 380 L750 410 L750 180 Z" fill="#182618" stroke="#166534" strokeWidth="2" />

      {/* Wide Shallow River Water */}
      <path d="M180 380 L620 380 L650 410 L150 410 Z" fill="#0284C7" fillOpacity="0.6" />

      {/* Safe Braided Water Flow Arrows */}
      <g stroke="#38BDF8" strokeWidth="2" opacity="0.8">
        <line x1="260" y1="280" x2="260" y2="330" />
        <polygon points="256,330 264,330 260,340" fill="#38BDF8" />
        <line x1="400" y1="280" x2="400" y2="330" strokeWidth="3" />
        <polygon points="395,330 405,330 400,342" fill="#38BDF8" />
        <line x1="540" y1="280" x2="540" y2="330" />
        <polygon points="536,330 544,330 540,340" fill="#38BDF8" />
      </g>

      {/* Safe Crossing Path Green Dashed Line */}
      <line x1="180" y1="330" x2="620" y2="330" stroke="#10B981" strokeWidth="4" strokeDasharray="10 6" />
      <polygon points="615,322 635,330 615,338" fill="#10B981" />

      {/* Safe Zone Overlay Card */}
      <rect x="250" y="225" width="300" height="52" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
      <text x="400" y="248" fill="#A7F3D0" fontSize="14" fontWeight="bold" textAnchor="middle">✓ 寬、緩、淺 (理想渡溪區)</text>
      <text x="400" y="266" fill="#D1FAE5" fontSize="11" textAnchor="middle">河面展寬分散水流量，足踏平坦可控</text>

      {/* Direction Notes */}
      <rect x="20" y="320" width="130" height="40" rx="6" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
      <text x="85" y="338" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">出發岸</text>
      <text x="85" y="352" fill="#94A3B8" fontSize="10" textAnchor="middle">平緩淺灘上切點</text>

      <rect x="650" y="320" width="130" height="40" rx="6" fill="#1E293B" stroke="#64748B" strokeWidth="1" />
      <text x="715" y="338" fill="#F8FAFC" fontSize="12" fontWeight="bold" textAnchor="middle">目標對岸</text>
      <text x="715" y="352" fill="#94A3B8" fontSize="10" textAnchor="middle">安全開闊登陸區</text>
    </svg>
  );
};
