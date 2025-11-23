let fontsize=24;
let x;
let y;
let c;
let life=3;
let score=0;
let speed=2.4;
let accel=0.2;
let flag=false;
function initChar() {
    c=floor(random(65, 91));
    x=floor(random(fontsize, width-fontsize));
    y=0;
}
function setup() {
    createCanvas(400, 300);
    textSize(fontsize);
    fill(0);
    initChar();
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
            y+=speed;
        }
        if (y > height) {
	    initChar();
            life--;
        }
    } else {
        text("Game Over", width/4, height/2);
        
    } 
}
function keyPressed() {
    if (life > 0) {
        if (key==char(c)||key==char(c+32)) {
	    initChar();
            score++;
            speed+=accel;
        } else {
            score--;
            speed+=2*accel;
        }
    }
}

function mousePressed() {
    flag = !flag;
    initChar();
    life=3;
    score=0;
    speed=2.4;
}

