let n=4;
let r=300.0/(2*n);
function setup() {
  createCanvas(300, 300);
  randomSeed(0);
  ellipseMode(RADIUS);
}

function draw() {
  background(0);
  fill(255, 255, 0);
  for (let j=0; j<n+1; j++) {
    for (let i=0; i<n+1; i++) {
      ellipse(2*r*i, 2*r*j, r, r);
    }
  }
}
