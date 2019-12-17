const { Point } = require("./point");

class Circle {
    constructor(center, radius) {
        this.center = new Point(center.x, center.y);
        this.radius = radius;

        Object.defineProperties(this, {
            center: { writable: false },
            radius: { writable: false }
        });
    }

    toString() {
        return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
    }

    isEqualTo(other) {
        if (!(other instanceof Circle)) return false;

        return this.radius === other.radius && this.center.isEqualTo(other.center);
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }

    get perimeter() {
        return 2 * Math.PI * this.radius;
    }

    hasPoint(other) {
        if (!(other instanceof Point)) return false;

        return this.radius === this.center.findDistanceTo(other);
    }
}

module.exports = { Circle };
