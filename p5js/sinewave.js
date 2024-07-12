let osc;
function setup() {
    let canvas = createCanvas(400, 120);
    background(204);

    osc = new p5.Oscillator('sine');
    osc.amp(0.5);
    canvas.mousePressed(play);
}
function draw() {
    background(0);
    var hertz = map(mouseX, 0, width, 20.0, 440.0);
    osc.freq(hertz);
    stroke(204);
    for (var x = 0; x < width; x++) {
	var angle = map(x, 0, width, 0, TWO_PI*hertz);
	var sinValue = sin(angle) * 60;
	line(x, 0, x, height/2 + sinValue);
    }
}


function play() {
    osc.start();
    osc.stop(1);
}
    
