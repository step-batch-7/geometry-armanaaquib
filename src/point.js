class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `[Point @(${this.x},${this.y})]`;
    }

    visit(action) {
        return action(this.x, this.y);
    }

    isEqualTo(other) {
        if (!(other instanceof Point)) return false;

        return this.x === other.x && this.y === other.y;
    }

    clone() {
        return new Point(this.x, this.y);
    }

    findDistanceTo(other) {
        if (!(other instanceof Point)) return NaN;

        const run = this.x - other.x;
        const rise = this.y - other.y;

        return Math.sqrt(run ** 2 + rise ** 2);
    }

    isOn(shape) {
        return shape.hasPoint(this);
    }
}

module.exports = Point;
