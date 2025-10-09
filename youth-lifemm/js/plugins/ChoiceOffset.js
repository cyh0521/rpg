/*:
 * @target MZ
 * @plugindesc 調整選擇項目視窗與螢幕邊緣的距離
 * @param Offset X
 * @type number
 * @default 40
 * @desc 往內縮多少像素（數值越大越靠內）
 */

(() => {
  const parameters = PluginManager.parameters('ChoiceOffset');
  const offsetX = Number(parameters['Offset X'] || 40);

  const _Window_ChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
  Window_ChoiceList.prototype.updatePlacement = function() {
    _Window_ChoiceList_updatePlacement.call(this);
    if (this._messageWindow) {
      if (this.x === 0) this.x += offsetX; // 左側往內縮
      if (this.x + this.width >= Graphics.boxWidth) this.x -= offsetX; // 右側往內縮
    }
  };
})();