import React from 'react';

interface SvgProps {
  className?: string;
}

export const TeamRolesSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      role="img"
      aria-label="登山隊伍過溪分工與通訊網絡圖"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="800" height="450" fill="#0A0F14" rx="12" />

      {/* River Flow background */}
      <rect x="220" y="0" width="360" height="450" fill="#0369A1" fillOpacity="0.2" />
      <text x="400" y="25" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
        ▲ 水流方向 (RIVER CURRENT)
      </text>

      {/* Role 1: Leader (Top Left on Origin Bank) */}
      <g>
        <rect x="20" y="50" width="180" height="90" rx="8" fill="#1E293B" stroke="#FBBF24" strokeWidth="2" />
        <circle cx="50" cy="85" r="16" fill="#FBBF24" />
        <text x="110" y="75" fill="#FDE68A" fontSize="13" fontWeight="bold">① 領隊 (總指揮)</text>
        <text x="110" y="95" fill="#E2E8F0" fontSize="10">• 終極判斷與決策</text>
        <text x="110" y="110" fill="#E2E8F0" fontSize="10">• 監控水位/下達撤退</text>
      </g>

      {/* Role 2: Rope Operator / Belayer (Mid Left on Origin Bank) */}
      <g>
        <rect x="20" y="160" width="180" height="90" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
        <circle cx="50" cy="195" r="16" fill="#38BDF8" />
        <text x="110" y="185" fill="#BAE6FD" fontSize="13" fontWeight="bold">② 確保/操作員</text>
        <text x="110" y="205" fill="#E2E8F0" fontSize="10">• 掌控出發岸錨點</text>
        <text x="110" y="220" fill="#E2E8F0" fontSize="10">• 精準放繩與張力制動</text>
      </g>

      {/* Role 3: Sweeper (Bottom Left on Origin Bank) */}
      <g>
        <rect x="20" y="270" width="180" height="90" rx="8" fill="#1E293B" stroke="#F43F5E" strokeWidth="2" />
        <circle cx="50" cy="305" r="16" fill="#F43F5E" />
        <text x="110" y="295" fill="#FECDD3" fontSize="13" fontWeight="bold">③ 收尾者 (壓陣)</text>
        <text x="110" y="315" fill="#E2E8F0" fontSize="10">• 裝備與人員清點</text>
        <text x="110" y="330" fill="#E2E8F0" fontSize="10">• 繩索可回收撤收</text>
      </g>

      {/* Role 4: Lead Crosser (In Stream / Crossing) */}
      <g>
        <rect x="290" y="180" width="220" height="90" rx="8" fill="#0C4A6E" stroke="#10B981" strokeWidth="2" />
        <circle cx="320" cy="225" r="18" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
        <text x="420" y="205" fill="#A7F3D0" fontSize="13" fontWeight="bold" textAnchor="middle">④ 先鋒 (開拓者)</text>
        <text x="420" y="225" fill="#E2E8F0" fontSize="10" textAnchor="middle">• 空身破水，探查水深石況</text>
        <text x="420" y="240" fill="#E2E8F0" fontSize="10" textAnchor="middle">• 配備割繩刀與確保系統</text>
      </g>

      {/* Role 5: Far Bank Receivers & Members (Right Bank) */}
      <g>
        <rect x="600" y="160" width="180" height="110" rx="8" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
        <circle cx="630" cy="205" r="16" fill="#10B981" />
        <circle cx="660" cy="205" r="16" fill="#10B981" />
        <text x="700" y="185" fill="#A7F3D0" fontSize="13" fontWeight="bold">⑤ 對岸接應/隊員</text>
        <text x="700" y="205" fill="#E2E8F0" fontSize="10">• 建立副錨點</text>
        <text x="700" y="220" fill="#E2E8F0" fontSize="10">• 接應裝備與隊友</text>
        <text x="700" y="235" fill="#E2E8F0" fontSize="10">• 登陸高台整裝</text>
      </g>

      {/* Communication Lines Dashed */}
      <path d="M190 95 Q 400 60 610 160" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <path d="M190 205 L 290 225" stroke="#38BDF8" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M510 225 L 600 215" stroke="#10B981" strokeWidth="2" strokeDasharray="4 4" />

      {/* Bottom Summary Band */}
      <rect x="100" y="380" width="600" height="50" rx="8" fill="#111827" stroke="#374151" strokeWidth="1.5" />
      <text x="400" y="402" fill="#FBBF24" fontSize="12" fontWeight="bold" textAnchor="middle">
        統一簡短通訊指令：
      </text>
      <text x="400" y="420" fill="#A7F3D0" fontSize="11" textAnchor="middle">
        「停」・「準備」・「放」・「收」・「固定」・「前進」・「撤退」・「停止渡溪」
      </text>
    </svg>
  );
};
