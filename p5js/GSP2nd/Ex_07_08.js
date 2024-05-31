var quote = "That's one small step for man..."

function preload() {
  font=loadFont("media/SourceCodePro-Regular.ttf");
}
function setup() {
  createCanvas(480, 120);
  textFont(font);
}
function draw() {
  background(102);
  fill(255);
  textSize(18);
  text(quote, 26, 24, 240, 100);
}
