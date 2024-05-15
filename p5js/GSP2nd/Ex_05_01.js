let i=0;
function setup(){
    createCanvas(400, 300);
    noLoop();
    frameRate(10);
}
function draw() {
    background(0);
    ellipse(20, 20, 20, 200-i);
}

function mouseClicked() {
    i++;
}
