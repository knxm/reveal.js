function setup() {
    createCanvas(480, 120);
}

function draw() {
    background(204);
    translate(mouseX - 120, 0);
    beginShape();
    fill(153, 176, 180);
    vertex(50, 120);
    vertex(100, 90);
    vertex(110, 60);
    vertex(80, 20);
    vertex(210, 60);
    vertex(160, 80);
    vertex(200, 90);
    vertex(140, 100);
    vertex(130, 120);
    endShape();    
}
