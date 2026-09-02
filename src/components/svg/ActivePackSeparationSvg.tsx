import React, { useState } from 'react';

interface SvgProps {
  className?: string;
  activeStage?: number;
  onStageSelect?: (stage: number) => void;
}

export const ActivePackSeparationSvg: React.FC<SvgProps> = ({
  className = 'w-full h-auto',
  activeStage: propStage,
  onStageSelect
}) => {
  const [internalStage, setInternalStage] = useState<number>(1);
  const currentStage = propStage !== undefined ? propStage : internalStage;

  const handleSetStage = (s: number) => {
    setInternalStage(s);
    if (onStageSelect) {
      onStageSelect(s);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* 5-Stage Interactive Selector Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-slate-900/90 border border-emerald-500/30 rounded-xl">
        <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 pl-1">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          主動式人包分離 5 畫面圖解：
        </div>
        <div className="flex flex-wrap gap-1.5">
          {[
            { s: 1, name: '1.出發岸裝備繫繩' },
            { s: 2, name: '2.水流推動+繩索導引' },
            { s: 3, name: '3.裝備抵對岸安全區' },
            { s: 4, name: '4.人員空身/低負重渡溪' },
            { s: 5, name: '5.對岸會合重新整裝' },
          ].map((item) => (
            <button
              key={item.s}
              type="button"
              onClick={() => handleSetStage(item.s)}
              className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                currentStage === item.s
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50 scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main SVG Visualization */}
      <svg
        viewBox="0 0 900 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="主動式人包分離｜先運裝備，再渡人"
      >
        <defs>
          <linearGradient id="riverWater" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0369A1" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#075985" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="bankGradLeft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#142016" />
            <stop offset="100%" stopColor="#1E2D20" />
          </linearGradient>
          <linearGradient id="bankGradRight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#1E2D20" />
            <stop offset="100%" stopColor="#142016" />
          </linearGradient>
        </defs>

        {/* Outer Background */}
        <rect width="900" height="500" fill="#080D11" rx="14" stroke="#1E293B" strokeWidth="2" />

        {/* River Channel */}
        <rect x="200" y="0" width="500" height="500" fill="url(#riverWater)" />

        {/* River Flow Direction Waves and Vectors */}
        <g stroke="#38BDF8" opacity="0.6" strokeWidth="2">
          {/* Main Upstream Marker */}
          <rect x="360" y="10" width="180" height="28" rx="6" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.2" />
          <text x="450" y="29" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
            ▲ 上游水流 (CURRENT FLOW)
          </text>

          {/* Current arrows */}
          <line x1="300" y1="60" x2="300" y2="130" strokeDasharray="6 4" strokeWidth="2.5" />
          <polygon points="295,130 305,130 300,142" fill="#38BDF8" />

          <line x1="450" y1="60" x2="450" y2="160" strokeDasharray="6 4" strokeWidth="3" />
          <polygon points="444,160 456,160 450,174" fill="#38BDF8" />

          <line x1="600" y1="60" x2="600" y2="130" strokeDasharray="6 4" strokeWidth="2.5" />
          <polygon points="595,130 605,130 600,142" fill="#38BDF8" />

          {/* Downstream Marker */}
          <rect x="360" y="462" width="180" height="28" rx="6" fill="#0F172A" stroke="#EF4444" strokeWidth="1.2" />
          <text x="450" y="481" fill="#EF4444" fontSize="13" fontWeight="bold" textAnchor="middle">
            ▼ 下游方向 (DOWNSTREAM)
          </text>
        </g>

        {/* Origin Bank (Left) */}
        <rect x="0" y="0" width="200" height="500" fill="url(#bankGradLeft)" stroke="#2D422F" strokeWidth="2" />
        <text x="100" y="32" fill="#4ADE80" fontSize="15" fontWeight="bold" textAnchor="middle">
          出發岸 (ORIGIN BANK)
        </text>

        {/* Far Target Bank (Right) */}
        <rect x="700" y="0" width="200" height="500" fill="url(#bankGradRight)" stroke="#2D422F" strokeWidth="2" />
        <text x="800" y="32" fill="#4ADE80" fontSize="15" fontWeight="bold" textAnchor="middle">
          對岸安全區 (FAR BANK)
        </text>

        {/* Anchor Tree on Origin Bank */}
        <circle cx="90" cy="85" r="26" fill="#166534" stroke="#4ADE80" strokeWidth="2" />
        <text x="90" y="90" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
          出發主錨點
        </text>

        {/* Far Bank Landing Point */}
        <circle cx="810" cy="270" r="28" fill="#166534" stroke="#4ADE80" strokeWidth="2" />
        <text x="810" y="265" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
          對岸接應站
        </text>
        <text x="810" y="285" fill="#A7F3D0" fontSize="10" textAnchor="middle">
          (高位乾燥安全區)
        </text>

        {/* STAGE 1 RENDERING: 出發岸裝備繫繩 */}
        {currentStage === 1 && (
          <g>
            {/* Operator on Origin Bank */}
            <circle cx="150" cy="220" r="18" fill="#FBBF24" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="150" y1="238" x2="150" y2="310" stroke="#FBBF24" strokeWidth="8" strokeLinecap="round" />
            <text x="150" y="195" fill="#FDE68A" fontSize="12" fontWeight="bold" textAnchor="middle">
              操作人員
            </text>

            {/* Heavy Backpack ready at water edge */}
            <rect x="180" y="240" width="48" height="70" rx="8" fill="#E11D48" stroke="#FFE4E6" strokeWidth="2.5" />
            <text x="204" y="275" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              背包/裝備
            </text>
            <text x="204" y="295" fill="#FECDD3" fontSize="9" textAnchor="middle">
              (防水密封)
            </text>

            {/* Rope Connection */}
            <line x1="90" y1="85" x2="150" y2="220" stroke="#F59E0B" strokeWidth="4" />
            <line x1="150" y1="220" x2="180" y2="250" stroke="#F59E0B" strokeWidth="5" />
            <circle cx="180" cy="250" r="6" fill="#F43F5E" />

            {/* Water Entry Vector */}
            <line x1="230" y1="275" x2="310" y2="290" stroke="#38BDF8" strokeWidth="3.5" strokeDasharray="6 4" />
            <polygon points="305,284 320,290 305,296" fill="#38BDF8" />
            <text x="280" y="325" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">
              水流進入方向 →
            </text>

            {/* Stage Banner */}
            <rect x="230" y="380" width="440" height="70" rx="8" fill="#111827" stroke="#FBBF24" strokeWidth="1.5" />
            <text x="450" y="405" fill="#FBBF24" fontSize="14" fontWeight="bold" textAnchor="middle">
              【第一畫面】出發岸準備｜繩索連接背包
            </text>
            <text x="450" y="425" fill="#E2E8F0" fontSize="11" textAnchor="middle">
              • 人員位在出發岸安全線內，背包入水前確實完成防水袋密封
            </text>
            <text x="450" y="440" fill="#94A3B8" fontSize="10" textAnchor="middle">
              • 繩索以主鎖牢固扣住背包主提把，出發人員手握制動端準備放繩
            </text>
          </g>
        )}

        {/* STAGE 2 RENDERING: 水流提供動力，繩索負責控制 */}
        {currentStage === 2 && (
          <g>
            {/* Operator on Origin Bank smoothly paying out rope */}
            <circle cx="150" cy="200" r="18" fill="#FBBF24" stroke="#FFFFFF" strokeWidth="2" />
            <line x1="150" y1="218" x2="150" y2="290" stroke="#FBBF24" strokeWidth="8" strokeLinecap="round" />
            <text x="150" y="175" fill="#FDE68A" fontSize="12" fontWeight="bold" textAnchor="middle">
              出發岸操作員 (勻速放繩)
            </text>

            {/* Rope Arching across River under Tension */}
            <path d="M150 200 Q 300 210 470 270" stroke="#F59E0B" strokeWidth="5" fill="none" />

            {/* Floating Pack in Mid Stream */}
            <rect x="470" y="240" width="50" height="70" rx="8" fill="#E11D48" stroke="#FFE4E6" strokeWidth="2.5" />
            <circle cx="470" cy="250" r="6" fill="#F43F5E" />
            <text x="495" y="275" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              背包順流漂渡
            </text>
            <text x="495" y="295" fill="#FECDD3" fontSize="9" textAnchor="middle">
              受控移動中
            </text>

            {/* Dynamics Vectors */}
            {/* Force 1: Current Propulsion (Downstream) */}
            <line x1="495" y1="315" x2="495" y2="375" stroke="#38BDF8" strokeWidth="4" />
            <polygon points="489,375 501,375 495,390" fill="#38BDF8" />
            <text x="495" y="405" fill="#38BDF8" fontSize="11" fontWeight="bold" textAnchor="middle">
              1. 水流提供前進動力 ↓
            </text>

            {/* Force 2: Rope Tension (Pendulum Inward) */}
            <line x1="470" y1="240" x2="330" y2="200" stroke="#F59E0B" strokeWidth="4" />
            <polygon points="335,193 320,197 332,207" fill="#F59E0B" />
            <text x="360" y="185" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">
              2. 繩索負責軌跡控制 ⤾
            </text>

            {/* Far Bank Receiver Ready */}
            <circle cx="750" cy="270" r="16" fill="#10B981" />
            <text x="750" y="300" fill="#A7F3D0" fontSize="11" fontWeight="bold" textAnchor="middle">
              對岸接應先鋒
            </text>

            {/* Stage Banner */}
            <rect x="230" y="420" width="440" height="50" rx="8" fill="#111827" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="450" y="440" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle">
              【第二畫面】水流提供動力 ＋ 繩索負責控制
            </text>
            <text x="450" y="458" fill="#E2E8F0" fontSize="10" textAnchor="middle">
              背包如風箏般順水流推進並受繩索張力導引，平穩擺向對岸接應區
            </text>
          </g>
        )}

        {/* STAGE 3 RENDERING: 背包抵達對岸安全區 */}
        {currentStage === 3 && (
          <g>
            {/* Operator on Origin Bank finished pack ferry */}
            <circle cx="150" cy="200" r="18" fill="#FBBF24" />
            <text x="150" y="235" fill="#FDE68A" fontSize="11" fontWeight="bold" textAnchor="middle">
              原岸人員 (空身)
            </text>

            {/* Pack safely landed on Far Bank */}
            <rect x="730" y="235" width="48" height="68" rx="8" fill="#047857" stroke="#A7F3D0" strokeWidth="2.5" />
            <text x="754" y="268" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">
              裝備已抵達
            </text>
            <text x="754" y="288" fill="#D1FAE5" fontSize="9" textAnchor="middle">
              乾燥安全區
            </text>

            {/* Far bank lead crosser retrieving pack */}
            <circle cx="810" cy="220" r="16" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
            <text x="810" y="195" fill="#A7F3D0" fontSize="12" fontWeight="bold" textAnchor="middle">
              對岸先鋒 (取包)
            </text>

            {/* Big Green Badge */}
            <rect x="330" y="180" width="240" height="55" rx="10" fill="#064E3B" stroke="#10B981" strokeWidth="2" />
            <text x="450" y="206" fill="#6EE7B7" fontSize="15" fontWeight="bold" textAnchor="middle">
              ✓ 先運裝備完成！
            </text>
            <text x="450" y="224" fill="#A7F3D0" fontSize="11" textAnchor="middle">
              人與重裝風險已成功完全拆分
            </text>

            {/* Stage Banner */}
            <rect x="230" y="380" width="440" height="70" rx="8" fill="#111827" stroke="#10B981" strokeWidth="1.5" />
            <text x="450" y="405" fill="#10B981" fontSize="14" fontWeight="bold" textAnchor="middle">
              【第三畫面】背包抵達對岸安全區
            </text>
            <text x="450" y="425" fill="#E2E8F0" fontSize="11" textAnchor="middle">
              • 對岸接應人員將背包拉上高處乾燥安全區，確認裝備完好
            </text>
            <text x="450" y="440" fill="#94A3B8" fontSize="10" textAnchor="middle">
              • 出發岸全體隊員此時處於零負重/極輕負重狀態，準備涉水
            </text>
          </g>
        )}

        {/* STAGE 4 RENDERING: 人員徒手／低負重渡溪 */}
        {currentStage === 4 && (
          <g>
            {/* Hiker Crossing River unburdened (No heavy pack) */}
            <g>
              <circle cx="450" cy="220" r="20" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="450" y1="240" x2="450" y2="330" stroke="#38BDF8" strokeWidth="9" strokeLinecap="round" />
              {/* Triangular Dual Poles in Stream */}
              <line x1="450" y1="270" x2="400" y2="350" stroke="#E2E8F0" strokeWidth="5" />
              <line x1="450" y1="270" x2="500" y2="350" stroke="#E2E8F0" strokeWidth="5" />
              <circle cx="400" cy="350" r="6" fill="#38BDF8" />
              <circle cx="500" cy="350" r="6" fill="#38BDF8" />

              <text x="450" y="195" fill="#BAE6FD" fontSize="13" fontWeight="bold" textAnchor="middle">
                渡溪隊員 (徒手/低負重)
              </text>
            </g>

            {/* Optional Belay line from Far Bank to Hiker */}
            <path d="M450 240 Q 600 220 750 200" stroke="#F59E0B" strokeWidth="3.5" strokeDasharray="6 4" fill="none" />
            <text x="600" y="205" fill="#FDE68A" fontSize="10" fontWeight="bold" textAnchor="middle">
              繩索安全確保線
            </text>

            {/* Movement Vector */}
            <line x1="450" y1="280" x2="680" y2="280" stroke="#10B981" strokeWidth="4" />
            <polygon points="675,274 695,280 675,286" fill="#10B981" />
            <text x="570" y="300" fill="#6EE7B7" fontSize="11" fontWeight="bold" textAnchor="middle">
              再渡人（重心極度穩固）→
            </text>

            {/* Stored Packs on Far Bank */}
            <rect x="740" y="240" width="40" height="55" rx="6" fill="#047857" stroke="#A7F3D0" strokeWidth="2" />
            <text x="760" y="272" fill="#FFFFFF" fontSize="9" textAnchor="middle">已在對岸</text>

            {/* Stage Banner */}
            <rect x="230" y="380" width="440" height="70" rx="8" fill="#111827" stroke="#38BDF8" strokeWidth="1.5" />
            <text x="450" y="405" fill="#38BDF8" fontSize="14" fontWeight="bold" textAnchor="middle">
              【第四畫面】人員再行渡溪（再渡人）
            </text>
            <text x="450" y="425" fill="#E2E8F0" fontSize="11" textAnchor="middle">
              • 無大背包浮力與水阻干擾，人員足底抓地力百分之百發揮
            </text>
            <text x="450" y="440" fill="#94A3B8" fontSize="10" textAnchor="middle">
              • 雙手持杖三角支撐、面向上游微蹲，安全渡過急流
            </text>
          </g>
        )}

        {/* STAGE 5 RENDERING: 對岸會合，重新整裝 */}
        {currentStage === 5 && (
          <g>
            {/* All members gathered safely on Far Bank */}
            <g>
              <circle cx="750" cy="180" r="16" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="810" cy="180" r="16" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
              <circle cx="780" cy="250" r="16" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />

              {/* Repacked backpacks being put on */}
              <rect x="760" y="190" width="40" height="50" rx="6" fill="#1E40AF" stroke="#93C5FD" strokeWidth="2" />
              <text x="780" y="220" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle">
                整裝完成
              </text>
            </g>

            {/* Celebratory Safety Mission Complete Card */}
            <rect x="260" y="170" width="380" height="110" rx="12" fill="#064E3B" stroke="#10B981" strokeWidth="2.5" />
            <text x="450" y="202" fill="#A7F3D0" fontSize="17" fontWeight="bold" textAnchor="middle">
              🎉 全員安全登陸・重新整裝
            </text>
            <text x="450" y="228" fill="#E2E8F0" fontSize="12" textAnchor="middle">
              1. 檢查內部裝備防水完整性
            </text>
            <text x="450" y="248" fill="#E2E8F0" fontSize="12" textAnchor="middle">
              2. 穿好防寒風雨衣，補充高熱量行動糧
            </text>
            <text x="450" y="268" fill="#FEF08A" fontSize="12" fontWeight="bold" textAnchor="middle">
              3. 清點全隊人數與器材，繼續登山行程！
            </text>

            {/* Stage Banner */}
            <rect x="230" y="380" width="440" height="70" rx="8" fill="#111827" stroke="#10B981" strokeWidth="1.5" />
            <text x="450" y="405" fill="#10B981" fontSize="14" fontWeight="bold" textAnchor="middle">
              【第五畫面】重新整裝，繼續登山
            </text>
            <text x="450" y="425" fill="#E2E8F0" fontSize="11" textAnchor="middle">
              • 成功實現「先處理裝備，再處理人」的最高過溪安全準則
            </text>
            <text x="450" y="440" fill="#94A3B8" fontSize="10" textAnchor="middle">
              • 零傷亡、零裝備流失，確保隊伍後續高山縱走戰力完整
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};
