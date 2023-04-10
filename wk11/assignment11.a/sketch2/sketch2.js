function setup() {
    createCanvas(600, 600);
    background(255,255,255);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 45);
    console.log(alt);
    stroke('white');
    noFill();
    strokeWeight(3);
    triangle(50, 200, 200, 50, 100, 400);

function mousePressed() {
    noLoop();
   }