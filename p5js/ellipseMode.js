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
    radio.option('0', 'CENTER ');
    radio.option('1', 'RADIUS ');
    radio.option('2', 'CORNER ');
    radio.option('3', 'CORNERS');
    radio.style('width', '110px');
    radio.selected('0');
    radio.position(10, 10);
}
function draw() {
    background(204);
    val=radio.value();
    stroke(0);
    ellipse(cx, cy, rw*2, rh*2);
    switch (val) {
    case '0':
	stroke(0, 0, 200);
	line(cx-rw, cy+rh+offset,  cx+rw, cy+rh+offset);
	line(cx+rw+offset, cy-rh, cx+rw+offset, cy+rh);
	ellipse(cx, cy, 6, 6);
	break;
    case '1':
	stroke(0, 0, 200);
	line(cx-rw, cy,  cx, cy);
	line(cx, cy-rh, cx, cy);
	ellipse(cx, cy, 6, 6);
	break;
    case '2':
	stroke(0, 0, 200);
	line(cx-rw, cy-rh,  cx-rw, cy+rh);
	line(cx-rw, cy-rh, cx+rw, cy-rh);
	ellipse(cx-rw, cy-rh, 6, 6);
	break;
    case '3':
	stroke(150);
	line(cx-rw, cy-rh,  cx-rw, cy+rh);
	line(cx-rw, cy-rh, cx+rw, cy-rh);
	line(cx+rw, cy-rh,  cx+rw, cy+rh);
	line(cx-rw, cy+rh, cx+rw, cy+rh);
	stroke(0, 0, 200);
	ellipse(cx+rw, cy+rh, 6, 6);
	ellipse(cx-rw, cy-rh, 6, 6);
	break;
    default :
	stroke(0);
	ellipse(cx, cy, rw*2, rh*2);
    }
}
