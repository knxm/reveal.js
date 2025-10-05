let x=200;
let y=100;
let w=200;
let h=100;
let p=10;
let flag=false;

function setup() {
    createCanvas(400, 200);
    textSize(18);
}
function draw(){
    background(204);
    if (flag) {
        fill(255);
        ellipse(x, y, w, h)
        stroke(0); fill(0);
        ellipse(x, y, 4, 4);
        text("(x, y)", x-40, y-10);
        line(x-w/2, y+h/2+p, x-p, y+h/2+p);
        text("w", x-p+3, y+h/2+p+4);
        line(x+p, y+h/2+p, x+w/2, y+h/2+p);
        line(x+w/2+p, y-h/2, x+w/2+p, y-p);
        text("h", x+w/2+4, y+6);
        line(x+w/2+p, y+p, x+w/2+p, y+h/2);
    } else {
        fill(255);
        ellipse(x, y, w, h)
    }
}
function mousePressed() {
    flag = !flag;
}
function touchStarted() {
    flag = !flag;
}
