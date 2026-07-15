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
