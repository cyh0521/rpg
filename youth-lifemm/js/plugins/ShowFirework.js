window.showFireworkAtEvent = function(eventId, options={}) {
  const event = $gameMap.event(eventId);
  if(!event) return;
  
  const {count=20, color="#FFD700", duration=60, size=4, speed=3} = options;
  const spriteContainer = new Sprite();
  SceneManager._scene.addChild(spriteContainer);

  const baseX = event.screenX();
  const baseY = event.screenY() - 40;
  const particles = [];

  for(let i=0; i<count; i++){
    const s = new Sprite(new Bitmap(size,size));
    s.bitmap.fillRect(0,0,size,size,color);
    s.x = baseX;
    s.y = baseY;
    s.vx = (Math.random()*2-1)*speed;
    s.vy = (Math.random()*2-1)*speed;
    particles.push(s);
    spriteContainer.addChild(s);
  }

  let t = 0;
  const update = function(){
    t++;
    for(const s of particles){
      s.x += s.vx;
      s.y += s.vy;
      s.opacity = 255 * (1 - t/duration);
      s.vy += 0.05; // 重力
    }
    if(t < duration){
      requestAnimationFrame(update);
    } else {
      SceneManager._scene.removeChild(spriteContainer);
    }
  };
  requestAnimationFrame(update);
};
