let osc = new Map();
let freq = new Map();
let started = false;   // AudioContextが有効かどうか

function setup() {
  createCanvas(600, 100);
  textSize(20);
  textAlign(LEFT, CENTER);

  freq.set('a', 261.63);
  freq.set('s', 293.66);
  freq.set('d', 329.63);
  freq.set('f', 349.23);
  freq.set('j', 392.00);
  freq.set('k', 440.00);
  freq.set('l', 493.88);
  freq.set(';', 523.25);
}

function startAudio() {
  userStartAudio();   // ★これが重要
  for (let [k, f] of freq) {
    let s = new p5.Oscillator('sine');
    s.freq(f);
    s.amp(0);
    s.start();
    osc.set(k, s);
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
  if (osc.has(key)) {
    osc.get(key).amp(0.4, 0.05);
  }
}

function keyReleased() {
  if (osc.has(key)) {
    osc.get(key).amp(0, 0.1);
  }
}
