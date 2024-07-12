let osc;
let playing;

function setup() {
  let canvas = createCanvas(400, 120);
  background(204);
//  canvas.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
  osc.amp(0.5);
}
function draw() {
  background(0);
  let hertz = map(mouseX, 0, width, 20.0, 440.0);
  stroke(204);
  for (var x = 0; x < width; x++) {
  	var angle = map(x, 0, width, 0, TWO_PI*hertz);
	  var sinValue = sin(angle) * 60;
	  line(x, 0, x, height/2 + sinValue);
  }
  if (playing) {
    osc.freq(hertz);
		osc.amp(1.0);
  } 
}

function playOscillator() {
  osc.start();
  playing = true;
}

function mousePressed() {
  playOscillator();
}

function mouseReleased() {
  osc.amp(0, 0.5);
  playing = false;
}
