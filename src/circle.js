const { arePointsEqual } = require("./point");

class Circle {
    constructor(center, radius) {
        this.center = { x: center.x, y: center.y };
        this.radius = radius;
    }

    toString() {
        return `[Circle @(${this.center.x},${this.center.y}) radius ${this.radius}]`;
    }

    isEqualTo(other) {
        if (!(other instanceof Circle)) return false;

        return this.radius === other.radius && arePointsEqual(this.center, other.center);
    }
}

module.exports = { Circle };
