function setup() {
  createCanvas(240, 120);
  strokeWeight(12);
}

function draw() {
  background(204);
  stroke(102);
  line(mouseX, 0, mouseX, height);
  stroke(0);

  var mx = map(mouseX, 0, width, 60, 180);
  line(mx, 0, mx, height);
}
