let n=500;
let m=800;
function p(t) {
    return t;
}

function q(t) {
    return t*t/200-200;
}

function dq(t) {
    return 2*t/200;
}

function setup() {
    createCanvas(800, 600);
    //noLoop();
    fill(204);
    strokeWeight(4);
}

function draw() {
    let t=map(mouseX, 0, width, -400, 400);
    background(25, 25, 25);
    stroke(255);
    noFill();
    push();
    translate(width/2, height/2);
    //line(-width/2, 0, width/2, 0);
    //line(0, -height/2, 0, height/2);
    beginShape();
    for (let i=-400; i<400; i++) {
        vertex(p(i), q(i));
    }
    endShape();
    fill(0, 0, 255);
    stroke(255, 255, 0);
    ellipse(p(t), q(t), 8, 8);
    line(p(t)-m, q(t)-dq(t)*m, p(t)+m, q(t)+dq(t)*m);
    pop();
}
