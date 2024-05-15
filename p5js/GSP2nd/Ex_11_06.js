var x = [12, 24, 36];

function setup() {
  createCanvas(240, 120);
  noStroke();
}

function draw() {
  background(204);
  textSize(x[0]);
  text(x[0]+"point", 10, 30);
  textSize(x[1]);
  text(x[1]+"point", 10, 60);
  textSize(x[2]);
  text(x[2]+"point", 10, 100);
}

