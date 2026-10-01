import React from 'react';

interface SvgProps {
  className?: string;
}

export const StreamVectorsSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      role="img"
      aria-label="水流力學與推力向量圖"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="800" height="450" fill="#0A0F14" rx="12" />

      {/* River Bed Profile */}
      <path d="M50 360 Q 400 390 750 360 L 750 430 L 50 430 Z" fill="#1C261D" stroke="#2D3B2E" strokeWidth="2" />

      {/* River Bed Rocks */}
      <circle cx="200" cy="370" r="16" fill="#475569" />
      <circle cx="380" cy="380" r="22" fill="#334155" />
      <circle cx="430" cy="385" r="18" fill="#475569" />
      <circle cx="600" cy="370" r="15" fill="#334155" />

      {/* Water Surface */}
      <rect x="50" y="160" width="700" height="210" fill="#0284C7" fillOpacity="0.2" />
      <path d="M50 160 Q 200 150 400 160 T 750 160" stroke="#38BDF8" strokeWidth="3" fill="none" />
      <text x="70" y="150" fill="#38BDF8" fontSize="13" fontWeight="bold">水面 (WATER SURFACE)</text>

      {/* Hiker Stick Figure with Heavy Pack */}
      {/* Body */}
      <circle cx="390" cy="110" r="18" fill="#FBBF24" /> {/* Head */}
      <line x1="390" y1="128" x2="390" y2="240" stroke="#FBBF24" strokeWidth="8" strokeLinecap="round" /> {/* Torso */}
      {/* Legs */}
      <line x1="390" y1="240" x2="360" y2="370" stroke="#FBBF24" strokeWidth="8" strokeLinecap="round" /> {/* Leg Upstream */}
      <line x1="390" y1="240" x2="420" y2="370" stroke="#FBBF24" strokeWidth="8" strokeLinecap="round" /> {/* Leg Downstream */}

      {/* Trekking Poles */}
      <line x1="390" y1="170" x2="310" y2="365" stroke="#94A3B8" strokeWidth="5" />
      <line x1="390" y1="170" x2="460" y2="365" stroke="#94A3B8" strokeWidth="5" />
      <circle cx="310" cy="365" r="6" fill="#E2E8F0" />
      <circle cx="460" cy="365" r="6" fill="#E2E8F0" />

      {/* Heavy Backpack (Danger: Big Blue/Red Box) */}
      <rect x="400" y="125" width="55" height="95" rx="8" fill="#E11D48" stroke="#FFE4E6" strokeWidth="2" />
      <text x="427" y="175" fill="#FFFFFF" fontSize="12" fontWeight="bold" textAnchor="middle">重裝大包</text>
      <text x="427" y="195" fill="#FECDD3" fontSize="10" textAnchor="middle">(70L / 20kg)</text>

      {/* Vector 1: Current Force (Horizontal Push) */}
      <g>
        <line x1="120" y1="250" x2="330" y2="250" stroke="#EF4444" strokeWidth="6" strokeDasharray="8 4" />
        <polygon points="330,240 360,250 330,260" fill="#EF4444" />
        <rect x="140" y="215" width="160" height="26" rx="4" fill="#450A0A" stroke="#EF4444" strokeWidth="1" />
        <text x="220" y="233" fill="#FCA5A5" fontSize="12" fontWeight="bold" textAnchor="middle">1. 水流橫向推力 (F ∝ V²)</text>
      </g>

      {/* Vector 2: Buoyancy Force (Upward Lift) */}
      <g>
        <line x1="427" y1="290" x2="427" y2="225" stroke="#06B6D4" strokeWidth="5" />
        <polygon points="418,225 436,225 427,205" fill="#06B6D4" />
        <rect x="470" y="155" width="160" height="42" rx="4" fill="#083344" stroke="#06B6D4" strokeWidth="1" />
        <text x="550" y="173" fill="#67E8F9" fontSize="12" fontWeight="bold" textAnchor="middle">2. 背包巨大浮力</text>
        <text x="550" y="190" fill="#A5F3FC" fontSize="10" textAnchor="middle">(抬升人體重心，降低足底正壓力)</text>
      </g>

      {/* Vector 3: Ground Friction (Drastically Reduced) */}
      <g>
        <line x1="360" y1="390" x2="310" y2="390" stroke="#10B981" strokeWidth="4" />
        <polygon points="310,385 295,390 310,395" fill="#10B981" />
        <rect x="170" y="395" width="170" height="38" rx="4" fill="#064E3B" stroke="#10B981" strokeWidth="1" />
        <text x="255" y="411" fill="#6EE7B7" fontSize="11" fontWeight="bold" textAnchor="middle">3. 足底摩擦力趨近於零</text>
        <text x="255" y="425" fill="#A7F3D0" fontSize="9" textAnchor="middle">青苔 + 浮力 = 極易滑倒翻滾</text>
      </g>

      {/* Warning Box Top Right */}
      <rect x="520" y="20" width="260" height="90" rx="8" fill="#18181B" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="540" y="44" fill="#F59E0B" fontSize="13" fontWeight="bold">⚠️ 溪水不是踩過去就好</text>
      <text x="540" y="65" fill="#E4E4E7" fontSize="11">• 水深及膝＋急流 = 具推倒成人水壓</text>
      <text x="540" y="83" fill="#E4E4E7" fontSize="11">• 重裝未解扣 = 落水即成水阻鉛塊</text>
      <text x="540" y="100" fill="#10B981" fontSize="11" fontWeight="bold">✓ 解決對策：解開扣件或主動人包分離</text>
    </svg>
  );
};
