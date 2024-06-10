function setup() {
    createCanvas(320, 60);
    textSize(24);
    fill(240);
    stroke(240);
    frameRate(30);
    //frameRate(12);
    //frameRate(2);
    //frameRate(0.5);
}
function draw() {
    background(0);
    text(frameRate(), 10, 24);
 }
