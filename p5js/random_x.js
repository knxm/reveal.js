var c;
let fontsize=24;
var x;
var y=0;
function setup() {
    createCanvas(400, 300);
    textSize(24);
    fill(0);
    c=floor(random(65, 91));
    x=floor(random(fontsize, width-fontsize));
}
function draw() {
    background(204);
    //ellipse(width/2, y, 40, 40);
    text(char(c), x, y);
    y++;
    if (y > height) {
        y=0;
        c=floor(random(65, 91));
        x=floor(random(fontsize, width-fontsize));
    }
}
