const Line = require("./line");

class Rectangle {
    constructor(diagonalStart, diagonalEnd) {
        this.diagonal = new Line(diagonalStart, diagonalEnd);

        Object.defineProperties(this, {
            diagonal: { writable: false }
        });
    }

    toString() {
        const diagonalStartString = `(${this.diagonal.start.x},${this.diagonal.start.y})`;
        const diagonalEndString = `(${this.diagonal.end.x},${this.diagonal.end.y})`;

        return `[Rectangle ${diagonalStartString} to ${diagonalEndString}]`;
    }
}

module.exports = Rectangle;
