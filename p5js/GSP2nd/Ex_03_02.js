let flag=true;
function setup() {
    createCanvas(400, 100);
}

function draw() {
    background(204);
    fill(0);
    if (flag) {
        point(200, 50);
    } else {
        ellipse(200, 50, 4, 4);
    }
}
function mousePressed() {
        flag = !flag;
}
