import React from 'react';
import { X, Printer, Compass, AlertTriangle, ShieldCheck, CheckSquare, Zap, BookOpen } from 'lucide-react';
import { CHAPTERS_DATA, CHECKLIST_DATA } from '../data/curriculumData';

interface FieldGuidePrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FieldGuidePrintModal: React.FC<FieldGuidePrintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh] print:max-h-none print:border-none print:bg-white print:text-black">
        {/* Modal Top Bar (hidden on print) */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-500/30">
              <Printer className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-100">
                戶外現場防水速查手冊 (Field Pocket Manual)
              </h2>
              <p className="text-xs text-slate-400">
                已針對 A4 紙張與防水口袋卡片進行排版優化，支援一鍵列印 / 存為 PDF
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>列印 / 另存 PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200 print:text-black print:overflow-visible print:p-4">
          {/* Header Title on Print */}
          <div className="border-b-2 border-emerald-600 pb-4 flex items-start justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-500 print:text-emerald-800">
                亞馬遜國家山岳協會 (ANMA) • 溪水橫渡安全委員會
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-100 print:text-black mt-1">
                登山途中溪水橫渡安全實務現場速查手冊 (Field SOP)
              </h1>
              <div className="text-xs text-slate-400 print:text-slate-600 mt-1">
                最高原則：不判斷「現在能不能過」，而是判斷「進去後是否保有安全撤退能力」。
              </div>
            </div>
          </div>

          {/* Section 1: 1-Minute Golden Checklist Grid */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 flex items-center gap-1.5">
              <CheckSquare className="w-4 h-4" />
              【現場 60 秒關鍵檢核表】
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {CHECKLIST_DATA.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 print:bg-slate-50 print:border-slate-300 space-y-1.5">
                  <div className="font-bold text-slate-200 print:text-slate-900 border-b border-slate-800 print:border-slate-300 pb-1">
                    {cat.title}
                  </div>
                  <ul className="space-y-1">
                    {cat.items.map((it) => (
                      <li key={it.id} className="flex items-start gap-1.5">
                        <span className="font-mono text-slate-400 print:text-slate-700">□</span>
                        <span className="text-slate-300 print:text-slate-800">{it.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Critical Rules Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 print:bg-red-50 print:border-red-300 space-y-1">
              <div className="font-bold text-red-300 print:text-red-800">⛔ 嚴格禁止事項</div>
              <ul className="space-y-1 text-slate-300 print:text-slate-800 list-disc list-inside text-[11px]">
                <li>嚴禁將繩索死扣於身上</li>
                <li>嚴禁兩岸拉死水平固定繩橫渡</li>
                <li>水中一次嚴禁兩人以上</li>
                <li>嚴禁在深槽凹岸/倒木上方渡溪</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 print:bg-emerald-50 print:border-emerald-300 space-y-1">
              <div className="font-bold text-emerald-300 print:text-emerald-800">✓ 主動人包分離 5 步</div>
              <ol className="space-y-1 text-slate-300 print:text-slate-800 list-decimal list-inside text-[11px]">
                <li>出發岸打包封口繫繩</li>
                <li>主繩拋投或受控水力導引</li>
                <li>對岸接收並拖拉至高處</li>
                <li>人員空身或極輕裝涉水</li>
                <li>抵達安全區後重新整裝</li>
              </ol>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/40 print:bg-amber-50 print:border-amber-300 space-y-1">
              <div className="font-bold text-amber-300 print:text-amber-800">📢 國際急流哨音手勢</div>
              <ul className="space-y-1 text-slate-300 print:text-slate-800 text-[11px]">
                <li><strong>1 聲：</strong>停止動作 (單手高舉)</li>
                <li><strong>2 聲：</strong>往上游/放繩 (手上指)</li>
                <li><strong>3 聲：</strong>向下游/緊急 (胸前叉)</li>
                <li><strong>連吹：</strong>全體緊急撤退！</li>
              </ul>
            </div>
          </div>

          {/* Section 3: Summary of all 24 chapters */}
          <div className="space-y-2 text-xs">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 print:text-slate-900 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              【24 篇核心標準教案索引目錄】
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
              {CHAPTERS_DATA.map((c) => (
                <div key={c.id} className="p-2 bg-slate-950 border border-slate-850 print:bg-slate-50 print:border-slate-200 rounded-lg">
                  <div className="font-bold text-emerald-400 print:text-emerald-800">
                    第 {c.id} 篇｜{c.tag}
                  </div>
                  <div className="text-slate-300 print:text-slate-900 truncate font-medium">
                    {c.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer note on print */}
          <div className="text-[10px] text-slate-500 print:text-slate-500 border-t border-slate-800 print:border-slate-300 pt-3 flex justify-between">
            <span>亞馬遜國家山岳協會 (ANMA) 安全版權所有</span>
            <span>「有繩 ≠ 可以過」•「先處理裝備，再處理人」</span>
          </div>
        </div>
      </div>
    </div>
  );
};
