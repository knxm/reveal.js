let n=500;
let m=800;
function p(t) {
    return t;
}

function q(t) {
    return t*t/200-200;
}

function dp(t) {
    return 1;
}

function dq(t) {
    return 2*t/200;
}

function ddp(t) {
    return 0;
}

function ddq(t) {
    return 2/200;
}

function vs(t) {
    return dp(t)*dp(t) + dq(t)*dq(t);
}

function denom(t) {
    return dp(t)*ddq(t) - dq(t)*ddp(t);
}

function oscx(t) {
    return p(t) - (dq(t)*vs(t))/denom(t);
}

function oscy(t) {
    return q(t) + (dp(t)*vs(t))/denom(t);
}

function osck(t) {
    return (dp(t)*ddq(t)-dq(t)*ddp(t))/((sqrt(vs(t)))*(sqrt(vs(t)))*(sqrt(vs(t))))
}

function oscr(t) {
    return 1/abs(osck(t));
}

function setup() {
    createCanvas(800, 600);
    background(25, 25, 25);
    //noLoop();
    fill(204);
    strokeWeight(4);
}

function draw() {
    let t=map(mouseX, 0, width, -800, 800);
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
    stroke(255, 255, 0);
    //ellipse(p(t), q(t), 8, 8);
    strokeWeight(1);
    //line(p(t)-m, q(t)-dq(t)*m, p(t)+m, q(t)+dq(t)*m);
    circle(oscx(t), oscy(t), 1/osck(t));
    pop();
}
