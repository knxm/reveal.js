let startX=50;
let startY=120;
let c=0;
let easing=0.5;
let distance=300;
let targetX=startX+distance;
let x=startX;

function setup() {
    createCanvas(400, 200);
    textSize(20);
}
function draw() {
    background(204);
    fill(255);
    person(x, startY);
    rect(startX, startY, distance, 10);
    fill(0);
    text("target", startX-20, startY+40);
    text("start", startX+270, startY+40);
    text("easing=0.5", 5, 20);
}

function person(x, y) {
    push();
    fill(255);
    strokeWeight(2);
    translate(x, y);
    line(0, -10, 0, -30);
    line(-10, -20, 10, -20);
    line(0, -10, -10, 0);
    line(0, -10,  10, 0);
    ellipse(0, -40, 20, 20);
    pop();
}

function mousePressed() {
    c++;
}
