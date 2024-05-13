var blocks = [];
function setup() {
  createCanvas(400, 400);
  for (var i=10; i <= 30; i+=10) {
    blocks[i] = [];
    for (var j=10; j < = height-10; j+=40) {
      blocks[i][j] = new Block(i, j);
    }
  }
}

function draw() {
  blocks.display();
}

function Block(tempX, tempY) {
  this.x = tempX;
  this.y = tempY;
  this.width=10;
  this.height=40;
  this.display = function() {
    rect(this.x, this.y, this.width, this.height);
  }
  
}