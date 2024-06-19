var jit;
var bug;

function setup() {
  createCanvas(480, 120);
  background(204);
  fill(255);  
    jit = new Jitter(width*0.33, height/2, 50);
    bug = new Jitter(width*0.66, height/2, 10);
}

function draw() {
  jit.move();
  jit.display();
  bug.move();
  bug.display();
} 

function Jitter(tempX, tempY, tempDiameter) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.speed = 2.5;

    this.move = function() {
	this.x += random(-this.speed, this.speed);
	this.y += random(-this.speed, this.speed);
    }

    this.display = function() {
	ellipse(this.x, this.y, this.diameter, this.diameter);
    } 
}

function mousePressed() {
    background(204);
    jit = new Jitter(width*0.33, height/2, 50);
    bug = new Jitter(width*0.66, height/2, 10);
}

function touchStarted() {
    background(204);
    jit = new Jitter(width*0.33, height/2, 50);
    bug = new Jitter(width*0.66, height/2, 10);
}
