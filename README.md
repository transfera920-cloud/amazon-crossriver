# 登山途中溪水橫渡安全教案 | 亞馬遜國家山岳協會

亞馬遜國家山岳協會（Amazon Alpine Association）專業登山途中溪水橫渡安全實務教學系統。

## 本地開發與建置

```bash
# 安裝相依套件
npm install

# 本地開發預覽
npm run dev

# 生產環境建置
npm run build
```

- **輸出目錄**：`dist/chapter19`

## Cloudflare Workers Builds 部署設定

- **Build command**: `npm run build`
- **Output directory**: `dist` (搭配 `wrangler.jsonc` 靜態資產目錄 `./dist`)
- **Node.js Version**: `>= 20`
