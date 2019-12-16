const { Point, arePointsCollinear } = require("./point");

const isInRange = function(range, value) {
    const [start, end] = [Math.min(...range), Math.max(...range)];
    return value >= start && value <= end;
};

class Line {
    constructor(start, end) {
        this.start = new Point(start.x, start.y);
        this.end = new Point(end.x, end.y);
    }

    toString() {
        const startString = `(${this.start.x},${this.start.y})`;
        const endString = `(${this.end.x},${this.end.y})`;

        return `[Line ${startString} to ${endString}]`;
    }

    isEqualTo(other) {
        if (!(other instanceof Line)) return false;

        return (
            (this.start.isEqualTo(other.start) && this.end.isEqualTo(other.end)) ||
            (this.start.isEqualTo(other.end) && this.end.isEqualTo(other.start))
        );
    }

    get length() {
        return this.start.findDistanceTo(this.end);
    }

    get slope() {
        const rise = this.end.y - this.start.y;
        const run = this.end.x - this.start.x;

        const slope = rise / run;

        return slope === -Infinity ? Infinity : slope;
    }

    isParallelTo(other) {
        return (
            other instanceof Line &&
            !arePointsCollinear(this.start, this.end, other.start) &&
            this.slope === other.slope
        );
    }

    findX(y) {
        if (!isInRange([this.start.y, this.end.y], y)) return NaN;

        if (this.slope === 0) return this.start.x;

        return (y - this.start.y) / this.slope + this.start.x;
    }

    findY(x) {
        if (!isInRange([this.start.x, this.end.x], x)) return NaN;

        if (this.slope === Infinity) return this.start.y;

        return this.slope * (x - this.start.x) + this.start.y;
    }

    split() {
        const midPoint = {
            x: (this.start.x + this.end.x) / 2,
            y: (this.start.y + this.end.y) / 2
        };

        const firstHalf = new Line(this.start, midPoint);
        const secondHalf = new Line(midPoint, this.end);

        return [firstHalf, secondHalf];
    }

    hasPoint(other) {
        if (!(other instanceof Point)) return false;

        return this.findX(other.y) === other.x || this.findY(other.x) === other.y;
    }
}

module.exports = { Line };
