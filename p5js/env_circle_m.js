let n=500;
let m=800;
function setup() {
    createCanvas(800, 400);
    background(25, 25, 25);
    //noLoop();
    noFill();
    strokeWeight(4);
}

function draw() {
    let t=map(mouseX, 0, width, -1000, 800);
    //
    stroke(255);
    noFill();
    push();
    translate(width/2, height/2);
    stroke(192, 192, 255);
    strokeWeight(1);
    ellipse(t, 0, 200, 200);
    pop();
}

function mousePressed() {
    background(25, 25, 25);
}

function keyPressed() {
    if (key==='a'||'A') {
        push();
        translate(width/2, height/2);
        line(-width, 100, width, 100);
        line(-width, -100, width, -100);
        pop();
    }
}
