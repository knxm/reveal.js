var img;
function preload() {
  img = loadImage("media/lunar_3q.jpg");
}

function setup() {
  createCanvas(360, 180);
}

function draw() {
  image(img, 0, 0);
}
