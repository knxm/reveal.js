function preload() {
  font = loadFont("media/SourceCodePro-Regular.ttf");
}

function setup() {
  createCanvas(360, 90);
  textFont(font);
}

function draw() {
  background(102);
  fill(255);
  textSize(24);
  text("That's one small step for man...", 3*25/4.0, 3*60/4.0);
  textSize(12);
  text("That's one small step for man...", 3*27/4.0, 3*90/4.0);
}
