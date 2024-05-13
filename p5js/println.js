let c=0;
const strings = ["Hello World", "5", "0.3", "0.70000005"];
function setup() {
    createCanvas(400, 400);
}
function draw() {
    background(0);
    fill(255);
    stroke(255);
    textSize(48);
    for (let i=0; i<c; i++) {
	text(strings[i], 40, 80+50*i);
    }
}

function mouseClicked() {
    c++;
}
