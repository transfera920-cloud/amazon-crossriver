import React from 'react';
import { CHAPTERS_DATA } from '../data/curriculumData';
import { BookOpen, CheckCircle2, Award, AlertTriangle, ChevronRight } from 'lucide-react';

interface ChapterNavProps {
  currentChapterId: number;
  onSelectChapter: (id: number) => void;
  completedChapters: number[];
  onToggleComplete: (id: number) => void;
  onSelectTab?: (tab: string) => void;
  activeTab?: string;
}

export const ChapterNav: React.FC<ChapterNavProps> = ({
  currentChapterId,
  onSelectChapter,
  completedChapters,
  onToggleComplete,
  onSelectTab,
  activeTab = 'curriculum',
}) => {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0 bg-slate-900/90 border-b lg:border-b-0 lg:border-r border-slate-800 p-4 flex flex-col gap-4">
      {/* Association Curriculum Badge */}
      <div className="p-3.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Award className="w-5 h-5 text-emerald-400" />
          <div>
            <div className="text-xs font-bold text-slate-200">全套 20 篇完整教案</div>
            <div className="text-[11px] text-slate-400">
              進度：{completedChapters.length} / {CHAPTERS_DATA.length} 完成
            </div>
          </div>
        </div>
        <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/30">
          {Math.round((completedChapters.length / CHAPTERS_DATA.length) * 100)}%
        </div>
      </div>

      {/* Primary Section Switchers */}
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onSelectTab && onSelectTab('curriculum')}
          className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'curriculum'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/50'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          標準學習章節
        </button>
        <button
          type="button"
          onClick={() => onSelectTab && onSelectTab('cases')}
          className={`px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'cases'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-950/50'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
          真實情境案例
        </button>
      </div>

      {/* Chapters Scrollable List */}
      <div className="flex-1 overflow-y-auto space-y-1.5 max-h-[calc(100vh-280px)] pr-1 custom-scrollbar">
        {CHAPTERS_DATA.map((chapter) => {
          const isSelected = currentChapterId === chapter.id && activeTab === 'curriculum';
          const isDone = completedChapters.includes(chapter.id);

          return (
            <div
              key={chapter.id}
              className={`group flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-slate-800 border-emerald-500/50 text-white shadow-sm'
                  : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:bg-slate-800/50 hover:border-slate-700'
              }`}
              onClick={() => {
                if (onSelectTab) onSelectTab('curriculum');
                onSelectChapter(chapter.id);
              }}
            >
              <div className="flex items-start gap-2.5 min-w-0 flex-1">
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-emerald-500 text-slate-950'
                      : isDone
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {chapter.id}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold truncate leading-tight group-hover:text-emerald-300 transition-colors">
                    {chapter.title}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate mt-0.5">
                    {chapter.coreMessage}
                  </div>
                </div>
              </div>

              {/* Completion checkbox button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleComplete(chapter.id);
                }}
                className="p-1 text-slate-500 hover:text-emerald-400 transition-colors cursor-pointer flex-shrink-0"
                aria-label={isDone ? `標記第${chapter.id}章為未讀` : `標記第${chapter.id}章為已學會`}
                title={isDone ? '標記為未讀' : '標記為已學會'}
              >
                <CheckCircle2
                  className={`w-4 h-4 ${isDone ? 'text-emerald-400 fill-emerald-950' : 'text-slate-600'}`}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Mindset reminder */}
      <div className="p-3 bg-amber-950/30 border border-amber-500/20 rounded-xl text-[11px] text-amber-200/90 leading-relaxed">
        <strong className="text-amber-300 block mb-1">⚠️ 銘記在心：</strong>
        「有繩 ≠ 可以過」、「先處理裝備，再處理人」。保持隨時安全撤退的能力是唯一底線。
      </div>
    </aside>
  );
};
