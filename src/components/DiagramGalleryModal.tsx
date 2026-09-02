import React, { useState } from 'react';
import { DIAGRAM_REGISTRY } from './svg/SvgRegistry';
import { X, Maximize2, Layers, Filter } from 'lucide-react';

interface DiagramGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDiagramId: string | null;
  onSelectDiagram: (id: string) => void;
}

export const DiagramGalleryModal: React.FC<DiagramGalleryModalProps> = ({
  isOpen,
  onClose,
  selectedDiagramId,
  onSelectDiagram,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activePackStage, setActivePackStage] = useState<number>(1);

  if (!isOpen) return null;

  const allDiagrams = Object.values(DIAGRAM_REGISTRY);
  const categories = ['all', ...Array.from(new Set(allDiagrams.map((d) => d.category)))];

  const filteredDiagrams =
    activeCategory === 'all'
      ? allDiagrams
      : allDiagrams.filter((d) => d.category === activeCategory);

  const currentDiagram = selectedDiagramId ? DIAGRAM_REGISTRY[selectedDiagramId] : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-emerald-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-100">
                原創力學與地形圖解全覽庫 (共 18 幅)
              </h2>
              <p className="text-xs text-slate-400">
                亞馬遜國家山岳協會標準教學向量圖解系統
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories Bar */}
        <div className="px-4 py-3 bg-slate-950/60 border-b border-slate-800 flex items-center gap-1.5 overflow-x-auto custom-scrollbar">
          <span className="text-xs text-slate-400 flex items-center gap-1 flex-shrink-0 mr-2">
            <Filter className="w-3.5 h-3.5" /> 分類：
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
              }`}
            >
              {cat === 'all' ? '全部圖解 (18)' : cat}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
          {/* If a single diagram is clicked to enlarge */}
          {currentDiagram ? (
            <div className="space-y-4 bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {currentDiagram.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-100">{currentDiagram.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectDiagram('')}
                  className="text-xs text-slate-400 hover:text-slate-200 bg-slate-800 px-3 py-1.5 rounded-lg cursor-pointer"
                >
                  返回圖解縮圖清單
                </button>
              </div>

              <div className="p-2 sm:p-4 bg-black/60 rounded-xl border border-slate-800">
                <currentDiagram.component
                  activeStage={activePackStage}
                  onStageSelect={setActivePackStage}
                />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
                <strong>💡 圖解說明：</strong>
                {currentDiagram.description}
              </p>
            </div>
          ) : (
            /* Grid of all diagrams */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDiagrams.map((d) => {
                const SvgComponent = d.component;
                return (
                  <div
                    key={d.id}
                    onClick={() => onSelectDiagram(d.id)}
                    className="group flex flex-col justify-between bg-slate-950/70 border border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/50 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="p-3 bg-black/40 border-b border-slate-800/80 flex items-center justify-center min-h-[160px]">
                      <SvgComponent className="w-full h-auto max-h-40 pointer-events-none group-hover:scale-[1.02] transition-transform" />
                    </div>
                    <div className="p-3.5 space-y-1.5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                          {d.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                          {d.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">
                          {d.description}
                        </p>
                      </div>
                      <div className="pt-2 flex items-center justify-between text-[11px] text-emerald-400 font-semibold border-t border-slate-800/60 mt-2">
                        <span>點擊放大檢視</span>
                        <Maximize2 className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
