let c=0;
let len=100;
let n=7;
function setup() {
    createCanvas(400, 400);
    textSize(16);
    strokeWeight(2);
}
function draw() {
    background(204);
    strokeWeight(2);
    stroke(0);
    let ox=width/2; oy=height/2;
    fill(0);
    strokeWeight(1);    text("page:"+(c%n)+"/"+(n-1), 10, 20)
    if ((c%n) >=0) {
	ellipse(mouseX, mouseY, 12, 12);
	text("A", mouseX+10, mouseY-10);
    }
    if ((c%n) > 0) {
	fill(255, 255, 0);
	ellipse(ox, oy, 12, 12);
	fill(0);
	text("O", ox-20, oy+20);
    }
    if ((c%n) > 1) {
	arrow(ox, oy, mouseX, mouseY, color(120));
    }
    if ((c%n) > 2) {
	arrow(ox, oy, ox+len, oy, color(0, 0, 255));
	strokeWeight(1); text("e₁", ox+len-5, oy+20);
    }
    if ((c%n) > 3) {
	arrow(ox, oy, ox, oy-len, color(255, 0, 0));
	strokeWeight(1); text("e₂", ox-25, oy-len+5);
    }
    if ((c%n) > 4) {
	arrow(ox, oy, mouseX, oy, color(100, 100, 200));
	strokeWeight(1); text("xe₁", mouseX-5, oy+20);
	stroke(color(180));line(mouseX, oy, mouseX, mouseY);
    }
    if ((c%n) > 5) {
	arrow(ox, oy, ox, mouseY, color(200, 100, 100));
	strokeWeight(1); text("ye₂", ox-30, mouseY);
	stroke(color(180));line(ox, mouseY, mouseX, mouseY);
    }
    /*
    arrow(0, height/2, width, height/2, color(0));
    arrow(width/2, height, width/2, 0, color(0));
    text("x", width-15, height/2+15);
    text("y", width/2-15, 15);
    strokeWeight(1);
    ellipse(mouseX, mouseY, 12, 12);
    stroke(120);
    line(mouseX, mouseY, mouseX, height/2);
    line(mouseX, mouseY, width/2, mouseY);
    */
}
function arrow(x1,  y1, x2, y2, arrowColor) {
    let headSize=20;
    strokeWeight(4);
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

function mousePressed() {
    c++;
}

function keyPressed() {
    c=0;
}
