class SnowFlake {
    constructor() {
        let x = random(width);
        let y = random(-100, -10);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 5);
        this.acc = createVector();
        this.r = random(1, 36)
    }


    applyForce(force) {
        let f = force.copy();
        f.mult(this.r);
        this.acc.add(f);
    }

    update() {
        this.xOff = sin(this.angle * 2) * 2 * this.r;
        this.vel.add(this.acc);
        this.vel.limit(this.r * 0.2);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    render() {
        stroke(255);
        strokeWeight(this.r);
        point(this.pos.x, this.pos.y);
    }


    offScreen() {
        return (this.pos.y > height + this.r ||
            this.pos.x < -this.r ||
            this.pos.x > width + this.r);
    }
}
