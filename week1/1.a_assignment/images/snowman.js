let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "black");
let stroke2 = prompt("enter another basic color in lowercase", "pink");
function setup() {
    createCanvas(1000, 800);
    background("#99CCFF");
    // grid = loadImage("../images/100px_grid.png");
}

function draw() {
    // background(grid);
    // snowman sections
    fill("#00CC33");
    strokeWeight(15);
    stroke(0);
    //bottom body
    ellipse(500, 600, 350);
    // body
    fill("#00CC99");
    strokeWeight(15);
    stroke(0);
    ellipse(500, 425, 235, 235);
    // head
    fill("#00FFCC");
    strokeWeight(16);
    stroke(0);
    ellipse(500, 200, 200);
    // hat brim
    stroke(stroke1);
    strokeWeight(25);
    line(400, 120, 600, 120);
    // hat body
    fill(stroke2)
    quad(500, 50, 600, 50, 550, 120, 450, 120);
    // eyes
    stroke(0);
    strokeWeight(60);
    point(475, 200);
    point(540, 200);
    // nose
    noStroke()
    fill('orange');
    triangle(500, 225, 500, 250, 550, 240);
    // mouth
    stroke('red');
    noFill();
    strokeWeight(10);
    arc(500, 290, 50, 50, PI + QUARTER_PI, TWO_PI);
    //arms
    // left arm
    stroke('#336633');
    strokeWeight(20);
    line(375, 400, 200, 500);
    // right arm
    line(500, 500, 600, 400);
    }

