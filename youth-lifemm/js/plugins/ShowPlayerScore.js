/*:
 * @plugindesc 顯示角色名稱與分數（名稱靠左、分數靠右，手動控制）v1.4
 * @author Chihyang + GPT
 *
 * @help
 * 使用方法：
 *   showPlayerScore(actorId, scoreVarId, options)
 *   removePlayerScore(actorId)
 *
 * 範例：
 *   showPlayerScore(2, 20, {
 *      x:100, y:100, width:400, height:100,
 *      size:32, color:"#FFD700", font:"微軟正黑體",
 *      outlineColor:"black", outlineWidth:4, bold:true
 *   });
 *   removePlayerScore(2);
 */

window._PlayerScoreSprites = {};

window.showPlayerScore = function(actorId, scoreVarId, options={}) {
    const {
        color="#FFFFFF", size=32, font="GameFont", bold=false,
        outlineColor="black", outlineWidth=4,
        x=(Graphics.width-400)/2, y=200, width=400, height=100
    } = options;

    const actor = $gameActors.actor(actorId);
    if(!actor) return;

    removePlayerScore(actorId);

    const score = $gameVariables.value(scoreVarId);

    const sprite = new Sprite(new Bitmap(width, height));
    sprite.bitmap.fontFace = font;
    sprite.bitmap.fontSize = size;
    sprite.bitmap.fontBold = bold;
    sprite.bitmap.textColor = color;
    sprite.bitmap.outlineColor = outlineColor;
    sprite.bitmap.outlineWidth = outlineWidth;

    // 名稱靠左，分數靠右
    sprite.bitmap.drawText(actor.name(), 0, 0, width-100, height, "left"); // 名稱區域
    sprite.bitmap.drawText(`${score} 分`, 0, 0, width, height, "right");     // 分數區域

    sprite.x = x;
    sprite.y = y;

    SceneManager._scene.addChild(sprite);
    window._PlayerScoreSprites[actorId] = sprite;
};

window.removePlayerScore = function(actorId) {
    const sprite = window._PlayerScoreSprites[actorId];
    if(sprite && SceneManager._scene) {
        SceneManager._scene.removeChild(sprite);
        delete window._PlayerScoreSprites[actorId];
    }
};