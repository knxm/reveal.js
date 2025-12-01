let star;
function setup() {
    createCanvas(300, 300);
    star1 = new Star(200, 100, 20);
}
function draw() {
    background(0);
    fill(255, 255, 0);
    star1.move();
    star1.checkEdge();
    star1.display();
}
function Star(tmpX, tmpY, tmpD) {
    this.x = tmpX;
    this.y = tmpY;
    this.d = tmpD;
    this.a = 0.0;
    this.r = this.d/2.0;
    this.vx = random(1, 4);
    this.vy = random(1, 4);
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
        star1 = new Star(200, 100, 20);
}
function touchStarted() {
        star1 = new Star(200, 100, 20);
}
