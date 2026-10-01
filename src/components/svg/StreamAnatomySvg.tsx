import React from 'react';

interface SvgProps {
  className?: string;
  showLabels?: boolean;
}

export const StreamAnatomySvg: React.FC<SvgProps> = ({ className = 'w-full h-auto', showLabels = true }) => {
  return (
    <svg
      role="img"
      aria-label="溪流結構全景圖"
      viewBox="0 0 800 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="bankGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A3828" />
          <stop offset="100%" stopColor="#182218" />
        </linearGradient>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E384D" />
          <stop offset="50%" stopColor="#0B4F6C" />
          <stop offset="100%" stopColor="#082A3A" />
        </linearGradient>
        <linearGradient id="deepGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#051C28" />
          <stop offset="100%" stopColor="#031018" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="#0C1217" rx="12" />

      {/* Banks Top/Bottom (Top = Upstream, Bottom = Downstream) */}
      {/* Left Bank: Origin Bank */}
      <path d="M0 0 L180 0 L150 450 L0 450 Z" fill="url(#bankGrad)" stroke="#3E543B" strokeWidth="2" />
      {/* Right Bank: Far Bank */}
      <path d="M620 0 L800 0 L800 450 L650 450 Z" fill="url(#bankGrad)" stroke="#3E543B" strokeWidth="2" />

      {/* Water River Channel */}
      <path d="M180 0 L620 0 L650 450 L150 450 Z" fill="url(#waterGrad)" />

      {/* Deep Central Channel */}
      <path d="M340 0 L460 0 L480 450 L320 450 Z" fill="url(#deepGrad)" opacity="0.75" />

      {/* Upstream / Downstream Labels and Arrows */}
      <g opacity="0.9">
        <rect x="330" y="16" width="140" height="32" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
        <text x="400" y="38" fill="#38BDF8" fontSize="15" fontWeight="bold" textAnchor="middle">▲ 上游 (UPSTREAM)</text>

        <rect x="330" y="402" width="140" height="32" rx="6" fill="#0F172A" stroke="#F43F5E" strokeWidth="1.5" />
        <text x="400" y="424" fill="#F43F5E" fontSize="15" fontWeight="bold" textAnchor="middle">▼ 下游 (DOWNSTREAM)</text>
      </g>

      {/* Water Current Flow Vectors */}
      <g stroke="#38BDF8" strokeWidth="2.5" opacity="0.8">
        {/* Current Vector Lines */}
        <line x1="250" y1="80" x2="250" y2="150" strokeDasharray="6 4" />
        <polygon points="245,150 255,150 250,165" fill="#38BDF8" />

        <line x1="400" y1="90" x2="400" y2="180" strokeWidth="4" />
        <polygon points="392,180 408,180 400,200" fill="#38BDF8" />

        <line x1="400" y1="230" x2="400" y2="330" strokeWidth="4" />
        <polygon points="392,330 408,330 400,350" fill="#38BDF8" />

        <line x1="550" y1="80" x2="550" y2="150" strokeDasharray="6 4" />
        <polygon points="545,150 555,150 550,165" fill="#38BDF8" />
      </g>

      {/* River Bed Rocks */}
      <ellipse cx="280" cy="220" rx="22" ry="14" fill="#475569" stroke="#64748B" strokeWidth="2" />
      <ellipse cx="520" cy="260" rx="28" ry="18" fill="#475569" stroke="#64748B" strokeWidth="2" />
      <ellipse cx="360" cy="290" rx="18" ry="12" fill="#334155" stroke="#475569" strokeWidth="1.5" />

      {/* Eddies behind rocks */}
      <path d="M 280 240 Q 260 270 285 285 Q 300 270 280 250" stroke="#7DD3FC" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
      <text x="280" y="305" fill="#7DD3FC" fontSize="11" textAnchor="middle">石後迴流區 (Eddy)</text>

      {/* Bank Labels */}
      <rect x="25" y="200" width="100" height="44" rx="6" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
      <text x="75" y="222" fill="#10B981" fontSize="14" fontWeight="bold" textAnchor="middle">出發岸</text>
      <text x="75" y="238" fill="#94A3B8" fontSize="10" textAnchor="middle">(安全集結區)</text>

      <rect x="675" y="200" width="100" height="44" rx="6" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
      <text x="725" y="222" fill="#10B981" fontSize="14" fontWeight="bold" textAnchor="middle">對岸</text>
      <text x="725" y="238" fill="#94A3B8" fontSize="10" textAnchor="middle">(目標安全區)</text>

      {/* Depth Indicators */}
      {showLabels && (
        <g>
          <rect x="200" y="360" width="110" height="24" rx="4" fill="#0B2336" stroke="#38BDF8" strokeWidth="1" />
          <text x="255" y="376" fill="#E2E8F0" fontSize="11" textAnchor="middle">岸邊淺灘 (水深&lt;30cm)</text>

          <rect x="345" y="360" width="110" height="24" rx="4" fill="#031018" stroke="#F43F5E" strokeWidth="1" />
          <text x="400" y="376" fill="#FDA4AF" fontSize="11" fontWeight="bold" textAnchor="middle">深槽主水道 (強壓)</text>

          <rect x="490" y="360" width="110" height="24" rx="4" fill="#0B2336" stroke="#38BDF8" strokeWidth="1" />
          <text x="545" y="376" fill="#E2E8F0" fontSize="11" textAnchor="middle">對岸緩流淺灘</text>
        </g>
      )}
    </svg>
  );
};
