import React from 'react';
import {
  Compass,
  GitBranch,
  CheckSquare,
  Layers,
  ShieldAlert,
  Search,
  Gauge,
  Eye,
  Radio,
  Printer,
} from 'lucide-react';

interface HeaderProps {
  currentChapterIndex: number;
  onSelectChapter: (index: number) => void;
  onOpenChecklist: () => void;
  onOpenDecisionFlow: () => void;
  onOpenDiagramGallery: () => void;
  onOpenPhysicsCalculator: () => void;
  onOpenRiverScouting: () => void;
  onOpenWhistleSignals: () => void;
  onOpenFieldGuidePrint: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalChapters: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentChapterIndex,
  onSelectChapter,
  onOpenChecklist,
  onOpenDecisionFlow,
  onOpenDiagramGallery,
  onOpenPhysicsCalculator,
  onOpenRiverScouting,
  onOpenWhistleSignals,
  onOpenFieldGuidePrint,
  searchQuery,
  onSearchChange,
  totalChapters,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      {/* Top emergency mindset bar */}
      <div className="bg-gradient-to-r from-red-950/80 via-amber-950/80 to-slate-950 py-1.5 px-4 text-xs text-amber-200 border-b border-amber-500/20 text-center font-medium">
        <span className="inline-flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <strong className="text-amber-300">最高核心原則：</strong>
          登山隊過溪不是判斷「現在能不能過」，而是判斷「現在進去之後，是否仍然保有安全撤退的能力」。
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3 sm:gap-4">
          {/* Association Branding */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center shadow-lg shadow-emerald-950/50 flex-shrink-0 border border-emerald-400/30">
              <Compass className="w-5 h-5 text-emerald-100" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] sm:text-xs font-semibold tracking-wider text-emerald-400 uppercase truncate">
                亞馬遜國家山岳協會
              </div>
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-slate-100 truncate">
                登山途中溪水橫渡安全教案
              </h1>
            </div>
          </div>

          {/* Search bar on desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              placeholder="搜尋章節、繩索、人包分離、口令..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 text-slate-200 text-xs rounded-lg pl-9 pr-3 py-2 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 placeholder:text-slate-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 text-xs text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {/* 1-Minute Checklist Button */}
            <button
              type="button"
              onClick={onOpenChecklist}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900 text-xs font-bold transition-all shadow-sm cursor-pointer hover:scale-[1.02]"
              title="1分鐘過溪現場快速檢核表"
            >
              <CheckSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span className="hidden sm:inline">1分鐘檢核表</span>
              <span className="sm:hidden">檢核</span>
            </button>

            {/* Decision Flow Tree */}
            <button
              type="button"
              onClick={onOpenDecisionFlow}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-sky-950/80 border border-sky-500/40 text-sky-300 hover:bg-sky-900 text-xs font-bold transition-all shadow-sm cursor-pointer hover:scale-[1.02]"
              title="渡溪決策全景流程圖"
            >
              <GitBranch className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
              <span className="hidden sm:inline">決策流程</span>
              <span className="sm:hidden">決策</span>
            </button>

            {/* Hydrodynamic Physics Calculator */}
            <button
              type="button"
              onClick={onOpenPhysicsCalculator}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-lg bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/60 text-xs font-semibold transition-all cursor-pointer"
              title="水文流速與水深力學風險計算器"
            >
              <Gauge className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
              <span className="hidden md:inline">力學計算器</span>
            </button>

            {/* River Scouting Sandbox */}
            <button
              type="button"
              onClick={onOpenRiverScouting}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-lg bg-slate-900 border border-slate-750 text-slate-200 hover:bg-slate-800 text-xs font-semibold transition-all cursor-pointer"
              title="溪流地形判讀實境沙盒"
            >
              <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
              <span className="hidden xl:inline">地貌沙盒</span>
            </button>

            {/* Whistle Signals Trainer */}
            <button
              type="button"
              onClick={onOpenWhistleSignals}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-lg bg-amber-950/60 border border-amber-500/30 text-amber-300 hover:bg-amber-900/50 text-xs font-semibold transition-all cursor-pointer"
              title="急流哨音與手勢模擬訓練器"
            >
              <Radio className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              <span className="hidden xl:inline">哨音手勢</span>
            </button>

            {/* SVG Diagram Gallery */}
            <button
              type="button"
              onClick={onOpenDiagramGallery}
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 sm:py-2 rounded-lg bg-slate-900 border border-slate-750 text-slate-200 hover:bg-slate-800 text-xs font-semibold transition-all cursor-pointer"
              title="圖解全覽庫 (18幅原創圖解)"
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
              <span className="hidden lg:inline">圖解(18幅)</span>
            </button>

            {/* Print Pocket Manual Button */}
            <button
              type="button"
              onClick={onOpenFieldGuidePrint}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
              title="列印現場防水速查手冊"
            >
              <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
