var mic;
var amp;
var scale = 1.0;
var s=0;

function setup() {
    createCanvas(240, 400);
    background(0);
    mic = new p5.AudioIn();
    mic.start();
    amp = new p5.Amplitude();
    amp.setInput(mic);
}
function draw() {
    noStroke();
    fill(0, 10);
    rect(0, 0, width, height);
    if ( s%2 == 0 ) {
      scale=map(amp.getLevel(), 0, 1.0, 10, width);
    } else {
      scale=1.0;
    }
    fill(255);
    ellipse(width/2, height/2, scale, scale);
}

function mousePressed() {
  s++;
}

function touchStarted() {
  s++;
}
