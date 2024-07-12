let osc;
function setup() {
    let canvas = createCanvas(200, 100);
    background(204);

    osc = new p5.Oscillator('sine');
    osc.amp(0.5);
    osc.freq(440);
    canvas.mousePressed(play);
}
function draw() {

}

function play() {
    osc.start();
    osc.stop(1);
}
    
