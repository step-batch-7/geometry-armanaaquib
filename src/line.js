class Line {
    constructor(startPoint, endPoint) {
        this.startPoint = { ...startPoint };
        this.endPoint = { ...endPoint };
    }

    toString() {
        return `Line start(${this.startPoint.x},${this.startPoint.y}),end(${this.endPoint.x},${this.endPoint.y})`;
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
