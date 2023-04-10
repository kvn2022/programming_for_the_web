/* eslint-disable no-undef */
/* eslint-disable indent */
function setup() {
  createCanvas(600, 600);
}

function draw() {
    background(300);
    for(i = 0;i < 20; i++) {
        fill(i*20, 255-i, i*3, 100)
        ellipse(20, i*20, i*3)
    }
}
