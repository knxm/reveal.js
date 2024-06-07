function setup() {
    createCanvas(320, 60);
    textSize(24);
}
function draw() {
    background(0);
    fill(240);
    stroke(240);
    let m = millis();
    text(m, 20, 24);
}
