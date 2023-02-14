
const rectWidth = 100;
let startingX = 200;
let startingY = 100;
let rectX = 200;
let rectY = 300;
let myRect = [];
let startingId = 0;

function setup () {
    createCanvas(1000, 500);
    background(0);

    for (let k = 0; k<2; k++) {
        for (let i = 0; i < 4; i++) {
            rect(startingX, startingY, rectWidth);
            myRect.push({x: startingX, y: startingY, id: startingId});
            startingX += 150;
            startingId++
        }
        startingY += 150;
        startingX = 200;
    }

    
    console.log(myRect);
}

function mousePressed() {
    for (let j = 0; j < myRect.length; j++) {
        let distance = dist(mouseX, mouseY, myRect[j].x, myRect[j].y);
        if (distance < rectWidth / 1) {
            console.log('Card has been clicked', myRect[j].id);
        }
    }
}