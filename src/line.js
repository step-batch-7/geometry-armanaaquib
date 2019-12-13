class Line {
    static arePointsEqual = function(pointOne, pointTwo) {
        return pointOne.x === pointTwo.x && pointOne.y === pointTwo.y;
    };

    constructor(start, end) {
        this.start = { ...start };
        this.end = { ...end };
    }

    toString() {
        let printableString = `Line start(${this.start.x},${this.start.y}),`;
        printableString += `end(${this.end.x},${this.end.y})`;
        return printableString;
    }

    isEqualTo(line) {
        const isLine = line instanceof Line;
        const areStartsEqual = Line.arePointsEqual(this.start, line.start);
        const areEndsEqual = Line.arePointsEqual(this.end, line.end);

        return isLine && areStartsEqual && areEndsEqual;
    }
}

module.exports = Line;
