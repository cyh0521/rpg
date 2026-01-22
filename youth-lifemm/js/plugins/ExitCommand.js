/*:
 * @plugindesc 在主選單新增「退出遊戲」選項（不干擾BGM播放，支援網頁版）
 * @author Chihyang
 *
 * @help
 * 【使用說明】
 * 1. 將此檔案放入 js/plugins/ 資料夾。
 * 2. 在插件管理器啟用後，主選單會多出「退出遊戲」選項。
 * 3. 桌機版（Windows/Mac）可正常關閉遊戲。
 * 4. 網頁版則顯示提示訊息（因瀏覽器禁止直接關閉頁面）。
 *
 * 不修改 Scene_Title 原始函式，確保相容性與音樂正常播放。
 */

(() => {
    // --- 擴充主選單指令 ---
    const _makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        _makeCommandList.call(this); // 保留原有指令
        this.addCommand("退出遊戲", "exit"); // 新增退出選項
    };

    // --- 處理「退出遊戲」行為 ---
    const _createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _createCommandWindow.call(this);
        this._commandWindow.setHandler("exit", () => {
            if (Utils.isNwjs()) {
                // 桌機版：直接結束
                nw.App.quit();
            } else {
                // 網頁版：顯示提示訊息
                alert("網頁版無法直接關閉遊戲，請手動關閉視窗。");
                this._commandWindow.activate();
            }
        });
    };
})();
