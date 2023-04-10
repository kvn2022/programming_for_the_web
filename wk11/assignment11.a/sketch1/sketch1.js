function setup() {
    createCanvas(600, 600);
    background(255,255,255);
}

function draw() {
    push();
    translate(mouseX, mouseY);
    fill(255, 204, 0);
    rect(1, 0, 80, 80);
    pop();
    translate(100, 10);
}