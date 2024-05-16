let size=24;
let c=0;
function setup() {
    createCanvas(300, 100);
    fill(255);
    frameRate(5);
    textSize(size);
}
function draw() {
    background(0);
    text("I'm drawing", 20, size);
    text(frameCount, 20, 2*size)
    text("I'm drawing", 20, 3*size);
    text(frameCount+1, 20, 4*size)
}
function mouseClicked() {
    if (c%3==1) {
        frameRate(0);
    } else if (c%3==2) {
        frameRate(60);
    } else {
	frameRate(5);
    }
    c++;
}
