import React from 'react';

interface SvgProps {
  className?: string;
}

export const HazardousPositionSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      role="img"
      aria-label="危險渡溪地形與河中島孤立陷阱"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="800" height="450" fill="#0B1015" rx="12" />

      {/* Main River Stream */}
      <path d="M120 0 L680 0 L720 450 L80 450 Z" fill="#082F49" />

      {/* Upstream/Downstream */}
      <text x="400" y="25" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">▲ 上游方向 (UPSTREAM)</text>
      <text x="400" y="440" fill="#EF4444" fontSize="13" fontWeight="bold" textAnchor="middle">▼ 下游致命障礙區 (FATAL HAZARD)</text>

      {/* Danger Zone 1: Isolated Gravel Island (河中島孤立陷阱) */}
      <ellipse cx="400" cy="170" rx="90" ry="38" fill="#78350F" stroke="#F59E0B" strokeWidth="2.5" />
      <text x="400" y="165" fill="#FEF3C7" fontSize="13" fontWeight="bold" textAnchor="middle">⚠️ 河中沙洲／突出岩</text>
      <text x="400" y="183" fill="#FDE68A" fontSize="10" textAnchor="middle">暴漲時兩側急流包夾，瞬間成孤島！</text>

      {/* Current Splitting Around Island */}
      <path d="M350 70 Q 230 150 250 240" stroke="#38BDF8" strokeWidth="3" fill="none" strokeDasharray="6 4" />
      <polygon points="245,240 255,240 250,255" fill="#38BDF8" />
      <path d="M450 70 Q 570 150 550 240" stroke="#38BDF8" strokeWidth="3" fill="none" strokeDasharray="6 4" />
      <polygon points="545,240 555,240 550,255" fill="#38BDF8" />

      {/* Danger Zone 2: Strainer / Log Jam (倒木卡人陷阱) */}
      <rect x="180" y="320" width="180" height="70" rx="6" fill="#450A0A" stroke="#EF4444" strokeWidth="2" />
      <line x1="200" y1="365" x2="340" y2="335" stroke="#78350F" strokeWidth="8" strokeLinecap="round" />
      <line x1="220" y1="335" x2="320" y2="375" stroke="#78350F" strokeWidth="6" strokeLinecap="round" />
      <text x="270" y="345" fill="#FECDD3" fontSize="12" fontWeight="bold" textAnchor="middle">倒木堆 (Strainer)</text>
      <text x="270" y="380" fill="#FCA5A5" fontSize="10" textAnchor="middle">水過人不透，卡死致命</text>

      {/* Danger Zone 3: Waterfall / Siphon (落差瀑布/吸入孔) */}
      <rect x="440" y="320" width="180" height="70" rx="6" fill="#450A0A" stroke="#EF4444" strokeWidth="2" />
      <path d="M460 345 Q 530 365 600 345" stroke="#FFFFFF" strokeWidth="3" strokeDasharray="4 4" fill="none" />
      <text x="530" y="345" fill="#FECDD3" fontSize="12" fontWeight="bold" textAnchor="middle">瀑布落差 (Drop-off)</text>
      <text x="530" y="380" fill="#FCA5A5" fontSize="10" textAnchor="middle">底槽吸入暗流，無自救空間</text>

      {/* Prohibited crossing sign */}
      <rect x="10" y="10" width="150" height="50" rx="6" fill="#18181B" stroke="#DC2626" strokeWidth="2" />
      <text x="85" y="32" fill="#EF4444" fontSize="13" fontWeight="bold" textAnchor="middle">⛔ 絕對禁入情境</text>
      <text x="85" y="48" fill="#A1A1AA" fontSize="10" textAnchor="middle">下游存在致命障礙</text>
    </svg>
  );
};
