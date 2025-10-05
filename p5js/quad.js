let x1=140;
let y1=40;
let x2=340;
let y2=100;
let x3=280;
let y3=160;
let x4 =80;
let y4=140;   
let p1="(x1, y1)";
let p2="(x2, y2)";
let p3="(x3, y3)";
let p4="(x4, y4)";
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
        quad(x1, y1, x2, y2, x3, y3, x4, y4);
        fill(0);
        ellipse(x1, y1, 4, 4);
        text(p1, x1-26, y1-14);
        ellipse(x2, y2, 4, 4);
        text(p2, x2-8, y2-14);
        ellipse(x3, y3, 4, 4);
        text(p3, x3-26, y3+24);
        ellipse(x4, y4, 4, 4);
        text(p4, x4-34, y4+24);
    } else {
        fill(255);
        quad(x1, y1, x2, y2, x3, y3, x4, y4);
    }
}
function mousePressed() {
    flag = !flag;
}
function touchStarted() {
    flag = !flag;
}
