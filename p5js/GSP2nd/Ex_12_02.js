var stats;
var homeRuns = [];

function preload() {
  stats = loadTable("media/ortiz.csv");
}

function setup() {
  createCanvas(480, 120);
  var rowCount = stats.getRowCount();
  homeRuns = [];
  for (var i = 0; i < rowCount; i++) {
    homeRuns[i] = stats.getNum(i, 1);
  }
}

function draw(){
  background(204);
  // Draw background grid for data
  stroke(255);
  line(20, 100, 20, 20);
  line(20, 100, 460, 100);
  for (var i=0; i< homeRuns.length; i++) {
    var x = map(i, 0, homeRuns.length-1, 20, 460);
    line(x, 20, x, 100);
  }
  // Drw lines based on home run data
  noFill();
    stroke(204, 51, 0);
  beginShape();
  for (var i=0; i<homeRuns.length; i++) {
    var x = map(i, 0, homeRuns.length-1, 20, 460);
    var y = map(homeRuns[i], 0, 60, 100, 20);
    vertex(x, y);
  }
  endShape();
}
