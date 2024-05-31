function setup() {
  createCanvas(480, 120);
  noLoop();
  background(204);
  fill(255);
} 

function draw() {
  ellipse(75, 60, 90, 90);
  strokeWeight(8);
  ellipse(175, 60, 90, 90);
  ellipse(279, 60, 90, 90);
  strokeWeight(20);
  ellipse(389, 60, 90, 90);
}
