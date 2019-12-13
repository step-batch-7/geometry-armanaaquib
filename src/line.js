const arePointsEqual = function(pointOne, pointTwo) {
    return pointOne.x === pointTwo.x && pointOne.y === pointTwo.y;
};

class Line {
    constructor(start, end) {
        this.start = { x: start.x, y: start.y };
        this.end = { x: end.x, y: end.y };
    }

    toString() {
        let printableString = `Line start(${this.start.x},${this.start.y}),`;
        printableString += `end(${this.end.x},${this.end.y})`;
        return printableString;
    }

    isEqualTo(other) {
        if (!(other instanceof Line)) {
            return false;
        }
        return arePointsEqual(this.start, other.start) && arePointsEqual(this.end, other.end);
    }
}

module.exports = Line;
