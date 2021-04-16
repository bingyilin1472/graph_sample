# graph_sample

## Project setup (初始化)

- 會依據package.json中的dependencies安裝套件
```
npm install
```

### Compiles and hot-reloads for development(本地開發測試運作用)

- 執行此命令會啟動本地測試Server，terminal會顯示連結
- 此開發用server可以一邊編輯程式碼一邊看網頁變化狀態(不用關閉ctrl+c可關閉)
- 當有錯誤則會有錯誤提示於terminal
```
npm run serve
```

### Compiles and minifies for production(目前用不到此指令，此為部屬網頁用指令)
```
npm run build
```

### Lints and fixes files

- 執行此會自動將程式碼自動化/標準化(但必須關閉server)
- 但是linter的標準，json格式會跟平常的有些不同(直接貼上一般JSON格式進來到檔案會出錯，則可以此指令自動轉format)
```
npm run lint
```

### 採用的套件
1. web framework採用vueJS框架: https://vuejs.org/
2. css framework採用tailwindcss框架: https://tailwindcss.com/
3. knowledge graph採用antV g6套件: https://g6.antv.vision/zh 

### 檔案位址說明
1. 首頁，是專案目錄下/src/App.vue
2. 圖譜介面(antV g6 instance所在)，是在專案目錄下/src/views/platform.vue
3. 專案目錄下的package.json，是指令設置與相依套件檔案(沒有要新添package可不予理會)
4. 專案目錄下的tailwindcss.config.js，為客製網頁樣式的自定義檔案(沒有要自定義樣式可不予理會)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
