function setup() {
  createCanvas(120, 120);
}

function draw() {
  rotate(mouseX / 100.0);
  rect(0, 0, 160, 20);
}
