const Point = require("./point");
const Line = require("./line");

const getVertexBandD = function(vertexA, vertexC) {
    const vertexB = new Point(vertexC.x, vertexA.y);
    const vertexD = new Point(vertexA.x, vertexC.y);

    return { vertexB, vertexD };
};

const getDimensions = function(vertexA, vertexC) {
    const { vertexB, vertexD } = getVertexBandD(vertexA, vertexC);

    const length = Math.abs(vertexA.x - vertexB.x);
    const width = Math.abs(vertexA.y - vertexD.y);

    return { length, width };
};

const getSides = function(vertexA, vertexC) {
    const { vertexB, vertexD } = getVertexBandD(vertexA, vertexC);

    const ab = new Line(vertexA, vertexB);
    const bc = new Line(vertexB, vertexC);
    const cd = new Line(vertexC, vertexD);
    const ad = new Line(vertexA, vertexD);

    return [ab, bc, cd, ad];
};

const isInRangeExcluding = function(range, value) {
    const [lowLimit, HighLimit] = [Math.min(...range), Math.max(...range)];
    return value > lowLimit && value < HighLimit;
};

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

    get area() {
        const { length, width } = getDimensions(this.vertexA, this.vertexC);

        return length * width;
    }

    get perimeter() {
        const { length, width } = getDimensions(this.vertexA, this.vertexC);

        return 2 * (length + width);
    }

    isEqualTo(other) {
        if (!(other instanceof Rectangle)) return false;

        const { vertexB, vertexD } = getVertexBandD(this.vertexA, this.vertexC);

        const diagonalOne = new Line(this.vertexA, this.vertexC);
        const diagonalTwo = new Line(vertexB, vertexD);

        const givenDiagonal = new Line(other.vertexA, other.vertexC);

        return diagonalOne.isEqualTo(givenDiagonal) || diagonalTwo.isEqualTo(givenDiagonal);
    }

    hasPoint(other) {
        if (!(other instanceof Point)) return false;

        const sides = getSides(this.vertexA, this.vertexC);

        return sides.some(side => side.hasPoint(other));
    }

    covers(other) {
        if (!(other instanceof Point)) return false;

        return (
            isInRangeExcluding([this.vertexA.x, this.vertexC.x], other.x) &&
            isInRangeExcluding([this.vertexA.y, this.vertexC.y], other.y)
        );
    }
}

module.exports = Rectangle;
