function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(25, 25, 25);
    translate(width/2, height/2);
    let t=map(mouseX, 0, width, 0, 2*PI);
    noFill();
    stroke(255);
    strokeWeight(1);
    line(-width/2, 0, width/2, 0);
    line(0, -height/2, 0, height/2);
    strokeWeight(6);
    arc(0, 0, 300, 300, -t, 0);
    fill(0, 0, 255);
    stroke(255, 255, 0);
    circle(150*cos(-t), 150*sin(-t), 8);
}
