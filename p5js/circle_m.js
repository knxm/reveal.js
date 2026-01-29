function setup() {
    createCanvas(450, 450);
    strokeWeight(6);
}
function draw() {
    background(25, 25, 25);
    translate(width/2, height/2);
    let t=map(mouseX, 0, width, 0, 2*PI);
    noFill();
    stroke(255);
    arc(0, 0, 360, 360, -t, 0);
    fill(0, 0, 255);
    stroke(255, 255, 0);
    circle(180*cos(-t), 180*sin(-t), 8);
}
