import React from 'react';

interface SvgProps {
  className?: string;
}

export const PendulumSweepSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="收尾者渡溪與對岸可回收繩索系統圖"
    >
      <rect width="800" height="450" fill="#090E13" rx="12" />

      {/* River Water */}
      <rect x="160" y="0" width="480" height="450" fill="#0369A1" fillOpacity="0.25" />
      <text x="400" y="25" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
        ▲ 上游 (UPSTREAM)
      </text>

      {/* Origin Bank (Left) - Empty, only tree anchor remaining */}
      <rect x="0" y="0" width="160" height="450" fill="#1B261D" />
      <text x="80" y="30" fill="#94A3B8" fontSize="13" fontWeight="bold" textAnchor="middle">出發岸 (已無人)</text>

      {/* Anchor Tree with Pull-through Sling / Ring */}
      <circle cx="70" cy="80" r="20" fill="#15803D" stroke="#4ADE80" strokeWidth="2" />
      <circle cx="70" cy="80" r="6" fill="#FBBF24" stroke="#FFFFFF" strokeWidth="1.5" />
      <text x="70" y="115" fill="#86EFAC" fontSize="10" textAnchor="middle">對折穿環 (Pull-through)</text>

      {/* Far Bank (Right) - All team gathered */}
      <rect x="640" y="0" width="160" height="450" fill="#1B261D" />
      <text x="720" y="30" fill="#10B981" fontSize="13" fontWeight="bold" textAnchor="middle">對岸 (全員整裝)</text>

      {/* Team on Far Bank pulling */}
      <circle cx="710" cy="140" r="14" fill="#10B981" />
      <circle cx="735" cy="140" r="14" fill="#10B981" />
      <text x="720" y="170" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">全員主動確保</text>

      {/* Doubled Retrievable Rope (對折繩) */}
      <path d="M720 140 Q 400 120 70 80" stroke="#F59E0B" strokeWidth="3" fill="none" />
      <path d="M70 80 Q 250 200 420 230" stroke="#F59E0B" strokeWidth="3" fill="none" />

      {/* Sweeper (Last member) crossing */}
      <circle cx="420" cy="230" r="17" fill="#F43F5E" stroke="#FFFFFF" strokeWidth="2" />
      <text x="420" y="205" fill="#FECDD3" fontSize="12" fontWeight="bold" textAnchor="middle">
        收尾者 (獨立自救強)
      </text>

      {/* Pulling Direction from Far Bank */}
      <line x1="420" y1="230" x2="700" y2="150" stroke="#10B981" strokeWidth="4" />
      <polygon points="695,145 710,150 695,155" fill="#10B981" />
      <text x="560" y="180" fill="#6EE7B7" fontSize="11" fontWeight="bold" textAnchor="middle">
        對岸全力確保拉回 →
      </text>

      {/* Rope Pull-through After Arrival arrow */}
      <g>
        <path d="M710 180 Q 750 260 710 320" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="4 4" fill="none" />
        <polygon points="705,315 710,325 715,315" fill="#06B6D4" />
        <text x="720" y="340" fill="#67E8F9" fontSize="10" textAnchor="middle">
          登岸後抽拉單端抽回主繩
        </text>
      </g>

      {/* Sweeper Guidelines Box */}
      <rect x="180" y="345" width="440" height="85" rx="8" fill="#111827" stroke="#F43F5E" strokeWidth="1.5" />
      <text x="400" y="368" fill="#FCA5A5" fontSize="12" fontWeight="bold" textAnchor="middle">
        收尾者關鍵任務與安全紀律
      </text>
      <text x="400" y="388" fill="#E2E8F0" fontSize="10" textAnchor="middle">
        1. 徹底巡查出發岸，確認無任何登山杖、水壺或隊員遺留
      </text>
      <text x="400" y="403" fill="#E2E8F0" fontSize="10" textAnchor="middle">
        2. 繩索架設為對岸可抽拉回收結構（對折繩/穿環）
      </text>
      <text x="400" y="418" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">
        3. 收尾者抵岸後，全員共同將繩索完整拉回收卷
      </text>
    </svg>
  );
};
