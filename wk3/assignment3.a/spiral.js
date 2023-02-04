let rotateBy = 5;

function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    stroke(225);
    strokeWeight(1);
    ellipse(150, 150 + alt, 150 / alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy); // come back to this
    makeArm(rotateBy);
    rotateBy += 5;
}

function mousePressed() {
    noLoop();
}