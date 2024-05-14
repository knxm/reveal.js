let n = 5;
let r = 120;
function setup() {
    createCanvas(400, 400);
    background(204);
    noLoop();
}
function draw() {
    let cx = width/2;
    let cy = height/2;
    let t = TWO_PI/n;
    for (let i=0; i<n; i++) {
	let x = cx + r * cos(i*t);
	let y = cy + r * sin(i*t);
	ellipse(x, y, 20, 20);
    }
}
