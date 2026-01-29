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

function ddp(t) {
    return s*(96*pow(cos(t), 2)*sin(t)-48*pow(sin(t), 3));
}

function ddq(t) {
    return -s*(-13*cos(t)+20*cos(2*t)+18*cos(3*t)+16*cos(4*t));
}

function setup() {
    createCanvas(800, 600);
    background(25, 25, 25);
    fill(204);
    strokeWeight(4);
}

function draw() {
    let t=map(mouseX, 0, width, -800, 800);
    stroke(255);
    noFill();
    push();
    translate(width/2, height/2);
    stroke(255, 128, 128);
    strokeWeight(1);
    beginShape();
    for (let u=-100; u<100; u++) {
        let m=u/s;
        vertex(p(t)+dp(t)*m +(1/2)*ddp(t)*m*m, q(t)+dq(t)*m+ddq(t)*m*m);
    }
    endShape();
    pop();
}

function mouseClicked() {
    background(25, 25, 25);
}
