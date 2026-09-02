import React from 'react';

interface SvgProps {
  className?: string;
}

export const RopeWaterTransportSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="利用繩索＋水流運送裝備力學向量與操作圖"
    >
      <rect width="800" height="450" fill="#0A0F14" rx="12" />

      {/* Water flow */}
      <rect x="180" y="0" width="440" height="450" fill="#0369A1" fillOpacity="0.25" />
      <text x="400" y="25" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
        ▲ 上游 (UPSTREAM)
      </text>

      {/* Origin Bank (Left) */}
      <rect x="0" y="0" width="180" height="450" fill="#1B261D" />
      <text x="90" y="30" fill="#10B981" fontSize="13" fontWeight="bold" textAnchor="middle">出發岸 (放繩控制)</text>

      {/* Operator on Origin Bank */}
      <circle cx="120" cy="140" r="16" fill="#FBBF24" />
      <line x1="120" y1="156" x2="120" y2="220" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" />
      <text x="120" y="245" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">出發放繩員</text>
      <text x="120" y="260" fill="#94A3B8" fontSize="9" textAnchor="middle">(半扣制動放繩)</text>

      {/* Far Bank (Right) */}
      <rect x="620" y="0" width="180" height="450" fill="#1B261D" />
      <text x="710" y="30" fill="#10B981" fontSize="13" fontWeight="bold" textAnchor="middle">對岸安全區 (接應)</text>

      {/* Receiver on Far Bank with long pole/hand */}
      <circle cx="680" cy="280" r="16" fill="#10B981" />
      <line x1="680" y1="296" x2="680" y2="360" stroke="#10B981" strokeWidth="7" strokeLinecap="round" />
      <text x="680" y="260" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">對岸接應員</text>
      <text x="680" y="390" fill="#86EFAC" fontSize="9" textAnchor="middle">持杖接引拉上岸</text>

      {/* Rope from Origin Bank to Floating Pack */}
      <path d="M120 140 Q 280 160 460 250" stroke="#F59E0B" strokeWidth="4.5" fill="none" />
      <text x="270" y="170" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">
        繩索張力（控制方向與速度）
      </text>

      {/* Floating Pack (Kite principle in water) */}
      <rect x="460" y="230" width="48" height="68" rx="8" fill="#E11D48" stroke="#FFE4E6" strokeWidth="2.5" />
      <circle cx="460" cy="240" r="6" fill="#F43F5E" />
      <text x="484" y="265" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
        漂流裝備
      </text>
      <text x="484" y="285" fill="#FECDD3" fontSize="9" textAnchor="middle">
        防水背包
      </text>

      {/* Force Vectors */}
      {/* Downstream Current Push */}
      <line x1="520" y1="264" x2="520" y2="340" stroke="#38BDF8" strokeWidth="4" />
      <polygon points="514,340 526,340 520,352" fill="#38BDF8" />
      <text x="560" y="325" fill="#38BDF8" fontSize="11" fontWeight="bold">
        水流動力 ↓
      </text>

      {/* Resulting Curved Ferry Path to Far Bank */}
      <path d="M480 280 Q 560 320 660 300" stroke="#10B981" strokeWidth="3" strokeDasharray="6 4" fill="none" />
      <polygon points="655,294 670,300 655,306" fill="#10B981" />
      <text x="560" y="285" fill="#6EE7B7" fontSize="11" fontWeight="bold" textAnchor="middle">
        合力擺渡軌跡 →
      </text>

      {/* Core Rules Box */}
      <rect x="200" y="355" width="400" height="75" rx="8" fill="#111827" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="400" y="378" fill="#FDE68A" fontSize="12" fontWeight="bold" textAnchor="middle">
        水力運裝備 4 核心要領
      </text>
      <text x="400" y="398" fill="#E2E8F0" fontSize="10" textAnchor="middle">
        • 水流是「前進動力」，繩索是「方向盤」，操作員是「煞車系統」
      </text>
      <text x="400" y="414" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">
        • 嚴禁將裝備送往存在落差、倒木之不受控下游！
      </text>
    </svg>
  );
};
