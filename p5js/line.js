let x1=50;
let y1=150;
let x2=350;
let y2=50;
let p1="(x1, y1)";
let p2="(x2, y2)";
let flag=false;

function setup() {
    createCanvas(400, 200);
    background(204);
    stroke(0);
    textSize(18);
    fill(0);
}
function draw(){
    background(204);
    if (flag) {
        line(x1, y1, x2, y2);
        ellipse(x1, y1, 4, 4);
        text(p1, x1-26, y1+20);
        ellipse(x2, y2, 4, 4);
        text(p2, x2-20, y2-18);
    } else {
        line(x1, y1, x2, y2);
    }
}
function mousePressed() {
    flag = !flag;
}
