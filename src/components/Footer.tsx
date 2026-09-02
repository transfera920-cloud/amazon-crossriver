import React from 'react';
import { Compass, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-emerald-200">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="font-bold text-slate-200 text-sm">亞馬遜國家山岳協會</div>
            <div className="text-[11px] text-slate-500">
              Amazon National Mountaineering Association (ANMA) • 溪水橫渡安全教育委員會
            </div>
          </div>
        </div>

        <div className="text-center md:text-right space-y-1">
          <div className="text-slate-300 font-medium">
            « 登山隊過溪的最高原則，不是判斷現在能不能過，而是判斷現在進去之後，是否仍然保有安全撤退的能力。 »
          </div>
          <div className="text-[11px] text-slate-500">
            本教案所有力學向量與系統架構均為原創向量生成，嚴禁未受訓者在真實危急情境下強渡急流。
          </div>
        </div>
      </div>
    </footer>
  );
};
