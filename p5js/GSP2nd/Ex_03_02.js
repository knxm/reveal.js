let flag=false;
function setup() {
    createCanvas(400, 100);
}

function draw() {
    background(204);
    fill(255);
    if (flag) {
        ellipse(200, 50, 4, 4);
    } else {
        point(200, 50);
    }
}
function mousePressed() {
        flag = !flag;
}
function touchStarted() {
        flag = !flag;
}
