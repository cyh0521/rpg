/*:
 * @plugindesc 在主選單新增「退出遊戲」選項，按下即可關閉遊戲
 * @author Chihyang
 *
 * @help
 * 使用說明：
 * 1. 將本檔案放入遊戲專案的 js/plugins/ 資料夾
 * 2. 開啟插件管理器，新增此插件並啟用
 * 3. 遊戲主選單會自動多出「退出遊戲」選項
 * 4. 選擇後，遊戲將直接關閉（Windows / Mac 均適用）
 *
 * 此插件不需要額外指令，亦不會改動原有功能
 */

(() => {
    // 保存原始 makeCommandList 函數
    const _makeCommandList = Window_TitleCommand.prototype.makeCommandList;

    // 修改 Window_TitleCommand 的 makeCommandList
    Window_TitleCommand.prototype.makeCommandList = function() {
        _makeCommandList.call(this);               // 呼叫原始指令（新遊戲、繼續、選項）
        this.addCommand("退出遊戲", 'exit');      // 新增退出遊戲選項
    };

    // 保存原始 createCommandWindow 函數
    const _createCommandWindow = Scene_Title.prototype.createCommandWindow;

    // 修改 Scene_Title 的 createCommandWindow
    Scene_Title.prototype.createCommandWindow = function() {
        _createCommandWindow.call(this);          // 建立原始命令視窗
        // 設定 'exit' 指令的處理函數，呼叫 SceneManager.exit() 結束遊戲
        this._commandWindow.setHandler('exit', SceneManager.exit.bind(SceneManager));
    };
})();
