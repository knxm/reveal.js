let bot;

function setup() {
    createCanvas(300, 400);
    bot = loadImage("GSP2nd/media/robot1.svg");
    noLoop();
}

function draw() {
     background(0, 153, 204);
     randomBots();
}

function mousePressed() {
     background(0, 153, 204);
    randomBots();
}    

function randomBots() {
   background(0, 153, 204);
   push();
   scale(0.5);
   for (let i = 0; i < 100; i++) {
      let rx = random(-bot.width, width*2);
      let ry = random(-bot.height, height*2);
      image(bot, rx, ry);
  }
    pop();
}
