let flag=false;
function setup() {
    createCanvas(400, 200);
    textSize(18);
}
function draw() {
    background(204);
    if (flag) {
        ellipse(mouseX, mouseY, 4, 4);
        text("("+int(mouseX)+", "+int(mouseY)+")", 4, 20);
    }
}
function mousePresed() {
    flag = !flag;
}
function touchStarted() {
    flag = !flag;
}
