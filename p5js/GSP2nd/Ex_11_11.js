let bugs = [];
let x;
let y;
let r;

function setup() {
  createCanvas(240, 120);
  background(204);
  for (var i = 0; i < 33; i++) {
    x = random(width);
    y = random(height);
    r = i + 2;
    bugs[i] = new JitterBug(x, y, r);
  }
}

function draw() {
  for (var i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

function mousePressed() {
  background(204);
  for (var i = 0; i < 33; i++) {
     x = random(width);
     y = random(height);
     r = i + 2;
     bugs[i] = new JitterBug(x, y, r);
  }
}

function touchStarted() {
  background(204);
  for (var i = 0; i < 33; i++) {
     x = random(width);
     y = random(height);
     r = i + 2;
     bugs[i] = new JitterBug(x, y, r);
  }
}

function JitterBug(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 2.5;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }; 
}

