let stars = [];
function setup() {
    createCanvas(300, 300);
    for (let i =0; i < 40; i++) {
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
    this.R = random(1, 4);
    this.t = random(0, TWO_PI);
    this.vx = this.R * cos(this.t);
    this.vy = this.R * sin(this.t);
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
    for (let i =0; i < 40; i++) {
        stars[i] = new Star(width/2, height/2, 20);
    }
}
function touchStarted() {
    for (let i =0; i < 40; i++) {
        stars[i] = new Star(width/2, height/2, 20);
    }
}
