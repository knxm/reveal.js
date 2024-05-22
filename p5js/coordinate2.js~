function setup() {
    createCanvas(400, 400);
    textSize(16);
    strokeWeight(2);
}
function draw() {
    background(204);
    stroke(0);
    arrow(0, height/2, width, height/2, color(0));
    arrow(width/2, height, width/2, 0, color(0));
    text("O", width/2-15, height/2+15);
    text("x", width-15, height/2+15);
    text("y", width/2-15, 15);
    text("A("+(mouseX-width/2)/40+", "+(height/2-mouseY)/40+")", mouseX+5, mouseY-5);
    strokeWeight(1);
    ellipse(mouseX, mouseY, 12, 12);
    stroke(120);
    line(mouseX, mouseY, mouseX, height/2);
    line(mouseX, mouseY, width/2, mouseY);
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
