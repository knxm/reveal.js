let stars = [];
function setup() {
    createCanvas(300, 300);
    for (let i =0; i < 100; i++) {
        stars[i] = new Star(width/2, height/2, 20);
    }
}
function draw() {
    background(0);
    fill(255, 255, 0);
    for (let i=0; i < stars.length; i++) {
        stars[i].move();
        stars[i].checkEdge();
        stars[i].display();
    }
}
function Star(tmpX, tmpY, tmpD) {
    this.x = tmpX;
    this.y = tmpY;
    this.d = tmpD;
    this.a = 0.0;
    this.r = this.d/2.0;
    this.vx = ((random(1) < 0.5) ? -1: 1) * random(0.1, 4);
    this.vy = ((random(1) < 0.5) ? -1: 1) * random(0.1, 4);
    this.display = function() {
        noStroke();
        push();
        translate(this.x, this.y);
        rotate(this.a);
        beginShape();
        for (let i=0; i < 5; i++) {
            let t = - HALF_PI + 2*i*TWO_PI/5;
            vertex(this.r*cos(t), this.r*sin(t));
        }
        endShape(CLOSE);
        pop();
        this.a+=0.1;
    }
    this.move = function() {
        this.x += this.vx;
        this.y += this.vy;
    }
    this.checkEdge = function() {
      // 左右の壁                      
      if (this.x < this.r || this.x > width - this.r) {
        this.vx *= -1; 
      }
      // 上下の壁
      if (this.y < this.r || this.y > height - this.r) {
        this.vy *= -1; 
      }
    }   
}

function mousePressed() {
    for (let i =0; i < 100; i++) {
        stars[i] = new Star(width/2, height/2, 20);
    }
}
function touchStarted() {
    for (let i =0; i < 100; i++) {
        stars[i] = new Star(width/2, height/2, 20);
    }
}
