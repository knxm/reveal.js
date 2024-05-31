let c=0;
function setup() {
    createCanvas(120, 120);
    background(204);  
}

function draw() {
    translate(mouseX, mouseY);
    let scalar = mouseX / 60.0;
    scale(scalar);
    fill(255); strokeWeight(1.0 / scalar); rect(-15, -15, 30, 30);
    if (c%2==1) {
	background(204);
	fill(255); strokeWeight(1.0 / scalar); rect(-15, -15, 30, 30);
	strokeWeight(2.0 / scalar); arrow(0, 0, 40, 0, color(0, 0, 255));
	strokeWeight(2.0 / scalar); arrow(0, 0, 0, 40, color(255, 0, 0));
	stroke(0); fill(255, 255, 0);
	strokeWeight(2.0 / scalar); ellipse(0, 0, 10, 10);
    }
}

function mousePressed() {
    background(204);
    c++;
}

function arrow(x1,  y1, x2, y2, arrowColor) {
    let headSize=10;
    stroke(arrowColor);
    fill(arrowColor);
    // 矢印の線を描く
    line(x1, y1, x2, y2);
    
    // 矢印の角度を計算
    let angle = atan2(y2 - y1, x2 - x1);
    
    // 矢印の頭を描くための三角形のポイントを計算
    let arrowHeadX1 = x2 - headSize * cos(angle - PI/6);
    let arrowHeadY1 = y2 - headSize * sin(angle - PI/6);
    let arrowHeadX2 = x2 - headSize * cos(angle + PI/6);
    let arrowHeadY2 = y2 - headSize * sin(angle + PI/6);
    
    // 三角形の矢印の頭を描く
    line(x2, y2, arrowHeadX1, arrowHeadY1);
    line(x2, y2, arrowHeadX2, arrowHeadY2);
}

