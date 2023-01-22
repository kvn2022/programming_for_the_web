function setup() {
  createCanvas(1000, 1000);
  background(255, 0, 0);
  noStroke();
}

function draw() {
  if (mouseIsPressed) {
    fill(0, 0, 255, 160);
  } else {
    noStroke();
    noFill();
  }
  ellipse(mouseX, mouseY, 100, 100);
}