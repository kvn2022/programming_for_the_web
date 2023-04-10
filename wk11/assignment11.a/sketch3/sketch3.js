var angle = 0.5;
var offset = 275;
var scalar = 0;
var speed = .5;

function setup() {
    createCanvas(600, 600);
    fill(255, 99, 71);
    background(0);
}

function draw() {
    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;
    rect(x, y, 15, 15);
    angle += speed * 40;
    scalar += speed;
}

function mousePressed() {
    noLoop();
}