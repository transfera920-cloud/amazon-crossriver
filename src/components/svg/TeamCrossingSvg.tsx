import React from 'react';

interface SvgProps {
  className?: string;
}

export const TeamCrossingSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="多人協同渡溪陣型圖（並排互挽與三角破水）"
    >
      <rect width="800" height="450" fill="#0A0F14" rx="12" />

      {/* Upstream to Downstream Water flow */}
      <rect x="0" y="0" width="800" height="450" fill="#0369A1" fillOpacity="0.2" />
      <g stroke="#38BDF8" strokeWidth="2" opacity="0.6">
        <line x1="400" y1="20" x2="400" y2="70" strokeWidth="3" />
        <polygon points="395,70 405,70 400,82" fill="#38BDF8" />
        <text x="400" y="18" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
          ▲ 水流方向 (UPSTREAM WATER FLOW)
        </text>
      </g>

      {/* Mode A: Left side - Parallel Arm Interlock Formation (並排互挽法) */}
      <g>
        <rect x="30" y="80" width="340" height="340" rx="10" fill="#111827" stroke="#374151" strokeWidth="1.5" />
        <text x="200" y="110" fill="#6EE7B7" fontSize="15" fontWeight="bold" textAnchor="middle">
          陣型 A｜並排互挽法 (Line Formation)
        </text>

        {/* 3 Hikers Interlocked */}
        {/* Upstream Strong Member 1 */}
        <circle cx="120" cy="180" r="16" fill="#10B981" />
        <line x1="120" y1="196" x2="120" y2="280" stroke="#10B981" strokeWidth="7" strokeLinecap="round" />
        <text x="120" y="310" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">上游先鋒(強)</text>

        {/* Center Protected Member 2 */}
        <circle cx="200" cy="190" r="15" fill="#FBBF24" />
        <line x1="200" y1="205" x2="200" y2="280" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" />
        <text x="200" y="310" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">中繼隊員(弱)</text>

        {/* Downstream Strong Member 3 */}
        <circle cx="280" cy="200" r="16" fill="#10B981" />
        <line x1="280" y1="216" x2="280" y2="280" stroke="#10B981" strokeWidth="7" strokeLinecap="round" />
        <text x="280" y="310" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">下游收尾(強)</text>

        {/* Arm Interlock Bar (Heavy Connecting Band) */}
        <path d="M120 220 L200 225 L280 230" stroke="#F43F5E" strokeWidth="8" strokeLinecap="round" />
        <text x="200" y="255" fill="#FDA4AF" fontSize="11" fontWeight="bold" textAnchor="middle">
          手臂深入勾挽肩膀/腰帶
        </text>

        <rect x="50" y="340" width="300" height="60" rx="6" fill="#1E293B" />
        <text x="200" y="362" fill="#E2E8F0" fontSize="11" textAnchor="middle">• 上游強者率先承受水壓破水</text>
        <text x="200" y="382" fill="#E2E8F0" fontSize="11" textAnchor="middle">• 口令同步：「一、二、側移！」小步前進</text>
      </g>

      {/* Mode B: Right side - Triangle Wedge Formation (三角破水陣型) */}
      <g>
        <rect x="430" y="80" width="340" height="340" rx="10" fill="#111827" stroke="#374151" strokeWidth="1.5" />
        <text x="600" y="110" fill="#38BDF8" fontSize="15" fontWeight="bold" textAnchor="middle">
          陣型 B｜三角破水法 (Triangle Formation)
        </text>

        {/* Triangle Apex: Leader / Strong Crosser facing upstream */}
        <circle cx="600" cy="160" r="18" fill="#0284C7" />
        <line x1="600" y1="178" x2="600" y2="250" stroke="#0284C7" strokeWidth="8" strokeLinecap="round" />
        <text x="600" y="145" fill="#7DD3FC" fontSize="12" fontWeight="bold" textAnchor="middle">頂點破水者</text>

        {/* Behind Left Member */}
        <circle cx="530" cy="230" r="15" fill="#FBBF24" />
        <line x1="530" y1="245" x2="530" y2="300" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" />

        {/* Behind Right Member */}
        <circle cx="670" cy="230" r="15" fill="#FBBF24" />
        <line x1="670" y1="245" x2="670" y2="300" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" />

        {/* Hands on Apex Back Connectors */}
        <line x1="530" y1="240" x2="590" y2="210" stroke="#F43F5E" strokeWidth="6" strokeLinecap="round" />
        <line x1="670" y1="240" x2="610" y2="210" stroke="#F43F5E" strokeWidth="6" strokeLinecap="round" />
        <line x1="530" y1="270" x2="670" y2="270" stroke="#F43F5E" strokeWidth="6" strokeLinecap="round" />

        {/* Triangle Shaded Area */}
        <polygon points="600,180 530,280 670,280" fill="#38BDF8" fillOpacity="0.1" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />

        <rect x="450" y="340" width="300" height="60" rx="6" fill="#1E293B" />
        <text x="600" y="362" fill="#E2E8F0" fontSize="11" textAnchor="middle">• 頂點切開水流，後方兩人處於低壓渦流區</text>
        <text x="600" y="382" fill="#E2E8F0" fontSize="11" textAnchor="middle">• 3人體重加總抗推力提升 250%</text>
      </g>
    </svg>
  );
};
