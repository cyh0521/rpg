(function() {
  function spawnConfetti(x, y, color) {
    const sprite = new Sprite(new Bitmap(8, 8));
    sprite.bitmap.fillRect(0, 0, 8, 8, color);
    sprite.x = x + Math.random() * 100 - 50;
    sprite.y = y;
    sprite.opacity = 255;
    SceneManager._scene._spriteset._tilemap.addChild(sprite);

    const speedY = 1 + Math.random() * 2;
    const speedX = (Math.random() - 0.5) * 2;
    const rotSpeed = (Math.random() - 0.5) * 0.2;

    sprite.update = function() {
      this.y += speedY;
      this.x += speedX;
      this.rotation += rotSpeed;
      this.opacity -= 2;
      if (this.opacity <= 0) this.parent.removeChild(this);
    };

    // 每禎更新
    const update = SceneManager._scene.update;
    SceneManager._scene.update = function() {
      update.call(this);
      if (sprite.parent) sprite.update();
    };
  }

  window.showConfetti = function(x, y, amount = 30) {
    const colors = ["#FFD700", "#FF69B4", "#00BFFF", "#32CD32", "#FF4500"];
    for (let i = 0; i < amount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      spawnConfetti(x, y, color);
    }
  };
})();
