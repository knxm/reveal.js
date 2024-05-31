function preload() {
  font=loadFont("media/SourceCodePro-Regular.ttf");
}
function setup() {
  createCanvas(360, 90);
  textFont(font);
}
function draw() {
  background(102);
  fill(255);
  textSize(20);
  text("That's one small step for man...", 26, 24, 240, 100);
}
