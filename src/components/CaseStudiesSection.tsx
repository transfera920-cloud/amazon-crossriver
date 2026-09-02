import React from 'react';
import { CASE_STUDIES_DATA } from '../data/curriculumData';
import { AlertTriangle, CheckCircle, XCircle, ShieldAlert, Lightbulb, HelpCircle } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section className="space-y-8 p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto">
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-amber-300 text-xs font-bold">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>山難與實戰案例專題研析</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
          真實過溪情境與實務教訓覆盤 (5 大代表案例)
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed">
          深入分析登山隊伍在溪流橫渡中最常遭遇的致命誤判、淺急水流陷阱、漫流選擇、主動人包分離，以及山洪突發果斷撤退的成功決策。
        </p>
      </div>

      <div className="space-y-8">
        {CASE_STUDIES_DATA.map((c) => (
          <div
            key={c.id}
            className="rounded-2xl border bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 border-slate-800 p-5 sm:p-6 space-y-5 shadow-xl hover:border-emerald-500/40 transition-all"
          >
            {/* Case Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs font-bold">
                  {c.id}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">{c.title}</h3>
              </div>
              <span className="text-xs px-3 py-1 rounded-full font-bold bg-amber-950 text-amber-300 border border-amber-800">
                {c.tag}
              </span>
            </div>

            {/* Scenario Context */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                【遭遇情境與現場狀況】
              </div>
              <p className="text-sm text-slate-200 leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
                {c.scenario}
              </p>
            </div>

            {/* Critical Question */}
            <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-2.5">
              <HelpCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm font-semibold text-amber-200">
                {c.question}
              </div>
            </div>

            {/* Analysis Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Physics & Terrain Analysis */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  水文力學分析與潛在陷阱
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {c.analysis.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Correct Decision & Response */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4" />
                  正確處置方式與 SOP 執行
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {c.correctDecision}
                </p>
              </div>
            </div>

            {/* Takeaway Motto */}
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between gap-2">
              <div className="text-xs text-emerald-300 font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>核心教訓：{c.keyTakeaway}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
