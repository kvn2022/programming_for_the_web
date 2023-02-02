function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, stripeWeight, mainCircleColor, mainCircleStroke, cornerCircleColor1, cornerCircleColor2, triangleColor) {
    //background
    translate(originX, originY);
    fill(primaryColor);
    noStroke();
    rect(0, 0, 200);

    //background blue stripe
    stroke('powderblue');
    noFill();
    strokeWeight(stripeWeight);
    strokeCap(SQUARE)
    line(0, 100, 200, 100);

    //large main circle
    stroke('navy');
    strokeWeight(mainCircleStroke);
    fill(mainCircleColor);
    circle(100, 100, 135)
    
    //corner circles
    stroke(cornerCircleColor1);
    strokeWeight(5);
    fill(cornerCircleColor2);
    circle(35, 35, 50); //top left
    circle(37, 167, 50); //bottom left
    circle(165, 35, 50); //top right
    circle(165, 165, 50); //bottom right

    //gold stripe cutting through main circle
    noFill();
    stroke('goldenrod');
    strokeWeight(stripeWeight);
    strokeCap(SQUARE)
    line(100, 0, 100, 200);

    //triangle
    stroke('white')
    strokeWeight(5);
    fill(triangleColor);
    triangle(50, 125, 150, 125, 100, 55);
}

function draw() {
    createTile(0, 0, 'blue', 25, 'yellow', 5, 'cyan', 'black', 'orange');
    createTile(0, 200, 'green', 50, 'white', 30, 'orange', 'palegreen', 'red');
    createTile(0, 200, 'orange', 5, 'salmon', 60, 'plum', 'sandybrown', 'lime');
    createTile(200, -400, 'violet', 80, 'tomato', 20, 'yellow', 'turquoise', 'khaki');
    createTile(0, 200, 'yellow', 10, 'indigo', 10, 'lightsalmon', 'lightskyblue', 'greenyellow')
    createTile(0, 200, 'darkviolet', 30, 'burlywood', 1, 'deeppink', 'firebrick', 'cyan')
    createTile(200, -400, 'black', 5, 'orange', 5, 'white', 'blue', 'deeppink');
    createTile(0, 200, 'cornflowerblue', 65, 'fuchsia', 65, 'deepskyblue', 'darkseagreen', 'coral')
    createTile(0, 200, 'hotpink', 20, 'lightpink', 40, 'lawngreen', 'lavendar', 'aqua')
}