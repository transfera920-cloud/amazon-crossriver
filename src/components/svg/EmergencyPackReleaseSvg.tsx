import React from 'react';

interface SvgProps {
  className?: string;
}

export const EmergencyPackReleaseSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="緊急式人包分離與防衛性仰漂自救圖"
    >
      <rect width="800" height="450" fill="#0A0F14" rx="12" />

      {/* River rapids water */}
      <rect x="0" y="0" width="800" height="450" fill="#0C4A6E" fillOpacity="0.35" />

      {/* Current flow arrows (Left to Right = Upstream to Downstream) */}
      <g stroke="#38BDF8" strokeWidth="2.5" opacity="0.6">
        <line x1="80" y1="40" x2="300" y2="40" strokeDasharray="8 4" />
        <polygon points="300,35 315,40 300,45" fill="#38BDF8" />
        <line x1="500" y1="40" x2="720" y2="40" strokeDasharray="8 4" />
        <polygon points="720,35 735,40 720,45" fill="#38BDF8" />
        <text x="400" y="30" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
          急流水流方向 → (DOWNSTREAM CURRENT)
        </text>
      </g>

      {/* Phase 1: Discarding Backpack (Left) */}
      <g>
        <rect x="50" y="70" width="310" height="340" rx="10" fill="#111827" stroke="#EF4444" strokeWidth="1.5" />
        <text x="205" y="100" fill="#FCA5A5" fontSize="14" fontWeight="bold" textAnchor="middle">
          步驟一｜滑脫背包・解除水阻
        </text>

        {/* Hiker slipping off backpack */}
        <circle cx="150" cy="180" r="16" fill="#FBBF24" />
        <line x1="150" y1="196" x2="150" y2="270" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" />
        {/* Arms sliding back */}
        <line x1="150" y1="210" x2="110" y2="180" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />

        {/* Discarded pack floating away downstream */}
        <rect x="230" y="200" width="45" height="65" rx="6" fill="#E11D48" stroke="#FFE4E6" strokeWidth="2" strokeDasharray="4 2" />
        <text x="252" y="235" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">
          脫包
        </text>
        <line x1="280" y1="230" x2="330" y2="230" stroke="#EF4444" strokeWidth="3" />
        <polygon points="325,225 340,230 325,235" fill="#EF4444" />

        <rect x="70" y="320" width="270" height="70" rx="6" fill="#1E293B" />
        <text x="205" y="342" fill="#FECDD3" fontSize="11" fontWeight="bold" textAnchor="middle">
          • 裝備可以損失，人命不能！
        </text>
        <text x="205" y="360" fill="#E2E8F0" fontSize="10" textAnchor="middle">
          • 雙臂向後滑出肩帶，絕不死抓背包
        </text>
        <text x="205" y="376" fill="#E2E8F0" fontSize="10" textAnchor="middle">
          • 解除數十公斤水阻與溺水鉛塊
        </text>
      </g>

      {/* Phase 2: Defensive Swimming Posture (Right) */}
      <g>
        <rect x="420" y="70" width="340" height="340" rx="10" fill="#111827" stroke="#10B981" strokeWidth="1.5" />
        <text x="590" y="100" fill="#6EE7B7" fontSize="14" fontWeight="bold" textAnchor="middle">
          步驟二｜防衛性仰漂自救姿態
        </text>

        {/* Floating Hiker on Back, Feet downstream */}
        {/* Head Upstream (Left) */}
        <circle cx="480" cy="220" r="16" fill="#FBBF24" stroke="#FFFFFF" strokeWidth="2" />
        <text x="480" y="195" fill="#FDE68A" fontSize="10" fontWeight="bold" textAnchor="middle">
          頭部向上游浮出
        </text>

        {/* Torso Floating */}
        <line x1="496" y1="220" x2="600" y2="220" stroke="#FBBF24" strokeWidth="10" strokeLinecap="round" />

        {/* Legs Up, Feet Downstream (Right) to deflect rocks */}
        <line x1="600" y1="220" x2="680" y2="200" stroke="#FBBF24" strokeWidth="8" strokeLinecap="round" />
        {/* Shoes */}
        <ellipse cx="690" cy="195" rx="10" ry="14" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
        <text x="690" y="170" fill="#6EE7B7" fontSize="11" fontWeight="bold" textAnchor="middle">
          雙腳朝下游防撞
        </text>

        {/* Hands Paddling Outward */}
        <line x1="540" y1="220" x2="520" y2="265" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" />
        <line x1="560" y1="220" x2="580" y2="265" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" />
        <text x="550" y="290" fill="#7DD3FC" fontSize="10" textAnchor="middle">
          雙手如槳斜向外划水
        </text>

        <rect x="440" y="320" width="300" height="70" rx="6" fill="#1E293B" />
        <text x="590" y="342" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">
          • 嚴禁在急流中雙腳直立踩底！(防卡石縫)
        </text>
        <text x="590" y="360" fill="#E2E8F0" fontSize="10" textAnchor="middle">
          • 身體保持仰漂，鞋底抵禦水下礁石撞擊
        </text>
        <text x="590" y="376" fill="#E2E8F0" fontSize="10" textAnchor="middle">
          • 斜向 45 度划向兩岸平緩迴流區靠岸
        </text>
      </g>
    </svg>
  );
};
