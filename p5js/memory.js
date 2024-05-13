let c=0;
let start=4;
let h=140;
let s=20;
let n=6;
const data1="00000001"
const data2="00000011"
let darray1=data1.split('')
let darray2=data2.split('')
function preload() {
  font = loadFont("media/static/SourceCodePro-Regular.ttf");
}
function setup() {
    createCanvas(400, 200);
    textSize(16);
    background(204);
    textFont(font);
}

function draw() {
    for (let i=0; i<20; i++) {
	fill('white')
	rect(i*20, h, 20, 20);
    }
    if (c%n==1) {
	rect(start*20, h-30, 30, 30);
	fill('black')
	text("int x;", start*20, s*(c%n));
	text("x", 10+start*20, h-8);
	for (let i=start; i<start+8; i++){
	    fill('yellow');
	    rect(i*20, h, 20, 20);
	}
    }
    if (c%n==2) {
        fill('black')
	text("x = 1;  // 0d1 = 0b00000001", start*20, s*(c%n));
	for (let j=0; j<8; j++) {
            text(darray1[j], 6+(start+j)*20, h+16);
	}
    }
    if (c%n==3) {
        fill('black')
	text("x += 2; // 0d2 = 0b00000010", start*20, s*(c%n));
	for (let j=0; j<8; j++) {
	    text(darray2[j], 6+(start+j)*20, h+16);
	}
    }
    if (c%n==4) {
        fill('black')
	text("println(x);", start*20, s*(c%n));
	for (let j=0; j<8; j++) {
	    text(darray2[j], 6+(start+j)*20, h+16);
	}
    }
    if (c%n==5) {
        fill('black')
	text("→3     // 0d3 = 0b00000011", start*20, s*(c%n));
	for (let j=0; j<8; j++) {
	    text(darray2[j], 6+(start+j)*20, h+16);
	}
    }
}

function mouseClicked() {
    c++;
}
