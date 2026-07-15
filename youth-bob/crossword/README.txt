Boardgame Cards Theme：六種收藏卡片、主題色系、徽章、卡框與桌面遊戲板風格。

v4：首頁標題改回明體、進一步縮減頂部留白、遊戲頁改用盾牌圖示、放大狀態欄標籤文字。

v3：重新設計首頁標題、加入 NATIONAL DEFENSE CROSSWORD、縮減首頁上方留白，並移除新局自動排盤與尺寸訊息。

v2：移除自動排盤標籤、固定頂部列、加入操作說明視窗，並調整主頁文字與字級。

新增：六分類首頁、SVG圖示、分類題數、返回主頁功能。

國防填字遊戲題庫

分類與題數
- 國際情勢：35 題
- 國家安全：35 題
- 全民國防：35 題
- 災害防救：35 題
- 戰史：35 題
- 軍事科技：41 題
- 總計：216 題

檔案結構
data/question_bank_loader.js
data/international.js
data/national_security.js
data/all_out_defense.js
data/disaster_prevention.js
data/war_history.js
data/military_technology.js
載入測試.html

使用方式
1. 將 data 資料夾放在 index.html 同一層。
2. 在遊戲程式之前依序加入各 script 標籤。
3. 直接雙擊 index.html 即可使用，不需 fetch，也不需本機伺服器。
4. 題庫位於 window.QUESTION_BANK。
5. 所有答案均避免英文字母與阿拉伯數字，適合中文字格。

建議載入順序
<script src="data/question_bank_loader.js"></script>
<script src="data/international.js"></script>
<script src="data/national_security.js"></script>
<script src="data/all_out_defense.js"></script>
<script src="data/disaster_prevention.js"></script>
<script src="data/war_history.js"></script>
<script src="data/military_technology.js"></script>
