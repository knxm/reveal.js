let flag=false;
let y=0;
function setup() {
    createCanvas(400, 300);
}
function draw() {
    background(204);
    ellipse(width/2, y, 40, 40);
    if (flag) {
        y++;
    }
}
function mousePressed() {
    flag = !flag;
}
