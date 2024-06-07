let radio;
let val;
let rw=60;
let rh=40;
let cx=240;
let cy=160;
let offset=10;
function setup() {
    createCanvas(360, 240);
    radio = createRadio();
    radio.option('CENTER');
    radio.option('RADIUS');
    radio.option('CORNER');
    radio.option('CORNERS');
    radio.size(200);
    radio.selected('CENTER');
    radio.position(10, 10);
}
function draw() {
    background(204);
    val=radio.value();
    stroke(0);
    ellipse(cx, cy, rw*2, rh*2);
    if (val=='CENTER') {
	stroke(0, 0, 200);
	line(cx-rw, cy+rh+offset,  cx+rw, cy+rh+offset);
	line(cx+rw+offset, cy-rh, cx+rw+offset, cy+rh);
	ellipse(cx, cy, 6, 6);
    }
    if (val=='RADIUS') {
	stroke(0, 0, 200);
	line(cx-rw, cy,  cx, cy);
	line(cx, cy-rh, cx, cy);
	ellipse(cx, cy, 6, 6);
    }
    if (val=='CORNER') {
	stroke(0, 0, 200);
	line(cx-rw, cy-rh,  cx-rw, cy+rh);
	line(cx-rw, cy-rh, cx+rw, cy-rh);
	ellipse(cx-rw, cy-rh, 6, 6);
    }
    if (val=='CORNERS') {
	stroke(150);
	line(cx-rw, cy-rh,  cx-rw, cy+rh);
	line(cx-rw, cy-rh, cx+rw, cy-rh);
	line(cx+rw, cy-rh,  cx+rw, cy+rh);
	line(cx-rw, cy+rh, cx+rw, cy+rh);
	stroke(0, 0, 200);
	ellipse(cx+rw, cy+rh, 6, 6);
	ellipse(cx-rw, cy-rh, 6, 6);
    }
}
