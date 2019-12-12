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
}

module.exports = Line;
