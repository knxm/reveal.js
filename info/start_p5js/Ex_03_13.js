function setup() {
  createCanvas(480, 120);
  strokeWeight(12);
}

function draw() {
  background(204);
  rect(60, 25, 70, 70);
  strokeJoin(ROUND);
  rect(160, 25, 70, 70);
  strokeJoin(BEVEL);
  rect(260, 25, 70, 70);
  strokeJoin(MITER);
  rect(360, 25, 70, 70);
}
