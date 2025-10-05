let x=200;
let y=120;
let w=150;
let h= 150;
let c="(x, y)";
let flag=0;
let p=10;
let epsilon=0.03;
let angle="";

function setup() {
    createCanvas(400, 240);
    background(204);
    stroke(0);
    textSize(18);
}
function draw(){
    background(204);
    if ( flag%9 == 0 ) {
        angle = 0;
    } else if ( flag%9 == 1 ) {
        angle = QUARTER_PI;
    } else if ( flag%9 == 2 ) {
        angle = HALF_PI;
    } else if ( flag%9 == 3 ) {
        angle = HALF_PI + QUARTER_PI;
    } else if ( flag%9 == 4 ) {
        angle=PI;
    } else if ( flag%9 == 5 ) {
        angle=PI + QUARTER_PI;
    } else if ( flag%9 == 6 ) {
        angle=PI + HALF_PI;
    } else if ( flag%9 == 7 ) {
        angle=PI + HALF_PI + QUARTER_PI;
    } else if ( flag%9 == 8) {
        angle=TWO_PI
    }
    arc(x, y, w, h, 0, (flag%9)*QUARTER_PI);
    angle2=degrees(angle);
    text("ellipse(x, y, 0, radians("+angle2+"))", 10, 20);
}
function mousePressed() {
    flag++;
}
function touchStarted() {
    flag++;
}
