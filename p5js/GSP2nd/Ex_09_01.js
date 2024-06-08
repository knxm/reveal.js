function setup() {
    println("Ready to roll!");
    rollDice(20);
    rollDice(20);
    rollDice(6);
    println("Finished.");
}
function rollDice(numSides) {
    let d = 1 + int(random(numSides));
    println("Rolling... " + d);
}
