class Line {
    constructor(startPoint, endPoint) {
        this.startPoint = {};
        this.endPoint = {};

        this.startPoint.x = startPoint.x;
        this.startPoint.y = startPoint.y;

        this.endPoint.x = endPoint.x;
        this.endPoint.y = endPoint.y;
    }

    toString() {
        return (
            `Start Point(x,y): (${this.startPoint.x},${this.startPoint.y})\n` +
            `End Point(x,y): (${this.endPoint.x},${this.endPoint.y})`
        );
    }

    isEqual(otherLine) {
        let isEqual = this.startPoint.x === otherLine.startPoint.x;
        isEqual = isEqual && this.startPoint.y === otherLine.startPoint.y;
        isEqual = isEqual && this.endPoint.x === otherLine.endPoint.x;
        isEqual = isEqual && this.endPoint.y === otherLine.endPoint.y;

        return isEqual;
    }
}

module.exports = Line;
