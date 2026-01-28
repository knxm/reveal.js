let n=500;
let m=800;
function f(t) {
    return t;
}

function g(t) {
    return t*t/200-200;
}

function df(t) {
    return 1;
}

function dg(t) {
    return 2*t/200;
}

function ddf(t) {
    return 0;
}

function ddg(t) {
    return 2/200;
}

function vs(t) {
    return df(t)*df(t) + dg(t)*dg(t);
}

function denom(t) {
    return df(t)*ddg(t) - dg(t)*ddf(t);
}

function oscx(t) {
    return f(t) - (dg(t)*vs(t))/denom(t);
}

function oscy(t) {
    return g(t) + (df(t)*vs(t))/denom(t);
}

function osck(t) {
    return (df(t)*ddg(t)-dg(t)*ddf(t))/pow(sqrt(vs(t)), 3);
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
    //ellipse(f(t), g(t), 8, 8);
    strokeWeight(1);
    //line(f(t)-m, g(t)-dg(t)*m, f(t)+m, g(t)+dg(t)*m);
    circle(oscx(t), oscy(t), 1/osck(t));
    pop();
}
