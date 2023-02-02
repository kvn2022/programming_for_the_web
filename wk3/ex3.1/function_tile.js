function setup() {
    createCanvas(200, 200);
}
function createTile() {
    //background
    translate(0, 0);
    fill('goldenrod');
    noStroke();
    rect(0, 0, 200);

    //background blue stripe
    stroke('powderblue');
    noFill();
    strokeWeight(20);
    line(0, 100, 200, 100);

    //large main circle
    stroke('navy');
    strokeWeight(10);
    fill('orangered');
    circle(100, 100, 135)
    
    //corner circles
    stroke('navy');
    strokeWeight(5);
    fill('orangered');
    circle(35, 35, 50); //top left
    circle(37, 167, 50); //bottom left
    circle(165, 35, 50); //top right
    circle(165, 165, 50); //bottom right

    //gold stripe cutting through main circle
    noFill();
    stroke('goldenrod');
    strokeWeight(15);
    line(100, 0, 100, 200);

    //triangle
    stroke('white')
    strokeWeight(5);
    fill('mediumspringgreen');
    triangle(50, 125, 150, 125, 100, 55);
}

function draw() {
    createTile();
}