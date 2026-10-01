import React from 'react';
import { Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 py-10 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Link */}
          <a
            href="https://amazon-hike.com/"
            aria-label="亞馬遜國家山岳協會首頁"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-emerald-100 shadow-md border border-emerald-400/30 group-hover:border-emerald-400/60 transition-colors">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="font-bold text-slate-200 text-sm group-hover:text-emerald-400 transition-colors">
                亞馬遜國家山岳協會
              </div>
              <div className="text-[11px] text-slate-500">
                Amazon Alpine Association • 溪水橫渡安全教育委員會
              </div>
            </div>
          </a>

          <div className="text-center md:text-right space-y-1">
            <div className="text-slate-300 font-medium">
              « 登山隊過溪的最高原則，不是判斷現在能不能過，而是判斷現在進去之後，是否仍然保有安全撤退的能力。 »
            </div>
            <div className="text-[11px] text-slate-500">
              社團法人・立案編號 台內團自第1130008137號 • 本教案所有力學向量與系統架構均為原創向量生成
            </div>
          </div>
        </div>

        {/* Site Links Nav */}
        <nav aria-label="站內連結" className="border-t border-slate-900 pt-6">
          <ul className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-[11px] text-slate-400">
            <li>
              <a href="https://amazon-hike.com/" className="hover:text-emerald-400 transition-colors">
                活動行事曆
              </a>
            </li>
            <li>
              <a href="https://amazon-hike.com/intro" className="hover:text-emerald-400 transition-colors">
                登山入門指南
              </a>
            </li>
            <li>
              <a href="https://amazon-hike.com/tools" className="hover:text-emerald-400 transition-colors">
                登山工具與氣象服務
              </a>
            </li>
            <li>
              <a href="https://amazon-hike.com/highlights" className="hover:text-emerald-400 transition-colors">
                活動花絮影音專區
              </a>
            </li>
            <li>
              <a href="https://amazon-hike.com/surveys" className="hover:text-emerald-400 transition-colors">
                問卷調查專區
              </a>
            </li>
            <li>
              <a href="https://amazon-hike.com/policies" className="hover:text-emerald-400 transition-colors">
                政策與章程條款
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
