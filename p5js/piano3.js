let keys  = ['a','s','d','f','j','k','l',';'];
let freqs = [261.63, 293.66, 329.63, 349.23,
             392.00, 440.00, 493.88, 523.25];

let piano = new Map();   // key → p5.Oscillator
let started = false;

function setup() {
  createCanvas(600, 100);
  textSize(20);
  textAlign(LEFT, CENTER);
}

function startAudio() {
  userStartAudio();   // ブラウザの音声ロック解除

  // Processing版と同じ for ループ構造
  for (let i = 0; i < keys.length; i++) {
    let s = new p5.Oscillator('sine');
    s.freq(freqs[i]);
    s.amp(0);
    s.start();
    piano.set(keys[i], s);
  }
  started = true;
}

function draw() {
  background(0);
  fill(255);
  text("a s d f j k l ; = ド レ ミ ファ ソ ラ シ ド", 40, 50);
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
    piano.get(key).amp(0.4, 0.05);   // フェードイン
  }
}

function keyReleased() {
  if (piano.has(key)) {
    piano.get(key).amp(0, 0.1);      // フェードアウト
  }
}
