var stats;

function preload() {
  stats = loadTable("media/ichiro.csv");
}

function setup() {
  for (var i = 0; i < stats.getRowCount(); i++) {
    var year = stats.get(i, 0);
    var homeRuns = stats.get(i, 1);
    var rbi = stats.get(i, 2);
    var average = stats.get(i, 3);
    print(year, homeRuns, rbi, average);
  }
}
