import React, { useState } from 'react';
import { CHECKLIST_DATA } from '../data/curriculumData';
import { X, CheckSquare, RotateCcw, AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OneMinuteChecklistModal: React.FC<ChecklistModalProps> = ({ isOpen, onClose }) => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  if (!isOpen) return null;

  const totalItems = CHECKLIST_DATA.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = checkedIds.length;
  const isAllChecked = checkedCount === totalItems && totalItems > 0;

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setCheckedIds([]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-100">
                1 分鐘過溪現場快速檢核表
              </h2>
              <p className="text-xs text-slate-400">
                涉水入溪前 60 秒・全隊全員必備安全過濾程序
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="關閉1分鐘檢核表"
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress status bar */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-300 font-bold">
              檢核完成度：{checkedCount} / {totalItems}
            </span>
            {isAllChecked && (
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold">
                ✓ 全項通過
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> 重設檢核
          </button>
        </div>

        {/* Checklist Categories & Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
          {/* Strict Golden Warning */}
          <div className="p-3.5 bg-red-950/40 border border-red-500/40 rounded-xl flex items-start gap-2.5 text-xs text-red-200">
            <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-red-300 font-bold">任何一項為「否」或存有疑慮時：</strong>
              立即停止渡溪，啟動撤退程序或就地紮營！絕不可抱持僥倖心態強行涉水。
            </div>
          </div>

          {CHECKLIST_DATA.map((cat, catIdx) => (
            <div key={cat.id || catIdx} className="space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{cat.title}</span>
              </div>

              <div className="space-y-2">
                {cat.items.map((item) => {
                  const isChecked = checkedIds.includes(item.id);
                  return (
                    <label
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                        isChecked
                          ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-100'
                          : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700'
                      }`}
                    >
                      <div className="mt-0.5 flex-shrink-0">
                        <CheckCircle2
                          className={`w-4 h-4 transition-colors ${
                            isChecked ? 'text-emerald-400 fill-emerald-950' : 'text-slate-600'
                          }`}
                        />
                      </div>
                      <div className="space-y-0.5 text-xs sm:text-sm">
                        <div className="font-bold text-slate-200">{item.label}</div>
                        <div className="text-[11px] text-slate-400 leading-relaxed">
                          {item.description}
                        </div>
                        {item.warningIfUnchecked && (
                          <div className="text-[10px] text-amber-400/80 font-medium pt-0.5">
                            ⚠️ 否則：{item.warningIfUnchecked}
                          </div>
                        )}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <div className="text-[11px] text-slate-500">
            亞馬遜國家山岳協會・過溪現場安全標準操作程序 (SOP)
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all cursor-pointer"
          >
            完成檢核確認
          </button>
        </div>
      </div>
    </div>
  );
};
