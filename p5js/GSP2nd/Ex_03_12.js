function setup() {
  createCanvas(480, 120);
  strokeWeight(24);
}
function draw() {
  background(204);
  line(60, 25, 130, 95);
  strokeCap(SQUARE);
  line(160, 25, 230, 95);
  strokeCap(PROJECT);
  line(260, 25, 330, 95);
  strokeCap(ROUND);
  line(360, 25, 430, 95);
}

