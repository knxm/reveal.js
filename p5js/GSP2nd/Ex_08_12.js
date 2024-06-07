var angle = 0.0;

function setup() {
    createCanvas(120, 140);
    textSize(24);
}

function draw() {
    background(0);
    let sinval = sin(angle);
    stroke(240);
    fill(240);
    text(sinval, 10, 132);
    let gray = map(sinval, -1, 1, 0, 255);
    fill(gray);
    noStroke();
    rect(10, 10, 100, 100);
    angle += 0.1;
}

