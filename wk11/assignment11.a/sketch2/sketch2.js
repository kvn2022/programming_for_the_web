var x = []

function setup() {
    createCanvas(600, 600);
    noStroke();
    fill(238, 130, 238, 225);
    for (var i = 0; i < 4000; i++) {
        x[i] = random(-2000, 1000);
    }
}

function draw() {
    background(0);
    for (var i = 0; i < x.length; i++) {
        x[i] += 2.5;
        var y = i * 0.4;
        ellipse(x[i], y, 20, 20);
    }
}
