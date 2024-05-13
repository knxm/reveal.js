var img;

function preload() {
  img = loadImage("media/network.svg");
}

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(0);
  image(img, 30, 10);
  image(img, 180, 10, 280, 280);
}

