function setup() {
  createCanvas(480, 120);
  noLoop();
}

function draw() {
  background(204);
  fill(255);
  rect(120, 60, 80, 80);
  ellipse(120, 60, 80, 80);
  ellipseMode(CORNER);
  rect(280, 20, 80, 80);
  ellipse(280, 20, 80, 80);
}
