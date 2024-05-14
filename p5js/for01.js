function setup() {
    createCanvas(400, 400);
    noLoop();
    background(204);
}

function draw() {
   for (let i=0; i<8; i++) {
      ellipse(i*40, 100, 20, 20);
   }
}
