import React, { useState } from 'react';
import { Chapter } from '../types';
import { DiagramRenderer, DIAGRAM_REGISTRY } from './svg/SvgRegistry';
import {
  ShieldAlert,
  AlertOctagon,
  CheckCircle,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Flame,
  Info,
  ListOrdered,
  FileText,
} from 'lucide-react';

interface ChapterViewProps {
  chapter: Chapter;
  onNextChapter?: () => void;
  onPrevChapter?: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  onOpenDiagramModal: (diagramId: string) => void;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({
  chapter,
  onNextChapter,
  onPrevChapter,
  hasNext,
  hasPrev,
  onOpenDiagramModal,
  isCompleted,
  onToggleComplete,
}) => {
  const [activeTab, setActiveTab] = useState<'actionPoints' | 'diagram' | 'mistakes' | 'prohibitions' | 'detailed'>('actionPoints');
  const [activePackStage, setActivePackStage] = useState<number>(1);

  return (
    <article className="flex-1 max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 text-slate-200">
      {/* Chapter Top Navigation Header */}
      <header className="space-y-4 border-b border-slate-800 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            <span>第 {chapter.id} 章</span>
            <span className="text-slate-500">•</span>
            <span className="text-amber-300">{chapter.tag}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleComplete}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/40'
                  : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700'
              }`}
            >
              <CheckCircle className={`w-4 h-4 ${isCompleted ? 'text-emerald-400' : 'text-slate-500'}`} />
              {isCompleted ? '本章已研讀完成' : '標記為已學會'}
            </button>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight leading-tight">
          {chapter.title}
        </h1>

        {/* Core Message Callout Box */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-amber-950/40 to-slate-900 border border-amber-500/30 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            核心主旨與安全心態
          </div>
          <p className="text-sm sm:text-base text-amber-100 font-medium leading-relaxed">
            {chapter.coreMessage}
          </p>
        </div>
      </header>

      {/* 4 Standard Interactive Mode Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-2">
        <button
          type="button"
          onClick={() => setActiveTab('actionPoints')}
          className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'actionPoints'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <ListOrdered className="w-3.5 h-3.5" />
          行動要領 ({chapter.actionPoints.length})
        </button>

        {chapter.diagramId && (
          <button
            type="button"
            onClick={() => setActiveTab('diagram')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'diagram'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            查看圖解
          </button>
        )}

        <button
          type="button"
          onClick={() => setActiveTab('mistakes')}
          className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'mistakes'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <AlertOctagon className="w-3.5 h-3.5" />
          常見錯誤 ({chapter.commonMistakes.length})
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('prohibitions')}
          className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'prohibitions'
              ? 'bg-red-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Flame className="w-3.5 h-3.5" />
          嚴格禁忌 ({chapter.prohibitions.length})
        </button>

        {chapter.detailedContent && (
          <button
            type="button"
            onClick={() => setActiveTab('detailed')}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'detailed'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            深度實務解說
          </button>
        )}
      </div>

      {/* TAB 1: Action Points */}
      {activeTab === 'actionPoints' && (
        <div className="space-y-6">
          {/* Main Primary SVG Diagram in Content if exists */}
          {chapter.diagramId && (
            <section className="space-y-3 bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>核心力學與地形圖解：{chapter.diagramTitle}</span>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenDiagramModal(chapter.diagramId!)}
                  className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/60 px-2.5 py-1.5 rounded-lg border border-emerald-500/30 transition-all cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>放大檢視</span>
                </button>
              </div>

              <div className="bg-slate-950 rounded-xl overflow-hidden p-2 sm:p-4 border border-slate-800/80 shadow-inner">
                <DiagramRenderer
                  id={chapter.diagramId}
                  activeStage={activePackStage}
                  onStageSelect={setActivePackStage}
                />
              </div>
            </section>
          )}

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              實務操作與判斷關鍵步驟
            </h2>
            <div className="space-y-3">
              {chapter.actionPoints.map((point, pIdx) => (
                <div
                  key={pIdx}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {pIdx + 1}
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-200">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Diagram Focus View */}
      {activeTab === 'diagram' && chapter.diagramId && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <h3 className="text-lg font-bold text-sky-400">
              {chapter.diagramTitle || DIAGRAM_REGISTRY[chapter.diagramId]?.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {chapter.diagramDescription || DIAGRAM_REGISTRY[chapter.diagramId]?.description}
            </p>
          </div>

          <div className="bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-2xl">
            <DiagramRenderer
              id={chapter.diagramId}
              activeStage={activePackStage}
              onStageSelect={setActivePackStage}
            />
          </div>
        </div>
      )}

      {/* TAB 3: Common Mistakes */}
      {activeTab === 'mistakes' && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-amber-400 flex items-center gap-2">
            <AlertOctagon className="w-5 h-5" />
            常見致命錯誤與認知陷阱
          </h2>
          <div className="space-y-3">
            {chapter.commonMistakes.map((mistake, mIdx) => (
              <div
                key={mIdx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-amber-950/20 border border-amber-500/30"
              >
                <div className="w-6 h-6 rounded-full bg-amber-950 text-amber-400 border border-amber-500/40 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  ✕
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-amber-100">
                  {mistake}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: Prohibitions */}
      {activeTab === 'prohibitions' && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-red-400 flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-500 animate-pulse" />
            嚴格禁止事項 (CRITICAL PROHIBITIONS)
          </h2>
          <div className="space-y-3">
            {chapter.prohibitions.map((prob, pIdx) => (
              <div
                key={pIdx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-red-950/40 border border-red-500/60"
              >
                <span className="text-red-400 font-extrabold text-base mt-0.5">⛔</span>
                <p className="text-sm sm:text-base leading-relaxed text-red-100 font-semibold">
                  {prob}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: Detailed Content */}
      {activeTab === 'detailed' && chapter.detailedContent && (
        <div className="space-y-6 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
          <h2 className="text-xl font-bold text-purple-300">
            {chapter.detailedContent.subtitle}
          </h2>
          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
            {chapter.detailedContent.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {chapter.detailedContent.bulletLists?.map((list, lIdx) => (
            <div key={lIdx} className="space-y-2.5 p-4 rounded-xl bg-slate-950 border border-slate-800">
              <h3 className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                {list.title}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {list.items.map((it, itIdx) => (
                  <li key={itIdx} className="flex items-start gap-2">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Pager Controls */}
      <footer className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {hasPrev ? (
          <button
            type="button"
            onClick={onPrevChapter}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            上一章
          </button>
        ) : (
          <div />
        )}

        <button
          type="button"
          onClick={onToggleComplete}
          className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            isCompleted
              ? 'bg-emerald-600/30 border border-emerald-500 text-emerald-300'
              : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60'
          }`}
        >
          {isCompleted ? '✓ 本章已完成研讀' : '確認已讀・標記完成'}
        </button>

        {hasNext ? (
          <button
            type="button"
            onClick={onNextChapter}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-lg shadow-emerald-950/60 cursor-pointer"
          >
            下一章
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <div />
        )}
      </footer>
    </article>
  );
};
