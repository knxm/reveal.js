let weatherData;

function preload() {
  weatherData = loadJSON("media/cincinnati.json");
}

function setup() {
  createCanvas(240, 120);
  textSize(18);
  background(0);
  fill(240); stroke(240);
  let temp = getTemp(weatherData);
  text(temp, 10, 20);
}

function getTemp(data) {
  return data.list[0].main.temp;
}
