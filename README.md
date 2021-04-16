# graph_sample

## Project setup (初始化)

- 會依據package.json中的dependencies安裝套件
```
npm install
```

### Compiles and hot-reloads for development

- 執行此命令會啟動本地測試Server，terminal會顯示連結
- 此開發用server可以一邊編輯程式碼一邊看網頁變化狀態(不用關閉ctrl+c可關閉)
- 當有錯誤則會有錯誤提示於terminal
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files

- 執行此會自動將程式碼自動化/標準化(但必須關閉server)
- 但是linter的標準，json格式會跟平常的有些不同(直接貼上一般JSON格式進來到檔案會出錯，則可以此指令自動轉format)
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
