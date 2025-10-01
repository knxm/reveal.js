let w=20;
let WIDTH=400;
let HEIGHT=200;
let m = WIDTH/w
let n = HEIGHT/w
function setup() {
    createCanvas(WIDTH, HEIGHT);
}
function draw() {
    background(204);
    stroke(255);
    fill(204);
    for (i=0; i < m; i++) {
        for (j=0; j < n; j++) {
            rect(i*w, j*w, w, w);
        }
    }
    fill(0);
    let x = int(mouseX/w);
    let y = int(mouseY/w);
    rect(w*x, w*y, w, w);
    stroke(0);
    textSize(18);
    let coordinate = "("+x+", "+y+")"
    if ( x < 17 ) {
        text(coordinate, w*x+20, w*y+16);        
    } else {
        text(coordinate, w*x-50, w*y+16);
    }
}
