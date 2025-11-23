let n=4;
let d=300.0/n;
function setup() {
  createCanvas(300, 300);
}
function draw() {
  background(0);
  fill(255, 255, 0);
  for (let j=0; j<n+1; j++) {
    for (let i=0; i<n+1; i++) {
      drawStar(d*i, d*j, d);
    }
  }
}
function drawStar(x, y, d) {
  noStroke();    
  push();
  translate(x, y);
  beginShape();
  for (let i=0; i < 5; i++) {
    let theta=-HALF_PI + 2*i*TWO_PI/5;
    vertex((d/2.0)*cos(theta), (d/2.0)*sin(theta));
  }
  endShape(CLOSE);
  pop();
}
