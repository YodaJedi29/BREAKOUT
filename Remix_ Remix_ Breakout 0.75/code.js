var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var gameState;
var pontos;

var gameState = "serve";
var pontos = 0;
var bloco1 = createSprite(25, 75, 50, 50);
bloco1.shapeColor="red";
var bloco2 = createSprite(75, 75, 50, 50);
bloco2.shapeColor="blue";
var bloco3 = createSprite(125, 75, 50, 50);
bloco3.shapeColor="red";
var bloco4 = createSprite(175, 75, 50, 50);
bloco4.shapeColor="blue";
var bloco5 = createSprite(225, 75, 50, 50);
bloco5.shapeColor="red";
var bloco6 = createSprite(275, 75, 50, 50);
bloco6.shapeColor="blue";
var bloco7 = createSprite(325, 75, 50, 50);
bloco7.shapeColor="red";
var bloco8 = createSprite(375, 75, 50, 50);
bloco8.shapeColor="blue";
var bloco9 = createSprite(25, 125, 50, 50);
bloco9.shapeColor="blue";
var bloco10 = createSprite(75, 125, 50, 50);
bloco10.shapeColor="red";
var bloco11 = createSprite(125, 125, 50, 50);
bloco11.shapeColor="blue";
var bloco12 = createSprite(175, 125, 50, 50);
bloco12.shapeColor="red";
var bloco13 = createSprite(225,125, 50, 50);
bloco13.shapeColor="blue";
var bloco14 = createSprite(275, 125, 50, 50);
bloco14.shapeColor="red";
var bloco15 = createSprite(325, 125, 50, 50);
bloco15.shapeColor="blue";
var bloco16 = createSprite(375, 125, 50, 50);
bloco16.shapeColor="red";

var jogador=createSprite(200,390,100,5);
jogador.shapeColor = "white";
var bola=createSprite(200,200,20,20);
bola.shapeColor = "white";

function draw() {
  background("black");
  createEdgeSprites();
  if (gameState=="play") {
    if (bola.bounceOff(bloco2)) {
      bloco2.destroy();
 pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco3)) {
      bloco3.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco4)) {
      bloco4.destroy();
    }
    if (bola.bounceOff(bloco5)) {
      bloco5.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco6)) {
      bloco6.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco7)) {
      bloco7.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco8)) {
      bloco8.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco9)) {
      bloco9.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco1)) {
      bloco1.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco13)) {
      bloco13.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco14)) {
      bloco14.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco16)) {
      bloco16.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco15)) {
      bloco15.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco11)) {
      bloco11.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco12)) {
      bloco12.destroy();
      pontos = pontos + 1;
    }
    if (bola.bounceOff(bloco10)) {
      bloco10.destroy();
      pontos = pontos + 1;
    }
    bola.bounceOff(jogador);
    bola.bounceOff(topEdge);
    bola.bounceOff(leftEdge);
    bola.bounceOff(rightEdge);
    if (pontos == 10) {
      gameState = "win";
    }
  }
  if (gameState=="win") {
    fill("yellow");
    text("VOCÊ GANHOU", 100, 200);
    if (gameState=="win") {
      bola.velocityX = 0;
      bola.velocityY = 0;
      if (keyDown("space")) {
        gameState = "play";
        bola.x = 200;
        bola.x = 200;
        bola.velocityX = randomNumber(6, 9);
        bola.velocityY = randomNumber(6, 9);
        pontos = "0";
      }
      text("jogar novamente: espaço", 200, 200);
      fill("blue");
    }
  }
  if (bola.bounceOff(bottomEdge)) {
    gameState = "end";
  }
  if (gameState=="end") {
    fill("green");
    text("VOCÊ PERDEU", 100, 200);
    bola.velocityY = 0;
    bola.velocityX = 0;
    if (gameState=="end") {
      if (keyDown("space")) {
        bola.x = 200;
        bola.y = 200;
        bola.velocityX = randomNumber(6, 9);
        bola.velocityY = randomNumber(6, 9);
        gameState = "play";
      }
      fill("red");
      text("recomeçar: espaço", 200, 200);
    }
  }
  if (gameState=="serve") {
    if (keyWentDown("space")) {
      gameState = "play";
      bola.velocityX = randomNumber(1, 9);
      bola.velocityY = randomNumber(1, 9);
    }
  }
  fill("white");
  text("Score: " + pontos, 0, 15);
  jogador.x = World.mouseX;
  
  drawSprites();
}
playSound("assets/category_background/synthesize.mp3", true);

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
