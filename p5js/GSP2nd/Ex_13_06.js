var pitch = 0.01

function setup(){
  createCanvas(710, 400, WEBGL);
}

function draw(){
  background(250); 
  translate(-250 * 2.5, 0, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * pitch);
  rotateX(frameCount * pitch);
  rotateY(frameCount * pitch);
  plane(80);
  pop();
  translate(250, 0, 0);
  push(); 
  rotateZ(frameCount * pitch);
  rotateX(frameCount * pitch);
  rotateY(frameCount * pitch);
  box(80, 80, 80);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * pitch);
  rotateX(frameCount * pitch);
  rotateY(frameCount * pitch);
  cylinder(80, 80);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * pitch);
  rotateX(frameCount * pitch);
  rotateY(frameCount * pitch);
  cone(80, 80);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * pitch);
  rotateX(frameCount * pitch);
  rotateY(frameCount * pitch);
  torus(80, 20);
  pop();
  translate(250, 0, 0);
  push();
  rotateZ(frameCount * pitch);
  rotateX(frameCount * pitch);
  rotateY(frameCount * pitch);
  sphere(80);
  pop();
}
