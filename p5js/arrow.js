function setup() {
    createCanvas(400, 400);
    strokeWeight(4);
}
function draw() {
  background(204);
  // テスト用に矢印を描画
  arrow(width/2, height/2, 200+(mouseX-200)/2, 200+(mouseY-200)/2, color(0, 0, 255)); // 青色の矢印
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
