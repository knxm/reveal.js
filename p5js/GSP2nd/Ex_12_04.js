let film;

function preload() { 
  film = loadJSON("media/film.json");
}

function setup() {
  createCanvas(480, 120);
  textSize(18);
  background(0);
  fill(240); stroke(240);
  let title = film.title;
  let dir = film.director;
  let year = film.year;
  let rating = film.rating;
  text(title + " by " + dir + ", " + year, 10, 20);
  text("Rating: " + rating, 10, 40);
}
