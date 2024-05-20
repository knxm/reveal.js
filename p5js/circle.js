function setup() {
    createCanvas(400, 400);
    strokeWeight(4);
}
function draw() {
    background(0);
    translate(width/2, height/2);
    let t=map(mouseX, 0, width, 0, TWO_PI);
    noFill();
    stroke(255);
    arc(0, 0, 200, 200, -t, 0);
    fill(0, 0, 255);
    stroke(255, 255, 0);
    ellipse(100*cos(-t), 100*sin(-t), 8, 8);
}
