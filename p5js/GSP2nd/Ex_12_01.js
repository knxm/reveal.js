let stats;

function preload() {
    stats = loadTable("media/ortiz.csv");
}

function setup() {
  createCanvas(240, 360);
  textSize(18);
  background(0);
  fill(240); stroke(240);
  for (let i = 0; i < stats.getRowCount(); i++) {
    let year = stats.get(i, 0);
    let homeRuns = stats.get(i, 1);
    let rbi = stats.get(i, 2);
    let average = stats.get(i, 3);
      text(year + " " + homeRuns + " " + rbi + " " + average , 10, 20*(i+1));
  }
}
