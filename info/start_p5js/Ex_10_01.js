var bug; // Declare object

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
  this.x = random(width);
  this.y = random(height);
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


