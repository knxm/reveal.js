let ox=200;
let oy=200;
let len=40;

function setup() {
    createCanvas(400, 400);
    textSize(18);
}
function draw() {
    let e1 = createVector(2*len, -len);
    let e2 = createVector(0, -len);
    let p = createVector(mouseX-ox, mouseY-oy);
    background(204);
    fill(255, 255, 0);stroke(0);

    ellipse(ox, oy, 12, 12);
    fill(0);noStroke();
    text("O", ox-20, oy+20);

    arrow(ox, oy, ox+e1.x, oy+e1.y, color(0, 0, 255));
    arrow(ox, oy, ox+e2.x, oy+e2.y, color(255, 0, 0));
    arrow(ox, oy, ox+p.x, oy+p.y, color(120));

    let n1=e1.normalize();
    let n2=e2.normalize();
    let a=p.dot(n1);
    let  b=p.dot(n2);
    let a1=createVector(n1.x, n1.y);
    let a2=createVector(n2.x, n2.y);

    arrow(ox, oy, ox+a1.x, oy+a1.y, color(100, 100, 200));
    arrow(ox, oy, ox+a2.x, oy+a2.y, color(200,100, 100));
}

function arrow(x1,  y1, x2, y2, arrowColor) {
  let headSize=10;
    stroke(arrowColor);
    fill(arrowColor);
    strokeWeight(4);
  
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
