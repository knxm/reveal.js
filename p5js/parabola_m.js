let n = 400;
function setup() {
    createCanvas(800, 600);
    strokeWeight(6);
}
function draw() {
    background(25, 25, 25);
    push();
    translate(width/2, height/2);
    noFill();
    stroke(255);
    beginShape();
    for (let i=-n; i<n; i++) {
        let x = i;
        let y = i*i/200-200;
        vertex(x, y);
    }
    endShape();
    fill(0, 0, 255);
    stroke(255, 255, 0);
    //ellipse(200*cos(-t), 200*sin(-t), 8, 8);
    pop();
}
