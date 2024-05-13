var stats;
var rbi = [];

function preload() {
  stats = loadTable("http://jsrun.it/assets/E/n/e/c/Enec8");
}

function setup() {
  createCanvas(480, 120);
  var rowCount = stats.getRowCount();
  rbi = [];
  for (var i = 0; i < rowCount; i++) {
    rbi[i] = stats.getNum(i, 2);
  }
}

function draw() {
  background(204);
  stroke(153);
  line(20, 100, 20, 20);
  line(20, 100, 460, 100);
  for (var i = 0; i < rbi.length; i++) {
    var x = map(i, 0, rbi.length-1, 20, 460);
    line(x, 20, x, 100);
  }

  noFill();
  stroke(0);
  beginShape();
  for (var i = 0; i < rbi.length; i++) {
    var x = map(i, 0, rbi.length-1, 20, 460);
    var y = map(rbi[i], 0, 100, 100, 20);
    vertex(x, y);
  }
  endShape();
}
