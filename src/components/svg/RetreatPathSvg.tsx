import React from 'react';

interface SvgProps {
  className?: string;
}

export const RetreatPathSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      role="img"
      aria-label="撤退方向與安全路徑圖"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="800" height="450" fill="#0A0F14" rx="12" />

      {/* Flood River Rising Background */}
      <rect x="180" y="0" width="440" height="450" fill="#78350F" fillOpacity="0.4" />

      {/* Upstream / Downstream flow with rising flood signs */}
      <g stroke="#F59E0B" strokeWidth="2.5" opacity="0.8">
        <line x1="400" y1="20" x2="400" y2="70" strokeWidth="4" />
        <polygon points="392,70 408,70 400,84" fill="#F59E0B" />
        <text x="400" y="16" fill="#FBBF24" fontSize="13" fontWeight="bold" textAnchor="middle">
          ▲ 上游暴雨山洪爆發 (FLASH FLOOD WARNING)
        </text>
      </g>

      {/* Origin Bank High Ground (Safe Retreat Target) */}
      <rect x="0" y="0" width="180" height="450" fill="#143019" stroke="#10B981" strokeWidth="3" />
      <text x="90" y="30" fill="#4ADE80" fontSize="13" fontWeight="bold" textAnchor="middle">出發岸安全高台</text>
      <rect x="20" y="60" width="140" height="50" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
      <text x="90" y="85" fill="#A7F3D0" fontSize="12" fontWeight="bold" textAnchor="middle">安全避難高地</text>
      <text x="90" y="100" fill="#D1FAE5" fontSize="9" textAnchor="middle">(原地紮營等水退)</text>

      {/* Far Bank High Ground */}
      <rect x="620" y="0" width="180" height="450" fill="#143019" stroke="#10B981" strokeWidth="3" />
      <text x="710" y="30" fill="#4ADE80" fontSize="13" fontWeight="bold" textAnchor="middle">對岸安全高台</text>
      <rect x="640" y="60" width="140" height="50" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
      <text x="710" y="85" fill="#A7F3D0" fontSize="12" fontWeight="bold" textAnchor="middle">對岸避難高地</text>
      <text x="710" y="100" fill="#D1FAE5" fontSize="9" textAnchor="middle">(先抵岸者立即上切)</text>

      {/* Mid-Stream Abandoned Hazardous Zone */}
      <circle cx="400" cy="240" r="24" fill="#450A0A" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" />
      <text x="400" y="245" fill="#FCA5A5" fontSize="12" fontWeight="bold" textAnchor="middle">
        危險區
      </text>

      {/* Retreat Vector Back to Origin Bank (Green Solid Curve) */}
      <path d="M380 240 Q 250 200 130 180" stroke="#10B981" strokeWidth="5" fill="none" />
      <polygon points="135,170 115,180 130,190" fill="#10B981" />
      <rect x="180" y="135" width="160" height="35" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
      <text x="260" y="157" fill="#6EE7B7" fontSize="12" fontWeight="bold" textAnchor="middle">
        ⤾ 立即原路撤回起點！
      </text>

      {/* Advance Cutoff (Red X Barrier) */}
      <line x1="420" y1="210" x2="580" y2="270" stroke="#EF4444" strokeWidth="4" strokeDasharray="6 4" />
      <line x1="480" y1="210" x2="520" y2="270" stroke="#EF4444" strokeWidth="5" />
      <line x1="520" y1="210" x2="480" y2="270" stroke="#EF4444" strokeWidth="5" />
      <text x="500" y="300" fill="#EF4444" fontSize="12" fontWeight="bold" textAnchor="middle">
        ✕ 嚴禁盲目搶過
      </text>

      {/* Retreat Golden Rule Card */}
      <rect x="180" y="340" width="440" height="85" rx="8" fill="#111827" stroke="#EF4444" strokeWidth="1.5" />
      <text x="400" y="365" fill="#FCA5A5" fontSize="13" fontWeight="bold" textAnchor="middle">
        🚨 登山過溪最高撤退準則
      </text>
      <text x="400" y="388" fill="#E2E8F0" fontSize="11" textAnchor="middle">
        • 只要水位上漲、水色變濁、漂流物增加：立即終止前進！
      </text>
      <text x="400" y="405" fill="#FEF08A" fontSize="11" fontWeight="bold" textAnchor="middle">
        • 「如果進去之後無法安全撤退，就絕不進入！」
      </text>
    </svg>
  );
};
