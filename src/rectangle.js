const Point = require("./point");

class Rectangle {
    constructor(vertexA, vertexC) {
        this.vertexA = new Point(vertexA.x, vertexA.y);
        this.vertexC = new Point(vertexC.x, vertexC.y);

        Object.defineProperties(this, {
            vertexA: { writable: false },
            vertexC: { writable: false }
        });
    }

    toString() {
        const diagonalStartString = `(${this.vertexA.x},${this.vertexA.y})`;
        const diagonalEndString = `(${this.vertexC.x},${this.vertexC.y})`;

        return `[Rectangle ${diagonalStartString} to ${diagonalEndString}]`;
    }
}

module.exports = Rectangle;
