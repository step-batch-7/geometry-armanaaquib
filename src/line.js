const arePointsEqual = function(pointOne, pointTwo) {
    return pointOne.x === pointTwo.x && pointOne.y === pointTwo.y;
};

const isInRange = function(range, value) {
    const [start, end] = range.sort();
    return value >= start && value <= end;
};

class Line {
    constructor(start, end) {
        this.start = { x: start.x, y: start.y };
        this.end = { x: end.x, y: end.y };
    }

    toString() {
        const startString = `(${this.start.x},${this.start.y})`;
        const endString = `(${this.end.x},${this.end.y})`;

        return `[Line ${startString} to ${endString}]`;
    }

    isEqualTo(other) {
        if (!(other instanceof Line)) return false;

        return arePointsEqual(this.start, other.start) && arePointsEqual(this.end, other.end);
    }

    get length() {
        const run = this.end.x - this.start.x;
        const rise = this.end.y - this.start.y;

        return Math.sqrt(run ** 2 + rise ** 2);
    }

    get slope() {
        const rise = this.end.y - this.start.y;
        const run = this.end.x - this.start.x;

        return rise / run;
    }

    isParallelTo(other) {
        return other instanceof Line && this.slope === other.slope;
    }

    findX(y) {
        if (!isInRange([this.start.y, this.end.y], y)) return NaN;

        if (this.slope === 0) return this.start.x;

        return (y - this.start.y) / this.slope + this.start.x;
    }

    findY(x) {
        if (!isInRange([this.start.x, this.end.x], x)) return NaN;

        if ([Infinity, -Infinity].includes(this.slope)) return this.start.y;

        return this.slope * (x - this.start.x) + this.start.y;
    }
}

module.exports = Line;
