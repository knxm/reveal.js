function preload() {
    font = loadFont("media/SourceCodePro-Regular.ttf");
}

function setup() {
    createCanvas(480, 120);
    textFont(font);
}

function draw() {
    background(102);
    fill(255);
    textSize(32);
    text("That's one small step for man...", 25, 60);
    textSize(16);
    text("That's one small step for man...", 27, 90);
}
