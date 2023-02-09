let rectX = 0;
const rectWidth =  75;
let clickCount = 0;
function setup () {
    createCanvas(500, 500);
}

function draw () {
    background('limegreen');
    drawShape();
    rectX += 2;
    if(rectX > width) {
        noLoop();
        text ('Impressive!  Your total score was ' + clickCount, 150, 250); //how do you change the font color? how do you add an exclamation point on the end?
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) &&  (mouseY >= 0 && mouseY <=  75)); {
        clickCount++;
        console.log('Point', clickCount);
    }
}

function drawShape() {
    rect(rectX, 50, rectWidth, 75);
    fill('hotpink');
}