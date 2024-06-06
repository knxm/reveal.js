let i=0;
let array = [0.0, 0.0, 0.0, 0.0, 0.0];
function setup() {
    createCanvas(240, 120);
    textSize(24);
    fill(240);
    stroke(240);
    //frameRate(1);
}
function draw() {
    background(0);
    array[0]=frameRate();
    for (let i=0; i<4; i++) {
	array[i+1]=array[i]
	text(array[i], 10, 24*(i+1));
    }
 }
