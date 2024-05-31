var img;

function preload() {
  img = loadImage("media/network.svg");
}

function setup() {
  createCanvas(240, 120);
  imageMode(CENTER);
}

function draw() {
  background(0);
  var diameter = map(mouseX, 0, width, 10, 800);
  image(img, 120, 60, diameter, diameter);
}
