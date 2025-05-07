# :shipit: Overview 概覧

這位兄台，我觀你骨骼精奇，是萬中無一的碼農奇才，維護專案的和平就靠你了。
我這有本秘籍《新笠松音頭》，見你與小栗帽有緣，就無償贈給你了。

[:arrow_backward: 回到最上層 Back to top level](../)

## :scroll: Project Structure 專案結構

此專案是以 astro、apline.js、Tailwind CSS，加上~~天山雪蓮~~配製而成。
以下是專案的資料夾與檔案結構的部分內容，僅列出主要項目以供參考：

This project utilizes AstroJS and Tailwind CSS.
Below is an overview of the project's folder and file structure, with some files omitted for brevity:

<!-- markdownlint-disable -->
<!-- prettier-disable -->

```text
/
├── docs/                                 # 專案説明文件
│   ├── overview.md                       #   ├── 概覽 ← <閣下在此>
│   └── automation.md                     #   └── 自動化
├── public/
│   ├── assets/
│   └── favicon.svg
├── scripts/                              # 腳本
│   └── guide/                            #   ├── 使用手冊
│       └── fetchHmdArticles.sh           #   ├── <爬蟲> shell script
│       └── generateSlugMap.js            #   └──
├── src/                                  # 原始碼根目録
│   ├── assets/                           # ├── 媒體資源
│   ├── contents/                         # ├── 文章內容
│   │   └── guide/                        # │     └── 使用手冊 <HackMD 同步>
│   ├── data/                             # ├── 資料存放
│   │   └── guide/                        # │     └── 使用手冊
│   │       ├── _slugMap.generated.js     # │          ├── slug 參照表 （腳本生成）
│   │       └── _slugMap.source.txt       # │          └── slug 參照表 （來源）
│   ├── lib/                              # ├── 函式庫
│   ├── layouts/                          # ├── HTML+CSS 模版
│   ├── components/                       # ├── HTML 元件庫
│   │   ├── blocks/                       # │     ├── 頁面區塊
│   │   └── elements/                     # │     └──DOM 區塊
│   ├── pages/                            # ├── 頁面路徑
│   ├── styles/                           # ├── CSS 樣式
│   ├── types/                            # ├── ts 型別
│   ├── constants.ts                      # ├── 自定義常用變數
│   ├── content.config.ts                 # ├── Astro Collection 定義檔
│   └── directory.config.ts               # └── 頁面路徑自定義檔案
├── .gitignore
├── .prettierrc.mjs
├── LICENSE
├── README.md
├── astro.config.mjs
├── eslint.config.mjs
├── package-lock.json
├── package.json
└── tsconfig.json
```

<!-- prettier-enable -->
<!-- markdownlint-enable -->

### :genie: Commands 指令

所有指令均需在專案根目錄的終端機 (terminal/ console/ cmd) 中執行：

| 指令                          | 説明                                             |
| :---------------------------- | :----------------------------------------------- |
| `npm install`                 | 安裝相依套件                                     |
| `npm run dev`                 | 啟動本地開發伺服器，位於 `localhost:4321`        |
| `npm run build`               | 將專案建置為生產環境版本，輸出至 `./dist/`       |
| `npm run preview`             | 在部署前本地預覽建置結果                         |
| `npm run astro ...`           | 執行 Astro CLI 指令，例如 `astro add`            |
| `npm run astro -- --help`     | 獲取 Astro CLI 的使用幫助                        |
| `npm run format`              | 使用 Prettier 格式化程式碼                       |
| `npm run format:check`        | 使用 Prettier 檢查、預覧程式碼是否符合格式化規範 |
| `npm run lint`                | 檢查程式碼是否符合 eslint 規範                   |
| `npm run lint:fix`            | 檢查程式碼是否符合 eslint 規範，並嘗試自動修正   |
| `npm run guide:build`         | 生成使用手冊內容                                 |
| `npm run guide:build:dry-run` | 預覽生成使用手冊內容的結果                       |
| `npm run guide:sync`          | 從外部來源同步使用手冊內容                       |
| `npm run guide:sync:dry-run`  | 預覽同步使用手冊內容的結果                       |

All commands are run from the root of the project, from a terminal:

| Command                       | Action                                        |
| :---------------------------- | :-------------------------------------------- |
| `npm install`                 | Installs dependencies                         |
| `npm run dev`                 | Starts local dev server at `localhost:4321`   |
| `npm run build`               | Builds production site to `./dist/`           |
| `npm run preview`             | Previews your build locally, before deploying |
| `npm run astro ...`           | Runs CLI commands like `astro add`, etc.      |
| `npm run astro -- --help`     | Gets help using the Astro CLI                 |
| `npm run format`              | Format with Prettier                          |
| `npm run format:check`        | Performs a dry run of Prettier                |
| `npm run lint`                | Lint code                                     |
| `npm run guide:build`         | Generates the guide content                   |
| `npm run guide:build:dry-run` | Performs a dry run of the above               |
| `npm run guide:sync`          | Sync guide content from external sources      |
| `npm run guide:sync:dry-run`  | Performs a dry run of the above               |

## :eyes: Want to learn more? 了解更多

歡迎隨時查看 astro 的[説明文件](https://docs.astro.build)，去探索大秘寶吧！

Feel free to check [astro documentation](https://docs.astro.build) for mess up around.
