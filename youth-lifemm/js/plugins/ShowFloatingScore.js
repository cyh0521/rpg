/*:
 * @plugindesc 玩家/事件頭上浮動文字（排隊版）v1.2
 * @author Chihyang + GPT
 *
 * @help
 * 使用方式：
 *
 * showFloatingScore(target, text, options, callback)
 *   target: "player" 或事件ID
 *   text: 要顯示的文字
 *   options: {x, y, duration, color, size, font, outlineColor, outlineWidth}
 *   callback: 動畫完成後要執行的函數
 *
 * 範例：
 * showFloatingScore("player", "+10", {color:"#00FF00"}, function() {
 *     $gameVariables.setValue(19, $gameVariables.value(19)+10);
 * });
 */

window._FloatingScoreQueues = {}; // 每個目標的動畫隊列

window.showFloatingScore = function(target, text, options={}, callback) {
    if(!window._FloatingScoreQueues[target]) window._FloatingScoreQueues[target] = [];

    // 把動畫加入隊列
    window._FloatingScoreQueues[target].push({text, options, callback});

    // 如果隊列長度 = 1，表示沒有動畫在跑，立即開始
    if(window._FloatingScoreQueues[target].length === 1){
        _runNextFloatingScore(target);
    }
};

function _runNextFloatingScore(target){
    const queue = window._FloatingScoreQueues[target];
    if(!queue || queue.length === 0) return;

    const {text, options, callback} = queue[0];
    const {x=0, y=-20, duration=90, color="#FFD700", size=32, font="GameFont", outlineColor="black", outlineWidth=4} = options;

    let screenX=0, screenY=0;
    if(target === "player"){
        screenX = $gamePlayer.screenX();
        screenY = $gamePlayer.screenY();
    } else {
        const event = $gameMap.event(target);
        if(!event) return;
        screenX = event.screenX();
        screenY = event.screenY();
    }

    const sprite = new Sprite(new Bitmap(200,50));
    sprite.bitmap.fontFace = font;
    sprite.bitmap.fontSize = size;
    sprite.bitmap.fontBold = true;
    sprite.bitmap.textColor = color;
    sprite.bitmap.outlineColor = outlineColor;
    sprite.bitmap.outlineWidth = outlineWidth;
    sprite.bitmap.drawText(text, 0, 0, 200, 50, "center");
    sprite.x = screenX - 100 + x;
    sprite.y = screenY - 50 + y;

    SceneManager._scene.addChild(sprite);

    let counter=0;
    const update = function(){
        counter++;
        sprite.y -= 1;
        sprite.opacity = 255*(1-counter/duration);
        if(counter >= duration){
            SceneManager._scene.removeChild(sprite);
            if(callback) callback();
            // 移除隊列第一個，執行下一個
            queue.shift();
            if(queue.length>0){
                _runNextFloatingScore(target);
            }
        } else {
            requestAnimationFrame(update);
        }
    };
    requestAnimationFrame(update);
}