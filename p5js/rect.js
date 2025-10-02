let x=100;
let y=50;
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
        rect(x, y, w, h)
        stroke(0); fill(0);
        ellipse(x, y, 4, 4);
        text("(x, y)", x-40, y-10);
        line(x, y+h+p, x+w/2-p, y+h+p);
        text("w", x+w/2-p+3, y+h+p+p/2);
        line(x+w/2+p, y+h+p, x+w, y+h+p);
        line(x+w+p, y, x+w+p, y+h/2-p);
        text("h", x+w+p/2, y+h/2+6);
        line(x+w+p, y+h/2+p, x+w+p, y+h);
    } else {
        fill(255);
        rect(x, y, w, h)
    }
}
function mousePressed() {
    flag = !flag;
}
