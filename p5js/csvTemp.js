let table;

let maxTemps = []; // 最高気温
let days;          // 調査日数

function preload() {
  // CSV を読み込む（data フォルダ）
  table = loadTable("yokohama2025temp.csv", "csv");
}

function setup() {
  createCanvas(900, 450);
  textAlign(CENTER, CENTER);
  textSize(12);

  days = table.getRowCount();

  for (let i = 0; i < days; i++) {
    // 2列目（インデックス1）を取得
    let v = table.getNum(i, 1);
    maxTemps.push(v);
  }
}

function draw() {
  background(255);

  // 軸
  stroke(0);
  strokeWeight(2);
  line(60, 400, 860, 400); // x軸
  line(60, 50, 60, 400);  // y軸

  // 折れ線（最高気温）
  stroke(255, 0, 0);
  noFill();
  beginShape();
  for (let i = 0; i < days; i++) {
    let x = map(i, 0, days - 1, 80, 840);
    let y = map(maxTemps[i], 0, 40, 400, 50);
    vertex(x, y);
  }
  endShape();

  // 月ラベル（簡易）
  noStroke();
  fill(0);
  for (let i = 0; i < days; i++) {
    if (i % 30 === 0) {
      let x = map(i, 0, days - 1, 80, 840);
      text(Math.floor(i / 30) + 1 + "月", x, 420);
    }
  }

  // 30度ライン
  let thirty = map(30, 0, 40, 400, 50);
  stroke(255, 0, 0);
  strokeWeight(1);
  line(60, thirty, 860, thirty);

  // タイトル
  noStroke();
  fill(0);
  textSize(16);
  text("横浜の最高気温（2025年度）", width / 2, 20);
}
