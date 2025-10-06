let x=200;
let y=120;
let w=150;
let h= 150;

function setup() {
    createCanvas(400, 240);
    background(204);
    stroke(0);
    textSize(18);
}
function draw(){
    background(204);
    angle=round(100*atan2(mouseY-y, mouseX-x))/100;
    arc(x, y, w, h, 0, atan2(mouseY-y, mouseX-x));
    if (angle > 0 ) { 
        text("arc(x, y, 0, "+angle+" )", 10, 20);
    } else {
        angle2=round(100*(TWO_PI+angle))/100;
        text("arc(x, y, 0, "+angle2+" ) = arc(x, y, 0, "+angle+")", 10, 20);
    }        
}
