import React from 'react';

interface SvgProps {
  className?: string;
}

export const SoloCrossingStanceSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      role="img"
      aria-label="基本徒手渡溪身體姿態與三角支撐圖"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="800" height="450" fill="#0A0F14" rx="12" />

      {/* Water Background & Flow Vector */}
      <rect x="0" y="0" width="800" height="450" fill="#0C4A6E" fillOpacity="0.25" />

      {/* Water Current Flow Vectors (Left to Right = Upstream to Downstream) */}
      <g stroke="#38BDF8" strokeWidth="2.5" opacity="0.6">
        <line x1="100" y1="60" x2="300" y2="60" strokeDasharray="8 4" />
        <polygon points="300,55 315,60 300,65" fill="#38BDF8" />
        <line x1="500" y1="60" x2="700" y2="60" strokeDasharray="8 4" />
        <polygon points="700,55 715,60 700,65" fill="#38BDF8" />
        <text x="400" y="45" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
          水流方向 → (FLOW DIRECTION)
        </text>
      </g>

      {/* River Bed Rocks */}
      <circle cx="280" cy="380" r="18" fill="#475569" />
      <circle cx="390" cy="400" r="24" fill="#334155" />
      <circle cx="510" cy="385" r="20" fill="#475569" />

      {/* Triangle Ground Stance (Bird's Eye / 3/4 Projection) */}
      <polygon points="320,360 460,360 390,260" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="2" strokeDasharray="6 4" />
      <text x="390" y="325" fill="#6EE7B7" fontSize="12" fontWeight="bold" textAnchor="middle">穩固三角支撐區</text>

      {/* Human Stick Figure Facing Upstream 45 Deg */}
      {/* Head */}
      <circle cx="390" cy="140" r="22" fill="#FBBF24" />
      {/* Body micro-squat / low center of gravity */}
      <line x1="390" y1="162" x2="390" y2="250" stroke="#FBBF24" strokeWidth="10" strokeLinecap="round" />

      {/* Left & Right Legs (Wide Base) */}
      <line x1="390" y1="250" x2="340" y2="365" stroke="#FBBF24" strokeWidth="9" strokeLinecap="round" />
      <line x1="390" y1="250" x2="440" y2="365" stroke="#FBBF24" strokeWidth="9" strokeLinecap="round" />
      {/* Foot Anchors */}
      <ellipse cx="340" cy="365" rx="14" ry="7" fill="#10B981" stroke="#E2E8F0" strokeWidth="2" />
      <ellipse cx="440" cy="365" rx="14" ry="7" fill="#10B981" stroke="#E2E8F0" strokeWidth="2" />

      {/* Dual Trekking Poles upstream triangular apex */}
      <line x1="390" y1="190" x2="390" y2="260" stroke="#94A3B8" strokeWidth="6" />
      <circle cx="390" cy="260" r="8" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />

      {/* Unbuckled Backpack on Back */}
      <rect x="405" y="150" width="40" height="70" rx="6" fill="#3B82F6" stroke="#93C5FD" strokeWidth="1.5" />
      <text x="425" y="190" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">解開扣件</text>

      {/* Key Stance Annotations */}
      <g>
        {/* Annotation 1: Low Center of Gravity */}
        <rect x="40" y="130" width="200" height="50" rx="6" fill="#1E293B" stroke="#FBBF24" strokeWidth="1.5" />
        <text x="140" y="152" fill="#FDE68A" fontSize="12" fontWeight="bold" textAnchor="middle">1. 低重心微蹲</text>
        <text x="140" y="168" fill="#E2E8F0" fontSize="10" textAnchor="middle">膝蓋微彎，身體面向上游45°</text>

        {/* Annotation 2: Three-Point Support */}
        <rect x="40" y="240" width="200" height="50" rx="6" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
        <text x="140" y="262" fill="#7DD3FC" fontSize="12" fontWeight="bold" textAnchor="middle">2. 三點支撐、一點移動</text>
        <text x="140" y="278" fill="#E2E8F0" fontSize="10" textAnchor="middle">雙杖置於上游，小步擦地側移</text>

        {/* Annotation 3: Unbuckled Pack */}
        <rect x="560" y="160" width="200" height="50" rx="6" fill="#1E293B" stroke="#10B981" strokeWidth="1.5" />
        <text x="660" y="182" fill="#6EE7B7" fontSize="12" fontWeight="bold" textAnchor="middle">3. 解開胸扣與腰扣</text>
        <text x="660" y="198" fill="#E2E8F0" fontSize="10" textAnchor="middle">萬一踩空可 1 秒滑脫背包脫困</text>

        {/* Annotation 4: Prohibited Jumping */}
        <rect x="560" y="270" width="200" height="50" rx="6" fill="#1E293B" stroke="#EF4444" strokeWidth="1.5" />
        <text x="660" y="292" fill="#FCA5A5" fontSize="12" fontWeight="bold" textAnchor="middle">⛔ 嚴禁跳躍踩石</text>
        <text x="660" y="308" fill="#FECDD3" fontSize="10" textAnchor="middle">青苔石滑且易滾動，嚴禁跳石</text>
      </g>
    </svg>
  );
};
