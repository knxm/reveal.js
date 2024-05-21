let startX=50;
let startY=120;
let c=0;
let e=0.1;
let d=300;
let targetX=startX+d;

function setup() {
    createCanvas(400, 200);
    textSize(20);
    rectMode(CORNERS)
}
function draw() {
    background(204);
    fill(255);
    rect(startX, startY, startX+d, startY+10);
    let xn=startX+d-pow(1-e, c)*d;
    person(xn, startY);
    fill(255, 0, 0);
    rect(startX, startY, xn, startY+10);
    fill(0);
    text("start", startX-20, startY+40);
    text("target", startX+270, startY+40);
    text("easing="+e, 5, 20);
    text("frameCount="+c, 200, 20);
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

function keyPressed() {
    c=0;
}
