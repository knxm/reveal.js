let n=500;
let m=800;
let s=20;
function p(t) {
    return s*16*pow(sin(t), 3);
}

function q(t) {
    return -s*(13*cos(t)-5*cos(2*t)-2*cos(3*t)-cos(4*t));
}

function dp(t) {
    return s*48*cos(t)*pow(sin(t), 2);
}

function dq(t) {
    return -s*(-13*sin(t)+10*sin(2*t)+6*sin(3*t)+4*sin(4*t));
}

function setup() {
    createCanvas(800, 600);
    background(25, 25, 25);
    //noLoop();
    fill(204);
    strokeWeight(4);
}

function draw() {
    let t=map(mouseX, 0, width, -1000, 800);
    //
    stroke(255);
    noFill();
    push();
    translate(width/2, height/2);
    //line(-width/2, 0, width/2, 0);
    //line(0, -height/2, 0, height/2);
    //beginShape();
    //for (let i=-400; i<400; i++) {
    //    vertex(p(i), q(i));
    //}
    //endShape();
    fill(0, 0, 255);
    stroke(255, 255, 128);
    //ellipse(p(t), q(t), 8, 8);
    strokeWeight(1);
    line(p(t)-dp(t)*m, q(t)-dq(t)*m, p(t)+dp(t)*m, q(t)+dq(t)*m);
    pop();
}

function mouseClicked() {
    background(25, 25, 25);
}
