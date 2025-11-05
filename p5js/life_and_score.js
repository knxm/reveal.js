let c;
let fontsize=24;
let life=3;
let score=0;
let x;
let y=0;
let flag=false;
function setup() {
    createCanvas(400, 300);
    textSize(24);
    fill(0);
    c=floor(random(65, 91));
    x=floor(random(fontsize, width-fontsize));
}
function draw() {
    background(204);
    text(char(c), x, y);
    fill(0, 0, 255);
    text(life, width-fontsize, fontsize);
    text(score, fontsize/2, fontsize);
    fill(0);
    if (life > 0) {
        if (flag) {
            y++;
        }
        if (y > height) {
            x=floor(random(fontsize, width-fontsize));
            y=0;
            c=floor(random(65, 91));
            life--;
        }
    } else {
        text("Game Over", width/4, height/2);
        
    }
}
function keyPressed() {
    if (key==char(c)||key==char(c+32)) {
        x=floor(random(fontsize, width-fontsize));
        y=0;
        c=floor(random(65, 91));
        score++;
    }
}
function mousePressed() {
    flag = !flag;
}
