let piano = new Map();
let started = false;   // AudioContextが有効かどうか

function setup() {
  createCanvas(600, 100);
  textSize(20);
  textAlign(LEFT, CENTER);
}

function addKey(k, f) {
  let s = new p5.Oscillator('sine');
  s.freq(f);
  s.amp(0);
  s.start();        // 音は出さずに発振だけ開始
  piano.set(k, s);  // key → oscillator
}

function startAudio() {
  userStartAudio();   // ★これが重要

  addKey('a', 261.63);
  addKey('s', 293.66);
  addKey('d', 329.63);
  addKey('f', 349.23);
  addKey('j', 392.00);
  addKey('k', 440.00);
  addKey('l', 493.88);
  addKey(';', 523.25);

  started = true;
}

function draw() {
  background(0);
  fill(255);
  text("a s d f j k l ;  = ド レ ミ ファ ソ ラ シ ド", 40, 50);
}

function mousePressed() {
  if (!started) startAudio();
}

function keyPressed() {
  if (!started) {
    startAudio();
    return;
  }
  if (piano.has(key)) {
    piano.get(key).amp(0.4, 0.05);
  }
}

function keyReleased() {
  if (piano.has(key)) {
    piano.get(key).amp(0, 0.1);
  }
}
