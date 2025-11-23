function setup() {
    createCanvas(300, 300);
}
function draw() {
    background(0);
    fill(255, 255, 0);
    drawStar(150, 100, 75);
}
function drawStar(x, y, d) {
  noStroke();    
  push();
  translate(x, y);
  beginShape();
  for (let i=0; i < 5; i++) {
    let theta=-HALF_PI+2*i*TWO_PI/5;
      vertex((d/2.0)*cos(theta), (d/2.0)*sin(theta));
  }
  endShape(CLOSE);
  pop();
}    
