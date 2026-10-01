import React from 'react';

interface SvgProps {
  className?: string;
}

export const RopeWaterTransportSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      role="img"
      aria-label="利用繩索＋水流運送裝備力學向量與操作圖"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="800" height="450" fill="#0A0F14" rx="12" />

      {/* Water flow */}
      <rect x="180" y="0" width="440" height="450" fill="#0369A1" fillOpacity="0.25" />
      <text x="400" y="25" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
        ▲ 上游 (UPSTREAM)
      </text>

      {/* Origin Bank (Left - UPSTREAM HIGHER POSITION) */}
      <rect x="0" y="0" width="200" height="450" fill="#1B261D" />
      <rect x="15" y="15" width="170" height="38" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="1.2" />
      <text x="100" y="32" fill="#4ADE80" fontSize="12" fontWeight="bold" textAnchor="middle">【出發岸】上游高位</text>
      <text x="100" y="46" fill="#A7F3D0" fontSize="9" textAnchor="middle">(放繩控制端／主錨點)</text>

      {/* Operator on Origin Bank */}
      <circle cx="120" cy="120" r="16" fill="#FBBF24" />
      <line x1="120" y1="136" x2="120" y2="195" stroke="#FBBF24" strokeWidth="7" strokeLinecap="round" />
      <text x="120" y="215" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">出發放繩員</text>
      <text x="120" y="230" fill="#94A3B8" fontSize="9" textAnchor="middle">(半扣制動勻速放繩)</text>

      {/* Far Bank (Right - DOWNSTREAM LOWER POSITION) */}
      <rect x="600" y="0" width="200" height="450" fill="#1B261D" />
      <rect x="615" y="15" width="170" height="38" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="1.2" />
      <text x="700" y="32" fill="#4ADE80" fontSize="12" fontWeight="bold" textAnchor="middle">【目標對岸】下游低位</text>
      <text x="700" y="46" fill="#A7F3D0" fontSize="9" textAnchor="middle">(順流 30°~45° 接應安全區)</text>

      {/* Receiver on Far Bank (Low Position y=300) */}
      <circle cx="670" cy="300" r="16" fill="#10B981" />
      <line x1="670" y1="316" x2="670" y2="375" stroke="#10B981" strokeWidth="7" strokeLinecap="round" />
      <text x="670" y="280" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">對岸接應員</text>
      <text x="670" y="395" fill="#86EFAC" fontSize="9" textAnchor="middle">持杖接引拉上高處</text>

      {/* Death-V Hazard Warning Line */}
      <g opacity="0.8">
        <line x1="200" y1="120" x2="600" y2="120" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 3" />
        <text x="400" y="112" fill="#FCA5A5" fontSize="9" fontWeight="bold" textAnchor="middle">
          🛑 嚴禁水平拉死繩（中央水壓下拉會形成致命死亡 V 夾殺）
        </text>
      </g>

      {/* Rope from Origin Bank (High) to Floating Pack (Mid-Low) */}
      <path d="M120 120 Q 280 145 450 250" stroke="#F59E0B" strokeWidth="4.5" fill="none" />
      <text x="260" y="160" fill="#FDE68A" fontSize="10" fontWeight="bold" textAnchor="middle">
        斜向鐘擺導引張力（避開死亡V）
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
