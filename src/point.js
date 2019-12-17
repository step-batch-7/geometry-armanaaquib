const arePointsEqual = function(pointOne, pointTwo) {
    return pointOne.x === pointTwo.x && pointOne.y === pointTwo.y;
};

const arePointsCollinear = function(pointOne, pointTwo, pointThree) {
    return (
        (pointThree.y - pointTwo.y) * (pointTwo.x - pointOne.x) ===
        (pointTwo.y - pointOne.y) * (pointThree.x - pointTwo.x)
    );
};

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        Object.defineProperties(this, {
            x: { writable: false },
            y: { writable: false }
        });
    }

    toString() {
        return `[Point @(${this.x},${this.y})]`;
    }

    visit(action) {
        return action(this.x, this.y);
    }

    isEqualTo(other) {
        if (!(other instanceof Point)) return false;

        return arePointsEqual(this, other);
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

module.exports = { Point, arePointsCollinear };
