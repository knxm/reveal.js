let n = 5;
let r = 80;
function setup() {
    createCanvas(300, 300);
    background(204);
    noLoop();
}
function draw() {
    let a = width/2;
    let b = height/2;
    let t = TWO_PI/n;
    for (let i=0; i<n; i++) {
	let x = a + r * cos(i*t);
	let y = b + r * sin(i*t);
	line(a, b, x, y);
    }
}