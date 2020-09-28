var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":12,"version":"0Yfbs1AXaY0CkftcSDjR48h7PjL_w8NA","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"IosjHsRtOSVL4VDfA4kUAbuOJSMNCMZT","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"0EVzomRujxHsloCVW644Q6Zs4NaP9H7A","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var chimp = createSprite(70, 330);
chimp.setAnimation("monkey");
chimp.scale = 0.15;


var bananaGroup = createGroup();


var ground = createSprite(200, 380, 800, 20);
ground.velocityX=-2;
ground.x=ground.width /2;


var obstacleGroup = createGroup();


var survivalTime = 0;

function draw() {
 
  background("white");
  
  
  spawnBanana();
  spawnObstacles();
  chimp.collide(ground);
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    if (keyDown("space") && chimp.y >= 320) 
  {
  chimp.velocityY = -10;
  }
  
  chimp.velocityY = chimp.velocityY + 0.6;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(World.frameCount/World.frameRate);
  text("survival time: " + survivalTime, 100, 50);
  

  drawSprites();


}

function spawnBanana() 
{
  if (World.frameCount % 80 === 0) 
  {
    var banana = createSprite(400, randomNumber(120, 200));
    banana.setAnimation("Banana");
    banana.scale = 0.05;
    banana.velocityX = -10;
    banana.lifetime = 60;
    bananaGroup.add (banana);
  }
}

function spawnObstacles() {
  if (World.frameCount % 300 === 0) 
  {
    var obstacle = createSprite(400,345);
    obstacle.setAnimation("Stone");
    obstacle.scale = 0.15;
    obstacle.velocityX = -7;
    obstacle.lifetime = 60;
    obstacleGroup.add (obstacle);
  }
}

  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
