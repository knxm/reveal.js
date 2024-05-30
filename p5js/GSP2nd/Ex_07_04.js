var img;

function preload() {
  img = loadImage("media/clouds_3q.gif");
}
function setup() {
  createCanvas(360, 90);
}

function draw() {
  background(255);
  image(img, 0, 0);
  image(img, 0, mouseY * -1);
}
