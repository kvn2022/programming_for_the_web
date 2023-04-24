let snow = [];
let gravity;

let zOff = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.5);
}

function draw() {
    background(0, 0, 102);
    snow.push(new SnowFlake());

    zOff += 0.1;

    for (flake of snow) {
        let xOff = flake.pos.x / width;
        let yOff = flake.pos.y / innerHeight;
        let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
        let wind = p5.Vector.fromAngle(wAngle);
        wind.mult(0.1);


        flake.applyForce(gravity);
        flake.applyForce(wind);
        flake.update();
        flake.render();
    }

    for (let i = snow.length - 1; i >= 0; i--) {
        if (snow[i].offScreen()) {
            snow.splice(i, 1);
        }
    }

}