let lines = [];
let maxLines = 7; // 表示する最大行数

function setup() {
  createCanvas(256, 256+18*7);
  textSize(16);
}

function draw() {
  background(25, 31, 38);
  fill(204);
  square(0, 0, 256);
  fill(214);
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], 10, 272 + i * 18);
  }
  addLine(mouseX+" "+mouseY);
}

function addLine(msg) {
  lines.push(msg);
  if (lines.length > maxLines) {
    lines.shift(0);
  }
}
