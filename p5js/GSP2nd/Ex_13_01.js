var blip;

var radius = 80;
var x = 0;
var speed = 1.0;
var direction = 1;
var s = 0;

function preload() {
    blip = loadSound("media/blip.wav");
}

function setup(){
    createCanvas(240, 440);
    ellipseMode(RADIUS);
    x = width/2;
}

function draw(){
    background(0);
    if (s%2 == 0) {
       speed = 1.0;
    } else {
       speed = 0.0;
    }
    x += speed * direction;
    if ((x > width-radius) || (x < radius)) {
	direction = -direction;
	blip.play();
    }
    if (direction == 1) {
	arc(x, 220, radius, radius, 0.52, 5.76);
    } else {
	arc(x, 220, radius, radius, 3.67, 8.9);
    }
}

function mousePressed() {
  s++;
}

function touchStarted() {
  s++;
}
