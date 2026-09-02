import React from 'react';

interface SvgProps {
  className?: string;
}

export const PendulumLeadSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="鐘擺式先鋒渡溪作業圖"
    >
      <rect width="800" height="450" fill="#090E13" rx="12" />

      {/* River Flow Background */}
      <rect x="160" y="0" width="480" height="450" fill="#0369A1" fillOpacity="0.25" />
      <text x="400" y="25" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
        ▲ 上游 (UPSTREAM)
      </text>
      <text x="400" y="440" fill="#EF4444" fontSize="13" fontWeight="bold" textAnchor="middle">
        ▼ 下游 (DOWNSTREAM)
      </text>

      {/* Origin Bank (Left) */}
      <rect x="0" y="0" width="160" height="450" fill="#1B261D" />
      <text x="80" y="30" fill="#10B981" fontSize="13" fontWeight="bold" textAnchor="middle">出發岸</text>

      {/* Upstream Anchor */}
      <circle cx="70" cy="70" r="20" fill="#15803D" stroke="#4ADE80" strokeWidth="2" />
      <text x="70" y="75" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">天然主錨點</text>

      {/* Belayer */}
      <circle cx="110" cy="160" r="14" fill="#FBBF24" />
      <text x="110" y="185" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">確保員</text>
      <text x="110" y="200" fill="#94A3B8" fontSize="9" textAnchor="middle">勻速放繩 (Pay out)</text>

      {/* Far Bank (Right) Target */}
      <rect x="640" y="0" width="160" height="450" fill="#1B261D" />
      <text x="720" y="30" fill="#10B981" fontSize="13" fontWeight="bold" textAnchor="middle">對岸安全區</text>
      <circle cx="720" cy="240" r="20" fill="#047857" stroke="#10B981" strokeWidth="2" />
      <text x="720" y="245" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle">預定登陸點</text>

      {/* Tension Rope from Belayer to Lead */}
      <path d="M70 70 L110 160 Q 280 170 480 230" stroke="#F59E0B" strokeWidth="4.5" fill="none" />

      {/* Lead Crosser Figure (No heavy pack, only chest knife & harness) */}
      <circle cx="480" cy="230" r="17" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="480" cy="230" r="6" fill="#F43F5E" />
      <text x="480" y="205" fill="#BAE6FD" fontSize="12" fontWeight="bold" textAnchor="middle">
        先鋒隊員 (空身+割繩刀)
      </text>

      {/* Crossing Trajectory */}
      <line x1="480" y1="230" x2="640" y2="240" stroke="#10B981" strokeWidth="3.5" strokeDasharray="6 4" />
      <polygon points="635,235 650,240 635,245" fill="#10B981" />
      <text x="560" y="225" fill="#6EE7B7" fontSize="11" fontWeight="bold" textAnchor="middle">
        渡溪前進方向
      </text>

      {/* Safe Retreat Arc */}
      <path d="M480 230 Q 300 320 140 330" stroke="#EF4444" strokeWidth="2.5" strokeDasharray="5 5" fill="none" />
      <polygon points="148,322 135,330 148,338" fill="#EF4444" />
      <text x="310" y="320" fill="#FCA5A5" fontSize="10" fontWeight="bold" textAnchor="middle">
        萬一失足：停止放繩順流安全退回 ⤾
      </text>

      {/* Lead Rules Box */}
      <rect x="200" y="345" width="400" height="85" rx="8" fill="#111827" stroke="#38BDF8" strokeWidth="1.5" />
      <text x="400" y="368" fill="#38BDF8" fontSize="12" fontWeight="bold" textAnchor="middle">
        先鋒渡溪 4 大關鍵要領
      </text>
      <text x="400" y="388" fill="#E2E8F0" fontSize="10" textAnchor="middle">
        1. 實施人包分離，先鋒絕不背負未解扣重裝入水
      </text>
      <text x="400" y="403" fill="#E2E8F0" fontSize="10" textAnchor="middle">
        2. 佩戴急流割繩刀於胸前，遇纏繞時 1 秒果斷割斷
      </text>
      <text x="400" y="418" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">
        3. 登上對岸後迅速建立副錨點並發出「固定！」口令
      </text>
    </svg>
  );
};
