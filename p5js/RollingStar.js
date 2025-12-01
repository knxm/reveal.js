// クラス Star のオブジェクト star1 を作成
let star1;
function setup() {
  createCanvas(300, 300);
  // オブジェクト star1 の初期化
  star1 = new Star(200, 100, 20);
}
function draw() {
  background(0);
  fill(255, 255, 0);
  // オブジェクト star1 の表示
  star1.display();
}
// クラスの作成
function Star(tmpX, tmpY, tmpD) {
    // フィールドの代入
    this.x = tmpX;
    this.y = tmpY;
    this.d = tmpD;
    this.a = 0.0;      
// メソッドの追加
    this.display = function() {
        noStroke();
        push();
        translate(this.x, this.y);
        rotate(this.a);
        beginShape();
        for (let i=0; i < 5; i++) {
            let t = - HALF_PI + 2*i*TWO_PI/5;
            vertex((this.d/2.0)*cos(t), (this.d/2.0)*sin(t));
        }
        endShape(CLOSE);
        pop();
        this.a+=0.1;
    }
}
