function setup() {
    createCanvas(320, 60);
    frameRate(4);
    textSize(24);
}
function draw() {
    background(0);
    stroke(240);
    fill(240);
    let r = random(0, mouseX);
    text(r, 20, 20);
}
