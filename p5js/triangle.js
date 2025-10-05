let x1=240;
let y1=40;
let x2=320;
let y2=120;
let x3=80;
let y3=160;
let p1="(x1, y1)";
let p2="(x2, y2)";
let p3="(x3, y3)";
let flag=false;

function setup() {
    createCanvas(400, 200);
    background(204);
    stroke(0);
    textSize(18);
}
function draw(){
    background(204);
    if (flag) {
        fill(255);
        triangle(x1, y1, x2, y2, x3, y3);
        fill(0);
        ellipse(x1, y1, 4, 4);
        text(p1, x1-26, y1-14);
        ellipse(x2, y2, 4, 4);
        text(p2, x2+12, y2);
        ellipse(x3, y3, 4, 4);
        text(p3, x3-26, y3+20);
    } else {
        fill(255);
        triangle(x1, y1, x2, y2, x3, y3);
    }
}
function mousePressed() {
    flag = !flag;
}
function touchStarted() {
    flag = !flag;
}
