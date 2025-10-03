let x=200;
let y=100;
let w=150;
let h= 150;
let c="(x, y)";
let flag=false;
let p=10;

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
        let theta = atan2(mouseY-y, mouseX-x)
        arc(x, y, w, h, 0, theta);
        fill(0);
        ellipse(x, y, 4, 4);
        text(c, x-26, y-14);
        ellipse(x+w/2, y, 4, 4);
        text("start", x+w/2+p, y);
        ellipse(x+(w/2)*cos(theta), y+(h/2)*sin(theta), 4, 4);
        if ((w/2)*cos(theta)<0) {
            text("stop", x+(w/2)*cos(theta)-4*p, y+(h/2)*sin(theta)+p);
        } else {
            text("stop", x+(w/2)*cos(theta)+p, y+(h/2)*sin(theta)+p);
        }
    } else {
        fill(255);
        arc(x, y, w, h, 0, HALF_PI)
    }
}
function mousePressed() {
    flag = !flag;
}
