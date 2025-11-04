var y=0;
function setup() {
    createCanvas(400, 300);
    textSize(24);
    fill(0);
}
function draw() {
    background(204);
    //ellipse(width/2, y, 40, 40);
    text("J", width/2, y);
    y++;
    if (y > height) {
        y=0;
    }
}

