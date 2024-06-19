let bug; // Declare object

function setup() {
  createCanvas(480, 120);
  background(204);
  fill(255);
  // Create object and pass in parameters
  bug = new Jitter();
}

function draw() {
  bug.move();
  bug.display();
}

function Jitter() {
  this.x = width/2;
  this.y = height/2;
  this.diameter = random(10, 30);
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
    bug.x = width/2;
    bug.y = height/2;
    bug.diameter = random(10, 30);
}

function touchStarted() {
    background(204);
    bug.x = width/2;
    bug.y = height/2;
    bug.diameter = random(10, 30);
}
