function setup() {
  createCanvas(400, 200); // Set the size of the window
}

function draw() {
    background(0); // Set background color to white
    strokeWeight(2);
    stroke(255, 255, 0);
    line(20, 0, 20, height);
    line(0, height/2, width, height/2);
    translate(20, height/2); // Translate origin to the middle of the screen
  
 strokeWeight(6);
  stroke(255); // Set stroke color to black
  noFill(); // Don't fill the shape

  beginShape();
  for (let x = 0; x < width; x += 5) {
    if (radians(x)<TWO_PI+0.01) {
    let y = -sin(radians(x)) * 80; // Calculate y-coordinate using sin function
    vertex(x, y);// Draw vertex
    }
  }
  endShape();
}
