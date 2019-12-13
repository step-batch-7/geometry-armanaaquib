class Line {
    static arePointsEqual = function(pointOne, pointTwo) {
        return pointOne.x === pointTwo.x && pointOne.y === pointTwo.y;
    };

    constructor(startPoint, endPoint) {
        this.startPoint = { ...startPoint };
        this.endPoint = { ...endPoint };
    }

    toString() {
        return `Line start(${this.startPoint.x},${this.startPoint.y}),end(${this.endPoint.x},${this.endPoint.y})`;
    }

    isEqualTo(line) {
        const isLine = line instanceof Line;
        const areStartsEqual = Line.arePointsEqual(this.startPoint, line.startPoint);
        const areEndsEqual = Line.arePointsEqual(this.endPoint, line.endPoint);

        return isLine && areStartsEqual && areEndsEqual;
    }
}

module.exports = Line;
