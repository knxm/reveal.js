function setup() {
    createCanvas(240, 120);
    background(0);
    stroke(240);
    fill(240);
    textSize(18);
    noLoop();
}
function draw() {
    text("Ready to roll!", 10, 20);
    text("Rolling... "+rollDice(20), 10, 40);
    text("Rolling... "+rollDice(20), 10, 60);
    text("Rolling... "+rollDice(6), 10, 80);
    text("Finished.", 10, 100);
}

function rollDice(numSides) {
  let d = 1 + int(random(numSides));
  return d
}

function mousePressed() {
    background(0);
    text("Ready to roll!", 10, 20);
    text("Rolling... "+rollDice(20), 10, 40);
    text("Rolling... "+rollDice(20), 10, 60);
    text("Rolling... "+rollDice(6), 10, 80);
    text("Finished.", 10, 100);
}    

function touchStarted() {
    background(0);
    text("Ready to roll!", 10, 20);
    text("Rolling... "+rollDice(20), 10, 40);
    text("Rolling... "+rollDice(20), 10, 60);
    text("Rolling... "+rollDice(6), 10, 80);
    text("Finished.", 10, 100);
}    
