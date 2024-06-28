var x = [12, 2];

function setup() {
  createCanvas(240, 120);
  noStroke();
}

function draw() {
  background(0);
  fill(250);
  stroke(250);
  textSize(32);
  text("x[0]="+x[0], 10, 32);
  text("x[1]="+x[1], 10, 64);
}

