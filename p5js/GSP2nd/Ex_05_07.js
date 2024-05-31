function setup() {
    createCanvas(480, 120);
    background(204);
    stroke(0, 102);
}

function draw() {
  var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function mousePressed() {
    background(204);
}
