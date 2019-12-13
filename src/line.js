const arePointsEqual = function(pointOne, pointTwo) {
    return pointOne.x === pointTwo.x && pointOne.y === pointTwo.y;
};

class Line {
    constructor(start, end) {
        this.start = { x: start.x, y: start.y };
        this.end = { x: end.x, y: end.y };
    }

    toString() {
        const startString = `start(${this.start.x},${this.start.y})`;
        const endString = `end(${this.end.x},${this.end.y})`;

        return `Line ${startString},${endString}`;
    }

    isEqualTo(other) {
        if (!(other instanceof Line)) {
            return false;
        }
        return arePointsEqual(this.start, other.start) && arePointsEqual(this.end, other.end);
    }

    get length() {
        return Math.sqrt((this.start.x - this.end.x) ** 2 + (this.start.y - this.end.y) ** 2);
    }

    get slope() {
        return (this.end.y - this.start.y) / (this.end.x - this.start.x);
    }

    isParallelTo(other) {
        if (!(other instanceof Line)) {
            return false;
        }

        return this.slope === other.slope;
    }
}

module.exports = Line;
