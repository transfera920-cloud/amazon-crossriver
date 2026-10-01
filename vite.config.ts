import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { CHAPTERS_DATA } from './src/data/curriculumData';

function staticPrerenderPlugin(): Plugin {
  return {
    name: 'static-prerender-plugin',
    transformIndexHtml(html) {
      const chaptersListHtml = CHAPTERS_DATA.map((ch) => {
        return `        <li class="border-b border-slate-850 pb-3">
          <h2 class="text-base font-bold text-emerald-400">第 ${ch.id} 篇：${ch.title}</h2>
          <p class="text-sm text-slate-300 mt-1">${ch.coreMessage}</p>
        </li>`;
      }).join('\n');

      const fallback = `
      <div class="static-seo-fallback max-w-4xl mx-auto p-6 space-y-6 text-slate-100">
        <h1 class="text-2xl font-black text-slate-100">登山途中溪水橫渡安全教案</h1>
        <p class="text-sm text-slate-300 leading-relaxed">
          亞馬遜國家山岳協會（Amazon Alpine Association）專業登山途中溪水橫渡安全實務教學系統，涵蓋水況判斷、主動式人包分離、繩索控制與確保、鐘擺式渡溪、撤退機制與決策流程。最高核心原則：登山隊過溪不是判斷「現在能不能過」，而是判斷「現在進去之後，是否仍然保有安全撤退的能力」。
        </p>
        <section class="space-y-4">
          <div class="text-xs font-bold uppercase tracking-wider text-slate-400">【全套 20 篇核心標準教案索引目錄】</div>
          <ol class="space-y-3">
${chaptersListHtml}
          </ol>
        </section>
      </div>`;

      return html.replace('<div id="root"></div>', `<div id="root">${fallback}\n    </div>`);
    },
  };
}

export default defineConfig({
  base: '/chapter19/',
  plugins: [react(), tailwindcss(), staticPrerenderPlugin()],
  build: {
    outDir: 'dist/chapter19',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});
