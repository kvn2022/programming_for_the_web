let bubble1;
let bubble2;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();
}

function draw() {
    background(0);
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.show();
}

class Bubble {
    constructor() {
        this.x = 500;
        this.y = 200;
    }

    move() {
        this.x = this.x + random(-10, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke('aqua');
        strokeWeight(2);
        noFill();
        ellipse(this.x, this.y, 65, 65);
    }
}