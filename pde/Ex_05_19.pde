int x = 215;

void setup() {
  size(480, 120);
}

void draw() {
  if (keyPressed && (key == CODED)) { // それはコード化されたキーか
    if (keyCode == LEFT) { // それは左方向キーか
      x--;
    } else if (keyCode == RIGHT) { // それは右方向キーか
      x++;
    }
  }
  rect(x, 45, 50, 50);
}