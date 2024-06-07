let s, val;
function setup() {
    createCanvas(320, 80);
    s = createSlider(0.5, 60);
    s.position(10, 10);
    s.size(120);
    s.value(30);
}
function draw() {
    background(0);
    stroke(240);
    fill(240);
    val=s.value();
    frameRate(val);
//    textSize(16);
//    text(val, 140, 28);
    textSize(24);
    text(frameRate(), 20, 60);
}
