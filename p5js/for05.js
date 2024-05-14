function setup() {
    createCanvas(400, 200);
    noLoop();
    background(204);
}

function draw() {
    for (let i=0; i<8; i++) {
	if (i%2==0) {
	    fill(0);
	} else {
	    fill(255);
	}
	ellipse(i*30, 30, 20, 20);
   }
}
