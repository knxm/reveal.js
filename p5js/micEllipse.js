let mic;
let amp;
let diameter=10;

 function setup(){
  let cnv = createCanvas(180, 400);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  noStroke();
  fill(26, 76, 102, 10);
  rect(0, 0, width, height);
  diameter=map(mic.getLevel(), 0, 0.1, 10, height*2)
  fill(255);
  ellipse(width/2, height/2, diameter, diameter);
}
