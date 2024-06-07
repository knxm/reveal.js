function setup() {
    createCanvas(320, 60);
    textSize(24);
    fill(240);
    stroke(240);
    frameRate(30); // Thirty frames each second
    //frameRate(12); // Twelve frames each second
    //frameRate(2); // Two frames each second
    //frameRate(0.5); // One frame every two seconds
}
function draw() {
    background(0);
    text(frameRate(), 10, 24);
 }
