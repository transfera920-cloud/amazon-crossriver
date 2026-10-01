import React from 'react';

interface SvgProps {
  className?: string;
}

export const DecisionFlowSvg: React.FC<SvgProps> = ({ className = 'w-full h-auto' }) => {
  return (
    <svg
      role="img"
      aria-label="如何選擇渡溪方法決策流程圖"
      viewBox="0 0 900 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="900" height="650" fill="#090E13" rx="14" stroke="#1E293B" strokeWidth="2" />

      {/* Header */}
      <rect x="250" y="20" width="400" height="42" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="1.5" />
      <text x="450" y="47" fill="#38BDF8" fontSize="16" fontWeight="bold" textAnchor="middle">
        登山隊渡溪決策全景流程圖
      </text>

      {/* STEP 1: 是否需要渡溪？ */}
      <g>
        <rect x="350" y="80" width="200" height="50" rx="8" fill="#1E293B" stroke="#FBBF24" strokeWidth="2" />
        <text x="450" y="105" fill="#FDE68A" fontSize="13" fontWeight="bold" textAnchor="middle">
          STEP 1｜是否需要渡溪？
        </text>
        <text x="450" y="122" fill="#E2E8F0" fontSize="10" textAnchor="middle">
          有無高繞/橋樑/繞行路線
        </text>

        {/* Branch: 不需要 */}
        <line x1="550" y1="105" x2="680" y2="105" stroke="#10B981" strokeWidth="2.5" />
        <polygon points="680,100 695,105 680,110" fill="#10B981" />
        <rect x="700" y="85" width="140" height="40" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
        <text x="770" y="110" fill="#A7F3D0" fontSize="12" fontWeight="bold" textAnchor="middle">
          不需要 → 繼續登山
        </text>

        {/* Arrow Down: 需要 */}
        <line x1="450" y1="130" x2="450" y2="170" stroke="#38BDF8" strokeWidth="3" />
        <polygon points="444,170 456,170 450,182" fill="#38BDF8" />
        <text x="475" y="160" fill="#38BDF8" fontSize="11" fontWeight="bold">需要</text>
      </g>

      {/* STEP 2: 水況是否穩定？ */}
      <g>
        <rect x="330" y="185" width="240" height="60" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
        <text x="450" y="210" fill="#BAE6FD" fontSize="13" fontWeight="bold" textAnchor="middle">
          STEP 2｜水況與環境是否穩定？
        </text>
        <text x="450" y="230" fill="#E2E8F0" fontSize="10" textAnchor="middle">
          水位無暴漲、無濁流滾石、下游無落差
        </text>

        {/* Branch: 否 -> STOP */}
        <line x1="570" y1="215" x2="680" y2="215" stroke="#EF4444" strokeWidth="3" />
        <polygon points="680,210 695,215 680,220" fill="#EF4444" />
        <rect x="700" y="195" width="160" height="42" rx="6" fill="#450A0A" stroke="#EF4444" strokeWidth="2" />
        <text x="780" y="220" fill="#FCA5A5" fontSize="12" fontWeight="bold" textAnchor="middle">
          否 🛑 立即停止/撤退紮營
        </text>

        {/* Arrow Down: 是 */}
        <line x1="450" y1="245" x2="450" y2="285" stroke="#38BDF8" strokeWidth="3" />
        <polygon points="444,285 456,285 450,297" fill="#38BDF8" />
        <text x="475" y="275" fill="#38BDF8" fontSize="11" fontWeight="bold">是</text>
      </g>

      {/* STEP 3: 低風險徒手可安全通過？ */}
      <g>
        <rect x="310" y="300" width="280" height="60" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
        <text x="450" y="325" fill="#BAE6FD" fontSize="13" fontWeight="bold" textAnchor="middle">
          STEP 3｜低風險徒手可安全通過？
        </text>
        <text x="450" y="345" fill="#E2E8F0" fontSize="10" textAnchor="middle">
          水深&lt;膝、水流緩、河床平坦穩固
        </text>

        {/* Branch: 是 -> 徒手/多人協同 */}
        <line x1="590" y1="330" x2="680" y2="330" stroke="#10B981" strokeWidth="2.5" />
        <polygon points="680,325 695,330 680,335" fill="#10B981" />
        <rect x="700" y="310" width="160" height="42" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
        <text x="780" y="335" fill="#A7F3D0" fontSize="12" fontWeight="bold" textAnchor="middle">
          是 ✓ 徒手/多人協同渡溪
        </text>

        {/* Arrow Down: 否 */}
        <line x1="450" y1="360" x2="450" y2="400" stroke="#38BDF8" strokeWidth="3" />
        <polygon points="444,400 456,400 450,412" fill="#38BDF8" />
        <text x="475" y="390" fill="#38BDF8" fontSize="11" fontWeight="bold">否（水流具推力）</text>
      </g>

      {/* STEP 4: 背包是否顯著增加風險？ */}
      <g>
        <rect x="290" y="415" width="320" height="65" rx="8" fill="#1E293B" stroke="#FBBF24" strokeWidth="2" />
        <text x="450" y="440" fill="#FDE68A" fontSize="13" fontWeight="bold" textAnchor="middle">
          STEP 4｜背包是否顯著增加風險？
        </text>
        <text x="450" y="460" fill="#E2E8F0" fontSize="10" textAnchor="middle">
          重裝 &gt; 15kg 或水深及膝產生浮力水阻
        </text>

        {/* Branch: 是 -> 主動人包分離 */}
        <line x1="290" y1="448" x2="180" y2="448" stroke="#F59E0B" strokeWidth="3" />
        <polygon points="180,443 165,448 180,453" fill="#F59E0B" />
        <rect x="15" y="420" width="150" height="55" rx="6" fill="#78350F" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="90" y="442" fill="#FEF3C7" fontSize="12" fontWeight="bold" textAnchor="middle">
          是 🎒 主動人包分離
        </text>
        <text x="90" y="462" fill="#FDE68A" fontSize="10" textAnchor="middle">
          先運裝備 → 再渡人員
        </text>

        {/* Arrow Down: 繼續評估繩索 */}
        <line x1="450" y1="480" x2="450" y2="520" stroke="#38BDF8" strokeWidth="3" />
        <polygon points="444,520 456,520 450,532" fill="#38BDF8" />
      </g>

      {/* STEP 5: 繩索系統評估與底線 */}
      <g>
        <rect x="270" y="535" width="360" height="70" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
        <text x="450" y="560" fill="#BAE6FD" fontSize="13" fontWeight="bold" textAnchor="middle">
          STEP 5｜隊伍具備相應繩索系統能力嗎？
        </text>
        <text x="450" y="580" fill="#E2E8F0" fontSize="10" textAnchor="middle">
          固定點可靠、先鋒受訓、通訊明確、隨時可安全撤退
        </text>

        {/* Branch: 具備 -> 受控鐘擺橫渡 */}
        <line x1="630" y1="570" x2="680" y2="570" stroke="#10B981" strokeWidth="2.5" />
        <polygon points="680,565 695,570 680,575" fill="#10B981" />
        <rect x="700" y="550" width="160" height="42" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="1.5" />
        <text x="780" y="575" fill="#A7F3D0" fontSize="12" fontWeight="bold" textAnchor="middle">
          是 🪢 鐘擺確保受控橫渡
        </text>

        {/* Branch: 不具備/仍無法控制 -> STOP */}
        <line x1="270" y1="570" x2="200" y2="570" stroke="#EF4444" strokeWidth="3" />
        <polygon points="200,565 185,570 200,575" fill="#EF4444" />
        <rect x="25" y="550" width="160" height="42" rx="6" fill="#450A0A" stroke="#EF4444" strokeWidth="2" />
        <text x="105" y="575" fill="#FCA5A5" fontSize="12" fontWeight="bold" textAnchor="middle">
          否 🛑 絕對禁止渡溪！
        </text>
      </g>
    </svg>
  );
};
