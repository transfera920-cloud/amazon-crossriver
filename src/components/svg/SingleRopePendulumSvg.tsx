import React from 'react';

interface SvgProps {
  className?: string;
}

export const SingleRopePendulumSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="單繩鐘擺橫渡力學與弧形運動軌跡圖"
    >
      <rect width="800" height="450" fill="#090E13" rx="12" />

      {/* River Flow */}
      <rect x="180" y="0" width="440" height="450" fill="#0369A1" fillOpacity="0.25" />

      {/* Upstream / Downstream flow arrows */}
      <g stroke="#38BDF8" strokeWidth="2" opacity="0.6">
        <line x1="400" y1="20" x2="400" y2="60" strokeWidth="3" />
        <polygon points="395,60 405,60 400,70" fill="#38BDF8" />
        <text x="400" y="18" fill="#38BDF8" fontSize="12" fontWeight="bold" textAnchor="middle">
          ▲ 上游 (UPSTREAM)
        </text>

        <line x1="400" y1="390" x2="400" y2="430" strokeWidth="3" />
        <polygon points="395,430 405,430 400,440" fill="#38BDF8" />
        <text x="400" y="445" fill="#EF4444" fontSize="12" fontWeight="bold" textAnchor="middle">
          ▼ 下游 (DOWNSTREAM)
        </text>
      </g>

      {/* Origin Bank (Left) */}
      <rect x="0" y="0" width="180" height="450" fill="#1B261D" />
      <text x="90" y="30" fill="#10B981" fontSize="13" fontWeight="bold" textAnchor="middle">出發岸</text>

      {/* Upstream High Anchor Point */}
      <circle cx="90" cy="80" r="22" fill="#15803D" stroke="#4ADE80" strokeWidth="2" />
      <text x="90" y="85" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">上游固定點</text>
      <text x="90" y="115" fill="#86EFAC" fontSize="10" textAnchor="middle">(高位天然大樹)</text>

      {/* Belayer with dynamic pay-out */}
      <circle cx="120" cy="170" r="14" fill="#FBBF24" />
      <line x1="120" y1="184" x2="120" y2="240" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
      <text x="120" y="260" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">放繩確保者</text>

      {/* Far Bank (Right) */}
      <rect x="620" y="0" width="180" height="450" fill="#1B261D" />
      <text x="710" y="30" fill="#10B981" fontSize="13" fontWeight="bold" textAnchor="middle">對岸安全區</text>
      <circle cx="710" cy="270" r="18" fill="#047857" stroke="#10B981" strokeWidth="2" />
      <text x="710" y="275" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">接應站</text>

      {/* Pendulum Tension Arc (Dashed Yellow Line) */}
      <path d="M90 80 Q 260 210 460 250" stroke="#F59E0B" strokeWidth="4" fill="none" />
      <path d="M460 250 Q 560 270 650 270" stroke="#F59E0B" strokeWidth="4" strokeDasharray="6 4" fill="none" />

      {/* Arc Trajectory Path (Green Curved Arrow) */}
      <path d="M170 200 Q 350 290 640 270" stroke="#10B981" strokeWidth="3" strokeDasharray="8 6" fill="none" />
      <polygon points="630,262 650,270 635,278" fill="#10B981" />
      <text x="400" y="315" fill="#6EE7B7" fontSize="12" fontWeight="bold" textAnchor="middle">
        鐘擺橫渡弧線軌跡 (Pendulum Arc)
      </text>

      {/* Crosser Mid-Stream Position */}
      <g>
        <circle cx="460" cy="250" r="16" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />
        <text x="460" y="230" fill="#BAE6FD" fontSize="11" fontWeight="bold" textAnchor="middle">渡溪者</text>
        <circle cx="460" cy="250" r="6" fill="#F43F5E" />
      </g>

      {/* Key Mechanics Overlay Card */}
      <rect x="220" y="350" width="360" height="65" rx="8" fill="#111827" stroke="#374151" strokeWidth="1.5" />
      <text x="400" y="372" fill="#FBBF24" fontSize="12" fontWeight="bold" textAnchor="middle">
        單繩鐘擺力學原理 (Single Rope Pendulum)
      </text>
      <text x="400" y="390" fill="#E5E7EB" fontSize="10" textAnchor="middle">
        • 上游錨點張力抵消部分水流推力，順勢向對岸鐘擺推進
      </text>
      <text x="400" y="405" fill="#10B981" fontSize="10" textAnchor="middle">
        • 若失足踩空，立即停止放繩，人員順著張力弧度安全擺回出發岸
      </text>
    </svg>
  );
};
