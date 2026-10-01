import React, { useState } from 'react';
import { DecisionFlowSvg } from './svg/DecisionFlowSvg';
import { X, GitBranch, ShieldCheck, AlertTriangle, ArrowRight, RefreshCw } from 'lucide-react';

interface DecisionFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DecisionFlowModal: React.FC<DecisionFlowModalProps> = ({ isOpen, onClose }) => {
  const [interactiveStep, setInteractiveStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});

  if (!isOpen) return null;

  const handleAnswer = (step: number, answer: boolean) => {
    setAnswers((prev) => ({ ...prev, [step]: answer }));
    if (step === 1 && !answer) {
      // No crossing needed
      setInteractiveStep(100);
    } else if (step === 2 && !answer) {
      // Unsafe water
      setInteractiveStep(200);
    } else if (step === 3 && answer) {
      // Safe solo wading
      setInteractiveStep(300);
    } else if (step === 4) {
      setInteractiveStep(5);
    } else if (step === 5) {
      if (answer) {
        setInteractiveStep(500); // Controlled pendulum
      } else {
        setInteractiveStep(600); // Prohibited
      }
    } else {
      setInteractiveStep(step + 1);
    }
  };

  const handleReset = () => {
    setInteractiveStep(1);
    setAnswers({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-950/80 border border-sky-500/30 text-sky-400">
              <GitBranch className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-100">
                登山隊渡溪決策全景流程圖
              </h2>
              <p className="text-xs text-slate-400">
                嚴格遵循「保有隨時安全撤退能力」的五階篩選決策漏斗
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="關閉渡溪決策流程圖"
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
          {/* Interactive Decision Step Simulator */}
          <div className="bg-slate-950 p-5 rounded-2xl border border-sky-500/30 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                現場互動情境評估引導
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> 重新評估
              </button>
            </div>

            {/* Step 1 Question */}
            {interactiveStep === 1 && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-100">
                  步驟 1｜隊伍真的必須渡溪嗎？有無高繞、橋樑或繞行路線？
                </h3>
                <p className="text-xs text-slate-400">
                  最好的渡溪，就是「不渡溪」。只要有安全路徑或可退回原路，絕不輕易冒險入水。
                </p>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleAnswer(1, true)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-bold text-slate-200 cursor-pointer"
                  >
                    無其他路線，必須渡溪 →
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAnswer(1, false)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-xs font-bold text-emerald-300 cursor-pointer"
                  >
                    有高繞路徑／原路可折返
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 Question */}
            {interactiveStep === 2 && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-100">
                  步驟 2｜水況與環境是否具備基本安全性？
                </h3>
                <p className="text-xs text-slate-400">
                  檢查：水色清澈或微黃（無土石混濁）、無暴漲跡象、下游無倒木（Strainer）或瀑布落差。
                </p>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleAnswer(2, true)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-bold text-slate-200 cursor-pointer"
                  >
                    水況穩定・下游無致命障礙 →
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAnswer(2, false)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-red-950/80 hover:bg-red-900 border border-red-500/40 text-xs font-bold text-red-300 cursor-pointer"
                  >
                    水色暴漲混濁／下游有落差 🛑
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 Question */}
            {interactiveStep === 3 && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-100">
                  步驟 3｜水深與流速是否可低風險徒手涉水？
                </h3>
                <p className="text-xs text-slate-400">
                  水深在膝蓋以下、水流平緩、河床平坦無青苔大滾石。
                </p>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleAnswer(3, true)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-xs font-bold text-emerald-300 cursor-pointer"
                  >
                    是：水淺流緩，可徒手/協同通過
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAnswer(3, false)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-xs font-bold text-slate-200 cursor-pointer"
                  >
                    否：水深及膝或水流有推力 →
                  </button>
                </div>
              </div>
            )}

            {/* Step 4 Question */}
            {interactiveStep === 4 && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-100">
                  步驟 4｜隊員背負重裝（&gt;15kg）是否顯著放大溺水與失足風險？
                </h3>
                <p className="text-xs text-slate-400">
                  重裝在水中具浮力且產生巨大水阻。應貫徹「先處理裝備，再處理人」的主動人包分離。
                </p>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleAnswer(4, true)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-amber-950/80 hover:bg-amber-900 border border-amber-500/40 text-xs font-bold text-amber-300 cursor-pointer"
                  >
                    是：啟動「主動人包分離」（先運裝備再渡人）
                  </button>
                </div>
              </div>
            )}

            {/* Step 5 Question */}
            {interactiveStep === 5 && (
              <div className="space-y-3">
                <h3 className="text-base font-bold text-slate-100">
                  步驟 5｜隊伍具備可靠繩索系統與先鋒確保能力嗎？
                </h3>
                <p className="text-xs text-slate-400">
                  天然錨點堅固、先鋒受過訓練、通訊明確、隨時具備「停止放繩擺回出發岸」的撤退冗餘。
                </p>
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => handleAnswer(5, true)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-xs font-bold text-emerald-300 cursor-pointer"
                  >
                    具備：架設鐘擺確保系統橫渡
                  </button>
                  <button
                    type="button"
                    onClick={() => handleAnswer(5, false)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-red-950/80 hover:bg-red-900 border border-red-500/40 text-xs font-bold text-red-300 cursor-pointer"
                  >
                    不具備／無法確保安全撤退 🛑
                  </button>
                </div>
              </div>
            )}

            {/* Results Branches */}
            {interactiveStep === 100 && (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 space-y-2">
                <div className="text-emerald-400 font-bold text-sm">✓ 最佳決策：選擇高繞或原路折返</div>
                <p className="text-xs text-emerald-200">
                  無需承擔溪水風險。貫徹登山安全第一守則，避免非必要的涉水接觸。
                </p>
              </div>
            )}

            {interactiveStep === 200 && (
              <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 space-y-2">
                <div className="text-red-400 font-bold text-sm">🛑 嚴格禁令：絕對禁止下水！立即撤退紮營</div>
                <p className="text-xs text-red-200">
                  水文已達危險等級，下游無救援緩衝區。全體退回出發岸高地，原地紮營等候水退或求援。
                </p>
              </div>
            )}

            {interactiveStep === 300 && (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 space-y-2">
                <div className="text-emerald-400 font-bold text-sm">✓ 徒手涉水或多人互挽協同渡溪</div>
                <p className="text-xs text-emerald-200">
                  解開胸腰扣，面向上游45°微蹲，雙杖三角支撐；或採並排互挽／三角破水陣型穩固推進。
                </p>
              </div>
            )}

            {interactiveStep === 500 && (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 space-y-2">
                <div className="text-emerald-400 font-bold text-sm">✓ 鐘擺式受控繩索橫渡</div>
                <p className="text-xs text-emerald-200">
                  上游主錨點確保，先鋒空身渡溪；貫徹人包分離，水中一次僅限一人，保持順流撤退弧線。
                </p>
              </div>
            )}

            {interactiveStep === 600 && (
              <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 space-y-2">
                <div className="text-red-400 font-bold text-sm">🛑 嚴格禁令：不可盲目架繩硬闖！</div>
                <p className="text-xs text-red-200">
                  「有繩 ≠ 可以過」。若無可靠錨點與先鋒控制能力，架設固定繩只會製造致命水壓絞殺陷阱。
                </p>
              </div>
            )}
          </div>

          {/* Full Vector Diagram */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              全景決策向量圖示
            </h4>
            <div className="p-3 bg-black/60 rounded-xl border border-slate-800">
              <DecisionFlowSvg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
