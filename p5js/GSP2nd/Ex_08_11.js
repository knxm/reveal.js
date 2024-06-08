var time1 = 2000;
var time2 = 4000;
var x = 0;
var clickTime;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  var currentTime = millis();
  background(204);
  if (currentTime - clickTime> time2) {
    x -= 0.5;
  } else if (currentTime - clickTime > time1) {
    x += 2;
  }
  ellipse(x, 60, 90, 90);
}

function mousePressed() {
  clickTime = millis();
  x=0;
}

function touchStarted() {
  clickTime = millis();
  x=0;
}
