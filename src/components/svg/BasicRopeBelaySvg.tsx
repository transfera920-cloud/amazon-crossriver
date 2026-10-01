import React from 'react';

interface SvgProps {
  className?: string;
}

export const BasicRopeBelaySvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      role="img"
      aria-label="登山繩索確保系統架構圖"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="800" height="450" fill="#0C1217" rx="12" />

      {/* Upstream / Downstream Water flow */}
      <rect x="180" y="0" width="440" height="450" fill="#0369A1" fillOpacity="0.25" />

      {/* Upstream & Downstream Indicators */}
      <g stroke="#38BDF8" strokeWidth="2.5" opacity="0.7">
        <line x1="400" y1="20" x2="400" y2="70" strokeWidth="3" />
        <polygon points="395,70 405,70 400,82" fill="#38BDF8" />
        <text x="400" y="16" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
          ▲ 上游 (UPSTREAM)
        </text>

        <line x1="400" y1="380" x2="400" y2="430" strokeWidth="3" />
        <polygon points="395,430 405,430 400,442" fill="#38BDF8" />
        <text x="400" y="445" fill="#EF4444" fontSize="13" fontWeight="bold" textAnchor="middle">
          ▼ 下游 (DOWNSTREAM)
        </text>
      </g>

      {/* Origin Bank (Left) */}
      <rect x="0" y="0" width="180" height="450" fill="#1B261D" stroke="#2D3B2E" strokeWidth="2" />
      <text x="90" y="35" fill="#10B981" fontSize="14" fontWeight="bold" textAnchor="middle">出發岸 (ORIGIN)</text>

      {/* Anchor Tree / Boulder */}
      <circle cx="80" cy="110" r="28" fill="#15803D" stroke="#4ADE80" strokeWidth="2" />
      <text x="80" y="115" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">活生大樹</text>
      <text x="80" y="150" fill="#86EFAC" fontSize="10" textAnchor="middle">穩固主錨點 (Anchor)</text>

      {/* Belayer on Origin Bank */}
      <circle cx="120" cy="220" r="16" fill="#FBBF24" />
      <line x1="120" y1="236" x2="120" y2="300" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" />
      <text x="120" y="325" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">操作確保者</text>
      <text x="120" y="340" fill="#94A3B8" fontSize="10" textAnchor="middle">半扣/ATC制動</text>

      {/* Anchor Sling to Belayer */}
      <line x1="80" y1="138" x2="120" y2="230" stroke="#F43F5E" strokeWidth="4" />

      {/* Main Dynamic Rope into Water */}
      <path d="M120 230 Q 250 180 430 250" stroke="#F59E0B" strokeWidth="5" fill="none" />
      <text x="270" y="195" fill="#FDE68A" fontSize="12" fontWeight="bold" textAnchor="middle">主繩張力線 (Tension Line)</text>

      {/* Crosser in River Stream */}
      <circle cx="430" cy="230" r="16" fill="#38BDF8" />
      <line x1="430" y1="246" x2="430" y2="320" stroke="#38BDF8" strokeWidth="7" strokeLinecap="round" />
      <circle cx="430" cy="250" r="6" fill="#F43F5E" /> {/* Quick Release Carabiner */}
      <text x="430" y="215" fill="#BAE6FD" fontSize="12" fontWeight="bold" textAnchor="middle">渡溪先鋒 (空身)</text>

      {/* Crossing Direction Vector */}
      <line x1="430" y1="250" x2="600" y2="250" stroke="#10B981" strokeWidth="3.5" strokeDasharray="6 4" />
      <polygon points="595,244 610,250 595,256" fill="#10B981" />
      <text x="520" y="240" fill="#6EE7B7" fontSize="11" fontWeight="bold" textAnchor="middle">前進方向 →</text>

      {/* Retreat Arc Vector */}
      <path d="M430 250 Q 280 340 160 360" stroke="#EF4444" strokeWidth="3" strokeDasharray="5 5" fill="none" />
      <polygon points="170,352 155,360 170,368" fill="#EF4444" />
      <text x="290" y="340" fill="#FCA5A5" fontSize="11" fontWeight="bold" textAnchor="middle">⤾ 順流擺回撤退路徑</text>

      {/* Far Bank (Right) */}
      <rect x="620" y="0" width="180" height="450" fill="#1B261D" stroke="#2D3B2E" strokeWidth="2" />
      <text x="710" y="35" fill="#10B981" fontSize="14" fontWeight="bold" textAnchor="middle">目標對岸 (FAR BANK)</text>
      <rect x="640" y="210" width="140" height="70" rx="8" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
      <text x="710" y="238" fill="#A7F3D0" fontSize="13" fontWeight="bold" textAnchor="middle">對岸安全區</text>
      <text x="710" y="258" fill="#D1FAE5" fontSize="10" textAnchor="middle">副錨點與接應站</text>
    </svg>
  );
};
