var x = [];  // Declare the array

function setup() {
  createCanvas(200, 200);
  x[0] = 12;     // Assign the first value
  x[1] = 2;      // Assign the second value
}

function draw() {
  textSize(32);
  text("x[0]="+x[0], 10, 32);
  text("x[1]="+x[1], 10, 64);
}
