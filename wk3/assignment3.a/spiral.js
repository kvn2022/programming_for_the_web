//function that we can mutate with each cycle of the drawing
let rotateBy = 5;
let valueX = 'deeppink'
let valueY = 'greenyellow'

//setup
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}

//First Layer - White Triangle
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 45);
    console.log(alt);
    stroke('white');
    noFill();
    strokeWeight(3);
    triangle(50, 200, 200, 50, 100, 400);
}

//Second Layer - Gold Circle
function makeArmThree(rotateBy) {
    let alt = Math.round(rotateBy * 10);
    console.log(alt);
    noFill();
    stroke('gold');
    strokeWeight(2);
    ellipse(125, 200, 300, 100);
}

//Third Layer - Aqua Circle
function makeArmTwo(rotateBy) {
    let alt = Math.round(rotateBy / 50);
    console.log(alt);
    noFill();
    stroke('aqua');
    strokeWeight(1);
    ellipse(150, 150, 150, 150);
}

//Radial Ellipse - Green/Pink
//Shape will move on the canvas and change the drawing when user moves mouse around
function makeArmFour(rotateBy) {
    let alt = Math.round(rotateBy * 1);
    console.log(alt);
    fill(valueX);
    stroke(valueY);
    strokeWeight(2)  
    ellipse(mouseX, mouseY, 20, 500);
}

//Leaving a copy of what has been drawn and rotates the canvas
function draw() {
    translate(300, 300);
    rotate(rotateBy); 
    makeArm(rotateBy);
    makeArmTwo(rotateBy);
    makeArmThree(rotateBy);
    makeArmFour(rotateBy);
    rotateBy += 4;    
}

//User clicks mouse, then drawing stops
function mousePressed() {
    noLoop();
   }