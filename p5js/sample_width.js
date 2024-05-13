function setup() {
    createCanvas(400, 300);
    background(204);
    noLoop();
}
function draw() {
    let x = width/2;
    let y = height/2;
    let d = 200;
    ellipse(x, y, d, d);
}
