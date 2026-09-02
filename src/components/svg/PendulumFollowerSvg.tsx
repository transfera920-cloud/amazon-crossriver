import React from 'react';

interface SvgProps {
  className?: string;
}

export const PendulumFollowerSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="鐘擺式後繼隊員渡溪與兩岸協同交接圖"
    >
      <rect width="800" height="450" fill="#090E13" rx="12" />

      {/* River Water */}
      <rect x="160" y="0" width="480" height="450" fill="#0369A1" fillOpacity="0.25" />
      <text x="400" y="25" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
        ▲ 上游 (UPSTREAM)
      </text>

      {/* Origin Bank (Left) */}
      <rect x="0" y="0" width="160" height="450" fill="#1B261D" />
      <text x="80" y="30" fill="#10B981" fontSize="13" fontWeight="bold" textAnchor="middle">出發岸</text>

      {/* Queue of waiting members */}
      <circle cx="60" cy="180" r="13" fill="#64748B" />
      <circle cx="60" cy="220" r="13" fill="#64748B" />
      <text x="60" y="250" fill="#94A3B8" fontSize="10" textAnchor="middle">等候隊員</text>
      <text x="60" y="265" fill="#CBD5E1" fontSize="9" textAnchor="middle">(一人在水原則)</text>

      {/* Origin Operator */}
      <circle cx="110" cy="120" r="14" fill="#FBBF24" />
      <text x="110" y="145" fill="#FDE68A" fontSize="10" fontWeight="bold" textAnchor="middle">出發放繩員</text>

      {/* Far Bank (Right) */}
      <rect x="640" y="0" width="160" height="450" fill="#1B261D" />
      <text x="720" y="30" fill="#10B981" fontSize="13" fontWeight="bold" textAnchor="middle">對岸安全區</text>

      {/* Lead crosser receiving on far bank */}
      <circle cx="710" cy="160" r="16" fill="#10B981" />
      <text x="710" y="190" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">先鋒接應員</text>
      <text x="710" y="205" fill="#86EFAC" fontSize="9" textAnchor="middle">收繩輔助 (Take in)</text>

      {/* Main Traverse Guide Line Across Banks */}
      <line x1="110" y1="120" x2="710" y2="160" stroke="#F59E0B" strokeWidth="3" strokeDasharray="6 4" />

      {/* Follower Member in River, guided by rope */}
      <circle cx="380" cy="210" r="16" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="380" cy="210" r="5" fill="#F43F5E" />
      <text x="380" y="185" fill="#BAE6FD" fontSize="12" fontWeight="bold" textAnchor="middle">
        後繼隊員 (受控橫渡)
      </text>

      {/* Pulling force from Far Bank */}
      <line x1="380" y1="210" x2="690" y2="170" stroke="#10B981" strokeWidth="4" />
      <polygon points="685,165 700,170 685,175" fill="#10B981" />
      <text x="540" y="180" fill="#6EE7B7" fontSize="11" fontWeight="bold" textAnchor="middle">
        對岸拉力輔助 →
      </text>

      {/* Release line from Origin Bank */}
      <line x1="110" y1="120" x2="380" y2="210" stroke="#FBBF24" strokeWidth="4" />
      <text x="230" y="160" fill="#FDE68A" fontSize="11" textAnchor="middle">
        出發岸緩速放繩
      </text>

      {/* Operational Box */}
      <rect x="180" y="345" width="440" height="85" rx="8" fill="#111827" stroke="#374151" strokeWidth="1.5" />
      <text x="400" y="368" fill="#FBBF24" fontSize="12" fontWeight="bold" textAnchor="middle">
        後繼者安全管理紀律
      </text>
      <text x="400" y="388" fill="#E2E8F0" fontSize="10" textAnchor="middle">
        • 嚴格遵守「水中一次僅限一人」，上一人完全登岸解扣後下一人始出發
      </text>
      <text x="400" y="403" fill="#E2E8F0" fontSize="10" textAnchor="middle">
        • 出發岸與對岸隨時保持口令呼應（「放！」「收！」「好！」）
      </text>
      <text x="400" y="418" fill="#A7F3D0" fontSize="10" textAnchor="middle">
        • 繩索在出發岸整齊理順，防止出水打結卡死
      </text>
    </svg>
  );
};
