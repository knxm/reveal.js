function setup() {
    createCanvas(240, 60);
    background(0);
    fill(240);
    stroke(240);
    textSize(24);
    var yourWeight = 132;
    var marsWeight = calculateMars(yourWeight);
    text(marsWeight.toPrecision(4), 10, 30);
}

function calculateMars(w) {
    var newWeight = w * 0.38;
    return newWeight;
}
