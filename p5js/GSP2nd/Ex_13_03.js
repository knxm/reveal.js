var sine;
var freq = 400;
var s;

function setup() {
    createCanvas(440, 120);
    sine = new p5.SinOsc();
    sine.start();
}
function draw() {
    if (s%2==0) {
	background(255);
    } else {
	background(0);
    }
    var hertz = map(mouseX, 0, width, 20.0, 440.0);
    sine.freq(hertz);
    stroke(204);
    for (var x = 0; x < width; x++) {
	var angle = map(x, 0, width, 0, TWO_PI*hertz);
	var sinValue = sin(angle) * 60;
	line(x, 0, x, height/2 + sinValue);
    }
}

function mousePressed() {
    s++;
}

function touchStarted() {
    s++;
}
