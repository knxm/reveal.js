var img;

function preload() {
  img = loadImage("media/network.svg");
}

function setup() {
  createCanvas(360, 90);
}

function draw() {
  background(0);
  image(img, 3*30/4.0, 3*10/4.0);
  image(img, 3*180/4.0, 3*10/4.0, 3*280/4.0, 3*280/4.0);
}

